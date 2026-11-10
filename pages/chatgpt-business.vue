<script setup lang="ts">
import ChatGptBusinessLeadForm from '~/components/chatgpt/ChatGptBusinessLeadForm.vue'
import { chatGptFaqs, chatGptOffers } from '~/data/chatgpt-business'
import { orgId } from '~/data/jsonld'
import { site } from '~/data/site'
import { faqJsonLd } from '~/composables/usePageSeo'

const pageUrl = `${site.url}/chatgpt-business`
const description =
  'Independent help claiming your business in ChatGPT Business Hub, auditing AI visibility across answer engines, and preparing Business Agents. Projects from about $5k.'

usePageSeo({
  title: 'ChatGPT Business Presence, Allometrik',
  description,
  image: '/og/chatgpt-business.jpg',
  imageAlt:
    'Allometrik helps with business presence in ChatGPT: setup, visibility audits, and Business Agent readiness.',
  jsonLd: [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'ChatGPT business presence',
      serviceType: 'AI discovery and ChatGPT Business Hub setup',
      url: pageUrl,
      description,
      provider: { '@id': orgId },
      areaServed: 'Worldwide',
      availableLanguage: ['en'],
    },
    faqJsonLd(chatGptFaqs),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'ChatGPT Business', item: pageUrl },
      ],
    },
  ],
})
</script>

