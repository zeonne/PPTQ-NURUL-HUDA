import heroImg from "@/assets/hero.jpg";
import mosqueImg from "@/assets/mosque.jpg";
import libraryImg from "@/assets/library.jpg";
import dormitoryImg from "@/assets/dormitory.jpg";
import classroomImg from "@/assets/classroom.jpg";
import computerLabImg from "@/assets/computer-lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import diningImg from "@/assets/dining.jpg";
import tahfidzImg from "@/assets/tahfidz.jpg";
import languageImg from "@/assets/language.jpg";
import campusImg from "@/assets/campus.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import principalImg from "@/assets/principal.jpg";
import tapaksuci from "@/assets/tapaksuci.jpg";

import type {
  EventItem,
  Facility,
  Faq,
  GalleryItem,
  NavItem,
  NewsItem,
  Program,
  Teacher,
  TimelineEntry,
} from "@/types";

export const school = {
  name: "Pondok Pesantren Tahfizhul Qur'an Nurul Huda Magetan",
  shortName: "PPTQ Nurul Huda Magetan",
  tagline: "Mencetak generasi Qur’ani yang berilmu, berakhlak, dan beramal sesuai manhaj Ahlus Sunnah wal Jama’ah.",
  description:
    "Lembaga pendidikan Islam berasrama yang memadukan tahfizhul Qur’an, pendidikan diniyah, dan pendidikan umum dalam lingkungan yang tertib, sederhana, dan berorientasi pada pembentukan karakter.",
  address: "Dusun Secikal, RT/RW 04/01, Kenongomulyo, Nguntoronadi, Magetan, Jawa Timur, 63383.",
  phone: "0823 3883 2018",
  whatsapp: "6282338832018",
  whatsappDisplay: "+62 823-3883-2018",
  email: "pptq.nurulhuda1@gmail.com",
  admissionEmail: "pptq.nurulhuda1@gmail.com",
  hours: "Senin – Sabtu · 08.00 – 16.00 WIB",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.748536602933!2d111.46169481180323!3d-7.710109892275624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7997daa53592ff%3A0x2e52d67998e921e3!2sPPTQ%20NURUL%20HUDA%20MAGETAN!5e0!3m2!1sid!2sid!4v1787112514423!5m2!1sid!2sid",
  social: {
    instagram: "http://www.instagram.com/nurulhuda.pptq/",
    youtube: "http://www.youtube.com/@pptqnurulhuda1422",
    facebook: "http://www.facebook.com/nurulhuda.pptq",
    tiktok: "http://www.tiktok.com/@nurulhuda.pptq",
  },
};

export const images = {
  hero: heroImg,
  mosque: mosqueImg,
  library: libraryImg,
  dormitory: dormitoryImg,
  classroom: classroomImg,
  computerLab: computerLabImg,
  sports: sportsImg,
  dining: diningImg,
  tahfidz: tahfidzImg,
  language: languageImg,
  campus: campusImg,
  principal: principalImg,
};

export const navItems: NavItem[] = [
  { label: "Beranda", to: "/" },
  {
    label: "Profil",
    to: "/about",
    children: [
      { label: "Tentang Kami", to: "/about", description: "Sejarah, visi, misi, dan nilai" },
      // { label: "Dewan Guru", to: "/teachers", description: "Asatidz pengampu dan pembimbing" },
      { label: "Fasilitas", to: "/facilities", description: "Sarana belajar dan asrama" },
    ],
  },
  { label: "Program", to: "/programs" },
  {
    label: "Informasi",
    to: "/news",
    children: [
      { label: "Berita", to: "/news", description: "Kabar terbaru dari pesantren" },
      { label: "Galeri", to: "/gallery", description: "Foto dan video kegiatan" },
    ],
  },
  { label: "PSB", to: "/admissions" },
  { label: "Kontak", to: "/contact" },
];

