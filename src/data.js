// ============================================================
// SEMUA ISI WEBSITE ADA DI SINI. Edit teks/link di file ini saja.
// FOTO: taruh file gambar di folder public/img/, lalu isi
// dengan path-nya, contoh:  foto: '/img/profil.jpg'
// Kalau dikosongkan, website menampilkan kotak tempat foto.
// ============================================================

export const profile = {
  nama: 'Cantika Larasati',
  gelar: 'A.Md.Kom.',
  namaLengkap: 'Cantika Larasati Fatihah Perdana Putri',
  peran: 'Project Manager & Product Developer',
  tentang:
    'Lulusan D3 Teknik Informatika UNS, berpengalaman mengembangkan produk digital berbasis Roblox serta merancang sistem informasi. Memiliki perpaduan kemampuan project management, product thinking, dan UI/UX design, mulai dari analisis kebutuhan, perancangan fitur, hingga koordinasi pengembangan produk. Berorientasi pada solusi, terstruktur dalam bekerja, dan tertarik menjembatani kebutuhan pengguna dengan solusi teknologi yang berdampak.\n\nBerfokus mengembangkan karier di bidang Project Management dan Product Development dengan terus memperkuat pemahaman teknis, kemampuan kolaborasi, dan pengalaman mengelola proyek dari perencanaan hingga implementasi.',
  status: 'Terbuka untuk peluang kerja', // kosongkan kalau tidak mau ditampilkan
  cv: '', // contoh: '/cv-cantika.pdf' (taruh file di folder public/). Kosong = tombol CV disembunyikan
  fotoHero: '',   // foto cutout PNG transparan (slide 1)
  fotoTentang: '', // foto cutout PNG transparan (slide 2)
}

export const skills = [
  { judul: 'Project Management', isi: 'Berpengalaman mengorganisasi pekerjaan proyek, menyusun task dan timeline, serta memantau progres menggunakan Microsoft Excel/Spreadsheet dan Trello.' },
  { judul: 'Public Speaking', isi: 'Memiliki pengalaman sebagai MC dan moderator dalam kegiatan, dengan kemampuan menyampaikan informasi serta menjaga alur acara.' },
  { judul: 'Product Development', isi: 'Berpengalaman mengembangkan produk digital berbasis Roblox dan merancang solusi sistem informasi dengan mempertimbangkan kebutuhan pengguna serta tujuan produk.' },
  { judul: 'Agile & Scrum Fundamentals', isi: 'Memahami konsep dasar Agile dan Scrum serta penerapannya sebagai pendekatan dalam perencanaan dan pengembangan proyek.' },
  { judul: 'Requirements Analysis', isi: 'Mampu mengidentifikasi kebutuhan pengguna, merumuskan kebutuhan sistem, dan menentukan fitur yang sesuai dengan permasalahan yang ingin diselesaikan.' },
  { judul: 'UI/UX Design', isi: 'Berpengalaman merancang antarmuka, mengatur hierarki visual, dan menyusun alur interaksi untuk mendukung pengalaman pengguna yang intuitif.' },
  { judul: 'Task & Timeline Management', isi: 'Terbiasa memecah pekerjaan menjadi tugas-tugas terstruktur, menentukan prioritas, dan mengatur target penyelesaian proyek.' },
  { judul: 'Problem Solving', isi: 'Terbiasa mengidentifikasi kendala selama pengembangan produk, mengeksplorasi alternatif solusi, dan melakukan perbaikan secara bertahap.' },
  { judul: 'Product Thinking', isi: 'Memiliki ketertarikan dan pengalaman mengembangkan produk dari ide menjadi produk digital, dengan mempertimbangkan fungsi, pengalaman pengguna, dan potensi pengembangannya.' },
  { judul: 'Communication & Coordination', isi: 'Mampu menyampaikan ide dan kebutuhan secara terstruktur serta membantu menyelaraskan pemahaman dalam pengerjaan proyek.' },
  { judul: 'Teaching & Knowledge Sharing', isi: 'Berpengalaman mengajar les privat dan menyusun latihan pembelajaran dengan menyesuaikan materi serta metode penyampaian berdasarkan kebutuhan siswa.' },
  { judul: 'Data Entry & Data Management', isi: 'Terbiasa memasukkan, memperbarui, dan mengorganisasi informasi secara terstruktur untuk mendukung kebutuhan administrasi dan pengelolaan proyek.' },
  { judul: 'Microsoft Excel & Google Sheets', isi: 'Berpengalaman menggunakan spreadsheet untuk mencatat data, menyusun laporan, memantau progres pekerjaan, dan mengelola informasi agar mudah dibaca serta diperbarui.' },
  { judul: 'Administrative Support', isi: 'Berpengalaman mendukung kegiatan administrasi proyek melalui pencatatan informasi, pembaruan data, pengelolaan dokumen, dan penyusunan laporan secara terstruktur.' },
  { judul: 'Reporting & Documentation', isi: 'Berpengalaman mencatat laporan harian serta mengonsolidasikan informasi menjadi laporan mingguan dan bulanan untuk membantu pemantauan progres pekerjaan.' },
]
export const fotoSkill = ''

