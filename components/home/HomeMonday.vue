<script setup lang="ts">
import { mondayTiers } from '~/data/monday-aitp'
import { site } from '~/data/site'
</script>

<template>
  <section id="monday-aitp" class="section monday" aria-labelledby="monday-title">
    <div class="container">
      <div class="monday__head">
        <p class="eyebrow">Technology &amp; ecosystem alliances</p>
        <img src="/brand/monday-logo.svg" alt="monday.com" width="220" height="22" class="monday__logo" />
        <h2 id="monday-title" class="display-md">Production AI, paired with the Work OS you already run</h2>
        <p class="lede">
          Fixed-scope AI and Work OS deployments on monday.com Enterprise, Service and CRM — live in weeks.
        </p>
      </div>

      <MondayBadges />

      <div class="monday__tiers">
        <article v-for="tier in mondayTiers" :key="tier.id" class="tier" :class="{ 'tier--hot': tier.popular }">
          <p class="tier__n mono">{{ tier.n }}</p>
          <h3 class="tier__name">{{ tier.name }}</h3>
          <p class="tier__price">{{ tier.price }} <span>· {{ tier.duration }}</span></p>
          <p v-if="tier.popular" class="tier__flag">Most popular</p>
          <p class="tier__managed">{{ tier.managed }}</p>
        </article>
      </div>

      <div class="monday__actions">
        <UiButton to="/monday-aitp" variant="ink" size="lg" icon="right">Explore AITP packages</UiButton>
        <a :href="site.mondayPartnerStack" target="_blank" rel="noopener noreferrer" class="text-link">Activate a monday workspace ↗</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.monday {
  padding-top: 0;
}

.monday__head {
  display: grid;
  justify-items: start;
  gap: 16px;
  margin-bottom: 28px;
}

.monday__logo {
  height: 22px;
  width: auto;
}

.monday__head h2 {
  max-width: 18ch;
}

.monday__head .lede {
  max-width: 54ch;
  margin: 0;
}

.monday__tiers {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 12px;
  margin-top: 22px;
}

.tier {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 22px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: #fff;
}

.tier--hot {
  background: #0c0d0f;
  color: var(--on-dark);
  border-color: transparent;
}

.tier__n {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--copper-deep);
}

.tier--hot .tier__n {
  color: var(--copper-2);
}

.tier__name {
  margin-top: 6px;
  font-size: 17px;
  font-weight: 560;
  letter-spacing: -0.02em;
}

.tier__price {
  margin-top: 8px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.tier__price span {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-3);
}

.tier--hot .tier__price span {
  color: var(--on-dark-3);
}

.tier__flag {
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.tier__managed {
  margin-top: auto;
  padding-top: 12px;
  font-size: 13px;
  color: var(--text-3);
}

.tier--hot .tier__managed {
  color: var(--on-dark-3);
}

.monday__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
}

@media (max-width: 900px) {
  .monday__tiers {
    grid-template-columns: 1fr;
  }
}
</style>
