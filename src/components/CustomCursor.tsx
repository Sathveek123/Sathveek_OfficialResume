"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function isFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(pointer: fine)")?.matches ?? false;
}

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const enabled = useMemo(() => {
    return !reduceMotion && isFinePointer();
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const isInteractive = !!t.closest(
        "a,button,[role='button'],input,textarea,select,label,[data-cursor='interactive']",
      );
      setHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[var(--accent)]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 900, damping: 42, mass: 0.25 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-[var(--accent)]/70 bg-transparent"
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hovering ? 1.35 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.8 }}
      />
    </>
  );
}
