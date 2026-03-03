export type ChangelogType = "feature" | "fix" | "design" | "perf";

export interface ChangelogEntry {
  version?: string;
  date: string;
  type: ChangelogType;
  title: string;
  description: string;
}

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-02-16",
    type: "feature",
    title: "News + Blog + Projects + Services upgrades",
    description:
      "Added building-in-public news system, premium blog UX, structured project case studies, and redesigned services pages.",
  },
  {
    date: "2026-02-15",
    type: "design",
    title: "Credibility + impact metrics",
    description: "Added Impact section with animated count-up and refined section polish.",
  },
];

export interface ResourceItem {
  title: string;
  description: string;
  type: "template" | "checklist" | "snippet" | "guide";
  link?: string;
}

export const resources: ResourceItem[] = [
  {
    title: "System Architecture One-Pager",
    description: "A template for crisp system boundaries, risks, and interfaces.",
    type: "template",
  },
  {
    title: "Trading Strategy Evaluation Checklist",
    description: "A risk-first checklist before you trust a backtest.",
    type: "checklist",
  },
  {
    title: "API Reliability Quick Guide",
    description: "Practical steps for retries, idempotency, and observability.",
    type: "guide",
  },
  {
    title: "Reusable UI Card Patterns",
    description: "A set of card layouts for product + portfolio UIs.",
    type: "snippet",
  },
];

export interface SpeakingItem {
  title: string;
  description: string;
  topics: string[];
  link?: string;
}

export const speaking: SpeakingItem[] = [
  {
    title: "AI System Architecture: Guardrails and Reliability",
    description:
      "How to build intelligent systems that are measurable, debuggable, and safe in production.",
    topics: ["AI", "Architecture", "Reliability"],
  },
  {
    title: "Risk-First Automation: Trading Logic as a System",
    description:
      "A practical framework for turning ideas into deterministic strategies with evaluation loops.",
    topics: ["Trading", "Risk", "Automation"],
  },
];
