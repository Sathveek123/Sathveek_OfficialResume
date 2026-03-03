import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { ExperienceGraph } from "@/components/ExperienceGraph";
import { GitHubActivity } from "@/components/GitHubActivity";

export const metadata = {
  title: "Stats",
};

export default function StatsPage() {
  return (
    <PageShell
      title="Stats"
      subtitle="A public dashboard (privacy-friendly). This is scaffolded now — analytics will be wired next."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Stats" },
      ]}
    >
      <div className="grid gap-6">
        <ExperienceGraph />

        <GitHubActivity />

        <Card variant="glass" className="p-7">
          <p className="text-sm font-semibold tracking-tight">Public analytics (coming soon)</p>
          <p className="mt-2 text-sm text-[var(--muted)] leading-7">
            Next upgrade: integrate Plausible or Umami, then expose aggregated metrics here (no invasive
            tracking). We’ll track page popularity, referrals, and goal conversions.
          </p>
        </Card>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "30d pageviews", value: "—" },
            { label: "Top page", value: "—" },
            { label: "Newsletter", value: "—" },
            { label: "Contact conversions", value: "—" },
          ].map((s) => (
            <Card key={s.label} variant="outline" className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">{s.value}</p>
            </Card>
          ))}
        </div>

        <Card variant="outline" className="p-7">
          <p className="text-sm font-semibold tracking-tight">Roadmap</p>
          <div className="mt-4 grid gap-3">
            {[
              "Privacy-friendly analytics (Plausible/Umami)",
              "Goal tracking (resume downloads, contact submits)",
              "Popular content + funnels",
              "Performance metrics snapshot (CWV)",
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
    </PageShell>
  );
}
