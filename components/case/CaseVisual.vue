<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'

const props = withDefaults(defineProps<{ study: CaseStudy; mode?: 'card' | 'hero' }>(), { mode: 'card' })
const v = computed(() => props.study.visual)

const points = [
  [12, 30], [18, 58], [26, 22], [30, 72], [36, 44], [42, 18], [46, 62], [52, 36], [55, 80], [60, 52],
  [64, 26], [68, 70], [72, 44], [76, 14], [80, 60], [84, 34], [88, 76], [24, 46], [40, 84], [70, 88],
]
const near = new Set([7, 9, 12, 4])
</script>

<template>
  <div class="cv" :class="[`cv--${v.type}`, `cv--${mode}`, `cv--theme-${study.theme}`]">
    <!-- Photo -->
    <template v-if="v.type === 'photo'">
      <img :src="v.src" :alt="v.alt" class="cv__photo" loading="lazy" decoding="async" width="1024" height="768" />
    </template>

    <!-- Product screenshot -->
    <template v-else-if="v.type === 'screenshot'">
      <figure class="cv__shot">
        <div class="cv__chrome" aria-hidden="true"><span /><span /><span /></div>
        <img :src="v.src" :alt="v.alt" loading="lazy" decoding="async" width="1600" height="879" />
      </figure>
    </template>

    <!-- Partner logos -->
    <template v-else-if="v.type === 'logos'">
      <div class="cv__logos">
        <div v-for="logo in v.logos" :key="logo.src" class="cv__logo">
          <img :src="logo.src" :alt="logo.alt" loading="lazy" decoding="async" />
        </div>
        <div class="cv__cohort" aria-hidden="true">
          <span v-for="n in 7" :key="n" class="cv__avatar" :style="{ '--n': n }" />
          <span class="cv__cohort-label mono">300+ trained</span>
        </div>
      </div>
    </template>

    <!-- Extraction graphic -->
    <template v-else-if="v.type === 'graphic' && v.graphic === 'extraction'">
      <div class="cv__extract" aria-hidden="true">
        <div class="cv__doc">
          <div class="cv__doc-head"><span class="cv__bar w60" /><span class="cv__bar w30 dim" /></div>
          <span class="cv__bar w80 dim" />
          <span class="cv__bar w70 dim" />
          <span class="cv__bar w90 hl" />
          <span class="cv__bar w50 dim" />
          <span class="cv__bar w75 hl" />
          <span class="cv__bar w60 dim" />
          <span class="cv__bar w40 hl" />
          <span class="cv__scan" />
        </div>
        <div class="cv__json mono">
          <p><span class="k">plan_id</span><span class="v">"401K-88213"</span></p>
          <p><span class="k">participant</span><span class="v">"R. Alvarez"</span></p>
          <p><span class="k">distribution</span><span class="v">"rollover"</span></p>
          <p><span class="k">amount_usd</span><span class="v">48,210.55</span></p>
          <p class="ok"><span class="k">confidence</span><span class="v">0.992 ✓</span></p>
        </div>
      </div>
    </template>

    <!-- Procurement graphic -->
    <template v-else-if="v.type === 'graphic' && v.graphic === 'procurement'">
      <div class="cv__proc" aria-hidden="true">
        <div class="cv__dossiers">
          <span v-for="n in 4" :key="n" class="cv__dossier" :style="{ '--n': n }" />
        </div>
        <div class="cv__criteria">
          <p v-for="(c, i) in [['Technical merit', 86], ['Price & value', 72], ['Delivery risk', 34], ['Legal compliance', 100]]" :key="i">
            <span class="cv__crit-label">{{ c[0] }}</span>
            <span class="cv__crit-track"><span class="cv__crit-fill" :style="{ width: `${c[1]}%`, '--d': `${i * 120}ms` }" /></span>
            <span class="cv__crit-val mono">{{ c[1] }}</span>
          </p>
          <span class="cv__risk mono">Supplier risk · low · 14 citations</span>
        </div>
      </div>
    </template>

    <!-- Reporting graphic -->
    <template v-else-if="v.type === 'graphic' && v.graphic === 'reporting'">
      <div class="cv__report" aria-hidden="true">
        <p class="cv__ask">“Q3 revenue by region vs. plan, as a board PDF”</p>
        <div class="cv__chart">
          <span v-for="(hgt, i) in [42, 64, 50, 78, 58, 88]" :key="i" class="cv__col" :style="{ '--h': `${hgt}%`, '--d': `${i * 80}ms` }" />
          <svg class="cv__trend" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2 30 C 20 26, 30 18, 46 20 S 72 8, 98 6" /></svg>
        </div>
        <p class="cv__ready mono">board_report_Q3.pdf ready</p>
      </div>
    </template>

    <!-- Retrieval graphic -->
    <template v-else-if="v.type === 'graphic' && v.graphic === 'retrieval'">
      <div class="cv__rag" aria-hidden="true">
        <svg viewBox="0 0 100 100" class="cv__space">
          <circle cx="56" cy="48" r="17" class="cv__radius" />
          <line v-for="i in [7, 9, 12, 4]" :key="`l${i}`" x1="56" y1="48" :x2="points[i][0]" :y2="points[i][1]" class="cv__edge" />
          <circle v-for="(pt, i) in points" :key="i" :cx="pt[0]" :cy="pt[1]" :r="near.has(i) ? 1.9 : 1.3" :class="near.has(i) ? 'cv__pt cv__pt--near' : 'cv__pt'" />
          <circle cx="56" cy="48" r="2.6" class="cv__query" />
        </svg>
        <div class="cv__fusion mono">
          <span>BM25 0.41</span><span>+</span><span>vector 0.59</span><span>=</span><span class="hl">fused ✓</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.cv {
  position: relative;
  width: 100%;
  height: 100%;
}

