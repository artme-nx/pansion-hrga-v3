import {
  Wind,
  Wifi,
  Car,
  Tv,
  CookingPot,
  Sun,
  Languages,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { WaveDivider } from "@/components/ui/wave-divider";

const ITEMS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wind,
    title: "Klima u svakoj sobi",
    text: "Kad ljeto zagrije Vodice, vaša soba ostaje svježa i mirna.",
  },
  {
    icon: Wifi,
    title: "WiFi koji stiže i do balkona",
    text: "Za razglednice kući, navigaciju do plaže i video poziv s obitelji.",
  },
  {
    icon: Car,
    title: "Besplatan parking uz kuću",
    text: "Ostavite auto na miru i krenite pješice — more je blizu.",
  },
  {
    icon: Tv,
    title: "Smart TV u svakoj jedinici",
    text: "Za tihu večer kad je more prehladno, a terasa premalo osvijetljena.",
  },
  {
    icon: CookingPot,
    title: "Prava kuhinja u apartmanu",
    text: "Plinski štednjak, pećnica i hladnjak — kuhajte kao kod kuće.",
  },
  {
    icon: Sun,
    title: "Balkon uz svaku sobu",
    text: "Jutarnja kava, večernje sunce i pogled prema krovovima Vodica.",
  },
  {
    icon: Languages,
    title: "Pričamo i vaš jezik",
    text: "Hrvatski, engleski, poljski i češki — dobrodošlica na četiri jezika.",
  },
  {
    icon: MapPin,
    title: "Korak od svega važnog",
    text: "350 m do centra, 700 m do plaže, na dohvat ACI marine i rive.",
  },
];

const SHAPES = ["blob-1", "blob-2", "blob-3"] as const;

export function AmenitiesSection() {
  return (
    <section id="sadrzaji" className="relative bg-sage-tint/25 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-terracotta-deep">Male stvari koje pomažu</p>
          <h2 className="mt-2 text-balance font-hand text-4xl leading-[0.95] text-ink sm:text-5xl">
            Ugodno, a ne hladno nabrojano
          </h2>
          <p className="mt-4 font-body text-lg text-foreground/80">
            Nema recepcijskog šaltera ni bezličnog popisa usluga — samo ono što
            stvarno olakša odmor, objašnjeno kao da vam pričamo uživo.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-start gap-4">
                <div
                  className={`grid size-16 shrink-0 place-items-center bg-card text-terracotta-deep shadow-sm ${SHAPES[i % SHAPES.length]}`}
                >
                  <Icon className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="font-ui text-base font-semibold text-ink">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-foreground/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <WaveDivider className="mt-20 text-paper-alt sm:mt-28" />
    </section>
  );
}
