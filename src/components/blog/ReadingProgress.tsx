"use client";

import { useEffect, useState } from "react";

export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const onScroll = () => {
      const total = target.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = window.scrollY;
      const ratio = Math.min(1, Math.max(0, scrolled / total));
      setProgress(ratio);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
