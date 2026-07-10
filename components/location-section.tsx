import { Footprints, Waves, Anchor, MoonStar } from "lucide-react";
import { BlobImage } from "@/components/ui/blob-image";
import { WaveDivider } from "@/components/ui/wave-divider";
import { IMAGES } from "@/lib/images";

const DISTANCES = [
  { icon: Footprints, label: "Centar Vodica", value: "350 m" },
  { icon: Waves, label: "Najbliža plaža", value: "700 m" },
  { icon: Anchor, label: "ACI marina Vodice", value: "u blizini" },
];

export function LocationSection() {
  return (
    <section id="lokacija" className="relative bg-paper-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-hand text-2xl text-sage-deep">Gdje smo</p>
            <h2 className="mt-2 text-balance font-hand text-4xl leading-[0.95] text-ink sm:text-5xl">
              Mirna strana Vodica, blizu svega
            </h2>
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-foreground/80">
              Kuća stoji na tihoj, prozračnoj lokaciji — dovoljno izolirano za
              one koji vole mir i zvjezdano nebo, a opet nadomak rive, konoba i
              večernjeg žamora Vodica. Adresa: Stanka Mićina 24, 22211 Vodice.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {DISTANCES.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="paper-card flex items-center gap-3 rounded-2xl px-5 py-4"
                  >
                    <Icon className="size-5 text-terracotta-deep" strokeWidth={1.75} />
                    <div>
                      <p className="font-ui text-sm font-semibold text-ink">{d.value}</p>
                      <p className="font-ui text-xs text-muted-foreground">{d.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 flex items-start gap-3 font-body text-base italic text-foreground/75">
              <MoonStar className="mt-1 size-5 shrink-0 text-sage-deep" strokeWidth={1.5} />
              &ldquo;Dovoljno mirno za tišinu zvjezdanog neba, a opet blizu svega
              što Vodice noću nude.&rdquo;
            </p>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:gap-6 lg:max-w-none">
            <BlobImage
              src={IMAGES.townStreet}
              alt="Kamena uličica dalmatinskog starog grada u sumrak"
              shape="blob-2"
              className="aspect-[3/4] translate-y-6"
            />
            <BlobImage
              src={IMAGES.beachSunset}
              alt="Šljunčana plaža i zalazak sunca nedaleko od Vodica"
              shape="blob-3"
              className="aspect-[3/4] -translate-y-6"
            />
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border-4 border-card shadow-[0_18px_40px_-20px_rgba(58,44,32,0.35)]">
          <iframe
            title="Pansion HRGA na karti — Stanka Mićina 24, 22211 Vodice"
            src="https://www.google.com/maps?q=Stanka+Mi%C4%87ina+24,+22211+Vodice,+Croatia&output=embed"
            className="h-[320px] w-full sm:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <WaveDivider className="mt-20 text-terracotta-tint/30 sm:mt-28" />
    </section>
  );
}
