import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "RAG Agent Development",
  description:
    "RAG agent development and AI knowledge base architecture: retrieval-first reliability with measurable accuracy and cost control.",
};

const faqs = [
  {
    q: "What is RAG?",
    a: "Retrieval-Augmented Generation: a pattern where the system retrieves relevant context (documents, records, facts) and then generates an answer grounded in that context.",
  },
  {
    q: "How do you improve answer accuracy?",
    a: "Better retrieval (chunking, embeddings, metadata filters), better ranking, better prompts, and validation. Most RAG failures are retrieval failures.",
  },
  {
    q: "How do you handle privacy and security?",
    a: "Access control on retrieval, scoped indexes, encryption in transit/at rest, redaction, and audit logs. The retrieval layer must respect permissions.",
  },
  {
    q: "Do you support evaluation and monitoring?",
    a: "Yes. We define measurable quality metrics, run evaluation sets, and monitor drift/cost/latency in production.",
  },
];

export default function RAGAgentDevelopmentPage() {
  return (
    <PageShell
      title="RAG Agent Development"
      subtitle="Build reliable AI knowledge systems: retrieval-first answers, measurable accuracy, and cost control."
      crumbs={[{ label: "Home", href: "/" }, { label: "RAG Agent Development" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Ground answers in your data</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I architect RAG systems with strong retrieval foundations, evaluation, and guardrails — so the
            system is useful, safe, and maintainable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/ai-automation-development"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              AI automation services
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">RAG architecture patterns</p>
            <div className="mt-4 grid gap-3">
              {[
                "Chunking + metadata strategies",
                "Hybrid retrieval (semantic + keyword)",
                "Re-ranking for precision",
                "Citations and traceability",
                "Structured outputs + validation",
                "Human-in-the-loop escalation",
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
            <p className="text-sm font-semibold tracking-tight">Common constraints</p>
            <div className="mt-4 grid gap-3">
              {[
                "Cost control under heavy usage",
                "Latency budgets for interactive UX",
                "Permissions + multi-tenant security",
                "Freshness and document sync",
                "Evaluation: quality you can measure",
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
          <p className="text-sm font-semibold tracking-tight text-white">Want a RAG roadmap?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            Book a call and I’ll map a retrieval-first architecture plan with evaluation, monitoring, and
            security built in.
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
