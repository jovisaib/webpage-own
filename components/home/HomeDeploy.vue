<script setup lang="ts">
const sources = ['Core banking & ERP', 'Document stores & DMS', 'Email & ticketing', 'Data lake & warehouse', 'CRM & line-of-business apps']
const layers = [
  { name: 'Ingestion & OCR', detail: 'Parsing, classification, layout' },
  { name: 'Retrieval & reasoning', detail: 'Hybrid search, LLM orchestration' },
  { name: 'Agents & tools', detail: 'Scoped actions, approvals' },
  { name: 'Evaluation & guardrails', detail: 'Golden sets, policy, audit trail' },
]
const outcomes = ['Your apps & ERP', 'Review console', 'Reports & audit evidence']

const pillars = [
  { icon: 'users', title: 'Forward-deployed engineering', body: 'Senior engineers embedded with your operators, not a ticket queue an ocean away.' },
  { icon: 'clock', title: '2–4 weeks to production', body: 'Scoped sprints that go from discovery to a live, monitored system in weeks.' },
  { icon: 'server', title: 'Your VPC or on-premise', body: 'Deployed in your cloud tenancy or data centre, with open-weight or private model endpoints when data cannot leave.' },
  { icon: 'key', title: '100% IP & code ownership', body: 'Source code, prompts, evaluation suites and infrastructure-as-code transfer to you.' },
  { icon: 'shield', title: 'Evaluation & guardrails', body: 'Golden datasets, regression evaluations, PII redaction, policy checks and full audit trails.' },
]
</script>

<template>
  <section id="deploy" class="section section--dark deploy grain" data-nav-theme="dark" aria-labelledby="deploy-title">
    <div class="deploy__silk" aria-hidden="true">
      <span class="deploy__wave deploy__wave--a" />
      <span class="deploy__wave deploy__wave--b" />
      <span class="deploy__wave deploy__wave--c" />
    </div>

    <div class="container">
      <div class="section-head section-head--center deploy__head">
        <p class="eyebrow">How we deploy</p>
        <h2 id="deploy-title" class="display-lg" v-reveal>
          Engineered inside <span class="accent">your perimeter.</span>
        </h2>
        <p class="deploy__lede" v-reveal="80">
          We embed senior engineers with your team, build on your infrastructure and hand over a system you fully own, typically in two to four weeks.
        </p>
      </div>

      <div v-reveal class="arch">
        <div class="arch__boundary">
          <span class="arch__boundary-label mono"><UiIcon name="lock" :size="13" /> Your VPC · on-premise · sovereign cloud</span>

          <div class="arch__col">
            <p class="arch__col-title mono">Your systems</p>
            <ul role="list" class="arch__list">
              <li v-for="s in sources" :key="s" class="arch__chip">{{ s }}</li>
            </ul>
          </div>

          <div class="arch__flow" aria-hidden="true"><span /><span /><span /></div>

          <div class="arch__col arch__col--core">
            <p class="arch__col-title mono"><BrandMark variant="dark" class="arch__mark" title="" /> Allometrik system layer</p>
            <ol role="list" class="arch__layers">
              <li v-for="(layer, i) in layers" :key="layer.name" class="arch__layer" :style="{ '--i': i }">
                <span class="arch__layer-name">{{ layer.name }}</span>
                <span class="arch__layer-detail">{{ layer.detail }}</span>
              </li>
            </ol>
          </div>

          <div class="arch__flow" aria-hidden="true"><span /><span /><span /></div>

          <div class="arch__col">
            <p class="arch__col-title mono">Outcomes</p>
            <ul role="list" class="arch__list">
              <li v-for="o in outcomes" :key="o" class="arch__chip arch__chip--out">{{ o }}</li>
            </ul>
          </div>
        </div>
      </div>

      <ul role="list" class="pillars">
        <li v-for="(p, i) in pillars" :key="p.title" v-reveal="i * 70" class="pillar panel-dark">
          <span class="pillar__icon"><UiIcon :name="p.icon" :size="18" /></span>
          <h3 class="pillar__title">{{ p.title }}</h3>
          <p class="pillar__body">{{ p.body }}</p>
        </li>
      </ul>

      <div class="deploy__foot">
        <NuxtLink to="/process" class="text-link">See how an engagement runs <UiIcon name="arrow-right" :size="15" /></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deploy {
  overflow: hidden;
  isolation: isolate;
  background: radial-gradient(120% 80% at 50% 0%, #161a23 0%, #0b0d13 55%, #08090d 100%);
}

.deploy__silk {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.deploy__wave {
  position: absolute;
  left: -20%;
  right: -20%;
  height: 46%;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
}

.deploy__wave--a {
  top: -8%;
  background: radial-gradient(closest-side, rgba(150, 156, 176, 0.35), transparent);
  animation: drift 22s var(--ease-in-out) infinite alternate;
}

.deploy__wave--b {
  top: 30%;
  background: radial-gradient(closest-side, rgba(200, 122, 75, 0.2), transparent);
  animation: drift 26s var(--ease-in-out) infinite alternate-reverse;
}

.deploy__wave--c {
  bottom: -14%;
  background: radial-gradient(closest-side, rgba(110, 116, 136, 0.28), transparent);
  animation: drift 30s var(--ease-in-out) infinite alternate;
}

@keyframes drift {
  from {
    transform: translate3d(-4%, 0, 0) rotate(-3deg) scaleY(0.9);
  }
  to {
    transform: translate3d(5%, 3%, 0) rotate(2deg) scaleY(1.1);
  }
}

.deploy__head {
  max-width: 860px;
}

.deploy__lede {
  max-width: 640px;
  font-size: clamp(17px, 1.45vw, 20px);
  line-height: 1.6;
  color: var(--on-dark-2);
}

/* Architecture */
.arch {
  margin-top: clamp(48px, 6vw, 80px);
}

.arch__boundary {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1.25fr) 56px minmax(0, 1fr);
  align-items: center;
  padding: 56px 28px 32px;
  border-radius: 28px;
  border: 1px dashed rgba(244, 241, 234, 0.22);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01));
}

