import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents, type TocItem } from "@/components/blog/TableOfContents";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/lib/blog";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "Blog Post";
  const description = post?.description ?? `Post slug: ${slug}`;

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tagSet = new Set(post?.tags ?? []);
      const overlap = p.tags.filter((t) => tagSet.has(t)).length;
      const score = (post?.category && p.category === post.category ? 3 : 0) + overlap;
      return { post: p, score };
    })
    .sort((a, b) => (a.score === b.score ? (a.post.date < b.post.date ? 1 : -1) : b.score - a.score))
    .slice(0, 3)
    .map((x) => x.post);

  const toc: TocItem[] = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "principles", title: "Core principles", level: 2 },
    { id: "architecture", title: "Architecture", level: 2 },
    { id: "implementation", title: "Implementation notes", level: 2 },
    { id: "checklist", title: "Checklist", level: 2 },
  ];

  return (
    <>
      <ReadingProgress targetId="post" />
    <PageShell
      title={title}
      subtitle={description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: title },
      ]}
    >
      <div id="post" className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
        <article className="min-w-0">
          <Card variant="glass" className="p-7">
            <div className="flex flex-wrap items-center gap-2">
              {post?.category ? (
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                  {post.category}
                </span>
              ) : null}
              {post?.date ? <span className="text-xs text-[var(--muted)]">{post.date}</span> : null}
              {post?.readingTime ? (
                <>
                  <span className="text-xs text-[var(--muted)]">·</span>
                  <span className="text-xs text-[var(--muted)]">{post.readingTime}</span>
                </>
              ) : null}
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 id="overview" className="mt-6 text-xl font-semibold tracking-tight">
                Overview
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-7">
                This is the premium post template. Next sprint we’ll swap the body to MDX with syntax
                highlighting, callouts, and rich embeds — without changing the layout.
              </p>

              <h2 id="principles" className="mt-8 text-xl font-semibold tracking-tight">
                Core principles
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-7">
                I write from a systems perspective: define constraints, isolate failure modes, design
                feedback loops, then optimize.
              </p>
              <ul className="mt-4 grid gap-2 text-[var(--muted)]">
                <li>
                  <span className="font-semibold text-[var(--foreground)]">Predictability</span>: make
                  behavior explainable.
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">Observability</span>: measure
                  the right signals.
                </li>
                <li>
                  <span className="font-semibold text-[var(--foreground)]">Iterative leverage</span>: ship
                  small, learn fast.
                </li>
              </ul>

              <h2 id="architecture" className="mt-8 text-xl font-semibold tracking-tight">
                Architecture
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-7">
                Structure the system as composable modules with strict inputs/outputs. Keep state
                transitions explicit and testable.
              </p>

              <Card variant="outline" className="mt-5 p-5">
                <p className="text-sm font-semibold tracking-tight">Example (pseudo)</p>
                <pre className="mt-3 overflow-auto rounded-2xl bg-black/40 p-4 text-xs text-white">
{`// evaluate(context) -> decision
// decision -> actions

const decision = engine.evaluate(context)
if (decision.ok) dispatch(decision.actions)
`}</pre>
              </Card>

              <h2 id="implementation" className="mt-8 text-xl font-semibold tracking-tight">
                Implementation notes
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-7">
                This template ships:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Card variant="outline" className="p-5">
                  <p className="text-sm font-semibold">Reading progress</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    A top gradient bar tracks scroll depth.
                  </p>
                </Card>
                <Card variant="outline" className="p-5">
                  <p className="text-sm font-semibold">Sticky TOC</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Active section highlights as you read.
                  </p>
                </Card>
              </div>

              <h2 id="checklist" className="mt-8 text-xl font-semibold tracking-tight">
                Checklist
              </h2>
              <ul className="mt-4 grid gap-2 text-[var(--muted)]">
                <li>Consistent headings and spacing</li>
                <li>Readable line-height and width</li>
                <li>Clear metadata (date, reading time, category)</li>
                <li>Navigation back to blog index</li>
              </ul>

              <div className="mt-8">
                <Link href="/blog" className="text-sm font-semibold hover:underline">
                  ← Back to Blog
                </Link>
              </div>

              <div className="mt-3">
                <a href="#post" className="text-sm font-semibold hover:underline">
                  Back to top ↑
                </a>
              </div>
            </div>
          </Card>

          {related.length ? (
            <div className="mt-6">
              <p className="text-sm font-semibold tracking-tight">Related Articles</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="block">
                    <Card variant="outline" className="h-full p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                          {r.category}
                        </span>
                        <span className="text-xs text-[var(--muted)]">{r.date}</span>
                        <span className="text-xs text-[var(--muted)]">·</span>
                        <span className="text-xs text-[var(--muted)]">{r.readingTime}</span>
                      </div>
                      <p className="mt-3 text-sm font-semibold tracking-tight">{r.title}</p>
                      <p className="mt-2 text-sm text-[var(--muted)] leading-7">{r.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </article>

        <div className="lg:pl-2">
          <TableOfContents items={toc} />
        </div>
      </div>
    </PageShell>
    </>
  );
}
