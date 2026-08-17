import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg shadow-accent/20",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-accent/50 hover:bg-surface-hover",
  outline:
    "border border-border text-foreground hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-foreground hover:bg-surface-hover",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-base font-semibold min-h-[48px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    const isHashOrExternal =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("viber:") ||
      href.startsWith("#");

    if (isHashOrExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    const { onClick, ...linkProps } = props;

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        {...(linkProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
