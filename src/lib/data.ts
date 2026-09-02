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
import news from "@/assets/news.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import principalImg from "@/assets/principal.jpg";
import tapaksuci from "@/assets/tapaksuci.jpg";
import NHICImg from "@/assets/NHIC.jpg";
import Pendaftaran from "@/assets/pendaftaran.jpg";

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
  { label: "Santri Aktif", value: 188, suffix: "", description: "Putra & putri jenjang SMP–SMA" },
  { label: "Asatidz & Guru", value: 34, suffix: "", description: "Hafidz/ah, sarjana diniyah & umum" },
  { label: "Alumni", value: 39, suffix: "", description: "Lulusan 3 angkatan" },
  { label: "Santri Hafidz/ah", value: 46, suffix: "", description: "Selesai Hafalan 30Juz" },
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
    title: "Tahfizhul Qur'an",
    tagline: "Menghafal, menjaga, dan menguatkan hafalan Al-Qur'an hingga 30 juz",
    description:
      "Program inti PPTQ dengan pembinaan hafalan secara bertahap melalui ziyadah, murajaah, tasmi' dan itqan. Santri dibimbing untuk tidak hanya menambah hafalan, tetapi juga menjaga kekuatan dan kualitas hafalannya.",
    duration: "6 tahun · Target: 30 juz ",
    benefits: [
      "Ziyadah hafalan",
      "Murajaah rutin",
      "Itqan/penguatan hafalan",
      "Tasmi' dan evaluasi hafalan",
      "Hafalan bertahap hingga 30 juz",
    ],
    activities: ["Setoran hafalan", "Murajaah", "Sima'an", "Ujian hafalan", "Wisuda tahfizh"],
    image: tahfidzImg,
    icon: "BookOpenText",
  },
  {
    slug: "tahsin",
    title: "Tahsin & Tilawah Bersanad",
    tagline: "Membentuk bacaan Al-Qur'an yang benar, tartil, dan terjaga",
    description:
      "Santri mendapatkan pembinaan bacaan Al-Qur'an melalui tahsin, talaqqi, dan bimbingan pembimbing yang memiliki sanad, sehingga proses menghafal dibangun di atas bacaan yang benar.",
    duration: "6 tahun selama mondok",
    benefits: ["Makharijul huruf", "Tajwid", "Tahsin bacaan", "Talaqqi", "Kelancaran dan ketepatan tilawah"],
    activities: ["Talaqqi kitab", "Bahtsul masail santri", "Kajian sirah pekanan", "Praktik ibadah terbimbing"],
    image: mosqueImg,
    icon: "Mosque",
  },
  {
    slug: "akademik",
    title: "Diniyah & Kajian Kitab",
    tagline: "Membekali santri dengan dasar ilmu agama yang kokoh",
    description:
      "Pembelajaran diniyah menjadi bagian penting dari pendidikan pesantren untuk membangun pemahaman agama yang benar sekaligus membimbing santri dalam ibadah dan kehidupan sehari-hari.",
    duration: "3 tahun per jenjang",
    benefits: ["Aqidah", "Fikih", "Tafsir", "Hadits", "Akhlak dan adab", "Nahwu dan sharaf", "Kitab-kitab diniyah", "Mutun ilmiah"],
    activities: ["Pembelajaran kitab", "Kajian rutin", "Hafalan matan", "Pembahasan materi", "Praktik ibadah"],
    image: classroomImg,
    icon: "GraduationCap",
  },
  {
    slug: "pendidikan",
    title: "Pendidikan Umum & Kesetaraan",
    tagline: "Membekali santri dengan ilmu umum tanpa meninggalkan pendidikan pesantren",
    description:
      "Pendidikan umum dilaksanakan secara terpadu dengan program kepesantrenan agar santri memiliki bekal akademik sekaligus tetap mendapatkan pembinaan Al-Qur'an dan ilmu agama.",
    duration: "Sepanjang masa studi",
    benefits: ["Pendidikan umum", "Literasi dan pengetahuan", "Pembelajaran kesetaraan", "Evaluasi pembelajaran", "Persiapan melanjutkan pendidikan"],
    activities: ["Mufradat malam", "Muhadharah tiga bahasa", "English & Arabic Club", "Language camp semesteran"],
    image: languageImg,
    icon: "BookText",
  },
  {
    slug: "bahasa",
    title: "Bahasa Arab & Inggris",
    tagline: "Membiasakan santri berkomunikasi dengan bahasa yang dipelajari",
    description:
      "Bahasa Arab dan Inggris dikembangkan melalui pembiasaan dalam kegiatan pesantren sesuai waktu dan program yang ditentukan.",
    duration: "Program tahunan berjenjang",
    benefits: ["Mufradat harian", "Percakapan bahasa", "Pembiasaan bahasa Arab", "Pembiasaan bahasa Inggris", "Pengembangan kemampuan komunikasi"],
    activities: ["Ilqo' mufradat", "Percakapan harian", "Praktik bahasa", "Kegiatan kebahasaan", "Pembiasaan dalam lingkungan pesantren"],
    image: news3,
    icon: "Languages",
  },
  {
    slug: "karakter",
    title: "Adab, Karakter & Kemandirian",
    tagline: "Membentuk santri yang berakhlak, disiplin, mandiri, dan bertanggung jawab",
    description:
      "Pendidikan pesantren tidak hanya berorientasi pada hafalan dan ilmu, tetapi juga membentuk kebiasaan dan karakter santri melalui kehidupan sehari-hari.",
    duration: "Setiap saat",
    benefits: ["Adab kepada Allah", "Adab kepada Al-Qur'an", "Adab kepada orang tua dan guru", "Kedisiplinan", "Kemandirian", "Tanggung jawab", "Khidmah"],
    activities: ["Pembinaan harian", "Kegiatan kebersihan", "Pembiasaan ibadah", "Kegiatan bersama", "Pengabdian"],
    image: sportsImg,
    icon: "Trophy",
  },
];

