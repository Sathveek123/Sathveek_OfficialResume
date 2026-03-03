import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "React Performance Optimization",
  description:
    "React and Next.js performance optimization: faster routes, stable Core Web Vitals, and measurable improvements.",
};

const faqs = [
  {
    q: "What do you optimize first?",
    a: "The biggest bottleneck. I measure route performance, rendering hot paths, data loading, and bundle cost — then optimize where impact is proven.",
  },
  {
    q: "Do you handle both frontend and backend performance?",
    a: "Yes. UI slowness is often data + caching. I treat the system end-to-end: API latency, caching, payload size, and rendering cost.",
  },
  {
    q: "Can you help with Core Web Vitals?",
    a: "Yes. We improve LCP, INP, and CLS by fixing render churn, font/image strategies, and reducing blocking work.",
  },
  {
    q: "Do you refactor everything?",
    a: "No. I prioritize safe, incremental changes with benchmarks so you see measurable improvements without risky rewrites.",
  },
];

export default function ReactPerformanceOptimizationPage() {
  return (
    <PageShell
      title="React Performance Optimization"
      subtitle="Make your React/Next app fast, stable, and measurable — without a rewrite."
      crumbs={[{ label: "Home", href: "/" }, { label: "React Performance Optimization" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Speed is a product feature</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I optimize performance with a systems approach: measure, isolate bottlenecks, fix the highest
            leverage constraints, and prevent regressions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/resources/react-performance"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Get checklist
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Common symptoms</p>
            <div className="mt-4 grid gap-3">
              {[
                "Slow route transitions",
                "Heavy dashboards with laggy tables",
                "Unstable INP due to main-thread work",
                "Large bundles and poor code splitting",
                "Re-renders and state churn",
                "Uncached data + repeated requests",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {x}
                </div>
              ))}
            </div>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">What I deliver</p>
            <div className="mt-4 grid gap-3">
              {[
                "Baseline measurements + bottleneck map",
                "Route-level bundle + rendering improvements",
                "Data fetching + caching strategy",
                "CWV improvement plan",
                "Before/after benchmarks",
                "Guardrails to prevent regressions",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {x}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">FAQ</p>
          <div className="mt-4 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-[var(--muted)] leading-7">{f.a}</p>
              </details>
            ))}
          </div>
        </Card>

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Want measurable improvements?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            Bring one slow route and I’ll tell you what I would fix first — with a clear implementation plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book your call
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