export const stats = [
  { label: "Santri Aktif", value: 188, suffix: "+", description: "Putra & putri jenjang SMP–SMA" },
  { label: "Asatidz & Guru", value: 34, suffix: "+", description: "Hafidz/ah, sarjana diniyah & umum" },
  { label: "Alumni", value: 39, suffix: "", description: "Lulusan 3 angkatan" },
  { label: "Santri Hafidz/ah", value: 46, suffix: "+", description: "Selesai Hafalan 30Juz" },
];

export const advantages = [
  {
    icon: "BookOpenText",
    title: "Program Tahfidz Terstruktur",
    description:
      "Pembelajaran tahfizh dilakukan melalui halaqah, setoran hafalan, murajaah, dan pembinaan bacaan Al-Qur’an secara bertahap sesuai kemampuan santri.",
  },
  {
    icon: "Moon",
    title: "Pendidikan Diniyah",
    description:
      "Santri mendapatkan pembelajaran ilmu agama yang meliputi aqidah, fiqih, hadits, tafsir, sirah, adab, dan ilmu-ilmu keislaman lainnya secara bertahap.",
  },
  {
    icon: "GraduationCap",
    title: "Pendidikan Umum yang Terintegrasi",
    description:
      "Santri mengikuti pendidikan umum sesuai jenjang melalui program PKBM dan pendidikan yang terintegrasi dengan pembinaan Al-Qur’an serta pendidikan diniyah.",
  },
  {
    icon: "HeartHandshake",
    title: "Pembinaan Akhlak dan Kemandirian",
    description:
      "Pembinaan santri berlangsung dalam kehidupan sehari-hari melalui keteladanan, pembiasaan ibadah, adab, kedisiplinan, tanggung jawab, kebersihan, dan kemandirian.",
  },
  {
    icon: "Building2",
    title: "Lingkungan Belajar yang Mendukung",
    description:
      "Santri belajar dan tinggal dalam lingkungan pesantren yang mendukung kegiatan tahfizh, pendidikan diniyah, pendidikan umum, ibadah, olahraga, dan pengembangan diri.",
  },
  {
    icon: "Users",
    title: "Pendampingan Santri",
    description:
      "Santri mendapatkan bimbingan dari para ustadz dan pembina dalam hafalan Al-Qur’an, pendidikan agama, ibadah, adab, kedisiplinan, dan kehidupan sehari-hari.",
  },
];

