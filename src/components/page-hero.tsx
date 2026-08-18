import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-primary-deep pt-32 pb-20 sm:pt-40 sm:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-deep/95 via-primary-deep/85 to-primary/70"
      />
      <div className="container-page relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}

          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}
