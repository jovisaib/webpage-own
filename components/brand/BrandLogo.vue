<script setup lang="ts">
import { wordmark } from '~/data/brand'

withDefaults(defineProps<{ variant?: 'light' | 'dark'; size?: number }>(), {
  variant: 'light',
  size: 30,
})
</script>

<template>
  <span class="brand-logo" :class="`brand-logo--${variant}`" :style="{ '--logo-size': `${size}px` }">
    <BrandMark class="brand-logo__mark" :variant="variant" title="" aria-hidden="true" />
    <svg class="brand-logo__word" :viewBox="wordmark.viewBox" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path :d="wordmark.d" fill="currentColor" />
    </svg>
    <span class="sr-only">Allometrik</span>
  </span>
</template>

<style scoped>
.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--logo-size) * 0.16);
  color: var(--ink);
  line-height: 0;
}

.brand-logo--dark {
  color: var(--on-dark);
}

.brand-logo__mark {
  width: var(--logo-size);
  height: var(--logo-size);
  flex: none;
}

.brand-logo__word {
  height: calc(var(--logo-size) * 0.44);
  width: auto;
  margin-top: calc(var(--logo-size) * 0.1);
}
</style>
