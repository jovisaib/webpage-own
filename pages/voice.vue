<script setup lang="ts">
import { voiceFaqs } from '~/data/faq'
import { orgId } from '~/data/jsonld'
import { site } from '~/data/site'
import { voiceClientQuote, voiceOffers, voiceStackLogos, voiceSteps, voiceStories, voiceTrustLogos } from '~/data/voice'
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
      category: [
        'Voice AI agents',
        'IVR integration and replacement',
        'Contact-centre automation',
        'Call quality auditing',
        'Lead qualification and outbound',
      ],
      disambiguatingDescription: `Integrates with ${voiceStackLogos.map((l) => l.name).join(', ')}, including existing IVR menus and flows.`,
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

    <section class="trust" aria-labelledby="trust-title">
      <div class="container">
        <h2 id="trust-title" class="trust__title">Trusted by enterprises, institutions and academies across 10+ countries</h2>
        <ul class="trust__row" role="list">
          <li v-for="logo in voiceTrustLogos" :key="logo.name" class="trust__item">
            <img
              :src="logo.src"
              :alt="logo.name"
              :width="logo.width"
              :height="logo.height"
              :style="{ height: `${logo.displayHeight}px` }"
              loading="lazy"
              decoding="async"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="section stories" aria-labelledby="stories-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">In production</p>
          <h2 id="stories-title" class="display-md" v-reveal>Already on the line, <span class="serif accent-serif">at scale.</span></h2>
        </div>

        <article v-for="(item, i) in voiceStories" :key="item.study.slug" class="story" :aria-labelledby="`story-${i}`">
          <figure class="story__frame" data-nav-theme="dark" v-reveal>
            <img :src="item.study.image" :alt="item.study.imageAlt" class="story__img" loading="lazy" decoding="async" />
            <figcaption class="story__overlay">
              <div class="story__who">
                <p class="story__meta mono">0{{ i + 1 }} · {{ item.study.sector }} · {{ item.study.region }}</p>
                <h3 :id="`story-${i}`" class="story__client">{{ item.study.client }}</h3>
              </div>
              <p class="story__metric">
                <span class="story__metric-v">{{ item.metric.value }}</span>
                <span class="story__metric-l">{{ item.metric.label }}</span>
              </p>
            </figcaption>
          </figure>

          <div class="story__body">
            <div class="story__col">
              <h4 class="story__h mono">The challenge</h4>
              <p v-for="para in item.study.challenge" :key="para" class="body">{{ para }}</p>
            </div>
            <div class="story__col">
              <h4 class="story__h mono">What we built</h4>
              <p v-for="para in item.study.approach" :key="para" class="body">{{ para }}</p>
            </div>
            <div class="story__col">
              <h4 class="story__h mono">The result</h4>
              <div class="story__ba">
                <div v-for="side in (['before', 'after'] as const)" :key="side" class="story__ba-col" :class="`story__ba-col--${side}`">
                  <p class="story__ba-k mono">{{ side === 'before' ? 'Before' : 'After' }}</p>
                  <dl>
                    <div v-for="row in item.study.beforeAfter[side]" :key="row.label" class="story__ba-row">
                      <dt>{{ row.label }}</dt>
                      <dd>{{ row.value }}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <p class="story__payback small">Payback in {{ item.study.payback }}.</p>
            </div>
          </div>

          <div class="story__foot">
            <p class="story__stack mono">{{ item.study.stack.join(' · ') }}</p>
            <NuxtLink :to="`/case-studies/${item.study.slug}`" class="text-link">
              Read the full case <UiIcon name="arrow-right" :size="14" />
            </NuxtLink>
          </div>

          <figure v-if="item.quote" class="story__quote">
            <blockquote>
              <p class="serif">“{{ item.quote.quote }}”</p>
            </blockquote>
            <figcaption>
              <img v-if="item.quote.logo" :src="item.quote.logo" :alt="item.quote.name" class="story__quote-logo" loading="lazy" />
              <span class="mono">Strategic delivery partner</span>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>

    <section class="section section--tint stackwall" aria-labelledby="stack-title">
      <div class="container">
        <div class="section-head section-head--split">
          <div class="offers__head">
            <p class="eyebrow">Works with your stack</p>
            <h2 id="stack-title" class="display-md" v-reveal>Inside your IVR, <span class="serif accent-serif">not beside it.</span></h2>
          </div>
          <p class="lede">
            The agent sits within your existing IVR menus and flows, or replaces them outright, and acts in the systems your teams already use.
          </p>
        </div>
        <ul class="stackwall__grid" role="list">
          <li v-for="logo in voiceStackLogos" :key="logo.name" class="stackwall__tile">
            <img
              :src="logo.src"
              :alt="logo.name"
              :style="{ height: `${Math.round(56 / Math.sqrt(logo.ratio))}px` }"
              class="stackwall__logo"
              loading="lazy"
              decoding="async"
            />
            <span class="stackwall__cap mono">{{ logo.caption }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section id="offers" class="section offers" aria-labelledby="offers-title">
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

    <section class="section section--tint steps" aria-labelledby="steps-title">
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

    <section v-if="voiceClientQuote" class="section quote" aria-label="Client testimonial">
      <figure class="container quote__inner" v-reveal>
        <blockquote>
          <p class="quote__text serif">“{{ voiceClientQuote.quote }}”</p>
        </blockquote>
        <figcaption class="quote__by">
          <img v-if="voiceClientQuote.logo" :src="voiceClientQuote.logo" :alt="voiceClientQuote.company" class="quote__logo" loading="lazy" />
          <span><strong>{{ voiceClientQuote.name }}</strong> · {{ voiceClientQuote.role }}</span>
        </figcaption>
      </figure>
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

/* Trust strip */
.trust {
  padding: clamp(56px, 7vw, 96px) 0 clamp(8px, 2vw, 24px);
}

.trust__title {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  font-size: clamp(15px, 1.3vw, 17px);
  font-weight: 450;
  line-height: 1.45;
  letter-spacing: -0.012em;
  color: var(--text-3);
  text-wrap: balance;
}

.trust__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 28px clamp(28px, 3.4vw, 52px);
  margin-top: 36px;
}

