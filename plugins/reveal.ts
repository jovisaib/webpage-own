import type { Directive } from 'vue'

/**
 * v-reveal: fades/slides elements in as they enter the viewport.
 * Elements render fully visible on the server; the hidden state is only applied
 * after hydration, and never to elements that are already on screen.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (observer) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    return observer
  }

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) return
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      el.classList.add('reveal')
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
