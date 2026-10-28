<script setup lang="ts">
import { insights } from '~/data/insights'
import { formatDate } from '~/utils/format'

usePageSeo({
  title: 'Insights — Allometrik',
  description:
    'Research and writing from Allometrik on production AI: enterprise opportunities from C-level interviews, RAG beyond vector search, fine-tuning embeddings, and schema engineering.',
})

const featured = computed(() => insights.find((i) => i.featured) ?? insights.find((i) => i.kind === 'article'))
const articles = computed(() => insights.filter((i) => i.kind === 'article' && i.slug !== featured.value?.slug))
const external = computed(() => insights.filter((i) => i.kind === 'external'))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Insights"
      lede="Field notes, research and published writing on the unglamorous work of putting AI into production — evaluations, retrieval, structured outputs and the gap between a demo and a system."
    >
      Research from the <span class="accent">production floor.</span>
    </PageHero>

    <section v-if="featured" class="section section--flush-top">
      <div class="container">
        <NuxtLink :to="`/insights/${featured.slug}`" class="featured card card--hover">
          <p class="chip chip--copper">{{ featured.topic }}</p>
          <h2 class="display-sm">{{ featured.title }}</h2>
          <p class="body-lg">{{ featured.summary }}</p>
          <p class="meta">
            <span>{{ featured.author }}</span>
            <span v-if="featured.date">{{ formatDate(featured.date) }}</span>
            <span v-if="featured.readingTime">{{ featured.readingTime }}</span>
          </p>
        </NuxtLink>
      </div>
    </section>

    <section v-if="articles.length" class="section section--flush-top">
      <div class="container grid">
        <NuxtLink v-for="item in articles" :key="item.slug" :to="`/insights/${item.slug}`" class="item card card--hover">
          <p class="chip">{{ item.topic }}</p>
          <h2 class="title-lg">{{ item.title }}</h2>
          <p class="body">{{ item.summary }}</p>
          <p class="meta">
            <span v-if="item.date">{{ formatDate(item.date) }}</span>
            <span v-if="item.readingTime">{{ item.readingTime }}</span>
          </p>
        </NuxtLink>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <p class="eyebrow">Published with</p>
        <h2 class="display-sm">Technical writing in the wild</h2>
        <p class="lede ext-lede">Work we have published with Modal, Timescale and Instructor — the same retrieval, embedding and schema patterns we put into client systems.</p>
        <ul class="ext" role="list">
          <li v-for="item in external" :key="item.slug">
            <a :href="item.href" target="_blank" rel="noopener noreferrer" class="ext__link">
              <span class="mono">{{ item.publisher }}</span>
              <span class="title">{{ item.title }}</span>
              <span class="body">{{ item.summary }}</span>
              <UiIcon name="arrow-up-right" :size="18" class="ext__icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <PageCta title="Want this thinking applied to your stack?" />
  </div>
</template>

<style scoped>
.featured {
  display: grid;
  gap: 16px;
  padding: clamp(28px, 4vw, 48px);
}

.featured h2 {
  max-width: 20ch;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.item {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 28px 24px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  font-size: 13.5px;
  color: var(--text-3);
}

.ext-lede {
  margin: 16px 0 28px;
  max-width: 640px;
}

.ext {
  display: grid;
  gap: 12px;
}

.ext__link {
  position: relative;
  display: grid;
  gap: 8px;
  padding: 22px 56px 22px 24px;
  border-radius: var(--radius);
  background: var(--paper);
  border: 1px solid var(--line);
}

.ext__link .mono {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.ext__icon {
  position: absolute;
  top: 22px;
  right: 22px;
  color: var(--text-3);
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
