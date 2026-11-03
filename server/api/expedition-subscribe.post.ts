import { Resend } from 'resend'
import { readFileSync } from 'fs'
import { join } from 'path'
import { logLeadToSheet } from '../lead/sheet'

interface RequestBody {
  email: string
  name?: string
  website?: string
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://allometrik.com',
  'https://www.allometrik.com',
]

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 3

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

  if (body.website) {
    return { success: true }
  }

  if (!body.email) {
    throw createError({
      statusCode: 400,
      message: 'Email is required',
    })
  }

  if (!validateEmail(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email address',
    })
  }

  const sendingApiKey = process.env.RESEND_API_KEY
  if (!sendingApiKey) {
    console.error('[expedition] RESEND_API_KEY not configured')
    throw createError({
      statusCode: 500,
      message: 'Service configuration error',
    })
  }

  const resend = new Resend(sendingApiKey)
  const contactsApiKey = process.env.RESEND_CONTACTS_API_KEY || sendingApiKey
  const resendContacts = new Resend(contactsApiKey)

  let contactCreated = false
  try {
    let audienceId = process.env.RESEND_SHENZHEN_AUDIENCE_ID

    if (!audienceId) {
      try {
        const audiences = await resendContacts.audiences.list()
        const shenzhenAudience = audiences.data?.data?.find((a) => a.name === 'Shenzhen')

        if (shenzhenAudience) {
          audienceId = shenzhenAudience.id
        } else {
          const newAudience = await resendContacts.audiences.create({ name: 'Shenzhen' })
          audienceId = newAudience.data?.id
        }
      } catch (err: any) {
        console.error('[expedition] Audience lookup/create failed:', err.message || err)
      }
    }

    if (audienceId) {
      const contactData: any = {
        email: body.email,
        unsubscribed: false,
        audienceId,
      }

      if (body.name) {
        contactData.firstName = body.name.split(' ')[0]
        if (body.name.includes(' ')) {
          contactData.lastName = body.name.split(' ').slice(1).join(' ')
        }
      }

      try {
        await resendContacts.contacts.create(contactData)
        contactCreated = true
      } catch (err: any) {
        if (err.message?.includes('already exists') || err.statusCode === 409) {
          contactCreated = true
          console.log('[expedition] Contact already exists:', body.email)
        } else {
          console.error('[expedition] Contact create failed:', err.message || err, 'statusCode:', err.statusCode)
        }
      }
    }
  } catch (err: any) {
    console.error('[expedition] Non-fatal audience/contact error:', err.message || err)
  }

  let subscriberEmailSent = false
  try {
    const guidePath = join(process.cwd(), 'public/guides/ai-toys-boom-shenzhen.pdf')
    const guideBuffer = readFileSync(guidePath)
    const guideBase64 = guideBuffer.toString('base64')

    const subscriberEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 32px; }
    .kicker { font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #98552e; margin-bottom: 12px; }
    .title { font-size: 28px; font-weight: 500; color: #0c0d0f; margin: 0 0 8px; letter-spacing: -0.03em; }
    .content { font-size: 16px; line-height: 1.65; color: #4a4d55; margin-bottom: 28px; }
    .button { display: inline-block; padding: 14px 28px; background: #0c0d0f; color: #f7f5f0; text-decoration: none; border-radius: 12px; font-weight: 500; font-size: 15px; margin: 20px 0; }
    .footer { font-size: 13px; color: #686b73; text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e8e4db; }
    .footer a { color: #c87a4b; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="kicker">Shenzhen Expedition by Allometrik</div>
      <h1 class="title">Your Shenzhen field notes</h1>
    </div>
    
    <div class="content">
      <p>Hi${body.name ? ` ${body.name}` : ''},</p>
      
      <p>Thanks for your interest in the Shenzhen Expedition. Attached are our latest field notes from China's hardware capital.</p>
      
      <p>You can also download them here:</p>
      
      <a href="https://allometrik.com/guides/ai-toys-boom-shenzhen.pdf" class="button">Download field notes</a>
      
      <p>We're organizing a small group expedition to Shenzhen in April 2027 (max 10 people) — hardware factories, electronics markets, robotics ecosystem. More details coming soon.</p>
      
      <p>Questions? Just reply to this email.</p>
      
      <p style="margin-top: 24px;">— Allometrik</p>
    </div>
    
    <div class="footer">
      <p>Allometrik Consulting FZCO<br>
      <a href="mailto:hello@allometrik.com">hello@allometrik.com</a></p>
    </div>
  </div>
</body>
</html>
    `.trim()

    await resend.emails.send({
      from: process.env.LEAD_EMAIL_FROM || 'Allometrik <hello@allometrik.com>',
      to: body.email,
      replyTo: 'hello@allometrik.com',
      subject: 'Your Shenzhen field notes · Shenzhen Expedition by Allometrik',
      html: subscriberEmailHtml,
      attachments: [
        {
          filename: 'ai-toys-boom-shenzhen.pdf',
          content: guideBase64,
        },
      ],
    })
    subscriberEmailSent = true
  } catch (err: any) {
    console.error('[expedition] Subscriber email failed:', err.message || err, 'statusCode:', err.statusCode)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email with guide',
    })
  }

    const internalEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 20px; }
    .container { max-width: 600px; }
    h2 { color: #0c0d0f; font-size: 20px; margin: 0 0 16px; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    td { padding: 8px 12px; border-bottom: 1px solid #e8e4db; }
    td:first-child { font-weight: 500; color: #4a4d55; width: 120px; }
    .badge { display: inline-block; padding: 4px 10px; background: #f1eee7; color: #c87a4b; border-radius: 6px; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Expedition Lead</h2>
    <p><span class="badge">expedition</span></p>
    <table>
      <tr><td>Email</td><td><strong>${body.email}</strong></td></tr>
      ${body.name ? `<tr><td>Name</td><td>${body.name}</td></tr>` : ''}
      <tr><td>Time</td><td>${new Date().toISOString()}</td></tr>
      <tr><td>IP</td><td>${ip}</td></tr>
    </table>
  </div>
</body>
</html>
    `.trim()

  try {
    await resend.emails.send({
      from: process.env.LEAD_EMAIL_FROM || 'Allometrik <hello@allometrik.com>',
      to: process.env.LEAD_EMAIL_TO || 'hello@allometrik.com',
      subject: `New expedition lead: ${body.email}`,
      html: internalEmailHtml,
    })
  } catch (err: any) {
    console.error('[expedition] Internal notification failed (non-fatal):', err.message || err, 'statusCode:', err.statusCode)
  }

  const url = getHeader(event, 'referer') || ''
  const sanitizedPayload = {
    email: body.email,
    name: body.name || '',
    timestamp: new Date().toISOString(),
    contactCreated,
  }

  try {
    await logLeadToSheet({
      'Received (UTC)': new Date().toISOString(),
      'Source': 'expedition',
      'Form': 'Shenzhen Expedition',
      'Name': body.name || '',
      'Email': body.email,
      'Company': '',
      'Website': '',
      'Summary': 'Shenzhen Expedition field notes request',
      'Answers': contactCreated ? 'Added to Shenzhen audience' : 'Contact sync skipped',
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
      'Newsletter consent': 'yes',
      'Enrichment': '',
      'Email delivered': subscriberEmailSent ? 'yes' : 'no',
      'Raw JSON': JSON.stringify(sanitizedPayload),
    })
  } catch (err: any) {
    console.error('[expedition] Sheet logging failed (non-fatal):', err.message || err)
  }

  return {
    success: true,
    message: 'Subscribed successfully',
  }
})
