import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Framework requested",
};

export default function TradingBotFrameworkThanksPage() {
  return (
    <PageShell
      title="Request received"
      subtitle="You’ll get the framework link by email shortly."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Trading Bot Framework", href: "/resources/trading-bot-framework" },
        { label: "Thanks" },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Next steps</p>
          <p className="mt-3 text-sm text-[var(--muted)] leading-7">
            If you want, reply to the email with your current stack and I’ll suggest the top 3 places to
            harden your system.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white"
            >
              Book a call
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
