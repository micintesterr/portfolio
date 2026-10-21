// ============================================================
// SEMUA ISI WEBSITE ADA DI SINI. Edit teks/link di file ini saja.
// FOTO: taruh file gambar di folder public/img/, lalu isi
// dengan path-nya, contoh:  foto: '/img/profil.jpg'
// Kalau dikosongkan, website menampilkan kotak tempat foto.
// ============================================================

export const profile = {
  nama: 'Cantika Larasati',
  namaLengkap: 'Cantika Larasati Fatihah Perdana Putri',
  peran: 'Project Manager & Scrum Admin',
  tentang:
    'Mahasiswa D3 Teknik Informatika yang sedang mencari pekerjaan. Berpengalaman sebagai Project Manager, Scrum Admin, dan UI/UX Designer, serta aktif sebagai MC dan moderator di berbagai kegiatan. Terbiasa mengoordinasikan tim, menyusun timeline, memantau progres, dan memastikan project berjalan sesuai rencana.',
  status: 'Terbuka untuk peluang kerja', // kosongkan kalau tidak mau ditampilkan
  cv: '', // contoh: '/cv-cantika.pdf' (taruh file di folder public/). Kosong = tombol CV disembunyikan
  fotoHero: '',   // foto cutout PNG transparan (slide 1)
  fotoTentang: '', // foto cutout PNG transparan (slide 2)
}

export const skills = [
  { judul: 'Leadership', isi: 'Memiliki jiwa kepemimpinan, komunikasi, dan managemen yang baik. Tidak hanya memimpin namun juga berusaha mendengarkan saran masukan anggota lain.' },
  { judul: 'Time Management', isi: 'Double role pada pengerjaan project Middle Board Kodegiri, sebagai Project Manager & UI/UX Designer.' },
]
export const fotoSkill = ''

export const komunikasi = [
  'MC Donor Darah | Agustus 2024',
  'MC Bakti Sosial | Agustus 2024',
  'MC Malam Tirakatan | Agustus 2025',
  'Moderator Rapat Besar PRASASTI #8 | Januari 2024',
  'Moderator Rapat Besar II PRASASTI #9 | Januari 2025',
  'Moderator Upgrading | September 2024',
  'Moderator Latkermas | November 2024',
]
export const fotoKomunikasi = ['', '', '', '', ''] // 4-6 foto kegiatan; tambah/kurangi isi array sesuai jumlah foto

export const experience = [
  { judul: 'Scrum Admin', tempat: 'PT Solutionlabs Grup Indonesia',
    isi: 'Mendampingi Scrum Master menjaga ritme kerja tim developer sepanjang sprint.',
    poin: [
      'Mencatat laporan harian tiap developer: yang dikerjakan hari ini dan yang selesai kemarin.',
      'Merekap laporan harian menjadi laporan mingguan dan bulanan.',
      'Memantau pencapaian Story Point dan target bulanan tiap developer, lalu segera melapor ke Scrum Master kalau belum terpenuhi.',
      'Mencatat developer yang lembur.',
      'Membagikan task sprint dari Project Manager ke para developer sesuai project masing-masing.',
    ] },
  { judul: 'Roblox Solo Developer', isi: 'Merancang, menentukan scope, mendevelop fitur, mendesain map, testing, hingga publikasi dan promosi dilakukan secara mandiri.' },
  { judul: 'Project Manager', isi: 'Mengelola jalannya project, membuat timeline, melakukan update progress kepada stakeholder, dan memastikan keberjalanan project sesuai timeline.' },
  { judul: 'UI/UX Designer', isi: 'Membuat dan merancang tampilan sistem supaya user friendly dan nyaman dilihat.' },
]

export const middleBoard = {
  judul: 'Middle Board Kodegiri',
  tanggal: '17 Februari - 30 Juni 2025',
  isi: 'Project ini membuat sistem untuk mengelola project di Kodegiri. Metode pengembangan yang kami gunakan adalah scrum dengan membagi task-task dalam beberapa sprint. Dikerjakan oleh 10 orang yang terbagi menjadi 2 tim. Maka dari itu diperlukan komunikasi yang baik dalam pengerjaan project.',
  foto: ['', '', '', ''], // screenshot desktop/laptop sistem (dashboard, project allocation, dst.)
  // Studi kasus: isi teksnya, kolom yang kosong tidak ditampilkan
  caseStudy: [
    { judul: 'Peran saya', isi: '' },
    { judul: 'Tantangan', isi: '' },
    { judul: 'Hasil', isi: '' },
  ],
}

export const dokumentasi = {
  link: [
    { label: 'Middle Board - Project Management', url: '#' }, // GANTI dengan link board kamu
    { label: 'Middle Board - Timeline & Gantt Overview', url: '#' }, // GANTI dengan link spreadsheet kamu
  ],
  foto: ['', ''], // screenshot board & Gantt
  upProgress: 'Melakukan update progress kepada stakeholder setiap seminggu sekali melalui Discord.',
  fotoUpProgress: '', // screenshot Discord (blur dulu email/password/IP kalau ada)
}

export const uiux = {
  link: [
    { label: 'Middle Board - UI/UX Design', url: '#' }, // GANTI dengan link Figma
    { label: 'Middle Board - Interactive Prototype', url: '#' }, // GANTI dengan link prototype
  ],
  foto: ['', '', '', '', '', ''], // screenshot desktop/laptop desain (login, edit profile, warning, dst.)
}

