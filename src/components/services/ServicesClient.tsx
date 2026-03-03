"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { services } from "@/lib/services";

export function ServicesClient() {
  const featured = services.find((s) => s.featured) ?? services[0];

  return (
    <div className="grid gap-10">
      <Card variant="gradient" glow className="p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold">
            Strategic Technical Partnerships
          </span>
          <span className="text-xs text-[var(--muted)]">Project-based · Outcome-driven</span>
        </div>
        <p className="mt-4 text-2xl font-semibold tracking-tight">Build intelligent systems that scale.</p>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] leading-7">
          I design AI automation, trading systems, and high-performance web products with a systems-first mindset.
          Clear scope. Clean interfaces. Measurable outcomes.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
          <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 font-semibold">
            Built With
          </span>
          <span className="leading-6">
            Next.js • React • TypeScript • Tailwind • Framer Motion • Structured SEO • AI Integrations
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)]"
          >
            Book Strategy Call
          </Link>
          <Link
            href={featured ? `/services/${featured.slug}` : "/services"}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)]"
          >
            View a service
          </Link>
        </div>
      </Card>

      <div>
        <p className="text-sm font-semibold tracking-tight">Offerings</p>
        <p className="mt-2 text-sm text-[var(--muted)] leading-7">
          Choose the outcome you want. I’ll design the system to get you there.
        </p>
        <Stagger className="mt-5 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link href={`/services/${s.slug}`} className="block">
                <Card variant="glass" className="h-full p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                      {s.timeline}
                    </span>
                    <span className="text-xs text-[var(--muted)]">·</span>
                    <span className="text-xs text-[var(--muted)]">{s.typicalRange}</span>
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight">{s.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">{s.tagline}</p>

                  <div className="mt-4 grid gap-2">
                    {s.outcomes.slice(0, 3).map((o) => (
                      <p key={o} className="text-sm text-[var(--muted)]">
                        <span className="font-semibold text-[var(--foreground)]">•</span> {o}
                      </p>
                    ))}
                  </div>

                  <p className="mt-6 text-sm font-semibold text-[var(--accent)]">Learn more →</p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Card variant="outline" className="p-7">
        <p className="text-sm font-semibold tracking-tight">How I work</p>
        <p className="mt-2 text-sm text-[var(--muted)] leading-7">No surprises. Clear milestones. Tight feedback loops.</p>
        <Stagger className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            { title: "Discovery", desc: "Clarify constraints, success metrics, and scope." },
            { title: "Architecture", desc: "Design interfaces, risks, and a clean execution plan." },
            { title: "Build", desc: "Implement with instrumentation, tests, and iteration." },
            { title: "Validate", desc: "Measure outcomes and harden edge cases." },
            { title: "Deploy", desc: "Production readiness, monitoring, and docs." },
            { title: "Support", desc: "Handoff + optional retainers for improvements." },
          ].map((s) => (
            <StaggerItem key={s.title}>
              <Card variant="glass" className="p-6">
                <p className="text-sm font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{s.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card variant="glass" className="p-7">
          <p className="text-sm font-semibold tracking-tight">Who I work with</p>
          <div className="mt-4 grid gap-3">
            {[
              "Startups shipping AI-powered products",
              "SaaS teams scaling reliability and performance",
              "Founders who want a systems-first partner",
              "Technical teams needing architecture clarity",
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

        <Card variant="glass" className="p-7">
          <p className="text-sm font-semibold tracking-tight">What every project includes</p>
          <div className="mt-4 grid gap-3">
            {[
              "Clean, maintainable code",
              "Architecture docs + diagrams",
              "Deployment guide",
              "Performance and reliability checks",
              "30-day support window",
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

      <Card variant="outline" className="p-7">
        <p className="text-sm font-semibold tracking-tight">FAQ</p>
        <div className="mt-4 grid gap-3">
          {[
            {
              q: "Do you do hourly billing?",
              a: "No — projects are scoped and priced by outcome. This keeps incentives aligned: ship impact, not hours.",
            },
            {
              q: "What’s your response time?",
              a: "Typically within 24 hours on weekdays. For active projects, we define comms + escalation paths upfront.",
            },
            {
              q: "Can you work with my team?",
              a: "Yes. I can embed as an architecture partner or deliver a focused implementation sprint.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
            >
              <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-[var(--muted)] leading-7">{f.a}</p>
            </details>
          ))}
        </div>
      </Card>

      <Card variant="gradient" glow className="p-7">
        <p className="text-sm font-semibold tracking-tight text-white">Ready to start?</p>
        <p className="mt-2 max-w-2xl text-sm text-white/80 leading-7">
          If you want a systems architect mindset applied to your product, let’s scope a clear next step.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
          >
            Book Strategy Call
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
          >
            Email me
          </Link>
        </div>
      </Card>
    </div>
  );
}