export const programs: Program[] = [
  {
    slug: "tahfidz",
    title: "Tahfidz Al-Qur'an",
    tagline: "30 Juz dengan sanad dan kualitas bacaan mutqin",
    description:
      "Program inti pesantren dengan sistem halaqah kecil. Santri menyetor hafalan baru setiap pagi, muraja'ah sore, dan ujian juz setiap bulan dengan standar tajwid ketat.",
    duration: "3–6 tahun · target 30 juz",
    benefits: [
      "Sertifikat tahfidz per capaian juz",
      "Bimbingan tahsin bersanad riwayat Hafsh",
      "Rasio 1 musyrif untuk 12 santri",
    ],
    activities: ["Setoran ziyadah ba'da Subuh", "Muraja'ah ba'da Ashar", "Sima'an pekanan", "Wisuda tahfidz tahunan"],
    image: tahfidzImg,
    icon: "BookOpenText",
  },
  {
    slug: "diniyah",
    title: "Islamic Studies (Diniyah)",
    tagline: "Fondasi keilmuan Islam yang kokoh",
    description:
      "Kajian kitab turats dan ilmu alat untuk membekali santri memahami sumber utama agama secara mandiri dan moderat.",
    duration: "6 tahun · 8 jam pelajaran/pekan",
    benefits: ["Menguasai nahwu-sharaf dasar hingga menengah", "Mampu membaca kitab gundul", "Pemahaman fiqih ibadah dan muamalah"],
    activities: ["Talaqqi kitab", "Bahtsul masail santri", "Kajian sirah pekanan", "Praktik ibadah terbimbing"],
    image: mosqueImg,
    icon: "Moon",
  },
  {
    slug: "akademik",
    title: "Pendidikan Akademik",
    tagline: "Kurikulum nasional terakreditasi A",
    description:
      "Jenjang SMP dan SMA dengan kurikulum nasional, pembelajaran berbasis proyek, dan bimbingan intensif menghadapi asesmen nasional serta seleksi PTN.",
    duration: "3 tahun per jenjang",
    benefits: ["Ijazah negara diakui", "Kelas olimpiade sains dan sosial", "Bimbingan karier dan kampus"],
    activities: ["KBM pagi terjadwal", "Praktikum laboratorium", "Try out berkala", "Studi lapangan"],
    image: classroomImg,
    icon: "GraduationCap",
  },
  {
    slug: "bahasa",
    title: "Program Bahasa",
    tagline: "Arab dan Inggris sebagai bahasa keseharian",
    description:
      "Lingkungan bilingual dengan kosakata harian, muhadharah, dan klub debat untuk membentuk santri yang percaya diri berkomunikasi global.",
    duration: "Sepanjang masa studi",
    benefits: ["Sertifikat kemampuan bahasa", "Persiapan TOAFL & TOEFL", "Pertukaran pelajar mitra"],
    activities: ["Mufradat pagi", "Muhadharah tiga bahasa", "English & Arabic Club", "Language camp semesteran"],
    image: languageImg,
    icon: "Languages",
  },
  {
    slug: "kepemimpinan",
    title: "Program Kepemimpinan",
    tagline: "Membentuk santri yang amanah dan berdaya",
    description:
      "Kaderisasi organisasi santri, pelatihan public speaking, manajemen kegiatan, dan pengabdian masyarakat untuk melatih tanggung jawab.",
    duration: "Program tahunan berjenjang",
    benefits: ["Pengalaman memimpin organisasi", "Kemampuan manajemen acara", "Jejaring alumni nasional"],
    activities: ["Latihan dasar kepemimpinan", "Organisasi santri (OSNH)", "Bakti sosial desa", "Kepanitiaan event pesantren"],
    image: news3,
    icon: "Compass",
  },
  {
    slug: "ekstrakurikuler",
    title: "Ekstrakurikuler",
    tagline: "Menyalurkan bakat, menjaga kebugaran",
    description:
      "Pilihan kegiatan pengembangan minat mulai dari olahraga, seni islami, jurnalistik, hingga teknologi dan robotika.",
    duration: "2 pertemuan per pekan",
    benefits: ["Penyaluran minat dan bakat", "Kesempatan lomba antar pesantren", "Portofolio non-akademik"],
    activities: ["Panahan & berkuda", "Futsal dan voli", "Kaligrafi & hadrah", "Jurnalistik dan desain digital"],
    image: sportsImg,
    icon: "Trophy",
  },
];

export const facilities: Facility[] = [
  {
    name: "Masjid Pesantren",
    description: "Pusat ibadah dan halaqah tahfidz berkapasitas 1.200 jamaah.",
    detail: "Berpendingin udara, dilengkapi sound system dan ruang khusus tahsin.",
    image: mosqueImg,
  },
  {
    name: "Perpustakaan",
    description: "Koleksi 12.000 judul kitab, buku pelajaran, dan referensi digital.",
    detail: "Ruang baca hening, katalog online, dan layanan peminjaman mandiri.",
    image: libraryImg,
  },
  {
    name: "Asrama Santri",
    description: "Hunian nyaman dengan pembina yang tinggal bersama santri.",
    detail: "Kapasitas 6 santri per kamar, loker pribadi, dan kamar mandi bersih.",
    image: dormitoryImg,
  },
  {
    name: "Ruang Kelas",
    description: "Kelas belajar terang dengan maksimal 24 santri per rombel.",
    detail: "Dilengkapi proyektor, papan interaktif, dan sirkulasi udara baik.",
    image: classroomImg,
  },
  {
    name: "Laboratorium Komputer",
    description: "40 unit komputer untuk literasi digital dan coding class.",
    detail: "Akses internet terkurasi dan pendampingan guru TIK.",
    image: computerLabImg,
  },
  {
    name: "Lapangan Olahraga",
    description: "Lapangan serbaguna untuk futsal, voli, dan basket.",
    detail: "Digunakan untuk olahraga pagi dan turnamen antar asrama.",
    image: sportsImg,
  },
  {
    name: "Dapur & Ruang Makan",
    description: "Katering bergizi tiga kali sehari dengan menu terjadwal.",
    detail: "Dapur higienis, ruang makan luas, dan pengawasan ahli gizi.",
    image: diningImg,
  },
];

