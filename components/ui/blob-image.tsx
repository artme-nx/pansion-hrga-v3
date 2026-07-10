import Image from "next/image";
import { cn } from "@/lib/utils";

type BlobShape = "blob-1" | "blob-2" | "blob-3";

export function BlobImage({
  src,
  alt,
  shape = "blob-1",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: {
  src: string;
  alt: string;
  shape?: BlobShape;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-4 border-card shadow-[0_18px_40px_-20px_rgba(58,44,32,0.4)]",
        shape,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
