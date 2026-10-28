<script setup lang="ts">
import { site } from '~/data/site'

usePageSeo({
  title: 'About — Allometrik',
  description:
    'Allometrik is a forward-deployed AI engineering firm based in Dubai and Europe. We build production AI systems for regulated enterprises and transfer the code, evaluations and ownership to the client.',
})

const principles = [
  {
    title: 'Engineers, not a platform licence',
    body: 'We embed with the operators who run the process. The system is specified by your data, not a slide about industry best practice.',
  },
  {
    title: 'Evaluated before it is impressive',
    body: 'A golden dataset you sign off defines accuracy. Every change is measured. Production hardening starts on day one.',
  },
  {
    title: 'You own what you pay for',
    body: 'Source, prompts, evaluations and infrastructure-as-code transfer to your team. Model-agnostic by design. No lock-in.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      lede="Allometrik Consulting FZCO is a forward-deployed AI engineering firm. We build production systems for regulated enterprises — and we stay until those systems run the business, not a demo."
    >
      Production AI, <span class="accent">from the inside.</span>
    </PageHero>

    <section class="section section--flush-top">
      <div class="container story">
        <p class="display-sm serif-line">
          The difference between an AI demo and a system that runs the business is not a bigger model. It is evaluations, guardrails, integrations, ownership — and engineers who will sit with the process until it is true.
        </p>
        <div class="story__copy">
          <p class="body-lg">
            Allometrik was founded by Jose Vicente Sáez Ibáñez to do the unglamorous work most AI programmes skip: putting systems into production against real documents, real regulators and real legacy stacks.
          </p>
          <p class="body-lg">
            We operate from Dubai, with European engineering and delivery from Spain. Clients include Fortune 500 financial institutions, a top-10 EU law firm, public-sector bodies and academies across more than ten countries.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--stone">
      <div class="container">
        <p class="eyebrow">Philosophy</p>
        <h2 class="display-sm">How we work</h2>
        <ul class="principles" role="list">
          <li v-for="p in principles" :key="p.title" class="card principles__item">
            <h3 class="title">{{ p.title }}</h3>
            <p class="body">{{ p.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container lead">
        <div class="lead__copy">
          <p class="eyebrow">Leadership</p>
          <h2 class="display-sm">Jose Vicente Sáez Ibáñez</h2>
          <p class="lead__role">Founder &amp; CTO</p>
          <p class="body-lg">
            Jose Vicente leads architecture and production sign-off across Allometrik engagements. He directs the AI for Business and Innovation master’s programme at Nuclio Digital School and has trained 500+ engineers and executives — including cohorts at Saudi Digital Academy, Ironhack and corporate academies — in production AI agents and LLM engineering.
          </p>
          <p class="body-lg">
            Before Allometrik he built document intelligence, RAG and agent systems for financial services, legal and public-sector clients, and published technical work with Modal, Timescale and Instructor on embeddings, hybrid retrieval and structured outputs.
          </p>
          <div class="lead__links">
            <a :href="site.socials.linkedin" target="_blank" rel="noopener noreferrer" class="text-link">LinkedIn <UiIcon name="arrow-up-right" :size="14" /></a>
            <a :href="site.socials.x" target="_blank" rel="noopener noreferrer" class="text-link">X <UiIcon name="arrow-up-right" :size="14" /></a>
          </div>
        </div>
        <figure class="lead__photo">
          <img src="/images/team/jose-vicente-saez.webp" alt="Jose Vicente Sáez Ibáñez, Founder and CTO of Allometrik" width="460" height="460" />
          <figcaption>Jose Vicente Sáez Ibáñez · Dubai &amp; Europe</figcaption>
        </figure>
      </div>
    </section>

    <section class="section section--dark" data-nav-theme="dark">
      <div class="container loc">
        <p class="eyebrow">Presence</p>
        <h2 class="display-sm">Dubai and Europe, on the ground</h2>
        <ul class="loc__grid" role="list">
          <li v-for="loc in site.locations" :key="loc.city">
            <p class="loc__city">{{ loc.city }}</p>
            <p class="loc__region">{{ loc.region }}</p>
            <p class="body">{{ loc.role }}</p>
          </li>
        </ul>
        <p class="loc__note">Forward-deployed means we travel. Most production systems are built in the client’s offices, VPC and time zone — not from a ticket queue.</p>
      </div>
    </section>

    <PageCta title="Work with the team" lede="A 30-minute call with a senior engineer. No deck, no platform pitch." />
  </div>
</template>

<style scoped>
.story {
  display: grid;
  gap: 36px;
}

.serif-line {
  max-width: 22ch;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.story__copy {
  display: grid;
  gap: 16px;
  max-width: 720px;
}

.principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.principles__item {
  padding: 28px 24px;
  display: grid;
  gap: 12px;
}

.lead {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 48px;
  align-items: start;
}

.lead__role {
  margin: 8px 0 18px;
  color: var(--copper-deep);
  font-weight: 500;
}

.lead .body-lg + .body-lg {
  margin-top: 14px;
}

.lead__links {
  display: flex;
  gap: 20px;
  margin-top: 22px;
}

.lead__photo {
  margin: 0;
}

.lead__photo img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  object-fit: cover;
  aspect-ratio: 4 / 5;
  object-position: 50% 20%;
}

.lead__photo figcaption {
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--text-3);
}

.loc h2 {
  margin: 14px 0 32px;
  max-width: 16ch;
}

.loc__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.loc__city {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 500;
  letter-spacing: -0.04em;
}

.loc__region {
  margin: 6px 0 10px;
  color: var(--copper-2);
  font-weight: 500;
}

.loc .body {
  color: var(--on-dark-2);
}

.loc__note {
  margin-top: 36px;
  max-width: 640px;
  color: var(--on-dark-3);
  font-size: 15px;
}

@media (max-width: 860px) {
  .principles,
  .lead,
  .loc__grid {
    grid-template-columns: 1fr;
  }
}
</style>
