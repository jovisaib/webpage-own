<script setup lang="ts">
import type { FaqItem } from '~/data/faq'

defineProps<{ items: FaqItem[]; title?: string; eyebrow?: string }>()

const open = ref(0)
</script>

<template>
  <section class="section faq" aria-labelledby="faq-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">{{ eyebrow || 'Questions' }}</p>
        <h2 id="faq-title" class="display-sm">{{ title || 'What operators usually ask' }}</h2>
      </div>
      <div class="faq__list">
        <article v-for="(item, i) in items" :key="item.q" class="faq__item">
          <h3>
            <button type="button" class="faq__q" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
              <span>{{ item.q }}</span>
              <UiIcon name="chevron-down" :size="18" :class="{ 'is-open': open === i }" />
            </button>
          </h3>
          <p v-show="open === i" class="faq__a body">{{ item.a }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__list {
  margin-top: 28px;
  border-top: 1px solid var(--line);
}

.faq__item {
  border-bottom: 1px solid var(--line);
}

.faq__q {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0;
  text-align: left;
  font-size: 18px;
  font-weight: 540;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.faq__q :deep(svg) {
  flex: none;
  color: var(--text-3);
  transition: transform 0.3s var(--ease-out);
}

.faq__q :deep(svg.is-open) {
  transform: rotate(180deg);
}

.faq__a {
  padding: 0 0 22px;
  max-width: 68ch;
}
</style>