export const komunikasi = [
  'MC Donor Darah | Agustus 2024',
  'MC Bakti Sosial | Agustus 2024',
  'MC Malam Tirakatan | Agustus 2025',
  'MC Malam Tirakatan | Agustus 2026',
  'Moderator Rapat Besar PRASASTI #8 | Januari 2024',
  'Moderator Upgrading | September 2024',
  'Moderator Latkermas | November 2024',
  'Moderator Rapat Besar II PRASASTI #9 | Januari 2025',
]
export const fotoKomunikasi = ['', '', '', '', ''] // 4-6 foto kegiatan; tambah/kurangi isi array sesuai jumlah foto

// foto: tempat foto dokumentasi tiap pengalaman. Isi path gambar, contoh ['/img/kodegiri-1.jpg']. Kosong = kotak tempat foto.
export const experience = [
  { judul: 'Project Manager & UI/UX Designer', tempat: 'Kodegiri | Anak Perusahaan PT Star Software Indonesia',
    isi: 'Mengelola perencanaan dan progres pengembangan proyek bersama dua tim yang berkolaborasi dalam satu produk, sekaligus mengambil tanggung jawab UI/UX Design untuk memastikan kebutuhan desain tetap terpenuhi.',
    poin: [
      'Menyusun todo list dan memecah kebutuhan proyek menjadi task yang terstruktur.',
      'Membagi task ke dalam sprint serta menentukan target penyelesaian untuk setiap periode sprint.',
      'Memantau progres pengerjaan dan memastikan task diselesaikan sebelum deadline sprint berakhir.',
      'Menyampaikan update progres kepada stakeholder melalui Discord, termasuk task yang telah selesai, task yang belum terselesaikan, dan kendala selama pengembangan.',
      'Mengambil alih tanggung jawab UI/UX Designer, mulai dari merancang antarmuka hingga menyiapkan desain yang dibutuhkan untuk implementasi proyek.',
    ],
    foto: ['', '', ''],
    skill: ['Skill 1', 'Skill 2', 'Skill 3'], // placeholder, isi nanti
    tools: ['Tool 1', 'Tool 2', 'Tool 3'] },
  { judul: 'Scrum Admin', tempat: 'PT Solutionlabs Grup Indonesia',
    isi: 'Mendampingi Scrum Master menjaga ritme kerja tim developer sepanjang sprint.',
    poin: [
      'Mencatat laporan harian tiap developer: yang dikerjakan hari ini dan yang selesai kemarin.',
      'Merekap laporan harian menjadi laporan mingguan dan bulanan.',
      'Memantau pencapaian Story Point dan target bulanan tiap developer, lalu segera melapor ke Scrum Master kalau belum terpenuhi.',
      'Mencatat developer yang lembur.',
      'Membagikan task sprint dari Project Manager ke para developer sesuai project masing-masing.',
    ],
    foto: ['', '', ''],
    skill: ['Skill 1', 'Skill 2', 'Skill 3'], // placeholder, isi nanti
    tools: ['Tool 1', 'Tool 2', 'Tool 3'] },
  { judul: 'Roblox Solo Developer', tempat: 'Independent / Self-Initiated Projects',
    isi: 'Mengembangkan produk game berbasis Roblox secara mandiri, mulai dari perencanaan konsep, penentuan scope, pengembangan fitur, desain map dan UI, hingga testing, publikasi, serta promosi untuk menjangkau pemain.',
    poin: [
      'Merancang konsep dan gameplay dengan menentukan tema, mekanisme permainan, fitur utama, serta pengalaman yang ingin diberikan kepada pemain.',
      'Mengelola scope dan proses pengembangan secara mandiri, mulai dari menentukan prioritas fitur hingga menyesuaikan pengerjaan dengan waktu dan sumber daya yang tersedia.',
      'Mengembangkan dan mengimplementasikan fitur game menggunakan Roblox Studio dan Lua/Luau, termasuk melakukan penyesuaian serta troubleshooting selama proses pengembangan.',
      'Mendesain map dan antarmuka pengguna dengan memperhatikan estetika visual, navigasi, dan kenyamanan pemain.',
      'Melakukan testing dan iterasi produk untuk memeriksa fungsionalitas fitur, menemukan kendala, dan menyempurnakan pengalaman bermain.',
      'Mengelola publikasi dan promosi game serta mengamati respons dan statistik kunjungan untuk mengevaluasi performa produk setelah diluncurkan.',
      'Mengeksplorasi potensi monetisasi produk melalui fitur dan item dalam game, dengan mempertimbangkan pengalaman pemain dan keberlanjutan produk.',
    ],
    foto: ['', '', ''],
    skill: ['Skill 1', 'Skill 2', 'Skill 3'], // placeholder, isi nanti
    tools: ['Tool 1', 'Tool 2', 'Tool 3'] },
]

