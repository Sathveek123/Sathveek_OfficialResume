import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata = {
  title: "Trading Bot Logic Framework",
};

export default function TradingBotFrameworkPage() {
  return (
    <PageShell
      title="Trading Bot Logic Framework"
      subtitle="A risk-first framework for strategy modeling, evaluation, and backtesting integrity."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Trading Bot Framework" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What you get</p>
          <div className="mt-4 grid gap-3">
            {[
              "Strategy modeling checklist",
              "Risk constraints template",
              "Backtesting sanity checks",
              "Metrics that catch overfitting",
              "Execution-model consistency notes",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {x}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[var(--muted)] leading-7">
            This is built to reduce strategy “logic drift” between research and production execution.
          </p>
        </Card>

        <div className="grid gap-6">
          <LeadMagnetForm
            resource="trading-bot-framework"
            intentLabel="Trading style"
            intentOptions={["Intraday", "Swing", "Long-term", "Market making", "Research only"]}
            onSuccessRedirect="/resources/trading-bot-framework/thanks"
          />

          <Card variant="outline" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Want a systems review?</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">
              If you’re running automation in production, I can help you audit risk, reliability, and
              monitoring.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/work-with-me" className="inline-flex text-sm font-semibold text-[var(--accent)]">
                Work with me →
              </Link>
              <Link href="/book" className="inline-flex text-sm font-semibold hover:underline">
                Book a call
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
