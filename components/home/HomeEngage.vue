<script setup lang="ts">
const { show } = useConsultationModal()

const tracks = [
  {
    n: '01',
    title: 'Production AI Agents + Free AI OS',
    body: 'Custom voice, document and operational agents in your cloud. Governance OS included at $0.',
    interest: 'Autonomous agents & workflows',
    track: 'Production AI Agents + Free AI OS',
  },
  {
    n: '02',
    title: 'Enterprise Rollouts & Alliances',
    body: 'Turnkey AI workflows on monday.com Work OS, SAP, Salesforce and your existing stack.',
    interest: 'monday.com AITP (ecosystem alliance)',
    track: 'Enterprise Rollouts & Alliances',
  },
  {
    n: '03',
    title: 'Advisory & Fractional AI CTO',
    body: 'Senior architecture, security sign-off and embedded engineering leadership.',
    interest: 'CTO as a Service AI',
    track: 'Advisory & Fractional AI CTO',
  },
]

function open(track: (typeof tracks)[number]) {
  show({
    track: track.track,
    interest: track.interest,
  })
}
</script>

<template>
  <section class="section engage" aria-labelledby="engage-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">How we engage</p>
        <h2 id="engage-title" class="display-md" v-reveal>
          Three ways in. One production outcome.
        </h2>
      </div>

      <div class="engage__grid">
        <button
          v-for="(item, i) in tracks"
          :key="item.n"
          v-reveal="i * 80"
          type="button"
          class="card engage__card engage__card--btn"
          @click="open(item)"
        >
          <p class="engage__n mono">{{ item.n }}</p>
          <h3 class="engage__title">{{ item.title }}</h3>
          <p class="engage__body">{{ item.body }}</p>
          <span class="engage__cta">Request this track <UiIcon name="arrow-right" :size="14" /></span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.engage__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 14px;
  margin-top: clamp(32px, 4vw, 48px);
}

.engage__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  min-height: 240px;
  padding: 26px 24px;
  text-align: left;
  cursor: pointer;
  background: linear-gradient(180deg, #ffffff 0%, #fbfaf7 100%);
  transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
}

.engage__card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.engage__n {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--copper-deep);
}

.engage__title {
  margin-top: 12px;
  font-size: 20px;
  font-weight: 540;
  letter-spacing: -0.028em;
  line-height: 1.25;
  color: var(--ink);
}

.engage__body {
  margin-top: 12px;
  flex: 1;
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--text-2);
}

.engage__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
}

@media (max-width: 900px) {
  .engage__grid {
    grid-template-columns: 1fr;
  }
}
</style>
