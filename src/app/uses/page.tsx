import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Uses",
};

export default function UsesPage() {
  return (
    <PageShell
      title="Tools & Setup"
      subtitle="Transparency builds trust — the tools I use to build systems faster, cleaner, and more reliably."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Uses" },
      ]}
    >
      <div className="grid gap-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]">
          <h2 className="text-lg font-semibold tracking-tight">Development</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <li>Editor: VS Code</li>
            <li>Stack: Next.js, TypeScript, Tailwind</li>
            <li>Version control: Git + GitHub</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]">
          <h2 className="text-lg font-semibold tracking-tight">AI / Automation</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <li>Prompt engineering workflows + agent tooling</li>
            <li>Automation: custom bots + scheduled jobs</li>
            <li>System diagrams + documentation-first design</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
