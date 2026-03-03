import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { CountUp } from "@/components/CountUp";
import { EnhancedHero } from "@/components/EnhancedHero";
import { BentoGrid, type BentoProject } from "@/components/BentoGrid";
import { projects as detailedProjects } from "@/lib/projects";

const process = [
  {
    title: "Discovery & Alignment",
    desc: "Clarify requirements, constraints, and success metrics. Map the system boundary and define what ‘done’ means.",
  },
  {
    title: "Architecture & Plan",
    desc: "Design a clean architecture with strong interfaces, data contracts, and a roadmap that reduces delivery risk.",
  },
  {
    title: "Build & Iterate",
    desc: "Implement in milestones with tight feedback loops. Prioritize correctness, observability, and performance.",
  },
  {
    title: "Harden & Ship",
    desc: "Production readiness: testing, monitoring hooks, docs, and deployment support so the system stays reliable.",
  },
];

const services = [
  {
    title: "AI & Automation Solutions",
    desc: "Designing logic-driven automation frameworks, RAG agents, and AI rule engines that reduce manual workload and improve operational efficiency.",
    cta: "Explore Services",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    gradient:
      "bg-[radial-gradient(120%_120%_at_10%_0%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(90%_90%_at_90%_10%,rgba(59,130,246,0.18),transparent_55%)]",
  },
  {
    title: "Development",
    desc: "Building scalable web platforms, dashboards, and full-stack applications with React, TypeScript, and performance-optimized architecture.",
    cta: "View Capabilities",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    gradient:
      "bg-[radial-gradient(120%_120%_at_0%_10%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(90%_90%_at_100%_0%,rgba(124,58,237,0.16),transparent_55%)]",
  },
  {
    title: "Trading & Algorithmic Systems",
    desc: "Developing structured automation logic for forecasting, risk modeling, strategy development, and performance tracking systems.",
    cta: "Learn More",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=80",
    gradient:
      "bg-[radial-gradient(120%_120%_at_10%_0%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(90%_90%_at_90%_10%,rgba(59,130,246,0.12),transparent_55%)]",
  },
  {
    title: "Game Development & Simulation",
    desc: "Designing logic-driven game mechanics, simulation environments, and interactive systems with optimized performance.",
    cta: "See Projects",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1400&q=80",
    gradient:
      "bg-[radial-gradient(120%_120%_at_0%_10%,rgba(244,63,94,0.12),transparent_55%),radial-gradient(90%_90%_at_100%_0%,rgba(124,58,237,0.12),transparent_55%)]",
  },
  {
    title: "System Architecture & Consulting",
    desc: "Helping businesses design structured, scalable digital systems with AI integration strategy and automation roadmap planning.",
    cta: "Start Consultation",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    gradient:
      "bg-[radial-gradient(120%_120%_at_10%_0%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(90%_90%_at_90%_10%,rgba(124,58,237,0.14),transparent_55%)]",
  },
];

const skills = [
  "Prompt Engineering",
  "AI Rule Engines",
  "Algorithmic Modeling",
  "Risk Analysis",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "Figma",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Leaflet/Mapping",
  "Trading Systems",
  "Automation",
  "Data Modeling",
];

const testimonials = [
  {
    quote:
      "Delivered a structured automation system with strong logic and performance clarity. Highly analytical approach.",
    name: "Anonymous Client",
    role: "Founder",
  },
  {
    quote: "Excellent at breaking down complex problems into scalable systems.",
    name: "Anonymous Client",
    role: "Product Lead",
  },
  {
    quote: "Strong understanding of risk modeling and automation logic.",
    name: "Anonymous Client",
    role: "Trading Team",
  },
];

