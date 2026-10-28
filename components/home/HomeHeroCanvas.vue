<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null)

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

onMounted(() => {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let w = 0
  let h = 0
  let lines = 52
  let gradient: CanvasGradient | null = null
  let raf = 0
  let visible = true
  let start = performance.now()

  const pulses = Array.from({ length: 7 }, (_, i) => ({
    line: 0.2 + ((i * 0.37) % 0.6),
    offset: i / 7,
    speed: 0.000045 + (i % 3) * 0.000018,
  }))

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    w = el.clientWidth
    h = el.clientHeight
    el.width = Math.round(w * dpr)
    el.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    lines = w < 700 ? 34 : 52
    gradient = ctx.createLinearGradient(0, 0, w, 0)
    gradient.addColorStop(0, 'rgba(200, 122, 75, 0.55)')
    gradient.addColorStop(0.45, 'rgba(232, 186, 150, 0.95)')
    gradient.addColorStop(0.78, 'rgba(226, 222, 216, 0.9)')
    gradient.addColorStop(1, 'rgba(170, 170, 182, 0.75)')
  }

  const yAt = (p: number, u: number, t: number, i: number) => {
    const spread = p - 0.5
    const converge = 1 - smoothstep(0.12, 0.88, u) * 0.9
    const base = h * 0.56 + spread * h * 1.3 * converge
    const amp = (1 - smoothstep(0.15, 0.92, u)) * Math.min(46, h * 0.06) + 3
    return (
      base +
      Math.sin(u * 6.2 + t * 0.00022 + i * 0.27) * amp * 0.62 +
      Math.sin(u * 12.5 - t * 0.00034 + i * 0.53) * amp * 0.34
    )
  }

  const draw = (now: number) => {
    const t = now - start
    ctx.clearRect(0, 0, w, h)
    if (!gradient) return
    ctx.lineWidth = 1
    ctx.strokeStyle = gradient
    const steps = Math.max(60, Math.round(w / 14))

    for (let i = 0; i < lines; i++) {
      const p = i / (lines - 1)
      const centrality = 1 - Math.min(1, Math.abs(p - 0.5) * 2)
      ctx.globalAlpha = 0.07 + 0.3 * Math.pow(centrality, 1.4)
      ctx.beginPath()
      for (let s = 0; s <= steps; s++) {
        const u = s / steps
        const x = u * w
        const y = yAt(p, u, t, i)
        if (s === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }

    ctx.globalAlpha = 1
    for (const pulse of pulses) {
      const u = (pulse.offset + t * pulse.speed) % 1
      const i = Math.round(pulse.line * (lines - 1))
      const x = u * w
      const y = yAt(i / (lines - 1), u, t, i)
      const fade = Math.sin(Math.PI * u)
      const r = 26 + 18 * smoothstep(0.4, 1, u)
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(255, 226, 196, ${0.55 * fade})`)
      g.addColorStop(0.25, `rgba(222, 150, 100, ${0.22 * fade})`)
      g.addColorStop(1, 'rgba(200, 122, 75, 0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const loop = (now: number) => {
    draw(now)
    raf = visible ? requestAnimationFrame(loop) : 0
  }

  resize()
  if (reduceMotion) {
    start = performance.now() - 14000
    draw(performance.now())
  } else {
    raf = requestAnimationFrame(loop)
  }

  const ro = new ResizeObserver(() => {
    resize()
    if (reduceMotion) draw(performance.now())
  })
  ro.observe(el)

  const io = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting && !document.hidden
    if (visible && !raf && !reduceMotion) raf = requestAnimationFrame(loop)
  })
  io.observe(el)

  const onVisibility = () => {
    visible = !document.hidden
    if (visible && !raf && !reduceMotion) raf = requestAnimationFrame(loop)
  }
  document.addEventListener('visibilitychange', onVisibility)

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
  })
})
</script>

<template>
  <canvas ref="canvas" aria-hidden="true" />
</template>
