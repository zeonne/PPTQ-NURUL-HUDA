import { CalendarDays, Clock3 } from "lucide-react";

import type { NewsItem } from "@/types";
import { cn } from "@/lib/utils";

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article
      className={cn(
        "surface-card group flex h-full flex-col overflow-hidden",
        featured && "lg:flex-row",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "lg:w-1/2" : "aspect-[16/10]")}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={1200}
          height={800}
          className={cn(
            "size-full object-cover transition-transform duration-700 group-hover:scale-105",
            featured && "lg:h-full",
          )}
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col p-7", featured && "lg:justify-center lg:p-10")}>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {formatDate(item.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5" aria-hidden="true" />
            {item.readMinutes} menit baca
          </span>
        </div>
        <h3
          className={cn(
            "mt-3 font-display font-semibold text-balance",
            featured ? "text-2xl sm:text-3xl" : "text-lg",
          )}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
      </div>
    </article>
  );
}
