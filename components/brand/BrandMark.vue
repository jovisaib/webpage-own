<script setup lang="ts">
import { markDark, markLight, markViewBox } from '~/data/brand'

const props = withDefaults(defineProps<{ variant?: 'light' | 'dark'; title?: string }>(), {
  variant: 'light',
  title: 'Allometrik',
})

const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')

const content = computed(() => {
  const body = props.variant === 'dark' ? markDark : markLight
  return body.replace(/(id="|url\(#)(am-[a-z-]+)/g, (_m, prefix: string, id: string) => `${prefix}${id}-${uid}`)
})
</script>

<template>
  <svg :viewBox="markViewBox" role="img" :aria-label="title" xmlns="http://www.w3.org/2000/svg" v-html="content" />
</template>
