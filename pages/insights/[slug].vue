<script setup lang="ts">
import { insights, getInsight } from '~/data/insights'
import { formatDate } from '~/utils/format'
import { renderMarkdown } from '~/utils/markdown'

const route = useRoute()
const article = computed(() => getInsight(String(route.params.slug)))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useSeoMeta({
  title: `${article.value.title} — Allometrik`,
  description: article.value.summary,
  ogType: 'article',
})

const rendered = computed(() => renderMarkdown(article.value?.body || ''))
const others = computed(() => insights.filter((i) => i.kind === 'article' && i.slug !== article.value?.slug).slice(0, 2))
</script>

<template>
  <article v-if="article" class="article">
    <header class="article__hero">
      <div class="container container--narrow">
        <NuxtLink to="/insights" class="text-link back"><UiIcon name="arrow-left" :size="14" /> Insights</NuxtLink>
        <p class="chip chip--copper">{{ article.topic }}</p>
        <h1 class="display-md">{{ article.title }}</h1>
        <p class="lede">{{ article.summary }}</p>
        <p class="meta">
          <span>{{ article.author }}</span>
          <span v-if="article.date">{{ formatDate(article.date) }}</span>
          <span v-if="article.readingTime">{{ article.readingTime }}</span>
        </p>
      </div>
    </header>

    <div class="container article__layout">
      <aside v-if="rendered.headings.length" class="toc">
        <p class="mono toc__label">In this article</p>
        <nav>
          <a v-for="h in rendered.headings" :key="h.id" :href="`#${h.id}`">{{ h.text }}</a>
        </nav>
      </aside>
      <div class="prose" v-html="rendered.html" />
    </div>

    <section v-if="others.length" class="section">
      <div class="container container--narrow more">
        <h2 class="title-lg">Keep reading</h2>
        <NuxtLink v-for="item in others" :key="item.slug" :to="`/insights/${item.slug}`" class="more__link">
          <span class="mono">{{ item.topic }}</span>
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </section>

    <PageCta title="Want this thinking applied to your stack?" />
  </article>
</template>

<style scoped>
.article__hero {
  padding-top: calc(var(--nav-h) + 88px);
  padding-bottom: 48px;
}

.back {
  margin-bottom: 28px;
}

.article__hero .chip {
  margin: 18px 0 16px;
}

.article__hero h1 {
  max-width: 20ch;
}

.article__hero .lede {
  margin-top: 18px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 22px;
  font-size: 14px;
  color: var(--text-3);
}

.article__layout {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  padding-bottom: 80px;
}

.toc {
  position: sticky;
  top: calc(var(--nav-h) + 28px);
}

.toc__label {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 12px;
}

.toc nav {
  display: grid;
  gap: 8px;
}

.toc a {
  font-size: 13.5px;
  line-height: 1.4;
  color: var(--text-2);
}

.toc a:hover {
  color: var(--ink);
}

.more {
  display: grid;
  gap: 14px;
}

.more__link {
  display: grid;
  gap: 4px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

.more__link .mono {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

@media (max-width: 900px) {
  .article__layout {
    grid-template-columns: 1fr;
  }

  .toc {
    position: static;
  }
}
</style>
