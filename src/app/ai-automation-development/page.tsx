import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "AI Automation Development",
  description:
    "AI automation development services: build intelligent workflows, decision systems, and production-ready automation that scales.",
};

const faqs = [
  {
    q: "What is AI automation development?",
    a: "AI automation development is the design and implementation of systems that combine deterministic workflow automation with AI decision layers (classification, extraction, retrieval, and reasoning), so operations scale without manual overhead.",
  },
  {
    q: "Do you build rule-based systems or LLM-based systems?",
    a: "Both. In production, the best systems usually combine deterministic rules (predictability) with AI components (adaptability) behind strong interfaces and validation.",
  },
  {
    q: "How do you control cost and latency?",
    a: "Caching, prompt + retrieval optimization, batching, fallbacks, and measuring the real bottleneck. Cost/latency are treated as first-class constraints.",
  },
  {
    q: "Can you integrate with existing tools (CRM, Slack, email, internal APIs)?",
    a: "Yes. I design automation as modular components with clear contracts so integrations remain stable as requirements evolve.",
  },
  {
    q: "How do you handle hallucinations and reliability?",
    a: "Grounding (RAG), structured outputs, validation layers, deterministic post-processing, and monitoring. If an output matters, it must be checkable.",
  },
];

export default function AIAutomationDevelopmentPage() {
  return (
    <PageShell
      title="AI Automation Development"
      subtitle="Build intelligent automation systems that reduce manual work, improve reliability, and scale with your product."
      crumbs={[{ label: "Home", href: "/" }, { label: "AI Automation Development" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Intelligent automation that scales</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            I architect automation systems with clear boundaries, measurable performance, and reliability
            by design — so workflows stay stable as volume and complexity increase.
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
              Engagement models
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">When you need AI automation</p>
            <div className="mt-4 grid gap-3">
              {[
                "Manual processes are consuming hours per week",
                "Decisions depend on messy, unstructured data",
                "Operations are scaling but headcount can’t",
                "You need repeatable, auditable outcomes",
                "You want automation without breaking reliability",
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
            <p className="text-sm font-semibold tracking-tight">Types of systems</p>
            <div className="mt-4 grid gap-3">
              {[
                "Workflow automation frameworks",
                "Decision engines (rules + AI)",
                "RAG-based internal knowledge systems",
                "Document intelligence (extract/validate)",
                "Human-in-the-loop review pipelines",
                "Dashboards for monitoring + audit trails",
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

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Process</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-4">
            {[
              {
                t: "1. Discovery",
                d: "Clarify goals, constraints, data sources, and success metrics.",
              },
              {
                t: "2. Architecture",
                d: "Define boundaries, contracts, fallbacks, and failure modes.",
              },
              {
                t: "3. Build",
                d: "Implement in milestones with validation + observability.",
              },
              {
                t: "4. Launch",
                d: "Ship with monitoring, docs, and iteration loop.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-sm font-semibold tracking-tight">{x.t}</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{x.d}</p>
              </div>
            ))}
          </div>
        </Card>

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
          <p className="text-sm font-semibold tracking-tight text-white">Ready to automate?</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            Book a strategy call and I’ll map a clear architecture plan: components, risks, timelines, and
            the fastest path to measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book your call
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              View case studies
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
