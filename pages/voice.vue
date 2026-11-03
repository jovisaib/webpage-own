<script setup lang="ts">
import { voiceFaqs } from '~/data/faq'
import { orgId } from '~/data/jsonld'
import { site } from '~/data/site'
import { voiceOffers, voiceProof, voiceSteps } from '~/data/voice'
import { faqJsonLd } from '~/composables/usePageSeo'

const pageUrl = `${site.url}/voice`
const description =
  'Allometrik Voice: production voice AI agents that answer, book and resolve calls in English, Arabic and Spanish. Built on your systems, evaluated on your real calls, governed with full traceability.'

usePageSeo({
  title: 'Allometrik Voice — Production Voice AI Agents',
  description,
  jsonLd: [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Allometrik Voice',
      serviceType: 'Voice AI agent development',
      url: pageUrl,
      description,
      provider: { '@id': orgId },
      areaServed: ['United Arab Emirates', 'Saudi Arabia', 'European Union', 'Spain', 'Mexico', 'Latin America', 'United States'],
      availableLanguage: ['en', 'ar', 'es'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Allometrik Voice engagements',
        itemListElement: voiceOffers.map((offer) => ({
          '@type': 'Offer',
          name: offer.name,
          description: offer.summary,
          url: `${pageUrl}#offers`,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': offer.unit ? 'UnitPriceSpecification' : 'PriceSpecification',
            minPrice: offer.amount,
            priceCurrency: 'USD',
            ...(offer.unit ? { unitText: 'MONTH', unitCode: 'MON' } : {}),
          },
        })),
      },
    },
    faqJsonLd(voiceFaqs),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Allometrik Voice', item: pageUrl },
      ],
    },
  ],
})

const readinessIncludes = [
  'Which of your calls can be automated first, and the likely resolution rate',
  'The integration path into your telephony, booking and CRM systems',
  'Language, consent and data-residency considerations for your markets',
  'The engagement we would recommend, with a fixed price',
]
</script>

