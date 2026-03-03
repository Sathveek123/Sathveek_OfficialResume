"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { ProjectsComparisonTable } from "@/components/projects/ProjectsComparisonTable";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/projects";

export function ProjectsClient() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const featured = useMemo(() => projects.find((p) => p.featured) ?? projects[0], []);

  const filtered = useMemo(() => {
    if (category === "All") return [...projects];
    return projects.filter((p) => p.category === (category as ProjectCategory));
  }, [category]);

  return (
    <div className="grid gap-10">
      {featured ? (
        <Link href={`/projects/${featured.slug}`} className="block">
          <Card variant="gradient" glow className="p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold">
                Featured
              </span>
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                {featured.category}
              </span>
              <span className="text-xs text-[var(--muted)]">{featured.year}</span>
              <span className="text-xs text-[var(--muted)]">·</span>
              <span className="text-xs text-[var(--muted)]">{featured.status}</span>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{featured.title}</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">{featured.tagline}</p>
            <p className="mt-5 text-sm font-semibold text-[var(--accent)]">View case study →</p>
          </Card>
        </Link>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {projectCategories.map((c) => {
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

      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <StaggerItem key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="block">
              <Card variant="glass" className="h-full p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                    {p.category}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{p.year}</span>
                  <span className="text-xs text-[var(--muted)]">·</span>
                  <span className="text-xs text-[var(--muted)]">{p.status}</span>
                </div>
                <p className="mt-3 text-sm font-semibold tracking-tight">{p.title}</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm font-semibold text-[var(--accent)]">View case study →</p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <ProjectsComparisonTable />

      <Card variant="outline" className="p-7">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Systems</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">50+</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Designed and shipped</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Reliability</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">99.9%</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Target in production</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Iteration speed</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">Fast</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Ship → measure → refine</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
