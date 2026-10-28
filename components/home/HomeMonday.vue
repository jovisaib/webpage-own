<script setup lang="ts">
import { mondayTiers } from '~/data/monday-aitp'
import { site } from '~/data/site'
</script>

<template>
  <section id="monday-aitp" class="section monday" aria-labelledby="monday-title">
    <div class="container">
      <div class="monday__card">
        <div class="monday__intro">
          <p class="eyebrow">Technology &amp; ecosystem alliances</p>
          <h2 id="monday-title" class="display-md">
            Production AI, paired with the Work OS you already run
          </h2>
          <p class="lede">
            Allometrik is an independent enterprise AI lab. We deliver the production applied AI, document intelligence and regulatory governance layer — and we pair with leading operational execution platforms when a client needs CRM, Service or Work Management connected to their agents. monday.com is the first published alliance: a dedicated, turnkey AITP track, distinct from custom ground-up engineering, live in 3 to 8 weeks.
          </p>
          <MondayBadges />
          <div class="monday__actions">
            <UiButton to="/monday-aitp" variant="ink" size="lg" icon="right">Explore AITP packages</UiButton>
            <a :href="site.mondayPartnerStack" target="_blank" rel="noopener noreferrer" class="text-link">Activate a monday workspace ↗</a>
          </div>
        </div>

        <div class="monday__tiers">
          <article v-for="tier in mondayTiers" :key="tier.id" class="tier" :class="{ 'tier--hot': tier.popular }">
            <p class="tier__n mono">{{ tier.n }}</p>
            <h3 class="tier__name">{{ tier.name }}</h3>
            <p class="tier__price">{{ tier.price }} <span>· {{ tier.duration }}</span></p>
            <p v-if="tier.popular" class="tier__flag">Most popular</p>
            <p class="tier__managed">{{ tier.managed }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.monday {
  padding-top: 0;
}

.monday__card {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 36px;
  padding: clamp(28px, 4vw, 48px);
  border-radius: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, #fff 0%, #f4f1ea 100%);
  box-shadow: var(--shadow-sm);
}

.monday__intro {
  display: grid;
  align-content: start;
  gap: 18px;
}

.monday__intro h2 {
  max-width: 18ch;
}

.monday__intro :deep(.badges) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.monday__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 6px;
}

.monday__tiers {
  display: grid;
  gap: 10px;
}

.tier {
  position: relative;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
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
  margin-top: 4px;
  font-size: 16px;
  font-weight: 560;
  letter-spacing: -0.02em;
}

.tier__price {
  margin-top: 4px;
  font-size: 20px;
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
  top: 14px;
  right: 14px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.tier__managed {
  margin-top: 6px;
  font-size: 12.5px;
  color: var(--text-3);
}

.tier--hot .tier__managed {
  color: var(--on-dark-3);
}

@media (max-width: 900px) {
  .monday__card {
    grid-template-columns: 1fr;
  }

  .monday__intro :deep(.badges) {
    grid-template-columns: 1fr;
  }
}
</style>