export const teachers: Teacher[] = [
  {
    name: "KH. Abdul Aziz Rahman, Lc., M.A.",
    position: "Pengasuh Pesantren",
    education: "Universitas Al-Azhar, Kairo",
    expertise: ["Tafsir", "Ushul Fiqih", "Sanad Qira'ah"],
    email: "aziz@pptqnurulhuda.sch.id",
  },
  {
    name: "Ust. Faisal Hakim, S.Pd.I., Al-Hafizh",
    position: "Kepala Program Tahfidz",
    education: "Institut Ilmu Al-Qur'an Jakarta",
    expertise: ["Tahfidz", "Tahsin", "Qira'ah Sab'ah"],
    instagram: "https://instagram.com",
  },
  {
    name: "Ustadzah Nur Aisyah, M.Pd., Al-Hafizhah",
    position: "Kepala Asrama Putri",
    education: "UIN Syarif Hidayatullah Jakarta",
    expertise: ["Tahfidz Putri", "Bimbingan Konseling"],
    email: "aisyah@pptqnurulhuda.sch.id",
  },
  {
    name: "Ust. Ahmad Zulfikar, Lc.",
    position: "Koordinator Diniyah",
    education: "LIPIA Jakarta",
    expertise: ["Fiqih", "Nahwu-Sharaf", "Hadits"],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Siti Marwah, M.Si.",
    position: "Kepala Bidang Akademik",
    education: "Institut Pertanian Bogor",
    expertise: ["Biologi", "Riset Ilmiah Remaja"],
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ust. Ridwan Maulana, S.S.",
    position: "Pembina Bahasa Arab & Inggris",
    education: "Universitas Negeri Malang",
    expertise: ["Linguistik Arab", "Public Speaking"],
    instagram: "https://instagram.com",
  },
  {
    name: "Ust. Hanif Prasetyo, S.Kom.",
    position: "Guru TIK & Pembina Robotika",
    education: "Universitas Indonesia",
    expertise: ["Pemrograman", "Literasi Digital"],
    email: "hanif@pptqnurulhuda.sch.id",
  },
  {
    name: "Ustadzah Laila Fitriani, S.Psi.",
    position: "Konselor Santri",
    education: "Universitas Padjadjaran",
    expertise: ["Psikologi Remaja", "Pendampingan Karakter"],
    email: "laila@pptqnurulhuda.sch.id",
  },
];

