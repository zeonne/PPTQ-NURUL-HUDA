import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { GalleryCard } from "@/components/gallery-card";
import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery, images } from "@/lib/data";
import type { GalleryItem } from "@/types";

const categories = ["Semua", "Kegiatan", "Fasilitas", "Prestasi", "Asrama"] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri Foto & Video — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Kumpulan foto dan video kegiatan santri, fasilitas kampus, prestasi, dan kehidupan asrama PPTQ Nurul Huda.",
      },
      { property: "og:title", content: "Galeri Foto & Video — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Lihat suasana halaqah, asrama, dan fasilitas kampus terpadu Nurul Huda.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () => (active === "Semua" ? gallery : gallery.filter((item) => item.category === active)),
    [active],
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="Galeri"
        title="Momen keseharian santri dalam gambar"
        description="Dari halaqah subuh hingga kegiatan ekstrakurikuler sore, inilah wajah pesantren kami."
        image={images.language}
      />

      <section aria-labelledby="media" className="container-page py-20">
        <h2 id="media" className="sr-only">
          Galeri media
        </h2>
        <Reveal className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              size="sm"
              variant={active === category ? "default" : "outline"}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.05}>
              <GalleryCard item={item} onOpen={setSelected} />
            </Reveal>
          ))}
        </ul>
      </section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          <DialogTitle className="px-6 pt-6 font-display text-lg">{selected?.title}</DialogTitle>
          {selected?.type === "video" && selected.videoUrl ? (
            <div className="aspect-video w-full">
              <iframe
                src={selected.videoUrl}
                title={selected.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          ) : selected ? (
            <img
              src={selected.image}
              alt={selected.title}
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          ) : null}
          <p className="px-6 pb-6 text-xs text-muted-foreground">{selected?.category}</p>
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
}