.cv__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease-out);
}

/* Screenshot */
.cv__shot {
  position: absolute;
  left: 9%;
  right: -14%;
  bottom: -6%;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(17, 19, 24, 0.1);
  box-shadow: 0 30px 60px -24px rgba(17, 19, 24, 0.35);
  transform: rotate(-2deg);
  transform-origin: bottom left;
  transition: transform 0.9s var(--ease-out);
}

.cv--hero .cv__shot {
  position: relative;
  left: auto;
  right: auto;
  bottom: auto;
  transform: none;
}

.cv__chrome {
  display: flex;
  gap: 5px;
  padding: 8px 10px;
  background: #f4f2ec;
  border-bottom: 1px solid rgba(17, 19, 24, 0.07);
}

.cv__chrome span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(17, 19, 24, 0.16);
}

/* Logos */
.cv__logos {
  position: absolute;
  inset: auto 22px 22px 22px;
  display: grid;
  gap: 10px;
}

.cv__logo {
  display: grid;
  place-items: center;
  height: 74px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid var(--line);
}

.cv__logo img {
  max-height: 34px;
  max-width: 70%;
  width: auto;
}

.cv__cohort {
  display: flex;
  align-items: center;
  margin-top: 6px;
}

.cv__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--canvas);
  margin-left: -8px;
  background: linear-gradient(135deg, hsl(calc(18 + var(--n) * 6) 40% calc(56% + var(--n) * 3%)), hsl(calc(24 + var(--n) * 4) 22% 34%));
}

.cv__avatar:first-child {
  margin-left: 0;
}

.cv__cohort-label {
  margin-left: 12px;
  font-size: 11.5px;
  color: var(--text-3);
}

/* Extraction */
.cv__extract {
  position: absolute;
  inset: auto 22px 22px 22px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 12px;
  align-items: end;
}

.cv__doc {
  position: relative;
  display: grid;
  gap: 7px;
  padding: 14px 12px;
  border-radius: 10px;
  background: #f6f3ec;
  overflow: hidden;
  transform: rotate(-3deg);
  box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.6);
}

.cv__doc-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.cv__bar {
  display: block;
  height: 6px;
  border-radius: 3px;
  background: #1a1d24;
}

.cv__bar.dim {
  background: rgba(17, 19, 24, 0.16);
}

.cv__bar.hl {
  background: rgba(200, 122, 75, 0.55);
}

.w30 { width: 30%; }
.w40 { width: 40%; }
.w50 { width: 50%; }
.w60 { width: 60%; }
.w70 { width: 70%; }
.w75 { width: 75%; }
.w80 { width: 80%; }
.w90 { width: 90%; }

.cv__scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 24px;
  top: -24px;
  background: linear-gradient(180deg, transparent, rgba(200, 122, 75, 0.28), transparent);
  animation: scan 3.6s var(--ease-in-out) infinite;
}

