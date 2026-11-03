import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'
import type { LeadEnrichment, LeadPayload } from '../../utils/lead'

type Env = Record<string, string | undefined>
type Fetch = typeof fetch

const FREE_MAIL = new Set([
  'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com', 'live.com', 'msn.com', 'yahoo.com', 'yahoo.es',
  'icloud.com', 'me.com', 'aol.com', 'proton.me', 'protonmail.com', 'gmx.com', 'gmx.de', 'web.de', 'mail.com',
  'yandex.com', 'zoho.com', 'hotmail.es', 'outlook.es',
])

const TLD_COUNTRY: Record<string, string> = {
  ae: 'United Arab Emirates', sa: 'Saudi Arabia', qa: 'Qatar', kw: 'Kuwait', bh: 'Bahrain', om: 'Oman', eg: 'Egypt',
  es: 'Spain', mx: 'Mexico', ar: 'Argentina', co: 'Colombia', cl: 'Chile', pe: 'Peru', br: 'Brazil', uk: 'United Kingdom',
  de: 'Germany', fr: 'France', it: 'Italy', pt: 'Portugal', nl: 'Netherlands', ch: 'Switzerland', at: 'Austria',
  ie: 'Ireland', be: 'Belgium', in: 'India', au: 'Australia', ca: 'Canada',
}

const MAX_HTML_BYTES = 600_000
const FETCH_TIMEOUT_MS = 5_000
const LLM_TIMEOUT_MS = 12_000

/** Pick the domain to research: the submitted website first, then a non-free-mail email domain. */
export function researchDomain(lead: Pick<LeadPayload, 'website' | 'email'>): string | undefined {
  const fromWebsite = lead.website?.trim()
  if (fromWebsite) {
    try {
      const url = new URL(/^https?:\/\//i.test(fromWebsite) ? fromWebsite : `https://${fromWebsite}`)
      return url.hostname.toLowerCase().replace(/^www\./, '')
    } catch {
      /* fall through to the email domain */
    }
  }
  const domain = lead.email.split('@')[1]?.toLowerCase().trim()
  if (domain && !FREE_MAIL.has(domain)) return domain
  return undefined
}

function isPrivateAddress(ip: string) {
  if (isIP(ip) === 6) {
    const v = ip.toLowerCase()
    if (v.startsWith('::ffff:')) return isPrivateAddress(v.slice(7))
    return v === '::1' || v === '::' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe8') || v.startsWith('fe9') || v.startsWith('fea') || v.startsWith('feb')
  }
  const [a, b] = ip.split('.').map(Number) as [number, number]
  return (
    a === 0 || a === 10 || a === 127 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 198 && (b === 18 || b === 19)) || a >= 224
  )
}

/** Only public hostnames on default ports; never IP literals, localhost or private ranges. */
async function assertPublicUrl(raw: string) {
  const url = new URL(raw)
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('unsupported protocol')
  if (url.port || url.username || url.password) throw new Error('unsupported URL')
  const host = url.hostname.toLowerCase()
  if (isIP(host) || !host.includes('.') || host.endsWith('.local') || host.endsWith('.internal') || host === 'localhost') {
    throw new Error('host not allowed')
  }
  const addresses = await lookup(host, { all: true })
  if (!addresses.length || addresses.some((a) => isPrivateAddress(a.address))) throw new Error('host resolves to a private address')
  return url
}

async function readCapped(res: Response) {
  const reader = res.body?.getReader()
  if (!reader) return ''
  const chunks: Uint8Array[] = []
  let size = 0
  while (size < MAX_HTML_BYTES) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    size += value.byteLength
  }
  reader.cancel().catch(() => {})
  return new TextDecoder().decode(Buffer.concat(chunks).subarray(0, MAX_HTML_BYTES))
}

