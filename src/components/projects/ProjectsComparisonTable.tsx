"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { projects, type Project, type ProjectCategory } from "@/lib/projects";

type SortKey = "title" | "category" | "year" | "status" | "complexity";

type Row = {
  project: Project;
  complexity: number;
  performance: string;
};

function deriveComplexity(p: Project) {
  const base = p.tech.length;
  const metricsBoost = p.metrics?.length ? 2 : 0;
  const statusBoost = p.status === "Live" ? 2 : p.status === "In Development" ? 1 : 0;
  return Math.min(5, Math.max(1, Math.round((base + metricsBoost + statusBoost) / 3)));
}

function toCsv(rows: Row[]) {
  const header = [
    "Title",
    "Domain",
    "Year",
    "Status",
    "Role",
    "Duration",
    "System Type",
    "Complexity",
    "Performance",
    "Stack",
    "Link",
  ];

  const lines = rows.map((r) => {
    const p = r.project;
    const cols = [
      p.title,
      p.category,
      p.year,
      p.status,
      p.role,
      p.duration,
      p.tagline,
      String(r.complexity),
      r.performance,
      p.tech.join(" | "),
      `/projects/${p.slug}`,
    ];

    return cols
      .map((c) => {
        const v = String(c ?? "");
        return `"${v.replaceAll('"', '""')}"`;
      })
      .join(",");
  });

  return [header.join(","), ...lines].join("\n");
}

export function ProjectsComparisonTable() {
  const [domain, setDomain] = useState<"All" | ProjectCategory>("All");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("year");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const rows = useMemo<Row[]>(() => {
    return projects.map((p) => {
      const perf = p.metrics?.[0] ? `${p.metrics[0].label}: ${p.metrics[0].value}` : "—";
      return { project: p, complexity: deriveComplexity(p), performance: perf };
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return rows.filter((r) => {
      const p = r.project;
      if (domain !== "All" && p.category !== domain) return false;
      if (!q) return true;

      const hay = `${p.title} ${p.tagline} ${p.description} ${p.category} ${p.tech.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [rows, domain, query]);

  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;

    const getVal = (r: Row) => {
      const p = r.project;
      switch (sortKey) {
        case "title":
          return p.title;
        case "category":
          return p.category;
        case "year":
          return p.year;
        case "status":
          return p.status;
        case "complexity":
          return r.complexity;
      }
    };

    return [...filtered].sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
      return String(av).localeCompare(String(bv)) * dir;
    });
  }, [filtered, sortKey, sortDir]);

  return (
    <Card variant="outline" className="p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-tight">Systems portfolio analysis</p>
          <p className="mt-2 text-sm text-[var(--muted)] leading-7">
            Sort, filter, and export a structured view of projects (systems). Designed for decision-makers.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const csv = toCsv(sorted);
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "projects-analysis.csv";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold shadow-[var(--shadow-sm)]"
        >
          Export CSV
        </button>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="domain">
            Domain
          </label>
          <select
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value as "All" | ProjectCategory)}
            className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
          >
            <option value="All">All</option>
            <option value="AI">AI</option>
            <option value="Automation">Automation</option>
            <option value="Web">Web</option>
            <option value="Trading">Trading</option>
            <option value="Game Dev">Game Dev</option>
          </select>
        </div>

        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm font-medium" htmlFor="query">
            Search
          </label>
          <input
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
            placeholder="Search title, stack, tagline…"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {([
          { key: "year", label: "Year" },
          { key: "title", label: "Project" },
          { key: "category", label: "Domain" },
          { key: "status", label: "Status" },
          { key: "complexity", label: "Complexity" },
        ] as Array<{ key: SortKey; label: string }>).map((s) => {
          const active = sortKey === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => {
                if (active) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
                setSortKey(s.key);
              }}
              className={
                "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors " +
                (active
                  ? "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white"
                  : "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[color-mix(in_oklab,var(--card),var(--foreground)_6%)]")
              }
            >
              {s.label}
              {active ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
            </button>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)]">
        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-[var(--card-muted)]">
                {[
                  "Project",
                  "Domain",
                  "Stack",
                  "System type",
                  "Performance",
                  "Complexity",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((r) => (
                <tr key={r.project.slug} className="border-t border-[var(--border)]">
                  <td className="px-4 py-3">
                    <Link href={`/projects/${r.project.slug}`} className="text-sm font-semibold hover:underline">
                      {r.project.title}
                    </Link>
                    <p className="mt-1 text-xs text-[var(--muted)]">{r.project.year} • {r.project.status}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--muted)]">{r.project.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {r.project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--muted)]">{r.project.tagline}</td>
                  <td className="px-4 py-3 text-sm text-[var(--muted)]">{r.performance}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold">{"★".repeat(r.complexity)}{"☆".repeat(5 - r.complexity)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/work-with-me" className="inline-flex text-sm font-semibold text-[var(--accent)]">
          Work with me →
        </Link>
        <Link href="/book" className="inline-flex text-sm font-semibold hover:underline">
          Book strategy call
        </Link>
      </div>
    </Card>
  );
}
