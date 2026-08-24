import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { images, programs } from "@/lib/data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Program Pendidikan — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Enam program unggulan PPTQ Nurul Huda: tahfidz 30 juz, islamic studies, akademik nasional, bahasa Arab-Inggris, kepemimpinan, dan ekstrakurikuler.",
      },
      { property: "og:title", content: "Program Pendidikan — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content:
          "Detail durasi, manfaat, dan kegiatan setiap program pendidikan santri di PPTQ Nurul Huda.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Program Pendidikan"
        title="Pendidikan Qur’ani yang memadukan hafalan, ilmu, dan pembentukan karakter"
        description="Pendidikan PPTQ Nurul Huda memadukan tahfizhul Qur’an, tahsin, diniyah dan kajian kitab, pendidikan umum, bahasa, serta pembinaan adab dalam kehidupan pesantren yang terarah dan berkesinambungan."
        image={images.tahfidz}
      >
        <Button asChild variant="gold">
          <Link to="/admissions">
            Daftar Sekarang
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section aria-labelledby="daftar-program" className="container-page py-20">
        <SectionTitle
          eyebrow="Enam Program Unggulan"
          title="Pilihan pembinaan yang saling melengkapi"
          description="Program inti tahfidz berjalan berdampingan dengan diniyah, akademik, bahasa, kepemimpinan, dan pengembangan bakat."
        />
        <h2 id="daftar-program" className="sr-only">
          Daftar program
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.06}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="konsultasi" className="container-page pb-20">
        <Reveal>
          <div className="surface-card flex flex-col items-start gap-6 p-9 hover:translate-y-0 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="konsultasi" className="font-display text-2xl font-semibold text-balance">
                Belum yakin program mana yang paling sesuai?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Panitia kami siap membantu memetakan kemampuan awal dan target hafalan calon santri.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/contact">
                Konsultasi Gratis
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
