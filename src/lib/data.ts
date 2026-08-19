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
  name: "Pondok Pesantren Tahfidzul Qur'an Nurul Huda",
  shortName: "PPTQ Nurul Huda",
  tagline: "Mencetak Generasi Qur'ani Berakhlakul Karimah",
  description:
    "Lembaga pendidikan Islam berasrama yang memadukan hafalan Al-Qur'an 30 juz, penguasaan ilmu diniyah, dan kurikulum akademik nasional dalam lingkungan yang tertib, hangat, dan modern.",
  address: "Dusun Secikal, RT/RW 04/01, Kenongomulyo, Nguntoronadi, Magetan, Jawa Timur, 63383.",
  phone: "(021) 8790 1234",
  whatsapp: "6281234433525",
  whatsappDisplay: "+62 812-3443-3525",
  email: "info@pptqnurulhuda.sch.id",
  admissionEmail: "psb@pptqnurulhuda.sch.id",
  hours: "Senin – Sabtu · 07.30 – 16.00 WIB",
  mapEmbed:
    "https://www.google.com/maps?q=Cileungsi%20Bogor%20Jawa%20Barat&output=embed",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
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
      { label: "Dewan Guru", to: "/teachers", description: "Asatidz pengampu dan pembimbing" },
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
  { label: "Santri Aktif", value: 842, suffix: "+", description: "Putra & putri jenjang SMP–SMA" },
  { label: "Asatidz & Guru", value: 68, suffix: "", description: "Hafidz, sarjana, dan magister" },
  { label: "Alumni", value: 2350, suffix: "+", description: "Tersebar di dalam & luar negeri" },
  { label: "Prestasi", value: 137, suffix: "", description: "Tingkat daerah hingga nasional" },
];

