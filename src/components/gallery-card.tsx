import { Play, ZoomIn } from "lucide-react";

import type { GalleryItem } from "@/types";

export function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Buka ${item.type === "video" ? "video" : "foto"}: ${item.title}`}
      className="surface-card group relative block aspect-[4/3] w-full overflow-hidden text-left"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={1200}
        height={800}
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/15 to-transparent"
      />
      <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
        <span className="min-w-0">
          <span className="block text-xs font-semibold tracking-wide text-gold uppercase">
            {item.category}
          </span>
          <span className="mt-1 block font-display text-sm font-semibold text-white">
            {item.title}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-transform group-hover:scale-110"
        >
          {item.type === "video" ? <Play className="size-4" /> : <ZoomIn className="size-4" />}
        </span>
      </span>
    </button>
  );
}