<template>
  <div class="voice">
    <header class="hero" aria-labelledby="voice-title">
      <div class="container hero__inner">
        <p class="eyebrow">Allometrik Voice</p>
        <h1 id="voice-title" class="hero__title display-xl">
          Every call,<br />
          <span class="serif hero__serif">answered well.</span>
        </h1>
        <p class="hero__sub">
          Production voice agents that answer, book and resolve in English, Arabic and Spanish. Built on your systems, evaluated on your real calls, governed with full traceability.
        </p>
        <div class="hero__actions">
          <UiButton to="#readiness" variant="halo-ink" size="lg" icon="right">Get a free readiness check</UiButton>
          <NuxtLink to="#offers" class="text-link">See engagements</NuxtLink>
        </div>
      </div>
      <div class="container container--wide hero__stage">
        <VoiceStage />
      </div>
    </header>

    <section class="section proof" aria-labelledby="proof-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">In production</p>
          <h2 id="proof-title" class="display-md" v-reveal>Already on the line, <span class="serif accent-serif">at scale.</span></h2>
        </div>
        <div class="proof__grid">
          <article v-for="(item, i) in voiceProof" :key="item.client" v-reveal="i * 120" class="proof__item">
            <p class="proof__value">{{ item.value }}</p>
            <p class="proof__label">{{ item.label }}</p>
            <div class="proof__meta">
              <p class="proof__client">{{ item.client }}</p>
              <p class="proof__sector mono">{{ item.sector }}</p>
            </div>
            <NuxtLink v-if="item.to" :to="item.to" class="text-link proof__link">
              Read the case <UiIcon name="arrow-right" :size="14" />
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section id="offers" class="section section--tint offers" aria-labelledby="offers-title">
      <div class="container">
        <div class="section-head section-head--split">
          <div class="offers__head">
            <p class="eyebrow">Engagements</p>
            <h2 id="offers-title" class="display-md" v-reveal>Start small. <span class="serif accent-serif">Prove it on real calls.</span></h2>
          </div>
          <p class="lede">Fixed scope, fixed price, measured outcomes. Every engagement runs on your own lines and recordings, never on a demo script.</p>
        </div>

        <ul class="offers__grid" role="list">
          <li v-for="(offer, i) in voiceOffers" :key="offer.id" v-reveal="i * 100" class="offer">
            <p class="offer__timing mono">{{ offer.timing }}</p>
            <h3 class="offer__name">{{ offer.name }}</h3>
            <p class="body offer__summary">{{ offer.summary }}</p>
            <ul class="offer__list" role="list">
              <li v-for="item in offer.includes" :key="item">{{ item }}</li>
            </ul>
            <p class="offer__price">
              <span class="offer__from mono">From</span>
              <span class="offer__amount">{{ offer.price }}</span>
              <span v-if="offer.priceNote" class="offer__note">{{ offer.priceNote }}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section steps" aria-labelledby="steps-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">How it works</p>
          <h2 id="steps-title" class="display-md" v-reveal>Calm, measured, <span class="serif accent-serif">accountable.</span></h2>
        </div>
        <ol class="steps__grid" role="list">
          <li v-for="(step, i) in voiceSteps" :key="step.title" v-reveal="i * 100" class="step">
            <span class="step__n mono">0{{ i + 1 }}</span>
            <h3 class="title">{{ step.title }}</h3>
            <p class="body">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="readiness" class="section section--tint readiness" aria-labelledby="readiness-title">
      <div class="container readiness__grid">
        <div class="readiness__intro">
          <p class="eyebrow">Voice Readiness Check</p>
          <h2 id="readiness-title" class="display-md">Hear what your calls <span class="serif accent-serif">could sound like.</span></h2>
          <p class="lede">
            Tell us about your lines. Within 48 hours you receive a free voice-agent readiness report, or a tailored demo built on your main use case.
          </p>
          <ul class="readiness__list" role="list">
            <li v-for="item in readinessIncludes" :key="item">{{ item }}</li>
          </ul>
          <p class="small">
            Prefer to talk it through?
            <a :href="site.calendly" target="_blank" rel="noopener noreferrer" class="readiness__link">Book a 30-minute call</a>.
          </p>
        </div>
        <div class="readiness__card">
          <VoiceReadinessForm />
        </div>
      </div>
    </section>

    <SiteFaq :items="voiceFaqs" eyebrow="Questions" title="Before the first call" />
  </div>
</template>

<style scoped>
.voice {
  --canvas: #f5f2eb;
  --canvas-2: #efeae0;
  --copper: #c26a35;
  --copper-deep: #9c5226;
  --ink: #0c0d0f;
  background: var(--canvas);
}

.section--tint {
  background: var(--canvas-2);
}

.serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.accent-serif {
  color: var(--copper);
  letter-spacing: -0.02em;
}

/* Hero */
.hero {
  padding-top: calc(var(--nav-h) + clamp(88px, 12vw, 168px));
  padding-bottom: clamp(24px, 4vw, 48px);
}

.hero__inner {
  display: grid;
  justify-items: center;
  text-align: center;
}

.hero__title {
  margin-top: 28px;
  color: var(--ink);
}

.hero__serif {
  display: inline-block;
  color: var(--copper);
  letter-spacing: -0.025em;
  padding-right: 0.06em;
}

.hero__sub {
  max-width: 600px;
  margin-top: 32px;
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.6;
  letter-spacing: -0.012em;
  color: var(--text-2);
  text-wrap: balance;
}

.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px 32px;
  margin-top: 40px;
}

.hero__stage {
  margin-top: clamp(64px, 9vw, 120px);
}

/* Proof */
.proof__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: clamp(48px, 6vw, 80px);
  border-top: 1px solid var(--line-2);
}

.proof__item {
  display: grid;
  align-content: start;
  gap: 18px;
  padding: clamp(32px, 4vw, 48px) clamp(0px, 4vw, 56px) 0 0;
}

.proof__item + .proof__item {
  padding-left: clamp(24px, 4vw, 56px);
  border-left: 1px solid var(--line-2);
}

