// https://nuxt.com/docs/api/configuration/nuxt-config
import { caseStudies } from './data/case-studies'
import { insights } from './data/insights'

const SITE_URL = 'https://allometrik.com'
const TITLE = 'Allometrik — Production AI Systems for the Enterprise'
const DESCRIPTION =
  'Allometrik engineers production AI agents for regulated enterprises and includes Allometrik AI OS — governance, observability and operational interfaces — at $0 platform licence. Forward-deployed in Dubai, Europe and Latin America.'

const prerenderRoutes = [
  '/',
  '/capabilities',
  '/case-studies',
  '/industries',
  '/process',
  '/insights',
  '/about',
  '/cto-as-a-service',
  '/ai-os',
  '/monday-aitp',
  '/privacy-policy',
  '/terms-of-service',
  '/sitemap.xml',
  ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ...insights.filter((i) => i.kind === 'article').map((i) => `/insights/${i.slug}`),
]

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  runtimeConfig: {
    public: {
      web3formsKey: process.env.WEB3FORMS_KEY || '',
      siteUrl: SITE_URL,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: TITLE,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [
        { name: 'description', content: DESCRIPTION },
        { name: 'theme-color', content: '#F7F5F0' },
        { name: 'author', content: 'Allometrik Consulting FZCO' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Allometrik' },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:image', content: `${SITE_URL}/og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@allometrik' },
        { name: 'twitter:title', content: TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:image', content: `${SITE_URL}/og-image.png` },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  components: [
    { path: '~/components/shared', pathPrefix: false },
    '~/components',
  ],

  css: [
    '@fontsource-variable/geist/index.css',
    '@fontsource-variable/geist-mono/index.css',
    '@fontsource/instrument-serif/latin-400.css',
    '@fontsource/instrument-serif/latin-400-italic.css',
    '@fontsource/plus-jakarta-sans/latin-600.css',
    '@fontsource/plus-jakarta-sans/latin-700.css',
    '~/assets/css/main.css',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: prerenderRoutes,
    },
    routeRules: {
      '/case-studies/fintech-promissory-notes-ocr': {
        redirect: { to: '/case-studies/fintech-pagares-document-automation', statusCode: 301 },
      },
    },
  },
})
