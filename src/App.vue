<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import Photo from './components/Photo.vue'
import Collage from './components/Collage.vue'
import Butterfly from './components/Butterfly.vue'
import CountUp from './components/CountUp.vue'
import { ikon } from './icons'
import {
  profile, skills, fotoSkill, komunikasi, fotoKomunikasi, experience,
  uiux, projects, roblox, sorotan, tools, pendidikan, contacts, sertifikat,
} from './data'

const ticker = ['Project Manager', 'Scrum Admin', 'UI/UX Designer', 'Product Development', 'Roblox World Builder']
const nav = [
  { id: 'skill', label: 'Skill' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'project', label: 'Project' },
  { id: 'roblox', label: 'Roblox Creator' },
  { id: 'sertifikat', label: 'Sertifikat' },
  { id: 'kontak', label: 'Kontak' },
]

// Kontak yang masih bertanda GANTI tidak ditampilkan ke recruiter
const kontakAktif = contacts.filter((c) => (c.teks || c.url) && !/GANTI/i.test(c.teks + c.url))
const adaLink = (u) => !!u && u !== '#'
const paragraf = profile.tentang.split('\n\n')
const pecah = (k) => { const [judul, tanggal] = k.split(' | '); return { judul, tanggal } }

// Skill: default hanya poin utama, bubble muncul saat hover/fokus/tap. Tombol detail = tampilan kartu lengkap.
const detailSkill = ref(false)
const tip = ref(-1)
const tutupTip = () => { tip.value = -1 }
const onKey = (e) => { if (e.key === 'Escape') tutupTip() }

// Project: halaman 1 (ringkasan) <-> halaman 2 (deskripsi, insight, outcome)
const buka = reactive({})
const sudahMasuk = (el) => {
  const target = el.matches('.proj-back') ? el : el.querySelector('.more')
  if (target) target.focus({ preventScroll: true })
}

