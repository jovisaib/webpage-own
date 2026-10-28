import { caseStudies } from '../../data/case-studies'
import { insights } from '../../data/insights'
import { site } from '../../data/site'

interface Entry {
  path: string
  changefreq: 'weekly' | 'monthly'
  priority: string
}

export default defineEventHandler((event) => {
  const entries: Entry[] = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/capabilities', changefreq: 'weekly', priority: '0.9' },
    { path: '/case-studies', changefreq: 'weekly', priority: '0.9' },
    { path: '/industries', changefreq: 'weekly', priority: '0.8' },
    { path: '/process', changefreq: 'monthly', priority: '0.8' },
    { path: '/insights', changefreq: 'weekly', priority: '0.8' },
    { path: '/about', changefreq: 'monthly', priority: '0.7' },
    { path: '/cto-as-a-service', changefreq: 'monthly', priority: '0.5' },
    { path: '/privacy-policy', changefreq: 'monthly', priority: '0.3' },
    { path: '/terms-of-service', changefreq: 'monthly', priority: '0.3' },
    ...caseStudies.map((c) => ({ path: `/case-studies/${c.slug}`, changefreq: 'monthly' as const, priority: '0.7' })),
    ...insights
      .filter((i) => i.kind === 'article')
      .map((i) => ({ path: `/insights/${i.slug}`, changefreq: 'monthly' as const, priority: '0.6' })),
  ]

  const lastmod = '2026-10-28'
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${site.url}${e.path === '/' ? '' : e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  return body
})
