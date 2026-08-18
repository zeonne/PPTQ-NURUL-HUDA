import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { TeacherCard } from "@/components/teacher-card";
import { Button } from "@/components/ui/button";
import { images, teachers } from "@/lib/data";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Dewan Guru & Asatidz — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Profil pengasuh, asatidz tahfidz bersanad, dan guru akademik PPTQ Nurul Huda beserta latar pendidikan dan bidang keahliannya.",
      },
      { property: "og:title", content: "Dewan Guru & Asatidz — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Dibina 68 asatidz, termasuk hafizh bersanad dan guru akademik bergelar magister.",
      },
      { property: "og:url", content: "/teachers" },
    ],
    links: [{ rel: "canonical", href: "/teachers" }],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Dewan Guru"
        title="Dibimbing asatidz bersanad dan guru berpengalaman"
        description="Rasio satu musyrif untuk maksimal delapan santri memastikan pendampingan hafalan dan akhlak berjalan personal."
        image={images.tahfidz}
      >
        <Button asChild variant="gold">
          <Link to="/programs">
            Lihat Program Pembinaan
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section aria-labelledby="asatidz" className="container-page py-20">
        <SectionTitle
          eyebrow="Profil Asatidz"
          title="Mereka yang mendampingi santri setiap hari"
          description="Setiap asatidz memiliki spesialisasi tersendiri, dari sanad qira'ah hingga pembinaan olimpiade sains."
        />
        <h2 id="asatidz" className="sr-only">
          Profil asatidz
        </h2>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <Reveal as="li" key={teacher.name} delay={index * 0.05} className="h-full">
              <TeacherCard teacher={teacher} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="karier" className="container-page pb-20">
        <Reveal>
          <div className="surface-card flex flex-col items-start gap-6 p-9 hover:translate-y-0 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="karier" className="font-display text-2xl font-semibold text-balance">
                Bergabung menjadi bagian dari dewan guru
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Kami membuka kesempatan bagi hafizh/hafizhah dan guru mata pelajaran yang ingin
                mengabdi di lingkungan pesantren.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/contact">
                Kirim Lamaran
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
