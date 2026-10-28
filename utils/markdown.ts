const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function inline(s: string) {
  return escapeHtml(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, (_m, text: string, href: string) => {
      const external = href.startsWith('http')
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
    })
}

export interface MarkdownHeading {
  id: string
  text: string
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

/** Minimal markdown renderer for trusted, in-repo article content. */
export function renderMarkdown(md: string): { html: string; headings: MarkdownHeading[] } {
  const lines = md.trim().split('\n')
  const out: string[] = []
  const headings: MarkdownHeading[] = []
  let para: string[] = []
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null

  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`)
    para = []
  }
  const flushList = () => {
    if (list) out.push(`<${list.type}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.type}>`)
    list = null
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    const heading = /^(#{2,4})\s+(.*)$/.exec(line)
    const ul = /^\s*[-*]\s+(.*)$/.exec(line)
    const ol = /^\s*\d+\.\s+(.*)$/.exec(line)

    if (!line.trim()) {
      flushPara()
      flushList()
    } else if (heading) {
      flushPara()
      flushList()
      const level = heading[1]!.length
      const text = heading[2]!
      const id = slugify(text)
      if (level === 2) headings.push({ id, text })
      out.push(`<h${level} id="${id}">${inline(text)}</h${level}>`)
    } else if (/^---+$/.test(line)) {
      flushPara()
      flushList()
      out.push('<hr />')
    } else if (line.startsWith('> ')) {
      flushPara()
      flushList()
      out.push(`<blockquote><p>${inline(line.slice(2))}</p></blockquote>`)
    } else if (ul || ol) {
      flushPara()
      const type = ul ? 'ul' : 'ol'
      if (!list || list.type !== type) {
        flushList()
        list = { type, items: [] }
      }
      list.items.push((ul || ol)![1]!)
    } else {
      flushList()
      para.push(line.trim())
    }
  }
  flushPara()
  flushList()
  return { html: out.join('\n'), headings }
}