export const facilities: Facility[] = [
  {
    name: "Masjid Nurul Huda",
    description: "Pusat ibadah, tahfizh, kajian, dan pembinaan santri serta masyarakat.",
    detail: "Nyaman untuk ibadah dan kegiatan keislaman, menjadi bagian penting dari kehidupan pendidikan santri di PPTQ Nurul Huda.",
    image: mosqueImg,
  },
  {
    name: "Perpustakaan",
    description: "Koleksi kitab dan buku referensi untuk menunjang tahfizh, diniyah, dan pembelajaran santri.",
    detail: "Ruang baca • Kitab • Buku pelajaran • Referensi",
    image: libraryImg,
  },
  {
    name: "Asrama Santri",
    description: "Hunian nyaman dengan pembina dalam kehidupan sehari-hari.",
    detail: "Kapasitas 16 santri per kamar, dilengkapi tempat tidur, lemari/loker, dll.",
    image: dormitoryImg,
  },
  {
    name: "Ruang Kelas",
    description: "Ruang pembelajaran yang digunakan untuk kegiatan akademik, diniyah, dan kajian kitab dalam suasana yang sederhana dan kondusif.",
    detail: "Dilengkapi Meja belajar sederhana • Papan tulis • Ruang belajar yang tertib dan nyaman",
    image: classroomImg,
  },
  {
    name: "Perangkat Komputer",
    description: "Perangkat laptop yang digunakan untuk mendukung pembelajaran teknologi dan keterampilan digital santri.",
    detail: "Laptop • Pembelajaran komputer • Literasi digital",
    image: computerLabImg,
  },
  {
    name: "Lapangan Olahraga",
    description: "Fasilitas olahraga serbaguna untuk mendukung kebugaran dan aktivitas santri.",
    detail: "Voli • Panahan • Tenis meja • Bulu tangkis • Basket • Sepak bola",
    image: sportsImg,
  },
  {
    name: "Dapur & Ruang Makan",
    description: "Dapur pesantren yang mendukung penyediaan makanan santri secara teratur dan sesuai kebutuhan.",
    detail: "Menu terjadwal • Dapur higienis • MBG • Disesuaikan dengan kondisi pesantren",
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
    slug: "pengenalan-lingkungan",
    title: "Mengenal Lingkungan dan Kehidupan Santri PPTQ Nurul Huda",
    category: "Kegiatan",
    date: "2026-07-19",
    excerpt:
      "Mengenal lebih dekat lingkungan pesantren dan berbagai aktivitas santri dalam keseharian. Mulai dari kegiatan tahfizh, pembelajaran, ibadah, hingga kehidupan bersama di lingkungan PPTQ Nurul Huda.",
    image: news,
    featured: true,
    readMinutes: 4,
  },
  {
    slug: "perjalanan-tahfidz",
    title: "Mengawali Perjalanan Tahfizh dengan Tahsin Al-Qur'an",
    category: "Kegiatan",
    date: "2026-06-28",
    excerpt:
      "Santriwati baru mengawali perjalanan pendidikan Al-Qur'an melalui pembinaan tahsin dan perbaikan bacaan. Tahsin menjadi bagian penting sebelum santri melangkah lebih jauh dalam menghafal dan menjaga hafalan Al-Qur'an.",
    image: news2,
    readMinutes: 3,
  },
  {
    slug: "kedatangan-santri",
    title: "Ahlan wa Sahlan, Santri Baru Memulai Perjalanan di PPTQ Nurul Huda",
    category: "Kegiatan",
    date: "2026-06-10",
    excerpt:
      "Kedatangan santri baru menjadi awal perjalanan mereka menuntut ilmu dan menghafal Al-Qur'an di PPTQ Nurul Huda. Masa awal pesantren menjadi kesempatan untuk mengenal lingkungan, membangun kebersamaan, dan mulai beradaptasi dengan kehidupan santri.  ",
    image: Pendaftaran,
    readMinutes: 3,
  },
  {
    slug: "pembukaan-psb-2027",
    title: "Pendaftaran Santri Baru Tahun Ajaran 2027/2028 Resmi Dibuka",
    category: "Pengumuman",
    date: "2026-09-1",
    excerpt:
      "Gelombang pertama dibuka mulai 1 September 2026 dengan kuota terbatas untuk jenjang SMP dan SMA putra maupun putri.",
    image: campusImg,
    readMinutes: 2,
  },
  {
    slug: "halaqoh-belajar",
    title: "Halaqah di Luar Ma'had, Belajar Al-Qur'an dalam Suasana Kebersamaan",
    category: "Kegiatan",
    date: "2026-05-14",
    excerpt:
      "Kegiatan halaqah tidak hanya berlangsung di ruang belajar. Santri juga mengikuti halaqah di luar ma'had sebagai bagian dari pembinaan hafalan, kebersamaan, dan suasana belajar yang lebih dekat dengan alam dan lingkungan sekitar.",
    image: tahfidzImg,
    readMinutes: 6,
  },
  {
    slug: "rihlah-santri",
    title: "Rihlah Santri: Belajar, Bersantai, dan Menguatkan Kebersamaan",
    category: "Kegiatan",
    date: "2026-04-22",
    excerpt:
      "Rihlah menjadi bagian dari kehidupan pesantren untuk memberikan suasana yang berbeda setelah menjalani rutinitas pendidikan. Kegiatan ini menjadi sarana rekreasi sekaligus mempererat ukhuwah dan kebersamaan antarsantri.",
    image: computerLabImg,
    readMinutes: 3,
  },
  {
    slug: "lomba-tahfidz",
    title: "NHIC Internal Contest, Wadah Santri Mengembangkan Potensi",
    category: "Prestasi",
    date: "2026-04-05",
    excerpt:
      "NHIC (Nurul Huda Internal Contest) menjadi wadah bagi santri untuk mengembangkan keberanian, kemampuan, dan semangat berkompetisi. Kegiatan ini juga menjadi bagian dari pembinaan potensi santri di luar kegiatan rutin pesantren.",
    image: NHICImg,
    readMinutes: 4,
  },
  {
    slug: "mengapa-memilih-pendidikan-tahfidz",
    title: "Mengapa Memilih Pendidikan Tahfizh di Usia Remaja?",
    category: "Artikel",
    date: "2026-03-18",
    excerpt:
      "Masa remaja merupakan fase penting dalam pembentukan karakter dan kebiasaan. Pendidikan tahfizh dapat menjadi salah satu sarana untuk membangun kedisiplinan, kedekatan dengan Al-Qur'an, tanggung jawab, dan lingkungan pergaulan yang positif.",
    image: classroomImg,
    readMinutes: 3,
  },
  {
    slug: "mengenal-nurul-huda",
    title: "Mengenal Lebih Dekat PPTQ Nurul Huda",
    category: "Artikel",
    date: "2026-02-27",
    excerpt:
      "PPTQ Nurul Huda merupakan lembaga pendidikan yang memadukan pembelajaran, pembinaan karakter, dan pendidikan Al-Qur'an dalam kehidupan pesantren. Kenali lebih dekat lingkungan, nilai, program, dan kehidupan santri di PPTQ Nurul Huda.",
    image: libraryImg,
    readMinutes: 2,
  },
  {
    slug: "progam-tahfidz-nurul-nuda",
    title: "Program Tahfizh Al-Qur'an PPTQ Nurul Huda",
    category: "Artikel",
    date: "2026-02-09",
    excerpt:
      "Mengenal program tahfizh Al-Qur'an yang menjadi salah satu fokus utama pendidikan di PPTQ Nurul Huda. Santri dibimbing dalam proses menghafal, menjaga hafalan, memperbaiki bacaan, dan membangun kedekatan dengan Al-Qur'an.",
    image: dormitoryImg,
    readMinutes: 5,
  },
];

