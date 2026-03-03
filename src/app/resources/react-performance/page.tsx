import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata = {
  title: "React Performance Checklist",
};

export default function ReactPerformancePage() {
  return (
    <PageShell
      title="React Performance Checklist"
      subtitle="A practical checklist to make React/Next apps fast, stable, and measurable."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "React Performance" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What’s inside</p>
          <div className="mt-4 grid gap-3">
            {[
              "Bundle + route-level performance checks",
              "Render churn + memoization guidance",
              "Images, fonts, and caching best practices",
              "Server vs client rendering decision points",
              "Monitoring and regression prevention",
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
            <Link href="/react-performance-optimization" className="inline-flex text-sm font-semibold text-[var(--accent)]">
              Related: React performance optimization →
            </Link>
          </div>
        </Card>

        <div className="grid gap-6">
          <LeadMagnetForm
            resource="react-performance"
            onSuccessRedirect="/resources/react-performance/thanks"
          />

          <Card variant="outline" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Need help implementing?</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">
              If your product is slow or your metrics are unstable, I can help you prioritize and ship
              improvements quickly.
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
