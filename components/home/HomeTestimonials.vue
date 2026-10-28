<script setup lang="ts">
import { testimonials } from '~/data/testimonials'

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const stats = [
  { value: '500+', label: 'professionals trained in production AI' },
  { value: '10+', label: 'countries with deployed systems and programs' },
  { value: '2–4 wks', label: 'typical kickoff-to-production window' },
  { value: 'F500', label: 'and top-10 EU law firms among clients' },
]
</script>

<template>
  <section class="section voices" aria-labelledby="voices-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Client voices</p>
        <h2 id="voices-title" class="display-lg" v-reveal>
          Trusted by the people <span class="accent">who run the work.</span>
        </h2>
      </div>

      <div class="voices__grid">
        <figure
          v-for="(item, i) in testimonials"
          :key="item.name"
          v-reveal="i * 80"
          class="voice"
          :class="{ 'voice--partner': item.kind === 'partnership' }"
        >
          <p v-if="item.kind === 'partnership'" class="voice__kicker mono">Strategic partnership</p>
          <blockquote>
            <p class="voice__quote serif">“{{ item.quote }}”</p>
          </blockquote>
          <figcaption class="voice__by">
            <img
              v-if="item.avatar"
              :src="item.avatar"
              :alt="item.name"
              width="44"
              height="44"
              class="voice__avatar"
              loading="lazy"
            />
            <span v-else class="voice__initials" aria-hidden="true">{{ initials(item.name) }}</span>
            <span class="voice__who">
              <strong>{{ item.name }}</strong>
              <span>{{ item.role }}<template v-if="item.company && item.kind !== 'partnership'">, {{ item.company }}</template></span>
            </span>
            <img
              v-if="item.logo"
              :src="item.logo"
              :alt="item.company || item.name"
              class="voice__logo"
              loading="lazy"
            />
          </figcaption>
        </figure>
      </div>

      <dl class="voices__stats">
        <div v-for="(s, i) in stats" :key="s.label" v-reveal="i * 60" class="voices__stat">
          <dt class="voices__stat-v">{{ s.value }}</dt>
          <dd class="voices__stat-l">{{ s.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.voices__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 14px;
  margin-top: clamp(40px, 5vw, 64px);
}

.voice {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: linear-gradient(180deg, #ffffff 0%, #fbfaf7 100%);
}

.voice--partner {
  background: linear-gradient(165deg, #ffffff 0%, #f4efe6 100%);
}

.voice__kicker {
  margin: 0 0 14px;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.voice__quote {
  margin: 0;
  font-size: clamp(18px, 1.55vw, 22px);
  line-height: 1.4;
  letter-spacing: -0.018em;
  color: var(--ink);
  text-wrap: pretty;
}

blockquote {
  margin: 0;
  flex: 1;
}

.voice__by {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.voice__avatar,
.voice__initials {
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: 50%;
}

.voice__avatar {
  object-fit: cover;
}

.voice__initials {
  display: grid;
  place-items: center;
  background: var(--canvas-3);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-2);
}

.voice__who {
  display: grid;
  gap: 2px;
  min-width: 0;
  font-size: 13.5px;
  color: var(--text-3);
}

.voice__who strong {
  font-size: 15px;
  font-weight: 560;
  color: var(--ink);
}

.voice__logo {
  margin-left: auto;
  height: 22px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  opacity: 0.9;
}

.voices__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: clamp(40px, 5vw, 64px) 0 0;
  border-top: 1px solid var(--line-2);
}

.voices__stat {
  padding: 26px 24px 0 0;
}

.voices__stat + .voices__stat {
  padding-left: 24px;
  border-left: 1px solid var(--line);
}

.voices__stat-v {
  font-size: clamp(34px, 3.6vw, 48px);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.045em;
  color: var(--ink);
}

.voices__stat-l {
  margin: 10px 0 0;
  font-size: 14.5px;
  line-height: 1.45;
  color: var(--text-3);
}

@media (max-width: 960px) {
  .voices__grid,
  .voices__stats {
    grid-template-columns: 1fr 1fr;
  }

  .voices__stat:nth-child(3) {
    padding-left: 0;
    border-left: 0;
  }

  .voices__stat:nth-child(n + 3) {
    padding-top: 24px;
  }
}

@media (max-width: 640px) {
  .voices__grid,
  .voices__stats {
    grid-template-columns: 1fr;
  }

  .voices__stat + .voices__stat {
    padding-left: 0;
    border-left: 0;
  }
}
</style>
