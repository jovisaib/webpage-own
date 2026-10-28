<script setup lang="ts">
import { aiosBadges, aiosBase, aiosLayers, aiosPillars, aiosThesis } from '~/data/ai-os'

const active = ref(aiosLayers[0]!.id)
const current = computed(() => [...aiosLayers, ...aiosBase].find((l) => l.id === active.value) ?? aiosLayers[0]!)
</script>

<template>
  <section id="ai-os" class="os grain" data-nav-theme="dark" aria-labelledby="os-title">
    <div class="os__veil" aria-hidden="true" />
    <div class="container">
      <div class="os__hero">
        <p class="eyebrow">allometrik AI OS</p>
        <h2 id="os-title" class="display-lg" v-reveal>
          The unified operating layer for the <span class="accent">AI-native enterprise.</span>
        </h2>
        <p class="os__thesis">{{ aiosThesis.body }}</p>
        <ul class="os__badges" role="list">
          <li v-for="b in aiosBadges" :key="b.label" class="os__badge" :class="{ 'os__badge--lead': b.lead }">
            <span class="mono">{{ b.label }}</span>
          </li>
        </ul>
        <UiButton to="/ai-os" variant="halo" size="lg" icon="right">Explore the OS</UiButton>
      </div>

      <div class="os__stack">
        <p class="os__stack-kicker mono">Complete infrastructure to run enterprise AI</p>
        <div class="stack">
          <button
            v-for="layer in aiosLayers"
            :key="layer.id"
            type="button"
            class="stack__row"
            :class="[`stack__row--${layer.kind}`, { 'is-on': active === layer.id }]"
            @click="active = layer.id"
          >
            {{ layer.label }}
          </button>
          <div class="stack__base">
            <button
              v-for="item in aiosBase"
              :key="item.id"
              type="button"
              class="stack__cell"
              :class="{ 'is-on': active === item.id }"
              @click="active = item.id"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
        <p class="os__stack-body">{{ current.body }}</p>
      </div>

      <ul class="os__pillars" role="list">
        <li v-for="p in aiosPillars" :key="p.id" class="pillar" :class="`pillar--${p.tone}`">
          <p class="pillar__badge mono">{{ p.badge }}</p>
          <h3>{{ p.name }}</h3>
          <p>{{ p.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.os {
  position: relative;
  isolation: isolate;
  padding-block: var(--section-y);
  background: #0c0d0f;
  color: var(--on-dark);
  overflow: hidden;
}

.os__veil {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(80% 50% at 80% 0%, rgba(200, 125, 75, 0.18), transparent 60%),
    radial-gradient(60% 40% at 10% 80%, rgba(230, 225, 218, 0.06), transparent 55%);
}

.os__hero {
  display: grid;
  justify-items: start;
  gap: 22px;
  max-width: 820px;
}

.os__hero h2 {
  max-width: 16ch;
}

.os__thesis {
  max-width: 62ch;
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--on-dark-2);
}

.os__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.os__badge {
  height: 32px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--line-dark-2);
  background: rgba(255, 255, 255, 0.04);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--on-dark-2);
}

.os__badge--lead {
  border-color: rgba(229, 169, 124, 0.45);
  color: #f4e4d4;
}

.os__stack {
  margin-top: 56px;
  padding: 28px;
  border-radius: 24px;
  border: 1px solid var(--line-dark);
  background: rgba(255, 255, 255, 0.03);
}

.os__stack-kicker {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--on-dark-3);
  margin-bottom: 18px;
}

.stack {
  display: grid;
  gap: 8px;
}

.stack__row,
.stack__cell {
  min-height: 52px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid var(--line-dark);
  background: rgba(12, 13, 15, 0.5);
  color: var(--on-dark);
  text-align: left;
  font-size: 15px;
  font-weight: 520;
  letter-spacing: -0.015em;
}

.stack__row--tab {
  background: linear-gradient(90deg, rgba(200, 122, 75, 0.18), rgba(255, 255, 255, 0.04));
}

.stack__row.is-on,
.stack__cell.is-on {
  border-color: rgba(229, 169, 124, 0.55);
  background: rgba(229, 169, 124, 0.12);
}

.stack__base {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.os__stack-body {
  margin-top: 16px;
  max-width: 64ch;
  font-size: 15px;
  color: var(--on-dark-2);
}

.os__pillars {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.pillar {
  min-height: 280px;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid var(--line-dark);
  display: grid;
  align-content: start;
  gap: 12px;
}

.pillar--sky {
  background: linear-gradient(180deg, #1a2838 0%, #121820 100%);
}

.pillar--ember {
  background: linear-gradient(180deg, #2a1c14 0%, #16110e 100%);
}

.pillar--sage {
  background: linear-gradient(180deg, #18241c 0%, #101612 100%);
}

.pillar__badge {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.pillar h3 {
  font-size: 22px;
  font-weight: 540;
  letter-spacing: -0.03em;
}

.pillar p:last-child {
  color: var(--on-dark-2);
  font-size: 15px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .os__pillars,
  .stack__base {
    grid-template-columns: 1fr;
  }
}
</style>
