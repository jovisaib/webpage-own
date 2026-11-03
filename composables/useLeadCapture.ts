import { leadSubject, leadText } from '~/utils/lead'
import type { LeadContext, LeadPayload } from '~/utils/lead'
import type { LeadAttribution } from '~/plugins/lead-attribution.client'

export type LeadInput = Omit<LeadPayload, 'context'>

interface LeadResponse {
  delivered: boolean
  fallback?: { subject: string; text: string }
}

/**
 * Shared lead submission for every form on the site.
 *
 * 1. POST to `/api/lead`, which enriches the company, emails the team and
 *    (with consent) subscribes to the newsletter.
 * 2. If the server could not send the email, or is unreachable, the same
 *    source-tagged email is sent through Web3Forms from the browser.
 *
 * Resolves with how the lead was delivered; throws if every channel failed so
 * the form can offer a mailto link instead.
 */
export function useLeadCapture() {
  const config = useRuntimeConfig()
  const attribution = useState<LeadAttribution | null>('lead-attribution', () => null)

  function context(): LeadContext {
    const a = attribution.value
    return {
      pageUrl: window.location.href,
      pageTitle: document.title,
      landingUrl: a?.landingUrl,
      referrer: a?.referrer,
      utm: a?.utm || {},
      clickIds: a?.clickIds || {},
      submittedAt: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: navigator.language,
    }
  }

  async function submitLead(input: LeadInput): Promise<'server' | 'web3forms'> {
    const lead: LeadPayload = { ...input, context: context() }
    if (lead.botcheck) return 'server'

    let fallback: LeadResponse['fallback']
    try {
      const res = await $fetch<LeadResponse>('/api/lead', { method: 'POST', body: lead, timeout: 30_000 })
      if (res.delivered) return 'server'
      fallback = res.fallback
    } catch (err) {
      console.warn('Lead API unavailable, using Web3Forms', err)
    }

    if (!config.public.web3formsKey) throw new Error('No lead delivery channel is configured')
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: config.public.web3formsKey,
        subject: fallback?.subject || leadSubject(lead),
        from_name: `Allometrik website · ${lead.sourceLabel}`,
        name: lead.name,
        email: lead.email,
        replyto: lead.email,
        message: fallback?.text || leadText(lead),
        botcheck: false,
      }),
    })
    const result = await res.json()
    if (!result.success) throw new Error(result.message || 'Web3Forms submission failed')
    return 'web3forms'
  }

  return { submitLead }
}
