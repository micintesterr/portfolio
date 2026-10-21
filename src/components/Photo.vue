<!-- Kalau `src` kosong, tampil kotak tempat foto. Isi src di src/data.js -->
<script setup>
defineProps({
  src: { type: String, default: '' },
  label: { type: String, default: 'Foto' },
  ratio: { type: String, default: '4 / 3' },
})
</script>

<template>
  <img v-if="src" :src="src" :alt="label" :style="{ aspectRatio: ratio }" loading="lazy" class="photo" />
  <div v-else class="photo ph" :style="{ aspectRatio: ratio }" role="img" :aria-label="'Tempat foto: ' + label">
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>
.photo { display: block; width: 100%; object-fit: cover; }
.ph {
  display: grid; place-items: center; padding: 1rem; text-align: center;
  border: 2px dashed currentColor; opacity: .55; font-size: .9rem;
}
</style>
