import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <PageShell
      title="What I’m Working On Now"
      subtitle="Founder energy — current focus, active projects, and experiments."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Now" },
      ]}
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]">
        <p className="text-sm text-[var(--muted)]">Last updated: February 16, 2026</p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">Current Focus</h2>
        <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
          <li>Building advanced RAG systems with vector databases</li>
          <li>Researching reinforcement learning for trading strategies</li>
          <li>Scaling automation frameworks for enterprise clients</li>
        </ul>

        <h2 className="mt-8 text-lg font-semibold tracking-tight">Active Projects</h2>
        <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
          <li>AI-powered document analysis system for legal tech</li>
          <li>Real-time performance monitoring dashboard (React + WebSocket)</li>
          <li>Procedural generation engine for strategy game simulations</li>
        </ul>

        <h2 className="mt-8 text-lg font-semibold tracking-tight">Reading</h2>
        <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
          <li>Designing Data-Intensive Applications — Martin Kleppmann</li>
          <li>Research papers on multi-agent systems</li>
          <li>Trading psychology + risk literature</li>
        </ul>
      </div>
    </PageShell>
  );
}