.proof__value {
  font-size: clamp(76px, 10vw, 152px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.06em;
  color: var(--ink);
  font-feature-settings: 'tnum' on, 'ss01' on;
}

.proof__label {
  max-width: 32ch;
  font-size: clamp(17px, 1.4vw, 19px);
  line-height: 1.5;
  letter-spacing: -0.012em;
  color: var(--text-2);
  text-wrap: pretty;
}

.proof__meta {
  display: grid;
  gap: 4px;
  margin-top: 10px;
}

.proof__client {
  font-size: 15.5px;
  font-weight: 540;
  letter-spacing: -0.012em;
  color: var(--ink);
}

.proof__sector {
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
}

.proof__link {
  justify-self: start;
  margin-top: 8px;
}

/* Offers */
.offers__head {
  display: grid;
  gap: 20px;
}

.offers__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: clamp(48px, 6vw, 80px);
  border-top: 1px solid var(--line-2);
}

.offer {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 36px clamp(20px, 3vw, 40px) 8px;
}

.offer:first-child {
  padding-left: 0;
}

.offer:last-child {
  padding-right: 0;
}

.offer + .offer {
  border-left: 1px solid var(--line-2);
}

.offer__timing {
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.offer__name {
  font-size: clamp(26px, 2.4vw, 32px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: var(--ink);
}

.offer__summary {
  max-width: 34ch;
}

.offer__list {
  display: grid;
  margin-top: 10px;
  border-top: 1px solid var(--line);
}

.offer__list li {
  padding: 11px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14.5px;
  color: var(--ink);
}

.offer__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 10px;
  margin-top: auto;
  padding-top: 28px;
}

.offer__from {
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
}

.offer__amount {
  font-size: clamp(32px, 3vw, 40px);
  font-weight: 450;
  letter-spacing: -0.045em;
  color: var(--ink);
  font-feature-settings: 'tnum' on;
}

.offer__note {
  font-size: 15px;
  color: var(--text-3);
}

/* Steps */
.steps__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0 clamp(20px, 3vw, 40px);
  margin-top: clamp(48px, 6vw, 80px);
}

.step {
  display: grid;
  align-content: start;
  gap: 12px;
  padding-top: 22px;
  border-top: 1px solid var(--line-3);
}

.step__n {
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--copper-deep);
  margin-bottom: 18px;
}

/* Readiness */
.readiness__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(40px, 6vw, 104px);
  align-items: start;
}

.readiness__intro {
  display: grid;
  gap: 22px;
}

.readiness__intro h2 {
  max-width: 14ch;
}

.readiness__list {
  display: grid;
  margin-top: 8px;
  border-top: 1px solid var(--line-2);
}

.readiness__list li {
  position: relative;
  padding: 14px 0 14px 22px;
  border-bottom: 1px solid var(--line-2);
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink);
}

.readiness__list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 22px;
  width: 6px;
  height: 1px;
  background: var(--copper);
}

.readiness__link {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--line-3);
}

.readiness__card {
  padding: clamp(24px, 3.6vw, 48px);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid var(--line);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 30px 80px -40px rgba(12, 13, 15, 0.22);
}

@media (max-width: 1023px) {
  .steps__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px clamp(20px, 3vw, 40px);
  }

  .offers__grid {
    grid-template-columns: 1fr;
  }

  .offer,
  .offer:first-child,
  .offer:last-child {
    padding: 32px 0 36px;
  }

  .offer + .offer {
    border-left: 0;
    border-top: 1px solid var(--line-2);
  }

  .offer__summary {
    max-width: 52ch;
  }

  .readiness__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .proof__grid {
    grid-template-columns: 1fr;
  }

  .proof__item,
  .proof__item + .proof__item {
    padding: 36px 0 40px;
    border-left: 0;
  }

  .proof__item + .proof__item {
    border-top: 1px solid var(--line-2);
  }

  .steps__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .hero__actions :deep(.btn) {
    width: 100%;
    max-width: 360px;
  }
}
</style>
