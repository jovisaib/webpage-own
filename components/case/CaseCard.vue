<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <NuxtLink :to="`/case-studies/${study.slug}`" class="case-card" :class="[`case-card--${study.theme}`, `case-card--${study.visual.type}`]">
    <div class="case-card__visual">
      <CaseVisual :study="study" />
    </div>
    <div class="case-card__shade" aria-hidden="true" />
    <div class="case-card__top">
      <p class="case-card__meta mono">{{ study.sector }}</p>
      <h3 class="case-card__title">{{ study.headline }}</h3>
      <p class="case-card__client">{{ study.client }}</p>
    </div>
    <span class="case-card__arrow" aria-hidden="true">
      <UiIcon name="arrow-up-right" :size="18" :stroke="1.8" />
    </span>
  </NuxtLink>
</template>

<style scoped>
.case-card {
  position: relative;
  isolation: isolate;
  display: block;
  height: 100%;
  min-height: 520px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  transition: transform 0.6s var(--ease-out), box-shadow 0.6s var(--ease-out);
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 60px -30px rgba(17, 19, 24, 0.45);
}

.case-card--dark {
  background: radial-gradient(130% 90% at 85% 105%, #2b1e15 0%, #12141b 55%, #0d0f14 100%);
  color: var(--on-dark);
}

.case-card--stone {
  background: linear-gradient(180deg, #ece8df 0%, #e4dfd3 100%);
  color: var(--ink);
}

.case-card--copper {
  background: linear-gradient(165deg, #bd7546 0%, #8f512d 55%, #5e331b 100%);
  color: #fff8f0;
}

.case-card--light {
  background: linear-gradient(180deg, #ffffff 0%, #f8f6f1 100%);
  border: 1px solid var(--line);
  color: var(--ink);
}

.case-card__visual {
  position: absolute;
  inset: 0;
  z-index: -2;
}

.case-card__shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.case-card--photo .case-card__shade {
  background: linear-gradient(180deg, rgba(9, 10, 14, 0.82) 0%, rgba(9, 10, 14, 0.35) 42%, rgba(9, 10, 14, 0.1) 70%, rgba(9, 10, 14, 0.4) 100%);
}

.case-card--photo {
  color: var(--on-dark);
}

.case-card:hover :deep(.cv__photo) {
  transform: scale(1.04);
}

.case-card:hover :deep(.cv__shot) {
  transform: rotate(-1deg) translateY(-6px);
}

.case-card__top {
  display: grid;
  gap: 12px;
  padding: 26px 64px 0 26px;
}

.case-card__meta {
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.66;
}

.case-card__title {
  font-size: clamp(21px, 1.9vw, 25px);
  line-height: 1.18;
  font-weight: 500;
  letter-spacing: -0.028em;
  text-wrap: balance;
}

.case-card__client {
  font-size: 14px;
  opacity: 0.66;
}

.case-card__arrow {
  position: absolute;
  top: 22px;
  right: 22px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.75;
  transition: transform 0.5s var(--ease-out), opacity 0.3s ease, background-color 0.3s ease;
}

.case-card:hover .case-card__arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}
</style>
