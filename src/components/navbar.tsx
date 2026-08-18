import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navItems, school } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero
          ? "bg-transparent py-2"
          : "border-b border-border/70 bg-background/85 py-1 shadow-[var(--shadow-soft)] backdrop-blur-xl",
      )}
    >
      <nav aria-label="Navigasi utama" className="container-page">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <Link to="/" aria-label={`${school.shortName} — beranda`} className="min-w-0">
            <Logo variant={overHero ? "light" : "default"} />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(item.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openGroup === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      overHero
                        ? "text-white/85 hover:bg-white/10 hover:text-white"
                        : "text-foreground/80 hover:bg-primary-soft hover:text-primary",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-4 transition-transform",
                        openGroup === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openGroup === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-72 pt-3"
                      >
                        <ul className="surface-card overflow-hidden p-2 hover:translate-y-0">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-soft"
                              >
                                <span className="block text-sm font-medium text-foreground">
                                  {child.label}
                                </span>
                                {child.description ? (
                                  <span className="block text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    overHero
                      ? "text-white/85 hover:bg-white/10 hover:text-white data-[status=active]:text-white"
                      : "text-foreground/80 hover:bg-primary-soft hover:text-primary data-[status=active]:bg-primary-soft data-[status=active]:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button asChild variant={overHero ? "hero" : "default"} className="ml-2">
              <Link to="/admissions">Daftar Sekarang</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            className={cn(
              "grid size-11 place-items-center rounded-2xl border transition-colors lg:hidden",
              overHero
                ? "border-white/30 bg-white/10 text-white backdrop-blur-md"
                : "border-border bg-background text-foreground",
            )}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-deep/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-dvh w-[min(22rem,90vw)] flex-col bg-background p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Tutup menu navigasi"
                  className="grid size-11 shrink-0 place-items-center rounded-2xl border border-border"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-8 flex-1 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="block rounded-xl px-4 py-3 font-display text-base font-medium transition-colors hover:bg-primary-soft data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <ul className="ml-4 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <Button asChild className="w-full">
                  <Link to="/admissions">Daftar Sekarang</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${school.phone.replace(/[^\d+]/g, "")}`}>
                    <Phone aria-hidden="true" />
                    {school.phone}
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
