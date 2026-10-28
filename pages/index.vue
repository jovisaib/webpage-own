<script setup lang="ts">
import { site } from '~/data/site'

definePageMeta({ navTheme: 'dark' })

useSeoMeta({
  title: 'Allometrik — Production AI Systems for the Enterprise',
  description: site.description,
  ogTitle: 'Allometrik — AI systems that run the business',
  ogDescription: site.description,
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeClients />
    <HomeManifesto />
    <HomeCaseRail />
    <HomeCapabilities />
    <HomeDeploy />
    <HomeIndustries />
    <HomeComparison />
    <HomeTestimonials />
    <HomeContact />
  </div>
</template>