export const news: NewsItem[] = [
  {
    slug: "wisuda-tahfidz-angkatan-xii",
    title: "142 Santri Diwisuda pada Haflah Tahfidz Angkatan XII",
    category: "Kegiatan",
    date: "2026-07-19",
    excerpt:
      "Haflah Khatmil Qur'an angkatan XII meluluskan 142 santri, 38 di antaranya menuntaskan hafalan 30 juz dengan predikat mumtaz.",
    image: news1,
    featured: true,
    readMinutes: 4,
  },
  {
    slug: "juara-umum-msq-provinsi",
    title: "Tim Nurul Huda Raih Juara Umum MSQ Tingkat Provinsi",
    category: "Prestasi",
    date: "2026-06-28",
    excerpt:
      "Delegasi santri memborong lima medali emas pada Musabaqah Syarhil Qur'an tingkat Provinsi Jawa Barat di Bandung.",
    image: news2,
    readMinutes: 3,
  },
  {
    slug: "gerakan-santri-menanam",
    title: "Gerakan Santri Menanam 1.000 Pohon di Lingkungan Pesantren",
    category: "Kegiatan",
    date: "2026-06-10",
    excerpt:
      "Program penghijauan tahunan melibatkan seluruh santri dan warga sekitar untuk menjaga keasrian kawasan pesantren.",
    image: news3,
    readMinutes: 3,
  },
  {
    slug: "pembukaan-psb-2027",
    title: "Pendaftaran Santri Baru Tahun Ajaran 2027/2028 Resmi Dibuka",
    category: "Pengumuman",
    date: "2026-05-30",
    excerpt:
      "Gelombang pertama dibuka mulai 1 September 2026 dengan kuota terbatas untuk jenjang SMP dan SMA putra maupun putri.",
    image: campusImg,
    readMinutes: 2,
  },
  {
    slug: "metode-muraja-ah-efektif",
    title: "Lima Metode Muraja'ah yang Menjaga Hafalan Tetap Kuat",
    category: "Artikel",
    date: "2026-05-14",
    excerpt:
      "Tim pengasuh tahfidz membagikan praktik muraja'ah harian yang terbukti menjaga kualitas hafalan santri sepanjang tahun.",
    image: tahfidzImg,
    readMinutes: 6,
  },
  {
    slug: "laboratorium-komputer-baru",
    title: "Laboratorium Komputer Baru Dukung Kelas Coding Santri",
    category: "Pengumuman",
    date: "2026-04-22",
    excerpt:
      "Empat puluh unit komputer baru melengkapi kelas literasi digital dan ekstrakurikuler robotika pesantren.",
    image: computerLabImg,
    readMinutes: 3,
  },
  {
    slug: "kunjungan-mitra-pendidikan",
    title: "Pesantren Terima Kunjungan Mitra Pendidikan Timur Tengah",
    category: "Kegiatan",
    date: "2026-04-05",
    excerpt:
      "Penjajakan kerja sama beasiswa lanjutan bagi alumni hafidz ke universitas mitra di Mesir dan Yordania.",
    image: mosqueImg,
    readMinutes: 4,
  },
  {
    slug: "juara-olimpiade-sains",
    title: "Santri Raih Perak Olimpiade Sains Tingkat Nasional",
    category: "Prestasi",
    date: "2026-03-18",
    excerpt:
      "Prestasi bidang biologi ini menegaskan keseimbangan capaian tahfidz dan akademik santri Nurul Huda.",
    image: classroomImg,
    readMinutes: 3,
  },
  {
    slug: "perpustakaan-digital",
    title: "Perpustakaan Digital Permudah Akses Rujukan Kitab",
    category: "Pengumuman",
    date: "2026-02-27",
    excerpt:
      "Katalog daring kini memuat lebih dari 12.000 judul dan dapat diakses santri melalui ruang baca perpustakaan.",
    image: libraryImg,
    readMinutes: 2,
  },
  {
    slug: "adab-sebelum-ilmu",
    title: "Adab Sebelum Ilmu: Fondasi Pendidikan Santri",
    category: "Artikel",
    date: "2026-02-09",
    excerpt:
      "Refleksi pengasuh mengenai pentingnya pembinaan adab harian sebagai pijakan seluruh proses belajar di pesantren.",
    image: dormitoryImg,
    readMinutes: 5,
  },
];

export const events: EventItem[] = [
  {
    title: "Open House & Tur Pesantren",
    date: "2026-08-23",
    day: "23",
    month: "Agu",
    time: "08.00 – 12.00 WIB",
    place: "Aula Utama Pesantren",
  },
  {
    title: "Pembukaan Gelombang I PSB 2025/2026",
    date: "2026-09-01",
    day: "01",
    month: "Sep",
    time: "09.00 WIB s/d Selesai",
    place: "Daring & Kantor PSB",
  },
  {
    title: "Sima’an Akbar 30 Juz",
    date: "2026-09-14",
    day: "14",
    month: "Sep",
    time: "06.30 – 16.00 WIB",
    place: "Masjid Pesantren",
  },
  {
    title: "Musabaqah Santri Antar-Asrama ",
    date: "2026-10-05",
    day: "05",
    month: "Okt",
    time: "13.00 – 17.00 WIB",
    place: "Gedung Serbaguna",
  },
];

