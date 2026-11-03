<script setup lang="ts">
const greetings = [
  { lang: 'en', dir: 'ltr', label: 'English', text: 'Good evening. How may I help you?' },
  { lang: 'ar', dir: 'rtl', label: 'العربية', text: 'مساء الخير، كيف يمكنني مساعدتك؟' },
  { lang: 'es', dir: 'ltr', label: 'Español', text: 'Buenas noches, ¿en qué puedo ayudarle?' },
] as const

const active = ref(0)
const canvas = ref<HTMLCanvasElement | null>(null)
const stage = ref<HTMLElement | null>(null)

let raf = 0
let timer: ReturnType<typeof setInterval> | undefined
let observer: IntersectionObserver | null = null
let visible = true
let reduced = false

const waves = [
  { freq: 1.6, speed: 0.32, amp: 1, alpha: 0.9, width: 1.25 },
  { freq: 2.3, speed: -0.24, amp: 0.72, alpha: 0.5, width: 1 },
  { freq: 3.1, speed: 0.18, amp: 0.5, alpha: 0.34, width: 1 },
  { freq: 1.1, speed: -0.12, amp: 0.86, alpha: 0.22, width: 1 },
]

function draw(t: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = el.clientWidth
  const h = el.clientHeight
  if (el.width !== Math.round(w * dpr) || el.height !== Math.round(h * dpr)) {
    el.width = Math.round(w * dpr)
    el.height = Math.round(h * dpr)
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)

  const mid = h / 2
  const time = t / 1000
  // Slow "speech" envelope so the lines breathe like a voice, not a metronome.
  const speech = 0.55 + 0.3 * Math.sin(time * 0.9) * Math.sin(time * 0.37 + 1.2) + 0.15 * Math.sin(time * 2.1)
  const base = Math.min(h * 0.26, 120) * speech

  const gradient = ctx.createLinearGradient(0, 0, w, 0)
  gradient.addColorStop(0, 'rgba(194, 106, 53, 0)')
  gradient.addColorStop(0.3, 'rgba(194, 106, 53, 1)')
  gradient.addColorStop(0.7, 'rgba(230, 214, 196, 1)')
  gradient.addColorStop(1, 'rgba(230, 214, 196, 0)')

  for (const wave of waves) {
    ctx.beginPath()
    ctx.globalAlpha = wave.alpha
    ctx.lineWidth = wave.width
    ctx.strokeStyle = gradient
    const steps = Math.max(120, Math.round(w / 4))
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * w
      const u = i / steps - 0.5
      const envelope = Math.exp(-(u * u) / 0.045)
      const y =
        mid +
        Math.sin(u * Math.PI * 2 * wave.freq + time * wave.speed * 6) *
          base *
          wave.amp *
          envelope *
          (0.8 + 0.2 * Math.sin(u * 9 + time))
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  ctx.globalAlpha = 1
}

function loop(t: number) {
  draw(t)
  raf = visible ? requestAnimationFrame(loop) : 0
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    draw(2400)
    window.addEventListener('resize', onResize, { passive: true })
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting
    if (visible && !raf) raf = requestAnimationFrame(loop)
  })
  if (stage.value) observer.observe(stage.value)
  raf = requestAnimationFrame(loop)
  timer = setInterval(() => {
    if (visible) active.value = (active.value + 1) % greetings.length
  }, 4200)
})

function onResize() {
  draw(2400)
}

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  if (timer) clearInterval(timer)
  observer?.disconnect()
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <figure ref="stage" class="stage grain" data-nav-theme="dark">
    <canvas ref="canvas" class="stage__wave" aria-hidden="true" />
    <div class="stage__veil" aria-hidden="true" />

    <figcaption class="stage__caption">
      <span class="sr-only">An Allometrik Voice agent greeting a caller in English, Arabic and Spanish.</span>
      <span class="stage__lines" aria-hidden="true">
        <Transition name="greet" mode="out-in">
          <span :key="active" class="stage__greeting" :lang="greetings[active]!.lang" :dir="greetings[active]!.dir">
            {{ greetings[active]!.text }}
          </span>
        </Transition>
      </span>
    </figcaption>

    <div class="stage__foot mono" aria-hidden="true">
      <span>Allometrik Voice</span>
      <span class="stage__langs">
        <span v-for="(g, i) in greetings" :key="g.lang" :class="{ 'is-active': i === active }" :lang="g.lang">{{ g.label }}</span>
      </span>
    </div>
  </figure>
</template>

<style scoped>
.stage {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  place-items: center;
  height: clamp(380px, 52vw, 640px);
  margin: 0;
  border-radius: 28px;
  background: radial-gradient(90% 120% at 50% 100%, #1b1510 0%, #0c0d0f 62%);
  color: #f5f2eb;
}

.stage__wave {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
}

.stage__veil {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(42% 30% at 50% 50%, rgba(12, 13, 15, 0.55), transparent 75%);
}

.stage__caption {
  padding: 0 var(--gutter);
  text-align: center;
}

.stage__lines {
  display: block;
  min-height: 1.3em;
  font-size: clamp(26px, 3.6vw, 52px);
  line-height: 1.2;
}

.stage__greeting {
  display: inline-block;
  font-family: var(--font-serif);
  font-style: italic;
  letter-spacing: -0.012em;
  text-wrap: balance;
  color: #f5f2eb;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.stage__greeting[lang='ar'] {
  font-family: var(--font-serif), 'Noto Naskh Arabic', 'Geeza Pro', 'Times New Roman', serif;
  font-style: normal;
}

.stage__foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 22px clamp(20px, 3vw, 32px);
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 242, 235, 0.42);
}

.stage__langs {
  display: flex;
  gap: 18px;
}

.stage__langs span {
  transition: color 0.6s ease;
}

.stage__langs span[lang='ar'] {
  letter-spacing: 0;
}

.stage__langs .is-active {
  color: rgba(245, 242, 235, 0.92);
}

.greet-enter-active,
.greet-leave-active {
  transition: opacity 0.9s var(--ease-out), filter 0.9s var(--ease-out), transform 0.9s var(--ease-out);
}

.greet-enter-from {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(8px);
}

.greet-leave-to {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(-6px);
}

@media (max-width: 640px) {
  .stage {
    border-radius: 22px;
    height: 360px;
  }

  .stage__foot > span:first-child {
    display: none;
  }

  .stage__foot {
    justify-content: center;
  }
}
</style>
