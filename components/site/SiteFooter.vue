<script setup lang="ts">
import { wordmark } from '~/data/brand'
import { aiSummaryLinks, footerColumns, site } from '~/data/site'
</script>

<template>
  <footer class="footer" data-nav-theme="dark">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink to="/" aria-label="Allometrik home" class="footer__logo">
            <BrandLogo variant="dark" :size="34" />
          </NuxtLink>
          <p class="footer__pitch">
            Production AI systems for regulated enterprises. Forward-deployed engineers, measurable outcomes, and code you own.
          </p>
          <ul class="footer__locations" role="list">
            <li v-for="loc in site.locations" :key="loc.city">
              <span class="footer__city">{{ loc.city }}</span>
              <span class="footer__region">{{ loc.region }} · {{ loc.role }}</span>
            </li>
          </ul>
        </div>

        <div class="footer__cols">
          <div v-for="col in footerColumns" :key="col.title" class="footer__col">
            <h2 class="footer__heading">{{ col.title }}</h2>
            <ul role="list">
              <li v-for="link in col.links" :key="link.to">
                <NuxtLink :to="link.to" class="footer__link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h2 class="footer__heading">Contact</h2>
            <ul role="list">
              <li>
                <a :href="`mailto:${site.email}`" class="footer__link">{{ site.email }}</a>
              </li>
              <li>
                <a :href="site.calendly" target="_blank" rel="noopener noreferrer" class="footer__link">Book a consultation ↗</a>
              </li>
              <li>
                <a :href="site.socials.linkedin" target="_blank" rel="noopener noreferrer" class="footer__link">LinkedIn ↗</a>
              </li>
              <li>
                <a :href="site.socials.x" target="_blank" rel="noopener noreferrer" class="footer__link">X / Twitter ↗</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__ai">
        <div class="footer__ai-copy">
          <UiIcon name="spark" :size="18" />
          <p><strong>Request an AI summary of Allometrik</strong><span> Ask your assistant to brief you on who we are and what we have shipped.</span></p>
        </div>
        <div class="footer__ai-links">
          <a
            v-for="ai in aiSummaryLinks"
            :key="ai.name"
            :href="ai.href"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__ai-link"
            :aria-label="`Ask ${ai.name} to summarise Allometrik`"
          >
            <UiIcon :name="ai.icon" :size="15" />
            <span>{{ ai.name }}</span>
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>{{ site.copyright }}. All rights reserved.</p>
        <nav aria-label="Legal" class="footer__legal">
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
        </nav>
      </div>
    </div>

    <div class="footer__word" aria-hidden="true">
      <svg :viewBox="wordmark.viewBox" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer-word-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f4f1ea" stop-opacity="0.13" />
            <stop offset="1" stop-color="#f4f1ea" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path :d="wordmark.d" fill="url(#footer-word-fade)" />
      </svg>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background: var(--obsidian);
  color: var(--on-dark);
  padding-top: clamp(72px, 9vw, 112px);
}

.footer__top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
  gap: 56px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--line-dark);
}

.footer__logo {
  display: inline-flex;
}

.footer__pitch {
  margin-top: 22px;
  max-width: 380px;
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--on-dark-2);
}

.footer__locations {
  margin-top: 28px;
  display: grid;
  gap: 12px;
}

.footer__locations li {
  display: grid;
  gap: 2px;
}

.footer__city {
  font-weight: 500;
  font-size: 15px;
}

.footer__region {
  font-size: 13.5px;
  color: var(--on-dark-3);
}

.footer__cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer__heading {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--on-dark-3);
  margin-bottom: 18px;
}

.footer__col ul {
  display: grid;
  gap: 11px;
}

.footer__link {
  font-size: 15px;
  color: var(--on-dark-2);
  transition: color 0.2s ease;
  overflow-wrap: anywhere;
}

.footer__link:hover {
  color: #fff;
}

.footer__ai {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 18px 18px 18px 22px;
  border-radius: 18px;
  border: 1px solid var(--line-dark);
  background: linear-gradient(90deg, rgba(200, 122, 75, 0.1), rgba(255, 255, 255, 0.02));
}

.footer__ai-copy {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--copper-2);
}

.footer__ai-copy p {
  font-size: 15px;
  color: var(--on-dark);
}

.footer__ai-copy span {
  color: var(--on-dark-3);
}

.footer__ai-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer__ai-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--line-dark-2);
  background: rgba(255, 255, 255, 0.04);
  font-size: 14px;
  font-weight: 500;
  color: var(--on-dark);
  transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.3s var(--ease-out);
}

.footer__ai-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 28px 0 8px;
  font-size: 13.5px;
  color: var(--on-dark-3);
}

.footer__legal {
  display: flex;
  gap: 22px;
}

.footer__legal a:hover {
  color: var(--on-dark);
}

.footer__word {
  width: min(1500px, 100%);
  margin: 8px auto 0;
  padding-inline: var(--gutter);
  height: clamp(70px, 15vw, 230px);
  overflow: hidden;
}

.footer__word svg {
  width: 100%;
  height: auto;
}

@media (max-width: 960px) {
  .footer__top {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .footer__cols {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
