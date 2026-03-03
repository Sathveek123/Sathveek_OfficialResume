export type NewsType =
  | "launch"
  | "update"
  | "experiment"
  | "achievement"
  | "learning"
  | "bts";

export interface NewsEntry {
  slug: string;
  title: string;
  type: NewsType;
  date: string;
  description: string;
  content: string;
  tags: string[];
  featured: boolean;
  images?: string[];
  metrics?: {
    before?: string;
    after?: string;
    improvement?: string;
  };
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
  tech?: string[];
}

export const newsEntries: NewsEntry[] = [
  {
    slug: "launch-resources-lead-magnets-system",
    title: "Launched: Resources + Lead Magnet System",
    type: "launch",
    date: "2026-02-16",
    description:
      "Shipped a gated resources pipeline (landing pages + capture API) to turn the site into an authority + list-building engine.",
    content:
      "Today I launched the Resources hub and a lightweight lead capture system. The goal is to make the platform compound: each guide becomes a conversion asset, each download becomes a relationship, and each update becomes proof-of-execution.\n\nImplementation details: I kept the first version intentionally simple and reliable: a reusable lead magnet form, a minimal API route, and four resource landing pages with thank-you flows. Next iteration will wire the pipeline into an email provider and add delivery automation.",
    tags: ["resources", "conversion", "authority"],
    featured: false,
    metrics: {
      before: "No downloadable resources",
      after: "4 gated resources + capture endpoint",
      improvement: "New conversion path added to the platform",
    },
    tech: ["Next.js", "TypeScript", "App Router", "Forms"],
    links: {
      article: "/resources",
    },
  },
  {
    slug: "portfolio-system-architecture-overhaul",
    title: "Portfolio System Architecture Overhaul",
    type: "update",
    date: "2026-02-15",
    description:
      "Rebuilt the portfolio architecture foundation: routing, shared layout, theme system, and polish layer.",
    content:
      "Rebuilt the portfolio foundation with a focus on maintainability and performance. This included a clean App Router structure, consistent layout primitives, and motion scaffolding for premium transitions. Next steps: unify UI primitives and ship a proper news/blog engine.",
    tags: ["portfolio", "architecture", "performance"],
    featured: true,
    metrics: {
      before: "Lighthouse 68",
      after: "Lighthouse 98",
      improvement: "Load time 4.2s → 1.1s",
    },
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    slug: "ai-agent-prototype-document-intelligence",
    title: "AI Agent Prototype: Document Intelligence",
    type: "experiment",
    date: "2026-02-12",
    description:
      "Exploring RAG pipelines for extracting structured data from PDFs with improved retrieval heuristics.",
    content:
      "Built an experimental RAG pipeline to extract structured fields from PDFs. Current focus is improving chunking and retrieval quality (not just embeddings). Next: evaluate hybrid search + reranking and add test harnesses for repeatable evaluation.",
    tags: ["rag", "agents", "evaluation"],
    featured: false,
    tech: ["RAG", "Embeddings", "Vector Search"],
    links: {
      article: "/rag-agent-development",
    },
  },
  {
    slug: "1000-hours-of-focused-building",
    title: "1000 Hours of Focused Building",
    type: "achievement",
    date: "2026-02-10",
    description:
      "Crossed 1000 hours of deep work building AI systems and automation projects over the last 6 months.",
    content:
      "Hit 1000 hours of focused building. The biggest compounding factor wasn't raw intensity — it was a consistent feedback loop: ship → measure → refine. I’m documenting the patterns behind momentum, architecture decisions, and how I keep scope clean.",
    tags: ["building-in-public", "discipline", "systems"],
    featured: false,
  },
  {
    slug: "learning-retrieval-is-the-bottleneck",
    title: "Learning: Retrieval Is the Bottleneck (Not the Model)",
    type: "learning",
    date: "2026-02-14",
    description:
      "A repeating lesson in production RAG: if retrieval is weak, generation quality collapses — regardless of the model.",
    content:
      "I keep seeing the same pattern: teams optimize prompts and models while retrieval silently fails. If the system fetches low-signal context, even the best model will produce confident nonsense.\n\nThe fix is not magical: better chunking strategies, metadata discipline, hybrid search when needed, reranking for precision, and a tiny evaluation set that represents real questions. If an answer matters, it must be grounded — and testable.",
    tags: ["rag", "retrieval", "evaluation"],
    featured: false,
    tech: ["RAG", "Indexing", "Evaluation"],
    links: {
      article: "/guides/how-to-implement-rag-system",
    },
  },
  {
    slug: "bts-how-i-ship-without-chaos",
    title: "Behind the Scenes: How I Ship Without Chaos",
    type: "bts",
    date: "2026-02-13",
    description:
      "A practical workflow for fast shipping that still feels calm: small batches, clear interfaces, and measurable checkpoints.",
    content:
      "Speed is not a mood — it’s a system. The way I keep output high without burning out is by enforcing constraints: small batches, stable interfaces, and a strict definition of done.\n\nMy default loop is: define the boundary → ship the smallest slice → measure → iterate. If something can’t be measured, it usually needs better observability. If something can’t be tested, it usually needs cleaner design.",
    tags: ["process", "systems-thinking", "execution"],
    featured: false,
    tech: ["Architecture", "Testing", "Observability"],
    links: {
      article: "/philosophy",
    },
  },
  {
    slug: "launch-programmatic-seo-hubs",
    title: "Launched: Programmatic SEO (Comparisons + Guides)",
    type: "launch",
    date: "2026-02-16",
    description:
      "Shipped /vs/* and /guides/* templates to scale high-intent content without losing quality.",
    content:
      "I shipped two scalable content primitives: comparison pages (\"X vs Y\") and implementation guides (\"how to\"). The intention is search dominance without content spam: each page is structured, opinionated, and tied to real systems patterns.\n\nNext: expand the library with more comparisons and add code examples where it improves clarity.",
    tags: ["seo", "content", "systems"],
    featured: false,
    tech: ["Next.js", "Metadata", "Internal Linking"],
    links: {
      article: "/vs/langchain-vs-llamaindex",
    },
  },
  {
    slug: "update-projects-portfolio-analysis-table",
    title: "Update: Projects Portfolio Analysis Table",
    type: "update",
    date: "2026-02-16",
    description:
      "Added a sortable/filterable systems table with CSV export for serious decision-makers.",
    content:
      "I added a structured portfolio analysis table to the Projects page. Instead of browsing cards, you can now scan systems by domain, stack, and complexity — and export a CSV for review.\n\nThis is a subtle but important positioning shift: projects aren’t just visuals; they’re systems with constraints, trade-offs, and measurable outcomes.",
    tags: ["projects", "analysis", "positioning"],
    featured: false,
    tech: ["React", "Filtering", "CSV Export"],
    links: {
      article: "/projects",
    },
  },
];

export const newsTypeMeta: Record<NewsType, { label: string; icon: string }> = {
  launch: { label: "Launch", icon: "🚀" },
  update: { label: "Update", icon: "🔄" },
  experiment: { label: "Experiment", icon: "🧪" },
  achievement: { label: "Achievement", icon: "🏆" },
  learning: { label: "Learning", icon: "📚" },
  bts: { label: "Behind the Scenes", icon: "🎬" },
};
