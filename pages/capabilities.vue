<script setup lang="ts">
import { capabilityDeepDives, engineeringStandards, integrations } from '~/data/capabilities'
import { capabilityFaqs } from '~/data/faq'
import { site } from '~/data/site'
import { faqJsonLd } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Capabilities — Allometrik',
  description:
    'Production AI engineering from Allometrik: autonomous agents, document intelligence, voice agents, RAG at scale, monday.com AITP, forward-deployed methodology and executive enablement.',
  jsonLd: [faqJsonLd(capabilityFaqs)],
})

const doubled = [...integrations, ...integrations]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Capabilities"
      lede="We do not licence a platform and hope it fits. We engineer production systems against your data, inside your perimeter, and hand them over as code you own."
    >
      Production AI engineering, <span class="accent">end to end.</span>
    </PageHero>

    <section v-for="(cap, i) in capabilityDeepDives" :id="cap.id" :key="cap.id" class="section dive" :class="{ 'section--stone': i % 2 === 1 }">
      <div class="container dive__grid">
        <div>
          <p class="eyebrow">{{ cap.index }} · {{ cap.eyebrow }}</p>
          <h2 class="display-md">{{ cap.title }} <span class="accent">{{ cap.accent }}</span></h2>
          <p class="lede">{{ cap.lede }}</p>
        </div>
        <div class="dive__points">
          <article v-for="point in cap.points" :key="point.title" class="dive__point">
            <h3 class="title">{{ point.title }}</h3>
            <p class="body">{{ point.body }}</p>
          </article>
        </div>
        <ul class="dive__uses" role="list">
          <li v-for="use in cap.useCases" :key="use">
            <UiIcon name="check" :size="14" :stroke="2.2" />
            {{ use }}
          </li>
        </ul>
        <NuxtLink v-if="cap.proof" :to="cap.proof.to || '/case-studies'" class="dive__proof">
          <span class="dive__proof-v">{{ cap.proof.value }}</span>
          <span class="dive__proof-l">{{ cap.proof.label }}</span>
          <span class="text-link">Read the story <UiIcon name="arrow-right" :size="14" /></span>
        </NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="eyebrow">Engineering standards</p>
        <h2 class="display-sm">How every system ships</h2>
        <ul class="std" role="list">
          <li v-for="item in engineeringStandards" :key="item.title" class="std__card card">
            <h3 class="title">{{ item.title }}</h3>
            <p class="body">{{ item.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--stone integ">
      <div class="container">
        <p class="eyebrow">Integrations</p>
        <h2 class="display-sm">Wired into the stack you already run</h2>
      </div>
      <div class="integ__track-wrap">
        <div class="integ__track">
          <div v-for="(item, i) in doubled" :key="`${item.name}-${i}`" class="integ__item" :title="item.name">
            <img :src="`/integrations/${item.file}`" :alt="item.name" width="40" height="40" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <HomeMonday />
    <HomeDeploy />
    <HomeEngage />
    <SiteFaq :items="capabilityFaqs" />
    <HomeContact />
    <p class="sr-only">{{ site.calendly }}</p>
  </div>
</template>

<style scoped>
.dive__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 28px 64px;
  align-items: start;
}

.dive h2 {
  margin-top: 14px;
  max-width: 16ch;
}

.dive .lede {
  margin-top: 18px;
}

.dive__points {
  display: grid;
  gap: 18px;
}

.dive__point {
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.dive__uses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
}

.dive__uses li {
  display: flex;
  gap: 8px;
  font-size: 15px;
  color: var(--ink);
}

.dive__uses :deep(svg) {
  color: var(--copper-deep);
  flex: none;
  margin-top: 3px;
}

.dive__proof {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 24px;
  border-radius: var(--radius-lg);
  background: var(--ink);
  color: var(--on-dark);
}

.dive__proof-v {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.dive__proof-l {
  color: var(--on-dark-2);
  font-size: 15px;
}

.dive__proof .text-link {
  margin-top: 12px;
  color: var(--on-dark);
  border-color: var(--line-dark-2);
}

.std {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.std__card {
  padding: 24px;
}

.integ__track-wrap {
  margin-top: 36px;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.integ__track {
  display: flex;
  gap: 14px;
  width: max-content;
  animation: marquee 46s linear infinite;
}

.integ__item {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: var(--paper);
  border: 1px solid var(--line);
}

.integ__item img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 960px) {
  .dive__grid,
  .std,
  .dive__uses {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .integ__track {
    animation: none;
  }
}
</style>
