import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Blueprint requested",
};

export default function AIArchitectureBlueprintThanksPage() {
  return (
    <PageShell
      title="You’re in. Check your inbox."
      subtitle="If you don’t see it in a minute, check spam/promotions."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "AI Architecture Blueprint", href: "/resources/ai-architecture-blueprint" },
        { label: "Thanks" },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What happens next</p>
          <div className="mt-4 grid gap-3">
            {[
              "You’ll receive the resource link by email.",
              "Reply to that email if you want feedback on your architecture.",
              "If this is urgent, book a call and we’ll map next steps.",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {x}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
            >
              Book strategy call
            </Link>
            <Link
              href="/resources"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold"
            >
              Back to resources
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
