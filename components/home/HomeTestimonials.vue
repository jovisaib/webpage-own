<script setup lang="ts">
import { testimonials } from '~/data/testimonials'

const [lead, ...rest] = testimonials
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
        <figure v-if="lead" v-reveal class="voice voice--lead" :class="{ 'voice--partner': lead.kind === 'partnership' }">
          <p v-if="lead.kind === 'partnership'" class="voice__kicker mono">Strategic partnership</p>
          <UiIcon v-else name="quote" :size="28" class="voice__mark" />
          <blockquote>
            <p class="voice__highlight serif">{{ lead.kind === 'partnership' ? lead.highlight : `“${lead.highlight}”` }}</p>
            <p v-for="(para, i) in lead.quote.filter((q) => q !== lead.highlight)" :key="i" class="voice__para">{{ para }}</p>
          </blockquote>
          <figcaption class="voice__by">
            <img v-if="lead.avatar" :src="lead.avatar" :alt="lead.name" width="48" height="48" class="voice__avatar" loading="lazy" />
            <span class="voice__who">
              <strong>{{ lead.name }}</strong>
              <span>{{ lead.role }}<template v-if="lead.company && lead.kind !== 'partnership'">, {{ lead.company }}</template></span>
            </span>
            <img v-if="lead.logo" :src="lead.logo" :alt="lead.company || lead.name" class="voice__logo" loading="lazy" />
          </figcaption>
        </figure>

        <div class="voices__side">
          <figure v-for="(t, i) in rest" :key="t.name" v-reveal="(i + 1) * 90" class="voice voice--small">
            <blockquote>
              <p v-for="(para, j) in t.quote" :key="j" class="voice__small-text">“{{ para }}”</p>
            </blockquote>
            <figcaption class="voice__by">
              <span class="voice__initials" aria-hidden="true">{{ initials(t.name) }}</span>
              <span class="voice__who">
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </span>
            </figcaption>
          </figure>
        </div>
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
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: 16px;
  margin-top: clamp(40px, 5vw, 64px);
}

.voice {
  margin: 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: linear-gradient(180deg, #ffffff 0%, #fbfaf7 100%);
}

.voice--lead {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: clamp(28px, 4vw, 52px);
}

.voice--partner {
  background: linear-gradient(165deg, #ffffff 0%, #f4efe6 100%);
}

.voice__kicker {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.voice--partner .voice__logo {
  height: 28px;
}

.voice__mark {
  color: var(--copper);
}

.voice__highlight {
  font-size: clamp(26px, 2.9vw, 40px);
  line-height: 1.2;
  color: var(--ink);
  text-wrap: pretty;
}

.voice__para {
  margin-top: 16px;
  max-width: 640px;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-2);
}

.voice__by {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.voice__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.voice__who {
  display: grid;
  gap: 2px;
  font-size: 14px;
  color: var(--text-3);
}

.voice__who strong {
  font-size: 15.5px;
  font-weight: 560;
  color: var(--ink);
}

.voice__logo {
  margin-left: auto;
  height: 24px;
  width: auto;
  opacity: 0.9;
}

.voices__side {
  display: grid;
  gap: 16px;
}

.voice--small {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
}

.voice__small-text {
  font-size: 17px;
  line-height: 1.55;
  letter-spacing: -0.012em;
  color: var(--ink);
}

.voice__initials {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--canvas-3);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-2);
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
  .voices__grid {
    grid-template-columns: 1fr;
  }

  .voices__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .voices__stat:nth-child(3) {
    padding-left: 0;
    border-left: 0;
  }

  .voices__stat:nth-child(n + 3) {
    padding-top: 24px;
  }
}
</style>