<template>
  <div class="cb">
    <header class="hero" aria-labelledby="cb-title">
      <div class="container hero__inner">
        <p class="eyebrow">ChatGPT business presence</p>
        <h1 id="cb-title" class="hero__title display-xl">
          Be found where people<br />
          <span class="serif hero__serif">decide in ChatGPT.</span>
        </h1>
        <p class="hero__sub">
          OpenAI’s Businesses in ChatGPT beta is live. We help you claim your listing, keep feeds accurate, and measure how you appear in ChatGPT and other answer engines.
        </p>
        <div class="hero__actions" v-reveal>
          <UiButton to="#enquiry" variant="halo-ink" size="lg" icon="right">Start a brief</UiButton>
        </div>
      </div>
    </header>

    <section id="offers" class="section offers" aria-labelledby="offers-title">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">What we deliver</p>
          <h2 id="offers-title" class="display-md">Four parts, <span class="serif accent-serif">one programme.</span></h2>
        </div>

        <ul class="offers__grid" role="list">
          <li v-for="(offer, i) in chatGptOffers" :key="offer.id" v-reveal="i * 80" class="offer">
            <p class="offer__n mono">0{{ i + 1 }}</p>
            <h3 class="offer__name">{{ offer.title }}</h3>
            <p class="body offer__summary">{{ offer.summary }}</p>
            <ul class="offer__list" role="list">
              <li v-for="item in offer.bullets" :key="item">{{ item }}</li>
            </ul>
            <p v-if="offer.note" class="offer__note small">{{ offer.note }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--tint why" aria-labelledby="why-title">
      <div class="container why__inner">
        <div class="why__copy">
          <p class="eyebrow">Why now</p>
          <h2 id="why-title" class="display-sm">The beta window is <span class="serif accent-serif">wide open.</span></h2>
          <p class="body lede">
            On 10 November 2026 OpenAI introduced Businesses in ChatGPT in beta: Business Hub for claims, catalogues and aggregated insights, plus Business Agents for eligible US ecommerce and online-service companies.
          </p>
          <p class="body">
            Listings and feeds you set up now shape how ChatGPT represents you later. Early movers earn accurate data, clearer discovery topics and, where eligible, a tested agent before categories and regions expand.
          </p>
          <p class="body">
            Business Hub covers claim, verification, product feeds and engagement insights for eligible businesses wherever ChatGPT is available. Business Agents are rolling out first to eligible US ecommerce and online-service companies.
          </p>
        </div>
      </div>
    </section>

    <section id="enquiry" class="section enquiry" aria-labelledby="enquiry-title">
      <div class="container enquiry__grid">
        <div class="enquiry__intro">
          <p class="eyebrow">Get started</p>
          <h2 id="enquiry-title" class="display-md">Tell us about <span class="serif accent-serif">your catalog.</span></h2>
          <p class="lede">
            We work with teams globally. A short brief is enough; we respond within two business days.
          </p>
        </div>
        <div class="enquiry__card">
          <ChatGptBusinessLeadForm />
        </div>
      </div>
    </section>

    <SiteFaq :items="chatGptFaqs" eyebrow="FAQ" title="Straight answers" />

    <aside class="disclaimer" aria-label="Independence notice">
      <div class="container">
        <p class="small">
          Allometrik is an independent consultancy. We are not affiliated with, endorsed by, or partnered with OpenAI. “ChatGPT”, “Business Hub”, “Business Agent” and related terms refer to OpenAI products described in their public documentation.
        </p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.cb {
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

.section-head--center {
  text-align: center;
  justify-items: center;
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

.hero {
  padding-top: calc(var(--nav-h) + clamp(96px, 14vw, 180px));
  padding-bottom: clamp(48px, 8vw, 96px);
}

.hero__inner {
  display: grid;
  justify-items: center;
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.hero__title {
  margin-top: 24px;
  color: var(--ink);
}

.hero__serif {
  display: inline-block;
  color: var(--copper);
  letter-spacing: -0.025em;
}

.hero__sub {
  max-width: 560px;
  margin-top: 28px;
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.6;
  letter-spacing: -0.012em;
  color: var(--text-2);
  text-wrap: balance;
}

.hero__actions {
  margin-top: 36px;
}

.offers__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-top: clamp(48px, 6vw, 72px);
  border-top: 1px solid var(--line-2);
}

.offer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px clamp(16px, 2vw, 24px) 28px;
  min-width: 0;
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

.offer__n {
  font-size: 11.5px;
  letter-spacing: 0.12em;
  color: var(--copper-deep);
}

.offer__name {
  font-size: clamp(22px, 2vw, 28px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.offer__summary {
  max-width: 28ch;
  color: var(--text-2);
}

.offer__list {
  display: grid;
  margin-top: 8px;
  border-top: 1px solid var(--line);
}

.offer__list li {
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
  line-height: 1.45;
  color: var(--ink);
}

.offer__list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.offer__note {
  margin-top: auto;
  padding-top: 12px;
  color: var(--text-3);
}

.why__inner {
  max-width: 720px;
}

.why__copy .lede {
  margin-top: 16px;
}

.why__copy .body + .body {
  margin-top: 14px;
  max-width: 58ch;
}

.enquiry__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
}

.enquiry__intro {
  display: grid;
  gap: 18px;
}

.enquiry__intro h2 {
  max-width: 14ch;
}

.enquiry__card {
  padding: clamp(24px, 3.6vw, 44px);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid var(--line);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 30px 80px -40px rgba(12, 13, 15, 0.22);
}

.disclaimer {
  padding: clamp(32px, 4vw, 48px) 0 clamp(56px, 8vw, 88px);
}

.disclaimer p {
  max-width: 72ch;
  margin: 0 auto;
  text-align: center;
  color: var(--text-3);
}

@media (max-width: 1023px) {
  .offers__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .offer {
    padding: 28px clamp(14px, 2.5vw, 22px);
  }

  .offer:first-child {
    padding-left: 0;
  }

  .offer:nth-child(2) {
    padding-right: 0;
  }

  .offer:nth-child(3) {
    padding-left: 0;
  }

  .offer:nth-child(4) {
    padding-right: 0;
  }

  .offer:nth-child(n + 3) {
    border-top: 1px solid var(--line-2);
  }

  .offer + .offer {
    border-left: 1px solid var(--line-2);
  }

  .why__inner,
  .enquiry__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .offers__grid {
    grid-template-columns: 1fr;
  }

  .offer,
  .offer:first-child,
  .offer:last-child,
  .offer:nth-child(3),
  .offer:nth-child(4) {
    padding: 28px 0;
    border-left: none;
    border-top: none;
  }

  .offer + .offer {
    border-left: none;
    border-top: 1px solid var(--line-2);
  }

  .offer__summary {
    max-width: none;
  }
}
</style>
