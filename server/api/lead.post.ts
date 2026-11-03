import { parseLead, processLead } from '../lead/process'

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(key: string) {
  const now = Date.now()
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function allowedOrigin(origin: string | undefined) {
  if (!origin) return true
  try {
    const host = new URL(origin).hostname
    return host === 'allometrik.com' || host.endsWith('.allometrik.com') || host.endsWith('.vercel.app') || host === 'localhost' || host === '127.0.0.1'
  } catch {
    return false
  }
}

export default defineEventHandler(async (event) => {
  if (!allowedOrigin(getHeader(event, 'origin'))) {
    throw createError({ statusCode: 403, statusMessage: 'Origin not allowed' })
  }
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (rateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const lead = parseLead(await readBody(event).catch(() => null))
  if (typeof lead === 'string') {
    throw createError({ statusCode: 400, statusMessage: lead })
  }
  lead.context.visitorCountry = getHeader(event, 'x-vercel-ip-country') || undefined

  return processLead(lead, process.env)
})
