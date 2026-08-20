import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MapPin, Quote } from "lucide-react";

import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { Reveal, PageTransition } from "@/components/reveal";
import { FeatureCard } from "@/components/feature-card";
import { StatCard } from "@/components/stat-card";
import { NewsCard, formatDate } from "@/components/news-card";
import { Button } from "@/components/ui/button";
import {
  advantages,
  events,
  gallery,
  images,
  news,
  partners,
  stats,
  testimonials,
} from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PPTQ Nurul Huda — Pesantren Tahfidz Qur'an Bogor" },
      {
        name: "description",
        content:
          "Pondok Pesantren Tahfidzul Qur'an Nurul Huda membina santri hafal 30 juz dengan kurikulum diniyah dan akademik terakreditasi A di Cileungsi, Bogor.",
      },
      { property: "og:title", content: "PPTQ Nurul Huda — Pesantren Tahfidz Qur'an Bogor" },
      {
        property: "og:description",
        content:
          "Mencetak Generasi Qur'ani Berakhlakul Karimah. Program tahfidz 30 juz, diniyah, dan akademik dalam satu kampus terpadu.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = news.find((item) => item.featured) ?? news[0]!;
  const latest = news.filter((item) => item.slug !== featured.slug).slice(0, 3);


  return (
    <PageTransition>
      <Hero />

      <section aria-labelledby="statistik" className="container-page -mt-16 pb-20 sm:-mt-20">
        <h2 id="statistik" className="sr-only">
          Statistik pesantren
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="keunggulan" className="container-page py-20">
        <SectionTitle
          eyebrow="Mengapa Nurul Huda"
          title="Enam Keunggulan PPTQ Nurul Huda"
          description="Kami memadukan tahfizhul Qur’an, pendidikan diniyah, pembinaan akhlak, dan pendidikan umum dalam keseharian santri yang terarah."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="berita" className="bg-primary-soft/60 py-20">
        <div className="container-page">
          <SectionTitle
            align="left"
            eyebrow="Kabar Pesantren"
            title="Berita terbaru"
            description="Informasi kegiatan, prestasi santri, dan perkembangan terbaru PPTQ Nurul Huda Magetan."
          />
          <h2 id="berita" className="sr-only">
            Kabar Pesantren
          </h2>

          <div className="mt-12 space-y-6">
            <Reveal>
              <NewsCard item={featured} featured />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {latest.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-10">
            <Button asChild variant="outline">
              <Link to="/news">
                Lihat semua berita
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="agenda" className="container-page py-20">
        <SectionTitle
          eyebrow="Agenda"
          title="Agenda Kegiatan Mendatang"
          description="Catat jadwal kegiatan penting dan ikuti berbagai aktivitas keluarga besar PPTQ Nurul Huda Magetan."
        />
        <h2 id="agenda" className="sr-only">
          Agenda Pesantren
        </h2>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <Reveal as="li" key={event.title} delay={index * 0.07} className="h-full">
              <article className="surface-card flex h-full flex-col p-7">
                <span className="flex size-16 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="font-display text-xl font-semibold">{event.day}</span>
                  <span className="text-[0.65rem] tracking-wide uppercase">{event.month}</span>
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-balance">
                  {event.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {event.time}
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {event.place}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                  <CalendarDays className="size-3.5 shrink-0" aria-hidden="true" />
                  {formatDate(event.date)}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="testimoni" className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-gold uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              Testimoni
            </p>
            <h2 id="testimoni" className="mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl">
              Cerita wali santri dan alumni
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal as="li" key={item.name} delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur-md">
                  <Quote className="size-7 text-gold" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-primary-foreground/85">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/12 pt-4">
                    <span className="block font-display text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-primary-foreground/60">{item.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="galeri" className="container-page py-20">
        <SectionTitle
          eyebrow="Galeri"
          title="Sekilas suasana pesantren"
          description="Halaqah tahfizh, kegiatan belajar, kehidupan asrama, hingga berbagai aktivitas santri di PPTQ Nurul Huda Magetan."
        />
        <h2 id="galeri" className="sr-only">
          Galeri pesantren
        </h2>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.06}>
              <figure className="surface-card group relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent"
                />
                <figcaption className="absolute inset-x-5 bottom-5 font-display text-sm font-semibold text-white">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/gallery">
              Buka galeri lengkap
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section aria-labelledby="mitra" className="border-y border-border bg-muted/50 py-14">
        <div className="container-page">
          <h2
            id="mitra"
            className="text-center font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
          >
            JEJARING & RUJUKAN PENDIDIKAN
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <Reveal as="li" key={partner} delay={index * 0.05}>
                <span className="flex h-16 items-center justify-center rounded-2xl border border-border bg-card px-4 text-center text-xs font-semibold text-muted-foreground transition-colors hover:border-gold/50 hover:text-primary">
                  {partner}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cta" className="container-page py-20">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground sm:px-14">
            <img
              src={images.campus}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-20"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 to-primary/70"
            />
            <div className="relative max-w-2xl">
              <h2 id="cta" className="font-display text-3xl font-semibold text-balance sm:text-4xl">
                Siapkan Langkah Putra-Putri Anda Bersama Al-Qur’an
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Penerimaan Santri Baru dibuka secara bertahap. Dapatkan informasi persyaratan, jadwal, dan proses pendaftaran melalui panitia PSB PPTQ Nurul Huda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="lg">
                  <Link to="/admissions">
                    Informasi Pendaftaran
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Jadwalkan Kunjungan</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
