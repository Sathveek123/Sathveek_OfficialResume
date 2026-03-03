import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work With Me",
};

const engagementModels = [
  {
    title: "Strategy Consultation",
    duration: "2–4 hours",
    deliverable: "Architecture direction + prioritized plan",
    bestFor: "Early-stage planning, second opinions, technical clarity",
    investment: "Project-based",
    cta: { label: "Book consultation", href: "/book" },
    items: [
      "Technical audit of current system",
      "Architecture recommendations",
      "Technology stack guidance",
      "Implementation roadmap",
      "Risk assessment",
    ],
  },
  {
    title: "System Architecture Design",
    duration: "2–3 weeks",
    deliverable: "Complete technical specification",
    bestFor: "Pre-development planning and confident execution",
    investment: "Project-based",
    cta: { label: "Request proposal", href: "/contact" },
    items: [
      "Architecture diagrams (high-level + detailed)",
      "Data model + schema direction",
      "API architecture + contracts",
      "Performance + reliability requirements",
      "Security considerations",
      "Implementation guide",
    ],
  },
  {
    title: "Full System Build",
    duration: "6–12+ weeks",
    deliverable: "Production-ready system delivery",
    bestFor: "End-to-end delivery where quality and reliability matter",
    investment: "Project-based",
    cta: { label: "Start project discussion", href: "/contact" },
    items: [
      "Architecture + implementation",
      "Performance-first execution",
      "Testing strategy + QA",
      "Deployment infrastructure",
      "Documentation + handoff",
      "Post-launch support window",
    ],
  },
  {
    title: "Long-Term Technical Partnership",
    duration: "Ongoing (6+ months)",
    deliverable: "Continuous system evolution",
    bestFor: "Teams scaling complexity and wanting an embedded architect",
    investment: "Retainer",
    cta: { label: "Discuss partnership", href: "/contact" },
    items: [
      "Architecture reviews + roadmap support",
      "Ongoing optimization",
      "New feature architecture",
      "Performance monitoring direction",
      "Priority support",
      "Quarterly architecture reviews",
    ],
  },
];

const proofStrip = [
  { label: "Systems architected", value: "Multi-domain" },
  { label: "AI + automation focus", value: "Production-ready" },
  { label: "Performance mindset", value: "Measured" },
  { label: "Delivery standard", value: "Documented" },
];

