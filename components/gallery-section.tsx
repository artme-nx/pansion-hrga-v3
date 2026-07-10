import { BlobImage } from "@/components/ui/blob-image";
import { WaveDivider } from "@/components/ui/wave-divider";
import { IMAGES } from "@/lib/images";

const PHOTOS = [
  { src: IMAGES.cove, alt: "Tirkizna uvala nedaleko obale, dva čamca na vezu", shape: "blob-1" as const, rotate: "-1.5deg", span: "row-span-2" },
  { src: IMAGES.livingBoho, alt: "Topao dnevni boravak pun biljaka", shape: "blob-2" as const, rotate: "1deg", span: "" },
  { src: IMAGES.coffee, alt: "Jutarnja kava, detalj dobrodošlice", shape: "blob-3" as const, rotate: "-1deg", span: "" },
  { src: IMAGES.pineCove, alt: "Uvala uokvirena borovima, kristalno more", shape: "blob-2" as const, rotate: "1.5deg", span: "row-span-2" },
  { src: IMAGES.livingOpen, alt: "Prostran dnevni boravak s toplim drvom", shape: "blob-1" as const, rotate: "-0.8deg", span: "" },
  { src: IMAGES.roomCorner, alt: "Kutak sobe s biljkom i toplim detaljima", shape: "blob-3" as const, rotate: "1.2deg", span: "" },
];

export function GallerySection() {
  return (
    <section id="galerija" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-hand text-2xl text-terracotta-deep">Iz albuma kuće</p>
          <h2 className="mt-2 text-balance font-hand text-4xl leading-[0.95] text-ink sm:text-5xl">
            Nekoliko kadrova, umjesto tisuću riječi
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[10rem] grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7">
          {PHOTOS.map((p) => (
            <div
              key={p.src}
              className={p.span}
              style={{ transform: `rotate(${p.rotate})` }}
            >
              <BlobImage
                src={p.src}
                alt={p.alt}
                shape={p.shape}
                className="h-full w-full"
                sizes="(min-width: 640px) 30vw, 45vw"
              />
            </div>
          ))}
        </div>
      </div>

      <WaveDivider className="mt-20 text-terracotta-deep/90 sm:mt-28" />
    </section>
  );
}
