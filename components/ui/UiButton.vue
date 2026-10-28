<script setup lang="ts">
type Variant = 'ink' | 'light' | 'ghost' | 'halo' | 'halo-ink' | 'glass'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: Variant
    size?: 'sm' | 'md' | 'lg'
    icon?: 'up' | 'right' | 'none'
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'ink', size: 'md', icon: 'none', type: 'button', disabled: false },
)

const classes = computed(() => ['btn', `btn--${props.variant}`, props.size !== 'md' && `btn--${props.size}`])
const isExternal = computed(() => !!props.href && /^(https?:|mailto:|tel:)/.test(props.href))
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
    <UiIcon v-if="icon !== 'none'" :name="icon === 'up' ? 'arrow-up-right' : 'arrow-right'" :class="['btn__icon', `btn__icon--${icon}`]" :size="14" :stroke="1.9" />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="classes"
    :target="isExternal && !href.startsWith('mailto:') ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <UiIcon v-if="icon !== 'none'" :name="icon === 'up' ? 'arrow-up-right' : 'arrow-right'" :class="['btn__icon', `btn__icon--${icon}`]" :size="14" :stroke="1.9" />
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled">
    <slot />
    <UiIcon v-if="icon !== 'none'" :name="icon === 'up' ? 'arrow-up-right' : 'arrow-right'" :class="['btn__icon', `btn__icon--${icon}`]" :size="14" :stroke="1.9" />
  </button>
</template>
