import { cn } from "@/lib/cn";
import type React from "react";

type SectionTone = "default" | "muted" | "accent";

export function Section({
  className,
  tone = "default",
  container = true,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
  container?: boolean;
}) {
  const tones: Record<SectionTone, string> = {
    default: "",
    muted:
      "bg-[color-mix(in_oklab,var(--background),var(--foreground)_2%)] border-y border-[var(--border)]",
    accent:
      "bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(124,58,237,0.18),transparent_60%)] border-y border-[var(--border)]",
  };

  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)} {...props}>
      {container ? <div className="container-page">{props.children}</div> : props.children}
    </section>
  );
}
