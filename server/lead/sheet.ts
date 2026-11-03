interface SheetRow {
  'Received (UTC)': string
  'Source': string
  'Form': string
  'Name': string
  'Email': string
  'Company': string
  'Website': string
  'Summary': string
  'Answers': string
  'Page URL': string
  'Landing page': string
  'Referrer': string
  'utm_source': string
  'utm_medium': string
  'utm_campaign': string
  'utm_term': string
  'utm_content': string
  'Click IDs': string
  'Country': string
  'Language': string
  'Newsletter consent': string
  'Enrichment': string
  'Email delivered': string
  'Raw JSON': string
}

export async function logLeadToSheet(row: SheetRow): Promise<void> {
  const webhookUrl = process.env.LEADS_SHEET_WEBHOOK_URL
  const token = process.env.LEADS_SHEET_TOKEN

  if (!webhookUrl || !token) {
    return
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, row }),
      redirect: 'follow',
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      console.error(`Sheet webhook returned ${response.status}`)
    }
  } catch (error: any) {
    console.error('Failed to log lead to sheet:', error.message || error)
  }
}
