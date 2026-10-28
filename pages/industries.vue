<script setup lang="ts">
import { getCaseStudy, type CaseStudy } from '~/data/case-studies'
import { industries } from '~/data/industries'

usePageSeo({
  title: 'Industries — Allometrik',
  description:
    'Production AI for regulated industries across the UAE and EU: banking and fintech, legal and compliance, public sector, healthcare, insurance, and operations. GDPR, EU AI Act, ISO 27001, VPC deployment.',
})

const related = (slugs: string[]): CaseStudy[] =>
  slugs.map((s) => getCaseStudy(s)).filter((s): s is CaseStudy => Boolean(s))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Industries"
      lede="Every industry carries its own regulators, data constraints and edge cases. We design for yours from the first workshop — with a UAE and EU focus, and deployment inside your VPC."
    >
      Built for regulated, <span class="accent">mission-critical</span> work.
    </PageHero>

    <section class="section section--flush-top">
      <div class="container toc">
        <a v-for="ind in industries" :key="ind.slug" :href="`#${ind.slug}`" class="toc__link">{{ ind.name }}</a>
      </div>
    </section>

    <section v-for="(ind, i) in industries" :id="ind.slug" :key="ind.slug" class="section industry" :class="{ 'section--stone': i % 2 === 1 }">
      <div class="container industry__grid">
        <div>
          <p class="eyebrow">{{ String(i + 1).padStart(2, '0') }}</p>
          <h2 class="display-md">{{ ind.name }}</h2>
          <p class="lede">{{ ind.headline }}</p>
          <p class="body-lg para">{{ ind.description }}</p>
        </div>
        <aside class="industry__proof">
          <p class="mono kicker">Proof</p>
          <p class="industry__value">{{ ind.proof.value }}</p>
          <p class="industry__label">{{ ind.proof.label }}</p>
        </aside>
        <div>
          <h3 class="title">Where it shows up</h3>
          <ul class="list" role="list">
            <li v-for="item in ind.useCases" :key="item">
              <UiIcon name="check" :size="14" :stroke="2.2" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <h3 class="title">What teams struggle with</h3>
          <ul class="list list--plain" role="list">
            <li v-for="item in ind.challenges" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="industry__fw">
          <p class="mono kicker">Compliance &amp; deployment</p>
          <div class="chips">
            <span v-for="f in ind.frameworks" :key="f" class="chip">{{ f }}</span>
          </div>
        </div>
        <div v-if="related(ind.relatedCases).length" class="industry__cases">
          <p class="mono kicker">Related stories</p>
          <NuxtLink v-for="study in related(ind.relatedCases)" :key="study.slug" :to="`/case-studies/${study.slug}`" class="case-link">
            <span>{{ study.headline }}</span>
            <UiIcon name="arrow-up-right" :size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section section--dark" data-nav-theme="dark">
      <div class="container region">
        <p class="eyebrow">UAE &amp; EU</p>
        <h2 class="display-sm">Designed for the two regulatory theatres we work in every week</h2>
        <ul class="region__grid" role="list">
          <li>
            <h3 class="title">United Arab Emirates</h3>
            <p class="body">Headquarters in Dubai. Systems aligned with UAE PDPL, CBUAE guidance, DIFC and ADGM data protection, and sovereign or on-premise hosting when data cannot leave the country.</p>
          </li>
          <li>
            <h3 class="title">European Union</h3>
            <p class="body">European engineering and delivery from Spain. GDPR, the EU AI Act, DORA, NIS2 and ISO 27001 treated as design constraints, not paperwork after launch.</p>
          </li>
        </ul>
      </div>
    </section>

    <PageCta />
  </div>
</template>

<style scoped>
.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.toc__link {
  height: 38px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--line-2);
  background: var(--paper);
  font-size: 13.5px;
  font-weight: 500;
}

.toc__link:hover {
  border-color: var(--ink);
}

.industry__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr);
  gap: 22px 48px;
}

.industry h2 {
  margin-top: 10px;
}

.industry .lede {
  margin-top: 16px;
}

.para {
  margin-top: 16px;
}

.industry__proof {
  padding: 28px;
  border-radius: var(--radius-lg);
  background: var(--ink);
  color: var(--on-dark);
}

.kicker {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.industry__proof .kicker {
  color: var(--copper-2);
}

.industry__value {
  margin-top: 18px;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1;
}

.industry__label {
  margin-top: 10px;
  color: var(--on-dark-2);
}

.list {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.list li {
  display: flex;
  gap: 8px;
  font-size: 15px;
  color: var(--ink);
}

.list :deep(svg) {
  color: var(--copper-deep);
  flex: none;
  margin-top: 3px;
}

.list--plain li {
  padding-left: 14px;
  position: relative;
}

.list--plain li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--copper);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.case-link {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: var(--paper);
  font-size: 15px;
  font-weight: 500;
}

.region h2 {
  max-width: 18ch;
  margin: 14px 0 32px;
}

.region__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 48px;
}

.region .body {
  margin-top: 10px;
  color: var(--on-dark-2);
}

@media (max-width: 860px) {
  .industry__grid,
  .region__grid {
    grid-template-columns: 1fr;
  }
}
</style>
