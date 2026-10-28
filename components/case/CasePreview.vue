<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'

defineProps<{ study: CaseStudy }>()

const qa = [
  ['Greeting & ID', 98],
  ['Empathy', 91],
  ['Process adherence', 96],
  ['Disclosure', 100],
  ['Hold handling', 88],
  ['Accuracy', 97],
  ['Complaint capture', 94],
  ['Next-step clarity', 93],
  ['Tone', 90],
  ['Compliance script', 99],
  ['Resolution attempt', 92],
  ['Close quality', 95],
] as const

const pagareFields = [
  { label: 'Importe', value: '1.900,00 EUR', conf: '99.8%', x: 62, y: 8, w: 30, h: 22 },
  { label: 'Vencimiento', value: '19 / 09 / 2020', conf: '99.6%', x: 6, y: 27, w: 34, h: 8 },
  { label: 'Beneficiario & Letra', value: 'José López Lopez', conf: '99.4%', x: 5.5, y: 42, w: 50, h: 14 },
  { label: 'Firma y Sello', value: 'Comercial, S.L. · OK', conf: '98.9%', x: 71, y: 58, w: 22, h: 20 },
]
</script>

<template>
  <section class="preview">
    <div class="container">
      <p class="eyebrow">Visual system blueprint</p>
      <h2 class="display-sm preview__title">How it actually runs</h2>

      <!-- Pagaré extractor -->
      <div v-if="study.preview === 'pagare'" class="stage">
        <div class="doc">
          <div class="doc__frame">
            <img
              src="/cases/pagare-real.png"
              alt="Spanish pagaré — Comercial, S.L., 1.900,00 €, vencimiento 19/09/2020"
              width="1600"
              height="760"
              class="doc__img"
            />
            <span
              v-for="f in pagareFields"
              :key="f.label"
              class="box"
              :style="{ left: f.x + '%', top: f.y + '%', width: f.w + '%', height: f.h + '%' }"
            >
              <i />
              <em>{{ f.label }} · {{ f.conf }}</em>
            </span>
          </div>
        </div>
        <div class="erp">
          <p class="erp__k mono">Validated ERP record · &lt; 8s</p>
          <dl class="erp__rows">
            <div v-for="f in pagareFields" :key="f.label">
              <dt>{{ f.label === 'Beneficiario & Letra' ? 'Beneficiario' : f.label }}</dt>
              <dd>{{ f.value }}</dd>
            </div>
          </dl>
          <p class="erp__post mono">Posted · 7.4s · amount-in-words matches figures · signature present</p>
        </div>
      </div>

      <!-- Insurance call audit -->
      <div v-else-if="study.preview === 'call-audit'" class="stage">
        <div class="score">
          <p class="erp__k mono">12-criteria QA scorecard</p>
          <ul>
            <li v-for="row in qa" :key="row[0]">
              <span>{{ row[0] }}</span>
              <span class="bar"><i :style="{ width: row[1] + '%' }" /></span>
              <strong class="mono">{{ row[1] }}</strong>
            </li>
          </ul>
        </div>
        <div class="transcript">
          <p class="erp__k mono">Diarised transcript · ES-MX</p>
          <p class="turn turn--a"><b>Agent</b> Buenos días, le atiende Carla de siniestros. ¿Me confirma su póliza?</p>
          <p class="turn turn--c"><b>Caller</b> Es la tercera vez que llamo por el mismo rechazo. Quiero presentar una queja formal.</p>
          <p class="flag mono">Complaint captured · taxonomy 94% · owner: QA-LATAM · process: inbound-complaint</p>
        </div>
      </div>

      <!-- UAE concierge -->
      <div v-else-if="study.preview === 'voice-concierge'" class="stage">
        <ol class="flow-card" role="list">
          <li><span class="mono">01</span> Pickup &lt; 2s · AR / EN / ZH / RU</li>
          <li><span class="mono">02</span> Guest identified in Opera PMS</li>
          <li><span class="mono">03</span> Table for 4 · Pierchic · 20:30 held</li>
          <li><span class="mono">04</span> VIP handoff with stay context</li>
        </ol>
        <div class="pms">
          <p class="erp__k mono">PMS live booking</p>
          <p class="pms__room">Royal Bridge Suite · Palm crescent</p>
          <dl>
            <div><dt>Guest</dt><dd>Family stay · arriving tonight</dd></div>
            <div><dt>Dining</dt><dd>Held · 20:30 · 4 covers</dd></div>
            <div><dt>Language</dt><dd>Arabic → English warm handoff</dd></div>
          </dl>
        </div>
      </div>

      <!-- Vision QC -->
      <div v-else-if="study.preview === 'vision-qc'" class="stage stage--single">
        <div class="vision">
          <span class="vbox vbox--a">scratch · 0.987</span>
          <span class="vbox vbox--b">edge chip · 0.941</span>
          <p class="erp__k mono">Line 3 · 240 u/min · HOLD</p>
          <p class="vision__copy">Frame 18,442 traced to model `qc-v3.2` and owner Process Quality. Line held; human review in 4s.</p>
        </div>
      </div>

      <!-- Knowledge -->
      <div v-else-if="study.preview === 'knowledge'" class="stage">
        <div class="ask">
          <p class="ask__q">“What is the Mexico circular on UBO refresh for this quarter?”</p>
          <p class="ask__a">Cited from MX-compliance/2026-Q3 §4.2 — refresh within 30 days of a change in control. Filter: country=MX · role=compliance.</p>
        </div>
        <div class="cites">
          <p class="erp__k mono">Retrieved · 0.62s</p>
          <p>MX circular Q3 · p.4</p>
          <p>Group policy UBO · §2.1</p>
          <p>Local counsel memo · 12 Sep</p>
        </div>
      </div>

      <!-- Voice ops -->
      <div v-else-if="study.preview === 'voice-ops'" class="stage stage--single">
        <div class="ops">
          <div v-for="s in [{ k: 'Live', v: '214' }, { k: 'FCR', v: '69%' }, { k: 'Queue', v: '0:08' }, { k: 'Night', v: 'On' }]" :key="s.k" class="ops__tile">
            <p class="mono">{{ s.k }}</p>
            <p class="ops__v">{{ s.v }}</p>
          </div>
        </div>
      </div>

      <div v-else class="stage stage--single">
        <div class="generic">
          <CaseVisual :study="study" mode="hero" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preview {
  padding-block: clamp(48px, 6vw, 80px);
}

