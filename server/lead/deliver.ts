import type { LeadPayload } from '../../utils/lead'

type Env = Record<string, string | undefined>
type Fetch = typeof fetch

export function emailConfigured(env: Env) {
  return !!env.RESEND_API_KEY
}

export async function sendLeadEmail(
  msg: { subject: string; text: string; html: string; replyTo: string },
  env: Env,
  fetchImpl: Fetch = fetch,
) {
  const res = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(8_000),
    headers: { 'content-type': 'application/json', authorization: `Bearer ${env.RESEND_API_KEY}` },
    body: JSON.stringify({
      from: env.LEAD_EMAIL_FROM || 'Allometrik Leads <leads@allometrik.com>',
      to: (env.LEAD_EMAIL_TO || 'hello@allometrik.com').split(',').map((s) => s.trim()),
      reply_to: msg.replyTo,
      subject: msg.subject,
      text: msg.text,
      html: msg.html,
    }),
  })
  if (!res.ok) throw new Error(`Resend HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
}

/** Subscribes to beehiiv and tags the subscription, e.g. `source:voice`. Callers must only invoke this with explicit consent. */
export async function subscribeNewsletter(lead: LeadPayload, env: Env, fetchImpl: Fetch = fetch) {
  if (!env.BEEHIIV_API_KEY || !env.BEEHIIV_PUBLICATION_ID) return 'not-configured' as const
  const base = `https://api.beehiiv.com/v2/publications/${encodeURIComponent(env.BEEHIIV_PUBLICATION_ID)}`
  const headers = { 'content-type': 'application/json', authorization: `Bearer ${env.BEEHIIV_API_KEY}` }
  const utm = lead.context.utm
  const res = await fetchImpl(`${base}/subscriptions`, {
    method: 'POST',
    signal: AbortSignal.timeout(6_000),
    headers,
    body: JSON.stringify({
      email: lead.email,
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: utm.utm_source || 'allometrik.com',
      utm_medium: utm.utm_medium || 'website',
      utm_campaign: utm.utm_campaign || `lead-${lead.source}`,
      referring_site: lead.context.pageUrl,
    }),
  })
  if (!res.ok) throw new Error(`beehiiv HTTP ${res.status}`)
  const data: any = await res.json().catch(() => ({}))
  const id = data?.data?.id
  if (id) {
    const tags = [`source:${lead.source}`, 'lead']
    const tagRes = await fetchImpl(`${base}/subscriptions/${encodeURIComponent(id)}/tags`, {
      method: 'POST',
      signal: AbortSignal.timeout(6_000),
      headers,
      body: JSON.stringify({ tags }),
    })
    if (!tagRes.ok) console.warn('[lead] beehiiv tagging failed', tagRes.status)
  }
  return 'subscribed' as const
}
