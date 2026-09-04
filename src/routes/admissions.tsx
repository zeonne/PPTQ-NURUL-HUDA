import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, MessageCircle } from "lucide-react";

import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import {
  admissionSchedule,
  admissionSteps,
  faqs,
  fees,
  images,
  requirements,
  school,
} from "@/lib/data";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Penerimaan Santri Baru 2027 — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Alur pendaftaran, persyaratan, jadwal gelombang, rincian biaya, dan beasiswa penerimaan santri baru PPTQ Nurul Huda tahun ajaran 2027/2028.",
      },
      { property: "og:title", content: "Penerimaan Santri Baru 2027 — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Gelombang I dibuka 1 September 2026 dengan diskon uang pangkal 15%.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="PSB 2027/2028"
        title="Penerimaan Santri Baru PPTQ Nurul Huda telah dibuka"
        description="Ikuti alur pendaftaran dan seleksi calon santri. Panitia PSB siap mendampingi Anda dari pendaftaran hingga ta'aruf."
        image={images.classroom}
      >
        <Button asChild variant="gold">
          <a
            href={`https://wa.me/${school.whatsapp}?text=Assalamualaikum,%20saya%20ingin%20mendaftar%20PSB%20Nurul%20Huda`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <MessageCircle aria-hidden="true" />
            Daftar via WhatsApp
          </a>
        </Button>
        <Button asChild variant="hero">
          <Link to="/contact">Tanya Panitia</Link>
        </Button>
      </PageHero>

      <section aria-labelledby="alur" className="container-page py-20">
        <SectionTitle
          eyebrow="Alur Pendaftaran"
          title="Enam langkah menjadi santri Nurul Huda"
          description="Seluruh proses dapat dimulai secara daring tanpa perlu datang ke pesantren."
        />
        <h2 id="alur" className="sr-only">
          Alur pendaftaran
        </h2>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {admissionSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 0.06} className="h-full">
              <article className="surface-card h-full p-7">
                <span className="font-display text-3xl font-semibold text-gold">{step.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="jadwal-psb" className="bg-primary-soft/60 py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 id="jadwal-psb" className="font-display text-2xl font-semibold">
              Jadwal pendaftaran Santri Baru
            </h2>
            <ul className="mt-6 space-y-4">
              {admissionSchedule.map((phase) => (
                <li key={phase.phase} className="surface-card p-6 hover:translate-y-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-primary">
                      {phase.phase}
                    </h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-strong">
                      {phase.note}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground"> {phase.period}</p>
                  <p className="text-sm text-muted-foreground"> {phase.test}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold">Persyaratan pendaftaran</h2>
            <ul className="surface-card mt-6 space-y-3 p-7 hover:translate-y-0">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Pendaftaran tambahan bukan gelombang baru dan tetap melalui proses seleksi sesuai ketentuan PPTQ Nurul Huda.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="biaya" className="container-page py-20">
        <SectionTitle
          eyebrow="Rincian Biaya"
          title="Rincian Biaya Pendidikan Santri Baru"
          description="Informasi biaya disampaikan secara terbuka sejak awal agar wali santri memahami kebutuhan pendidikan dan pembinaan selama di pesantren."
        />
        <h2 id="biaya" className="sr-only">
          Rincian biaya
        </h2>
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Rincian biaya pendidikan santri baru</caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th scope="col" className="px-6 py-4 font-display font-semibold">
                    Komponen
                  </th>
                  <th scope="col" className="px-6 py-4 font-display font-semibold">
                    Nominal
                  </th>
                  <th scope="col" className="px-6 py-4 font-display font-semibold">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fees.map((fee) => (
                  <tr key={fee.item}>
                    <th scope="row" className="px-6 py-4 font-medium text-foreground">
                      {fee.item}
                    </th>
                    <td className="px-6 py-4 font-display font-semibold text-primary">
                      {fee.amount}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{fee.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal className="mt-6 flex flex-wrap gap-3">
          {/* <Button asChild variant="outline">
            <a href={`mailto:${school.admissionEmail}`}>
              <Download aria-hidden="true" />
              Minta brosur lengkap
            </a>
          </Button> */}
          <span className="text-xs text-muted-foreground sm:self-center">
            Rincian biaya dapat disampaikan lebih lengkap oleh panitia PSB kepada calon santri dan wali santri pada saat proses pendaftaran.
          </span>
        </Reveal>
      </section>

      <section aria-labelledby="faq" className="bg-muted/50 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Belum menemukan jawabannya? Hubungi panitia PSB melalui WhatsApp resmi pesantren."
          />
          <h2 id="faq" className="sr-only">
            Pertanyaan yang sering diajukan
          </h2>
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
