<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'light' | 'dark'; size?: number }>(), {
  variant: 'light',
  size: 30,
})
</script>

<template>
  <span class="brand-logo" :class="`brand-logo--${variant}`" :style="{ '--logo-size': `${size}px` }">
    <BrandMark class="brand-logo__mark" :variant="variant" title="" aria-hidden="true" />
    <span class="brand-logo__word" aria-hidden="true">allometrik</span>
    <span class="sr-only">Allometrik</span>
  </span>
</template>

<style scoped>
.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--logo-size) * 0.18);
  color: var(--ink);
  line-height: 0;
}

.brand-logo--dark {
  color: var(--on-dark);
}

.brand-logo__mark {
  width: calc(var(--logo-size) * 0.87);
  height: var(--logo-size);
  flex: none;
}

.brand-logo__word {
  font-family: var(--font-wordmark);
  font-size: calc(var(--logo-size) * 0.5);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  transform: translateY(calc(var(--logo-size) * 0.03));
}
</style>
