<script setup lang="ts">
import { caseAliases, caseStudies, getCaseStudy } from '~/data/case-studies'
import { site } from '~/data/site'

const route = useRoute()
const slug = String(route.params.slug)

if (caseAliases[slug]) {
  await navigateTo(`/case-studies/${caseAliases[slug]}`, { redirectCode: 301 })
}

const study = computed(() => getCaseStudy(slug))

if (!study.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

usePageSeo({
  title: `${study.value.headline} — Allometrik`,
  description: study.value.summary,
  image: study.value.image,
  type: 'article',
  jsonLd: [
    {
      '@type': 'Article',
      headline: study.value.headline,
      description: study.value.summary,
      image: `${site.url}${study.value.image}`,
      author: { '@type': 'Organization', name: site.legalName, url: site.url },
      publisher: { '@type': 'Organization', name: site.legalName, url: site.url, logo: `${site.url}/brand/allometrik-mark-2048.png` },
      articleSection: study.value.sector,
      about: study.value.client,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${site.url}/case-studies` },
        { '@type': 'ListItem', position: 3, name: study.value.title, item: `${site.url}/case-studies/${study.value.slug}` },
      ],
    },
  ],
})

const related = computed(() =>
  caseStudies
    .filter((c) => c.slug !== study.value!.slug)
    .sort((a, b) => {
      const aHit = a.industries.some((i) => study.value!.industries.includes(i)) ? 1 : 0
      const bHit = b.industries.some((i) => study.value!.industries.includes(i)) ? 1 : 0
      return bHit - aHit
    })
    .slice(0, 2),
)
</script>

<template>
  <article v-if="study">
    <header class="hero" data-nav-theme="dark">
      <img :src="study.image" :alt="study.imageAlt" class="hero__img" width="2400" height="1350" />
      <span class="hero__grain" aria-hidden="true" />
      <span class="hero__shade" aria-hidden="true" />
      <div class="container hero__copy">
        <p class="hero__pills">
          <span>{{ study.sector }}</span>
          <span>{{ study.region }}</span>
        </p>
        <h1 class="display-md">{{ study.headline }}</h1>
        <p class="hero__client">{{ study.client }} · {{ study.engagement }}</p>
        <dl class="hero__metrics">
          <div v-for="m in study.metrics" :key="m.label">
            <dt>{{ m.value }}</dt>
            <dd>{{ m.label }}</dd>
          </div>
        </dl>
      </div>
    </header>

    <CaseRoi :study="study" />

    <section class="section bullets">
      <div class="container bullets__grid">
        <div>
          <p class="eyebrow">The challenge</p>
          <ul role="list">
            <li v-for="(p, i) in study.challenge" :key="i">{{ p }}</li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">The approach</p>
          <ul role="list">
            <li v-for="(p, i) in study.approach" :key="i">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <CasePreview :study="study" />

    <section class="section section--stone stack-sec">
      <div class="container">
        <p class="eyebrow">Stack deployed</p>
        <h2 class="display-sm">What it runs on</h2>
        <ul class="stack" role="list">
          <li v-for="item in study.stack" :key="item" class="chip">{{ item }}</li>
        </ul>
        <p v-if="study.related?.length" class="extra">
          <span v-for="item in study.related" :key="item.label">
            <strong>{{ item.value }}</strong>
            {{ item.label }}
          </span>
        </p>
      </div>
    </section>

    <section v-if="related.length" class="section">
      <div class="container">
        <div class="more-head">
          <h2 class="display-sm">More client stories</h2>
          <NuxtLink to="/case-studies" class="text-link">All case studies <UiIcon name="arrow-right" :size="15" /></NuxtLink>
        </div>
        <div class="more-grid">
          <CaseCard v-for="item in related" :key="item.slug" :study="item" />
        </div>
      </div>
    </section>

    <PageCta title="Discuss a similar system" lede="Tell us about the process. We will map it in a 30-minute call." />
  </article>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: 86svh;
  display: grid;
  align-items: end;
  color: #f7f4ee;
  background: #0c0d0f;
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.hero__grain {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.28;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
}

.hero__shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(12, 13, 15, 0.15) 0%, rgba(12, 13, 15, 0.55) 48%, rgba(12, 13, 15, 0.92) 100%),
    linear-gradient(90deg, rgba(12, 13, 15, 0.35), transparent 55%);
}

.hero__copy {
  padding: 140px 0 48px;
  display: grid;
  gap: 18px;
}

.hero__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hero__pills span {
  height: 30px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(247, 244, 238, 0.22);
  background: rgba(12, 13, 15, 0.35);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.hero h1 {
  max-width: 22ch;
}

.hero__client {
  font-size: 14.5px;
  color: rgba(247, 244, 238, 0.7);
}

.hero__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 12px;
  padding-top: 22px;
  border-top: 1px solid rgba(247, 244, 238, 0.14);
}

.hero__metrics dt {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.hero__metrics dd {
  margin-top: 8px;
  font-size: 14px;
  color: rgba(247, 244, 238, 0.72);
}

.bullets__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 64px;
}

.bullets ul {
  margin-top: 16px;
  display: grid;
  gap: 12px;
}

.bullets li {
  padding-left: 16px;
  border-left: 2px solid var(--copper);
  font-size: 16.5px;
  line-height: 1.55;
  color: var(--ink);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.extra {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 24px;
  font-size: 15px;
  color: var(--text-2);
}

.extra strong {
  color: var(--ink);
  margin-right: 8px;
}

.more-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 24px;
}

.more-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 900px) {
  .hero__metrics,
  .bullets__grid,
  .more-grid {
    grid-template-columns: 1fr;
  }
}
</style>
