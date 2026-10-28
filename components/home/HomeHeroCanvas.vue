<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null)

let stop = () => {}

onMounted(() => {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d', { alpha: true })
  if (!ctx) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let w = 0
  let h = 0
  let raf = 0
  let visible = true
  let start = performance.now()
  let mx = 0.5
  let my = 0.62
  let tx = 0.5
  let ty = 0.62

  const off = document.createElement('canvas')
  const octx = off.getContext('2d')
  if (!octx) return

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    w = el.clientWidth
    h = el.clientHeight
    el.width = Math.round(w * dpr)
    el.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const scale = 0.48
    off.width = Math.max(2, Math.round(w * scale))
    off.height = Math.max(2, Math.round(h * scale))
  }

  const ribbonY = (p: number, u: number, t: number) => {
    const horizon = 0.52 + p * 0.28
    const wave =
      Math.sin(u * 2.15 + t * 0.22 + p * 1.7) * 0.055 +
      Math.sin(u * 4.6 - t * 0.13 + p * 2.8) * 0.024 +
      Math.sin(u * 0.7 + t * 0.07 + p) * 0.03
    const pointer = (mx - 0.5) * 0.05 * Math.sin(u * Math.PI) + (my - 0.55) * 0.04 * (1 - u * 0.4)
    return (horizon + wave + pointer) * off.height
  }

  const paint = (now: number) => {
    const t = (now - start) / 1000
    mx += (tx - mx) * 0.045
    my += (ty - my) * 0.045

    const ow = off.width
    const oh = off.height
    octx.clearRect(0, 0, ow, oh)

    octx.fillStyle = '#07080a'
    octx.fillRect(0, 0, ow, oh)

    const lamp = octx.createRadialGradient(ow * (0.38 + mx * 0.08), oh * 0.82, 0, ow * 0.42, oh * 0.86, ow * 0.72)
    lamp.addColorStop(0, 'rgba(200, 125, 75, 0.42)')
    lamp.addColorStop(0.28, 'rgba(196, 122, 74, 0.16)')
    lamp.addColorStop(1, 'rgba(7, 8, 10, 0)')
    octx.fillStyle = lamp
    octx.fillRect(0, 0, ow, oh)

    const cool = octx.createRadialGradient(ow * 0.74, oh * 0.16, 0, ow * 0.7, oh * 0.18, ow * 0.5)
    cool.addColorStop(0, 'rgba(230, 225, 218, 0.12)')
    cool.addColorStop(1, 'rgba(7, 8, 10, 0)')
    octx.fillStyle = cool
    octx.fillRect(0, 0, ow, oh)

    octx.save()
    octx.globalCompositeOperation = 'lighter'
    octx.lineCap = 'round'
    octx.lineJoin = 'round'
    const ribbons = 9
    for (let i = 0; i < ribbons; i++) {
      const p = i / (ribbons - 1)
      const mid = 1 - Math.abs(p - 0.45) * 1.4
      octx.lineWidth = (18 + mid * 42) * (ow / 700)
      const warm = i % 2 === 0
      const a = 0.028 + mid * 0.045
      octx.strokeStyle = warm ? `rgba(200, 125, 75, ${a})` : `rgba(229, 169, 124, ${a * 0.75})`
      octx.beginPath()
      const steps = 36
      for (let s = 0; s <= steps; s++) {
        const u = s / steps
        const x = u * ow
        const y = ribbonY(p, u, t)
        if (s === 0) octx.moveTo(x, y)
        else octx.lineTo(x, y)
      }
      octx.stroke()
    }

    const silver = octx.createRadialGradient(ow * (0.58 + mx * 0.04), oh * (0.4 + my * 0.04), 0, ow * 0.6, oh * 0.42, ow * 0.28)
    silver.addColorStop(0, 'rgba(230, 225, 218, 0.07)')
    silver.addColorStop(1, 'rgba(230, 225, 218, 0)')
    octx.fillStyle = silver
    octx.fillRect(0, 0, ow, oh)
    octx.restore()

    ctx.clearRect(0, 0, w, h)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.filter = 'blur(18px)'
    ctx.drawImage(off, 0, 0, w, h)
    ctx.filter = 'none'
    ctx.globalAlpha = 0.55
    ctx.drawImage(off, 0, 0, w, h)
    ctx.globalAlpha = 1
  }

  const loop = (now: number) => {
    paint(now)
    raf = visible ? requestAnimationFrame(loop) : 0
  }

  const onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect()
    if (!r.width || !r.height) return
    tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
    ty = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
  }

  resize()
  if (reduceMotion) {
    start = performance.now() - 18000
    paint(performance.now())
  } else {
    raf = requestAnimationFrame(loop)
  }

  const ro = new ResizeObserver(() => {
    resize()
    if (reduceMotion) paint(performance.now())
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
  window.addEventListener('pointermove', onMove, { passive: true })

  stop = () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    window.removeEventListener('pointermove', onMove)
  }
})

onBeforeUnmount(() => stop())
</script>

<template>
  <canvas ref="canvas" aria-hidden="true" />
</template>
