# Portofolio Cantika Larasati

Vue 3 + Vite. Semua isi (teks, link, path foto) ada di `src/data.js`.

## Jalankan lokal
```
npm install
npm run dev
```

## Isi foto
Taruh gambar di `public/img/`, lalu di `src/data.js` isi misalnya `fotoHero: '/img/profil.png'`.
Kosong = tampil kotak tempat foto.
CV: taruh PDF di public/, lalu isi `cv` di data.js. Akun Discord/Instagram: cari tulisan GANTI di data.js.

## Deploy ke Vercel
1. Push ke GitHub.
2. vercel.com > Add New > Project > pilih repo > Deploy.
Framework Vite terdeteksi otomatis (build: `npm run build`, output: `dist`).
