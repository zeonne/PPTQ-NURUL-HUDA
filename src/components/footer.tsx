import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/logo";
import { programs, school } from "@/lib/data";

const quickLinks = [
  { label: "Tentang Kami", to: "/about" },
  { label: "Program", to: "/programs" },
  { label: "Fasilitas", to: "/facilities" },
  { label: "Berita", to: "/news" },
  { label: "Galeri", to: "/gallery" },
  { label: "Penerimaan Santri", to: "/admissions" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {school.tagline}. Membina santri penghafal Al-Qur'an yang berakhlak, cerdas, dan siap
            berkontribusi bagi umat.
          </p>
          <ul className="mt-6 flex gap-3">
            <li>
              <a
                href={school.social.instagram}
                aria-label="Instagram PPTQ Nurul Huda"
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-2xl border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={school.social.youtube}
                aria-label="YouTube PPTQ Nurul Huda"
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-2xl border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Youtube className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={school.social.facebook}
                aria-label="Facebook PPTQ Nurul Huda"
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-2xl border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={school.social.tiktok}
                aria-label="TikTok PPTQ Nurul Huda"
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-2xl border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.4V2h-3.35v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.03.87.12V9.5a6.27 6.27 0 1 0 5.38 6.2V8.43a8.17 8.17 0 0 0 4.77 1.52V6.6c-.34 0-.67.03-1 .09Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* <nav aria-label="Tautan cepat">
          <h2 className="font-display text-sm font-semibold tracking-wide text-gold uppercase">
            Tautan Cepat
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        <nav aria-label="Program pesantren">
          <h2 className="font-display text-sm font-semibold tracking-wide text-gold uppercase">
            Program
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link
                  to="/programs"
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Marifa Group">
          

          <h2 className="font-display text-sm font-semibold tracking-wide text-gold uppercase">
            Kontak
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{school.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}
                className="transition-colors hover:text-gold"
              >
                {school.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${school.email}`} className="transition-colors hover:text-gold">
                {school.email}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide text-gold uppercase">
            Supported By
          </h2>

          <div className="mt-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                <span className="text-xl text-gold">M</span>
              </div>

              <div>
                <p className="font-display text-lg font-semibold text-primary-foreground">
                  Marifa Group®
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  Konstruksi · Arsitektur · Desain
                </p>
              </div>
            </div>

            <a
              href="https://www.marifa.id"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm text-primary-foreground/75 underline decoration-primary-foreground/40 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
            >
              marifa.id ↗
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {school.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Kenongomulyo, Magetan · {school.hours}</p>
        </div>
      </div>
    </footer>
  );
}
