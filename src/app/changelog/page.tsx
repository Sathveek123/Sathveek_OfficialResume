import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { changelog } from "@/lib/authority";

export const metadata = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <PageShell
      title="Changelog"
      subtitle="Portfolio improvements shipped in public — what changed and why it matters."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Changelog" },
      ]}
    >
      <div className="grid gap-4">
        {changelog
          .slice()
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((e) => (
            <Card key={`${e.date}-${e.title}`} variant="glass" className="p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                  {e.type.toUpperCase()}
                </span>
                <span className="text-xs text-[var(--muted)]">{e.date}</span>
                {e.version ? (
                  <span className="text-xs text-[var(--muted)]">· v{e.version}</span>
                ) : null}
              </div>
              <p className="mt-3 text-lg font-semibold tracking-tight">{e.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)] leading-7">{e.description}</p>
            </Card>
          ))}
      </div>
    </PageShell>
  );
}
