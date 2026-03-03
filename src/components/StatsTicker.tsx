"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultStats = [
  "50+ Systems Architected",
  "12 AI Agents Deployed",
  "$2M+ Value Delivered",
  "99.9% Uptime Targets",
  "15+ Technologies Mastered",
];

export function StatsTicker({
  stats = defaultStats,
  duration = 22,
}: {
  stats?: string[];
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const items = [...stats, ...stats];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 py-3 shadow-[var(--shadow-sm)] backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,var(--background),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,var(--background),transparent)]" />

      {reduceMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
          {stats.map((s) => (
            <span key={s} className="text-xs font-semibold tracking-tight text-[var(--muted)]">
              {s}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-max items-center gap-6 whitespace-nowrap px-6"
          animate={{ x: [0, -50 * stats.length * 6] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          {items.map((s, idx) => (
            <span key={`${s}-${idx}`} className="text-xs font-semibold tracking-tight text-[var(--muted)]">
              {s}
              <span className="mx-4 text-[var(--border)]">•</span>
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
