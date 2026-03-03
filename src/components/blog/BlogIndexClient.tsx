"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, type BlogPost } from "@/lib/blog";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => posts.find((p) => p.featured) ?? posts[0], [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => {
        if (category !== "All" && p.category !== category) return false;
        if (!q) return true;
        const hay = `${p.title} ${p.description} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [posts, category, query]);

  return (
    <div className="grid gap-10">
      {featured ? (
        <Link href={`/blog/${featured.slug}`} className="block">
          <Card variant="gradient" glow className="p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold">
                Featured
              </span>
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                {featured.category}
              </span>
              <span className="text-xs text-[var(--muted)]">{featured.date}</span>
              <span className="text-xs text-[var(--muted)]">·</span>
              <span className="text-xs text-[var(--muted)]">{featured.readingTime}</span>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{featured.title}</p>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] leading-7">{featured.description}</p>
            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">Read →</p>
          </Card>
        </Link>
      ) : null}

      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-[var(--shadow-sm)]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
              aria-label="Search blog posts"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={
                    "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors " +
                    (active
                      ? "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white"
                      : "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[color-mix(in_oklab,var(--card),var(--foreground)_6%)]")
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <StaggerItem key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block">
                <Card variant="glass" className="h-full p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                      {p.category}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{p.date}</span>
                    <span className="text-xs text-[var(--muted)]">·</span>
                    <span className="text-xs text-[var(--muted)]">{p.readingTime}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-tight">{p.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-semibold text-[var(--accent)]">Read →</p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {filtered.length === 0 ? (
          <Card variant="outline" className="p-7">
            <p className="text-sm text-[var(--muted)]">No posts match your filters.</p>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
