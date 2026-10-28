<script setup lang="ts">
import { caseStudies, getCaseStudy } from '~/data/case-studies'

const route = useRoute()
const study = computed(() => getCaseStudy(String(route.params.slug)))

if (!study.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

useSeoMeta({
  title: `${study.value.headline} — Allometrik`,
  description: study.value.summary,
  ogType: 'article',
})

const related = computed(() =>
  caseStudies
    .filter((c) => c.slug !== study.value!.slug)
    .sort((a, b) => {
      const aHit = a.industries.some((i) => study.value!.industries.includes(i)) ? 1 : 0
      const bHit = b.industries.some((i) => study.value!.industries.includes(i)) ? 1 : 0
      return bHit - aHit
    })
    .slice(0, 2),
)
</script>

<template>
  <article v-if="study">
    <header class="hero" :class="`hero--${study.theme}`" :data-nav-theme="study.theme === 'dark' || study.theme === 'copper' ? 'dark' : 'light'">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">{{ study.sector }} · {{ study.region }}</p>
          <h1 class="display-md">{{ study.headline }}</h1>
          <p class="lede">{{ study.summary }}</p>
          <p class="hero__client">{{ study.client }} · {{ study.engagement }}</p>
        </div>
        <div class="hero__visual">
          <CaseVisual :study="study" mode="hero" />
        </div>
      </div>
    </header>

    <section class="metrics">
      <div class="container metrics__row">
        <div v-for="m in study.metrics" :key="m.label" class="metrics__item">
          <p class="metrics__value">{{ m.value }}</p>
          <p class="metrics__label">{{ m.label }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">The challenge</p>
          <h2 class="display-sm">What was in the way</h2>
          <p v-for="(p, i) in study.challenge" :key="i" class="body-lg para">{{ p }}</p>
        </div>
        <div>
          <p class="eyebrow">The approach</p>
          <h2 class="display-sm">How we built it</h2>
          <p v-for="(p, i) in study.approach" :key="i" class="body-lg para">{{ p }}</p>
        </div>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <p class="eyebrow">Architecture</p>
        <h2 class="display-sm flow-title">From intake to audited outcome</h2>
        <ol class="flow" role="list">
          <li v-for="(step, i) in study.flow" :key="step.label" class="flow__step">
            <span class="flow__n mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="title">{{ step.label }}</h3>
            <p class="body">{{ step.detail }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="eyebrow">Measurable impact</p>
        <h2 class="display-sm">What changed</h2>
        <ul class="impact" role="list">
          <li v-for="item in study.impact" :key="item.label" class="impact__card card">
            <p class="impact__value">{{ item.value }}</p>
            <h3 class="title">{{ item.label }}</h3>
            <p class="body">{{ item.detail }}</p>
          </li>
        </ul>
        <ul v-if="study.related" class="impact__extra" role="list">
          <li v-for="item in study.related" :key="item.label">
            <strong>{{ item.value }}</strong>
            {{ item.label }}
          </li>
        </ul>
      </div>
    </section>

    <section v-if="study.gallery?.length" class="section section--flush-top">
      <div class="container gallery">
        <figure v-for="img in study.gallery" :key="img.src" class="gallery__item">
          <img :src="img.src" :alt="img.alt" :width="img.width" :height="img.height" loading="lazy" />
          <figcaption>{{ img.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section section--stone stack-sec">
      <div class="container stack-sec__inner">
        <div>
          <p class="eyebrow">Stack deployed</p>
          <h2 class="display-sm">What it runs on</h2>
          <ul class="stack" role="list">
            <li v-for="item in study.stack" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
        <div v-if="study.featuredOn?.length">
          <p class="eyebrow">Published with</p>
          <ul class="pubs" role="list">
            <li v-for="pub in study.featuredOn" :key="pub.href">
              <a :href="pub.href" target="_blank" rel="noopener noreferrer" class="pubs__link">
                <span class="mono">{{ pub.name }}</span>
                <span>{{ pub.title }}</span>
                <UiIcon name="arrow-up-right" :size="16" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="related.length" class="section">
      <div class="container">
        <div class="more-head">
          <h2 class="display-sm">More client stories</h2>
          <NuxtLink to="/case-studies" class="text-link">All case studies <UiIcon name="arrow-right" :size="15" /></NuxtLink>
        </div>
        <div class="more-grid">
          <CaseCard v-for="item in related" :key="item.slug" :study="item" />
        </div>
      </div>
    </section>

    <PageCta title="Discuss a similar system" lede="Tell us about the process. We will map it in a 30-minute call." />
  </article>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--nav-h) + 72px);
  padding-bottom: 0;
}

.hero--dark,
.hero--copper {
  color: var(--on-dark);
}

.hero--dark {
  background: radial-gradient(120% 90% at 80% 100%, #2b1e15 0%, #12141b 55%, #0d0f14 100%);
}

.hero--copper {
  background: linear-gradient(165deg, #bd7546 0%, #8f512d 55%, #5e331b 100%);
}

.hero--stone {
  background: linear-gradient(180deg, #ece8df 0%, #e4dfd3 100%);
}

.hero--light {
  background: var(--canvas);
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 32px;
  align-items: end;
  min-height: 520px;
}

.hero__copy {
  padding-bottom: 48px;
}

.hero h1 {
  max-width: 18ch;
  margin-top: 16px;
}

.hero .lede {
  margin-top: 20px;
}

.hero--dark .lede,
.hero--copper .lede {
  color: var(--on-dark-2);
}

.hero__client {
  margin-top: 22px;
  font-size: 14.5px;
  opacity: 0.7;
}

.hero__visual {
  min-height: 420px;
  position: relative;
}

.metrics {
  background: var(--ink);
  color: var(--on-dark);
}

.metrics__row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding-block: 36px;
}

.metrics__value {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.metrics__label {
  margin-top: 8px;
  font-size: 14.5px;
  color: var(--on-dark-2);
}

.split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 64px;
}

.split h2 {
  margin: 14px 0 18px;
}

.para + .para {
  margin-top: 14px;
}

.flow-title {
  margin: 14px 0 36px;
}

.flow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.flow__step {
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 28px 24px;
  background: var(--paper);
}

.flow__n {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--copper-deep);
}

.impact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.impact__card {
  padding: 28px 24px;
}

.impact__value {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 500;
  letter-spacing: -0.04em;
  margin-bottom: 10px;
}

.impact__extra {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 28px;
  font-size: 15px;
  color: var(--text-2);
}

.impact__extra strong {
  color: var(--ink);
  margin-right: 8px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.gallery__item {
  margin: 0;
}

.gallery img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  border: 1px solid var(--line);
}

.gallery figcaption {
  margin-top: 10px;
  font-size: 14px;
  color: var(--text-3);
}

.stack-sec__inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.pubs {
  display: grid;
  gap: 10px;
  margin-top: 22px;
}

.pubs__link {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: var(--paper);
  border: 1px solid var(--line);
}

.pubs__link .mono {
  grid-column: 1 / -1;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.more-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 24px;
}

.more-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 960px) {
  .hero__grid,
  .split,
  .stack-sec__inner,
  .more-grid,
  .gallery,
  .impact,
  .metrics__row {
    grid-template-columns: 1fr;
  }

  .flow {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 320px;
  }
}
</style>
