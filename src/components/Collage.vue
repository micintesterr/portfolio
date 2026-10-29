<!-- Kolase polaroid: foto sedikit miring dan bertumpuk di tepinya, tapi isi foto tidak tertutup -->
<script setup>
import Photo from './Photo.vue'
const props = defineProps({
  photos: { type: Array, default: () => [] },
  label: { type: String, default: 'Foto' },
  wide: { type: Boolean, default: false }, // true = semua landscape (untuk screenshot desktop)
  row: { type: Boolean, default: false }, // true = berjajar satu baris (untuk foto pengalaman)
})
const ratios = props.wide ? ['16 / 10'] : props.row ? ['4 / 3'] : ['4 / 5', '1 / 1', '4 / 3', '3 / 4', '5 / 4']
</script>

<template>
  <div class="collage" :class="{ row }">
    <figure v-for="(f, i) in photos" :key="i" class="item">
      <Photo :src="f" :label="label + ' ' + (i + 1)" :ratio="ratios[i % ratios.length]" />
    </figure>
  </div>
</template>

<style scoped>
.collage { columns: 2 130px; column-gap: 1.4rem; padding: .6rem; }
.item {
  break-inside: avoid; margin: 0 0 -.4rem; padding: .5rem; background: #fff; color: #1b1b1b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .18); position: relative; transition: transform .35s cubic-bezier(.34, 1.56, .64, 1);
}
.item::before {
  content: ''; position: absolute; top: -.6rem; left: 50%; width: 4.2rem; height: 1.2rem;
  background: rgba(250, 159, 211, .75); transform: translateX(-50%) rotate(-3deg);
}
.item:nth-child(4n + 1) { transform: rotate(-2.5deg); }
.item:nth-child(4n + 2) { transform: rotate(2deg) translateY(1rem); }
.item:nth-child(4n + 3) { transform: rotate(1.5deg); }
.item:nth-child(4n) { transform: rotate(-2deg) translateY(.6rem); }
.item:hover { transform: rotate(0deg) scale(1.05); z-index: 2; }
.collage.row { columns: auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; padding: .9rem .2rem .2rem; }
.collage.row .item { margin: 0; }
@media (prefers-reduced-motion: reduce) { .item { transition: none; } }
</style>
