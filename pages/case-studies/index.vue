<script setup lang="ts">
import { caseStudies } from '~/data/case-studies'

usePageSeo({
  title: 'Case Studies — Allometrik',
  description:
    'Editorial client stories from Allometrik: multilingual guest operations on Palm Jumeirah, Fortune 500 insurance voice QA across Latin America, Spanish pagarés, EU legal compliance, and RAG at scale.',
})

const sectors = computed(() => ['All', ...Array.from(new Set(caseStudies.map((s) => s.sector)))])
const active = ref('All')
const filtered = computed(() => (active.value === 'All' ? caseStudies : caseStudies.filter((s) => s.sector === active.value)))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Case studies"
      lede="Production systems with measured outcomes — the problems that move the business, solved inside the enterprise, owned by the client."
    >
      Solving the problems that <span class="accent">move the business.</span>
    </PageHero>

    <section class="section section--flush-top">
      <div class="container">
        <div class="filters" role="tablist" aria-label="Filter by sector">
          <button
            v-for="sector in sectors"
            :key="sector"
            type="button"
            class="filters__chip"
            :class="{ 'is-active': active === sector }"
            :aria-pressed="active === sector"
            @click="active = sector"
          >
            {{ sector }}
          </button>
        </div>

        <div class="grid">
          <article v-for="(study, i) in filtered" :key="study.slug" v-reveal="(i % 4) * 70" class="grid__item">
            <CaseCard :study="study" />
            <p class="grid__metrics">
              <span v-for="m in study.metrics.slice(0, 2)" :key="m.label">
                <strong>{{ m.value }}</strong>
                {{ m.label }}
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>

    <PageCta title="Have a process that looks like these?" lede="We will map it against a golden dataset in the first two weeks, then ship." />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filters__chip {
  height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--line-2);
  background: var(--paper);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-2);
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.filters__chip:hover,
.filters__chip.is-active {
  background: var(--ink);
  color: var(--canvas);
  border-color: var(--ink);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 16px;
}

.grid__item {
  display: grid;
  gap: 12px;
}

.grid__metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  padding: 0 4px;
  font-size: 13.5px;
  color: var(--text-3);
}

.grid__metrics strong {
  font-weight: 560;
  color: var(--ink);
  margin-right: 6px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