export const advantages = [
  {
    icon: "BookOpenText",
    title: "Program Tahfidz Terstruktur",
    description:
      "Target hafalan bertahap dengan halaqah maksimal 12 santri per musyrif, setoran harian, dan muraja'ah terjadwal hingga 30 juz mutqin.",
  },
  {
    icon: "Moon",
    title: "Pendidikan Diniyah Mendalam",
    description:
      "Kajian kitab kuning, fiqih, aqidah, hadits, dan sirah dengan metode talaqqi langsung bersama asatidz berpengalaman.",
  },
  {
    icon: "GraduationCap",
    title: "Keunggulan Akademik",
    description:
      "Kurikulum nasional terakreditasi A, kelas persiapan olimpiade, dan bimbingan intensif menuju PTN serta universitas Timur Tengah.",
  },
  {
    icon: "HeartHandshake",
    title: "Pembinaan Akhlak",
    description:
      "Pendampingan karakter 24 jam melalui keteladanan, adab harian, dan evaluasi personal setiap santri oleh wali asuh.",
  },
  {
    icon: "Building2",
    title: "Fasilitas Modern",
    description:
      "Masjid, asrama ber-AC, laboratorium komputer, perpustakaan digital, klinik, dan lapangan olahraga dalam satu kawasan asri.",
  },
  {
    icon: "Users",
    title: "Asatidz Berpengalaman",
    description:
      "Dibimbing hafidz bersanad, lulusan Al-Azhar, LIPIA, dan universitas dalam negeri dengan rasio pembinaan yang ideal.",
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
    title: "Open House & Tur Kampus",
    date: "2026-08-23",
    day: "23",
    month: "Agu",
    time: "08.00 – 12.00 WIB",
    place: "Aula Utama Pesantren",
  },
  {
    title: "Pembukaan Gelombang I PSB 2027",
    date: "2026-09-01",
    day: "01",
    month: "Sep",
    time: "09.00 WIB",
    place: "Daring & Kantor PSB",
  },
  {
    title: "Sima'an Akbar 30 Juz",
    date: "2026-09-14",
    day: "14",
    month: "Sep",
    time: "06.30 – 16.00 WIB",
    place: "Masjid Pesantren",
  },
  {
    title: "Musabaqah Internal Antar Asrama",
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
      "Anak kami tidak hanya hafal 20 juz dalam tiga tahun, tetapi juga terbiasa salat berjamaah dan berbicara santun di rumah. Perubahan adabnya yang paling terasa.",
    name: "Bapak Hendra Kusuma",
    role: "Wali santri kelas XI",
  },
  {
    quote:
      "Sistem halaqah kecil membuat setiap santri benar-benar terpantau. Musyrif rutin mengabari perkembangan hafalan dan kondisi belajar setiap pekan.",
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
  { title: "Halaqah Tahfidz Pagi", category: "Kegiatan", image: tahfidzImg, type: "photo" },
  { title: "Masjid Pesantren", category: "Fasilitas", image: mosqueImg, type: "photo" },
  { title: "Wisuda Tahfidz Angkatan XII", category: "Prestasi", image: news1, type: "photo" },
  { title: "Kamar Asrama Santri", category: "Asrama", image: dormitoryImg, type: "photo" },
  { title: "Perpustakaan Pesantren", category: "Fasilitas", image: libraryImg, type: "photo" },
  { title: "Juara Umum MSQ Provinsi", category: "Prestasi", image: news2, type: "photo" },
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
  { icon: "BookOpenText", title: "Qur'ani", description: "Al-Qur'an menjadi rujukan utama seluruh aktivitas dan keputusan pesantren." },
  { icon: "Sparkles", title: "Ikhlas", description: "Belajar dan mengabdi dengan niat lurus semata mengharap ridha Allah." },
  { icon: "ShieldCheck", title: "Amanah", description: "Menjaga kepercayaan wali santri melalui tata kelola yang jujur dan transparan." },
  { icon: "Users", title: "Ukhuwah", description: "Membangun persaudaraan lintas latar belakang dalam satu keluarga besar." },
  { icon: "Compass", title: "Istiqamah", description: "Konsisten pada proses harian yang tertib, terukur, dan berkelanjutan." },
  { icon: "Lightbulb", title: "Berkemajuan", description: "Terbuka pada ilmu dan teknologi yang bermanfaat bagi umat." },
];

export const missions = [
  "Menyelenggarakan program tahfidz 30 juz yang terstruktur, terukur, dan berkualitas sanad.",
  "Menanamkan akhlakul karimah melalui keteladanan dan pembinaan 24 jam.",
  "Memadukan ilmu diniyah dan kurikulum nasional secara seimbang.",
  "Membangun lingkungan berbahasa Arab dan Inggris yang aktif.",
  "Mengembangkan potensi kepemimpinan dan kemandirian santri.",
  "Menjalin kemitraan dengan lembaga pendidikan dalam dan luar negeri.",
];

export const orgStructure = [
  { role: "Pengasuh Pesantren", name: "KH. Abdul Aziz Rahman, Lc., M.A." },
  { role: "Wakil Pengasuh", name: "KH. Sulaiman Yusuf, M.Pd.I." },
  { role: "Kepala Bidang Akademik", name: "Dr. Siti Marwah, M.Si." },
  { role: "Kepala Program Tahfidz", name: "Ust. Faisal Hakim, S.Pd.I., Al-Hafizh" },
  { role: "Koordinator Diniyah", name: "Ust. Ahmad Zulfikar, Lc." },
  { role: "Kepala Asrama Putra", name: "Ust. Bagas Setiawan, S.Pd." },
  { role: "Kepala Asrama Putri", name: "Ustadzah Nur Aisyah, M.Pd., Al-Hafizhah" },
  { role: "Kepala Tata Usaha", name: "Bapak Imam Santoso, S.E." },
];

export const admissionSteps = [
  { step: "01", title: "Pendaftaran Online", description: "Isi formulir daring dan unggah dokumen persyaratan melalui portal PSB." },
  { step: "02", title: "Pembayaran Biaya Seleksi", description: "Transfer biaya pendaftaran, lalu konfirmasi bukti bayar ke panitia." },
  { step: "03", title: "Tes Seleksi", description: "Tes baca Al-Qur'an, hafalan dasar, akademik, dan wawancara santri bersama wali." },
  { step: "04", title: "Pengumuman", description: "Hasil seleksi diumumkan melalui portal PSB dan pesan WhatsApp resmi." },
  { step: "05", title: "Daftar Ulang", description: "Pelunasan administrasi, pengukuran seragam, dan pengambilan perlengkapan asrama." },
  { step: "06", title: "Masa Ta'aruf Santri", description: "Orientasi pengenalan lingkungan, adab, dan jadwal harian pesantren." },
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
  { phase: "Gelombang I", period: "1 Sep – 30 Nov 2026", test: "7 Desember 2026", note: "Diskon uang pangkal 15%" },
  { phase: "Gelombang II", period: "1 Des 2026 – 28 Feb 2027", test: "8 Maret 2027", note: "Diskon uang pangkal 7%" },
  { phase: "Gelombang III", period: "1 Mar – 30 Apr 2027", test: "10 Mei 2027", note: "Kuota terbatas" },
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
  { time: "04.30", activity: "Salat Subuh berjamaah dan ziyadah hafalan" },
  { time: "07.00", activity: "Kegiatan belajar mengajar akademik" },
  { time: "12.00", activity: "Salat Zuhur, makan siang, istirahat" },
  { time: "15.30", activity: "Salat Ashar dan muraja'ah halaqah" },
  { time: "18.00", activity: "Salat Maghrib, kajian diniyah, dan Isya" },
  { time: "20.00", activity: "Belajar mandiri terbimbing" },
  { time: "21.30", activity: "Istirahat malam" },
];
