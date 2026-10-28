<script setup lang="ts">
import { aiosBadges, aiosBase, aiosLayers, aiosPillars, aiosSpecs, aiosThesis } from '~/data/ai-os'
import { aiosFaqs } from '~/data/faq'
import { site } from '~/data/site'
import { faqJsonLd } from '~/composables/usePageSeo'

definePageMeta({ navTheme: 'dark' })

usePageSeo({
  title: 'Allometrik AI OS — Free governance for production agents',
  description:
    'Allometrik AI OS is included at $0 platform licence with every engagement: governance, observability, dashboards and operational interfaces. Charge only for the agent that does the work.',
  jsonLd: [
    faqJsonLd(aiosFaqs),
    {
      '@type': 'SoftwareApplication',
      name: 'Allometrik AI OS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud · Azure · AWS · GCP · on-premise VPC',
      url: `${site.url}/ai-os`,
      description:
        'Governance, observability, dashboards and operational interfaces for enterprise AI agents. Included at $0 platform licence with every Allometrik engagement.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: '$0 platform licence, included with every production-agent engagement',
      },
      provider: { '@type': 'Organization', name: site.legalName, url: site.url },
    },
  ],
})

const active = ref(aiosLayers[0]!.id)
const current = computed(() => [...aiosLayers, ...aiosBase].find((l) => l.id === active.value) ?? aiosLayers[0]!)
const openSpec = ref(0)
</script>

