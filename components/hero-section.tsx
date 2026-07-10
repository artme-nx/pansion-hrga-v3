import { Phone, Mail } from "lucide-react";
import { BlobImage } from "@/components/ui/blob-image";
import { WaveDivider } from "@/components/ui/wave-divider";
import { IMAGES } from "@/lib/images";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div className="relative">
          <p className="font-hand text-2xl text-sage-deep sm:text-3xl">
            Dobro došli u Vodice —
          </p>
          <h1 className="mt-2 text-balance font-hand text-[var(--hero-title-size)] leading-[var(--hero-title-leading)] text-ink">
            Pansion HRGA,
            <br />
            kuća blizu <span className="text-terracotta-deep">mora</span>.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-foreground/85 sm:text-xl">
            Obiteljski vođen pansion u srcu Vodica — 350 metara od centra i samo
            700 metara od plaže. Dovoljno blizu za šetnju rivom navečer, dovoljno
            mirno za zvjezdano nebo iznad krova.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-7 py-3.5 font-ui text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-terracotta-deep"
            >
              Provjerite dostupnost
            </a>
            <a
              href="#sobe"
              className="rounded-full border-2 border-sage-line px-7 py-3.5 font-ui text-sm font-semibold text-sage-deep transition-colors hover:bg-sage-tint/40"
            >
              Pogledajte sobe
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-ui text-sm text-muted-foreground">
            <a href="tel:+38522442958" className="flex items-center gap-2 hover:text-terracotta-deep">
              <Phone className="size-4" /> +385 22 442 958
            </a>
            <a href="mailto:info@hrga.net" className="flex items-center gap-2 hover:text-terracotta-deep">
              <Mail className="size-4" /> info@hrga.net
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <BlobImage
            src={IMAGES.heroBoat}
            alt="Ribarski čamac u tihoj uvali kraj Vodica, u sumrak"
            shape="blob-1"
            priority
            className="aspect-[4/5] w-full"
          />
          <div className="note-tilt paper-card absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl px-5 py-4 sm:-left-10 sm:max-w-[16rem]">
            <p className="font-hand text-xl leading-snug text-ink">
              &ldquo;Dovoljno mirno za zvjezdano nebo, dovoljno blizu za sve
              ostalo.&rdquo;
            </p>
            <p className="mt-2 font-ui text-xs uppercase tracking-[0.15em] text-muted-foreground">
              — pansion na tihoj strani Vodica
            </p>
          </div>
        </div>
      </div>

      <WaveDivider className="mt-20 text-paper-alt sm:mt-28" />
    </section>
  );
}
