<script setup lang="ts">
import { calcIndustries, calcTracks, calcWorkflows, type CalcTrackId } from '~/data/calculator'

const props = withDefaults(defineProps<{ initialTrack?: CalcTrackId }>(), { initialTrack: 'agents' })

const { show } = useConsultationModal()

const track = ref<CalcTrackId>(props.initialTrack)
const industry = ref<(typeof calcIndustries)[number]>('Insurance')
const workflow = ref<(typeof calcWorkflows)[number]>('Inbound Call Center QA & Voice Agents')
const volumeSlider = ref(42)
const minutes = ref(8)
const teams = ref(2)

const volume = computed(() => {
  const t = volumeSlider.value / 100
  const raw = 1000 * Math.pow(250, t)
  return Math.min(250000, Math.max(1000, Math.round(raw / 500) * 500))
})

const hoursSaved = computed(() => (volume.value * minutes.value * 12) / 60)
const netSavings = computed(() => hoursSaved.value * 25 * 0.7)

const recommendation = computed(() => {
  const regulated =
    workflow.value.startsWith('KYC') ||
    industry.value === 'Insurance' ||
    industry.value === 'Banking & Fintech' ||
    industry.value === 'Public Sector & Infrastructure'

  if (track.value === 'cto') {
    return {
      title: 'CTO as a Service AI · fractional architecture',
      timeline: '2 weeks to first architecture pack',
    }
  }

  if (track.value === 'aitp') {
    if (regulated && (teams.value >= 3 || volume.value >= 40000)) {
      return { title: 'AITP Regulated Enterprise · $14,500 · 8–10 weeks', timeline: '8–10 weeks' }
    }
    if (teams.value >= 2 || volume.value >= 12000) {
      return { title: 'AITP Core · $9,500 · 6 weeks', timeline: '6 weeks' }
    }
    return { title: 'AITP Launch · $4,500 · 3–4 weeks', timeline: '3–4 weeks' }
  }

  if (volume.value >= 80000 || teams.value >= 6) {
    return {
      title: 'Allometrik Production Agent + Free AI OS · multi-region programme',
      timeline: '6–10 weeks',
    }
  }
  return {
    title: 'Allometrik Production Agent + Free AI OS Governance',
    timeline: '3–6 weeks',
  }
})

const fmtInt = (n: number) => Math.round(n).toLocaleString('en-US')
const hoursLabel = computed(() => `${fmtInt(hoursSaved.value)} hrs/yr`)
const savingsLabel = computed(() => {
  const rounded = Math.max(1000, Math.round(netSavings.value / 1000) * 1000)
  return `$${fmtInt(rounded)}+/yr`
})
const volumeLabel = computed(() => fmtInt(volume.value))
const teamsLabel = computed(() => (teams.value >= 10 ? '10+' : String(teams.value)))
const unitNoun = computed(() =>
  workflow.value.includes('Call') ? 'calls / month' : workflow.value.includes('Knowledge') ? 'queries / month' : 'documents / month',
)
const trackMeta = computed(() => calcTracks.find((t) => t.id === track.value)!)

function request() {
  show({
    track: trackMeta.value.label,
    industry: industry.value,
    workflow: workflow.value,
    volume: volume.value,
    minutes: minutes.value,
    teams: teams.value,
    hoursSaved: hoursLabel.value,
    costReduction: `${savingsLabel.value} with –70% unit cost`,
    recommendation: recommendation.value.title,
    timeline: recommendation.value.timeline,
    interest: 'Custom scope from ROI calculator',
  })
}
</script>

