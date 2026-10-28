<script setup lang="ts">
import { capabilityCards } from '~/data/capabilities'
import { site } from '~/data/site'
</script>

<template>
  <section class="section caps" aria-labelledby="caps-title">
    <div class="container container--wide">
      <div class="caps__head">
        <h2 id="caps-title" class="display-lg" v-reveal>
          Where <span class="accent">production AI</span><br />
          lands.
        </h2>
        <p class="lede caps__lede" v-reveal="80">
          Four production tracks, measured against your data and owned by you.
        </p>
      </div>

      <div class="caps__grid">
        <article v-for="(card, i) in capabilityCards" :key="card.id" v-reveal="i * 80" class="cap card">
          <div class="cap__visual">
            <CapabilityVisual :kind="card.visual" />
          </div>
          <div class="cap__body">
            <h3 class="cap__title">
              {{ card.title }}
              <span v-if="card.badge" class="chip chip--copper cap__badge">{{ card.badge }}</span>
            </h3>
            <p class="cap__text">{{ card.body }}</p>
            <NuxtLink v-if="card.to" :to="card.to" class="cap__link">
              Learn more <UiIcon name="arrow-right" :size="14" />
            </NuxtLink>
            <p v-else class="cap__soon">Now onboarding · ask us on a call</p>
          </div>
        </article>

        <aside v-reveal="capabilityCards.length * 80" class="cap-cta card" aria-label="Book a consultation">
          <p class="cap-cta__text">Building something where production-grade AI matters?</p>
          <UiButton :href="site.calendly" variant="ink" size="sm" icon="up">Book a consultation</UiButton>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.caps__head {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: end;
  gap: 24px 64px;
  margin-bottom: clamp(44px, 6vw, 72px);
}

.caps__lede {
  max-width: 440px;
  justify-self: end;
}

.caps__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  align-items: stretch;
}

.cap {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 430px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfaf7 100%);
}

.cap::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(236, 233, 225, 0.9), transparent);
  pointer-events: none;
}

.cap__visual {
  position: relative;
  height: 196px;
  flex: none;
}

.cap__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 22px 22px;
  flex: 1;
}

.cap__title {
  font-size: 17px;
  line-height: 1.3;
  font-weight: 560;
  letter-spacing: -0.018em;
}

.cap__badge {
  height: 22px;
  margin-left: 4px;
  padding: 0 8px;
  font-size: 11px;
  vertical-align: 2px;
}

.cap__text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-2);
  flex: 1;
}

.cap__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  transition: gap 0.25s var(--ease-out);
}

.cap__link:hover {
  gap: 9px;
}

.cap__soon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  font-size: 13.5px;
  color: var(--text-3);
}

.cap-cta {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 26px;
  min-height: 0;
  background: linear-gradient(180deg, #ffffff 0%, #f6f4ef 100%);
}

.cap-cta__text {
  font-size: 17px;
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.cap-cta :deep(.btn) {
  justify-self: start;
}

@media (max-width: 1240px) {
  .caps__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cap {
    min-height: 0;
  }

  .cap-cta {
    display: flex;
  }
}

@media (max-width: 860px) {
  .caps__head {
    grid-template-columns: 1fr;
  }

  .caps__lede {
    justify-self: start;
  }
}

@media (max-width: 640px) {
  .caps__grid {
    grid-template-columns: 1fr;
  }

  .cap-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
