import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Halaman ini gagal dimuat
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Terjadi kendala pada sisi kami. Silakan coba muat ulang atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Coba lagi
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ke beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // SEO
      {
        title: "PPTQ Nurul Huda Magetan | Pesantren Tahfidzul Qur'an",
      },
      {
        name: "description",
        content:
          "PPTQ Nurul Huda Magetan adalah pondok pesantren tahfidzul Qur'an yang memadukan hafalan Al-Qur'an, pendidikan diniyah, pembinaan akhlak, dan pendidikan akademik.",
      },
      {
        name: "author",
        content: "Pondok Pesantren Tahfizhul Qur'an Nurul Huda",
      },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PPTQ Nurul Huda Magetan" },
      { property: "og:locale", content: "id_ID" },
      {
        property: "og:title",
        content: "PPTQ Nurul Huda Magetan | Pesantren Tahfidzul Qur'an",
      },
      {
        property: "og:description",
        content:
          "Pondok Pesantren Tahfidzul Qur'an Nurul Huda Magetan. Membina hafalan Al-Qur'an, ilmu, dan akhlak.",
      },
      {
        property: "og:url",
        content: "https://www.nurulhudamagetan.id/",
      },
      {
        property: "og:image",
        content: "https://www.nurulhudamagetan.id/og-image.jpg",
      },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "PPTQ Nurul Huda Magetan | Pesantren Tahfidzul Qur'an",
      },
      {
        name: "twitter:description",
        content:
          "Pondok Pesantren Tahfidzul Qur'an Nurul Huda Magetan.",
      },
      {
        name: "twitter:image",
        content: "https://www.nurulhudamagetan.id/og-image.jpg",
      },

      { name: "theme-color", content: "#043927" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nurulhudamagetan.id/",},
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "School",
              "@id": "https://www.nurulhudamagetan.id/#school",
              name: "Pondok Pesantren Tahfizhul Qur'an Nurul Huda",
              alternateName: "PPTQ Nurul Huda Magetan",
              url: "https://www.nurulhudamagetan.id/",
              slogan: "Mencetak Generasi Qur'ani Berakhlakul Karimah",
              description:
                "Pondok Pesantren Tahfidzul Qur'an Nurul Huda Magetan yang memadukan hafalan Al-Qur'an, pendidikan diniyah, pembinaan akhlak, dan pendidikan akademik.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dusun Secikal, RT/RW 04/01, Kenongomulyo",
                addressLocality: "Kenongomulyo",
                addressRegion: "Jawa Timur",
                postalCode: "63383",
                addressCountry: "ID",
              },
              email: "mailto:pptq.nurulhuda1@gmail.com",
            },

            {
              "@type": "WebSite",
              "@id": "https://www.nurulhudamagetan.id/#website",
              url: "https://www.nurulhudamagetan.id/",
              name: "PPTQ Nurul Huda Magetan",
              description:
                "Website resmi Pondok Pesantren Tahfizhul Qur'an Nurul Huda Magetan.",
              inLanguage: "id-ID",
              publisher: {
                "@id": "https://www.nurulhudamagetan.id/#school",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </QueryClientProvider>
  );
}