<template>
  <section id="scope" class="section calc" aria-labelledby="calc-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Interactive custom scope</p>
        <h2 id="calc-title" class="display-lg" v-reveal>
          Size the engagement. <span class="accent">See the hours come back.</span>
        </h2>
        <p class="lede calc__lede">
          Pick a track, an industry and a workflow. The live panel estimates annual hours returned, net cost reduction, and the architecture we would actually propose.
        </p>
      </div>

      <div class="calc__grid">
        <div class="calc__controls">
          <fieldset class="group">
            <legend>Select track</legend>
            <label v-for="opt in calcTracks" :key="opt.id" class="choice" :class="{ 'is-on': track === opt.id }">
              <input v-model="track" type="radio" name="calc-track" :value="opt.id" />
              <span class="choice__label">{{ opt.label }}</span>
              <span class="choice__hint">{{ opt.hint }}</span>
            </label>
          </fieldset>

          <fieldset class="group">
            <legend>Industry vertical</legend>
            <div class="pills">
              <label v-for="opt in calcIndustries" :key="opt" class="pill" :class="{ 'is-on': industry === opt }">
                <input v-model="industry" type="radio" name="calc-industry" :value="opt" />
                {{ opt }}
              </label>
            </div>
          </fieldset>

          <fieldset class="group">
            <legend>Primary workflow</legend>
            <div class="pills">
              <label v-for="opt in calcWorkflows" :key="opt" class="pill" :class="{ 'is-on': workflow === opt }">
                <input v-model="workflow" type="radio" name="calc-workflow" :value="opt" />
                {{ opt }}
              </label>
            </div>
          </fieldset>

          <div class="sliders">
            <label class="slider">
              <span class="slider__row">
                <span>Monthly volume</span>
                <strong>{{ volumeLabel }} {{ unitNoun }}</strong>
              </span>
              <input v-model.number="volumeSlider" type="range" min="0" max="100" step="1" />
            </label>
            <label class="slider">
              <span class="slider__row">
                <span>Average manual handling time</span>
                <strong>{{ minutes }} min / item</strong>
              </span>
              <input v-model.number="minutes" type="range" min="2" max="30" step="1" />
            </label>
            <label class="slider">
              <span class="slider__row">
                <span>Teams / regions involved</span>
                <strong>{{ teamsLabel }} {{ teams === 1 ? 'team' : 'teams' }}</strong>
              </span>
              <input v-model.number="teams" type="range" min="1" max="10" step="1" />
            </label>
          </div>
        </div>

        <aside class="panel" data-nav-theme="dark">
          <p class="panel__kicker mono">Live estimate</p>
          <dl class="panel__stats">
            <div>
              <dt>Estimated annual hours saved</dt>
              <dd>{{ hoursLabel }}</dd>
            </div>
            <div>
              <dt>Estimated net annual cost reduction</dt>
              <dd>{{ savingsLabel }} <span>· –70% unit cost</span></dd>
            </div>
          </dl>
          <div class="panel__rec">
            <p class="panel__kicker mono">Recommended architecture &amp; tier</p>
            <p class="panel__title">{{ recommendation.title }}</p>
            <p class="panel__time">Estimated time to production · {{ recommendation.timeline }}</p>
          </div>
          <UiButton type="button" variant="halo" size="lg" icon="up" class="panel__cta" @click="request">
            Request this custom scope
          </UiButton>
          <p class="panel__note">
            Directional model: {{ volumeLabel }} items/month × {{ minutes }} min × 12, 70% automation capture at a $25 blended ops rate. A senior engineer will refine this on your real volumes.
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.calc__lede {
  max-width: 62ch;
  margin-top: 18px;
}

.calc__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 22px;
  margin-top: clamp(36px, 5vw, 56px);
  align-items: start;
}

.calc__controls {
  display: grid;
  gap: 28px;
}

.group {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: 10px;
}

.group legend {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 6px;
}

.choice {
  position: relative;
  display: grid;
  gap: 4px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: var(--paper);
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.choice + .choice {
  margin-top: 8px;
}

.choice input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.choice.is-on {
  border-color: var(--ink);
  background: #fff;
  box-shadow: var(--shadow-xs);
}

.choice__label {
  font-size: 15px;
  font-weight: 560;
  letter-spacing: -0.015em;
  color: var(--ink);
}

.choice__hint {
  font-size: 13px;
  color: var(--text-3);
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  position: relative;
  height: 38px;
  display: inline-flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--line-2);
  background: var(--paper);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-2);
  cursor: pointer;
}

.pill input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.pill.is-on {
  background: var(--ink);
  color: var(--canvas);
  border-color: var(--ink);
}

.sliders {
  display: grid;
  gap: 18px;
}

.slider {
  display: grid;
  gap: 10px;
}

.slider__row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: var(--text-3);
}

.slider__row strong {
  color: var(--ink);
  font-weight: 560;
  text-align: right;
}

.slider input[type='range'] {
  width: 100%;
  height: 2px;
  appearance: none;
  background: var(--line-2);
  border-radius: 99px;
}

.slider input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ink);
  cursor: pointer;
}

.slider input[type='range']::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 50%;
  background: var(--ink);
  cursor: pointer;
}

.panel {
  position: sticky;
  top: calc(var(--nav-h) + 28px);
  padding: 28px 26px 24px;
  border-radius: 24px;
  background: #0c0d0f;
  color: var(--on-dark);
  box-shadow: var(--shadow-lg);
}

.panel__kicker {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.panel__stats {
  display: grid;
  gap: 18px;
  margin: 18px 0 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line-dark);
}

.panel__stats dt {
  font-size: 13px;
  color: var(--on-dark-3);
}

.panel__stats dd {
  margin-top: 4px;
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

.panel__stats dd span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--on-dark-3);
}

.panel__title {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 560;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.panel__time {
  margin-top: 8px;
  font-size: 14px;
  color: var(--on-dark-2);
}

.panel__cta {
  width: 100%;
  margin-top: 22px;
  justify-content: center;
}

.panel__note {
  margin-top: 14px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--on-dark-3);
}

@media (max-width: 960px) {
  .calc__grid {
    grid-template-columns: 1fr;
  }

  .panel {
    position: static;
  }
}
</style>
