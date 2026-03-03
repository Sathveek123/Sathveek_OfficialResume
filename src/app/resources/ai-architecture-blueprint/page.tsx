import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata = {
  title: "AI System Architecture Blueprint",
};

export default function AIArchitectureBlueprintPage() {
  return (
    <PageShell
      title="AI System Architecture Blueprint"
      subtitle="A framework I use to design AI systems that are measurable, reliable, and scalable."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "AI Architecture Blueprint" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What you get</p>
          <p className="mt-3 text-sm text-[var(--muted)] leading-7">
            A practical blueprint for architecting AI systems with clear boundaries, predictable behavior,
            and production-ready reliability.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              "System architecture template",
              "Component breakdown + responsibilities",
              "Technology decision matrix",
              "Security checklist",
              "Performance + cost optimization notes",
              "Deployment + monitoring overview",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {x}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-sm font-semibold tracking-tight">Best for</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">
              Founders, product engineers, and teams building AI features that must stay accurate and
              stable in production.
            </p>
          </div>
        </Card>

        <div className="grid gap-6">
          <LeadMagnetForm
            resource="ai-architecture-blueprint"
            includeCompany
            intentLabel="Intended use"
            intentOptions={["Production system", "Prototype", "Learning", "Interview prep"]}
            onSuccessRedirect="/resources/ai-architecture-blueprint/thanks"
          />

          <Card variant="outline" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Prefer to talk?</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">
              If you’re building something complex, a strategy call is often the fastest path to clarity.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/book" className="inline-flex text-sm font-semibold text-[var(--accent)]">
                Book strategy call →
              </Link>
              <Link href="/work-with-me" className="inline-flex text-sm font-semibold hover:underline">
                Engagement models
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
