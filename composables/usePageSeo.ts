import { site } from '~/data/site'

export function usePageSeo(opts: {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  type?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}) {
  const route = useRoute()
  const path = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  const canonical = `${site.url}${path}`
  const image = opts.image?.startsWith('http') ? opts.image : `${site.url}${opts.image || '/og-image.png'}`
  const imageType = /\.jpe?g$/i.test(image) ? 'image/jpeg' : /\.gif$/i.test(image) ? 'image/gif' : 'image/png'

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogImage: image,
    ogImageSecureUrl: image,
    ogImageType: imageType,
    ogImageWidth: opts.imageWidth ?? 1200,
    ogImageHeight: opts.imageHeight ?? 630,
    ogImageAlt: opts.imageAlt,
    ogType: (opts.type || 'website') as 'website',
    ogUrl: canonical,
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
    twitterImageAlt: opts.imageAlt,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: opts.jsonLd
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(Array.isArray(opts.jsonLd) ? { '@context': 'https://schema.org', '@graph': opts.jsonLd } : opts.jsonLd),
          },
        ]
      : [],
  })
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
