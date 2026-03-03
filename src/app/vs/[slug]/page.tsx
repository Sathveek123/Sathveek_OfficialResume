import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";

type VsPage = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  prosA: string[];
  prosB: string[];
  verdict: string;
  links?: Array<{ label: string; href: string }>;
};

const VS_PAGES: VsPage[] = [
  {
    slug: "langchain-vs-llamaindex",
    title: "LangChain vs LlamaIndex",
    description: "A practical comparison for production RAG and agent workflows.",
    summary:
      "Both can ship production systems. The decision depends on whether you want a broader agent framework (LangChain) or a retrieval-first toolkit with strong indexing patterns (LlamaIndex).",
    prosA: [
      "Broad ecosystem + integrations",
      "Agent/tooling primitives",
      "Good for orchestration-heavy flows",
    ],
    prosB: [
      "Retrieval/indexing focus",
      "Great for document pipelines",
      "Strong patterns for RAG evaluation",
    ],
    verdict:
      "If your core is retrieval + knowledge workflows, start with LlamaIndex. If orchestration and multi-step tool use is central, LangChain is often faster to iterate with.",
    links: [
      { label: "RAG agent development", href: "/rag-agent-development" },
      { label: "AI automation development", href: "/ai-automation-development" },
    ],
  },
  {
    slug: "pinecone-vs-weaviate",
    title: "Pinecone vs Weaviate",
    description: "Vector database trade-offs: operations, cost, and retrieval features.",
    summary:
      "Both are viable. The right choice depends on your hosting constraints, filtering needs, and operational preferences.",
    prosA: ["Managed ops simplicity", "Predictable scaling model", "Fast to start"],
    prosB: ["Self-hosting optional", "Flexible schema + modules", "Strong filtering patterns"],
    verdict:
      "Pick the database your team can operate confidently. Retrieval reliability matters more than minor benchmark differences.",
    links: [{ label: "RAG agent development", href: "/rag-agent-development" }],
  },
];

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = VS_PAGES.find((p) => p.slug === params.slug);
  if (!page) return { title: "Comparison" };
  return {
    title: page.title,
    description: page.description,
  };
}

export default function VsPage({ params }: { params: { slug: string } }) {
  const page = VS_PAGES.find((p) => p.slug === params.slug);
  if (!page) return notFound();

  const [a, b] = page.title.split(" vs ");

  return (
    <PageShell
      title={page.title}
      subtitle={page.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Comparisons", href: "/vs/langchain-vs-llamaindex" },
        { label: page.title },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-8">
          <p className="text-sm font-semibold tracking-tight">Summary</p>
          <p className="mt-3 text-sm text-[var(--muted)] leading-7">{page.summary}</p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">{a || "Option A"}</p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {page.prosA.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                    ✓
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outline" className="p-8">
            <p className="text-sm font-semibold tracking-tight">{b || "Option B"}</p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {page.prosB.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                    ✓
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card variant="gradient" glow className="p-8">
          <p className="text-sm font-semibold tracking-tight text-white">Verdict</p>
          <p className="mt-3 text-sm text-white/80 leading-7">{page.verdict}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book strategy call
            </Link>
            <Link
              href="/work-with-me"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Work with me
            </Link>
          </div>
        </Card>

        {page.links?.length ? (
          <Card variant="glass" className="p-8">
            <p className="text-sm font-semibold tracking-tight">Related</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.links.map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex text-sm font-semibold text-[var(--accent)]">
                  {l.label} →
                </Link>
              ))}
            </div>
          </Card>
        ) : null}
      </div>
    </PageShell>
  );
}