@keyframes scan {
  0% { top: -24px; }
  70%, 100% { top: 100%; }
}

.cv__json {
  display: grid;
  gap: 6px;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 10.5px;
  line-height: 1.3;
}

.cv__json p {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  white-space: nowrap;
}

.cv__json .k {
  color: rgba(244, 241, 234, 0.5);
}

.cv__json .v {
  color: #f4f1ea;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cv__json .ok .v {
  color: #8fd1a8;
}

/* Procurement */
.cv__proc {
  position: absolute;
  inset: auto 22px 22px 22px;
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 14px;
  align-items: end;
}

.cv__dossiers {
  position: relative;
  height: 112px;
}

.cv__dossier {
  position: absolute;
  left: calc(var(--n) * 4px);
  bottom: calc(var(--n) * 6px);
  width: 56px;
  height: 74px;
  border-radius: 6px;
  background: linear-gradient(180deg, #f6ede3, #e9d9c8);
  box-shadow: 0 8px 18px -8px rgba(40, 20, 10, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.cv__criteria {
  display: grid;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 248, 240, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

.cv__criteria p {
  display: grid;
  grid-template-columns: 1fr 1.1fr 24px;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: rgba(255, 248, 240, 0.86);
}

.cv__crit-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cv__crit-track {
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}

.cv__crit-fill {
  display: block;
  height: 100%;
  border-radius: 2px;
  background: #fff4e8;
}

.cv__crit-val {
  font-size: 10.5px;
  text-align: right;
}

.cv__risk {
  margin-top: 2px;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(255, 248, 240, 0.7);
}

/* Reporting */
.cv__report {
  position: absolute;
  inset: auto 22px 22px 22px;
  display: grid;
  gap: 12px;
}

.cv__ask {
  justify-self: start;
  max-width: 88%;
  padding: 10px 14px;
  border-radius: 14px 14px 14px 4px;
  background: var(--ink);
  color: var(--canvas);
  font-size: 13px;
  line-height: 1.35;
}

.cv__chart {
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 108px;
  padding: 12px 14px 0;
  border-radius: 12px;
  background: var(--paper);
  border: 1px solid var(--line);
}

.cv__col {
  flex: 1;
  height: var(--h);
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, #d9a47c, #c87a4b);
  transform-origin: bottom;
}

.cv__col:nth-child(odd) {
  background: rgba(17, 19, 24, 0.14);
}

.cv__trend {
  position: absolute;
  inset: 12px 14px 0;
  width: calc(100% - 28px);
  height: calc(100% - 12px);
  overflow: visible;
}

.cv__trend path {
  fill: none;
  stroke: var(--ink);
  stroke-width: 1.2;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 3 3;
}

.cv__ready {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--text-3);
}

/* Retrieval */
.cv__rag {
  position: absolute;
  inset: 8px 18px 22px 18px;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 10px;
}

.cv__space {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.cv__radius {
  fill: rgba(200, 122, 75, 0.08);
  stroke: rgba(217, 147, 95, 0.5);
  stroke-width: 0.4;
  stroke-dasharray: 1.2 1.2;
}

.cv__edge {
  stroke: rgba(217, 147, 95, 0.7);
  stroke-width: 0.35;
}

.cv__pt {
  fill: rgba(244, 241, 234, 0.32);
}

.cv__pt--near {
  fill: #e3a274;
}

.cv__query {
  fill: #fff;
  filter: drop-shadow(0 0 3px rgba(255, 220, 190, 0.9));
}

.cv__fusion {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 10.5px;
  color: rgba(244, 241, 234, 0.6);
}

.cv__fusion span {
  padding: 4px 7px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cv__fusion span:nth-child(2),
.cv__fusion span:nth-child(4) {
  border: 0;
  padding-inline: 0;
}

.cv__fusion .hl {
  color: #f4f1ea;
  border-color: rgba(217, 147, 95, 0.6);
  background: rgba(200, 122, 75, 0.16);
}

/* Theme tweaks */
.cv--theme-light .cv__fusion,
.cv--theme-stone .cv__fusion {
  color: var(--text-3);
}

/* Hero mode (detail pages) */
.cv--hero {
  min-height: 360px;
}

.cv--hero.cv--photo {
  min-height: 420px;
}

@media (prefers-reduced-motion: reduce) {
  .cv__scan {
    display: none;
  }
}
</style>