export const events: EventItem[] = [
  {
    title: "Pendaftaran Santri Baru 2027/2028",
    date: "2026-09-01",
    day: "01",
    month: "Sep",
    time: "08.00 WIB - Selesai",
    place: "Daring & Kantor PSB",
  },
  {
    title: "Outing Class",
    date: "2026-09-21",
    day: "21",
    month: "Sep",
    time: "07.00 – Selesai",
    place: "Tempat Kegiatan",
  },
  {
    title: "Kegiatan Peringatan Hari G30 S-PKI",
    date: "2026-09-30",
    day: "05",
    month: "Sep",
    time: "07.00 – Selesai",
    place: "Aula Pondok",
  },
  {
    title: "Ujian Tengah Semester",
    date: "2026-10-01",
    day: "01",
    month: "Okt",
    time: "09.00 – 14.00 WIB",
    place: "Kelas Masing2",
  },
];

export const testimonials = [
  {
    quote:
      "Maasyaallah, pembinaan tahfidz di Nurul Huda memang sangat baik. Sebelum mulai menghafal, kami dibekali tahsin langsung oleh ustadzah yang bersanad, dan itu benar-benar jadi bekal yang sangat penting dan sangat ber-atsar pada bacaan serta hafalan kami. Alhamdulillah, bekal itu masih kami rasakan sampai sekarang sebagai Alumni. Insyaallah, ini juga yang menjadi salah satu sebab bacaan dan hafalan para Alumni Nurul Huda tetap terjaga.",
    name: "Hilya",
    role: "Santriwati alumni angkatan I",
  },
  {
    quote:
      "Berawal dari pemilihan pondok Al-Qur’an yang bersanad, alhamdulillah menjadi sebuah karunia yang sangat indah bagi kami. Tiga putri kami berhasil menyelesaikan hafalan 30 juz dengan baik. Semua keberhasilan ini tentu tidak lepas dari ketekunan dan kegigihan para asatidz dalam membimbing, serta kehangatan dan kekeluargaan yang kami rasakan dalam pengasuhan para santri.",
    name: "Nur Aini",
    role: "Walisantri kelas XI",
  },
  {
    quote:
      "Alhamdulillah, kami sebagai alumni Nurul Huda merasakan banyak kebaikan dan perubahan dalam diri kami. Di sini kami tidak hanya belajar ilmu, tetapi juga adab, akhlak, tanggung jawab, kemandirian, dan kedisiplinan. Nurul Huda mengajarkan kami bahwa ilmu harus berjalan bersama adab. Bukan hanya tempat menuntut ilmu, tetapi juga tempat memperbaiki diri dan membentuk karakter. Semoga ilmu dan kebaikan yang kami dapatkan menjadi bekal yang bermanfaat dan terus melekat dalam diri kami di mana pun kami berada.",
    name: "Asya Karimah",
    role: "Santriwati alumni angkatan II",
  },
];

