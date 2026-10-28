<script setup lang="ts">
const steps = [
  {
    n: '01',
    title: 'Discover & map',
    weeks: 'Week 0–1',
    body: 'We sit with the people who run the process, assemble a representative sample of real inputs (the ugly cases included) and agree a golden dataset. You leave with a written ROI map: which workflows to automate first, what “good” means, and where the system will live.',
  },
  {
    n: '02',
    title: 'Build & deploy',
    weeks: 'Week 1–3',
    body: 'Forward-deployed engineers build on your infrastructure. Weekly demos run on your data, not slides. Evaluation harnesses, guardrails, access control and integrations are first-class — not a hardening phase after a prototype.',
  },
  {
    n: '03',
    title: 'Launch & transfer',
    weeks: 'Week 3–4',
    body: 'The system goes live with monitoring, runbooks and a named owner on our side. Code, prompts, evaluations and infrastructure-as-code transfer to your team. We stay for hypercare, then step back.',
  },
]

const faqs = [
  {
    q: 'What do we need to get started?',
    a: 'A 30-minute discovery call. We map the workflow, identify automation opportunities and provide an ROI projection. No technical preparation is required on your side.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Most systems are deployed in 2–4 weeks. We work in parallel with your operations — no freeze, no platform migration.',
  },
  {
    q: 'Do we need in-house AI talent?',
    a: 'No. We handle design, deployment and maintenance. If you want to build internal capability, we run training programmes — we have trained 500+ professionals.',
  },
  {
    q: 'What about data security and compliance?',
    a: 'We sign NDAs and MSAs, never use your data to train models, and deploy inside your VPC or on-premise. Audit trails, GDPR and EU AI Act obligations are designed in, not bolted on.',
  },
  {
    q: 'Who owns the system when we are done?',
    a: 'You do. Source code, prompts, evaluation suites and infrastructure-as-code transfer to your team. Architectures stay model-agnostic.',
  },
]

const open = ref<number | null>(0)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Process"
      lede="A production sprint, not a six-month transformation programme. Senior engineers, your data, your perimeter, a system you own."
    >
      From analysis to automation in <span class="accent">weeks.</span>
    </PageHero>

    <section class="section section--flush-top">
      <div class="container">
        <ol class="steps" role="list">
          <li v-for="step in steps" :key="step.n" class="steps__item card">
            <p class="steps__n mono">{{ step.n }}</p>
            <p class="chip chip--copper">{{ step.weeks }}</p>
            <h2 class="display-sm">{{ step.title }}</h2>
            <p class="body-lg">{{ step.body }}</p>
          </li>
        </ol>
        <p class="guarantee"><UiIcon name="check" :size="16" :stroke="2.2" /> Production-ready in 2–4 weeks, with a golden dataset you sign off.</p>
      </div>
    </section>

    <HomeDeploy />

    <section class="section">
      <div class="container faq">
        <div>
          <p class="eyebrow">Questions</p>
          <h2 class="display-sm">Before we start</h2>
        </div>
        <div>
          <div v-for="(faq, i) in faqs" :key="faq.q" class="faq__item" :class="{ 'is-open': open === i }">
            <button type="button" class="faq__q" :aria-expanded="open === i" @click="open = open === i ? null : i">
              <span>{{ faq.q }}</span>
              <UiIcon :name="open === i ? 'minus' : 'plus'" :size="18" />
            </button>
            <p v-show="open === i" class="faq__a body">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <HomeContact />
  </div>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.steps__item {
  display: grid;
  align-content: start;
  gap: 14px;
  padding: 28px 24px 32px;
}

.steps__n {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--copper-deep);
}

.guarantee {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(63, 155, 106, 0.1);
  border: 1px solid rgba(63, 155, 106, 0.22);
  font-size: 14.5px;
  font-weight: 500;
  color: #1f6b43;
}

.faq {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 48px;
}

.faq__item {
  border-top: 1px solid var(--line-2);
}

.faq__item:last-child {
  border-bottom: 1px solid var(--line-2);
}

.faq__q {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.faq__a {
  padding-bottom: 20px;
}

@media (max-width: 900px) {
  .steps,
  .faq {
    grid-template-columns: 1fr;
  }
}
</style>
