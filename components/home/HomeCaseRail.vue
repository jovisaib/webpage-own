<script setup lang="ts">
import { caseStudies } from '~/data/case-studies'

const rail = ref<HTMLElement | null>(null)
const atStart = ref(true)
const atEnd = ref(false)

const update = () => {
  const el = rail.value
  if (!el) return
  atStart.value = el.scrollLeft < 8
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
}

const scrollByCard = (dir: 1 | -1) => {
  const el = rail.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('.rail__item')
  const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
  el.scrollBy({ left: dir * step, behavior: 'smooth' })
}

onMounted(update)
</script>

<template>
  <section class="section cases" aria-labelledby="cases-title">
    <div class="container">
      <div class="section-head section-head--split">
        <div class="cases__intro">
          <p class="eyebrow">Client stories</p>
          <h2 id="cases-title" class="display-lg" v-reveal>
            Solving the problems that <span class="accent">move the business.</span>
          </h2>
        </div>
        <div class="cases__aside">
          <p class="lede">Production systems with measured outcomes across hospitality, insurance, banking, legal and the public sector.</p>
          <div class="cases__controls">
            <NuxtLink to="/case-studies" class="text-link">All case studies <UiIcon name="arrow-right" :size="15" /></NuxtLink>
            <div class="cases__arrows">
              <button type="button" class="cases__arrow" :disabled="atStart" aria-label="Previous case study" @click="scrollByCard(-1)">
                <UiIcon name="arrow-left" :size="18" />
              </button>
              <button type="button" class="cases__arrow" :disabled="atEnd" aria-label="Next case study" @click="scrollByCard(1)">
                <UiIcon name="arrow-right" :size="18" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref="rail" class="rail" tabindex="0" aria-label="Case studies" @scroll.passive="update">
      <div v-for="(study, i) in caseStudies" :key="study.slug" v-reveal="i * 70" class="rail__item">
        <CaseCard :study="study" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  overflow: hidden;
}

.cases__intro {
  display: grid;
  gap: 20px;
}

.cases__aside {
  display: grid;
  gap: 26px;
  max-width: 460px;
  justify-self: end;
}

.cases__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.cases__arrows {
  display: flex;
  gap: 8px;
}

.cases__arrow {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line-2);
  background: var(--paper);
  color: var(--ink);
  transition: background-color 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
}

.cases__arrow:hover:not(:disabled) {
  border-color: var(--line-3);
  background: var(--canvas-2);
}

.cases__arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.rail {
  --rail-pad: max(var(--gutter), calc((100vw - var(--container)) / 2));
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: clamp(296px, 31vw, 420px);
  gap: 16px;
  margin-top: clamp(40px, 5vw, 64px);
  padding: 4px var(--rail-pad) 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--rail-pad);
  scrollbar-width: none;
  overscroll-behavior-x: contain;
}

.rail::-webkit-scrollbar {
  display: none;
}

.rail:focus-visible {
  outline-offset: -4px;
}

.rail__item {
  scroll-snap-align: start;
}

@media (max-width: 900px) {
  .cases__aside {
    justify-self: start;
  }
}
</style>
