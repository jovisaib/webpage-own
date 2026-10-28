<script setup lang="ts">
import { markSrc } from '~/data/brand'

const props = withDefaults(defineProps<{ variant?: 'light' | 'dark'; title?: string }>(), {
  variant: 'light',
  title: 'Allometrik',
})

const src = computed(() => (props.variant === 'dark' ? markSrc.dark : markSrc.light))
</script>

<template>
  <img class="brand-mark" :src="src" :alt="title" width="496" height="572" decoding="async" />
</template>

<style scoped>
.brand-mark {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