<template>
  <div>
    <header class="hero" data-nav-theme="dark">
      <HomeHeroCanvas class="hero__canvas" />
      <div class="hero__veil" />
      <div class="container hero__copy">
        <p class="eyebrow">allometrik AI OS</p>
        <h1 class="display-xl">The unified operating layer for the AI-native enterprise</h1>
        <p class="lede">{{ aiosThesis.headline }}</p>
        <ul class="badges" role="list">
          <li v-for="b in aiosBadges" :key="b.label" class="badge" :class="{ 'badge--lead': b.lead }">{{ b.label }}</li>
        </ul>
        <div class="hero__actions">
          <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Book a consultation</UiButton>
          <UiButton to="/case-studies" variant="glass" size="lg">See it in production</UiButton>
        </div>
      </div>
    </header>

    <section class="section section--dark thesis" data-nav-theme="dark">
      <div class="container thesis__grid">
        <div>
          <p class="eyebrow">{{ aiosThesis.kicker }}</p>
          <h2 class="display-md">Give away the dashboard. Charge for the agent.</h2>
        </div>
        <ul class="thesis__lines" role="list">
          <li v-for="line in aiosThesis.lines" :key="line">{{ line }}</li>
        </ul>
        <p class="body-lg thesis__body">{{ aiosThesis.body }}</p>
      </div>
    </section>

    <section class="section stack-sec">
      <div class="container">
        <p class="eyebrow">Architecture</p>
        <h2 class="display-sm">Complete infrastructure to run enterprise AI</h2>
        <div class="stack">
          <button
            v-for="layer in aiosLayers"
            :key="layer.id"
            type="button"
            class="stack__row"
            :class="[`stack__row--${layer.kind}`, { 'is-on': active === layer.id }]"
            @click="active = layer.id"
          >
            {{ layer.label }}
          </button>
          <div class="stack__base">
            <button
              v-for="item in aiosBase"
              :key="item.id"
              type="button"
              class="stack__cell"
              :class="{ 'is-on': active === item.id }"
              @click="active = item.id"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
        <p class="lede stack__body">{{ current.body }}</p>
      </div>
    </section>

    <section class="section section--dark pillars-sec" data-nav-theme="dark">
      <div class="container">
        <p class="eyebrow">What you pay for — and what you don’t</p>
        <h2 class="display-sm">Agents are paid. Systems and governance are included.</h2>
        <ul class="pillars" role="list">
          <li v-for="p in aiosPillars" :key="p.id" class="pillar" :class="`pillar--${p.tone}`">
            <p class="mono pillar__badge">{{ p.badge }}</p>
            <h3>{{ p.name }}</h3>
            <p>{{ p.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section specs">
      <div class="container">
        <p class="eyebrow">Built for the enterprise</p>
        <h2 class="display-sm">Deployment, security, data, compliance</h2>
        <div class="specs__list">
          <article v-for="(spec, i) in aiosSpecs" :key="spec.id" class="specs__item">
            <button type="button" class="specs__q" :aria-expanded="openSpec === i" @click="openSpec = openSpec === i ? -1 : i">
              <span>{{ spec.title }}</span>
              <UiIcon name="chevron-down" :size="18" :class="{ 'is-open': openSpec === i }" />
            </button>
            <p v-show="openSpec === i" class="body specs__a">{{ spec.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <HomeEngage />
    <SiteFaq :items="aiosFaqs" title="The OS, in plain language" />
    <PageCta title="Put a production agent on the free OS" lede="We include Allometrik AI OS at $0 licence. You pay for the agent that does the work." />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: 86svh;
  display: grid;
  align-items: end;
  overflow: hidden;
  padding: 10px 10px 0;
  background: #07080a;
  color: var(--on-dark);
}

.hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.hero__veil {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(50% 40% at 50% 55%, rgba(7, 8, 10, 0.35), rgba(7, 8, 10, 0.78));
}

.hero__copy {
  padding: 140px 0 72px;
  display: grid;
  gap: 22px;
}

.hero h1 {
  max-width: 14ch;
}

.hero .lede {
  color: var(--on-dark-2);
  max-width: 58ch;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  height: 32px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--line-dark-2);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.badge--lead {
  border-color: rgba(229, 169, 124, 0.5);
  color: #f4e4d4;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.thesis {
  background: #0c0d0f;
}

.thesis__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 64px;
}

.thesis__lines {
  display: grid;
  gap: 10px;
  font-size: clamp(22px, 2.4vw, 32px);
  letter-spacing: -0.03em;
  font-weight: 500;
}

.thesis__body {
  grid-column: 1 / -1;
  max-width: 72ch;
  color: var(--on-dark-2);
}

.stack {
  display: grid;
  gap: 8px;
  margin-top: 28px;
}

.stack__row,
.stack__cell {
  min-height: 56px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: var(--paper);
  text-align: left;
  font-size: 16px;
  font-weight: 540;
}

.stack__row--tab {
  background: linear-gradient(90deg, rgba(200, 122, 75, 0.12), #fff);
}

.stack__row.is-on,
.stack__cell.is-on {
  border-color: var(--ink);
}

.stack__base {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.stack__body {
  margin-top: 18px;
}

.pillars-sec {
  background: #0c0d0f;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.pillar {
  min-height: 300px;
  padding: 26px;
  border-radius: 22px;
  border: 1px solid var(--line-dark);
  display: grid;
  align-content: start;
  gap: 12px;
}

.pillar--sky {
  background: linear-gradient(180deg, #1a2838 0%, #121820 100%);
}
.pillar--ember {
  background: linear-gradient(180deg, #2a1c14 0%, #16110e 100%);
}
.pillar--sage {
  background: linear-gradient(180deg, #18241c 0%, #101612 100%);
}

.pillar__badge {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.pillar h3 {
  font-size: 22px;
  letter-spacing: -0.03em;
}

.specs__list {
  margin-top: 28px;
  border-top: 1px solid var(--line);
}

.specs__item {
  border-bottom: 1px solid var(--line);
}

.specs__q {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0;
  text-align: left;
  font-size: 18px;
  font-weight: 540;
}

.specs__q :deep(svg.is-open) {
  transform: rotate(180deg);
}

.specs__q :deep(svg) {
  transition: transform 0.3s var(--ease-out);
  color: var(--text-3);
}

.specs__a {
  padding-bottom: 22px;
  max-width: 64ch;
}

@media (max-width: 900px) {
  .thesis__grid,
  .pillars,
  .stack__base {
    grid-template-columns: 1fr;
  }
}
</style>
