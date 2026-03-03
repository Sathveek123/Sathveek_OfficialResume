import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Technical Philosophy",
};

const principles = [
  {
    title: "Systems over features",
    body: "Most teams ship features. I architect systems. Features are short-lived; systems compound. I think in boundaries, data flows, failure modes, and scale trajectories — so the product stays predictable as complexity grows.",
  },
  {
    title: "Logic over hacks",
    body: "Clever code ages badly. Clear logic survives. I optimize for readability, stable interfaces, and behavior you can explain. That’s what lets your team maintain velocity without fear.",
  },
  {
    title: "Performance over hype",
    body: "I don’t chase trends. I measure. Before adopting a tool, I ask what it costs (latency, complexity, ops burden) and what it unlocks (reliability, speed, clarity). What matters is the outcome in production.",
  },
  {
    title: "Architecture over chaos",
    body: "Code without architecture becomes chaos. Chaos becomes technical debt. Good architecture is boring in the best way: predictable, testable, and changeable — even under pressure.",
  },
  {
    title: "Documentation is not optional",
    body: "Undocumented systems are fragile systems. I document decisions, contracts, and runbooks so the next engineer can move fast without breaking things. Future you should never have to guess.",
  },
  {
    title: "Testing is design feedback",
    body: "If something is hard to test, it’s telling you something. I treat tests as a feedback loop that forces cleaner boundaries, smaller units, and safer refactors.",
  },
  {
    title: "Security is a foundation",
    body: "Security added later is security theater. I build it in through data modeling, validation, least privilege, and sane defaults — so you don’t ship risks you can’t unwind.",
  },
  {
    title: "Measure before optimizing",
    body: "Premature optimization is real — but so is premature pessimization. I measure first, then optimize the biggest bottleneck with proven techniques and validate the impact.",
  },
  {
    title: "Code is for humans",
    body: "Computers execute code. Humans maintain it. I write for the engineer six months from now — readable names, explicit behavior, and minimal magic.",
  },
  {
    title: "Automation reduces friction",
    body: "If you do something twice, automate it. I automate testing, deploys, quality checks, monitoring, and backups — because manual processes don’t scale.",
  },
  {
    title: "Simplicity is sophisticated",
    body: "Complexity is easy; simplicity is earned. Simple systems are easier to test, debug, and evolve. I reduce surface area and keep the architecture teachable.",
  },
  {
    title: "Long-term thinking",
    body: "I don’t build for this sprint. I build for the next scale jump. Long-term thinking prevents expensive rewrites and creates systems that get better over time.",
  },
];

export default function PhilosophyPage() {
  return (
    <PageShell
      title="Technical Philosophy"
      subtitle="A systems-first manifesto: how I design, build, and think about production software." 
      crumbs={[{ label: "Home", href: "/" }, { label: "Philosophy" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Systems over shortcuts</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            This page is the baseline for how I work: clarity over cleverness, architecture over chaos, and
            performance that’s measured — not guessed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Work with me
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              View case studies
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} variant="glass" className="p-8">
              <p className="text-sm font-semibold tracking-tight">{p.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)] leading-7">{p.body}</p>
            </Card>
          ))}
        </div>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Next step</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] leading-7">
            If this philosophy matches how you want your product engineered, start with a strategy call.
            We’ll clarify constraints, map a system plan, and decide the right engagement model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
            >
              Book strategy call
            </Link>
            <Link href="/work-with-me" className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold">
              Engagement models
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
