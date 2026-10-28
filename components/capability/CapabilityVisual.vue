<script setup lang="ts">
import type { CapabilityVisualKind } from '~/data/capabilities'

defineProps<{ kind: CapabilityVisualKind }>()
</script>

<template>
  <div class="cvz" :class="`cvz--${kind}`" aria-hidden="true">
    <!-- Agents: tool graph with a live orchestrator -->
    <template v-if="kind === 'agents'">
      <svg class="cvz__wires" viewBox="0 0 220 140" preserveAspectRatio="none">
        <path d="M54 70 H110" />
        <path d="M110 70 C140 70 140 36 170 36" />
        <path d="M110 70 C140 70 140 104 170 104" />
        <circle r="2.4" class="cvz__packet">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M54 70 H110 C140 70 140 36 170 36" />
        </circle>
        <circle r="2.4" class="cvz__packet">
          <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M54 70 H110 C140 70 140 104 170 104" />
        </circle>
      </svg>
      <span class="cvz__node cvz__node--user" style="left: 24.5%; top: 50%"><UiIcon name="users" :size="15" /></span>
      <span class="cvz__node cvz__node--core" style="left: 50%; top: 50%"><UiIcon name="spark" :size="18" :stroke="1.7" /><i class="cvz__live" /></span>
      <span class="cvz__tool" style="left: 77%; top: 25.7%">ERP</span>
      <span class="cvz__tool" style="left: 77%; top: 74.3%">CRM</span>
    </template>

    <!-- Documents: extraction rows with a compliance check -->
    <template v-else-if="kind === 'documents'">
      <div class="cvz__list">
        <span class="cvz__pill-top" />
        <p class="cvz__row"><i class="cvz__sq"><UiIcon name="doc" :size="10" :stroke="2" /></i><span class="cvz__line w70" /></p>
        <p class="cvz__row cvz__row--hl"><i class="cvz__sq cvz__sq--ink"><UiIcon name="check" :size="10" :stroke="2.4" /></i><span class="cvz__line cvz__line--ink w85" /></p>
        <p class="cvz__row"><i class="cvz__sq"><UiIcon name="doc" :size="10" :stroke="2" /></i><span class="cvz__line w45" /></p>
      </div>
      <span class="cvz__badge">GDPR · AI Act ✓</span>
    </template>

    <!-- CTO: delivery stack with sign-off seal -->
    <template v-else-if="kind === 'cto'">
      <div class="cvz__stack">
        <span v-for="(layer, i) in ['UI', 'API', 'Data', 'Ops']" :key="layer" class="cvz__layer" :style="{ '--i': i }">
          <b>{{ layer }}</b><i class="cvz__line w60" />
        </span>
      </div>
      <span class="cvz__seal"><UiIcon name="shield" :size="14" :stroke="1.8" /> CTO sign-off</span>
    </template>

    <!-- Enablement: cohort and progress -->
    <template v-else>
      <div class="cvz__cohort">
        <span v-for="n in 5" :key="n" class="cvz__face" :style="{ '--n': n }" />
      </div>
      <div class="cvz__progress">
        <span class="cvz__progress-fill" />
      </div>
      <span class="cvz__caption mono">Agents · RAG · Evals</span>
    </template>
  </div>
</template>

<style scoped>
.cvz {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Agents */
.cvz__wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.cvz__wires path {
  fill: none;
  stroke: rgba(17, 19, 24, 0.16);
  stroke-width: 1.2;
  stroke-dasharray: 3 3;
  vector-effect: non-scaling-stroke;
}

.cvz__packet {
  fill: var(--copper);
}

.cvz__node {
  position: absolute;
  display: grid;
  place-items: center;
  transform: translate(-50%, -50%);
  border-radius: 12px;
}

.cvz__node--user {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #eceae5;
  color: #8b8d93;
}

.cvz__node--core {
  width: 46px;
  height: 46px;
  background: var(--ink);
  color: #fff;
  box-shadow: 0 10px 22px -10px rgba(17, 19, 24, 0.7);
}

.cvz__live {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #4cbf7b;
  border: 2px solid #fff;
}

.cvz__tool {
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 5px 9px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--text-3);
  box-shadow: var(--shadow-xs);
}

/* Documents */
.cvz__list {
  position: absolute;
  left: 18%;
  right: 14%;
  top: 22%;
  display: grid;
  gap: 12px;
}

.cvz__pill-top {
  justify-self: end;
  width: 46%;
  height: 7px;
  border-radius: 4px;
  background: #e7e5df;
}

.cvz__row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cvz__sq {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background: #eceae5;
  color: #8b8d93;
  flex: none;
}

.cvz__sq--ink {
  background: var(--ink);
  color: #fff;
}

.cvz__line {
  display: block;
  height: 6px;
  border-radius: 3px;
  background: #e2e0da;
}

.cvz__line--ink {
  height: 7px;
  background: var(--ink);
}

.cvz__row--hl {
  padding: 8px 10px;
  margin-inline: -10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 18px -10px rgba(17, 19, 24, 0.35);
  border: 1px solid var(--line);
}

.w45 { width: 45%; }
.w60 { width: 60%; }
.w70 { width: 70%; }
.w85 { width: 85%; }

.cvz__badge {
  position: absolute;
  right: 12%;
  bottom: 14%;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(200, 122, 75, 0.1);
  border: 1px solid rgba(200, 122, 75, 0.25);
  color: var(--copper-deep);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
}

/* CTO */
.cvz__stack {
  position: absolute;
  left: 16%;
  right: 30%;
  top: 18%;
  display: grid;
  gap: 7px;
}

.cvz__layer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 9px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-xs);
  transform: translateX(calc(var(--i) * 7px));
}

.cvz__layer b {
  width: 30px;
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--text-3);
}

.cvz__layer .cvz__line {
  height: 5px;
}

.cvz__seal {
  position: absolute;
  right: 9%;
  bottom: 13%;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 10px;
  background: var(--ink);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0 10px 22px -10px rgba(17, 19, 24, 0.7);
}

/* Enablement */
.cvz__cohort {
  position: absolute;
  left: 50%;
  top: 34%;
  display: flex;
  transform: translate(-50%, -50%);
}

.cvz__face {
  width: 34px;
  height: 34px;
  margin-left: -9px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: radial-gradient(circle at 50% 38%, #f3f1ec 0 22%, transparent 23%), radial-gradient(circle at 50% 110%, #f3f1ec 0 45%, transparent 46%),
    hsl(calc(20 + var(--n) * 8) calc(8% + var(--n) * 3%) calc(66% - var(--n) * 5%));
}

.cvz__face:first-child {
  margin-left: 0;
}

.cvz__face:nth-child(3) {
  background: radial-gradient(circle at 50% 38%, #fff 0 22%, transparent 23%), radial-gradient(circle at 50% 110%, #fff 0 45%, transparent 46%), var(--ink);
  transform: scale(1.12);
  z-index: 1;
}

.cvz__progress {
  position: absolute;
  left: 22%;
  right: 22%;
  top: 62%;
  height: 6px;
  border-radius: 3px;
  background: #e7e5df;
  overflow: hidden;
}

.cvz__progress-fill {
  display: block;
  width: 78%;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--ink), #3c3f47);
}

.cvz__caption {
  position: absolute;
  left: 0;
  right: 0;
  top: 74%;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-3);
}

@media (prefers-reduced-motion: reduce) {
  .cvz__packet {
    display: none;
  }
}
</style>
