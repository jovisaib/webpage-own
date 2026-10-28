<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    lede?: string
    wide?: boolean
    tone?: 'light' | 'dark'
  }>(),
  { wide: false, tone: 'light' },
)
</script>

<template>
  <header class="page-hero" :class="[`page-hero--${tone}`, { 'page-hero--wide': wide }]" :data-nav-theme="tone">
    <div class="container" :class="{ 'container--wide': wide }">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="display-lg"><slot /></h1>
      <p v-if="lede" class="lede">{{ lede }}</p>
      <div v-if="$slots.actions" class="page-hero__actions">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.page-hero {
  padding-top: calc(var(--nav-h) + 88px);
  padding-bottom: clamp(48px, 6vw, 80px);
}

.page-hero--dark {
  background: radial-gradient(120% 90% at 50% 0%, #1a1613 0%, #0d0f15 58%, #090a0f 100%);
  color: var(--on-dark);
  padding-bottom: clamp(64px, 8vw, 104px);
}

.page-hero h1 {
  max-width: 16ch;
  margin-top: 18px;
}

.page-hero .lede {
  max-width: 640px;
  margin-top: 22px;
}

.page-hero--dark .lede {
  color: var(--on-dark-2);
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
</style>
