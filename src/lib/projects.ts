export type ProjectCategory = "AI" | "Automation" | "Web" | "Trading" | "Game Dev";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  year: string;
  role: string;
  duration: string;
  status: "Live" | "In Development" | "Prototype";
  tech: string[];
  metrics?: Array<{ label: string; value: string }>;
  highlights: Array<{ title: string; description: string }>;
  challenges: Array<{ problem: string; solution: string }>;
  links?: { github?: string; demo?: string };
  featured?: boolean;
}

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "AI",
  "Automation",
  "Web",
  "Trading",
  "Game Dev",
];

export const projects: Project[] = [
  {
    slug: "ai-rule-engine-design",
    title: "AI Rule Engine Design",
    tagline: "Modular decision systems with predictable automation.",
    category: "AI",
    description:
      "Designed a composable rule engine to power deterministic decision flows, triggers, and policy-based automation with strong observability.",
    year: "2026",
    role: "Systems Architect",
    duration: "3 weeks",
    status: "Prototype",
    tech: ["TypeScript", "Node.js", "Testing", "Architecture"],
    metrics: [
      { label: "Decision latency", value: "< 25ms" },
      { label: "Rules coverage", value: "92%" },
      { label: "Incident rate", value: "0" },
    ],
    highlights: [
      {
        title: "Policy-first architecture",
        description:
          "Rules expressed as policies with strict inputs/outputs to keep execution predictable and testable.",
      },
      {
        title: "Auditability",
        description:
          "Every decision logs a trace explaining which rules fired and why (debuggable by design).",
      },
      {
        title: "Extensibility",
        description:
          "Plug-in rule packs for new domains without changing the core evaluator.",
      },
    ],
    challenges: [
      {
        problem: "Rule conflicts and ordering edge cases.",
        solution:
          "Introduced explicit precedence + deterministic evaluation and a test harness for regression scenarios.",
      },
      {
        problem: "Hard-to-debug ‘why did this happen?’ outcomes.",
        solution:
          "Added a decision trace format and structured logging with stable event schemas.",
      },
    ],
    featured: true,
  },
  {
    slug: "algorithmic-trading-bot-logic",
    title: "Algorithmic Trading Bot Logic",
    tagline: "Risk-first strategy systems with measurable performance.",
    category: "Trading",
    description:
      "Built a strategy evaluation framework with risk constraints, position sizing, and backtesting hooks to avoid logic drift between research and execution.",
    year: "2026",
    role: "Automation Engineer",
    duration: "4 weeks",
    status: "In Development",
    tech: ["Python", "Backtesting", "Risk", "Data"],
    metrics: [
      { label: "Backtest runtime", value: "-42%" },
      { label: "Risk violations", value: "0" },
      { label: "Strategy iterations", value: "30+" },
    ],
    highlights: [
      {
        title: "Risk constraints as first-class",
        description:
          "Stops, limits, exposure caps, and volatility filters enforced before signal execution.",
      },
      {
        title: "Deterministic simulation",
        description:
          "Clean separation between data feed, strategy, and execution model to keep results reproducible.",
      },
    ],
    challenges: [
      {
        problem: "Overfitting and misleading metrics.",
        solution:
          "Implemented walk-forward evaluation and baseline comparisons with robust reporting.",
      },
    ],
  },
  {
    slug: "full-stack-dashboard-engineering",
    title: "Full-Stack Dashboard Engineering",
    tagline: "Real-time monitoring + analytics dashboards.",
    category: "Web",
    description:
      "Delivered dashboards with real-time metrics, alerting hooks, and a clean information hierarchy designed for decision-making.",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "2 weeks",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Tailwind", "APIs"],
    highlights: [
      {
        title: "Information design",
        description:
          "Prioritized signal over noise with tiered KPIs and progressive disclosure.",
      },
      {
        title: "Performance",
        description:
          "Virtualized lists and reduced render churn to keep interactions responsive.",
      },
    ],
    challenges: [
      {
        problem: "Data volume causing UI lag.",
        solution:
          "Added client-side caching and rendering optimization for heavy tables.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
