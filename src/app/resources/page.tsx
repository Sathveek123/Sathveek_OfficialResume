import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { resources } from "@/lib/authority";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  const linkByTitle: Record<string, string> = {
    "AI System Architecture Blueprint": "/resources/ai-architecture-blueprint",
    "Trading Bot Logic Framework": "/resources/trading-bot-framework",
    "React Performance Checklist": "/resources/react-performance",
    "System Design Interview Guide": "/resources/system-design-guide",
  };

  return (
    <PageShell
      title="Resources"
      subtitle="Free templates, guides, and frameworks I use when designing systems."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Resources" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {resources.map((r) => (
          <Card key={r.title} variant="glass" className="p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-semibold tracking-tight">{r.title}</p>
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                {r.type.toUpperCase()}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)] leading-7">{r.description}</p>
            {r.link || linkByTitle[r.title] ? (
              <Link
                href={r.link || linkByTitle[r.title]}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)]"
              >
                Get it →
              </Link>
            ) : (
              <p className="mt-5 text-sm font-semibold text-[var(--accent)]">Coming soon →</p>
            )}
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