const techStack = [
  {
    group: "AI & automation",
    items: [
      { label: "Prompt engineering", pct: 98 },
      { label: "RAG patterns", pct: 88 },
      { label: "Vector databases", pct: 82 },
      { label: "Workflow automation", pct: 90 },
    ],
  },
  {
    group: "Backend",
    items: [
      { label: "Node.js", pct: 95 },
      { label: "Python", pct: 90 },
      { label: "PostgreSQL", pct: 92 },
      { label: "Redis", pct: 84 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { label: "React", pct: 98 },
      { label: "TypeScript", pct: 98 },
      { label: "Next.js", pct: 95 },
      { label: "Tailwind", pct: 95 },
    ],
  },
];

const includedStandards = [
  {
    title: "Structured systems thinking",
    desc: "No hacks. Clear architecture that scales with changing requirements.",
  },
  {
    title: "Performance-first mindset",
    desc: "Measure bottlenecks, optimize the biggest constraints, keep the system fast.",
  },
  {
    title: "Clean, documented delivery",
    desc: "Readable code, documented decisions, and handoff that your team can own.",
  },
  {
    title: "Transparent communication",
    desc: "Clear milestones, weekly progress, and no surprises.",
  },
  {
    title: "Security by design",
    desc: "Validation, least privilege, and sensible defaults from day one.",
  },
  {
    title: "Testing & quality",
    desc: "Design that’s testable, with coverage where it matters most.",
  },
];

const fit = {
  good: [
    {
      title: "AI product founders",
      desc: "Building intelligent products and need architecture that’s stable, measurable, and scalable.",
    },
    {
      title: "SaaS teams scaling",
      desc: "Complexity is increasing and performance + reliability are becoming business constraints.",
    },
    {
      title: "Trading & risk operations",
      desc: "Automation, backtesting infrastructure, and risk-first decision systems.",
    },
    {
      title: "Automation-first teams",
      desc: "Eliminating manual processes with intelligent workflows and decision layers.",
    },
    {
      title: "Simulation builders",
      desc: "Forecasting, modeling, and systems engineered for throughput and correctness.",
    },
  ],
  bad: [
    "One-off small tasks",
    "Quick fixes without clear business value",
    "Projects with no collaboration bandwidth",
    "Teams that want speed over quality",
  ],
};

const process = [
  {
    title: "Discovery",
    bullets: [
      "Deep dive on goals + constraints",
      "Clarify success metrics",
      "Identify risks and failure modes",
      "Align on scope and next steps",
    ],
  },
  {
    title: "Architecture",
    bullets: [
      "Data flows + boundaries",
      "API contracts and system design",
      "Performance + reliability constraints",
      "Security and testing approach",
    ],
  },
  {
    title: "Implementation",
    bullets: ["Build in milestones", "Testing cycles", "Performance tuning", "Documentation as we go"],
  },
  {
    title: "Launch + handoff",
    bullets: ["Deployment support", "Observability basics", "Team enablement", "Post-launch fixes"],
  },
];

const faq = [
  {
    q: "Do you work with agencies or only direct clients?",
    a: "Both. I prefer engagements where I can understand business context and technical constraints clearly.",
  },
  {
    q: "Can you work within our existing tech stack?",
    a: "Yes. I adapt to your constraints while recommending improvements where the ROI is clear.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Confidentiality is standard.",
  },
  {
    q: "What’s your response time?",
    a: "Within 24 hours for active engagements. Most updates run async; calls are scheduled when needed.",
  },
  {
    q: "What if scope changes?",
    a: "We handle changes via structured change requests with impact analysis before proceeding.",
  },
  {
    q: "How do we start?",
    a: "Book a strategy call. You’ll get clear next steps, and if there’s mutual fit we’ll scope a proposal.",
  },
];

export default function WorkWithMePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 1);
  const caseStudyHighlights = (featured.length ? featured : projects.slice(0, 1)).concat(
    projects.filter((p) => !p.featured).slice(0, 2),
  );

  return (
    <PageShell
      title="Work With Me"
      subtitle="I architect intelligent systems that scale — not quick fixes. If you want a long-term technical partner with a systems mindset, start here."
      crumbs={[{ label: "Home", href: "/" }, { label: "Work With Me" }]}
    >
      <div className="grid gap-10">
        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Let’s architect intelligence together</p>
          <p className="mt-3 max-w-2xl text-sm text-white/80 leading-7">
            I design systems that think, adapt, and scale. Not features. Not hacks. Architecture you can
            build on for years.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              View case studies
            </Link>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStrip.map((p) => (
            <Card key={p.label} variant="glass" className="p-6">
              <p className="text-xs font-semibold tracking-tight text-[var(--muted)]">{p.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">{p.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Production-grade architecture", "Performance-first design", "Reliable delivery", "Documentation included"].map(
            (x) => (
              <Card key={x} variant="glass" className="p-6">
                <p className="text-sm font-semibold tracking-tight">{x}</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">
                  Built for maintainability, resilience, and measurable outcomes.
                </p>
              </Card>
            ),
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Who this is for</p>
            <div className="mt-5 grid gap-4">
              {fit.good.map((x) => (
                <div key={x.title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-sm font-semibold tracking-tight">{x.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">{x.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Not a fit</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-7">
              If you need any of the below, I’m probably not the right partner.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
              {fit.bad.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                    ×
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Engagement models</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              Choose the level of depth you need. Every engagement is architecture-led and outcome-focused.
            </p>
          </div>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
            {engagementModels.map((m) => (
              <StaggerItem key={m.title}>
                <Card variant="glass" className="p-8">
                  <p className="text-lg font-semibold tracking-tight">{m.title}</p>
                  <div className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
                    <p>
                      <span className="font-semibold text-[var(--foreground)]">Duration:</span> {m.duration}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--foreground)]">Deliverable:</span> {m.deliverable}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--foreground)]">Best for:</span> {m.bestFor}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--foreground)]">Investment:</span> {m.investment}
                    </p>
                  </div>

                  <ul className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
                    {m.items.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                          ✓
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href={m.cta.href}
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
                    >
                      {m.cta.label}
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tech stack expertise</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              A practical, production-focused stack — chosen for reliability, performance, and maintainability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {techStack.map((g) => (
              <Card key={g.group} variant="glass" className="p-8">
                <p className="text-sm font-semibold tracking-tight">{g.group}</p>
                <div className="mt-5 grid gap-4">
                  {g.items.map((i) => (
                    <div key={i.label} className="grid gap-2">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold tracking-tight">{i.label}</p>
                        <p className="text-xs font-semibold text-[var(--muted)]">{i.pct}%</p>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-muted)]">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))]"
                          style={{ width: `${i.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/uses" className="inline-flex text-sm font-semibold text-[var(--accent)]">
                    View complete stack →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Case study highlights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              Selected systems with clear constraints, trade-offs, and measurable outcomes.
            </p>
          </div>

          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudyHighlights.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Card variant="outline" className="p-8">
                  <p className="text-xs font-semibold tracking-tight text-[var(--muted)]">
                    {p.category} • {p.year}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-tight">{p.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">{p.tagline}</p>

                  {p.metrics?.length ? (
                    <div className="mt-5 grid gap-2">
                      {p.metrics.slice(0, 3).map((m) => (
                        <div key={m.label} className="flex items-center justify-between gap-4 text-sm">
                          <span className="text-[var(--muted)]">{m.label}</span>
                          <span className="font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--card-muted)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href={`/projects/${p.slug}`} className="inline-flex text-sm font-semibold text-[var(--accent)]">
                      Read full case study →
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What every engagement includes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              The standards you get by default — regardless of scope.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {includedStandards.map((s) => (
              <Card key={s.title} variant="outline" className="p-7">
                <p className="text-sm font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Working principles</p>
          <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] leading-7">
            Systems should be intelligent, scalable, measurable, maintainable, and resilient. I optimize for
            clarity and long-term value — so the system compounds instead of collapsing under complexity.
          </p>
        </Card>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              Transparent milestones with clear deliverables.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <Card key={p.title} variant="glass" className="p-7">
                <p className="text-sm font-semibold tracking-tight">{p.title}</p>
                <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                        →
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] leading-7">
              Fast answers to the most common questions.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {faq.map((f) => (
              <details
                key={f.q}
                className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
              >
                <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-[var(--muted)] leading-7">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Ready to build something intelligent?</p>
          <p className="mt-3 max-w-2xl text-sm text-white/80 leading-7">
            Start with a 30-minute strategy call. No pressure — just technical clarity and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book your strategy call
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Ask a question
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/70">
            Availability: limited monthly slots. If we’re not aligned after the first week of a paid engagement,
            I’ll make it right.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
