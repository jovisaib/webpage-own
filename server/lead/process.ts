import { CLICK_ID_KEYS, UTM_KEYS, leadHtml, leadSubject, leadText } from '../../utils/lead'
import type { LeadDelivery, LeadEnrichment, LeadPayload } from '../../utils/lead'
import { emailConfigured, sendLeadEmail, subscribeNewsletter } from './deliver'
import { enrichLead } from './enrich'

type Env = Record<string, string | undefined>
type Fetch = typeof fetch

export interface LeadResult {
  ok: boolean
  /** True when the email to the team was sent by the server. */
  delivered: boolean
  newsletter: NonNullable<LeadDelivery['newsletter']>
  /** Present when the server could not send the email; the browser sends it through Web3Forms instead. */
  fallback?: { subject: string; text: string }
}

const str = (v: unknown, max = 300) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const optional = (v: unknown, max = 300) => str(v, max) || undefined
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function pick<K extends string>(input: unknown, keys: readonly K[]) {
  const out: Partial<Record<K, string>> = {}
  const obj = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  for (const k of keys) {
    const v = str(obj[k], 200)
    if (v) out[k] = v
  }
  return out
}

/** Normalises untrusted input into a `LeadPayload`, or returns an error message. */
export function parseLead(body: any): LeadPayload | string {
  if (!body || typeof body !== 'object') return 'Invalid body'
  const source = str(body.source, 40).toLowerCase()
  if (!/^[a-z0-9-]+$/.test(source)) return 'Invalid source'
  const name = str(body.name, 120)
  const email = str(body.email, 200).toLowerCase()
  if (name.length < 2) return 'Name is required'
  if (!EMAIL.test(email)) return 'A valid email is required'
  const ctx = body.context && typeof body.context === 'object' ? body.context : {}
  const answers = (Array.isArray(body.answers) ? body.answers : [])
    .slice(0, 30)
    .map((a: any) => ({ label: str(a?.label, 80), value: str(a?.value, 3000) }))
    .filter((a: { label: string; value: string }) => a.label && a.value)

  return {
    source,
    sourceLabel: str(body.sourceLabel, 40) || source,
    formName: str(body.formName, 80) || source,
    name,
    email,
    company: optional(body.company, 160),
    website: optional(body.website, 200),
    summary: optional(body.summary, 120),
    answers,
    newsletter: body.newsletter === true,
    botcheck: body.botcheck === true,
    context: {
      pageUrl: str(ctx.pageUrl, 600),
      pageTitle: optional(ctx.pageTitle, 200),
      landingUrl: optional(ctx.landingUrl, 600),
      referrer: optional(ctx.referrer, 600),
      utm: pick(ctx.utm, UTM_KEYS),
      clickIds: pick(ctx.clickIds, CLICK_ID_KEYS),
      submittedAt: str(ctx.submittedAt, 40) || new Date().toISOString(),
      timezone: optional(ctx.timezone, 60),
      locale: optional(ctx.locale, 40),
    },
  }
}

export async function processLead(lead: LeadPayload, env: Env, fetchImpl: Fetch = fetch): Promise<LeadResult> {
  if (lead.botcheck) return { ok: true, delivered: true, newsletter: 'not-requested' }

  const [enrichment, newsletter] = await Promise.all([
    enrichLead(lead, env, fetchImpl).catch((err): LeadEnrichment => ({ status: 'skipped', note: (err as Error).message })),
    lead.newsletter
      ? subscribeNewsletter(lead, env, fetchImpl).catch((err) => {
          console.error('[lead] beehiiv subscribe failed', err)
          return 'failed' as const
        })
      : Promise.resolve('not-requested' as const),
  ])

  const delivery: LeadDelivery = { newsletter }
  const subject = leadSubject(lead)
  const text = leadText(lead, enrichment, delivery)

  if (emailConfigured(env)) {
    try {
      await sendLeadEmail({ subject, text, html: leadHtml(lead, enrichment, delivery), replyTo: lead.email }, env, fetchImpl)
      return { ok: true, delivered: true, newsletter }
    } catch (err) {
      console.error('[lead] email delivery failed', err)
    }
  }
  return { ok: true, delivered: false, newsletter, fallback: { subject, text } }
}
