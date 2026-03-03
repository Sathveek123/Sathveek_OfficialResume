import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Trading Bot Architecture",
  description:
    "Trading bot architecture and automated trading system design: risk-first strategy evaluation, backtesting integrity, and production reliability.",
};

const faqs = [
  {
    q: "Do you build strategies or the system around strategies?",
    a: "Both. Most failures come from the system: inconsistent data, hidden execution assumptions, weak risk boundaries, and missing monitoring. I architect the framework that keeps strategies honest.",
  },
  {
    q: "How do you prevent overfitting?",
    a: "Walk-forward evaluation, baseline comparisons, robust metrics, and explicit assumptions. We optimize for stability, not a perfect backtest.",
  },
  {
    q: "Can you design for paper trading and live execution?",
    a: "Yes. The architecture separates the strategy core from the execution model so paper/live are consistent and testable.",
  },
  {
    q: "What about risk management?",
    a: "Risk is first-class: position sizing, exposure caps, stops, volatility filters, and circuit breakers enforced before signal execution.",
  },
];

export default function TradingBotArchitecturePage() {
  return (
    <PageShell
      title="Trading Bot Architecture"
      subtitle="Risk-first automation: strategy evaluation frameworks that don’t break under real market constraints."
      crumbs={[{ label: "Home", href: "/" }, { label: "Trading Bot Architecture" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Trading systems are reliability systems</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I architect trading automation with deterministic simulation, risk boundaries, and monitoring so
            the system behaves predictably — even when the market doesn’t.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects/algorithmic-trading-bot-logic"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Related case study
            </Link>
            <Link
              href="/resources/trading-bot-framework"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Get framework
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Architecture pillars</p>
            <div className="mt-4 grid gap-3">
              {[
                "Clean separation: data feed, strategy, execution",
                "Deterministic simulation + reproducible results",
                "Risk constraints enforced before signals",
                "Backtesting integrity checks",
                "Audit trail: decisions and reasons",
                "Monitoring + circuit breakers",
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
            <p className="text-sm font-semibold tracking-tight">Common failure modes</p>
            <div className="mt-4 grid gap-3">
              {[
                "Logic drift between research and live execution",
                "Data quality issues and survivorship bias",
                "Latency and slippage assumptions",
                "Missing guardrails during volatility",
                "No observability until after loss",
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
          <p className="text-sm font-semibold tracking-tight text-white">Want a risk-first architecture review?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            Book a strategy call and I’ll map the top reliability risks in your trading automation and the
            fastest path to hardening the system.
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