@media (min-width: 1024px) {
  .trust__row {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.trust__item img {
  width: auto;
  max-width: 150px;
  object-fit: contain;
  filter: grayscale(100%) contrast(1.05) opacity(0.62);
  transition: filter 0.5s var(--ease-out);
}

.trust__item img:hover {
  filter: grayscale(0%) opacity(1);
}

/* Stories */
.story {
  margin-top: clamp(56px, 7vw, 96px);
}

.story + .story {
  margin-top: clamp(88px, 11vw, 152px);
}

.story__frame {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin: 0;
  aspect-ratio: 16 / 7;
  border-radius: 28px;
  background: var(--ink);
}

.story__img {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
}

.story__frame::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(12, 13, 15, 0) 30%, rgba(12, 13, 15, 0.82) 100%),
    linear-gradient(90deg, rgba(12, 13, 15, 0.35), transparent 60%);
}

.story__overlay {
  position: absolute;
  inset: auto 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 48px;
  padding: clamp(24px, 3.4vw, 48px);
  color: #f5f2eb;
}

.story__meta {
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 242, 235, 0.68);
}

.story__client {
  max-width: 18ch;
  margin-top: 12px;
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.story__metric {
  display: grid;
  justify-items: end;
  gap: 8px;
  max-width: 300px;
  text-align: right;
}

.story__metric-v {
  font-size: clamp(64px, 8vw, 120px);
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: -0.06em;
  font-feature-settings: 'tnum' on;
}

.story__metric-l {
  font-size: 14.5px;
  line-height: 1.45;
  color: rgba(245, 242, 235, 0.78);
  text-wrap: balance;
}

.story__body {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px clamp(28px, 4vw, 64px);
  margin-top: clamp(36px, 4vw, 56px);
}

.story__col {
  display: grid;
  align-content: start;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--line-3);
}

.story__h {
  margin-bottom: 6px;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.story__ba {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.story__ba dl {
  display: grid;
  margin: 0;
}

.story__ba-k {
  margin-bottom: 8px;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
}

.story__ba-row {
  display: grid;
  gap: 2px;
  padding: 10px 0;
  border-top: 1px solid var(--line);
}

.story__ba dt {
  font-size: 13px;
  line-height: 1.4;
  color: var(--text-3);
}

.story__ba dd {
  margin: 0;
  line-height: 30px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-3);
  font-feature-settings: 'tnum' on;
}

.story__ba-col--after dd {
  font-size: 22px;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.story__payback {
  margin-top: 4px;
}

.story__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px 32px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.story__stack {
  font-size: 11.5px;
  line-height: 1.7;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
}

.story__quote {
  display: grid;
  gap: 20px;
  max-width: 820px;
  margin: clamp(48px, 6vw, 72px) 0 0;
  padding-left: clamp(20px, 3vw, 32px);
  border-left: 1px solid var(--copper);
}

.story__quote p {
  font-size: clamp(22px, 2.2vw, 30px);
  line-height: 1.3;
  color: var(--ink);
  text-wrap: pretty;
}

.story__quote figcaption {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
}

.story__quote-logo {
  height: 22px;
  width: auto;
  filter: grayscale(100%) opacity(0.75);
}

/* Logo wall */
.stackwall__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: clamp(48px, 6vw, 72px);
  overflow: hidden;
  border: 1px solid var(--line-2);
  border-radius: var(--radius-lg);
  background: var(--line-2);
}

.stackwall__tile {
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
  gap: 18px;
  min-height: 168px;
  padding: 40px 20px 24px;
  background: var(--canvas-2);
}

.stackwall__logo {
  width: auto;
  max-width: 72%;
  opacity: 0.86;
  transition: opacity 0.4s ease;
}

.stackwall__tile:hover .stackwall__logo {
  opacity: 1;
}

.stackwall__cap {
  text-align: center;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
}

/* Quote */
.quote__inner {
  display: grid;
  justify-items: center;
  gap: 28px;
  max-width: calc(900px + var(--gutter) * 2);
  margin: 0 auto;
  text-align: center;
}

.quote__text {
  font-size: clamp(26px, 3.2vw, 42px);
  line-height: 1.22;
  letter-spacing: -0.015em;
  color: var(--ink);
  text-wrap: balance;
}

.quote__by {
  display: grid;
  justify-items: center;
  gap: 14px;
  font-size: 14.5px;
  color: var(--text-3);
}

.quote__by strong {
  font-weight: 540;
  color: var(--ink);
}

.quote__logo {
  height: 24px;
  width: auto;
  filter: grayscale(100%) opacity(0.7);
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
  .story__body {
    grid-template-columns: 1fr;
  }

  .story__frame {
    aspect-ratio: 4 / 3;
  }

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
  .story__frame {
    aspect-ratio: 3 / 4;
  }

  .story__overlay {
    flex-direction: column;
    align-items: flex-start;
  }

  .story__metric {
    justify-items: start;
    text-align: left;
  }

  .stackwall__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stackwall__tile {
    min-height: 132px;
    padding: 30px 12px 18px;
  }

  .stackwall__tile:last-child {
    grid-column: 1 / -1;
  }

  .trust__row {
    gap: 24px 36px;
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
