<script setup lang="ts">
import { mondayFaqs } from '~/data/faq'
import { mondayTiers, mondayVerticals } from '~/data/monday-aitp'
import { site } from '~/data/site'
import { faqJsonLd } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Technology & ecosystem alliances — Allometrik × monday.com AITP',
  description:
    'Fixed-scope AI and Work OS deployments on monday.com Enterprise, Service and CRM — live in weeks. monday.com Authorized Partner (UAE / EMEA).',
  jsonLd: [faqJsonLd(mondayFaqs)],
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Technology &amp; ecosystem alliances"
      lede="Fixed-scope AI and Work OS deployments on monday.com Enterprise, Service and CRM — live in weeks."
    >
      Production AI, paired with the <span class="accent">Work OS you already run.</span>
      <template #actions>
        <img src="/brand/monday-logo.svg" alt="monday.com" width="200" height="20" class="hero-logo" />
      </template>
    </PageHero>

    <section class="section section--flush-top creds-sec">
      <div class="container">
        <MondayBadges />
      </div>
    </section>

    <section class="section section--flush-top split">
      <div class="container split__grid">
        <article class="card contrast">
          <p class="eyebrow">This track</p>
          <h2 class="title">monday.com AITP</h2>
          <p class="body">Fixed-scope Work OS packages, live in 3–10 weeks on monday Enterprise, Service or CRM.</p>
        </article>
        <article class="card contrast contrast--alt">
          <p class="eyebrow">The other track</p>
          <h2 class="title">Custom production agents + free AI OS</h2>
          <p class="body">Ground-up engineering on your VPC, with Allometrik AI OS included at $0 licence.</p>
          <NuxtLink to="/ai-os" class="text-link">See Allometrik AI OS <UiIcon name="arrow-right" :size="14" /></NuxtLink>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="eyebrow">Fixed-scope AITP tiers</p>
        <h2 class="display-sm">Three packages. No seat-licence theatre.</h2>
        <div class="tiers">
          <article v-for="tier in mondayTiers" :key="tier.id" class="tier card" :class="{ 'tier--hot': tier.popular }">
            <p class="tier__n mono">{{ tier.n }}</p>
            <p v-if="tier.popular" class="tier__flag">Most popular</p>
            <h3 class="title-lg">{{ tier.name }}</h3>
            <p class="tier__price">{{ tier.price }}</p>
            <p class="tier__meta">{{ tier.duration }}</p>
            <ul role="list">
              <li v-for="point in tier.points" :key="point">
                <UiIcon name="check" :size="14" :stroke="2.2" />
                {{ point }}
              </li>
            </ul>
            <p class="tier__managed">{{ tier.managed }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <p class="eyebrow">UAE &amp; regional verticals</p>
        <h2 class="display-sm">Three blueprints we already run</h2>
        <div class="verts">
          <article v-for="v in mondayVerticals" :key="v.id" class="card vert">
            <p class="eyebrow">{{ v.kicker }}</p>
            <h3 class="title">{{ v.title }}</h3>
            <p class="body">{{ v.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <aside class="hook">
          <p class="eyebrow">Trojan horse</p>
          <h2 class="display-md">48-Hour Live Diagnostic &amp; Proof</h2>
          <p class="lede">Send three real anonymised documents. We deploy a working demo in our monday.com sandbox in 48 hours.</p>
          <div class="hook__actions">
            <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Send three documents</UiButton>
            <a :href="site.mondayPartnerStack" target="_blank" rel="noopener noreferrer" class="text-link">
              Official PartnerStack workspace activation ↗
            </a>
          </div>
        </aside>
      </div>
    </section>

    <HomeEngage />
    <SiteFaq :items="mondayFaqs" title="AITP, in plain language" />
    <PageCta title="Start with a 48-hour diagnostic" lede="Three anonymised documents. A working monday.com sandbox. Then a fixed-scope proposal." />
  </div>
</template>

<style scoped>
.hero-logo {
  height: 26px;
  width: auto;
}

.creds-sec {
  padding-top: 0;
  padding-bottom: 8px;
}

.split__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 14px;
}

.contrast {
  padding: 28px;
  display: grid;
  align-content: start;
  gap: 12px;
  height: 100%;
}

.contrast--alt {
  background: var(--ink);
  color: var(--on-dark);
  border-color: transparent;
}

.contrast--alt .body {
  color: var(--on-dark-2);
}

.tiers {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
  align-items: stretch;
}

.tier {
  position: relative;
  padding: 28px 24px;
  display: grid;
  align-content: start;
  height: 100%;
  gap: 10px;
}

.tier--hot {
  background: #0c0d0f;
  color: var(--on-dark);
  border-color: transparent;
}

.tier__n {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--copper-deep);
}

.tier--hot .tier__n,
.tier--hot .tier__flag {
  color: var(--copper-2);
}

.tier__flag {
  position: absolute;
  top: 24px;
  right: 20px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tier__price {
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.tier__meta {
  font-size: 14px;
  color: var(--text-3);
}

.tier--hot .tier__meta,
.tier--hot .tier__managed,
.tier--hot li {
  color: var(--on-dark-2);
}

.tier ul {
  display: grid;
  gap: 10px;
  margin: 8px 0 4px;
}

.tier li {
  display: flex;
  gap: 8px;
  font-size: 14.5px;
  color: var(--text-2);
}

.tier li :deep(svg) {
  flex: none;
  margin-top: 4px;
  color: var(--copper);
}

.tier__managed {
  font-size: 13px;
  color: var(--text-3);
}

.verts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 14px;
  margin-top: 28px;
}

.vert {
  padding: 26px;
  display: grid;
  align-content: start;
  height: 100%;
  gap: 12px;
}

.hook {
  padding: clamp(32px, 5vw, 56px);
  border-radius: 28px;
  background: #0c0d0f;
  color: var(--on-dark);
  display: grid;
  gap: 18px;
}

.hook .lede {
  color: var(--on-dark-2);
  max-width: 62ch;
}

.hook__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
}

.hook .text-link {
  color: var(--on-dark);
  border-color: var(--line-dark-2);
}

@media (max-width: 960px) {
  .split__grid,
  .tiers,
  .verts {
    grid-template-columns: 1fr;
  }
}
</style>