.arch__boundary-label {
  position: absolute;
  top: 18px;
  left: 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.arch__col {
  display: grid;
  gap: 14px;
}

.arch__col-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-dark-3);
}

.arch__mark {
  width: 20px;
  height: 20px;
}

.arch__list {
  display: grid;
  gap: 8px;
}

.arch__chip {
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid var(--line-dark-2);
  background: rgba(255, 255, 255, 0.03);
  font-size: 14px;
  color: var(--on-dark-2);
}

.arch__chip--out {
  color: var(--on-dark);
  border-color: rgba(217, 147, 95, 0.35);
  background: rgba(200, 122, 75, 0.08);
}

.arch__col--core {
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025));
  border: 1px solid rgba(244, 241, 234, 0.16);
  box-shadow: 0 30px 80px -40px rgba(200, 122, 75, 0.45);
}

.arch__layers {
  display: grid;
  gap: 8px;
}

.arch__layer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 13px 14px;
  border-radius: 12px;
  background: rgba(11, 13, 19, 0.6);
  border: 1px solid var(--line-dark);
}

.arch__layer-name {
  font-size: 15px;
  font-weight: 500;
  color: var(--on-dark);
}

.arch__layer-detail {
  font-size: 12.5px;
  color: var(--on-dark-3);
  text-align: right;
}

.arch__flow {
  display: grid;
  gap: 18px;
  padding: 0 8px;
}

.arch__flow span {
  position: relative;
  height: 1px;
  background: rgba(244, 241, 234, 0.14);
  overflow: hidden;
}

.arch__flow span::after {
  content: '';
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e3a274, transparent);
  animation: flow 2.4s linear infinite;
}

.arch__flow span:nth-child(2)::after {
  animation-delay: 0.6s;
}

.arch__flow span:nth-child(3)::after {
  animation-delay: 1.2s;
}

@keyframes flow {
  to {
    left: 100%;
  }
}

/* Pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.pillar {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 22px 20px 24px;
}

.pillar__icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: var(--copper-2);
  background: rgba(200, 122, 75, 0.12);
  border: 1px solid rgba(200, 122, 75, 0.22);
}

.pillar__title {
  font-size: 16px;
  font-weight: 560;
  letter-spacing: -0.016em;
  color: var(--on-dark);
}

.pillar__body {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--on-dark-2);
}

.deploy__foot {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

@media (max-width: 1100px) {
  .pillars {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pillar:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 900px) {
  .arch__boundary {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 56px 18px 18px;
  }

  .arch__flow {
    height: 36px;
    grid-template-columns: repeat(3, 1px);
    justify-content: center;
    gap: 18px;
    padding: 0;
  }

  .arch__flow span {
    width: 1px;
    height: 100%;
  }

  .arch__flow span::after {
    width: 1px;
    height: 40%;
    left: 0;
    top: -40%;
    background: linear-gradient(180deg, transparent, #e3a274, transparent);
    animation-name: flow-v;
  }

  @keyframes flow-v {
    to {
      top: 100%;
    }
  }
}

@media (max-width: 560px) {
  .pillars {
    grid-template-columns: 1fr;
  }

  .arch__layer {
    flex-direction: column;
    gap: 2px;
  }

  .arch__layer-detail {
    text-align: left;
  }
}
</style>
