import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata = {
  title: "System Design Interview Guide",
};

export default function SystemDesignGuidePage() {
  return (
    <PageShell
      title="System Design Interview Guide"
      subtitle="A practical guide to answering system design questions with clear trade-offs and structure."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "System Design Guide" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Includes</p>
          <div className="mt-4 grid gap-3">
            {[
              "A repeatable interview structure",
              "Scaling + trade-off checklists",
              "Common pitfalls and how to avoid them",
              "How to communicate assumptions clearly",
              "A prep roadmap",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {x}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/blog" className="inline-flex text-sm font-semibold text-[var(--accent)]">
              Read technical insights →
            </Link>
          </div>
        </Card>

        <div className="grid gap-6">
          <LeadMagnetForm
            resource="system-design-guide"
            intentLabel="Current role"
            intentOptions={["Student", "Junior dev", "Mid-level", "Senior", "Staff+", "Founder"]}
            onSuccessRedirect="/resources/system-design-guide/thanks"
          />

          <Card variant="outline" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Want feedback on an answer?</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">
              Book a call and we’ll do a structured review (requirements, architecture, trade-offs).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/book" className="inline-flex text-sm font-semibold text-[var(--accent)]">
                Book strategy call →
              </Link>
              <Link href="/work-with-me" className="inline-flex text-sm font-semibold hover:underline">
                Work with me
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
