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

interface Shot {
  key: string
  file: string
  w: number
  h: number
  smallW: number
  alt: string
  caption: string
  author: string
  source: string
  license: string
  licenseUrl: string
}

const hero: Shot = {
  key: 'skyline',
  file: 'shenzhen-futian-cbd',
  w: 2400,
  h: 990,
  smallW: 1200,
  alt: 'Futian CBD skyline in Shenzhen with the Ping An Finance Centre rising above the Civic Centre, seen from Lianhuashan Park',
  caption: 'Futian CBD · Ping An Finance Centre',
  author: 'Pathfinbird',
  source: 'https://commons.wikimedia.org/wiki/File:Civic_Centre_and_Futian_CBD,_Shenzhen_-_20251227,_views_from_Lianhuashan_Park.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
}

const shots: Shot[] = [
  {
    key: 'market',
    file: 'huaqiang-electronics-world',
    w: 1400,
    h: 966,
    smallW: 800,
    alt: 'Multi-storey atrium of Huaqiang Electronics World in Huaqiangbei, lined with electronics stalls and screens',
    caption: 'Huaqiangbei · Huaqiang Electronics World',
    author: 'BAIEDEIN iwm Twoiammx',
    source: 'https://commons.wikimedia.org/wiki/File:SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_%E7%A6%8F%E7%94%B0_Futian_%E8%8F%AF%E5%BC%B7%E5%8C%97_Huaqiang_North_%E8%8F%AF%E5%BC%B7%E9%9B%BB%E5%AD%90%E4%B8%96%E7%95%8C_HuaQiang_Electronics_World_mall_February_2025_R12S_04.jpg',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    key: 'lab',
    file: 'humanoid-robotics-lab',
    w: 1080,
    h: 1382,
    smallW: 640,
    alt: 'Engineers at laptops programming a full-size humanoid robot suspended from a safety gantry',
    caption: 'Robotics lab · humanoid bring-up',
    author: 'ZhanatKappassov',
    source: 'https://commons.wikimedia.org/wiki/File:Humanoid_robot_is_being_programmed.jpg',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    key: 'factory',
    file: 'factory-floor',
    w: 1600,
    h: 1200,
    smallW: 800,
    alt: 'Bright, modern automated production hall with machines in rows and workers walking between lines',
    caption: 'Factory floor · automated lines',
    author: 'Catgirlmutant',
    source: 'https://unsplash.com/photos/a-factory-filled-with-lots-of-machines-and-equipment-jADekDuAPSA',
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
  },
  {
    key: 'robots',
    file: 'unitree-g1-go2',
    w: 1600,
    h: 986,
    smallW: 800,
    alt: 'Unitree G1 humanoid robot and Go2 robot dog on a lit exhibition stage',
    caption: 'Unitree G1 humanoid · Go2 quadruped',
    author: 'RuinDig/Yuki Uchida',
    source: 'https://commons.wikimedia.org/wiki/File:Japan-Mobility-Show-2025-RuinDig_0564.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    key: 'drones',
    file: 'dji-store-huaqiangbei',
    w: 1400,
    h: 1125,
    smallW: 720,
    alt: 'DJI drone store at night on Huaqiang North Road, Shenzhen',
    caption: 'DJI · Huaqiang North Road',
    author: 'Elaodou Anudyem Lukas',
    source: 'https://commons.wikimedia.org/wiki/File:SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_%E7%A6%8F%E7%94%B0_Futian_%E8%8F%AF%E5%BC%B7%E5%8C%97%E8%B7%AF_Huaqiang_North_Road_shop_DJI_Drone_store_night_February_2024_R12S_01.jpg',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
]

const credits = [hero, ...shots]
const imgSrc = (s: Shot) => `/images/expedition/${s.file}.webp`
const imgSrcset = (s: Shot) =>
  `/images/expedition/${s.file}-${s.smallW}.webp ${s.smallW}w, /images/expedition/${s.file}.webp ${s.w}w`
const tileSizes: Record<string, string> = {
  market: '(min-width: 1320px) 720px, (min-width: 900px) 58vw, 100vw',
  lab: '(min-width: 1320px) 510px, (min-width: 900px) 42vw, 50vw',
  factory: '(min-width: 1320px) 410px, (min-width: 900px) 34vw, 50vw',
  robots: '(min-width: 1320px) 510px, (min-width: 900px) 42vw, 100vw',
  drones: '(min-width: 1320px) 310px, (min-width: 900px) 26vw, 100vw',
}
const pad = (n: number) => String(n).padStart(2, '0')

const galleryEl = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  const root = galleryEl.value
  if (!root || !('IntersectionObserver' in window)) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  root.classList.add('is-armed')
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        revealObserver?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  )
  root.querySelectorAll('[data-reveal]').forEach((el) => revealObserver?.observe(el))
})

