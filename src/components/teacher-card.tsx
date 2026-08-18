import { GraduationCap, Instagram, Linkedin, Mail } from "lucide-react";

import type { Teacher } from "@/types";

function initials(name: string) {
  return name
    .replace(/(KH\.|Ust\.|Ustadzah|Dr\.|Bapak|Ibu)/g, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="surface-card flex h-full flex-col p-7 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-20 place-items-center rounded-3xl bg-primary font-display text-xl font-semibold text-gold"
      >
        {initials(teacher.name)}
      </span>
      <h3 className="mt-5 font-display text-base font-semibold text-balance">{teacher.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{teacher.position}</p>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <GraduationCap className="size-4 shrink-0 text-gold" aria-hidden="true" />
        {teacher.education}
      </p>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {teacher.expertise.map((item) => (
          <li
            key={item}
            className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex justify-center gap-2">
        {teacher.email ? (
          <li>
            <a
              href={`mailto:${teacher.email}`}
              aria-label={`Kirim email ke ${teacher.name}`}
              className="grid size-11 place-items-center rounded-2xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </li>
        ) : null}
        {teacher.instagram ? (
          <li>
            <a
              href={teacher.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${teacher.name}`}
              className="grid size-11 place-items-center rounded-2xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
          </li>
        ) : null}
        {teacher.linkedin ? (
          <li>
            <a
              href={teacher.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`LinkedIn ${teacher.name}`}
              className="grid size-11 place-items-center rounded-2xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </li>
        ) : null}
      </ul>
    </article>
  );
}
