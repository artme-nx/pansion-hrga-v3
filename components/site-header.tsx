"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#sobe", label: "Sobe" },
  { href: "#sadrzaji", label: "Sadržaji" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#galerija", label: "Galerija" },
  { href: "#poruka", label: "Od domaćina" },
  { href: "#kontakt", label: "Upit" },
];

// NOTE: the mobile nav panel is rendered as a SIBLING of <header>, not nested
// inside it — nesting it inside a header that has backdrop-blur/transform
// traps position:fixed children and breaks full-screen overlay behavior.
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-hand text-3xl leading-none text-terracotta-deep sm:text-4xl">
              Pansion HRGA
            </span>
            <span className="hidden font-ui text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              Vodice
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 font-ui text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 transition-colors hover:text-terracotta-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+38522442958"
              className="flex items-center gap-2 font-ui text-sm text-foreground/80 hover:text-terracotta-deep"
            >
              <Phone className="size-4" />
              +385 22 442 958
            </a>
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-5 py-2.5 font-ui text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-terracotta-deep"
            >
              Pošaljite upit
            </a>
          </div>

          <button
            type="button"
            aria-label="Otvori izbornik"
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile nav — sibling of header, positioned fixed at viewport root */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-[var(--primitive-color-paper-100)] px-6 py-6 transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <span className="font-hand text-3xl text-terracotta-deep">Pansion HRGA</span>
          <button
            type="button"
            aria-label="Zatvori izbornik"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-border text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-2 font-ui text-2xl">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-4 text-foreground note-tilt"
              style={{ transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.6deg)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 font-ui text-base">
          <a href="tel:+38522442958" className="flex items-center gap-2 text-foreground/80">
            <Phone className="size-4" /> +385 22 442 958
          </a>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
          >
            Pošaljite upit
          </a>
        </div>
      </div>
    </>
  );
}
