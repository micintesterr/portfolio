# Portofolio Cantika Larasati

Vue 3 + Vite. Semua isi (teks, link, path foto) ada di `src/data.js`.
Font (Anton, Urbanist, Mrs Saint Delafield) sudah ikut ter-bundle lewat `@fontsource`, jadi tidak perlu koneksi ke Google Fonts.

## Jalankan lokal
```
npm install
npm run dev
```

## Isi foto
Taruh gambar di `public/img/`, lalu di `src/data.js` isi misalnya `fotoHero: '/img/profil.png'`.
Kosong = tampil kotak tempat foto.
Foto tiap pengalaman: isi array `foto` di dalam `experience`.

## Bagian yang masih placeholder (isi di `src/data.js`)
- Pengalaman: `skill` dan `tools` (kapsul) di tiap item `experience`.
- Project Kuliah: `stack`, `skill`, `deskripsi`, `insight`, `outcome` di tiap item `projects`. Tombol "Baca selengkapnya" membuka halaman detail.
- Sertifikat: array `sertifikat` (`judul`, `ket`, `foto`).
- Ikon tools: kunci `ikon` mengacu ke `src/icons.js`. Tool tanpa ikon tampil dengan inisial.

## CV, Discord, Instagram
- CV: taruh PDF di `public/`, lalu isi `cv` di `data.js` (tombol "Unduh CV" muncul otomatis).
- Kontak yang masih bertanda `GANTI` otomatis disembunyikan dari halaman. Ganti teks dan url-nya, lalu kontak itu tampil.
- Link bertanda `#` atau kosong tampil sebagai "link menyusul".

## Deploy ke Vercel
1. Push folder ini ke GitHub.
2. vercel.com > Add New > Project > pilih repo > Deploy.
Pengaturan sudah ada di `vercel.json` (framework Vite, build `npm run build`, output `dist`), tidak perlu diubah.
