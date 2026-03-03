export type ServiceSlug =
  | "ai-automation-systems"
  | "trading-bot-development"
  | "web-application-development"
  | "system-architecture-consulting";

export interface Service {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  description: string;
  typicalRange: string;
  timeline: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string[];
  notFor: string[];
  faq: Array<{ q: string; a: string }>;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: "ai-automation-systems",
    title: "AI Automation Systems",
    tagline: "RAG agents, rule engines, and workflows that remove manual work — safely.",
    description:
      "I design intelligent automation systems that are reliable, observable, and maintainable — not fragile scripts. Expect clear decision boundaries, evaluation loops, and production-grade instrumentation.",
    typicalRange: "$5K – $30K+",
    timeline: "2–6 weeks",
    outcomes: [
      "Automate repetitive ops with measurable ROI",
      "Reduce support load via better self-serve intelligence",
      "Improve reliability with guardrails and fallbacks",
    ],
    deliverables: [
      "System architecture + decision flow",
      "Agent/pipeline implementation with tests",
      "Monitoring hooks + runbook",
      "Deployment guide + handoff",
    ],
    idealFor: [
      "Startups building AI features into a product",
      "Teams drowning in manual workflows",
      "Founders who need a reliable automation layer",
    ],
    notFor: ["No requirements, no constraints", "One-off scripts with no ownership"],
    faq: [
      {
        q: "Do you build fully autonomous agents?",
        a: "Yes — but only when the problem and risk profile justify it. Most businesses win faster with constrained agents + clear guardrails.",
      },
      {
        q: "How do we measure success?",
        a: "We define a measurable before/after metric (time saved, accuracy, SLA, cost). Then we instrument and iterate.",
      },
    ],
    featured: true,
  },
  {
    slug: "trading-bot-development",
    title: "Trading Bot Development",
    tagline: "Risk-first strategy logic, evaluation harnesses, and execution-ready systems.",
    description:
      "I build structured trading logic frameworks that prioritize risk constraints, reproducibility, and debuggability. The goal is to avoid logic drift between research and execution.",
    typicalRange: "$5K – $50K+",
    timeline: "3–8 weeks",
    outcomes: [
      "A deterministic strategy engine",
      "Backtest → paper → live path with minimal drift",
      "Risk controls enforced before execution",
    ],
    deliverables: [
      "Strategy spec + risk model",
      "Backtesting harness + reports",
      "Execution layer integration plan",
      "Monitoring and incident playbooks",
    ],
    idealFor: [
      "Traders transitioning to systematic execution",
      "Small funds needing automation",
      "Teams validating strategies with discipline",
    ],
    notFor: ["Guaranteed profits", "Black-box strategies with no evaluation"],
    faq: [
      {
        q: "Do you connect to live brokers/exchanges?",
        a: "I can — but I recommend staging: backtest → paper → limited live. We keep controls tight and logging rich.",
      },
      {
        q: "Can you improve an existing bot?",
        a: "Yes. Usually the highest leverage is separating data/strategy/execution and adding an evaluation loop with reliable metrics.",
      },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "High-performance Next.js products, dashboards, and conversion-first experiences.",
    description:
      "I build fast, scalable web applications with clean information architecture and a premium interaction layer. The result is a product that feels expensive and performs like it.",
    typicalRange: "$3K – $40K+",
    timeline: "2–8 weeks",
    outcomes: [
      "Ship a production-ready app with strong UX",
      "Improve Core Web Vitals and conversion paths",
      "Set up maintainable component patterns",
    ],
    deliverables: [
      "Design-to-implementation UI system",
      "Performance budget + improvements",
      "SEO + metadata foundation",
      "Deployment + monitoring checklist",
    ],
    idealFor: [
      "SaaS teams scaling UI quickly",
      "Founders shipping an MVP that feels premium",
      "Teams needing performance fixes",
    ],
    notFor: ["Pixel-perfect without decisions", "Sites with no content or goals"],
    faq: [
      {
        q: "Can you work with an existing design?",
        a: "Yes. If design exists, I’ll implement it with a reusable UI kit + performance guardrails.",
      },
      {
        q: "Do you handle deployment?",
        a: "Yes — Vercel is typical. I also provide a deployment checklist and monitoring recommendations.",
      },
    ],
  },
  {
    slug: "system-architecture-consulting",
    title: "System Architecture Consulting",
    tagline: "Clarity for complex systems: constraints, interfaces, and execution plan.",
    description:
      "When teams hit complexity, progress slows. I help you design a clean architecture, identify risks early, and create a plan that engineers can execute without ambiguity.",
    typicalRange: "$1K – $15K+",
    timeline: "1–3 weeks",
    outcomes: [
      "A clear system diagram and boundaries",
      "Prioritized technical roadmap",
      "Risk register + mitigation strategies",
    ],
    deliverables: [
      "Architecture doc + diagrams",
      "API/data model review",
      "Performance + reliability checklist",
      "Implementation milestones",
    ],
    idealFor: [
      "Startups scaling from MVP to v1",
      "Teams refactoring a legacy system",
      "Founders needing a technical plan",
    ],
    notFor: ["Only code, no strategy", "Teams unwilling to define constraints"],
    faq: [
      {
        q: "Is this advisory only, or do you implement too?",
        a: "Both. We can start with architecture, then move into an implementation sprint once the plan is solid.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
