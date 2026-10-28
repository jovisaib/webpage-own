<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(
  defineProps<{
    title?: string
    lede?: string
  }>(),
  {
    title: 'Ready to put production AI to work?',
    lede: 'Book a 30-minute consultation and leave with a concrete automation roadmap.',
  },
)
</script>

<template>
  <section class="band section--dark" data-nav-theme="dark">
    <div class="container band__inner">
      <div>
        <h2 class="display-sm">{{ title }}</h2>
        <p class="band__lede">{{ lede }}</p>
      </div>
      <div class="band__actions">
        <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Book a consultation</UiButton>
        <a :href="`mailto:${site.email}`" class="text-link">{{ site.email }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  padding-block: clamp(64px, 8vw, 96px);
  background: radial-gradient(90% 120% at 100% 0%, #2a1d15 0%, #0d0f14 55%);
}

.band__inner {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 32px;
  flex-wrap: wrap;
}

.band h2 {
  max-width: 16ch;
}

.band__lede {
  max-width: 460px;
  margin-top: 14px;
  font-size: 16.5px;
  line-height: 1.6;
  color: var(--on-dark-2);
}

.band__actions {
  display: grid;
  justify-items: start;
  gap: 16px;
}

.band .text-link {
  color: var(--on-dark);
  border-color: var(--line-dark-2);
}
</style>
