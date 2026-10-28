<script setup lang="ts">
import { navLinks, site } from '~/data/site'

const route = useRoute()
const nuxtApp = useNuxtApp()

const detected = ref<'light' | 'dark' | null>(null)
const scrolled = ref(false)
const menuOpen = ref(false)

const theme = computed<'light' | 'dark'>(() => {
  if (menuOpen.value) return 'light'
  return detected.value ?? ((route.meta.navTheme as 'light' | 'dark' | undefined) || 'light')
})

const isActive = (to: string) => route.path === to || route.path.startsWith(`${to}/`)

let raf = 0
function measure() {
  raf = 0
  scrolled.value = window.scrollY > 8
  const probe = 40
  let dark = false
  document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]').forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.top <= probe && r.bottom >= probe) dark = true
  })
  detected.value = dark ? 'dark' : 'light'
}
const schedule = () => {
  if (!raf) raf = requestAnimationFrame(measure)
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (raf) cancelAnimationFrame(raf)
})

nuxtApp.hook('page:finish', () => {
  detected.value = null
  requestAnimationFrame(measure)
})

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

watch(menuOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') menuOpen.value = false
}
</script>

<template>
  <header class="nav" :class="[`nav--${theme}`, { 'nav--scrolled': scrolled, 'nav--open': menuOpen }]" @keydown="onKeydown">
    <div class="nav__bar">
      <NuxtLink to="/" class="nav__brand" aria-label="Allometrik home">
        <BrandLogo :variant="theme === 'dark' ? 'dark' : 'light'" :size="30" />
      </NuxtLink>

      <nav class="nav__links" aria-label="Primary">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav__link" :class="{ 'is-active': isActive(link.to) }">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="nav__actions">
        <a :href="site.socials.x" class="nav__social" target="_blank" rel="noopener noreferrer" aria-label="Allometrik on X">
          <UiIcon name="x-logo" :size="15" />
        </a>
        <a :href="site.socials.linkedin" class="nav__social" target="_blank" rel="noopener noreferrer" aria-label="Allometrik on LinkedIn">
          <UiIcon name="linkedin" :size="16" />
        </a>
        <UiButton :href="site.calendly" :variant="theme === 'dark' ? 'light' : 'ink'" size="sm" icon="up" class="nav__cta">
          Book a Consultation
        </UiButton>
        <button
          class="nav__toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <UiIcon :name="menuOpen ? 'x' : 'menu'" :size="20" :stroke="1.8" />
        </button>
      </div>
    </div>

    <Transition name="sheet">
      <div v-if="menuOpen" id="mobile-menu" class="nav__sheet">
        <nav aria-label="Mobile">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav__sheet-link">
            <span>{{ link.label }}</span>
            <UiIcon name="arrow-right" :size="16" />
          </NuxtLink>
          <NuxtLink to="/about" class="nav__sheet-link">
            <span>About</span>
            <UiIcon name="arrow-right" :size="16" />
          </NuxtLink>
        </nav>
        <div class="nav__sheet-foot">
          <UiButton :href="site.calendly" variant="ink" size="lg" icon="up" class="nav__sheet-cta">Book a Consultation</UiButton>
          <div class="nav__sheet-social">
            <a :href="site.socials.x" target="_blank" rel="noopener noreferrer" aria-label="Allometrik on X"><UiIcon name="x-logo" :size="16" /></a>
            <a :href="site.socials.linkedin" target="_blank" rel="noopener noreferrer" aria-label="Allometrik on LinkedIn"><UiIcon name="linkedin" :size="17" /></a>
            <a :href="`mailto:${site.email}`" class="nav__sheet-mail">{{ site.email }}</a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 12px;
  left: 50%;
  z-index: 100;
  width: min(1120px, calc(100% - 24px));
  transform: translateX(-50%);
}

.nav__bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 58px;
  padding: 0 8px 0 16px;
  border-radius: 18px;
  background: rgba(247, 245, 240, 0.74);
  border: 1px solid rgba(17, 19, 24, 0.08);
  -webkit-backdrop-filter: blur(22px) saturate(170%);
  backdrop-filter: blur(22px) saturate(170%);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.7) inset, 0 10px 30px -18px rgba(17, 19, 24, 0.28);
  transition: background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.nav--scrolled .nav__bar {
  background: rgba(247, 245, 240, 0.86);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.7) inset, 0 14px 36px -18px rgba(17, 19, 24, 0.32);
}

.nav--dark .nav__bar {
  background: rgba(28, 30, 37, 0.42);
  border-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 14px 40px -18px rgba(0, 0, 0, 0.6);
}

.nav__brand {
  justify-self: start;
  display: inline-flex;
  padding: 6px 4px;
  border-radius: 10px;
  outline: none;
}

.nav__brand:focus,
.nav__brand:focus-visible,
.nav__brand:active {
  outline: none;
  box-shadow: none;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav__link {
  padding: 8px 13px;
  border-radius: 10px;
  font-size: 14.5px;
  font-weight: 460;
  letter-spacing: -0.01em;
  color: var(--text-2);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav__link:hover {
  color: var(--ink);
  background: rgba(17, 19, 24, 0.05);
}

.nav__link.is-active {
  color: var(--ink);
  background: rgba(17, 19, 24, 0.06);
}

.nav--dark .nav__link {
  color: rgba(244, 241, 234, 0.8);
}

.nav--dark .nav__link:hover,
.nav--dark .nav__link.is-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.09);
}

.nav__actions {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav__social {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  color: var(--text-2);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav__social:hover {
  color: var(--ink);
  background: rgba(17, 19, 24, 0.05);
}

.nav--dark .nav__social {
  color: rgba(244, 241, 234, 0.8);
}

.nav--dark .nav__social:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.09);
}

.nav__cta {
  margin-left: 8px;
  border-radius: 12px;
}

.nav__toggle {
  display: none;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  color: var(--ink);
}

.nav--dark .nav__toggle {
  color: var(--on-dark);
}

.nav__sheet {
  margin-top: 8px;
  padding: 10px;
  border-radius: 18px;
  background: rgba(247, 245, 240, 0.96);
  border: 1px solid var(--line);
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);
  box-shadow: var(--shadow-lg);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.nav__sheet-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--ink);
}

.nav__sheet-link + .nav__sheet-link {
  border-top: 1px solid var(--line);
}

.nav__sheet-link:hover {
  background: rgba(17, 19, 24, 0.04);
}

.nav__sheet-foot {
  display: grid;
  gap: 14px;
  padding: 14px 6px 6px;
}

.nav__sheet-cta {
  width: 100%;
}

.nav__sheet-social {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 4px 8px;
  color: var(--text-2);
}

.nav__sheet-mail {
  margin-left: auto;
  font-size: 14px;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.25s ease, transform 0.35s var(--ease-out);
}

.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1240px) {
  .nav {
    width: min(1180px, calc(100% - 20px));
  }

  .nav__link {
    padding: 8px 9px;
    font-size: 13.5px;
  }
}

@media (max-width: 1023px) {
  .nav__bar {
    grid-template-columns: 1fr auto;
    padding-right: 6px;
  }

  .nav__links,
  .nav__social,
  .nav__cta {
    display: none;
  }

  .nav__toggle {
    display: grid;
  }
}
</style>
