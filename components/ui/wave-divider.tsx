import { cn } from "@/lib/utils";

export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div className={cn("w-full overflow-hidden leading-none", flip && "rotate-180", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        className="wave-divider w-full h-[60px] sm:h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,95 1440,45 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
