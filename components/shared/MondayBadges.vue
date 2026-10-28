<script setup lang="ts">
import { mondayCredentials } from '~/data/monday-aitp'

withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })
</script>

<template>
  <ul class="badges" :class="`badges--${tone}`" role="list">
    <li v-for="cred in mondayCredentials" :key="cred.id" class="badge">
      <img src="/brand/monday-mark.svg" alt="" width="40" height="24" class="badge__mark" />
      <span class="badge__title">{{ cred.title }}</span>
    </li>
  </ul>
</template>

<style scoped>
.badges {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.badge {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
  min-height: 64px;
  padding: 12px 16px 12px 14px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: var(--paper);
}

.badges--dark .badge {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--line-dark);
  color: var(--on-dark);
}

.badge__mark {
  width: 40px;
  height: 24px;
  flex: none;
  object-fit: contain;
}

.badge__title {
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: -0.018em;
  line-height: 1.25;
  color: inherit;
}

@media (max-width: 960px) {
  .badges {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
