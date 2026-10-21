<script setup>
import Photo from './components/Photo.vue'
import Collage from './components/Collage.vue'
import {
  profile, skills, fotoSkill, komunikasi, fotoKomunikasi, experience,
  middleBoard, dokumentasi, uiux, projects, roblox, sorotan, tools, pendidikan, contacts,
} from './data'

const kontakAktif = contacts.filter((c) => c.teks || c.url)
const caseAktif = middleBoard.caseStudy.filter((c) => c.isi)
</script>

<template>
  <a class="skip" href="#konten">Lewati ke konten</a>

  <header class="bar">
    <span>By {{ profile.nama }}</span>
    <nav aria-label="Navigasi utama">
      <a href="#skill">Skill</a>
      <a href="#pengalaman">Pengalaman</a>
      <a href="#project">Project</a>
      <a href="#roblox">Roblox</a>
      <a href="#kontak">Kontak</a>
    </nav>
    <span>{{ profile.peran }}</span>
  </header>

  <main id="konten">
    <!-- HERO -->
    <section class="hero">
      <span class="script hero-script" aria-hidden="true">Creative</span>
      <h1>PORTOFOLIO</h1>
      <Photo class="hero-photo" :src="profile.fotoHero" label="Foto cutout (PNG transparan)" ratio="3 / 4" />
    </section>

    <!-- TENTANG -->
    <section class="section about">
      <div>
        <h2 class="big">{{ profile.namaLengkap }}</h2>
        <p class="script">{{ profile.peran }}</p>
        <p class="lead">{{ profile.tentang }}</p>
        <p v-if="profile.status" class="status">{{ profile.status }}</p>
        <ul class="plain ident" aria-label="Akun saya">
          <li v-for="c in kontakAktif" :key="c.label">
            <b>{{ c.label }}</b>
            <a v-if="c.url" :href="c.url" target="_blank" rel="noopener">{{ c.teks || c.url }}</a>
            <span v-else>{{ c.teks }}</span>
          </li>
        </ul>
        <p class="cta">
          <a class="btn" href="#project">Lihat project</a>
          <a v-if="profile.cv" class="btn ghost" :href="profile.cv" download>Unduh CV</a>
        </p>
      </div>
      <Photo :src="profile.fotoTentang" label="Foto cutout (PNG transparan)" ratio="3 / 4" />
    </section>

    <!-- SOROTAN -->
    <section class="section dark stats" aria-label="Sorotan">
      <p v-for="o in sorotan" :key="o.label"><b>{{ o.angka }}</b>{{ o.label }}</p>
    </section>

    <!-- SKILL -->
    <section id="skill" class="section">
      <h2 class="big">MY SKILL</h2>
      <div class="grid skill-grid">
        <article v-for="s in skills" :key="s.judul">
          <h3>{{ s.judul }}</h3>
          <p>{{ s.isi }}</p>
        </article>
        <Photo class="polaroid" :src="fotoSkill" label="Foto polaroid" ratio="1 / 1" />
      </div>
    </section>

    <!-- TOOLS & PENDIDIKAN -->
    <section class="section split top">
      <div>
        <h2 class="big">TOOLS</h2>
        <div v-for="t in tools" :key="t.grup" class="tool">
          <h3>{{ t.grup }}</h3>
          <p class="tags"><span v-for="i in t.item" :key="i">{{ i }}</span></p>
        </div>
      </div>
      <div>
        <h2 class="big">PENDIDIKAN</h2>
        <article v-for="e in pendidikan" :key="e.judul">
          <h3>{{ e.judul }}</h3>
          <p>{{ e.tempat }}<template v-if="e.ket"><br />{{ e.ket }}</template></p>
        </article>
      </div>
    </section>

    <!-- KOMUNIKASI -->
    <section class="section split">
      <div>
        <p class="script">dimana belajar soal</p>
        <h2 class="big">KOMUNIKASI</h2>
        <ul class="plain">
          <li v-for="k in komunikasi" :key="k">{{ k }}</li>
        </ul>
      </div>
      <Collage :photos="fotoKomunikasi" label="Foto kegiatan" />
    </section>

    <!-- EXPERIENCE -->
    <section id="pengalaman" class="section">
      <h2 class="big">BEST EXPERIENCE</h2>
      <div class="grid exp-grid">
        <article v-for="e in experience" :key="e.judul" :class="{ wide: e.poin }">
          <h3>{{ e.judul }}</h3>
          <p v-if="e.tempat" class="tempat">{{ e.tempat }}</p>
          <p>{{ e.isi }}</p>
          <ul v-if="e.poin" class="poin"><li v-for="x in e.poin" :key="x">{{ x }}</li></ul>
        </article>
      </div>
    </section>

    <!-- MIDDLE BOARD -->
    <section class="section dark split">
      <div>
        <p class="script">project yang pernah dikelola</p>
        <h2 class="big">{{ middleBoard.judul }}</h2>
        <p class="tanggal">{{ middleBoard.tanggal }}</p>
        <p class="lead">{{ middleBoard.isi }}</p>
        <div v-if="caseAktif.length" class="case">
          <article v-for="c in caseAktif" :key="c.judul"><h3>{{ c.judul }}</h3><p>{{ c.isi }}</p></article>
        </div>
      </div>
      <div class="stack">
        <Photo v-for="(f, i) in middleBoard.foto" :key="i" :src="f" :label="'Screenshot sistem ' + (i + 1)" ratio="16 / 10" />
      </div>
    </section>

    <!-- DOKUMENTASI -->
    <section class="section dark">
      <h2 class="big">DOKUMENTASI</h2>
      <div class="grid doc-grid">
        <figure v-for="(f, i) in dokumentasi.foto" :key="i">
          <Photo :src="f" :label="'Screenshot dokumentasi ' + (i + 1)" ratio="16 / 10" />
          <figcaption><a :href="dokumentasi.link[i]?.url">{{ dokumentasi.link[i]?.label }}</a></figcaption>
        </figure>
      </div>
      <h2 class="big sub">UP PROGRESS</h2>
      <p class="lead">{{ dokumentasi.upProgress }}</p>
      <Photo :src="dokumentasi.fotoUpProgress" label="Screenshot update progress di Discord" ratio="21 / 9" />
    </section>

    <!-- UI/UX -->
    <section class="section">
      <h2 class="big"><span class="script inline">as</span> UI/UX DESIGNER</h2>
      <p class="links">
        <a v-for="l in uiux.link" :key="l.label" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
      </p>
      <div class="grid ui-grid">
        <Photo v-for="(f, i) in uiux.foto" :key="i" :src="f" :label="'Desain UI ' + (i + 1)" ratio="16 / 10" />
      </div>
    </section>

    <!-- PROJECT -->
    <section id="project" class="section dark">
      <h2 class="big">PROJECT KULIAH</h2>
      <div class="grid proj-grid">
        <article v-for="p in projects" :key="p.judul">
          <div>
            <h3>{{ p.judul }}</h3>
            <p class="jenis">{{ p.jenis }}<template v-if="p.peran">, sebagai {{ p.peran }}</template></p>
            <p class="links">
              <template v-for="l in p.link" :key="l.label">
                <a v-if="l.url" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
                <span v-else class="soon">{{ l.label }}: link menyusul</span>
              </template>
            </p>
          </div>
          <div class="gallery">
            <Photo v-for="(f, i) in p.foto" :key="i" :src="f" :label="p.judul + ' ' + (i + 1)" ratio="16 / 10" />
          </div>
        </article>
      </div>
    </section>

    <!-- ROBLOX -->
    <section id="roblox" class="section pink">
      <p class="script">{{ roblox.script }}</p>
      <h2 class="big">{{ roblox.judul }}</h2>
      <p class="lead">{{ roblox.isi }}</p>
      <article v-for="g in roblox.maps" :key="g.judul" class="map">
        <div>
          <h3 class="map-title">{{ g.judul }}</h3>
          <p v-if="g.badge" class="badge">{{ g.badge }}</p>
          <p v-if="g.isi">{{ g.isi }}</p>
          <p class="links">
            <template v-for="l in g.link" :key="l.label">
              <a v-if="l.url" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
              <span v-else class="soon">{{ l.label }}: link menyusul</span>
            </template>
          </p>
        </div>
        <Collage :photos="g.foto" :label="g.judul" wide />
      </article>
    </section>

    <!-- KONTAK -->
    <section id="kontak" class="section center">
      <p class="script thanks">Thanks</p>
      <p class="links">
        <template v-for="c in kontakAktif" :key="c.label">
          <a v-if="c.url" :href="c.url" target="_blank" rel="noopener">{{ c.label }}: {{ c.teks || c.url }}</a>
          <span v-else>{{ c.label }}: {{ c.teks }}</span>
        </template>
      </p>
    </section>
  </main>

  <footer class="bar foot">
    <span>{{ profile.namaLengkap }}</span>
    <span>{{ profile.peran }}</span>
  </footer>
</template>