export default function Home() {
  const bentoProjects: BentoProject[] = detailedProjects.map((p, idx) => {
    const metric = p.metrics?.[0]?.value ? `${p.metrics[0].label}: ${p.metrics[0].value}` : undefined;
    const image =
      p.category === "AI"
        ? "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80"
        : p.category === "Trading"
          ? "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80"
          : p.category === "Web"
            ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            : p.category === "Automation"
              ? "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
              : "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80";
    return {
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      tags: p.tech,
      metric,
      featured: p.featured,
      image,
      bento: idx === 0 ? "featured" : idx === 2 ? "wide" : "normal",
    };
  });

  return (
    <div id="home" className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-orb left-[-220px] top-[120px] h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(124,58,237,0.20),transparent_60%)]" />
        <div className="bg-orb orb-2 right-[-260px] top-[240px] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_62%)]" />
        <div className="bg-orb orb-3 left-[20%] bottom-[-320px] h-[680px] w-[680px] bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_64%)]" />
      </div>
      <main className="pt-28">
        <EnhancedHero />

        <section className="py-20">
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How I Work</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
                A repeatable process focused on clarity, system boundaries, and production-grade delivery.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {process.map((p, idx) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--card-muted)] text-sm font-semibold text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-lg font-semibold tracking-tight">{p.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] px-5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,40,217,0.22)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                Start a project
              </a>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                View services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Impact</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
                Proof over promises — measurable systems engineering.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  value: 50,
                  suffix: "+",
                  label: "Systems Architected",
                  desc: "From concept to production",
                },
                {
                  value: 12,
                  suffix: "+",
                  label: "AI Agents Deployed",
                  desc: "Automation & intelligence",
                },
                {
                  value: 8,
                  suffix: "",
                  label: "Trading Strategies",
                  desc: "Backtested & optimized",
                },
                {
                  value: 999,
                  suffix: "%",
                  label: "Reliability Target",
                  desc: "Production-grade systems",
                },
                {
                  value: 15,
                  suffix: "+",
                  label: "Technologies",
                  desc: "Expert-level proficiency",
                },
                {
                  value: 5,
                  suffix: "+",
                  label: "Years Building",
                  desc: "Continuous learning & shipping",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
                >
                  <div className="flex items-end gap-1">
                    <p className="text-3xl font-semibold tracking-tight">
                      <CountUp value={m.value} />
                    </p>
                    <p className="pb-1 text-sm font-semibold text-[var(--accent)]">{m.suffix}</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold tracking-tight">{m.label}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-tight">Selected Highlights</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">
                    Minimal proof points — no fluff. Just clarity.
                  </p>
                </div>
                <Link href="/journey" className="inline-flex text-sm font-semibold text-[var(--accent)]">
                  Read my journey →
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  "10K+ Client Delivery",
                  "Signal Glow Launched",
                  "AI Automation Systems Built",
                  "RAG Agents Implemented",
                  "Full-Stack Systems Shipped",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] px-4 py-3"
                  >
                    <p className="text-sm font-semibold tracking-tight">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container-page">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    More Than a Developer — A Systems Architect
                  </h2>
                  <p className="mt-5 text-[var(--muted)] leading-7">
                    I approach software like a system designer: clear interfaces, predictable
                    behavior, strong data models, and automation that holds up under real-world
                    constraints.
                  </p>

                  <p className="mt-6 text-sm font-semibold tracking-tight">My work spans across:</p>

                  <div className="mt-4 grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)] md:grid-cols-2">
                    <div className="space-y-3 text-[var(--muted)]">
                      <p>AI Rule Engine frameworks</p>
                      <p>Algorithmic trading bot logic</p>
                      <p>Risk forecasting models</p>
                      <p>Interactive mapping systems with GPS</p>
                    </div>
                    <div className="space-y-3 text-[var(--muted)]">
                      <p>Game simulation mechanics</p>
                      <p>Real-time dashboards</p>
                      <p>Decision-support tools</p>
                      <p>Automation workflows</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[var(--muted)] leading-7">
                    I value clean architecture, strong data modeling, and sustainable system design.
                    Technology should not just function — it should perform reliably under pressure.
                  </p>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[radial-gradient(60%_60%_at_30%_20%,rgba(124,58,237,0.14),transparent_60%),radial-gradient(60%_60%_at_70%_70%,rgba(59,130,246,0.12),transparent_60%)] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-md)]">
                    <Image
                      src="/images/about.jpeg"
                      alt="About photo"
                      width={900}
                      height={1100}
                      className="h-[420px] w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] p-4">
                      <p className="text-xs font-medium text-[var(--muted)]">Principle</p>
                      <p className="mt-1 text-sm font-semibold tracking-tight">Systems over hacks</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] p-4">
                      <p className="text-xs font-medium text-[var(--muted)]">Standard</p>
                      <p className="mt-1 text-sm font-semibold tracking-tight">Ship clean + scalable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]">
                <p className="text-sm font-semibold tracking-tight">Professional Snapshot</p>
                <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
                  {[
                    "AI Systems Developer",
                    "Automation Architect",
                    "Full-Stack Engineer",
                    "Trading Logic System Designer",
                    "RAG & AI Agent Builder",
                  ].map((x) => (
                    <div key={x} className="flex items-start gap-2">
                      <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                        ✓
                      </span>
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-[var(--muted)] leading-7">
                  Experience: self-driven development across multiple production systems with real-world deployment
                  and client delivery.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-sm)]">
                <p className="text-sm font-semibold tracking-tight">Currently Focused On</p>
                <div className="mt-5 grid gap-3">
                  {[
                    "AI system architecture",
                    "Scalable automation frameworks",
                    "Performance-driven full-stack apps",
                    "Advanced logic modeling",
                    "Exploring quantum computing fundamentals",
                  ].map((x) => (
                    <div key={x} className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] px-4 py-3">
                      <p className="text-sm font-semibold tracking-tight">{x}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="bg-[linear-gradient(180deg,transparent,rgba(124,58,237,0.05))] py-20"
        >
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Systems</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
                A focused set of systems I’ve engineered — designed for clarity, scalability, and measurable
                outcomes.
              </p>
            </div>

            <div className="mt-12">
              <BentoGrid projects={bentoProjects} />
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Technical Partnerships</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
                Architecting intelligent systems for teams who care about reliability and scale.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {services.map((s, idx) => (
                <div
                  key={s.title}
                  className={`grid items-center gap-8 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow-sm)] lg:grid-cols-2 ${
                    idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-[var(--muted)] leading-7">{s.desc}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
                    >
                      {s.cta}
                    </a>
                  </div>

                  <div className="relative">
                    <div className="relative h-56 w-full overflow-hidden rounded-[24px] border border-[var(--border)]">
                      <Image
                        src={s.image}
                        alt={`${s.title} illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 560px"
                      />
                      <div className={`pointer-events-none absolute inset-0 ${s.gradient}`} />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.30))]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page">
            <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] px-6 py-10 text-white shadow-[var(--shadow-lg)] sm:px-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="relative overflow-hidden rounded-3xl border border-white/20">
                  <Image
                    src="/images/stats.jpeg"
                    alt="Professional photo"
                    width={880}
                    height={880}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    AI Systems Architect, Automation Engineer, and Full-Stack Engineer
                  </h2>
                  <p className="mt-4 text-white/85 leading-7">
                    I architect systems that stay reliable at scale — strong boundaries, clear
                    observability, and automation that reduces operational load.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { n: "42+", l: "Systems Delivered" },
                      { n: "11+", l: "Technologies Mastered" },
                      { n: "11K+", l: "Lines of Clean Code" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-2xl border border-white/15 bg-white/10 p-4"
                      >
                        <p className="text-2xl font-semibold tracking-tight">{s.n}</p>
                        <p className="mt-1 text-sm text-white/80">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Skills & Tools For Those Looking For
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <div
                  key={s}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-sm)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <span className="text-sm font-semibold">◎</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold tracking-tight">{s}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Production-ready</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] py-4 shadow-[var(--shadow-sm)]">
              <div className="ticker overflow-hidden">
                <div className="ticker-track flex w-[200%] gap-8 px-6">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="flex w-1/2 gap-8">
                      {[
                        "AI Systems",
                        "Automation",
                        "Trading Bots",
                        "Simulation",
                        "Full-Stack",
                        "Mapping",
                        "AI Systems",
                        "Automation",
                        "Trading Bots",
                        "Simulation",
                        "Full-Stack",
                        "Mapping",
                      ].map((t, idx) => (
                        <span
                          key={`${i}-${idx}`}
                          className="whitespace-nowrap text-sm font-semibold tracking-tight text-[var(--muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(59,130,246,0.06),transparent)] py-20">
          <div className="container-page">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What Clients Say
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.quote}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 p-6 shadow-[var(--shadow-sm)] backdrop-blur"
                >
                  <div className="text-[var(--accent)]">“</div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t.quote}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold tracking-tight">{t.name}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{t.role}</p>
                    <p className="mt-3 text-sm text-[var(--accent)]">★★★★★</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container-page-wide">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow-sm)]">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s Work Together
                </h2>
                <p className="mt-4 max-w-xl text-[var(--muted)] leading-7">
                  If you’re building an AI-first product, automation pipeline, trading system, or a
                  high-performance dashboard — I’ll help you architect it properly and ship it.
                </p>

                <div className="mt-8 grid gap-3 text-sm">
                  <p className="text-[var(--muted)]">
                    Prefer email? Use the form — it reaches me fastest.
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> India
                  </p>
                  <div className="mt-2 flex gap-3">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card-muted)] px-4 text-sm font-semibold"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card-muted)] px-4 text-sm font-semibold"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
                  <Image
                    src="/images/contact.jpeg"
                    alt="Contact photo"
                    width={1200}
                    height={900}
                    className="h-72 w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <ContactForm />

                <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]">
                  <div>
                    <p className="text-sm font-semibold tracking-tight">Ready to architect?</p>
                    <p className="mt-3 text-sm text-[var(--muted)] leading-7">
                      Let’s discuss your system and map a clean architecture plan.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)]"
                    >
                      Schedule a Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow-sm)]">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Building Systems That Scale Beyond Me.
              </h2>
              <p className="mt-4 max-w-3xl text-[var(--muted)] leading-7">
                I don’t just build projects. I design systems that are structured, scalable, and performance-focused.
              </p>
              <p className="mt-4 max-w-3xl text-[var(--muted)] leading-7">
                From student to freelancer to developer — the journey continues. Let’s build something intelligent.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work-with-me"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
                >
                  Work With Me
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
                >
                  My Journey
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
