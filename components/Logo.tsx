import { brand } from "@/data/brand";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { icon: 28, text: "text-sm" },
  md: { icon: 36, text: "text-base" },
  lg: { icon: 44, text: "text-lg" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="10"
          y="6"
          width="28"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
        />
        <rect
          x="14"
          y="10"
          width="20"
          height="14"
          rx="1.5"
          fill="currentColor"
          className="text-accent/20"
        />
        <path
          d="M8 38 L16 32 L24 36 L32 30 L40 34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        />
        <circle cx="36" cy="34" r="2" fill="currentColor" className="text-accent" />
        <path
          d="M18 28 L22 26 L26 28 L26 31 L18 31 Z"
          fill="currentColor"
          className="text-foreground"
        />
        <rect x="19" y="29" width="6" height="1.5" rx="0.5" fill="currentColor" className="text-accent" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={cn("font-bold tracking-wide text-foreground", s.text)}>
            {brand.name.split(" ").slice(0, 2).join(" ")}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-widest text-accent sm:text-xs">
            {brand.name.split(" ").slice(2).join(" ")}
          </span>
        </div>
      )}
    </div>
  );
}
