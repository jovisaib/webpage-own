<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="hero" data-nav-theme="dark" aria-labelledby="hero-title">
    <div class="hero__frame grain">
      <div class="hero__atmosphere" aria-hidden="true">
        <HomeHeroCanvas class="hero__canvas" />
        <div class="hero__veil" />
      </div>

      <div class="hero__content">
        <h1 id="hero-title" class="hero__title display-xl">
          AI systems that<br />
          run the business
        </h1>
        <p class="hero__sub">
          Production agents, document intelligence and compliance automation — engineered inside your perimeter, live in weeks.
        </p>
        <div class="hero__ctas">
          <UiButton :href="site.calendly" variant="halo" size="lg" icon="up">Book a consultation</UiButton>
          <UiButton to="/case-studies" variant="glass" size="lg">Explore client stories</UiButton>
        </div>
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
  background: #07080a;
  color: var(--on-dark);
}

.hero__atmosphere {
  position: absolute;
  inset: 0;
  z-index: -1;
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
    radial-gradient(46% 36% at 50% 46%, rgba(7, 8, 10, 0.42), transparent 72%),
    radial-gradient(120% 100% at 50% 50%, transparent 42%, rgba(7, 8, 10, 0.7) 100%);
}

.hero__content {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 28px;
  padding: 88px var(--gutter) 96px;
  max-width: 1080px;
}

.hero__title {
  color: #f7f4ee;
  text-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}

.hero__sub {
  max-width: 560px;
  font-size: clamp(17px, 1.55vw, 21px);
  line-height: 1.55;
  letter-spacing: -0.014em;
  color: rgba(230, 225, 218, 0.78);
  text-wrap: balance;
}

.hero__ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6px;
}

@media (max-width: 760px) {
  .hero__frame {
    border-radius: 22px;
    min-height: 600px;
  }

  .hero__content {
    padding-top: 96px;
    padding-bottom: 88px;
    gap: 22px;
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
