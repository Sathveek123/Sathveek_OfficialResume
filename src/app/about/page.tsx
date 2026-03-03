import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Me"
      subtitle="From student to freelancer to systems-driven developer."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-8">
          <h2 className="text-2xl font-semibold tracking-tight">I Didn’t Start as a Systems Architect.</h2>
          <p className="mt-4 text-[var(--muted)] leading-7">I started curious.</p>
          <p className="mt-4 text-[var(--muted)] leading-7">
            Curious about how websites worked. Curious about how games were built. Curious about why some systems
            scaled… and others broke.
          </p>
          <p className="mt-4 text-[var(--muted)] leading-7">So I began learning.</p>
          <p className="mt-4 text-[var(--muted)] leading-7">
            Not in a straight line. Not with a perfect roadmap. But through building.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Phase One — Learning by Doing</p>
            <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              <p>Web development.</p>
              <p>Full-stack applications.</p>
              <p>Game development concepts.</p>
              <p>UI design experiments.</p>
              <p>Prompt engineering before it was mainstream.</p>
            </div>
            <p className="mt-5 text-sm text-[var(--muted)] leading-7">
              I wasn’t chasing titles. I was chasing understanding.
            </p>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Phase Two — Automation & Trading Systems</p>
            <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              <p>Trading bots.</p>
              <p>Risk models.</p>
              <p>Compounding strategies.</p>
              <p>Signal refinement.</p>
              <p>Execution timing.</p>
            </div>
            <p className="mt-5 text-sm text-[var(--muted)] leading-7">
              Real deployments. Real users. Real consequences.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-tight">10,000+ successful client deliveries.</p>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Phase Three — AI & Intelligent Systems</p>
            <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              <p>RAG models.</p>
              <p>LLM integrations.</p>
              <p>AI agents.</p>
              <p>n8n automation workflows.</p>
              <p>Data orchestration.</p>
              <p>Decision-support systems.</p>
            </div>
            <p className="mt-5 text-sm text-[var(--muted)] leading-7">
              Not just using AI tools — designing systems around them.
            </p>
          </Card>
        </div>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What I Believe Now</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Systems over features.",
              "Architecture over shortcuts.",
              "Risk control over profit chasing.",
              "Clarity over complexity.",
              "Long-term structure over short-term hype.",
              "I don’t just build applications — I architect intelligent digital systems.",
            ].map((x) => (
              <div key={x} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                <p className="text-sm text-[var(--muted)] leading-6">{x}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What Building Taught Me</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Building taught me that complexity is easy to create — and hard to maintain. Anyone can stack
              features. Few can design systems that survive scale.
            </p>
            <p>
              I learned to slow down before speeding up. To map architecture before writing logic. To measure risk
              before chasing performance. To optimize only after understanding the bottleneck.
            </p>
            <p>
              Most growth didn’t come from success. It came from rewriting systems that “worked” but weren’t
              stable — debugging automation failures, and learning why models behave differently in production than
              in testing.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">How I Think About Systems</p>
            <p className="mt-4 text-sm text-[var(--muted)] leading-7">
              When I approach a project, I don’t start with features. I start with questions: what breaks first?
              what scales poorly? where does risk accumulate? how does this evolve six months from now?
            </p>
            <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
              {[
                "Interface layer",
                "Logic layer",
                "Data layer",
                "Automation layer",
                "Control and monitoring layer",
              ].map((x) => (
                <p key={x}>{x}.</p>
              ))}
            </div>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">The Discipline Behind the Work</p>
            <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
              <p>
                Discipline became non-negotiable once systems went live. Deadlines became real. User feedback became
                immediate. Bugs became visible.
              </p>
              <p>
                That’s when I shifted from “developer experimenting” to “engineer responsible for outcomes.” I
                started documenting more, testing more, refactoring more, and measuring performance more carefully.
              </p>
            </div>
          </Card>
        </div>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">The Transition</p>
          <div className="mt-4 grid gap-4 text-sm text-[var(--muted)] leading-7">
            <p>
              Freelancing taught me speed. Automation taught me structure. Trading systems taught me risk. AI systems
              taught me abstraction. Full-stack development taught me integration.
            </p>
            <p>
              All of it combined into systems thinking: I don’t see isolated features. I see interactions,
              dependencies, failure points, and optimization pathways.
            </p>
          </div>
        </Card>

        <Card variant="outline" className="p-8">
          <p className="text-sm font-semibold tracking-tight">What Makes Me Different</p>
          <p className="mt-4 text-sm text-[var(--muted)] leading-7">
            I’ve worked across web platforms, automation engines, trading logic systems, AI agents, RAG architectures,
            data orchestration, and simulation modeling — not as isolated skills, but as interconnected layers.
          </p>
          <p className="mt-4 text-sm text-[var(--muted)] leading-7">
            That cross-domain experience shaped how I design. I don’t panic when complexity increases. I decompose it.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Growth Mindset</p>
            <p className="mt-4 text-sm text-[var(--muted)] leading-7">
              I’m still learning: quantum fundamentals, advanced AI architecture patterns, optimization techniques,
              and infrastructure thinking. The goal isn’t to know everything — it’s to continuously compound
              knowledge.
            </p>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">The Long-Term Vision</p>
            <p className="mt-4 text-sm text-[var(--muted)] leading-7">
              I’m not building a portfolio. I’m building capability — systems that outlast trends, with architecture
              that compounds over time.
            </p>
          </Card>
        </div>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Final Identity</p>
          <p className="mt-4 text-sm text-[var(--muted)] leading-7">
            From student curiosity to freelance execution to production systems to intelligent automation design — I
            evolved through building. And I’m still building. Not for short-term wins. But for long-term mastery.
          </p>
        </Card>

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Looking forward</p>
          <p className="mt-3 max-w-3xl text-sm text-white/80 leading-7">
            Because the goal isn’t to build projects. It’s to build systems that scale beyond me.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
