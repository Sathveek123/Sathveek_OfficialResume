export type BlogCategory = "AI" | "Automation" | "Web" | "Trading" | "Game Dev";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-ai-rule-engines-architecture-patterns",
    title: "Designing AI Rule Engines: Architecture Patterns",
    description: "A systems-first approach to predictable AI decision flows.",
    date: "2026-02-14",
    category: "AI",
    tags: ["systems", "architecture", "rule-engines"],
    readingTime: "8 min",
    featured: true,
  },
  {
    slug: "building-trading-bot-logic-risk-first",
    title: "Building Trading Bot Logic: Risk-First Approach",
    description: "How to structure strategy logic around risk constraints.",
    date: "2026-02-09",
    category: "Trading",
    tags: ["risk", "backtesting", "architecture"],
    readingTime: "10 min",
  },
  {
    slug: "rag-systems-retrieval-beyond-basics",
    title: "RAG Systems Beyond the Basics: Retrieval That Actually Works",
    description: "Chunking, hybrid search, reranking, and evaluation loops.",
    date: "2026-02-05",
    category: "AI",
    tags: ["rag", "evaluation", "retrieval"],
    readingTime: "12 min",
  },
];

export const blogCategories: Array<"All" | BlogCategory> = [
  "All",
  "AI",
  "Automation",
  "Web",
  "Trading",
  "Game Dev",
];
