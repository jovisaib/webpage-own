<script setup lang="ts">
import { site } from '~/data/site'

const EXPEDITION_DATES = 'March 2027'

usePageSeo({
  title: 'Shenzhen Expedition by Allometrik - Hardware, robotics, AI supply chain',
  description:
    `Small-group expedition to Shenzhen, ${EXPEDITION_DATES} (max 10): factories, electronics markets and robotics labs. Get our latest field notes.`,
  image: '/og/expedition.jpg',
  imageAlt: 'Shenzhen Expedition by Allometrik: Hardware, robotics, AI. Direct from the source. March 2027, max 10 people.',
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
  file: 'expedition-hero',
  w: 2400,
  h: 1440,
  smallW: 1200,
  alt: 'Futian CBD skyline in Shenzhen with the Ping An Finance Centre rising above the Civic Centre, seen from Lianhuashan Park',
  caption: 'Futian CBD · Ping An Finance Centre',
  author: 'Pathfinbird',
  source: 'https://commons.wikimedia.org/wiki/File:Civic_Centre_and_Futian_CBD,_Shenzhen_-_20251227,_views_from_Lianhuashan_Park.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
}

const lead: Shot = {
  key: 'market',
  file: 'huaqiang-atrium-wide',
  w: 2000,
  h: 840,
  smallW: 1000,
  alt: 'Multi-storey atrium of Huaqiang Electronics World in Huaqiangbei, lined with electronics stalls and screens',
  caption: 'Huaqiangbei · Huaqiang Electronics World',
  author: 'BAIEDEIN iwm Twoiammx',
  source: 'https://commons.wikimedia.org/wiki/File:SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_%E7%A6%8F%E7%94%B0_Futian_%E8%8F%AF%E5%BC%B7%E5%8C%97_Huaqiang_North_%E8%8F%AF%E5%BC%B7%E9%9B%BB%E5%AD%90%E4%B8%96%E7%95%8C_HuaQiang_Electronics_World_mall_February_2025_R12S_04.jpg',
  license: 'CC0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
}

const shots: Shot[] = [
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

const credits = [hero, lead, ...shots]
const imgSrc = (s: Shot) => `/images/expedition/${s.file}.webp`
const imgSrcset = (s: Shot) =>
  `/images/expedition/${s.file}-${s.smallW}.webp ${s.smallW}w, /images/expedition/${s.file}.webp ${s.w}w`
const tileSizes: Record<string, string> = {
  lab: '(min-width: 1320px) 510px, (min-width: 900px) 42vw, 50vw',
  factory: '(min-width: 1320px) 720px, (min-width: 900px) 58vw, 50vw',
  robots: '(min-width: 1320px) 720px, (min-width: 900px) 58vw, 100vw',
  drones: '(min-width: 1320px) 510px, (min-width: 900px) 42vw, 100vw',
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
    <section class="xh" aria-labelledby="xh-title">
      <div class="xh__visual" aria-hidden="true">
        <img
          :src="imgSrc(hero)"
          :srcset="imgSrcset(hero)"
          sizes="(min-width: 1440px) 1400px, 100vw"
          :width="hero.w"
          :height="hero.h"
          alt=""
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div class="xh__copy">
        <p class="xh__eyebrow">Shenzhen Expedition by Allometrik</p>
        <h1 id="xh-title" class="xh__title">Hardware, robotics, AI.<br />Direct from the source.</h1>
        <p class="xh__lede">Field notes from the factories, markets and robotics labs of Shenzhen.</p>
        <p class="xh__badge">Next expedition: {{ EXPEDITION_DATES }} · max 10 people</p>
      </div>

      <div class="xh__panel">
        <form v-if="!submitted" class="xh__form" @submit.prevent="handleSubmit">
          <p class="xh__form-title">Get our latest field notes</p>
          <label for="expedition-email" class="sr-only">Email address</label>
          <input
            id="expedition-email"
            v-model="email"
            type="email"
            placeholder="Your email"
            autocomplete="email"
            required
            class="xh__input"
            :disabled="loading"
          />
          <label for="expedition-name" class="sr-only">Name (optional)</label>
          <input
            id="expedition-name"
            v-model="name"
            type="text"
            placeholder="Name (optional)"
            autocomplete="name"
            class="xh__input"
            :disabled="loading"
          />
          <input v-model="honeypot" type="text" class="xh__hp" tabindex="-1" aria-hidden="true" />
          <button type="submit" class="xh__button" :disabled="loading">
            {{ loading ? 'Sending...' : 'Get the guide' }}
          </button>
          <p v-if="error" class="xh__error" role="alert">{{ error }}</p>
          <p class="xh__note">You'll join our Shenzhen newsletter: field notes, supplier insights and expedition updates. Unsubscribe anytime.</p>
        </form>

        <div v-else class="xh__success" role="status">
          <div class="xh__success-icon">
            <UiIcon name="check" :size="24" :stroke="2" />
          </div>
          <p class="xh__success-title">Check your inbox</p>
          <p class="xh__success-text">We've sent the guide to <strong>{{ email }}</strong></p>
          <p class="xh__success-sub">If you don't see it, check spam. Questions? <a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
        </div>
      </div>
    </section>

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
            :src="imgSrc(lead)"
            :srcset="imgSrcset(lead)"
            sizes="(min-width: 1320px) 1240px, calc(100vw - 40px)"
            :width="lead.w"
            :height="lead.h"
            :alt="lead.alt"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="xg__cap"><span class="xg__num">01</span>{{ lead.caption }}<span class="xg__where">Shenzhen, 2025</span></figcaption>
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
          <span class="xg__credit">{{ i === 0 ? 'Hero' : pad(i) }} <a :href="c.source" target="_blank" rel="noopener">{{ c.author }}</a>, <a :href="c.licenseUrl" target="_blank" rel="noopener license">{{ c.license }}</a></span><template v-if="i < credits.length - 1"> · </template>
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
  --x-copper-light: #eaa77c;
  --x-ink: #0c0d0f;
  --x-nav-clear: calc(var(--nav-h) + 22px);

  min-height: 100vh;
  background: var(--x-alabaster);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--x-nav-clear) 20px 32px;
}

.xh {
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 1400px;
  min-height: clamp(600px, calc(100svh - var(--x-nav-clear) - 104px), 820px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 392px);
  align-items: end;
  gap: clamp(32px, 4vw, 64px);
  padding: clamp(32px, 4.2vw, 60px);
  border-radius: 28px;
  overflow: hidden;
  color: var(--x-alabaster);
  box-shadow: 0 40px 80px -48px rgba(12, 13, 15, 0.55);
}

.xh__visual {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #2a2c30;
}

.xh__visual img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 62% 62%;
}

