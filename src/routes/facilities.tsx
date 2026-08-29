import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { facilities, images } from "@/lib/data";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Fasilitas Kampus — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Masjid, asrama, perpustakaan, laboratorium komputer, ruang kelas, sarana olahraga, dan dapur santri di kampus terpadu PPTQ Nurul Huda.",
      },
      { property: "og:title", content: "Fasilitas Kampus — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Sarana belajar dan hunian santri yang bersih, aman, dan nyaman di lahan 2,4 hektare.",
      },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const highlights = [
  "Area putra dan putri terpisah dalam lingkungan pesantren.",
  "Pendampingan pembina dalam kehidupan dan kegiatan harian santri.",
  "Pemantauan lingkungan dengan CCTV di sebagian area asrama.",
  "Layanan kesehatan dan akses ke puskesmas/UGD bila diperlukan.",
  "Air bersih dan sanitasi untuk menunjang kebutuhan sehari-hari.",
  "Penyediaan makanan terjadwal serta dukungan program MBG.",
  "Kegiatan olahraga dan fasilitas belajar untuk mendukung keseimbangan pendidikan santri.",
  "Komunikasi dan informasi santri melalui wali santri/pengurus sesuai ketentuan pesantren.",
  "Pembinaan kehidupan asrama melalui ibadah berjamaah, murojaah, belajar malam, kebersihan, dan kedisiplinan.",
];

function FacilitiesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Fasilitas"
        title="Lingkungan yang mendukung hafalan dan tumbuh kembang santri"
        description="Sarana pesantren dirancang agar santri nyaman beribadah, belajar, beristirahat, dan berolahraga dalam satu kawasan."
        image={images.mosque}
      >
        <Button asChild variant="gold">
          <Link to="/contact">
            Jadwalkan Kunjungan
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section aria-labelledby="daftar-fasilitas" className="container-page py-20">
        <SectionTitle
          eyebrow="Sarana Utama"
          title="Fasilitas yang digunakan santri setiap hari"
          description="Setiap ruang dirawat berkala dan dikelola bersama santri sebagai bagian dari pendidikan kemandirian."
        />
        <h2 id="daftar-fasilitas" className="sr-only">
          Daftar fasilitas
        </h2>
        <ul className="mt-14 space-y-16">
          {facilities.map((facility, index) => (
            <li key={facility.name}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <Reveal as="article" variant={index % 2 === 1 ? "right" : "left"}>
                  <p className="eyebrow">
                    <span aria-hidden="true" className="h-px w-6 bg-gold" />
                    Fasilitas {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-balance sm:text-3xl">
                    {facility.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                  <p className="mt-4 rounded-2xl bg-primary-soft p-4 text-sm text-primary">
                    {facility.detail}
                  </p>
                </Reveal>
                <Reveal as="div" variant={index % 2 === 1 ? "left" : "right"}>
                  <figure>
                    <img
                      src={facility.image}
                      alt={facility.name}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
                    />
                  </figure>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="layanan" className="bg-primary-soft/60 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <h2 id="layanan" className="font-display text-3xl font-semibold text-balance">
              Layanan pendukung untuk ketenangan wali santri
            </h2>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right">
            <img
              src={images.sports}
              alt="Lapangan olahraga santri di kampus pesantren"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
