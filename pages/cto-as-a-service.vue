<script setup lang="ts">
import { site } from '~/data/site'

definePageMeta({ navTheme: 'dark' })

usePageSeo({
  title: 'CTO as a Service AI — Allometrik',
  description:
    'AI-augmented CTO and full-stack delivery: senior architecture and security sign-off from Allometrik’s CTO team, with continuous product, API, data and ops delivery at a fraction of traditional headcount.',
})

const included = [
  'Full-stack product work (UI, UX, frontend)',
  'APIs, webhooks and integrations',
  'Database design and migrations',
  'QA, observability and runbooks',
  'Security review and CTO sign-off before production',
]
const quoted = [
  'Open-ended R&D with no acceptance criteria',
  'Training foundation models from scratch',
  'Full cloud rewrites or greenfield platform migrations',
  'Dedicated extra delivery lanes beyond the subscription',
]

const mechanics = [
  {
    title: 'Black-box engine, white-glove peace of mind',
    body: 'You write requests in business language. Behind the portal, Allometrik’s private agentic engineering engine drafts, tests and opens a preview. You never have to manage the machinery.',
  },
  {
    title: 'Automatic scope guardrails',
    body: 'Every request is classified before it enters a lane. In-scope work flows. Out-of-scope work is quoted, not silently absorbed — so the monthly subscription stays honest.',
  },
  {
    title: '24–48h preview environments',
    body: 'Asynchronous by default. You review a running preview, comment in the portal, and approve. No status meeting required to see progress.',
  },
  {
    title: 'One active lane, optional parallel slots',
    body: 'Focus is a feature. The subscription covers one active delivery lane. Additional sprint slots can run in parallel when a launch demands it, quoted as such.',
  },
]
</script>

<template>
  <div>
    <header class="hero" data-nav-theme="dark">
      <div class="container hero__inner">
        <p class="eyebrow">CTO as a Service AI</p>
        <h1 class="display-lg">AI-augmented CTO &amp; <span class="accent">full-stack delivery.</span></h1>
        <p class="lede">
          Senior architecture, security sign-off, and continuous product &amp; ops delivery — powered by Allometrik’s private engineering engine, audited by Jose Vicente and the CTO team before anything reaches production.
        </p>
        <div class="hero__actions">
          <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Book a consultation</UiButton>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container value">
        <div>
          <p class="eyebrow">The proposition</p>
          <h2 class="display-sm">A CTO function, without a CTO payroll</h2>
          <p class="body-lg">
            Most companies that need a production system cannot hire a full CTO bench, a senior architect, a security lead and a delivery squad — and should not be left with isolated junior or mid developers to invent the architecture as they go.
          </p>
          <p class="body-lg">
            CTO as a Service AI is the other shape: full-stack execution (frontend, backend, APIs, data, ops automation, QA) accelerated by our private agentic engine, then <strong>read, challenged and signed off before production</strong> by Jose Vicente and Allometrik’s team of CTOs.
          </p>
        </div>
        <ul class="value__list" role="list">
          <li><strong>Architecture</strong> before code, not as a retrofit.</li>
          <li><strong>Security sign-off</strong> as a gate, not a hope.</li>
          <li><strong>Ownership</strong> of the code and the evaluations, from day one.</li>
          <li><strong>A fraction</strong> of the fully loaded cost of assembling that team yourself.</li>
        </ul>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <p class="eyebrow">How the portal works</p>
        <h2 class="display-sm">Business language in. Signed-off software out.</h2>
        <ul class="mechanics" role="list">
          <li v-for="item in mechanics" :key="item.title" class="card mechanics__item">
            <h3 class="title">{{ item.title }}</h3>
            <p class="body">{{ item.body }}</p>
          </li>
        </ul>
        <div class="scope">
          <div class="scope__col">
            <p class="chip chip--ink">Included in the flat monthly subscription</p>
            <ul>
              <li v-for="item in included" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="scope__col">
            <p class="chip">Quoted separately</p>
            <ul>
              <li v-for="item in quoted" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="eyebrow">Interactive preview</p>
        <h2 class="display-sm">The client workspace</h2>
        <p class="lede workspace-lede">A request classifier, a delivery queue with CTO sign-off states, and the comparison that matters: this is not a bench of unsupervised developers.</p>
        <CtoWorkspace />
      </div>
    </section>

    <HomeContact />
  </div>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--nav-h) + 96px);
  padding-bottom: clamp(72px, 10vw, 120px);
  background: radial-gradient(120% 90% at 50% 0%, #1b1612 0%, #0d0f15 55%, #090a0f 100%);
  color: var(--on-dark);
}

.hero h1 {
  max-width: 16ch;
  margin-top: 18px;
}

.hero .lede {
  max-width: 640px;
  margin-top: 22px;
  color: var(--on-dark-2);
}

.hero__actions {
  margin-top: 28px;
}

.value {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 48px;
}

.value h2 {
  margin: 14px 0 18px;
  max-width: 16ch;
}

.value .body-lg + .body-lg {
  margin-top: 14px;
}

.value__list {
  display: grid;
  gap: 16px;
  align-content: start;
  padding: 28px;
  border-radius: var(--radius-lg);
  background: var(--ink);
  color: var(--on-dark);
}

.value__list li {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line-dark);
  color: var(--on-dark-2);
}

.value__list strong {
  color: var(--on-dark);
}

.mechanics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 28px 0 36px;
}

.mechanics__item {
  padding: 24px;
  display: grid;
  gap: 10px;
}

.scope {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.scope__col {
  padding: 24px;
  border-radius: var(--radius-lg);
  background: var(--paper);
  border: 1px solid var(--line);
}

.scope__col ul {
  display: grid;
  gap: 10px;
  margin-top: 16px;
  padding-left: 18px;
}

.scope__col li::marker {
  color: var(--copper);
}

.workspace-lede {
  margin: 14px 0 32px;
  max-width: 640px;
}

@media (max-width: 900px) {
  .value,
  .mechanics,
  .scope {
    grid-template-columns: 1fr;
  }
}
</style>
