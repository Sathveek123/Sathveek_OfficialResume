"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { newsEntries, newsTypeMeta, type NewsType } from "@/lib/news";

const filters: Array<{ label: string; value: "all" | NewsType }> = [
  { label: "All", value: "all" },
  { label: "Launches", value: "launch" },
  { label: "Updates", value: "update" },
  { label: "Experiments", value: "experiment" },
  { label: "Achievements", value: "achievement" },
  { label: "Learning", value: "learning" },
  { label: "Behind The Scenes", value: "bts" },
];

export default function NewsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [query, setQuery] = useState("");

  const entries = useMemo(() => {
    const sorted = [...newsEntries].sort((a, b) => (a.date < b.date ? 1 : -1));
    const q = query.trim().toLowerCase();

    const filtered = (filter === "all" ? sorted : sorted.filter((e) => e.type === filter)).filter(
      (e) => {
        if (!q) return true;
        const hay = `${e.title} ${e.description} ${e.content} ${e.tags.join(" ")} ${(e.tech ?? []).join(" ")}`.toLowerCase();
        return hay.includes(q);
      },
    );

    return filtered;
  }, [filter, query]);

  const featured = useMemo(() => {
    return [...newsEntries]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .find((e) => e.featured);
  }, []);

  const stats = useMemo(() => {
    const total = newsEntries.length;
    const featuredCount = newsEntries.filter((e) => e.featured).length;
    const thisMonth = newsEntries.filter((e) => {
      const now = new Date();
      const dt = new Date(e.date);
      return dt.getFullYear() === now.getFullYear() && dt.getMonth() === now.getMonth();
    }).length;
    return { total, featuredCount, thisMonth };
  }, []);

  return (
    <PageShell
      title="Building in Public"
      subtitle="Real-time updates on systems, experiments, and technical explorations. Watch the process, not just the result."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "News", href: "/news" },
      ]}
    >
      <Section className="pt-8" container>
        <div className="mx-auto grid max-w-4xl gap-5">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="news-search">
                Search updates
              </label>
              <input
                id="news-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, tags, tech…"
                className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[{ label: "Updates", value: stats.total }, { label: "Featured", value: stats.featuredCount }, { label: "This month", value: stats.thisMonth }].map(
                (s) => (
                  <Card key={s.label} variant="outline" className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight">{s.value}</p>
                  </Card>
                ),
              )}
            </div>
          </div>

          {featured ? (
            <Link href={`/news/${featured.slug}`} className="block">
              <Card variant="gradient" glow className="p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--foreground)] dark:bg-white/15 dark:text-white">
                    Featured
                  </span>
                  <span className="text-xs text-[var(--muted)] dark:text-white/70">{featured.date}</span>
                </div>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] dark:text-white">{featured.title}</p>
                <p className="mt-2 max-w-3xl text-sm text-[var(--muted)] dark:text-white/80 leading-7">{featured.description}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--foreground)] dark:text-white">Read update →</p>
              </Card>
            </Link>
          ) : null}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const active = f.value === filter;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={
                  "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors " +
                  (active
                    ? "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[color-mix(in_oklab,var(--card),var(--foreground)_6%)]")
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {entries.length === 0 ? (
          <div className="mx-auto mt-10 max-w-4xl">
            <Card variant="glass" className="p-7">
              <p className="text-sm font-semibold tracking-tight">No updates found</p>
              <p className="mt-2 text-sm text-[var(--muted)] leading-7">
                Try a different filter or search term.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setFilter("all");
                  }}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold"
                >
                  Reset
                </button>
              </div>
            </Card>
          </div>
        ) : null}

        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-4">
          {entries.map((entry) => {
            const meta = newsTypeMeta[entry.type];
            return (
              <StaggerItem key={entry.slug}>
                <div className="relative">
                  <div className="absolute left-4 top-6 hidden h-full w-px bg-[var(--border)] sm:block" />
                  <div className="grid gap-3 sm:grid-cols-[64px_1fr] sm:items-start">
                    <div className="hidden sm:flex sm:flex-col sm:items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)]">
                        <span className="text-sm" aria-hidden="true">
                          {meta.icon}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-medium text-[var(--muted)]">{entry.date}</p>
                    </div>

                    <Card className="p-5" variant="glass">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-semibold">
                          <span aria-hidden="true">{meta.icon}</span>
                          <span>{meta.label}</span>
                        </span>
                        <span className="text-xs text-[var(--muted)] sm:hidden">{entry.date}</span>
                        {entry.featured ? (
                          <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                            Featured
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-3">
                        <Link
                          href={`/news/${entry.slug}`}
                          className="text-lg font-semibold tracking-tight hover:underline"
                        >
                          {entry.title}
                        </Link>
                        <p className="mt-2 text-sm text-[var(--muted)]">{entry.description}</p>
                      </div>

                      {entry.metrics ? (
                        <div className="mt-4 grid gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-sm">
                          {entry.metrics.before ? (
                            <p>
                              <span className="font-semibold">Before:</span> {entry.metrics.before}
                            </p>
                          ) : null}
                          {entry.metrics.after ? (
                            <p>
                              <span className="font-semibold">After:</span> {entry.metrics.after}
                            </p>
                          ) : null}
                          {entry.metrics.improvement ? (
                            <p>
                              <span className="font-semibold">Impact:</span> {entry.metrics.improvement}
                            </p>
                          ) : null}
                        </div>
                      ) : null}

                      {entry.tags.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entry.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </Card>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>
    </PageShell>
  );
}
