"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

function isCoarsePointer() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? true;
}

export function MagneticWrapper({
  children,
  strength = 0.22,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const enabled = useMemo(() => {
    if (reduceMotion) return false;
    if (typeof window === "undefined") return false;
    return !isCoarsePointer();
  }, [reduceMotion]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={enabled ? { x: pos.x, y: pos.y } : { x: 0, y: 0 }}
      transition={enabled ? { type: "spring", stiffness: 220, damping: 18, mass: 0.6 } : { duration: 0 }}
      onMouseMove={(e) => {
        if (!enabled) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        setPos({ x: dx * strength, y: dy * strength });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}