const slot = (n) => Array(n).fill('') // n kotak foto kosong

// foto: 6 slot, utamakan screenshot desktop/laptop. Isi path gambar, contoh ['/img/a.png', '/img/b.png']
// Slot yang tidak terpakai: hapus saja dari array.
// url kosong = ditampilkan "link menyusul"
export const projects = [
  { judul: 'PawOn Sight', jenis: 'Website Management Inventory', peran: 'Project Manager', foto: slot(6),
    link: [{ label: 'GitHub', url: 'https://github.com/nab-cat/pawonsight3' }] },
  { judul: 'Help Desk', jenis: 'Website Management Inventory', peran: 'Project Manager', foto: slot(6),
    link: [
      { label: 'Live', url: 'https://helpdesk.magangslab.store' },
      { label: 'Frontend', url: 'https://github.com/notcikken/HD-ECOM-FE' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/HD-ECOM-BE' },
    ] },
  { judul: "Bloomkeeper's Balance", jenis: 'Game Greenfoot', foto: slot(6),
    link: [{ label: 'Main di Greenfoot', url: 'https://www.greenfoot.org/scenarios/33067' }] },
  { judul: 'Middle Board Kodegiri', jenis: 'Management Project', peran: 'Project Manager', foto: slot(6),
    link: [
      { label: 'Frontend', url: 'https://github.com/kodegiri/MiddleBoard-FE' },
      { label: 'Backend', url: 'https://github.com/kodegiri/MiddleBoard-BE' },
    ] },
  { judul: 'Slicing Sistem', jenis: 'Slicing Design UI/UX', foto: slot(6),
    link: [{ label: 'GitHub', url: 'https://github.com/micintesterr/Slicing-Sistem-2' }] },
  { judul: 'Sistem YOTA', jenis: 'Aplikasi CMS', foto: slot(6),
    link: [
      { label: 'Frontend', url: 'https://github.com/Vilamuzz/yota-frontend' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/yota-backend' },
    ] },
]

// Bagian khusus Roblox. isi (deskripsi) tiap map opsional: kosong = tidak tampil.
export const roblox = {
  script: 'satu orang, satu map',
  judul: 'WORLD BUILDER',
  isi: 'Dirancang, dibangun, diuji, dipublikasikan, sampai dipromosikan sendirian. Dari scope, fitur, sampai desain map, semuanya dikerjakan solo.',
  maps: [
    { judul: 'Mount Ducky', badge: 'Sudah dimainkan oleh 6M (6 juta) orang', isi: '', foto: slot(6),
      link: [{ label: 'Main di Roblox', url: '' }] }, // isi url kalau sudah ada
    { judul: 'Mount Kyowo', badge: '', isi: '', foto: slot(6),
      link: [{ label: 'Main di Roblox', url: 'https://www.roblox.com/games/127171668993669/X10-MOUNT-KYOWO' }] },
    { judul: 'Photoblox', badge: '', isi: 'Game photobooth di Roblox.', foto: slot(6),
      link: [{ label: 'Main di Roblox', url: 'https://www.roblox.com/games/136728817343985/Photoblox' }] },
  ],
}

export const sorotan = [
  { angka: '6M', label: 'pemain di map Mount Ducky' },
  { angka: '10', label: 'anggota tim di Middle Board' },
  { angka: '2', label: 'tim scrum yang dikoordinasi' },
  { angka: String(projects.length + roblox.maps.length), label: 'project dikerjakan' },
]

// Edit bebas sesuai tools yang benar-benar kamu pakai
export const tools = [
  { grup: 'Manajemen Proyek', item: ['Scrum', 'Sprint Planning', 'Story Point', 'Laporan harian, mingguan, bulanan', 'Gantt Chart', 'Laporan progress ke stakeholder'] },
  { grup: 'Desain', item: ['Figma', 'UI/UX Design', 'Interactive Prototype'] },
  { grup: 'Teknis', item: ['Vue.js', 'Golang', 'Git & GitHub', 'Roblox Studio'] },
]
// ket: isi tahun angkatan/lulus, contoh '2023 - 2026'
export const pendidikan = [
  { judul: 'D3 Teknik Informatika', tempat: 'Sekolah Vokasi, Universitas Sebelas Maret', ket: '' },
]

// Tampil kalau `teks` terisi. url kosong = tampil sebagai teks biasa.
// GANTI semua yang bertanda GANTI dengan akun aslimu.
export const contacts = [
  { label: 'GitHub', teks: 'micintesterr', url: 'https://github.com/micintesterr' },
  { label: 'Discord', teks: 'yayassvv', url: 'https://discordapp.com/users/1303005839962931382' },
  { label: 'Instagram', teks: '@yayassv_v', url: 'https://instagram.com/yayassv_v' },
  { label: 'LinkedIn', teks: '', url: '' }, // contoh: teks 'Cantika Larasati', url 'https://linkedin.com/in/...'
  { label: 'Email', teks: 'micintesterr@gmail.com', url: 'mailto:micintesterr@gmail.com' },    // contoh: teks 'nama@email.com', url 'mailto:nama@email.com'
]
