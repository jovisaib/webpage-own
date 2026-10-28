<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="hero" data-nav-theme="dark" aria-labelledby="hero-title">
    <div class="hero__frame grain">
      <div class="hero__atmosphere" aria-hidden="true">
        <div class="hero__lamp" />
        <div class="hero__cool" />
        <HomeHeroCanvas class="hero__canvas" />
        <div class="hero__veil" />
      </div>

      <div class="hero__content">
        <p class="hero__kicker">
          <span class="dot dot--live" />
          Forward-deployed AI engineering · Dubai &amp; Europe
        </p>
        <h1 id="hero-title" class="hero__title display-xl">
          AI systems that<br />
          run the business
        </h1>
        <p class="hero__sub">
          Production AI agents, document intelligence and compliance automation, engineered inside your perimeter and live in weeks.
        </p>
        <div class="hero__ctas">
          <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Book a consultation</UiButton>
          <UiButton to="/case-studies" variant="glass" size="lg">Explore client stories</UiButton>
        </div>
      </div>

      <div class="hero__foot">
        <p class="hero__trust">
          <UiIcon name="shield" :size="16" />
          Trusted by Fortune 500 companies &amp; top-10 EU law firms
        </p>
        <a href="#clients" class="hero__scroll" aria-label="Scroll to clients">
          <UiIcon name="chevron-down" :size="20" />
        </a>
        <p class="hero__badge">
          <span class="hero__badge-k">2–4 weeks</span>
          <span class="hero__badge-v">kickoff to production</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 10px;
  background: var(--canvas);
}

.hero__frame {
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  height: calc(100svh - 20px);
  min-height: 640px;
  max-height: 1080px;
  overflow: hidden;
  border-radius: 28px;
  background: radial-gradient(120% 90% at 50% 120%, #1b1612 0%, #0d0f15 55%, #090a0f 100%);
  color: var(--on-dark);
}

.hero__atmosphere {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__lamp {
  position: absolute;
  left: -12%;
  bottom: -30%;
  width: 70%;
  height: 90%;
  background: radial-gradient(closest-side, rgba(214, 132, 74, 0.38), rgba(160, 90, 48, 0.12) 55%, transparent 75%);
  filter: blur(10px);
  animation: lamp 14s var(--ease-in-out) infinite alternate;
}

.hero__cool {
  position: absolute;
  right: -10%;
  top: -25%;
  width: 60%;
  height: 80%;
  background: radial-gradient(closest-side, rgba(120, 128, 150, 0.22), transparent 70%);
}

.hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 42% at 50% 48%, rgba(9, 10, 15, 0.62), transparent 72%),
    radial-gradient(140% 100% at 50% 50%, transparent 55%, rgba(5, 6, 9, 0.75) 100%);
}

@keyframes lamp {
  from {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.85;
  }
  to {
    transform: translate3d(4%, -3%, 0) scale(1.06);
    opacity: 1;
  }
}

.hero__content {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 26px;
  padding: 120px var(--gutter) 140px;
  max-width: 1100px;
}

.hero__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 12px;
  border-radius: 999px;
  font-size: 13.5px;
  color: var(--on-dark-2);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.hero__title {
  color: #f7f4ee;
  text-shadow: 0 2px 40px rgba(0, 0, 0, 0.35);
}

.hero__sub {
  max-width: 620px;
  font-size: clamp(17px, 1.6vw, 21px);
  line-height: 1.55;
  letter-spacing: -0.012em;
  color: rgba(244, 241, 234, 0.8);
  text-wrap: balance;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}

.hero__foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 16px;
  padding: 0 24px 22px;
}

.hero__trust {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: var(--on-dark-3);
}

.hero__scroll {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--on-dark-2);
  animation: nudge 2.4s var(--ease-in-out) infinite;
}

.hero__scroll:hover {
  color: #fff;
}

@keyframes nudge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.hero__badge {
  justify-self: end;
  display: grid;
  gap: 2px;
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(17, 19, 24, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  text-align: left;
}

.hero__badge-k {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--copper-2);
}

.hero__badge-v {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--on-dark);
}

@media (max-width: 760px) {
  .hero__frame {
    border-radius: 22px;
    min-height: 600px;
  }

  .hero__content {
    padding-top: 110px;
    padding-bottom: 150px;
    gap: 22px;
  }

  .hero__foot {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .hero__scroll,
  .hero__badge {
    display: none;
  }

  .hero__ctas :deep(.btn) {
    width: 100%;
  }

  .hero__ctas {
    width: 100%;
    max-width: 360px;
    flex-direction: column;
  }
}
</style>
