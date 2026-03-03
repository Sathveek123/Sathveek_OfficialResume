import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "AI Rule Engine Design",
  description:
    "AI rule engine design and decision system development: predictable automation with strong auditability and performance.",
};

const faqs = [
  {
    q: "What’s the difference between a rule engine and an AI agent?",
    a: "A rule engine is deterministic: given the same inputs, it produces the same output. An AI agent can be adaptive. In production, rule engines often provide the reliable backbone while AI components handle fuzzy inputs.",
  },
  {
    q: "When should we use rules vs ML/LLMs?",
    a: "Use rules for policy and compliance constraints, safety boundaries, and anything that must be explainable. Use ML/LLMs for extraction, classification, retrieval, and summarization — then validate outputs before action.",
  },
  {
    q: "How do you ensure auditability?",
    a: "Decision traces. Every evaluation emits structured logs describing which rules fired, why, and what input values were used.",
  },
  {
    q: "Can you support non-technical rule authors?",
    a: "Yes. We can add a rules DSL, versioning, and a safe review workflow. The key is strong validation and a sandbox.",
  },
];

export default function AIRuleEngineDesignPage() {
  return (
    <PageShell
      title="AI Rule Engine Design"
      subtitle="Build deterministic decision systems with clear policies, predictable behavior, and audit-ready traces."
      crumbs={[{ label: "Home", href: "/" }, { label: "AI Rule Engine Design" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Deterministic decisions. Observable outcomes.</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I architect rule engines that stay reliable under change: strict inputs/outputs, precedence,
            regression testing, and decision traces for debuggability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects/ai-rule-engine-design"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Related case study
            </Link>
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Book strategy call
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">What a production rule engine includes</p>
            <div className="mt-4 grid gap-3">
              {[
                "Rule schemas with strict validation",
                "Deterministic evaluation order + precedence",
                "Decision traces (explainability)",
                "Test harness + regression scenarios",
                "Versioning + safe rollout",
                "Metrics + monitoring hooks",
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
            <p className="text-sm font-semibold tracking-tight">Common failure modes (and fixes)</p>
            <div className="mt-4 grid gap-3">
              {[
                "Rule conflicts → explicit precedence + linting",
                "Hidden assumptions → structured inputs + contracts",
                "Hard-to-debug outcomes → decision traces",
                "Silent drift → tests + monitoring + version pinning",
                "Unsafe updates → staged rollouts + change reviews",
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
          <p className="text-sm font-semibold tracking-tight text-white">Need a decision engine?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            If your product has policies, risk rules, or complex conditional flows, a rule engine can
            become a strategic moat — predictable and evolvable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Work with me
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Ask a question
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