.xh__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(12, 13, 15, 0.08) 0%, rgba(12, 13, 15, 0.22) 38%, rgba(12, 13, 15, 0.86) 100%),
    linear-gradient(90deg, rgba(12, 13, 15, 0.5) 0%, rgba(12, 13, 15, 0) 62%);
}

.xh__copy {
  display: grid;
  justify-items: start;
  gap: 18px;
  max-width: 720px;
}

.xh__eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--x-copper-light);
}

.xh__title {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(46px, 6.4vw, 96px);
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--x-alabaster);
  text-wrap: balance;
}

.xh__lede {
  max-width: 44ch;
  font-size: clamp(16px, 1.25vw, 18px);
  line-height: 1.55;
  color: rgba(245, 242, 235, 0.8);
}

.xh__badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 6px;
  padding: 7px 13px 7px 11px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #f6c7a5;
  background: rgba(194, 106, 53, 0.24);
  border: 1px solid rgba(194, 106, 53, 0.7);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.xh__badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--x-copper);
  box-shadow: 0 0 0 3px rgba(194, 106, 53, 0.28);
}

.xh__panel {
  padding: 22px;
  border-radius: 22px;
  background: rgba(245, 242, 235, 0.95);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 30px 60px -30px rgba(12, 13, 15, 0.6);
  color: var(--x-ink);
}

.xh__form {
  display: grid;
  gap: 10px;
}

.xh__form-title {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}