export const uiux = {
  link: [
    { label: 'Middle Board - UI/UX Design', url: '#' }, // GANTI dengan link Figma
    { label: 'Middle Board - Interactive Prototype', url: '#' }, // GANTI dengan link prototype
  ],
  foto: ['', '', '', '', '', ''], // screenshot desktop/laptop desain (login, edit profile, warning, dst.)
}

const slot = (n) => Array(n).fill('') // n kotak foto kosong

// Tiap project punya 2 halaman:
//  halaman 1 = judul, stack, skill, peran, link, dokumentasi (foto)
//  halaman 2 = deskripsi, insight, outcome (tombol "Baca selengkapnya")
// foto: 6 slot, utamakan screenshot desktop/laptop. Isi path gambar, contoh ['/img/a.png', '/img/b.png']
// stack / skill: isi dengan teks, tampil sebagai kapsul. Yang masih 'menyusul' perlu kamu ganti.
// deskripsi / insight / outcome: kosong = tampil "menyusul".
// url kosong = ditampilkan "link menyusul"
export const projects = [
  { judul: 'Sistem YOTA', jenis: 'Sistem Informasi Yayasan Sosial dan Fundraising', isi: 'Website Sosial Fundraising', peran: 'Front End Developer & Back End Developer', foto: slot(6),
    stack: ['Vue.js', 'Golang (Go)'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [
      { label: 'Frontend', url: 'https://github.com/Vilamuzz/yota-frontend' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/yota-backend' },
    ] },
  { judul: 'Help Desk', jenis: 'Website Management Inventory', peran: 'Project Manager', foto: slot(6),
    stack: ['Tech stack 1', 'Tech stack 2'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [
      { label: 'Live', url: 'https://helpdesk.magangslab.store' },
      { label: 'Frontend', url: 'https://github.com/notcikken/HD-ECOM-FE' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/HD-ECOM-BE' },
    ] },
  { judul: 'Middle Board Kodegiri', jenis: 'Management Project', peran: 'Project Manager & UI/UX Designer', foto: slot(6),
    stack: ['Tech stack 1', 'Tech stack 2'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [
      { label: 'Frontend', url: 'https://github.com/kodegiri/MiddleBoard-FE' },
      { label: 'Backend', url: 'https://github.com/kodegiri/MiddleBoard-BE' },
    ] },
  { judul: 'PawOn Sight', jenis: 'Website Management Inventory', peran: 'Project Manager', foto: slot(6),
    stack: ['Tech stack 1', 'Tech stack 2'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [{ label: 'GitHub', url: 'https://github.com/nab-cat/pawonsight3' }] },
  { judul: "Bloomkeeper's Balance", jenis: 'Game Greenfoot', foto: slot(6),
    stack: ['Java', 'Greenfoot'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [{ label: 'Main di Greenfoot', url: 'https://www.greenfoot.org/scenarios/33067' }] },
  { judul: 'Slicing Sistem', jenis: 'Slicing Design UI/UX', foto: slot(6),
    stack: ['Tech stack 1', 'Tech stack 2'], skill: ['Skill 1', 'Skill 2'],
    deskripsi: '', insight: '', outcome: '',
    link: [{ label: 'GitHub', url: 'https://github.com/micintesterr/Slicing-Sistem-2' }] },
]

// Bagian khusus Roblox. isi (deskripsi) tiap map opsional: kosong = tidak tampil.
export const roblox = {
  script: 'kita harus punya karya',
  sub: 'World Builder = Roblox Developer',
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

// ikon: kunci di src/icons.js (boleh lebih dari satu). Tanpa ikon = tampil inisial.
export const tools = [
  { grup: 'Manajemen Proyek & Administrasi', item: [
    { nama: 'Microsoft Excel', ikon: ['excel'] }, { nama: 'Google Sheets', ikon: ['sheets'] },
    { nama: 'Microsoft Word', ikon: ['word'] }, { nama: 'Google Docs', ikon: ['docs'] },
    { nama: 'Trello', ikon: ['trello'] }, { nama: 'Clockify', ikon: ['clockify'] },
    { nama: 'Microsoft PowerPoint', ikon: ['powerpoint'] } ] },
  { grup: 'Kolaborasi & Komunikasi', item: [
    { nama: 'Discord', ikon: ['discord'] }, { nama: 'WhatsApp', ikon: ['whatsapp'] },
    { nama: 'Google Drive', ikon: ['drive'] }, { nama: 'Gmail', ikon: ['gmail'] },
    { nama: 'Google Calendar', ikon: ['calendar'] } ] },
  { grup: 'Desain & Dokumentasi Visual', item: [
    { nama: 'Figma', ikon: ['figma'] }, { nama: 'Canva', ikon: ['canva'] },
    { nama: 'diagrams.net (draw.io)', ikon: ['drawio'] } ] },
  { grup: 'Teknis & Pengembangan', item: [
    { nama: 'Roblox Studio', ikon: ['roblox'] }, { nama: 'Visual Studio Code', ikon: ['vscode'] },
    { nama: 'Vue.js', ikon: ['vue'] }, { nama: 'Golang (Go)', ikon: ['go'] },
    { nama: 'Git & GitHub', ikon: ['git', 'github'] }, { nama: 'PostgreSQL', ikon: ['postgres'] } ] },
]
export const pendidikan = [
  { judul: 'D3 Teknik Informatika', tempat: 'Sekolah Vokasi, Universitas Sebelas Maret', ket: 'Agustus 2023 - Juli 2026', ipk: 'IPK 3.90/4.00' },
]

// Tampil kalau `teks` terisi. url kosong = tampil sebagai teks biasa.
// Kontak yang masih mengandung kata GANTI otomatis disembunyikan.
export const contacts = [
  { label: 'GitHub', teks: 'micintesterr', url: 'https://github.com/micintesterr' },
  { label: 'Discord', teks: 'yayassvv', url: 'https://discordapp.com/users/1303005839962931382' },
  { label: 'Instagram', teks: '@yayassv_v', url: 'https://www.instagram.com/yayassv_v/' },
  { label: 'LinkedIn', teks: '', url: '' }, // contoh: teks 'Cantika Larasati', url 'https://linkedin.com/in/...'
  { label: 'Email', teks: 'cclarasatii@gmail.com', url: 'mailto:cclarasatii@gmail.com' },
]

// Sertifikat & pencapaian. foto = gambar sertifikat (contoh '/img/sertifikat-1.jpg').
// judul + ket tampil saat kartu di-hover. Placeholder, isi nanti.
export const sertifikat = [
  { judul: 'Nama Sertifikat 1', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
  { judul: 'Nama Sertifikat 2', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
  { judul: 'Nama Sertifikat 3', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
  { judul: 'Nama Sertifikat 4', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
  { judul: 'Nama Sertifikat 5', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
  { judul: 'Nama Sertifikat 6', ket: 'Penerbit, tahun, dan deskripsi singkat.', foto: '' },
]
