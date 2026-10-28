<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()
const canonical = computed(() => `${site.url}${route.path === '/' ? '' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  meta: [{ property: 'og:url', content: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/allometrik-mark-2048.png`,
        email: site.email,
        description: site.description,
        sameAs: [site.socials.x, site.socials.linkedin],
        address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
        areaServed: ['AE', 'SA', 'EU', 'US'],
      }),
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator color="linear-gradient(90deg, #C87A4B, #8E8D94)" :height="2" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
