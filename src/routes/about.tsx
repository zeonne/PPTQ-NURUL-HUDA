import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Target } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { coreValues, dailySchedule, images, missions, orgStructure, school, teachers, timeline } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Profil Pesantren — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Sejarah, visi, misi, nilai, struktur organisasi, dan dewan guru Pondok Pesantren Tahfidzul Qur'an Nurul Huda Cileungsi, Bogor.",
      },
      { property: "og:title", content: "Profil Pesantren — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Perjalanan sejak 2018, visi-misi, nilai inti, dan struktur pengelola pesantren.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Profil"
        title="Tumbuh dari majelis kecil menjadi pesantren tahfidz terpadu"
        description="Sejak 1998 Nurul Huda konsisten membina santri penghafal Al-Qur'an yang berakhlak, mandiri, dan siap melanjutkan pendidikan tinggi di dalam maupun luar negeri."
        image={images.campus}
      >
        <Button asChild variant="gold">
          <Link to="/admissions">
            Informasi Pendaftaran
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        {/* <Button asChild variant="hero">
          <Link to="/teachers">Lihat Dewan Guru</Link>
        </Button> */}
      </PageHero>

      <section aria-labelledby="sejarah" className="container-page py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              Sejarah
            </p>
            <h2 id="sejarah" className="mt-3 text-3xl font-semibold text-balance sm:text-4xl">
              Bermula dari dua belas santri di serambi masjid
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Nurul Huda lahir pada 1998 ketika KH. Abdul Aziz Rahman membuka majelis tahfidz bagi
                dua belas anak di serambi masjid kampung. Kegiatan sederhana itu tumbuh cepat karena
                wali santri melihat perubahan nyata pada hafalan dan adab anak-anak mereka.
              </p>
              <p>
                Asrama pertama berdiri pada 2003, disusul pembukaan jenjang SMP pada 2009 dan SMA
                pada 2014. Perpaduan hafalan Al-Qur'an, kajian kitab, serta kurikulum nasional
                menjadi ciri khas yang dipertahankan hingga kini.
              </p>
              <p>
                Hari ini pesantren mengelola kampus terpadu di Cileungsi dengan 842 santri aktif, 68
                asatidz, dan lebih dari 2.350 alumni yang tersebar di berbagai perguruan tinggi serta
                lembaga dakwah.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right">
            <img
              src={images.mosque}
              alt="Interior masjid pesantren tempat halaqah tahfidz berlangsung"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="visi-misi" className="bg-primary-soft/60 py-20">
        <div className="container-page grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <article className="surface-card h-full p-8 hover:translate-y-0">
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-2xl bg-primary text-gold"
              >
                <Target className="size-6" />
              </span>
              <h2 id="visi-misi" className="mt-5 font-display text-2xl font-semibold">
                Visi
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Menjadi pesantren tahfidz rujukan yang melahirkan generasi Qur'ani berakhlakul
                karimah, unggul dalam ilmu, dan bermanfaat bagi masyarakat.
              </p>
              <p className="mt-6 rounded-2xl bg-primary-soft p-4 font-display text-sm font-medium text-primary">
                “{school.tagline}”
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <article className="surface-card h-full p-8 hover:translate-y-0">
              <h2 className="font-display text-2xl font-semibold">Misi</h2>
              <ul className="mt-5 space-y-3">
                {missions.map((mission) => (
                  <li key={mission} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="nilai" className="container-page py-20">
        <SectionTitle
          eyebrow="Nilai Inti"
          title="Enam nilai yang menjadi pijakan keseharian santri"
          description="Nilai ini diterjemahkan menjadi aturan, kebiasaan, dan budaya kerja seluruh warga pesantren."
        />
        <h2 id="nilai" className="sr-only">
          Nilai inti pesantren
        </h2>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = getIcon(value.icon);
            return (
              <Reveal as="li" key={value.title} delay={index * 0.06} className="h-full">
                <article className="surface-card h-full p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="sambutan" className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="left">
            <img
              src={images.principal}
              alt="KH. Abdul Aziz Rahman, Pengasuh Pondok Pesantren Nurul Huda"
              loading="lazy"
              width={800}
              height={1000}
              className="mx-auto w-full max-w-sm rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal variant="right">
            <Quote className="size-8 text-gold" aria-hidden="true" />
            <h2 id="sambutan" className="mt-5 font-display text-3xl font-semibold text-balance">
              Sambutan Pengasuh
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-primary-foreground/80">
              <p>
                Assalamu'alaikum warahmatullahi wabarakatuh. Segala puji bagi Allah yang menjadikan
                Al-Qur'an sebagai cahaya bagi hati yang bersungguh-sungguh menjaganya.
              </p>
              <p>
                Di Nurul Huda kami meyakini hafalan tanpa adab akan kehilangan keberkahannya. Karena
                itu setiap santri didampingi wali asuh yang memantau hafalan, ibadah, dan pergaulan
                hariannya secara personal.
              </p>
              <p>
                Kami mengundang para orang tua untuk bermitra dalam mendidik. Semoga Allah menjadikan
                putra-putri kita ahlul Qur'an yang bermanfaat bagi umat.
              </p>
            </div>
            <p className="mt-6 font-display text-base font-semibold text-gold">
              KH. Abdul Aziz Rahman, Lc., M.A.
            </p>
            <p className="text-xs text-primary-foreground/60">Pengasuh Pesantren</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="struktur" className="container-page py-20">
        <SectionTitle
          eyebrow="Struktur Organisasi"
          title="Pengelola pesantren"
          description="Tata kelola yang jelas memastikan setiap aspek pembinaan santri berjalan terukur."
        />
        <h2 id="struktur" className="sr-only">
          Struktur organisasi
        </h2>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orgStructure.map((entry, index) => (
            <Reveal as="li" key={entry.role} delay={index * 0.05} className="h-full">
              <article className="surface-card h-full p-6">
                <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                  {entry.role}
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-balance">{entry.name}</p>
              </article>
            </Reveal>
          ))}
        </ul>
        {/* <Reveal className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/teachers">
              Lihat seluruh dewan guru ({teachers.length} asatidz)
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal> */}
      </section>

      <section aria-labelledby="jadwal" className="bg-muted/50 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Keseharian"
            title="Jadwal harian santri"
            description="Ritme harian yang tertib menjadi kunci konsistensi hafalan dan ibadah."
          />
          <h2 id="jadwal" className="sr-only">
            Jadwal harian santri
          </h2>
          <ul className="mx-auto mt-12 max-w-2xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {dailySchedule.map((slot) => (
              <li key={slot.time} className="flex items-center gap-5 px-6 py-4">
                <span className="w-16 shrink-0 font-display text-sm font-semibold text-primary">
                  {slot.time}
                </span>
                <span className="text-sm text-muted-foreground">{slot.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="linimasa" className="container-page py-20">
        <SectionTitle
          eyebrow="Linimasa"
          title="Perjalanan pesantren"
          description="Tonggak penting yang membentuk Nurul Huda seperti hari ini."
        />
        <h2 id="linimasa" className="sr-only">
          Linimasa pesantren
        </h2>
        <div className="mt-14">
          <Timeline entries={timeline} />
        </div>
      </section>
    </PageTransition>
  );
}
