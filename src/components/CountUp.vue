<!-- Angka berhitung naik saat muncul di layar. "6M" -> 0M ... 6M -->
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ value: { type: String, required: true } })
const m = props.value.match(/^(\d+)(.*)$/)
const target = m ? Number(m[1]) : 0
const n = ref(0)
const el = ref(null)

function run() {
  const t0 = performance.now()
  const step = (t) => {
    const k = Math.min((t - t0) / 1200, 1)
    n.value = Math.round(target * (1 - Math.pow(1 - k, 3)))
    if (k < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!m || reduce || !('IntersectionObserver' in window)) { n.value = target; return }
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect() } }, { threshold: 0.6 })
  io.observe(el.value)
})
</script>

<template><span ref="el">{{ m ? n + m[2] : value }}</span></template>
