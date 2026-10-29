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
    skill: ['Project Planning', 'Sprint Planning & Task Allocation', 'Cross-Team Coordination', 'Stakeholder Communication', 'Problem Solving'], // placeholder, isi nanti
    tools: ['Microsoft Excel', 'Google Spreadsheet', 'Trello', 'Figma', 'Discord'] },
  { judul: 'Intern Scrum Admin', tempat: 'PT Solutionlabs Grup Indonesia',
    isi: 'Mendampingi Scrum Master menjaga ritme kerja tim developer sepanjang sprint.',
    poin: [
      'Mencatat laporan harian tiap developer: yang dikerjakan hari ini dan yang selesai kemarin.',
      'Merekap laporan harian menjadi laporan mingguan dan bulanan.',
      'Memantau pencapaian Story Point dan target bulanan tiap developer, lalu segera melapor ke Scrum Master kalau belum terpenuhi.',
      'Mencatat developer yang lembur.',
      'Membagikan task sprint dari Project Manager ke para developer sesuai project masing-masing.',
    ],
    foto: ['', '', ''],
    skill: ['Agile & Scrum Practices', 'Project Administration', 'Progress Tracking', 'Reporting', 'Coordination', 'Task Distribution', 'Team Communication'], // placeholder, isi nanti
    tools: ['Microsoft Excel', 'Google Spreadsheet', 'Clockify', 'Microsoft Teams'] },
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
    skill: ['Game Development', 'Gameplay Mechanics', 'Independent Work','Asset & Data Organization', 'Scripting & Debugging', 'Continuous Improvement', 'Quality Assurance (QA)'], // placeholder, isi nanti
    tools: ['Roblox Studio', 'Roblox Player', 'Luau/Lua'] },
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
    stack: ['Vue.js', 'Golang (Go)', 'PostgreSQL', 'Figma', 'Visual Studio Code', 'WSL Ubuntu'], skill: ['Requirements Analysis', 'Project Coordination', 'Front End Development', 'Back End Development', 'UI/UX Design'],
    deskripsi: 'Website fundraising dan pengelolaan yayasan sosial yang mendukung operasional yayasan, layanan ambulans, santunan anak asuh, serta pengelolaan donasi dan berbagai program sosial.', insight: 'End-to-End System Development, Requirements Analysis & Business Process Modeling, System Design & Workflow Planning, UI/UX Design, Role-Based Access & User Flow Design, Agile & Scrum Project Management, Stakeholder Needs Analysis, User Acceptance Testing (UAT)', outcome: 'Mengembangkan rancangan sistem informasi terintegrasi untuk mendukung pengelolaan yayasan, donasi, anak asuh, program sosial, dan operasional ambulans. Proyek ini mengubah kebutuhan operasional yayasan menjadi rancangan alur kerja dan fitur sistem yang lebih terstruktur, dengan fokus pada efisiensi dan transparansi.',
    link: [
      { label: 'Frontend', url: 'https://github.com/Vilamuzz/yota-frontend' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/yota-backend' },
    ] },
  { judul: 'Help Desk', jenis: 'Helpdesk System for E-Commerce Website', peran: 'Project Manager', foto: slot(6),
    stack: ['Vue.js', 'Golang (Go)', 'TypeScript', 'HTML'], skill: ['Team Collaboration', 'Reporting','Progress Tracking'],
    deskripsi: 'Website Help Desk berbasis chat untuk mendukung layanan pelanggan e-commerce, dengan tujuan memfasilitasi komunikasi dan penanganan pertanyaan atau kendala pelanggan.', insight: 'Project Management, Task Coordination, Requirements Understanding, Sprint & Timeline Management, Problem Solving', outcome: 'Berkontribusi dalam pengelolaan pengembangan aplikasi help desk dengan mengoordinasikan pekerjaan tim dan menjaga progres proyek sesuai target. Aplikasi dirancang untuk mendukung proses layanan pelanggan melalui komunikasi berbasis chat.',
    link: [
      { label: 'Live', url: 'https://helpdesk.magangslab.store' },
      { label: 'Frontend', url: 'https://github.com/notcikken/HD-ECOM-FE' },
      { label: 'Backend', url: 'https://github.com/Vilamuzz/HD-ECOM-BE' },
    ] },
  { judul: 'Middle Board Kodegiri', jenis: 'Management Project', peran: 'Project Manager & UI/UX Designer', foto: slot(6),
    stack: ['Vue.js', 'Laravel', 'PHP', 'Git/GitHub'], skill:['Project Planning', 'Sprint Planning & Task Allocation', 'Cross-Team Coordination', 'Stakeholder Communication', 'Problem Solving'],
    deskripsi: 'Website manajemen proyek untuk mengelola proses proyek dari tahap awal masuk hingga dokumentasi legalitas, termasuk pengelolaan informasi proyek dan alokasi sumber daya manusia yang terlibat.', insight: 'Project Management & Lifecycle Planning, Sprint Planning & Task Allocation, Timeline & Progress Tracking, Resource Management, Stakeholder Communication, Cross-Team Coordination, UI/UX Design & Problem Solving', outcome: 'Berkontribusi dalam pengelolaan pengembangan website manajemen proyek melalui penyusunan daftar tugas, pembagian pekerjaan ke dalam sprint, pemantauan progres, serta komunikasi status dan kendala kepada stakeholder. Turut mendukung kebutuhan desain UI/UX untuk menjaga kesesuaian sistem dengan kebutuhan pengguna.',
    link: [
      { label: 'Frontend', url: 'https://github.com/kodegiri/MiddleBoard-FE' },
      { label: 'Backend', url: 'https://github.com/kodegiri/MiddleBoard-BE' },
    ] },

  { judul: 'PawOn Sight', jenis: 'Website Management Inventory', peran: 'Project Manager', foto: slot(6),
    stack: ['Laravel', 'PHP', 'Blade', 'Vue.js', 'JavaScript', 'CSS'], skill: ['Project Management', 'Documentation', 'Reporting'],
    deskripsi: 'Website manajemen inventaris gudang untuk bisnis food and beverage (F&B), yang mendukung pemantauan stok barang, tanggal kedaluwarsa, serta informasi persediaan gudang.', insight: 'Project Management & Team Coordination, Requirements Analysis, Inventory Management Workflow Understanding, Task & Timeline Management, Progress Tracking & Reporting, Stakeholder Communication, Problem Solving & Prioritization', outcome: 'Berkontribusi dalam pengelolaan pengembangan sistem inventaris gudang dengan membantu mengarahkan pekerjaan tim berdasarkan kebutuhan. Sistem dirancang untuk membantu pengguna memantau persediaan secara lebih terstruktur.',
    link: [{ label: 'GitHub', url: 'https://github.com/nab-cat/pawonsight3' }] },
  
    { judul: "Bloomkeeper's Balance", jenis: 'Game Greenfoot', foto: slot(6),
    stack: ['Java', 'Greenfoot'], skill: ['Game Development Fundamentals', 'Object-Oriented Programming (OOP)','Programming Logic'],
    deskripsi: 'Game berbasis Greenfoot yang dikembangkan sebagai proyek perkuliahan. Game ini bertujuan untuk membantu anak-anak mengenal dan memahami konsep rantai makanan.', insight: 'Game Development Fundamentals, Programming Logic, Object-Oriented Programming (OOP), Game Mechanics Implementation, Game Testing & Debugging', outcome: 'Mengembangkan proyek game menggunakan Greenfoot sebagai sarana menerapkan logika pemrograman dan konsep pengembangan game dan OOP. Game ini dirancang untuk memberikan pengalaman belajar yang interaktif bagi anak-anak dalam memahami konsep rantai makanan.',
    link: [{ label: 'Main di Greenfoot', url: 'https://www.greenfoot.org/scenarios/33067' }] },
  
    { judul: 'Slicing Sistem', jenis: 'Slicing Design UI/UX', foto: slot(6),
    stack: ['HTML', 'TypeScript', 'JavaScript', 'Vue.js'], skill: ['Frontend Development Fundamentals', 'UI Slicing', 'Responsive Design'],
    deskripsi: 'Proyek implementasi desain antarmuka menjadi tampilan website menggunakan kode frontend, dengan fokus pada kesesuaian hasil implementasi terhadap desain yang menjadi acuan.', insight: 'UI Slicing & Design-to-Code Implementation, Frontend Development Fundamentals, Layout & Styling, Attention to Visual Detail, Responsive Web Design', outcome: 'Mengimplementasikan desain antarmuka menjadi tampilan website menggunakan teknologi frontend. Proyek ini melatih kemampuan menerjemahkan desain visual ke dalam struktur dan styling antarmuka, serta memperhatikan konsistensi layout dan detail tampilan.',
    link: [{ label: 'GitHub', url: 'https://github.com/micintesterr/Slicing-Sistem-2' }] },
]

// Bagian khusus Roblox. isi (deskripsi) tiap map opsional: kosong = tidak tampil.
export const roblox = {
  script: 'kita harus punya karya',
//sub: 'World Builder = Roblox Developer',
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
