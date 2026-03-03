import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Simulation System Design",
  description:
    "Simulation system design and forecasting engine architecture: throughput, correctness, and measurable performance under scale.",
};

const faqs = [
  {
    q: "What makes simulation systems hard?",
    a: "Throughput + correctness under constraints. You’re managing large state spaces, reproducibility, edge cases, and performance trade-offs simultaneously.",
  },
  {
    q: "How do you keep results reproducible?",
    a: "Deterministic inputs, versioned datasets, seeded randomness, strict configuration schemas, and audit logs.",
  },
  {
    q: "Can this run in real time?",
    a: "Yes, depending on constraints. We design for batching, caching, parallel execution, and clearly defined time budgets.",
  },
  {
    q: "Do you build dashboards for simulation outputs?",
    a: "Yes. Observability and reporting are part of the system so stakeholders can trust the results.",
  },
];

export default function SimulationSystemDesignPage() {
  return (
    <PageShell
      title="Simulation System Design"
      subtitle="Forecasting and simulation engines engineered for throughput, correctness, and debuggability."
      crumbs={[{ label: "Home", href: "/" }, { label: "Simulation System Design" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Model the world. Measure the outcome.</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I architect simulation systems with strong data boundaries, deterministic evaluation, and
            performance budgets — so results are trustworthy and usable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              View systems
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Use cases</p>
            <div className="mt-4 grid gap-3">
              {[
                "Forecasting and scenario analysis",
                "Monte Carlo simulations",
                "Pricing and risk modeling",
                "Supply chain and operations modeling",
                "Capacity planning and reliability analysis",
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
            <p className="text-sm font-semibold tracking-tight">System components</p>
            <div className="mt-4 grid gap-3">
              {[
                "Data model + validation",
                "Simulation core (pure, testable)",
                "Execution engine (parallelism + caching)",
                "Metrics + reporting",
                "Audit logs for reproducibility",
                "Dashboards + export pipelines",
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
          <p className="text-sm font-semibold tracking-tight text-white">Need a forecasting engine?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            If you need a simulation system that stays fast, correct, and maintainable, book a call and
            we’ll map the architecture.
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
