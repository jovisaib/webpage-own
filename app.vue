<script setup lang="ts">
import { siteGraph } from '~/data/jsonld'
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
        '@graph': siteGraph,
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
