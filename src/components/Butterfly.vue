<!-- Kupu-kupu terbang. Atur posisi/ukuran lewat style: --t (top), --l (left), --s (ukuran), --dl (delay) -->
<template>
  <svg class="bfly" viewBox="0 0 64 48" aria-hidden="true">
    <g v-for="m in ['', 'translate(64 0) scale(-1 1)']" :key="m" :transform="m || undefined">
      <g class="wing">
        <path d="M32 24C18 2 1 5 5 22c2 11 16 12 27 4Z" />
        <path d="M32 26C20 29 11 44 22 45c7 0 10-9 10-19Z" />
        <circle cx="16" cy="17" r="3" class="dot" />
      </g>
    </g>
    <ellipse cx="32" cy="26" rx="2" ry="11" class="body" />
  </svg>
</template>

<style scoped>
.bfly {
  position: absolute; top: var(--t, 20%); left: var(--l, 10%); width: var(--s, 64px);
  pointer-events: none; z-index: 2;
  animation: drift 13s ease-in-out infinite alternate; animation-delay: var(--dl, 0s);
}
.wing { fill: #fa9fd3; stroke: #1b1b1b; stroke-width: 1.4; stroke-linejoin: round; transform-origin: 32px 24px; animation: flap .45s ease-in-out infinite alternate; }
.dot { fill: #fff; stroke: none; }
.body { fill: #1b1b1b; }
@keyframes flap { to { transform: scaleX(.22); } }
@keyframes drift {
  0% { transform: translate(0, 0) rotate(-12deg); }
  35% { transform: translate(7vw, -5vh) rotate(10deg); }
  70% { transform: translate(-3vw, 4vh) rotate(-6deg); }
  100% { transform: translate(5vw, 8vh) rotate(14deg); }
}
</style>