.xh__input {
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid var(--line-2);
  background: #fff;
  font-size: 16px;
  color: var(--x-ink);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.xh__input::placeholder {
  color: var(--text-3);
}

.xh__input:focus {
  outline: none;
  border-color: var(--x-copper);
  box-shadow: 0 0 0 3px rgba(194, 106, 53, 0.14);
}

.xh__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.xh__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.xh__button {
  width: 100%;
  height: 50px;
  margin-top: 2px;
  border: none;
  border-radius: 12px;
  background: var(--x-ink);
  color: var(--x-alabaster);
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08) inset, 0 8px 20px -10px rgba(12, 13, 15, 0.5);
}

.xh__button:hover:not(:disabled) {
  background: #000;
}

.xh__button:active:not(:disabled) {
  transform: translateY(1px);
}

.xh__button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.xh__error {
  font-size: 13.5px;
  color: #c5392a;
}

.xh__note {
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-3);
}

.xh__success {
  display: grid;
  gap: 10px;
  justify-items: start;
}

.xh__success-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(194, 106, 53, 0.12);
  color: var(--x-copper);
}

.xh__success-title {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.xh__success-text {
  font-size: 15px;
  color: var(--text-2);
}

.xh__success-text strong {
  color: var(--x-ink);
  font-weight: 500;
}

.xh__success-sub {
  font-size: 13px;
  color: var(--text-3);
}

.xh__success-sub a {
  color: var(--x-copper);
  text-decoration: none;
}

@media (max-width: 860px) {
  .expedition {
    --x-nav-clear: calc(var(--nav-h) + 18px);
    padding: var(--x-nav-clear) 12px 24px;
  }

  .xh {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
    gap: 0;
    padding: 0;
    border-radius: 0;
    overflow: visible;
    box-shadow: none;
  }

  .xh__visual {
    position: relative;
    inset: auto;
    z-index: 0;
    grid-area: 1 / 1;
    align-self: stretch;
    border-radius: 24px;
    overflow: hidden;
  }

  .xh__visual img {
    object-position: 65% 60%;
  }

  .xh__visual::after {
    background: linear-gradient(180deg, rgba(12, 13, 15, 0.05) 0%, rgba(12, 13, 15, 0.3) 40%, rgba(12, 13, 15, 0.9) 100%);
  }

  .xh__copy {
    grid-area: 1 / 1;
    z-index: 1;
    align-content: end;
    min-height: clamp(360px, 45svh, 440px);
    padding: 24px 18px 50px;
    gap: 12px;
  }

  .xh__badge {
    margin-top: 4px;
    padding: 6px 11px 6px 10px;
    font-size: 10.5px;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .xh__title {
    font-size: clamp(38px, 10.4vw, 56px);
  }

  .xh__lede {
    font-size: 15px;
  }

  .xh__panel {
    grid-area: 2 / 1;
    z-index: 2;
    position: relative;
    margin: -30px 8px 0;
    padding: 16px;
    background: #fbf9f4;
  }
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
  aspect-ratio: 2000 / 840;
}

.xg__hero .xg__media img {
  object-position: 50% 50%;
}

.xg__bento {
  display: grid;
  gap: clamp(16px, 1.6vw, 22px);
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-areas:
    'lab lab lab lab lab factory factory factory factory factory factory factory'
    'robots robots robots robots robots robots robots drones drones drones drones drones';
  grid-template-rows: clamp(360px, 38vw, 520px) clamp(300px, 30vw, 420px);
}

.xg__tile {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 0;
}

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
      'lab factory'
      'robots robots'
      'drones drones';
    grid-template-rows: none;
  }

  .xg__tile {
    grid-template-rows: auto auto;
  }

  .xg__tile--drones .xg__media { aspect-ratio: 4 / 3; }
  .xg__tile--lab .xg__media,
  .xg__tile--factory .xg__media { aspect-ratio: 3 / 4; }
  .xg__tile--robots .xg__media { aspect-ratio: 16 / 10; }
  .xg__tile--factory img { object-position: 42% 50%; }

  .xg__hero .xg__media {
    aspect-ratio: 16 / 10;
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

</style>
