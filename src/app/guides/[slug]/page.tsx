import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

type Guide = {
  slug: string;
  title: string;
  description: string;
  steps: Array<{ title: string; body: string }>;
  related?: Array<{ label: string; href: string }>;
};

const GUIDES: Guide[] = [
  {
    slug: "how-to-implement-rag-system",
    title: "How to Implement a RAG System",
    description: "A production-focused checklist for retrieval-first reliability.",
    steps: [
      {
        title: "1) Define the job",
        body: "Clarify what the system should answer, what sources are allowed, and what failure looks like. Define success metrics and constraints (latency, cost, permissions).",
      },
      {
        title: "2) Build retrieval foundations",
        body: "Chunking + metadata, hybrid search, and re-ranking usually matter more than the model. Treat retrieval as the core system.",
      },
      {
        title: "3) Add generation with guardrails",
        body: "Use structured outputs, citations, and validation. If output triggers actions, add deterministic checks and safe fallbacks.",
      },
      {
        title: "4) Evaluate + monitor",
        body: "Create a small evaluation set, track quality metrics, and monitor drift/cost/latency in production.",
      },
    ],
    related: [
      { label: "RAG agent development", href: "/rag-agent-development" },
      { label: "AI automation development", href: "/ai-automation-development" },
    ],
  },
  {
    slug: "how-to-optimize-react-app",
    title: "How to Optimize a React App",
    description: "Measure, isolate, fix the biggest bottleneck, and prevent regressions.",
    steps: [
      {
        title: "1) Measure first",
        body: "Profile the slow route. Identify whether the bottleneck is data, rendering, or bundle cost.",
      },
      {
        title: "2) Reduce render churn",
        body: "Fix hot components, stabilize props, memoize carefully, and avoid unnecessary state updates.",
      },
      {
        title: "3) Fix data + caching",
        body: "Cache repeated requests, reduce payload size, and move heavy work off the main thread.",
      },
      {
        title: "4) Lock it in",
        body: "Add budgets, regression checks, and route-level monitoring.",
      },
    ],
    related: [{ label: "React performance optimization", href: "/react-performance-optimization" }],
  },
];

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return { title: "Guide" };
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return notFound();

  return (
    <PageShell
      title={guide.title}
      subtitle={guide.description}
      crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }, { label: guide.title }]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Overview</p>
          <p className="mt-3 text-sm text-[var(--muted)] leading-7">
            This guide is written for production constraints: reliability, latency, cost, and maintainability.
          </p>
        </Card>

        <div className="grid gap-6">
          {guide.steps.map((s) => (
            <Card key={s.title} variant="outline" className="p-8">
              <p className="text-sm font-semibold tracking-tight">{s.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)] leading-7">{s.body}</p>
            </Card>
          ))}
        </div>

        {guide.related?.length ? (
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Related</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {guide.related.map((r) => (
                <Link key={r.href} href={r.href} className="inline-flex text-sm font-semibold text-[var(--accent)]">
                  {r.label} →
                </Link>
              ))}
            </div>
          </Card>
        ) : null}

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Want help implementing?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            If you want a production-ready build (not a prototype), book a strategy call and I’ll map a
            plan you can execute.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/work-with-me"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Work with me
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
