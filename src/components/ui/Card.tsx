import { cn } from "@/lib/cn";
import type React from "react";

type CardVariant = "elevated" | "glass" | "gradient" | "outline";

export function Card({
  className,
  variant = "elevated",
  glow,
  interactive = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  glow?: boolean;
  interactive?: boolean;
}) {
  const variants: Record<CardVariant, string> = {
    elevated: "bg-[var(--card)] shadow-[var(--shadow-sm)] border border-[var(--border)]",
    glass: "glass border border-[var(--border)] shadow-[var(--shadow-sm)]",
    gradient:
      "bg-[var(--card)] border border-transparent shadow-[var(--shadow-sm)] [background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(135deg,var(--accent),var(--accent-2))_border-box]",
    outline: "bg-transparent border border-[var(--border)]",
  };

  return (
    <div
      className={cn(
        "group relative rounded-3xl p-6 transition-all duration-300 will-change-transform",
        interactive && "hover:translate-y-[-4px] hover:shadow-[var(--shadow-md)]",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--ring)]",
        glow && "shadow-[0_18px_50px_var(--glow-1)]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {interactive ? (
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(800px_260px_at_30%_-20%,var(--glow-1),transparent_55%)]" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(800px_260px_at_70%_120%,var(--glow-2),transparent_55%)]" />
        </div>
      ) : null}
      {props.children}
    </div>
  );
}