async function fetchHomepage(domain: string, fetchImpl: Fetch) {
  let current = `https://${domain}/`
  const signal = AbortSignal.timeout(FETCH_TIMEOUT_MS)
  for (let hop = 0; hop < 4; hop++) {
    await assertPublicUrl(current)
    const res = await fetchImpl(current, {
      redirect: 'manual',
      signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AllometrikLeadBot/1.0; +https://allometrik.com)',
        Accept: 'text/html,application/xhtml+xml',
      },
    })
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      current = new URL(res.headers.get('location')!, current).toString()
      continue
    }
    if (!res.ok) throw new Error(`homepage returned HTTP ${res.status}`)
    if (!(res.headers.get('content-type') || '').includes('html')) throw new Error('homepage is not HTML')
    return { url: current, html: await readCapped(res) }
  }
  throw new Error('too many redirects')
}

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .trim()

function meta(html: string, key: string) {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*>`, 'i')
  const tag = html.match(re)?.[0]
  return tag ? decode(tag.match(/content=["']([^"']*)["']/i)?.[1] || '') || undefined : undefined
}

export interface SiteFacts {
  url: string
  title?: string
  description?: string
  siteName?: string
  lang?: string
  orgName?: string
  orgCountry?: string
  employees?: string
  linkedin?: string
  text: string
}

export function extractFacts(url: string, html: string): SiteFacts {
  const facts: SiteFacts = { url, text: '' }
  facts.title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '') || undefined
  facts.description = meta(html, 'description') || meta(html, 'og:description')
  facts.siteName = meta(html, 'og:site_name')
  facts.lang = html.match(/<html[^>]*\blang=["']([^"']+)["']/i)?.[1]
  facts.linkedin = html.match(/https?:\/\/(?:[a-z]{2,3}\.)?linkedin\.com\/company\/[A-Za-z0-9_\-%.]+/i)?.[0]

  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]!.trim())
      const nodes = ([] as any[]).concat(data?.['@graph'] || data)
      const org = nodes.find((n) => /Organization|Corporation|LocalBusiness|Hotel|Resort|Store/i.test(String(n?.['@type'])))
      if (org) {
        facts.orgName ||= typeof org.name === 'string' ? org.name : undefined
        const country = org.address?.addressCountry
        facts.orgCountry ||= typeof country === 'string' ? country : country?.name
        const emp = org.numberOfEmployees
        facts.employees ||= emp ? String(emp.value ?? emp.minValue ?? emp) : undefined
      }
    } catch {
      /* ignore malformed JSON-LD */
    }
  }

  facts.text = decode(
    html
      .replace(/<(script|style|noscript|svg|template|iframe)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' '),
  ).slice(0, 6000)
  return facts
}

function countryFromTld(domain: string) {
  return TLD_COUNTRY[domain.split('.').pop() || '']
}

function metadataSummary(domain: string, facts: SiteFacts, note?: string): LeadEnrichment {
  const signals = [facts.employees && `${facts.employees} employees (schema.org)`, facts.linkedin && `LinkedIn: ${facts.linkedin}`]
    .filter(Boolean)
    .join(' · ')
  return {
    status: 'metadata',
    note,
    domain,
    url: facts.url,
    companyName: facts.orgName || facts.siteName || facts.title,
    whatTheyDo: facts.description,
    sizeSignals: signals || undefined,
    country: facts.orgCountry || countryFromTld(domain),
  }
}

const SYSTEM_PROMPT =
  'You are a B2B research assistant for Allometrik, which builds production AI agents (including voice agents). ' +
  'From the website content provided, return a factual JSON object with keys: company_name, what_they_do (max 2 sentences), ' +
  'industry, size_signals (concrete evidence only, e.g. number of locations, employee counts, "careers page", "enterprise clients"), ' +
  'country (headquarters if stated), fit_notes (one sentence on how the stated need relates to their business). ' +
  'Use only information present in the content. Use null for anything not supported by the content. Never invent figures.'

async function llmSummary(domain: string, facts: SiteFacts, lead: LeadPayload, env: Env, fetchImpl: Fetch) {
  const content = [
    `Domain: ${domain}`,
    `Fetched URL: ${facts.url}`,
    `Title: ${facts.title || ''}`,
    `Meta description: ${facts.description || ''}`,
    `Schema.org organisation: ${[facts.orgName, facts.orgCountry, facts.employees && `${facts.employees} employees`].filter(Boolean).join(', ')}`,
    `Page language: ${facts.lang || ''}`,
    `Company name given in the form: ${lead.company || ''}`,
    `Stated need (${lead.formName}): ${lead.summary || ''}`,
    '',
    'Homepage text:',
    facts.text,
  ].join('\n')

  const signal = AbortSignal.timeout(LLM_TIMEOUT_MS)
  let raw: string | undefined
  let model: string

  if (env.ANTHROPIC_API_KEY) {
    model = env.ANTHROPIC_MODEL || 'claude-haiku-4-5'
    const res = await fetchImpl('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal,
      headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: 500, system: SYSTEM_PROMPT, messages: [{ role: 'user', content }] }),
    })
    if (!res.ok) throw new Error(`Anthropic HTTP ${res.status}`)
    const data: any = await res.json()
    raw = data?.content?.find((c: any) => c.type === 'text')?.text
  } else {
    model = env.OPENAI_MODEL || 'gpt-4o-mini'
    const base = (env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '')
    const res = await fetchImpl(`${base}/chat/completions`, {
      method: 'POST',
      signal,
      headers: { 'content-type': 'application/json', authorization: `Bearer ${env.OPENAI_API_KEY}` },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 500,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content },
        ],
      }),
    })
    if (!res.ok) throw new Error(`OpenAI HTTP ${res.status}`)
    const data: any = await res.json()
    raw = data?.choices?.[0]?.message?.content
  }

  const json = raw?.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1)
  if (!json) throw new Error('LLM returned no JSON')
  const parsed = JSON.parse(json)
  const str = (v: unknown) => (typeof v === 'string' && v.trim() && v.trim().toLowerCase() !== 'null' ? v.trim().slice(0, 400) : undefined)
  return {
    model,
    companyName: str(parsed.company_name),
    whatTheyDo: str(parsed.what_they_do),
    industry: str(parsed.industry),
    sizeSignals: str(parsed.size_signals),
    country: str(parsed.country),
    fitNotes: str(parsed.fit_notes),
  }
}

/**
 * Researches the lead's company. Never throws: on any failure it degrades to
 * website metadata, and if the website cannot be read, to `skipped`.
 * Only the company domain, public website content and the stated need are sent
 * to the LLM — never the lead's name or email.
 */
export async function enrichLead(lead: LeadPayload, env: Env, fetchImpl: Fetch = fetch): Promise<LeadEnrichment> {
  const domain = researchDomain(lead)
  if (!domain) return { status: 'skipped', note: 'no company website and a personal email domain' }

  let facts: SiteFacts
  try {
    const page = await fetchHomepage(domain, fetchImpl)
    facts = extractFacts(page.url, page.html)
  } catch (err) {
    return { status: 'skipped', domain, note: `could not read https://${domain} (${(err as Error).message})`, country: countryFromTld(domain) }
  }

  if (!env.ANTHROPIC_API_KEY && !env.OPENAI_API_KEY) {
    return metadataSummary(domain, facts, 'no LLM API key configured')
  }
  try {
    const summary = await llmSummary(domain, facts, lead, env, fetchImpl)
    const base = metadataSummary(domain, facts)
    return {
      ...base,
      status: 'llm',
      note: undefined,
      model: summary.model,
      companyName: summary.companyName || base.companyName,
      whatTheyDo: summary.whatTheyDo || base.whatTheyDo,
      industry: summary.industry,
      sizeSignals: [summary.sizeSignals, base.sizeSignals].filter(Boolean).join(' · ') || undefined,
      country: summary.country || base.country,
      fitNotes: summary.fitNotes,
    }
  } catch (err) {
    return metadataSummary(domain, facts, `LLM summary failed: ${(err as Error).message}`)
  }
}
