import { Users, Maximize, Wind, Wifi } from "lucide-react";
import { BlobImage } from "@/components/ui/blob-image";
import { WaveDivider } from "@/components/ui/wave-divider";
import { IMAGES } from "@/lib/images";

const ROOMS = [
  {
    name: "Jednokrevetna soba",
    guests: "1 gost",
    size: "17 m²",
    price: "od 63 €",
    period: "/ noć",
    image: IMAGES.roomBlue,
    alt: "Jednokrevetna soba s klimom i balkonom",
    shape: "blob-2" as const,
    features: ["Klima uređaj", "Besplatan WiFi", "Balkon", "Radni stol", "Mini bar", "Smart TV"],
  },
  {
    name: "Dvokrevetna soba",
    guests: "2 gosta",
    size: "20 m²",
    price: "od 71 €",
    period: "/ noć",
    image: IMAGES.roomBright,
    alt: "Dvokrevetna soba, svijetla i mirna",
    shape: "blob-1" as const,
    featured: true,
    features: ["Klima uređaj", "Besplatan WiFi", "Balkon", "Tuš kabina", "Mini bar", "Smart TV"],
  },
  {
    name: "Apartman",
    guests: "do 4 gosta",
    size: "57 m²",
    price: "od 142 €",
    period: "/ noć",
    image: IMAGES.apartment,
    alt: "Apartman s kuhinjom i dnevnim boravkom",
    shape: "blob-3" as const,
    features: [
      "Puna kuhinja (plinski štednjak, pećnica, hladnjak)",
      "Dnevni boravak i blagovaonica",
      "Klima, WiFi, besplatan parking",
      "Balkon i Smart TV",
    ],
  },
];

export function RoomsSection() {
  return (
    <section id="sobe" className="relative bg-paper-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-sage-deep">Gdje ćete spavati</p>
          <h2 className="mt-2 text-balance font-hand text-4xl leading-[0.95] text-ink sm:text-5xl">
            Tri načina da se osjećate kao kod kuće
          </h2>
          <p className="mt-4 font-body text-lg text-foreground/80">
            Od jednostavne sobe za jednog putnika do apartmana za obitelj — sve
            s klimom, besplatnim WiFi-jem i besplatnim parkingom, jer to se u
            HRGA-i podrazumijeva.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.name}
              className={`flex flex-col ${room.featured ? "md:-translate-y-4" : ""}`}
            >
              <BlobImage
                src={room.image}
                alt={room.alt}
                shape={room.shape}
                className="aspect-[4/5] w-full"
              />
              <div className="mt-6 flex items-start justify-between gap-3">
                <h3 className="font-hand text-3xl leading-none text-ink">{room.name}</h3>
                <div className="text-right">
                  <span className="font-hand text-2xl text-terracotta-deep">{room.price}</span>
                  <span className="font-ui text-xs text-muted-foreground">{room.period}</span>
                </div>
              </div>

              <div className="mt-2 flex gap-4 font-ui text-xs uppercase tracking-[0.1em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5" /> {room.guests}
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize className="size-3.5" /> {room.size}
                </span>
              </div>

              <ul className="mt-4 space-y-2 font-body text-sm text-foreground/80">
                {room.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta-deep/70" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full border-2 border-sage-line px-5 py-2.5 font-ui text-sm font-medium text-sage-deep transition-colors hover:bg-sage-tint/40"
              >
                Upit za ovu sobu
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-ui text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Wind className="size-3.5" /> Klima u svim jedinicama
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi className="size-3.5" /> Besplatan WiFi u cijeloj kući
          </span>
          <span>Sezonske cijene — pošaljite upit za točnu ponudu i termin.</span>
        </p>
      </div>

      <WaveDivider className="mt-20 text-sage-tint/50 sm:mt-28" />
    </section>
  );
}