export const testimonials = [
  {
    quote:
      "Anak kami tidak hanya bertambah hafalannya, tetapi juga terbiasa salat berjamaah dan berbicara santun di rumah. Perubahan adabnya adalah hal yang paling kami rasakan.",
    name: "Bapak Hendra Kusuma",
    role: "Wali santri kelas XI",
  },
  {
    quote:
      "Halaqah yang lebih kecil membuat perkembangan setiap santri lebih terpantau. Musyrif juga rutin menyampaikan perkembangan hafalan dan kondisi belajar kepada kami.",
    name: "Ibu Ratna Widiastuti",
    role: "Wali santri kelas VIII",
  },
  {
    quote:
      "Bekal tahfidz dan bahasa Arab dari Nurul Huda sangat membantu saya lolos seleksi beasiswa dan menjalani kuliah di Kairo.",
    name: "Muhammad Faruq",
    role: "Alumni angkatan IX",
  },
];

export const partners = [
  "Kementerian Agama RI",
  "Institut Ilmu Al-Qur'an",
  "LIPIA Jakarta",
  "Universitas Al-Azhar",
  "BAZNAS",
  "Forum Pesantren Tahfidz",
];

export const gallery: GalleryItem[] = [
  { title: "Halaqah Tahfizh", category: "Kegiatan", image: tahfidzImg, type: "photo" },
  { title: "Masjid Pesantren", category: "Fasilitas", image: mosqueImg, type: "photo" },
  { title: "Wisuda Tahfidz Angkatan XII", category: "Prestasi", image: news1, type: "photo" },
  { title: "Kamar Asrama Santri", category: "Asrama", image: dormitoryImg, type: "photo" },
  { title: "Prestasi Santri", category: "Prestasi", image: libraryImg, type: "photo" },
  { title: "Kegiatan Silat Santri", category: "Kegiatan", image: tapaksuci, type: "photo" },
  { title: "Kegiatan Belajar", category: "Kegiatan", image: news2, type: "photo" },
  { title: "Muhadharah Tiga Bahasa", category: "Kegiatan", image: languageImg, type: "photo" },
  { title: "Laboratorium Komputer", category: "Fasilitas", image: computerLabImg, type: "photo" },
  { title: "Gerakan Santri Menanam", category: "Kegiatan", image: news3, type: "photo" },
  {
    title: "Profil Pesantren Nurul Huda",
    category: "Kegiatan",
    image: campusImg,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Suasana Belajar Santri",
    category: "Kegiatan",
    image: classroomImg,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  { title: "Ruang Makan Santri", category: "Fasilitas", image: diningImg, type: "photo" },
];

export const timeline: TimelineEntry[] = [
  { year: "1998", title: "Majelis Tahfidz Pertama", description: "Dimulai dari majelis kecil 12 santri di serambi masjid kampung." },
  { year: "2003", title: "Asrama Putra Berdiri", description: "Pembangunan asrama pertama menandai lahirnya sistem pesantren berasrama." },
  { year: "2009", title: "Pendirian Jenjang SMP", description: "Kurikulum nasional resmi berpadu dengan program tahfidz harian." },
  { year: "2014", title: "Asrama Putri & Jenjang SMA", description: "Layanan pendidikan meluas untuk santri putri dan jenjang menengah atas." },
  { year: "2019", title: "Akreditasi A", description: "Kedua jenjang memperoleh akreditasi A dari BAN-S/M." },
  { year: "2024", title: "Kampus Terpadu", description: "Peresmian masjid baru, laboratorium, dan perpustakaan digital." },
];

export const coreValues = [
  { icon: "BookOpenText", title: "Qur'ani", description: "Menjadikan Al-Qur’an sebagai pedoman dalam hafalan, ibadah, akhlak, dan kehidupan sehari-hari." },
  { icon: "Sparkles", title: "Berakhlak", description: "Membiasakan adab Islami dalam hubungan dengan Allah, guru, orang tua, sesama, dan lingkungan." },
  { icon: "ShieldCheck", title: "Ikhlas", description: "Belajar, menghafal, beribadah, dan berkhidmah semata-mata mengharap ridha Allah." },
  { icon: "Users", title: "Disiplin", description: "Menjalani waktu, ibadah, hafalan, belajar, dan tanggung jawab dengan tertib dan konsisten." },
  { icon: "Compass", title: "Mandiri", description: "Membentuk santri yang mampu mengelola diri, menyelesaikan tanggung jawab, dan mengambil peran positif." },
  { icon: "Lightbulb", title: "Berkemajuan", description: "Membekali santri dengan ilmu, bahasa, wawasan, dan keterampilan agar siap melanjutkan pendidikan dan berkontribusi di masyarakat." },
];

export const missions = [
  "Menyelenggarakan pendidikan tahfizh secara terarah, disiplin, dan berkelanjutan dengan target hafalan 30 juz.",
  "Menanamkan aqidah yang lurus dan membekali santri dengan ilmu syar’i.",
  "Membekali santri dengan ilmu umum agar mampu berperan aktif di masyarakat.",
  "Menumbuhkan karakter ikhlas, sederhana, disiplin, serta pembiasaan ibadah dan adab.",
  "Mengembangkan kemampuan bahasa Arab dan Inggris sebagai sarana memahami dan menyebarkan ilmu.",
  "Menumbuhkan semangat dakwah dan khidmah di tengah masyarakat.",
  "Membangun lingkungan belajar yang kondusif, terarah, dan berlandaskan nilai-nilai Islam.",
];

export const orgStructure = [
  { role: "Kepala Yayasan", name: "KY. Slamet Abu Qomar" },
  { role: "Mudir dan Pengasuh Pesantren", name: "Ust. Imron Muzakki, Lc." },
  { role: "Pengawas", name: "Ka Drs. Moh. Arifin" },
  { role: "Koordinator Sekretariat & Penjaminan Mutu", name: "Ust. Tristan Ammar Tsaqib" },
  { role: "Koordinator Pendidikan", name: "Usth. Khoridatul Fitriah, Lc." },
  { role: "Koordinator Tahfizh", name: "Usth. Fiiki Qomariyatul Jannah Al-Hafidzah" },
  { role: "Koordinator Pembinaan Santri Putra", name: "Ust. Fahmi Rakhmatullah" },
  { role: "Koordinator Pembinaan Santri Putri", name: "Usth. Aimatus Salma" },
  { role: "Keuangan & SPP", name: "Usth. Muttaqiya Zulfa" },
  { role: "Sarana Prasarana", name: "Ust. Abu Fadhil" },
  { role: "Humas, Dakwah & Media", name: "Ust. Mu'awan Haqiqy, Lc." },
  { role: "", name: "" },
];

export const admissionSteps = [
  { step: "01", title: "Pendaftaran Online", description: "Mengisi formulir pendaftaran secara online melalui kanal resmi PSB." },
  { step: "02", title: "Mengenal Calon Santri", description: "Wali santri memberikan informasi tentang kesehatan, karakter, kebiasaan, kemampuan, dan kesiapan anak mengikuti kehidupan di pesantren." },
  { step: "03", title: "Verifikasi & Klarifikasi", description: "Panitia memeriksa data dan mengklarifikasi informasi yang perlu diperjelas." },
  { step: "04", title: "Seleksi & Wawancara", description: "Seleksi meliputi tilawah, tahfizh, tsaqafah, serta wawancara calon santri dan wali." },
  { step: "05", title: "Pengumuman Hasil Seleksi", description: "Hasil seleksi disampaikan melalui kanal informasi resmi PSB." },
  { step: "06", title: "Daftar Ulang & Ta'aruf", description: "Santri yang diterima melakukan daftar ulang dan mengikuti ta'aruf serta pengenalan kehidupan pesantren." },
];

export const requirements = [
  "Fotokopi akta kelahiran dan kartu keluarga",
  "Fotokopi rapor dua semester terakhir",
  "Pas foto berwarna 3x4 sebanyak 4 lembar",
  "Surat keterangan sehat dari dokter",
  "Mampu membaca Al-Qur'an dengan tartil",
  "Bersedia tinggal di asrama dan menaati tata tertib",
];

export const admissionSchedule = [
  { phase: "Gelombang I", period: "1 Sep – 31 Des 2026", test: "7 Desember 2026", note: "Diskon uang pangkal 15%" },
  { period: "Pendaftaran Tambahan Setelah masa pendaftaran berakhir, pendaftaran masih dapat dipertimbangkan secara terbatas apabila kuota santri masih tersedia." },
  // { phase: "Gelombang III", period: "1 Mar – 30 Apr 2027", test: "10 Mei 2027", note: "Kuota terbatas" },
];

export const fees = [
  { item: "Biaya pendaftaran", amount: "Rp 350.000", note: "Dibayar satu kali saat mendaftar" },
  { item: "Uang pangkal", amount: "Rp 9.500.000", note: "Termasuk perlengkapan asrama & seragam" },
  { item: "SPP bulanan", amount: "Rp 1.450.000", note: "Sudah termasuk makan 3x sehari" },
  { item: "Kegiatan tahunan", amount: "Rp 1.200.000", note: "Ekstrakurikuler, ujian, dan kegiatan santri" },
];

export const faqs: Faq[] = [
  {
    question: "Apakah santri wajib sudah memiliki hafalan sebelum mendaftar?",
    answer:
      "Tidak wajib. Syarat utamanya adalah mampu membaca Al-Qur'an dengan tartil. Santri baru akan mengikuti kelas tahsin sebelum masuk program hafalan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan 30 juz?",
    answer:
      "Rata-rata santri menuntaskan 30 juz dalam 4–5 tahun dengan target setoran satu halaman per hari serta muraja'ah rutin.",
  },
  {
    question: "Apakah tersedia beasiswa?",
    answer:
      "Tersedia beasiswa prestasi tahfidz dan akademik, serta beasiswa dhuafa dan yatim dengan kuota terbatas setiap gelombang.",
  },
  {
    question: "Kapan wali santri dapat menjenguk?",
    answer:
      "Kunjungan wali dijadwalkan setiap dua pekan pada hari Ahad pukul 09.00–15.00 WIB, di luar masa ujian dan karantina hafalan.",
  },
  {
    question: "Apakah santri boleh membawa telepon genggam?",
    answer:
      "Tidak. Komunikasi dengan keluarga difasilitasi melalui telepon pesantren pada jadwal yang telah ditentukan setiap pekan.",
  },
  {
    question: "Apakah jenjang SMP dan SMA memiliki ijazah negara?",
    answer:
      "Ya. Kedua jenjang terakreditasi A dan menerbitkan ijazah negara sehingga alumni dapat melanjutkan ke PTN maupun kampus luar negeri.",
  },
];

export const dailySchedule = [
  { time: "03.30", activity: "Qiyamul lail dan persiapan Subuh" },
  { time: "04.30", activity: "Shalat Subuh, Zikir Pagi, dan Halaqoh 1 (Murajaah Hafalan Lama)" },
  { time: "06.30", activity: "Piket Kebersihan, Sarapan, dan Mandi" },
  { time: "08.00", activity: "Halaqah 2 (Murajaah Hafalan Terbaru)" },
  { time: "09.00", activity: "Pembelajaran Diniyah/Umum" },
  { time: "11.10", activity: "Qailullah (Tidur Siang)" },
  { time: "11.30", activity: "Shalat Dzuhur, Makan siang" },
  { time: "13.10", activity: "Pembelajaran Diniyah/Umum" },
  { time: "14.00", activity: "Istirahat" },
  { time: "15.00", activity: "Shalat Ashar, Zikir Sore, Piket Kebersihan dan Mandi" },
  { time: "16.30", activity: "Halaqoh 3 (Ziyadah Hafalan Baru)" },
  { time: "17.30", activity: "Shalat Maghrib dan Kajian/Tilawah/Hafalan Matan/Hadits" },
  { time: "18:20", activity: "Makan Malam" },
  { time: "18.45", activity: "Shalat Isya'" },
  { time: "19.30", activity: "Belajar Mufrodat Arab/Inggris" },
  { time: "20.00", activity: "Tilawah Mandiri/Belajar Malam" },
  { time: "20.45", activity: "Persiapan Tidur" },
  { time: "21.30", activity: "Wajib Tidur" },
];
