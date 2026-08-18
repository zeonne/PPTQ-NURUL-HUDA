import { CheckCircle2, Clock } from "lucide-react";

import { getIcon } from "@/lib/icons";
import type { Program } from "@/types";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = getIcon(program.icon);

  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={program.image}
          alt={`Kegiatan program ${program.title}`}
          loading="lazy"
          width={1200}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/10 to-transparent"
        />
        <span
          aria-hidden="true"
          className="absolute top-4 left-4 grid size-11 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md"
        >
          <Icon className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold">{program.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{program.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.description}</p>

        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
          <Clock className="size-3.5" aria-hidden="true" />
          {program.duration}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wide uppercase">Manfaat</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {program.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wide uppercase">Kegiatan</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {program.activities.map((activity) => (
                <li key={activity} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
