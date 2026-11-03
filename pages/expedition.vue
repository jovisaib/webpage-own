<script setup lang="ts">
import { site } from '~/data/site'

const EXPEDITION_DATES = 'March 2027'

usePageSeo({
  title: 'Shenzhen Expedition by Allometrik - Hardware, robotics, AI supply chain',
  description:
    'Small group expeditions to Shenzhen factories, electronics markets, and China\'s hardware ecosystem. Download our latest field notes.',
})

const email = ref('')
const name = ref('')
const loading = ref(false)
const submitted = ref(false)
const error = ref('')
const honeypot = ref('')

async function handleSubmit() {
  if (honeypot.value) return
  if (!email.value) {
    error.value = 'Email is required'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const res = await $fetch('/api/expedition-subscribe', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value || undefined,
      },
    })

    if (res.success) {
      submitted.value = true
    } else {
      error.value = res.message || 'Something went wrong'
    }
  } catch (e: any) {
    error.value = e.data?.message || e.message || 'Failed to subscribe. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="expedition">
    <div class="expedition__container">
      <NuxtLink to="/" class="expedition__logo" aria-label="Allometrik home">
        <BrandLogo variant="light" :size="32" />
      </NuxtLink>

      <main class="expedition__main">
        <div v-if="!submitted" class="expedition__content">
          <h1 class="expedition__headline">
            <span class="expedition__kicker">Shenzhen Expedition by Allometrik</span>
            <span class="expedition__title">Hardware, robotics, AI.<br />Direct from the source.</span>
          </h1>

          <p class="expedition__lede">Get our latest field notes from Shenzhen.</p>

          <p class="expedition__about">
            A week on the ground in Shenzhen: factories, hardware and robotics makers, suppliers and the AI ecosystem. Small group, curated visits, direct access.
          </p>

          <form class="expedition__form" @submit.prevent="handleSubmit">
            <label for="expedition-email" class="sr-only">Email address</label>
            <input
              id="expedition-email"
              v-model="email"
              type="email"
              placeholder="Your email"
              required
              class="expedition__input"
              :disabled="loading"
            />
            <label for="expedition-name" class="sr-only">Name (optional)</label>
            <input
              id="expedition-name"
              v-model="name"
              type="text"
              placeholder="Name (optional)"
              class="expedition__input expedition__input--optional"
              :disabled="loading"
            />
            <input v-model="honeypot" type="text" class="expedition__hp" tabindex="-1" aria-hidden="true" />
            <button type="submit" class="expedition__button" :disabled="loading">
              {{ loading ? 'Sending...' : 'Get the guide' }}
            </button>
            <p v-if="error" class="expedition__error">{{ error }}</p>
            <p class="expedition__newsletter">You'll join our Shenzhen newsletter: field notes, supplier insights and expedition updates. Unsubscribe anytime.</p>
          </form>

          <p class="expedition__trip">Next expedition: {{ EXPEDITION_DATES }} · max 10 people.</p>
        </div>

        <div v-else class="expedition__success">
          <div class="expedition__success-icon">
            <UiIcon name="check" :size="28" :stroke="2" />
          </div>
          <h2 class="expedition__success-title">Check your inbox</h2>
          <p class="expedition__success-text">We've sent the guide to <strong>{{ email }}</strong></p>
          <p class="expedition__success-sub">If you don't see it, check spam. Questions? <a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
        </div>
      </main>

      <section class="expedition__gallery">
        <div class="expedition__gallery-header">
          <h3 class="expedition__gallery-title">Factory visits · Supplier meetings · Robotics & AI labs</h3>
        </div>
        
        <div class="expedition__gallery-grid">
          <div class="expedition__gallery-item">
            <img src="/images/expedition/shenzhen-night.webp" alt="Shenzhen skyline at night" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Shenzhen · the hardware capital</p>
          </div>
          
          <div class="expedition__gallery-item">
            <img src="/images/expedition/components.webp" alt="Electronics components" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Huaqiangbei · components in hours</p>
          </div>
          
          <div class="expedition__gallery-item">
            <img src="/images/expedition/electronics-factory.webp" alt="PCB and electronics factory line" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Factory floors · prototype to 10k units</p>
          </div>
          
          <div class="expedition__gallery-item">
            <img src="/images/expedition/robotics.webp" alt="Humanoid robot technology" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Robotics · humanoids to cobots</p>
          </div>
          
          <div class="expedition__gallery-item">
            <img src="/images/expedition/industrial-robot.webp" alt="Industrial robotic arm" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Automation · next-gen manufacturing</p>
          </div>
          
          <div class="expedition__gallery-item">
            <img src="/images/expedition/drones.webp" alt="Drones and hardware prototyping" class="expedition__gallery-img" loading="lazy" />
            <p class="expedition__gallery-caption">Hardware · rapid prototyping</p>
          </div>
        </div>
        
        <p class="expedition__gallery-credits">
          Images from Unsplash: Shenzhen © Miltiadis Fragkidis, Components © Harpal Singh, Factory © Alexandre Debiève, Robotics © Alex Knight & Possessed Photography, Hardware © Dose Media
        </p>
      </section>

      <footer class="expedition__footer">
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.expedition {
  min-height: 100vh;
  background: var(--canvas);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
}

.expedition__container {
  width: 100%;
  max-width: 540px;
  display: grid;
  gap: clamp(48px, 8vw, 72px);
  align-content: center;
  justify-items: center;
  min-height: 80vh;
}

.expedition__logo {
  opacity: 0.88;
  transition: opacity 0.25s ease;
}

.expedition__logo:hover {
  opacity: 1;
}

.expedition__main {
  width: 100%;
}

.expedition__content {
  display: grid;
  gap: 32px;
  justify-items: center;
  text-align: center;
}

.expedition__headline {
  display: grid;
  gap: 14px;
}

.expedition__kicker {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--copper-deep);
}

