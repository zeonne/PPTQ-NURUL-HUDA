import { Reveal } from "@/components/reveal";
import type { TimelineEntry } from "@/types";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2"
      />
      {entries.map((entry, index) => (
        <Reveal
          as="li"
          key={entry.year}
          delay={index * 0.06}
          variant={index % 2 === 0 ? "left" : "right"}
          className="relative pb-10 pl-10 md:w-1/2 md:pl-0 md:odd:mr-auto md:odd:pr-12 md:odd:text-right md:even:ml-auto md:even:pl-12"
        >
          <span
            aria-hidden="true"
            className="absolute top-2 left-0 size-4 rounded-full border-2 border-gold bg-background md:top-2 md:left-auto md:odd:-right-2"
          />
          <p className="font-display text-sm font-semibold text-gold">{entry.year}</p>
          <h3 className="mt-1 font-display text-lg font-semibold">{entry.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
