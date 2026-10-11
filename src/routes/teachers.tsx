import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, ExternalLink, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/data";

/**
 * Daftar layanan digital untuk wali santri.
 *
 * Untuk menambahkan aplikasi baru di kemudian hari,
 * cukup tambahkan object baru ke array ini.
 */
const studentServices = [
  {
    title: "Monitoring Hafalan Santri",
    description:
      "Pantau perkembangan hafalan Al-Qur'an ananda melalui sistem monitoring tahfidz PPTQ Nurul Huda.",
    detail: "Untuk wali santri",
    icon: BookOpenCheck,
    href: "https://zeonne.github.io/aplikasi-tahfidz/",
    action: "Buka Monitoring",
  },

  // Nanti aplikasi lain tinggal ditambahkan di sini.
];

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Progres Santri — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Akses layanan digital PPTQ Nurul Huda untuk memantau perkembangan dan informasi santri.",
      },
      {
        property: "og:title",
        content: "Progres Santri — PPTQ Nurul Huda",
      },
      {
        property: "og:description",
        content:
          "Akses layanan digital PPTQ Nurul Huda untuk membantu wali memantau perkembangan ananda.",
      },
      { property: "og:url", content: "/teachers" },
    ],
    links: [{ rel: "canonical", href: "/teachers" }],
  }),

  component: StudentProgressPage,
});

function StudentProgressPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Progres Santri"
        title="Pantau perkembangan ananda dengan lebih mudah"
        description="Akses berbagai layanan digital PPTQ Nurul Huda untuk membantu wali santri memperoleh informasi perkembangan ananda secara praktis."
        image={images.tahfidz}
      />

      <section aria-labelledby="layanan-digital" className="container-page py-20">
        <SectionTitle
          eyebrow="Layanan Digital"
          title="Akses layanan untuk wali santri"
          description="Pilih layanan yang ingin Anda gunakan. Berbagai layanan dapat ditambahkan secara bertahap."
        />

        <h2 id="layanan-digital" className="sr-only">
          Layanan digital untuk wali santri
        </h2>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {studentServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal as="li" key={service.title} delay={index * 0.05} className="h-full">
                <article className="surface-card flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="size-7" aria-hidden="true" />
                    </div>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {service.detail}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-7">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href={service.href} target="_blank" rel="noopener noreferrer">
                        {service.action}
                        <ExternalLink aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="akses-wali" className="container-page pb-20">
        <Reveal>
          <div className="surface-card flex flex-col gap-5 p-8 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </div>

              <div>
                <h2 id="akses-wali" className="font-display text-xl font-semibold text-foreground">
                  Akses khusus wali santri
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Gunakan akun yang telah diberikan oleh pengurus PPTQ Nurul Huda untuk mengakses
                  layanan yang tersedia.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span>Butuh bantuan?</span>

              <a className="inline-flex items-center gap-1 hover:underline" href="/contact">
                Hubungi kami
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
