<script setup lang="ts">
const text =
  'Demos are easy. Production is where enterprise AI succeeds or quietly dies: in the scanned PDF with a coffee stain, the regulator’s audit request, the legacy ERP without an API, the edge case at 3 a.m. We are engineers who move into that reality with you. Forward-deployed, evaluated against your own data, governed by guardrails and audit trails, and handed over as code you own.'

const emphasis = new Set(['Production', 'forward-deployed,', 'Forward-deployed,', 'own.'])
const words = text.split(' ')

const paragraph = ref<HTMLElement | null>(null)
const progress = ref(1)

let raf = 0
const measure = () => {
  raf = 0
  const el = paragraph.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const vh = window.innerHeight
  const startY = vh * 0.88
  const endY = vh * 0.32
  const p = (startY - r.top) / (startY - endY + r.height * 0.75)
  progress.value = Math.min(1, Math.max(0, p))
}
const schedule = () => {
  if (!raf) raf = requestAnimationFrame(measure)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  measure()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (raf) cancelAnimationFrame(raf)
})

const principles = [
  {
    n: '01',
    title: 'Your data, not a demo dataset',
    body: 'We prototype on your real documents and systems from week one, so accuracy is measured rather than promised.',
  },
  {
    n: '02',
    title: 'Evaluated, not vibe-checked',
    body: 'Every system ships with a golden dataset, regression evaluations and human review wherever the risk demands it.',
  },
  {
    n: '03',
    title: 'Owned by you',
    body: 'Code, prompts, evaluation suites and infrastructure-as-code transfer to your team. No lock-in, no black boxes.',
  },
]
</script>

<template>
  <section class="section manifesto" aria-labelledby="manifesto-title">
    <div class="container">
      <div class="manifesto__head">
        <p class="eyebrow">Why Allometrik</p>
        <h2 id="manifesto-title" class="display-lg manifesto__title" v-reveal>
          The difference between an AI demo and a system that <span class="accent">runs the business.</span>
        </h2>
      </div>

      <p
        ref="paragraph"
        class="manifesto__lit"
        :style="{ '--p': progress, '--n': words.length }"
      >
        <span
          v-for="(word, i) in words"
          :key="i"
          class="manifesto__word"
          :class="{ 'manifesto__word--em': emphasis.has(word) }"
          :style="{ '--i': i }"
        >{{ word }} </span>
      </p>

      <ol class="manifesto__principles" role="list">
        <li v-for="(p, i) in principles" :key="p.n" v-reveal="i * 90" class="manifesto__principle">
          <span class="manifesto__n mono">{{ p.n }}</span>
          <h3 class="title">{{ p.title }}</h3>
          <p class="body">{{ p.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.manifesto__head {
  display: grid;
  gap: 22px;
  max-width: 980px;
}

.manifesto__title {
  max-width: 17ch;
}

.manifesto__lit {
  margin-top: clamp(48px, 6vw, 80px);
  max-width: 1080px;
  margin-left: auto;
  font-size: clamp(24px, 2.85vw, 40px);
  line-height: 1.32;
  font-weight: 450;
  letter-spacing: -0.03em;
  color: var(--ink);
  text-wrap: pretty;
}

.manifesto__word {
  opacity: clamp(0.14, calc((var(--p) * (var(--n) + 6) - var(--i)) / 6), 1);
}

.manifesto__word--em {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--copper-deep);
}

.manifesto__principles {
  margin-top: clamp(56px, 7vw, 96px);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--line-2);
}

.manifesto__principle {
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 28px 32px 8px 0;
}

.manifesto__principle + .manifesto__principle {
  padding-left: 32px;
  border-left: 1px solid var(--line);
}

.manifesto__n {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--copper-deep);
}

@media (max-width: 860px) {
  .manifesto__principles {
    grid-template-columns: 1fr;
  }

  .manifesto__principle,
  .manifesto__principle + .manifesto__principle {
    padding: 24px 0;
    border-left: 0;
  }

  .manifesto__principle + .manifesto__principle {
    border-top: 1px solid var(--line);
  }
}
</style>
