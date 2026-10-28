<script setup lang="ts">
import { getCaseStudy } from '~/data/case-studies'
import { industries } from '~/data/industries'

const active = ref(0)
const tabs = ref<HTMLButtonElement[]>([])
const current = computed(() => industries[active.value]!)
const relatedCase = computed(() => getCaseStudy(current.value.relatedCases[0] ?? ''))

const select = (i: number, focus = false) => {
  active.value = (i + industries.length) % industries.length
  if (focus) nextTick(() => tabs.value[active.value]?.focus())
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') select(active.value + 1, true)
  else if (e.key === 'ArrowLeft') select(active.value - 1, true)
  else if (e.key === 'Home') select(0, true)
  else if (e.key === 'End') select(industries.length - 1, true)
  else return
  e.preventDefault()
}
</script>

<template>
  <section class="section section--stone inds" aria-labelledby="inds-title">
    <div class="container">
      <div class="section-head section-head--split">
        <div class="inds__intro">
          <p class="eyebrow">Industries</p>
          <h2 id="inds-title" class="display-lg" v-reveal>
            Built for <span class="accent">regulated,</span> mission-critical work.
          </h2>
        </div>
        <p class="lede inds__lede" v-reveal="80">
          Designed for your regulators, data constraints and edge cases — UAE, Gulf and EU.
        </p>
      </div>

      <div class="inds__tabs" role="tablist" aria-label="Industries" @keydown="onKey">
        <button
          v-for="(ind, i) in industries"
          :id="`ind-tab-${ind.slug}`"
          :key="ind.slug"
          ref="tabs"
          type="button"
          role="tab"
          class="inds__tab"
          :class="{ 'is-active': i === active }"
          :aria-selected="i === active"
          :aria-controls="`ind-panel-${ind.slug}`"
          :tabindex="i === active ? 0 : -1"
          @click="select(i)"
        >
          {{ ind.name }}
        </button>
      </div>

      <Transition name="swap" mode="out-in">
        <div
          :id="`ind-panel-${current.slug}`"
          :key="current.slug"
          class="inds__panel"
          role="tabpanel"
          :aria-labelledby="`ind-tab-${current.slug}`"
        >
          <div class="inds__main">
            <h3 class="display-sm">{{ current.headline }}</h3>
            <p class="body-lg">{{ current.description }}</p>
            <ul role="list" class="inds__uses">
              <li v-for="u in current.useCases" :key="u">
                <span class="inds__check"><UiIcon name="check" :size="13" :stroke="2.2" /></span>
                {{ u }}
              </li>
            </ul>
            <div class="inds__frameworks">
              <span class="inds__fw-label mono">Built around</span>
              <span v-for="f in current.frameworks" :key="f" class="chip">{{ f }}</span>
            </div>
          </div>

          <aside class="inds__proof">
            <p class="inds__proof-k mono">Proof</p>
            <p class="inds__proof-v">{{ current.proof.value }}</p>
            <p class="inds__proof-l">{{ current.proof.label }}</p>
            <div class="inds__proof-links">
              <NuxtLink v-if="relatedCase" :to="`/case-studies/${relatedCase.slug}`" class="inds__proof-case">
                <span class="mono">Case study</span>
                <span>{{ relatedCase.title }}</span>
                <UiIcon name="arrow-up-right" :size="16" />
              </NuxtLink>
              <NuxtLink :to="`/industries#${current.slug}`" class="text-link">Explore {{ current.short.toLowerCase() }} <UiIcon name="arrow-right" :size="15" /></NuxtLink>
            </div>
          </aside>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.inds__intro {
  display: grid;
  gap: 20px;
}

.inds__lede {
  max-width: 460px;
  justify-self: end;
}

.inds__tabs {
  display: flex;
  gap: 6px;
  margin-top: clamp(40px, 5vw, 60px);
  padding: 6px;
  border-radius: 16px;
  background: rgba(17, 19, 24, 0.05);
  overflow-x: auto;
  scrollbar-width: none;
}

.inds__tabs::-webkit-scrollbar {
  display: none;
}

.inds__tab {
  flex: 1 0 auto;
  height: 44px;
  padding: 0 18px;
  border-radius: 11px;
  font-size: 14.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-2);
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.inds__tab:hover {
  color: var(--ink);
}

.inds__tab.is-active {
  background: var(--paper);
  color: var(--ink);
  box-shadow: var(--shadow-sm);
}

.inds__panel {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.inds__main {
  display: grid;
  align-content: start;
  gap: 20px;
  padding: clamp(24px, 3.4vw, 44px);
  border-radius: var(--radius-lg);
  background: var(--paper);
  border: 1px solid var(--line);
}

.inds__uses {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 24px;
  margin-top: 4px;
}

.inds__uses li {
  display: flex;
  gap: 10px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink);
}

.inds__check {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  flex: none;
  border-radius: 6px;
  background: var(--ink);
  color: #fff;
}

.inds__frameworks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.inds__fw-label {
  margin-right: 4px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
}

.inds__proof {
  display: flex;
  flex-direction: column;
  padding: clamp(24px, 3vw, 36px);
  border-radius: var(--radius-lg);
  background: radial-gradient(120% 100% at 100% 100%, #2a1d15 0%, #12141b 60%);
  color: var(--on-dark);
}

.inds__proof-k {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.inds__proof-v {
  margin-top: auto;
  padding-top: 40px;
  font-size: clamp(56px, 6vw, 84px);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.05em;
}

.inds__proof-l {
  margin-top: 10px;
  max-width: 300px;
  font-size: 16px;
  line-height: 1.45;
  color: var(--on-dark-2);
}

.inds__proof-links {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

.inds__proof-case {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line-dark-2);
  font-size: 14px;
  line-height: 1.4;
  color: var(--on-dark);
  transition: background-color 0.25s ease;
}

.inds__proof-case:hover {
  background: rgba(255, 255, 255, 0.09);
}

.inds__proof-case .mono {
  grid-column: 1 / -1;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-dark-3);
}

.inds__proof .text-link {
  color: var(--on-dark);
  border-color: var(--line-dark-2);
  justify-self: start;
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.25s ease, transform 0.35s var(--ease-out);
}

.swap-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.swap-leave-to {
  opacity: 0;
}

@media (max-width: 960px) {
  .inds__panel {
    grid-template-columns: 1fr;
  }

  .inds__lede {
    justify-self: start;
  }
}

@media (max-width: 640px) {
  .inds__uses {
    grid-template-columns: 1fr;
  }

  .inds__tab {
    flex: 0 0 auto;
  }
}
</style>
