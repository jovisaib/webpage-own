<script setup lang="ts">
import { homeFaqs } from '~/data/faq'
import { site } from '~/data/site'
import { faqJsonLd } from '~/composables/usePageSeo'

definePageMeta({ navTheme: 'dark' })

usePageSeo({
  title: 'Allometrik — Production AI Systems for the Enterprise',
  description: site.description,
  jsonLd: [faqJsonLd(homeFaqs)],
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeClients />
    <HomeManifesto />
    <HomeCaseRail />
    <HomePlatform />
    <HomeMonday />
    <HomeCapabilities />
    <HomeDeploy />
    <HomeIndustries />
    <HomeComparison />
    <HomeTestimonials />
    <HomeEngage />
    <SiteFaq :items="homeFaqs" title="How the commercial model actually works" />
    <HomeContact />
  </div>
</template>