onBeforeUnmount(() => revealObserver?.disconnect())
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
    </div>

    <section ref="galleryEl" class="xg" aria-labelledby="xg-title">
      <header class="xg__head" data-reveal>
        <p class="xg__kicker">What we do</p>
        <h2 id="xg-title" class="xg__strip">
          <span>Factory visits</span><span class="xg__dot" aria-hidden="true">·</span><span>Supplier meetings</span><span class="xg__dot" aria-hidden="true">·</span><span>Robotics &amp; AI labs</span>
        </h2>
      </header>

      <figure class="xg__hero" data-reveal>
        <div class="xg__media">
          <img
            :src="imgSrc(hero)"
            :srcset="imgSrcset(hero)"
            sizes="(min-width: 1320px) 1240px, calc(100vw - 40px)"
            :width="hero.w"
            :height="hero.h"
            :alt="hero.alt"
            decoding="async"
          />
        </div>
        <figcaption class="xg__cap"><span class="xg__num">01</span>{{ hero.caption }}<span class="xg__where">Shenzhen, 2025</span></figcaption>
      </figure>

      <div class="xg__bento">
        <figure v-for="(shot, i) in shots" :key="shot.key" :class="['xg__tile', `xg__tile--${shot.key}`]" data-reveal>
          <div class="xg__media">
            <img
              :src="imgSrc(shot)"
              :srcset="imgSrcset(shot)"
              :sizes="tileSizes[shot.key]"
              :width="shot.w"
              :height="shot.h"
              :alt="shot.alt"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption class="xg__cap"><span class="xg__num">{{ pad(i + 2) }}</span>{{ shot.caption }}</figcaption>
        </figure>
      </div>

      <p class="xg__credits">
        Photos:
        <template v-for="(c, i) in credits" :key="c.key">
          <span class="xg__credit">{{ pad(i + 1) }} <a :href="c.source" target="_blank" rel="noopener">{{ c.author }}</a>, <a :href="c.licenseUrl" target="_blank" rel="noopener license">{{ c.license }}</a></span><template v-if="i < credits.length - 1"> · </template>
        </template>.
        Via Wikimedia Commons and Unsplash; cropped, resized and lightly colour-corrected.
      </p>
    </section>

    <footer class="expedition__footer">
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </footer>
  </div>
</template>

<style scoped>
.expedition {
  --x-alabaster: #f5f2eb;
  --x-copper: #c26a35;
  --x-ink: #0c0d0f;

  min-height: 100vh;
  background: var(--x-alabaster);
  display: flex;
  flex-direction: column;
  align-items: center;
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

.xg {
  width: 100%;
  max-width: 1240px;
  margin: clamp(88px, 12vw, 160px) auto 0;
  display: grid;
  gap: clamp(16px, 1.6vw, 22px);
}

.xg__head {
  display: grid;
  gap: 18px;
  justify-items: center;
  text-align: center;
  margin-bottom: clamp(28px, 4vw, 52px);
}

.xg__kicker {
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--x-copper);
}

.xg__strip {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(30px, 4.4vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--x-ink);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 0.32em;
}

.xg__dot {
  color: var(--x-copper);
  font-style: normal;
}

.xg__media {
  position: relative;
  overflow: hidden;
  border-radius: clamp(14px, 1.4vw, 20px);
  background: #e9e3d6;
  box-shadow: 0 1px 0 rgba(12, 13, 15, 0.04), 0 24px 48px -32px rgba(12, 13, 15, 0.28);
}

.xg__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.001);
  transition: transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.xg figure:hover .xg__media img {
  transform: scale(1.025);
}

.xg__cap {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 12px 2px 0;
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: var(--text-2);
}

.xg__num {
  color: var(--x-copper);
  font-weight: 500;
}

.xg__where {
  margin-left: auto;
  color: var(--text-3);
}

.xg__hero .xg__media {
  aspect-ratio: 2400 / 990;
}

.xg__hero .xg__media img {
  object-position: 60% 50%;
}

.xg__bento {
  display: grid;
  gap: clamp(16px, 1.6vw, 22px);
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-areas:
    'market market market market market market market lab lab lab lab lab'
    'factory factory factory factory robots robots robots robots robots drones drones drones';
  grid-template-rows: clamp(380px, 40vw, 560px) clamp(280px, 28vw, 380px);
}

.xg__tile {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 0;
}

.xg__tile--market { grid-area: market; }
.xg__tile--lab { grid-area: lab; }
.xg__tile--factory { grid-area: factory; }
.xg__tile--robots { grid-area: robots; }
.xg__tile--drones { grid-area: drones; }

.xg__tile--lab img { object-position: 60% 40%; }
.xg__tile--robots img { object-position: 32% 60%; }
.xg__tile--drones img { object-position: 50% 45%; }

.xg__credits {
  max-width: 880px;
  margin: clamp(20px, 3vw, 36px) auto 0;
  text-align: center;
  font-size: 11px;
  line-height: 1.7;
  color: var(--text-3);
}

.xg__credits a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid var(--line-2);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.xg__credits a:hover {
  color: var(--x-ink);
  border-color: var(--line-3);
}

.xg__credit {
  white-space: nowrap;
}

.xg.is-armed [data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.xg.is-armed [data-reveal].is-in {
  opacity: 1;
  transform: none;
}

.xg.is-armed .xg__tile:nth-child(2) { transition-delay: 0.08s; }
.xg.is-armed .xg__tile:nth-child(4) { transition-delay: 0.08s; }
.xg.is-armed .xg__tile:nth-child(5) { transition-delay: 0.16s; }

@media (max-width: 899px) {
  .xg__bento {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'market market'
      'lab factory'
      'robots robots'
      'drones drones';
    grid-template-rows: none;
  }

  .xg__tile {
    grid-template-rows: auto auto;
  }

  .xg__tile--market .xg__media,
  .xg__tile--drones .xg__media { aspect-ratio: 4 / 3; }
  .xg__tile--lab .xg__media,
  .xg__tile--factory .xg__media { aspect-ratio: 3 / 4; }
  .xg__tile--robots .xg__media { aspect-ratio: 16 / 10; }
  .xg__tile--factory img { object-position: 42% 50%; }

  .xg__hero .xg__media {
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 640px) {
  .xg__strip {
    flex-direction: column;
    align-items: center;
    row-gap: 2px;
  }

  .xg__dot {
    display: none;
  }

  .xg__cap {
    font-size: 10.5px;
    gap: 8px;
  }

  .xg__where {
    display: none;
  }

  .xg__credit {
    white-space: normal;
  }
}

.expedition__footer {
  font-size: 14px;
  color: var(--text-3);
  margin-top: clamp(56px, 8vw, 96px);
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
</style>