// Menu aktif mengikuti posisi scroll
const aktif = ref('')
let io
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) aktif.value = e.target.id }),
    { rootMargin: '-35% 0px -60% 0px' })
  nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el) })
})
onMounted(() => { document.addEventListener('click', tutupTip); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { io && io.disconnect(); document.removeEventListener('click', tutupTip); document.removeEventListener('keydown', onKey) })
</script>

<template>
  <a class="skip" href="#konten">Lewati ke konten</a>
  <div class="progress" aria-hidden="true"></div>

  <header class="bar">
    <div class="wrap bar-in">
      <a class="brand" href="#top">{{ profile.nama }}</a>
      <nav aria-label="Navigasi utama">
        <a v-for="n in nav" :key="n.id" :href="'#' + n.id" :class="{ on: aktif === n.id }" :aria-current="aktif === n.id ? 'true' : undefined">{{ n.label }}</a>
      </nav>
      <a class="btn small" href="#kontak">Hubungi</a>
    </div>
  </header>

  <main id="konten">
    <!-- HERO -->
    <section id="top" class="hero">
      <div class="wrap hero-in">
        <div class="hero-copy">
          <h1>{{ profile.nama }}<span class="gelar">, {{ profile.gelar }}</span></h1>
          <p class="hero-role">{{ profile.peran }}</p>
          <p v-if="profile.status" class="status">{{ profile.status }}</p>
          <p class="cta">
            <a class="btn" href="#project">Lihat project</a>
            <a v-if="profile.cv" class="btn ghost" :href="profile.cv" download>Unduh CV</a>
            <a class="btn ghost" href="#kontak">Hubungi saya</a>
          </p>
        </div>
        <span class="script hero-script" aria-hidden="true">Creative</span>
        <Photo class="hero-photo" :src="profile.fotoHero" label="Foto cutout (PNG transparan)" ratio="3 / 4" />
        <div class="hero-word" aria-hidden="true"><span v-for="(c, i) in 'PORTOFOLIO'" :key="i" :style="{ '--i': i }">{{ c }}</span></div>
      </div>
      <Butterfly style="--t: 14%; --l: 52%; --s: 64px" />
      <Butterfly style="--t: 46%; --l: 88%; --s: 48px; --dl: -6s" />
    </section>

    <div class="marquee-wrap" aria-hidden="true">
      <div class="marquee">
        <div class="track">
          <span v-for="n in 2" :key="n"><b v-for="t in ticker" :key="t">{{ t }}</b></span>
        </div>
      </div>
    </div>

    <!-- TENTANG -->
    <section class="section about">
      <div class="wrap split">
        <div>
          <h2 class="big"><span>{{ profile.namaLengkap }}<small class="gelar">, {{ profile.gelar }}</small></span></h2>
          <p class="script sig">{{ profile.peran }}</p>
          <p v-for="(p, i) in paragraf" :key="i" class="lead" :class="{ first: i === 0 }">{{ p }}</p>
        </div>
        <Photo :src="profile.fotoTentang" label="Foto cutout (PNG transparan)" ratio="3 / 4" />
      </div>
    </section>

    <!-- SOROTAN -->
    <section class="dark stats" aria-label="Sorotan">
      <div class="wrap stats-in">
        <p v-for="o in sorotan" :key="o.label"><b><CountUp :value="o.angka" /></b>{{ o.label }}</p>
      </div>
    </section>

    <!-- SKILL -->
    <section id="skill" class="section">
      <div class="wrap">
        <div class="skill-head">
          <h2 class="big"><span>MY SKILL</span></h2>
          <button type="button" class="switch" role="switch" :aria-checked="detailSkill" @click="detailSkill = !detailSkill; tutupTip()">
            <span class="knob" aria-hidden="true"></span>Tampilkan detail
          </button>
        </div>
        <div class="skill-wrap">
          <ul v-if="!detailSkill" class="points" aria-label="Daftar skill">
            <li v-for="(s, i) in skills" :key="s.judul" :class="{ open: tip === i }">
              <button type="button" class="point" :aria-describedby="'tip' + i" @mouseenter="tip = i" @mouseleave="tip = -1" @focus="tip = i" @blur="tip = -1" @click.stop="tip = i">{{ s.judul }}</button>
              <span :id="'tip' + i" role="tooltip" class="tip">{{ s.isi }}</span>
            </li>
          </ul>
          <div v-else class="skill-list">
            <article v-for="s in skills" :key="s.judul" class="card">
              <h3>{{ s.judul }}</h3>
              <p>{{ s.isi }}</p>
            </article>
          </div>
          <Photo class="polaroid" :src="fotoSkill" label="Foto polaroid" ratio="1 / 1" />
        </div>
      </div>
    </section>

    <!-- TOOLS & PENDIDIKAN -->
    <section class="section tight">
      <div class="wrap split top">
        <div>
          <h2 class="big"><span>TOOLS</span></h2>
          <div v-for="t in tools" :key="t.grup" class="tool">
            <h3>{{ t.grup }}</h3>
            <ul class="tool-grid">
              <li v-for="i in t.item" :key="i.nama">
                <span v-if="i.ikon" class="ico" aria-hidden="true"><span v-for="k in i.ikon" :key="k" v-html="ikon[k]"></span></span>
                <span v-else class="ico init" aria-hidden="true">{{ i.nama[0] }}</span>
                {{ i.nama }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="big"><span>PENDIDIKAN</span></h2>
          <article v-for="e in pendidikan" :key="e.judul" class="card edu">
            <h3>{{ e.judul }}</h3>
            <p>{{ e.tempat }}</p>
            <p v-if="e.ket" class="edu-meta"><time>{{ e.ket }}</time><b v-if="e.ipk">{{ e.ipk }}</b></p>
          </article>
        </div>
      </div>
    </section>

    <!-- KOMUNIKASI -->
    <section class="section tight">
      <div class="wrap split top">
        <div>
          <p class="script note">darimana belajar soal</p>
          <h2 class="big"><span>KOMUNIKASI</span></h2>
          <ul class="agenda">
            <li v-for="k in komunikasi" :key="k"><span>{{ pecah(k).judul }}</span><time>{{ pecah(k).tanggal }}</time></li>
          </ul>
        </div>
        <Collage :photos="fotoKomunikasi" label="Foto kegiatan" />
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="pengalaman" class="section">
      <div class="wrap">
        <h2 class="big"><span>BEST EXPERIENCE</span></h2>
        <div class="jobs">
          <article v-for="e in experience" :key="e.judul" class="job">
            <header>
              <h3>{{ e.judul }}</h3>
              <p v-if="e.tempat" class="tempat">{{ e.tempat }}</p>
              <p class="job-sum">{{ e.isi }}</p>
              <div v-for="g in [{ k: 'Skill', v: e.skill }, { k: 'Tools', v: e.tools }]" :key="g.k">
                <div v-if="g.v && g.v.length" class="chips">
                  <span class="chips-label">{{ g.k }}</span>
                  <ul><li v-for="(x, i) in g.v" :key="x + i" :class="'v' + (i % 4)">{{ x }}</li></ul>
                </div>
              </div>
            </header>
            <div class="job-body">
              <ul v-if="e.poin" class="poin"><li v-for="x in e.poin" :key="x">{{ x }}</li></ul>
              <Collage row :photos="e.foto" :label="'Foto ' + e.judul" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- UI/UX -->
    <section class="section tight">
      <div class="wrap">
        <p class="script note">as</p>
        <h2 class="big"><span>UI/UX DESIGNER</span></h2>
        <p class="links">
          <template v-for="l in uiux.link" :key="l.label">
            <a v-if="adaLink(l.url)" class="pill" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
            <span v-else class="pill soon">{{ l.label }}: link menyusul</span>
          </template>
        </p>
        <div class="ui-grid">
          <Photo v-for="(f, i) in uiux.foto" :key="i" :src="f" :label="'Desain UI ' + (i + 1)" ratio="16 / 10" />
        </div>
      </div>
    </section>

    <!-- PROJECT -->
    <section id="project" class="section dark">
      <div class="wrap">
        <h2 class="big"><span>PROJECT KULIAH</span></h2>
        <div class="proj-grid">
          <article v-for="(p, n) in projects" :key="p.judul">
            <Transition name="swap" mode="out-in" @after-enter="sudahMasuk">
              <div v-if="!buka[p.judul]" key="depan" class="proj-front">
                <div class="proj-info">
                  <h3>{{ p.judul }}</h3>
                  <p class="jenis">{{ p.jenis }}</p>
                  <p v-if="p.isi" class="jenis">{{ p.isi }}</p>
                  <p v-if="p.peran" class="role"><span>Peran</span>{{ p.peran }}</p>
                  <div v-if="p.stack && p.stack.length" class="mini"><span>Tech stack</span><ul class="caps"><li v-for="x in p.stack" :key="x">{{ x }}</li></ul></div>
                  <div v-if="p.skill && p.skill.length" class="mini"><span>Skill</span><ul class="caps alt"><li v-for="x in p.skill" :key="x">{{ x }}</li></ul></div>
                  <p class="links">
                    <template v-for="l in p.link" :key="l.label">
                      <a v-if="adaLink(l.url)" class="pill" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
                      <span v-else class="pill soon">{{ l.label }}: link menyusul</span>
                    </template>
                  </p>
                  <button type="button" class="more" :aria-expanded="false" :aria-controls="'detail-' + n" @click="buka[p.judul] = true">
                    Baca selengkapnya
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                </div>
                <div class="gallery">
                  <Photo v-for="(f, i) in p.foto" :key="i" :src="f" :label="p.judul + ' ' + (i + 1)" ratio="16 / 10" />
                </div>
              </div>
              <div v-else :id="'detail-' + n" key="detail" class="proj-back" tabindex="-1" :aria-label="'Detail ' + p.judul">
                <div class="back-head">
                  <div>
                    <h3>{{ p.judul }}</h3>
                    <p class="jenis">{{ p.jenis }}</p>
                  </div>
                  <button type="button" class="more back" :aria-expanded="true" :aria-controls="'detail-' + n" @click="buka[p.judul] = false">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    Kembali ke ringkasan
                  </button>
                </div>
                <div class="detail-grid">
                  <section><h4>Deskripsi</h4><p :class="{ soon: !p.deskripsi }">{{ p.deskripsi || 'Deskripsi project menyusul.' }}</p></section>
                  <section><h4>Key insight</h4><p :class="{ soon: !p.insight }">{{ p.insight || 'Key insight menyusul.' }}</p></section>
                  <section><h4>Outcome</h4><p :class="{ soon: !p.outcome }">{{ p.outcome || 'Outcome menyusul.' }}</p></section>
                </div>
              </div>
            </Transition>
          </article>
        </div>
      </div>
    </section>

    <!-- ROBLOX -->
    <section id="roblox" class="section pink">
      <div class="wrap">
        <p class="script note">{{ roblox.script }}</p>
        <h2 class="big"><span>{{ roblox.judul }}</span></h2>
        <p v-if="roblox.sub" class="eq">{{ roblox.sub }}</p>
        <p class="lead">{{ roblox.isi }}</p>
        <article v-for="g in roblox.maps" :key="g.judul" class="map">
          <div>
            <h3 class="map-title">{{ g.judul }}</h3>
            <p v-if="g.badge" class="badge">{{ g.badge }}</p>
            <p v-if="g.isi">{{ g.isi }}</p>
            <p class="links">
              <template v-for="l in g.link" :key="l.label">
                <a v-if="adaLink(l.url)" class="pill" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
                <span v-else class="pill soon">{{ l.label }}: link menyusul</span>
              </template>
            </p>
          </div>
          <Collage :photos="g.foto" :label="g.judul" wide />
        </article>
      </div>
    </section>

    <!-- SERTIFIKAT -->
    <section id="sertifikat" class="section">
      <div class="wrap">
        <h2 class="big"><span>CERTIFICATES &amp; ACHIEVEMENT</span></h2>
        <ul class="certs">
          <li v-for="c in sertifikat" :key="c.judul">
            <figure class="cert" tabindex="0">
              <Photo :src="c.foto" :label="'Sertifikat: ' + c.judul" ratio="4 / 3" />
              <figcaption><b>{{ c.judul }}</b><span>{{ c.ket }}</span></figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <!-- KONTAK -->
    <section id="kontak" class="section center">
      <Butterfly style="--t: 14%; --l: 12%; --s: 60px" />
      <Butterfly style="--t: 58%; --l: 84%; --s: 46px; --dl: -5s" />
      <div class="wrap">
        <p class="script thanks">Thanks</p>
        <p v-if="profile.status" class="status">{{ profile.status }}</p>
        <ul class="contact-list">
          <li v-for="c in kontakAktif" :key="c.label">
            <a v-if="c.url" class="card" :href="c.url" target="_blank" rel="noopener"><b>{{ c.label }}</b><span>{{ c.teks || c.url }}</span></a>
            <div v-else class="card"><b>{{ c.label }}</b><span>{{ c.teks }}</span></div>
          </li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="wrap foot-in">
      <span>{{ profile.namaLengkap }}, {{ profile.gelar }}</span>
      <span>{{ profile.peran }}</span>
    </div>
  </footer>
</template>