.expedition__title {
  font-size: clamp(32px, 5vw, 44px);
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -0.038em;
  color: var(--ink);
  font-family: var(--font-serif);
  font-style: italic;
}

.expedition__lede {
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-2);
  margin-top: -8px;
}

.expedition__about {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-3);
  max-width: 48ch;
  margin: 16px auto 0;
}

.expedition__form {
  width: 100%;
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.expedition__input {
  width: 100%;
  height: 52px;
  padding: 0 20px;
  border-radius: 14px;
  border: 1px solid var(--line-2);
  background: var(--paper);
  font-size: 16px;
  color: var(--ink);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.expedition__input::placeholder {
  color: var(--text-3);
}

.expedition__input:focus {
  outline: none;
  border-color: var(--copper);
  box-shadow: 0 0 0 3px rgba(200, 122, 75, 0.1);
}

.expedition__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.expedition__input--optional {
  height: 48px;
}

.expedition__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.expedition__button {
  width: 100%;
  height: 52px;
  padding: 0 24px;
  border-radius: 14px;
  background: var(--ink);
  color: var(--canvas);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08) inset, 0 8px 20px -10px rgba(17, 19, 24, 0.5);
}

.expedition__button:hover:not(:disabled) {
  background: #000;
}

.expedition__button:active:not(:disabled) {
  transform: translateY(1px);
}

.expedition__button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.expedition__error {
  font-size: 14px;
  color: #c5392a;
  margin-top: -2px;
}

.expedition__newsletter {
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--text-3);
  margin-top: -2px;
  max-width: 42ch;
  margin-left: auto;
  margin-right: auto;
}

.expedition__trip {
  font-size: 14px;
  color: var(--text-3);
  margin-top: 16px;
}

.expedition__success {
  display: grid;
  gap: 18px;
  justify-items: center;
  text-align: center;
  padding: 40px 0;
}

.expedition__success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(200, 122, 75, 0.1);
  color: var(--copper);
  display: grid;
  place-items: center;
}

.expedition__success-title {
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-top: 4px;
}

.expedition__success-text {
  font-size: 16px;
  color: var(--text-2);
  max-width: 42ch;
}

.expedition__success-text strong {
  color: var(--ink);
  font-weight: 500;
}

.expedition__success-sub {
  font-size: 14px;
  color: var(--text-3);
  margin-top: 8px;
}

.expedition__success-sub a {
  color: var(--copper);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.expedition__success-sub a:hover {
  border-color: var(--copper);
}

.expedition__footer {
  font-size: 14px;
  color: var(--text-3);
}

.expedition__footer a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.expedition__footer a:hover {
  color: var(--ink);
  border-color: var(--line-3);
}

@media (max-width: 640px) {
  .expedition {
    padding: 24px 16px;
  }

  .expedition__container {
    gap: 40px;
  }

  .expedition__title {
    font-size: 32px;
  }
}

.expedition__gallery {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(64px, 10vw, 96px) 20px clamp(48px, 8vw, 72px);
}

.expedition__gallery-header {
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 56px);
}

.expedition__gallery-title {
  font-family: var(--font-mono);
  font-size: clamp(14px, 2vw, 15px);
  font-weight: 400;
  color: var(--copper);
  letter-spacing: 0.02em;
  text-transform: none;
}

.expedition__gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(24px, 4vw, 32px);
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .expedition__gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.expedition__gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 0.6s ease forwards;
}

.expedition__gallery-item:nth-child(1) { animation-delay: 0.1s; }
.expedition__gallery-item:nth-child(2) { animation-delay: 0.2s; }
.expedition__gallery-item:nth-child(3) { animation-delay: 0.3s; }
.expedition__gallery-item:nth-child(4) { animation-delay: 0.4s; }
.expedition__gallery-item:nth-child(5) { animation-delay: 0.5s; }
.expedition__gallery-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.expedition__gallery-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.expedition__gallery-item:hover .expedition__gallery-img {
  transform: scale(1.03);
  opacity: 0.9;
}

.expedition__gallery-caption {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-2);
  margin-top: 10px;
  letter-spacing: 0.01em;
}

.expedition__gallery-credits {
  font-size: 11px;
  color: var(--text-3);
  text-align: center;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid var(--line-2);
}
</style>
