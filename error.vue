<script setup lang="ts">
import { site } from '~/data/site'

const props = defineProps<{ error: { statusCode?: number; statusMessage?: string; message?: string } }>()

const is404 = computed(() => Number(props.error?.statusCode) === 404)
const code = computed(() => props.error?.statusCode || 500)

useSeoMeta({
  title: computed(() => `${is404.value ? 'Page not found' : 'Error'} — Allometrik`),
  robots: 'noindex',
})

const recover = async () => {
  await clearError({ redirect: '/' })
}
</script>

<template>
  <div class="err">
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteNav />
    <main id="main" class="err__main">
      <div class="container err__inner">
        <p class="eyebrow">{{ code }}</p>
        <h1 class="display-lg">
          <template v-if="is404">This page is <span class="accent">not in production.</span></template>
          <template v-else>Something <span class="accent">broke</span> on our side.</template>
        </h1>
        <p class="lede">
          <template v-if="is404">
            The URL may have moved, or it never existed. The systems we ship are easier to find from the homepage.
          </template>
          <template v-else>
            An unexpected error stopped this page from rendering. Try again, or go back to the homepage.
          </template>
        </p>
        <div class="err__actions">
          <UiButton variant="ink" size="lg" icon="right" @click="recover">Back to homepage</UiButton>
          <a :href="`mailto:${site.email}`" class="text-link">{{ site.email }}</a>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.err {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--canvas);
}

.err__main {
  flex: 1;
  display: grid;
  align-items: center;
  padding-top: calc(var(--nav-h) + 48px);
  padding-bottom: 64px;
}

.err__inner {
  max-width: 760px;
}

.err h1 {
  max-width: 14ch;
  margin-top: 18px;
}

.err .lede {
  margin-top: 20px;
  max-width: 520px;
}

.err__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
}
</style>