.preview__title {
  margin: 12px 0 28px;
}

.stage {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
}

.stage--single {
  grid-template-columns: 1fr;
}

.doc,
.erp,
.score,
.transcript,
.flow-card,
.pms,
.vision,
.ask,
.cites,
.ops,
.generic {
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--paper);
  padding: 22px;
}

.doc {
  min-height: 0;
  padding: 12px;
  background: #efe8dc;
}

.doc__frame {
  position: relative;
}

.doc__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.box {
  position: absolute;
  pointer-events: none;
}

.box i {
  position: absolute;
  inset: 0;
  border: 1.5px solid #c87a4b;
  border-radius: 4px;
  background: rgba(200, 122, 75, 0.1);
}

.box em {
  position: absolute;
  left: 0;
  top: -15px;
  font-style: normal;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.03em;
  color: #7a3d18;
  white-space: nowrap;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.75);
}

.erp {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.erp dl,
.pms dl {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.erp__rows {
  gap: 0;
  flex: 1;
}

.erp__rows > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.erp dt,
.pms dt {
  font-size: 12px;
  color: var(--text-3);
}

.erp dd,
.pms dd {
  font-size: 15px;
  font-weight: 520;
}

.ok {
  margin-left: 8px;
  color: var(--copper-deep);
  font-family: var(--font-mono);
  font-size: 11px;
}

.erp__k {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.erp__post {
  margin-top: 18px;
  font-size: 12px;
  color: var(--text-3);
}

.score li {
  display: grid;
  grid-template-columns: 1.2fr 1fr 36px;
  gap: 8px;
  align-items: center;
  padding: 6px 0;
  font-size: 13px;
}

.bar {
  height: 4px;
  background: var(--canvas-3);
  border-radius: 2px;
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  background: var(--copper);
}

.turn {
  padding: 10px 12px;
  border-radius: 12px;
  margin-top: 10px;
  font-size: 14.5px;
  line-height: 1.45;
}

.turn--a {
  background: var(--canvas-2);
}

.turn--c {
  background: rgba(200, 122, 75, 0.1);
}

.flag {
  margin-top: 16px;
  font-size: 12px;
  color: var(--copper-deep);
}

.flow-card {
  display: grid;
  gap: 0;
}

.flow-card li {
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  font-size: 16px;
}

.pms__room {
  margin-top: 10px;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.vision {
  min-height: 280px;
  background:
    radial-gradient(50% 60% at 70% 40%, rgba(200, 122, 75, 0.2), transparent 60%),
    linear-gradient(180deg, #1a1d24, #0c0d0f);
  color: var(--on-dark);
  position: relative;
}

.vbox {
  position: absolute;
  padding: 6px 8px;
  border: 1px solid #e5a97c;
  color: #e5a97c;
  font-family: var(--font-mono);
  font-size: 11px;
}

.vbox--a {
  top: 28%;
  left: 18%;
  width: 28%;
  height: 22%;
}

.vbox--b {
  top: 48%;
  left: 52%;
  width: 22%;
  height: 18%;
}

.vision__copy {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  max-width: 520px;
  color: var(--on-dark-2);
}

.ask__q {
  font-size: 20px;
  letter-spacing: -0.02em;
}

.ask__a {
  margin-top: 14px;
  color: var(--text-2);
}

.cites p + p {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
}

.ops {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.ops__v {
  font-size: 32px;
  letter-spacing: -0.04em;
  margin-top: 6px;
}

.generic {
  min-height: 320px;
  position: relative;
  overflow: hidden;
}

@media (max-width: 860px) {
  .stage,
  .ops {
    grid-template-columns: 1fr;
  }
}
</style>
