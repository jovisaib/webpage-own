export function formatDate(input?: string) {
  if (!input) return ''
  const iso = /^\d{4}-\d{2}$/.test(input) ? `${input}-01` : input
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return input
  return date.toLocaleDateString('en-GB', {
    day: /^\d{4}-\d{2}$/.test(input) ? undefined : 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
