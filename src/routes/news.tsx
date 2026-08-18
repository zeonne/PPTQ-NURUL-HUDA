import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { NewsCard } from "@/components/news-card";
import { PageHero } from "@/components/page-hero";
import { PageTransition, Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { images, news } from "@/lib/data";

const categories = ["Semua", "Prestasi", "Kegiatan", "Pengumuman", "Artikel"] as const;

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Berita & Kegiatan — PPTQ Nurul Huda" },
      {
        name: "description",
        content:
          "Kabar terbaru PPTQ Nurul Huda: prestasi santri, kegiatan pesantren, pengumuman resmi, dan artikel keislaman.",
      },
      { property: "og:title", content: "Berita & Kegiatan — PPTQ Nurul Huda" },
      {
        property: "og:description",
        content: "Ikuti perkembangan kegiatan dan prestasi santri Nurul Huda dari waktu ke waktu.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filtered = useMemo(
    () => (active === "Semua" ? news : news.filter((item) => item.category === active)),
    [active],
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="Kabar Pesantren"
        title="Berita, kegiatan, dan pengumuman"
        description="Dokumentasi perjalanan santri serta informasi resmi dari pengelola pesantren."
        image={images.campus}
      />

      <section aria-labelledby="daftar-berita" className="container-page py-20">
        <h2 id="daftar-berita" className="sr-only">
          Daftar berita
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

        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">
            Belum ada berita pada kategori ini.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
