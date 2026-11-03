/**
 * Lead capture contract shared by the browser (`useLeadCapture`) and the
 * `/api/lead` server route, so the email looks the same whether it is sent
 * by the server or by the Web3Forms fallback.
 */

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
export const CLICK_ID_KEYS = ['gclid', 'fbclid', 'li_fat_id', 'msclkid'] as const

export interface LeadAnswer {
  label: string
  value: string
}

export interface LeadContext {
  pageUrl: string
  pageTitle?: string
  landingUrl?: string
  referrer?: string
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>
  clickIds: Partial<Record<(typeof CLICK_ID_KEYS)[number], string>>
  submittedAt: string
  timezone?: string
  locale?: string
  visitorCountry?: string
}

export interface LeadPayload {
  /** Machine tag, e.g. `voice`, `contact`. Used for routing and newsletter tags. */
  source: string
  /** Human label for the subject line, e.g. `Voice`. */
  sourceLabel: string
  /** Name of the form or lead magnet, e.g. `Voice Readiness Check`. */
  formName: string
  name: string
  email: string
  company?: string
  website?: string
  /** Short headline for the subject line, e.g. the chosen use case. */
  summary?: string
  answers: LeadAnswer[]
  newsletter: boolean
  context: LeadContext
  botcheck?: boolean
}

export interface LeadEnrichment {
  status: 'llm' | 'metadata' | 'skipped'
  note?: string
  domain?: string
  url?: string
  companyName?: string
  whatTheyDo?: string
  industry?: string
  sizeSignals?: string
  country?: string
  fitNotes?: string
  model?: string
}

export interface LeadDelivery {
  newsletter?: 'subscribed' | 'not-requested' | 'not-configured' | 'failed'
}

export function leadSubject(lead: Pick<LeadPayload, 'sourceLabel' | 'company' | 'name' | 'summary'>) {
  const who = lead.company?.trim() || lead.name.trim()
  return `[Lead · ${lead.sourceLabel}] ${who}${lead.summary ? ` — ${lead.summary}` : ''}`
}

function rows(pairs: [string, string | undefined][]) {
  return pairs.filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v}`)
}

export function leadSections(lead: LeadPayload, enrichment?: LeadEnrichment, delivery: LeadDelivery = {}) {
  const c = lead.context
  const utm = Object.entries(c.utm || {})
    .filter(([, v]) => v)
    .map(([k, v]) => `${k.replace('utm_', '')}=${v}`)
    .join(', ')
  const clickIds = Object.entries(c.clickIds || {})
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join(', ')

  const source = rows([
    ['Source', `${lead.formName} (${lead.source})`],
    ['Page', c.pageUrl],
    ['Landing page', c.landingUrl && c.landingUrl !== c.pageUrl ? c.landingUrl : undefined],
    ['Referrer', c.referrer || '(direct / none)'],
    ['UTM', utm || '(none)'],
    ['Click IDs', clickIds || undefined],
    ['Submitted', `${c.submittedAt}${c.timezone ? ` (visitor timezone ${c.timezone})` : ''}`],
    ['Visitor country (IP)', c.visitorCountry],
    ['Browser language', c.locale],
    [
      'Newsletter consent',
      lead.newsletter ? `yes${delivery.newsletter ? ` (beehiiv: ${delivery.newsletter})` : ''}` : 'no',
    ],
  ])

  const profile = rows([
    ['Name', lead.name],
    ['Email', lead.email],
    ['Company', lead.company],
    ['Website', lead.website],
    ...lead.answers.map((a): [string, string] => [a.label, a.value]),
  ])

  let company: string[]
  if (!enrichment || enrichment.status === 'skipped') {
    company = [`Enrichment skipped${enrichment?.note ? `: ${enrichment.note}` : ''}`]
    if (enrichment?.domain) company.unshift(`Domain: ${enrichment.domain}`)
  } else {
    company = rows([
      ['Domain', enrichment.domain],
      ['Company', enrichment.companyName],
      ['What they do', enrichment.whatTheyDo],
      ['Industry', enrichment.industry],
      ['Size signals', enrichment.sizeSignals],
      ['Country', enrichment.country],
      ['Fit notes', enrichment.fitNotes],
      [
        'Method',
        enrichment.status === 'llm'
          ? `LLM summary of ${enrichment.url}${enrichment.model ? ` (${enrichment.model})` : ''}`
          : `Website metadata only${enrichment.note ? ` (${enrichment.note})` : ''}`,
      ],
    ])
  }

  return [
    { title: 'Source', lines: source },
    { title: 'Lead profile', lines: profile },
    { title: 'Company enrichment', lines: company },
  ]
}

export function leadText(lead: LeadPayload, enrichment?: LeadEnrichment, delivery?: LeadDelivery) {
  return leadSections(lead, enrichment, delivery)
    .map((s) => `${s.title.toUpperCase()}\n${s.lines.join('\n')}`)
    .join('\n\n')
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function leadHtml(lead: LeadPayload, enrichment?: LeadEnrichment, delivery?: LeadDelivery) {
  const sections = leadSections(lead, enrichment, delivery)
    .map((s) => {
      const body = s.lines
        .map((line) => {
          const i = line.indexOf(': ')
          const [k, v] = i > 0 ? [line.slice(0, i), line.slice(i + 2)] : ['', line]
          const value = /^https?:\/\//.test(v) ? `<a href="${escapeHtml(v)}">${escapeHtml(v)}</a>` : escapeHtml(v).replace(/\n/g, '<br>')
          return `<tr><td style="padding:6px 16px 6px 0;color:#686b73;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 0;color:#0c0d0f">${value}</td></tr>`
        })
        .join('')
      return `<h2 style="margin:28px 0 8px;font:600 12px/1.4 ui-monospace,Menlo,monospace;letter-spacing:.12em;text-transform:uppercase;color:#9c5226">${escapeHtml(s.title)}</h2><table style="border-collapse:collapse;font:14px/1.5 -apple-system,Segoe UI,Helvetica,Arial,sans-serif">${body}</table>`
    })
    .join('')
  return `<div style="max-width:680px;padding:8px 4px">${sections}</div>`
}
