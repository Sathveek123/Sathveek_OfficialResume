import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Journey",
};

const phases = [
  {
    title: "Early Learning Phase",
    items: [
      "Learning coding from scratch",
      "Web development fundamentals",
      "Full-stack practice",
      "Game development exploration",
    ],
  },
  {
    title: "Automation & Trading Systems Phase",
    items: [
      "Building trading logic",
      "Experimenting with compounding",
      "Risk model iterations",
      "Delivering automation systems",
      "10K+ successful client delivery",
    ],
  },
  {
    title: "AI & Advanced Systems Phase",
    items: [
      "Prompt engineering",
      "RAG models",
      "AI agents",
      "n8n automations",
      "LLM integrations",
      "Data services",
    ],
  },
];

const changedMe = [
  "Real clients",
  "System rewrites",
  "Failures",
  "Discipline",
];

export default function JourneyPage() {
  return (
    <PageShell
      title="From Curiosity to Systems Architecture"
      subtitle="A narrative arc — student to freelancer to systems-driven developer."
      crumbs={[{ label: "Home", href: "/" }, { label: "Journey" }]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-[var(--foreground)] dark:text-white">My Journey</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] dark:text-white/80 leading-7">
            I didn’t start as a systems architect. I started curious — about how websites work, how games are built,
            and why some systems scale while others break. This page is the arc that connects the work you see on
            this site.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {phases.map((p) => (
            <Card key={p.title} variant="glass" className="p-8">
              <p className="text-lg font-semibold tracking-tight">{p.title}</p>
              <ul className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
                {p.items.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                      ✓
                    </span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">What Changed Me</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-7">
              Real deadlines, real stakes, and real feedback. Shipping to clients forced clarity. Rewrites taught
              humility. Failures taught discipline.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {changedMe.map((x) => (
                <div key={x} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                  <p className="text-sm font-semibold tracking-tight">{x}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Closing</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-7">
              I started as a student learning to code. I evolved into a systems-driven developer building intelligent
              digital infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/work-with-me"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                Work With Me
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                View Projects
              </Link>
            </div>
          </Card>
        </div>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">The Beginning — Curiosity Without Direction</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              There was no master plan. No clear roadmap. No mentor guiding each step. It started with curiosity —
              fascinated by how websites loaded, how a click triggered something invisible, and how games responded
              instantly to player actions.
            </p>
            <p>
              At that stage, I wasn’t thinking about careers, freelancing, or AI. I was trying to understand how
              things worked. Curiosity was the fuel.
            </p>
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Learning Without Structure</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              The early days were chaotic: watching tutorials, trying code, breaking code, rewriting code. Sometimes
              it worked. Most times it didn’t.
            </p>
            <p>
              But something important was happening — every bug forced me to think deeper. Every failure exposed a
              gap in understanding. I learned that you don’t learn programming by watching. You learn it by
              debugging.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Discovering Full-Stack Thinking</p>
            <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
              <p>
                Eventually, frontend wasn’t enough. I wanted to understand what happened behind the scenes — how
                data was stored, how APIs connected, and how logic executed on the server.
              </p>
              <p>
                That’s when a shift began: I stopped seeing pages — and started seeing flows. User → request →
                server → database → response.
              </p>
            </div>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Game Development & Simulation Curiosity</p>
            <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
              <p>
                I explored game mechanics beyond visuals: state systems, game loops, logic triggers, simulation
                behavior. Games taught me a subtle principle: every system is controlled state + logic + feedback.
              </p>
              <p>
                That idea later influenced how I built trading systems and AI workflows.
              </p>
            </div>
          </Card>
        </div>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">The Freelancing Leap</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Freelancing changed everything — expectations, deadlines, accountability. When someone pays you,
              discipline changes. Development stopped being practice. It became responsibility.
            </p>
            <p>
              It forced me to communicate clearly, deliver consistently, fix issues quickly, and think about
              reliability.
            </p>
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Enter Trading Systems — A Different Game</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Trading logic introduced real stakes: compounding strategies, signal timing, execution windows, loss
              recovery structures. It exposed something new — risk multiplies at scale.
            </p>
            <p>
              If your architecture is weak, it collapses fast. I experimented heavily. Failures weren’t just bugs —
              they were lessons in risk modeling. Profit is not the goal. Controlled systems are.
            </p>
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">The 10K Client Delivery Milestone</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              One system scaled: 10,000+ successful client deliveries. That number wasn’t just a statistic — it
              meant support requests, live usage, feedback loops, and performance monitoring.
            </p>
            <p>
              That level of exposure changes how you think: uptime percentages, failure rates, scalability. Once you
              cross that threshold, you can’t go back to casual building.
            </p>
          </div>
        </Card>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Signal Glow — The Turning Point</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Signal Glow wasn’t just a launch — it was proof that an idea could move from concept → logic →
              deployment → live users.
            </p>
            <p>
              Shipping something live changes your psychology. You stop chasing cool features and focus on stability,
              architecture, maintainability, and update discipline. Every update becomes structural.
            </p>
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">AI & Automation — The Expansion</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Prompt engineering, RAG systems, LLM integrations, AI agents, n8n automations, data orchestration — AI
              accelerated everything. But I wasn’t satisfied with using tools. I wanted to design systems around
              them.
            </p>
            <p>
              How does an agent retrieve context? Manage memory? Integrate with external APIs? Scale automation
              without breaking? AI didn’t replace logic — it amplified the need for better architecture.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Systems Thinking Solidified</p>
            <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
              <p>
                I stopped asking: “How do I build this feature?” and started asking: “How does this system behave
                under stress?”
              </p>
              <p>
                I began designing in layers: interface, logic, data, automation, monitoring. If those layers aren’t
                aligned, everything else is temporary.
              </p>
            </div>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Lessons That Changed Me</p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] leading-7">
              {[
                "Complexity impresses beginners. Simplicity scales.",
                "Risk ignored becomes disaster later.",
                "Shipping exposes weaknesses faster than theory.",
                "Discipline is more important than talent.",
                "Architecture decisions compound over time.",
              ].map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </Card>
        </div>

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-[var(--foreground)] dark:text-white">Where I Stand Today</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] dark:text-white/80 leading-7">
            I started as a student exploring code. I evolved into a freelancer delivering production systems. I grew
            into a systems-driven developer designing intelligent architectures. And I’m still evolving — because
            mastery isn’t a milestone. It’s a trajectory.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
