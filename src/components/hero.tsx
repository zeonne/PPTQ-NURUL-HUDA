import { Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { images, school } from "@/lib/data";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={images.hero}
        alt="Kompleks Pondok Pesantren Nurul Huda dengan masjid berkubah hijau saat matahari terbit"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-soft-deep/92 via-primary-soft-deep/72 to-primary-soft/45"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="container-page relative pt-32 pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-gold uppercase backdrop-blur-md">
            
            Qur'ani - Sederhana - Disiplin
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-white text-balance sm:text-5xl lg:text-6xl">
            Pondok Pesantren Tahfizhul Qur'an{" "}
            <span className="text-gold">Nurul Huda Magetan</span>
          </h1>

          <p className="mt-5 font-display text-lg text-white/90 sm:text-xl">{school.tagline}</p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {school.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/admissions">
                Daftar Santri Baru
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                <PhoneCall aria-hidden="true" />
                Hubungi Kami
              </Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {[
              { label: "Target hafalan", value: "30 Juz" },
              { label: "Rasio halaqah", value: "1 : 9" },
              { label: "Sejak tahun", value: "2018" },
            ].map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-wide text-white/60 uppercase">{fact.label}</dt>
                <dd className="mt-1 font-display text-xl font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
