<!-- Kolase polaroid: foto sedikit miring dan bertumpuk di tepinya, tapi isi foto tidak tertutup -->
<script setup>
import Photo from './Photo.vue'
const props = defineProps({
  photos: { type: Array, default: () => [] },
  label: { type: String, default: 'Foto' },
  wide: { type: Boolean, default: false }, // true = semua landscape (untuk screenshot desktop)
})
const ratios = props.wide ? ['16 / 10'] : ['4 / 5', '1 / 1', '4 / 3', '3 / 4', '5 / 4']
</script>

<template>
  <div class="collage">
    <figure v-for="(f, i) in photos" :key="i" class="item">
      <Photo :src="f" :label="label + ' ' + (i + 1)" :ratio="ratios[i % ratios.length]" />
    </figure>
  </div>
</template>

<style scoped>
.collage { columns: 2 170px; column-gap: 1.4rem; padding: .6rem; }
.item {
  break-inside: avoid; margin: 0 0 -.4rem; padding: .5rem; background: #fff; color: #1b1b1b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .18); position: relative;
}
.item:nth-child(4n + 1) { transform: rotate(-2.5deg); }
.item:nth-child(4n + 2) { transform: rotate(2deg) translateY(1rem); }
.item:nth-child(4n + 3) { transform: rotate(1.5deg); }
.item:nth-child(4n) { transform: rotate(-2deg) translateY(.6rem); }
</style>
