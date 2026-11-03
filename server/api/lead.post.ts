import { logLeadToSheet } from '../lead/sheet'

interface RequestBody {
  name: string
  email: string
  company?: string
  interest?: string
  message: string
  botcheck?: boolean
  track?: string
  industry?: string
  workflow?: string
  volume?: string
  recommendation?: string
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://allometrik.com',
  'https://www.allometrik.com',
]

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default defineEventHandler(async (event) => {
  const origin = getHeader(event, 'origin') || getHeader(event, 'referer')
  const isAllowedOrigin = origin && allowedOrigins.some((allowed) => origin.startsWith(allowed))

  if (!isAllowedOrigin && process.env.NODE_ENV === 'production') {
    throw createError({
      statusCode: 403,
      message: 'Forbidden',
    })
  }

  const ip = getHeader(event, 'x-forwarded-for')?.split(',')[0] || getHeader(event, 'x-real-ip') || 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({
      statusCode: 429,
      message: 'Too many requests. Please try again later.',
    })
  }

  const body = await readBody<RequestBody>(event)

  if (body.botcheck) {
    return { success: true }
  }

  if (!body.email || !body.name || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Name, email, and message are required',
    })
  }

  if (!validateEmail(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email address',
    })
  }

  const config = useRuntimeConfig()
  const web3formsKey = config.public.web3formsKey

  if (!web3formsKey) {
    console.error('WEB3FORMS_KEY not configured')
    throw createError({
      statusCode: 500,
      message: 'Service configuration error',
    })
  }

  const isModal = body.track !== undefined
  const formType = isModal ? 'Custom Scope Modal' : 'Contact Form'
  const subject = isModal
    ? `Custom scope request — ${body.company || body.name}`
    : `New consultation request — ${body.company || body.name}`

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject,
        from_name: 'Allometrik website',
        name: body.name,
        email: body.email,
        company: body.company || '',
        interest: body.interest || '',
        message: body.message,
        track: body.track || '',
        industry: body.industry || '',
        workflow: body.workflow || '',
        volume: body.volume || '',
        recommendation: body.recommendation || '',
        botcheck: false,
      }),
    })

    const result = await res.json()
    if (!result.success) {
      throw new Error(result.message || 'Web3Forms submission failed')
    }

    const url = getHeader(event, 'referer') || ''
    const userAgent = getHeader(event, 'user-agent') || ''

    const answers = []
    if (body.interest) answers.push(`Interest: ${body.interest}`)
    if (body.track) answers.push(`Track: ${body.track}`)
    if (body.industry) answers.push(`Industry: ${body.industry}`)
    if (body.workflow) answers.push(`Workflow: ${body.workflow}`)
    if (body.volume) answers.push(`Volume: ${body.volume}`)
    if (body.recommendation) answers.push(`Recommendation: ${body.recommendation}`)

    const sanitizedPayload = {
      name: body.name,
      email: body.email,
      company: body.company || '',
      message: body.message,
      interest: body.interest || '',
      track: body.track || '',
      userAgent,
      timestamp: new Date().toISOString(),
    }

    await logLeadToSheet({
      'Received (UTC)': new Date().toISOString(),
      'Source': isModal ? 'website-modal' : 'website-contact',
      'Form': formType,
      'Name': body.name,
      'Email': body.email,
      'Company': body.company || '',
      'Website': '',
      'Summary': body.message.substring(0, 200),
      'Answers': answers.join(' • '),
      'Page URL': url,
      'Landing page': url,
      'Referrer': getHeader(event, 'referer') || '',
      'utm_source': '',
      'utm_medium': '',
      'utm_campaign': '',
      'utm_term': '',
      'utm_content': '',
      'Click IDs': '',
      'Country': '',
      'Language': '',
      'Newsletter consent': '',
      'Enrichment': '',
      'Email delivered': 'yes',
      'Raw JSON': JSON.stringify(sanitizedPayload),
    })

    return {
      success: true,
      message: 'Message sent successfully',
    }
  } catch (error: any) {
    console.error('Lead submission error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send message',
    })
  }
})
