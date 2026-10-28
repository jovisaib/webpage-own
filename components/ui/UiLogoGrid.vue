<script setup lang="ts">
import { clientLogos } from '~/data/clients'
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
    </li>
  </ul>
</template>

<style scoped>
.logos {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(120px, 1fr));
  gap: 1px;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--line);
  border: 1px solid var(--line);
  align-items: stretch;
}

.logos__tile {
  display: grid;
  place-items: center;
  height: 100%;
  min-height: 120px;
  padding: 24px 18px;
  background: #f5f2eb;
  transition: background-color 0.5s var(--ease-out);
}

.logos__img {
  width: auto;
  max-width: 78%;
  object-fit: contain;
  filter: grayscale(100%) contrast(1.05) opacity(0.68);
  transition: filter 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.logos__tile:hover {
  background: #f5f2eb;
}

.logos__tile:hover .logos__img {
  filter: grayscale(0%) contrast(1) opacity(1);
  transform: scale(1.03);
}

@media (max-width: 960px) {
  .logos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(96px, 1fr));
  }

  .logos__tile {
    min-height: 96px;
  }
}
</style>
