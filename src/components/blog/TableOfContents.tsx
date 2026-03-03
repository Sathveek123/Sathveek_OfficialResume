"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  if (!items.length) return null;

  return (
    <aside className="sticky top-28 hidden h-[calc(100vh-140px)] overflow-auto pr-2 lg:block">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">On this page</p>
      <nav className="mt-3 grid gap-1" aria-label="Table of contents">
        {items.map((i) => {
          const active = i.id === activeId;
          return (
            <Link
              key={i.id}
              href={`#${i.id}`}
              className={cn(
                "rounded-lg px-2 py-2 text-sm transition-colors",
                i.level === 3 && "pl-5 text-[13px]",
                active
                  ? "bg-[var(--card)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]",
              )}
            >
              {i.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
