"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export type ExperienceMetric = {
  label: string;
  value: string;
  pct: number;
  detail?: string;
};

export function ExperienceGraph({
  title = "Technical depth analysis",
  subtitle = "A snapshot of how I measure execution and systems maturity.",
  metrics,
  className,
}: {
  title?: string;
  subtitle?: string;
  metrics?: ExperienceMetric[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo<ExperienceMetric[]>(() => {
    return (
      metrics ?? [
        {
          label: "Systems architected",
          value: "50+ systems",
          pct: 92,
          detail: "Across AI, automation, dashboards, trading logic, and simulation-style systems.",
        },
        {
          label: "Production delivery",
          value: "99.9% uptime mindset",
          pct: 88,
          detail: "Reliability through observability, safe deploys, and failure-mode thinking.",
        },
        {
          label: "AI agents deployed",
          value: "12 agents",
          pct: 78,
          detail: "Tool-using assistants, automation workflows, and retrieval-based systems.",
        },
        {
          label: "Performance optimizations",
          value: "95+ improvements",
          pct: 90,
          detail: "Frontend + backend bottlenecks measured, prioritized, and improved.",
        },
        {
          label: "Documentation depth",
          value: "500+ pages",
          pct: 80,
          detail: "Architecture decisions, runbooks, API contracts, and handoff docs.",
        },
        {
          label: "Learning velocity",
          value: "800+ hours / year",
          pct: 86,
          detail: "Deliberate practice: systems design, AI patterns, performance, reliability.",
        },
      ]
    );
  }, [metrics]);

  return (
    <Card variant="glass" className={cn("p-8", className)}>
      <p className="text-sm font-semibold tracking-tight">{title}</p>
      <p className="mt-2 text-sm text-[var(--muted)] leading-7">{subtitle}</p>

      <div className="mt-6 grid gap-4">
        {items.map((m, idx) => {
          const isActive = active === idx;

          return (
            <div
              key={m.label}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive((a) => (a === idx ? null : a))}
              onFocus={() => setActive(idx)}
              onBlur={() => setActive((a) => (a === idx ? null : a))}
              tabIndex={0}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 outline-none transition-colors focus:border-[var(--accent)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-sm font-semibold tracking-tight">{m.label}</p>
                <p className="text-sm font-semibold text-[var(--muted)]">{m.value}</p>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-muted)]">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))]"
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={{ width: `${Math.max(0, Math.min(100, m.pct))}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>

              {m.detail ? (
                <motion.p
                  className="mt-3 text-sm text-[var(--muted)] leading-7"
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.65, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {m.detail}
                </motion.p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
