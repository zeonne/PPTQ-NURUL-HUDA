import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { images, school } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Lokasi — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Hubungi PPTQ Nurul Huda Cileungsi, Bogor melalui telepon, WhatsApp, atau email. Lihat alamat, jam layanan, dan peta lokasi pesantren.",
      },
      { property: "og:title", content: "Kontak & Lokasi — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Alamat, nomor WhatsApp resmi, email, jam layanan, dan formulir pesan pesantren.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: MapPin, label: "Alamat", value: school.address },
    { icon: Phone, label: "Telepon", value: school.phone, href: `tel:${school.phone.replace(/\s/g, "")}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: school.whatsappDisplay,
      href: `https://wa.me/${school.whatsapp}`,
    },
    { icon: Mail, label: "Email", value: school.email, href: `mailto:${school.email}` },
    { icon: Clock, label: "Jam Layanan", value: school.hours },
  ];

  return (
    <PageTransition>
      <PageHero
        eyebrow="Kontak"
        title="Kami siap menjawab pertanyaan Anda"
        description="Sampaikan pertanyaan tentang pendaftaran, kunjungan, kerja sama, atau program pesantren melalui kanal resmi berikut."
        image={images.dormitory}
      >
        <Button asChild variant="gold">
          <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noreferrer noopener">
            <MessageCircle aria-hidden="true" />
            Chat WhatsApp
          </a>
        </Button>
      </PageHero>

      <section aria-labelledby="informasi-kontak" className="container-page py-20">
        <h2 id="informasi-kontak" className="sr-only">
          Informasi kontak
        </h2>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              Informasi
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-balance">
              Datang, telepon, atau kirim pesan
            </h3>
            <ul className="mt-8 space-y-4">
              {details.map((detail) => (
                <li key={detail.label} className="surface-card flex gap-4 p-6 hover:translate-y-0">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary"
                  >
                    <detail.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right">
            <div className="surface-card p-7 hover:translate-y-0 sm:p-9">
              <h3 className="font-display text-2xl font-semibold">Kirim pesan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Isi formulir berikut dan panitia kami akan menghubungi Anda pada hari kerja.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="peta" className="pb-20">
        <div className="container-page">
          <h2 id="peta" className="font-display text-2xl font-semibold">
            Lokasi pesantren
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Berjarak sekitar 15 menit dari pintu keluar Tol Cibubur–Cileungsi.
          </p>
          <Reveal className="mt-6 overflow-hidden rounded-[1.75rem] border border-border">
            <iframe
              src={school.mapEmbed}
              title={`Peta lokasi ${school.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