export const partners = [
  "Dikpora Magetan ",
  "LIPIA Jakarta dan Surabaya",
  "STDI Imam Syafi'i Jember",
  "Universitas Muhammadiyah",
  "Ma'had Aly",
  "Halaqah Online Masjid Nabawi",
];

export const gallery: GalleryItem[] = [
  { title: "Halaqah Tahfizh", category: "Kegiatan", image: tahfidzImg, type: "photo" },
  { title: "Masjid Pesantren", category: "Fasilitas", image: mosqueImg, type: "photo" },
  { title: "Wisuda Tahfidz Angkatan XII", category: "Prestasi", image: news1, type: "photo" },
  { title: "Kamar Asrama Santri", category: "Asrama", image: dormitoryImg, type: "photo" },
  { title: "Prestasi Santri", category: "Prestasi", image: libraryImg, type: "photo" },
  { title: "Kegiatan Silat Santri", category: "Kegiatan", image: tapaksuci, type: "photo" },
  { title: "Kegiatan Belajar Santri Putri", category: "Kegiatan", image: news2, type: "photo" },
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
  "Lulusan SD/MI atau sederajat.",
  "Mampu membaca Al-Qur'an.",
  "Memiliki kemampuan dasar hafalan Al-Qur'an.",
  "Bersedia tinggal di asrama dan menaati tata tertib pesantren.",
  "Mendapat persetujuan dan dukungan orang tua/wali.",
  "Melengkapi dokumen yang dipersyaratkan panitia.",
];

