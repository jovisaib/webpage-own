// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  ssr: true,

  runtimeConfig: {
    public: {
      web3formsKey: process.env.WEB3FORMS_KEY || '',
    }
  },
  
  app: {
    head: {
      title: 'Allometrik - Production AI Systems for Enterprise',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Custom AI agents and document intelligence systems that replace manual work and redundant SaaS. Built for enterprise compliance. Deployed in weeks, not months. Trusted by Fortune 500 & Top 10 EU Legal Firms.' },
        { name: 'keywords', content: 'AI agents, document intelligence, enterprise AI, automation, OCR, compliance, Fortune 500, legal tech, fintech' },
        { name: 'author', content: 'Allometrik' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Allometrik - Production AI Systems for Enterprise' },
        { property: 'og:description', content: 'Custom AI agents and document intelligence systems. Trusted by Fortune 500 & Top 10 EU Legal Firms.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://allometrik.com' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Allometrik - Production AI Systems for Enterprise' },
        { name: 'twitter:description', content: 'Custom AI agents and document intelligence systems. Trusted by Fortune 500 & Top 10 EU Legal Firms.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'canonical', href: 'https://allometrik.com' },
      ],
    },
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    // '@nuxtjs/sitemap', // Disabled temporarily
  ],

  site: {
    url: 'https://allometrik.com',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  compatibilityDate: '2024-01-01',
})

