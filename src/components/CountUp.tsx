"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  value,
  durationMs = 900,
}: {
  value: number;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  const formatted = useMemo(() => {
    return new Intl.NumberFormat(undefined).format(value);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      .matches;
    if (reducedMotion) {
      el.textContent = formatted;
      return;
    }

    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutCubic(t);
      const current = Math.round(from + (value - from) * eased);
      el.textContent = new Intl.NumberFormat(undefined).format(current);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [durationMs, formatted, value, visible]);

  return <span ref={ref}>{visible ? "0" : formatted}</span>;
}
