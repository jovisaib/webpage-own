<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'

const props = defineProps<{ study: CaseStudy }>()
const cover = computed(() => props.study.image)
const kicker = computed(() => props.study.metrics[0])
</script>

<template>
  <NuxtLink :to="`/case-studies/${study.slug}`" class="case-card">
    <div class="case-card__media">
      <img :src="cover" :alt="study.imageAlt" class="case-card__img" loading="lazy" decoding="async" width="1600" height="1060" />
      <span class="case-card__grain" aria-hidden="true" />
      <span class="case-card__shade" aria-hidden="true" />
    </div>
    <div class="case-card__pills">
      <span class="case-card__pill">{{ study.sector }}</span>
      <span class="case-card__pill">{{ study.region }}</span>
    </div>
    <p v-if="kicker" class="case-card__metric">
      <strong>{{ kicker.value }}</strong>
      <span>{{ kicker.label }}</span>
    </p>
    <div class="case-card__copy">
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
  min-height: 560px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  color: #f7f4ee;
  background: #0c0d0f;
  transition: transform 0.6s var(--ease-out), box-shadow 0.6s var(--ease-out);
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 36px 70px -32px rgba(17, 19, 24, 0.55);
}

.case-card__media {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.case-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 1.4s var(--ease-out);
}

.case-card:hover .case-card__img {
  transform: scale(1.08);
}

.case-card__grain {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
}

.case-card__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(12, 13, 15, 0.18) 0%, rgba(12, 13, 15, 0.12) 38%, rgba(12, 13, 15, 0.82) 100%),
    linear-gradient(90deg, rgba(12, 13, 15, 0.28), transparent 45%);
}

.case-card__pills {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: calc(100% - 168px);
}

.case-card__pill {
  flex: 0 0 auto;
  padding: 6px 10px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(247, 244, 238, 0.92);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  white-space: nowrap;
}

.case-card__metric {
  position: absolute;
  top: 20px;
  right: 20px;
  display: grid;
  gap: 2px;
  max-width: 148px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(12, 13, 15, 0.45);
  border: 1px solid rgba(229, 169, 124, 0.35);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  text-align: right;
}

.case-card__metric strong {
  font-size: 22px;
  font-weight: 560;
  letter-spacing: -0.04em;
  line-height: 1;
}

.case-card__metric span {
  font-size: 11px;
  line-height: 1.3;
  color: rgba(247, 244, 238, 0.72);
}

.case-card__copy {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  display: grid;
  gap: 10px;
  padding-right: 36px;
}

.case-card__title {
  font-size: clamp(20px, 1.8vw, 24px);
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.case-card__client {
  font-size: 13.5px;
  color: rgba(247, 244, 238, 0.7);
}

.case-card__arrow {
  position: absolute;
  right: 20px;
  bottom: 22px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  transition: transform 0.5s var(--ease-out), background-color 0.3s ease;
}

.case-card:hover .case-card__arrow {
  transform: translate(2px, -2px);
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .case-card {
    min-height: 480px;
  }

  .case-card__metric {
    top: auto;
    bottom: auto;
    right: 16px;
    top: 16px;
    max-width: 120px;
  }
}
</style>
