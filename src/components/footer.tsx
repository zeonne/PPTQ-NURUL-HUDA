import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/logo";
import { programs, school } from "@/lib/data";

const quickLinks = [
  { label: "Tentang Kami", to: "/about" },
  { label: "Dewan Guru", to: "/teachers" },
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
          </ul>
        </div>

        <nav aria-label="Tautan cepat">
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
        </nav>

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

        <div>
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {school.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Cileungsi, Kabupaten Bogor · {school.hours}</p>
        </div>
      </div>
    </footer>
  );
}