export const admissionSchedule = [
  { phase: "Periode I", period: "1 Sep – 31 Des 2026", note: "" },
  { phase: "Pendaftaran Tambahan", period: "Pendaftaran Tambahan Setelah masa pendaftaran berakhir, pendaftaran masih dapat dipertimbangkan secara terbatas apabila kuota santri masih tersedia.", note: "" },
  // { phase: "Gelombang III", period: "1 Mar – 30 Apr 2027", test: "10 Mei 2027", note: "Kuota terbatas" },
];

export const fees = [
  { item: "Biaya pendaftaran", amount: "Rp200.000", note: "Dibayar satu kali saat mendaftar" },
  { item: "Daftar Masuk", amount: "Rp5.500.000", note: "Wakaf bangunan, SPP bulan Juli, perlengkapan tidur, tempat menyimpan pakaian dan barang, buku pelajaran 1 semester, dan seragam" },
  { item: "SPP bulanan", amount: "Min. Rp500.000/bulan", note: "Pembayaran biaya pendidikan bulanan, makan 3x sehari, dll" },
  { item: "Kitab", amount: "±Rp300.000/semester", note: "Kebutuhan kitab pembelajaran harian santri per-semester" },
];

export const faqs: Faq[] = [
  {
    question: "Apakah calon santri harus sudah memiliki hafalan Al-Qur'an?",
    answer:
      "Tidak harus. Calon santri mengikuti seleksi sesuai kemampuan dasar yang dimiliki. Yang terpenting mampu membaca Al-Qur'an dengan baik dan memiliki kesiapan untuk mengikuti program tahfizh.",
  },
  {
    question: "Apa saja materi seleksi calon santri?",
    answer:
      "Seleksi meliputi tilawah, tahfizh, tsaqafah, serta wawancara dengan calon santri dan wali.",
  },
  {
    question: "Apakah santri harus tinggal di asrama?",
    answer:
      "Ya. Santri mengikuti pendidikan dan pembinaan dalam sistem asrama serta mengikuti tata tertib dan kegiatan harian pesantren.",
  },
  {
    question: "Berapa lama masa pendidikan di PPTQ Nurul Huda?",
    answer:
      "Program pendidikan dirancang selama 6 tahun, dengan perpaduan program tahfizhul Qur'an, kepondokan, dan pembelajaran nonformal.",
  },
  {
    question: "Apakah santri mendapatkan ijazah?",
    answer:
      "Ya. Santri mendapatkan ijazah kesetaraan (ijazah Paket) sesuai program pendidikan yang diikuti.",
  },
  {
    question: "Apakah santri menggunakan Bahasa Arab dan Inggris?",
    answer:
      "Ya. Bahasa Arab dan Inggris digunakan dalam keseharian santri pada waktu dan kegiatan yang telah ditentukan.",
  },
  {
    question: "Berapa biaya pendidikan di PPTQ Nurul Huda?",
    answer:
      "Biaya masuk sebesar Rp5.500.000, biaya bulanan minimal Rp500.000, dan kebutuhan kitab sekitar Rp300.000 per semester. Rincian lengkap disampaikan oleh panitia PSB.",
  },
  {
    question: "Kapan pendaftaran santri baru dibuka?",
    answer:
      "Pendaftaran TA 2027/2028 dibuka mulai 1 September sampai 31 Desember 2026. Setelah masa pendaftaran berakhir, pendaftaran tambahan dapat dipertimbangkan apabila kuota masih tersedia.",
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
