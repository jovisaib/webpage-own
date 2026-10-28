<script setup lang="ts">
import { clientLogos } from '~/data/clients'

withDefaults(defineProps<{ showNda?: boolean }>(), { showNda: true })
</script>

<template>
  <ul class="logos" role="list">
    <li v-for="(logo, i) in clientLogos" :key="logo.name" v-reveal="i * 40" class="logos__tile">
      <img
        :src="logo.src"
        :alt="logo.name"
        :width="logo.width"
        :height="logo.height"
        :style="{ height: `${logo.displayHeight}px` }"
        loading="lazy"
        decoding="async"
        class="logos__img"
      />
      <span class="logos__name" aria-hidden="true">{{ logo.name }}</span>
    </li>
    <li v-if="showNda" v-reveal="clientLogos.length * 40" class="logos__tile logos__tile--nda">
      <span class="logos__nda-k">+ Under NDA</span>
      <span class="logos__nda-v">Fortune 500 companies &amp; top-10 EU law firms</span>
    </li>
  </ul>
</template>

<style scoped>
.logos {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--line);
  border: 1px solid var(--line);
}

.logos__tile {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 112px;
  padding: 24px 20px;
  background: var(--canvas);
  transition: background-color 0.5s var(--ease-out);
}

.logos__img {
  width: auto;
  max-width: 78%;
  object-fit: contain;
  filter: grayscale(1) brightness(0);
  opacity: 0.5;
  transition: filter 0.6s var(--ease-out), opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.logos__name {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.4s ease, transform 0.5s var(--ease-out);
}

.logos__tile:hover {
  background: var(--paper);
}

.logos__tile:hover .logos__img {
  filter: none;
  opacity: 1;
  transform: scale(1.03);
}

.logos__tile:hover .logos__name {
  opacity: 1;
  transform: none;
}

.logos__tile--nda {
  align-content: center;
  justify-items: start;
  gap: 6px;
  padding: 24px;
  background: var(--canvas-2);
}

.logos__nda-k {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.logos__nda-v {
  font-size: 14.5px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.012em;
  color: var(--ink);
}

@media (max-width: 960px) {
  .logos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .logos__tile {
    min-height: 96px;
  }
}
</style>
