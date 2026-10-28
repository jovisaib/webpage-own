<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <section class="roi">
    <div class="container">
      <div class="roi__head">
        <p class="eyebrow">How the business benefits</p>
        <h2 class="display-sm">Before vs. after Allometrik</h2>
        <p class="roi__payback mono">Payback window · {{ study.payback }}</p>
      </div>
      <div class="roi__grid">
        <article class="roi__col">
          <p class="roi__kicker">Before</p>
          <ul role="list">
            <li v-for="row in study.beforeAfter.before" :key="row.label">
              <span>{{ row.label }}</span>
              <strong>{{ row.value }}</strong>
            </li>
          </ul>
        </article>
        <article class="roi__col roi__col--after">
          <p class="roi__kicker">After Allometrik</p>
          <ul role="list">
            <li v-for="row in study.beforeAfter.after" :key="row.label">
              <span>{{ row.label }}</span>
              <strong>{{ row.value }}</strong>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roi {
  padding-block: 56px;
  background: var(--canvas-2);
}

.roi__head {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.roi__payback {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.roi__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.roi__col {
  padding: 24px 26px;
  border-radius: var(--radius-lg);
  background: var(--paper);
  border: 1px solid var(--line);
}

.roi__col--after {
  background: var(--ink);
  color: var(--on-dark);
  border-color: transparent;
}

.roi__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 16px;
}

.roi__col--after .roi__kicker {
  color: var(--copper-2);
}

.roi__col li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  font-size: 15px;
}

.roi__col--after li {
  border-top-color: var(--line-dark);
}

.roi__col strong {
  font-weight: 560;
  letter-spacing: -0.02em;
}

@media (max-width: 720px) {
  .roi__grid {
    grid-template-columns: 1fr;
  }
}
</style>
