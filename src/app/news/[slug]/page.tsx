import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { newsEntries, newsTypeMeta } from "@/lib/news";

export default async function NewsEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = newsEntries.find((e) => e.slug === slug);
  if (!entry) return notFound();

  const meta = newsTypeMeta[entry.type];
  const paragraphs = entry.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const related = newsEntries
    .filter((e) => e.slug !== entry.slug)
    .map((e) => {
      const sharedTags = new Set(entry.tags);
      const overlap = e.tags.filter((t) => sharedTags.has(t)).length;
      const score = (e.type === entry.type ? 2 : 0) + overlap;
      return { entry: e, score };
    })
    .sort((a, b) => (a.score === b.score ? (a.entry.date < b.entry.date ? 1 : -1) : b.score - a.score))
    .slice(0, 3)
    .map((x) => x.entry);

  return (
    <PageShell
      title={entry.title}
      subtitle={entry.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "News", href: "/news" },
        { label: entry.title, href: `/news/${entry.slug}` },
      ]}
    >
      <Section className="pt-8" container>
        <div className="mx-auto grid max-w-4xl gap-6">
          <Card variant="glass" className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-semibold">
                <span aria-hidden="true">{meta.icon}</span>
                <span>{meta.label}</span>
              </span>
              <span className="text-xs text-[var(--muted)]">{entry.date}</span>
              {entry.featured ? (
                <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                  Featured
                </span>
              ) : null}
            </div>

            <div className="mt-4 grid gap-4">
              <div className="grid gap-3">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm leading-7 text-[var(--muted)]">
                    {p}
                  </p>
                ))}
              </div>

              {entry.metrics ? (
                <div className="grid gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-sm">
                  {entry.metrics.before ? (
                    <p>
                      <span className="font-semibold">Before:</span> {entry.metrics.before}
                    </p>
                  ) : null}
                  {entry.metrics.after ? (
                    <p>
                      <span className="font-semibold">After:</span> {entry.metrics.after}
                    </p>
                  ) : null}
                  {entry.metrics.improvement ? (
                    <p>
                      <span className="font-semibold">Impact:</span> {entry.metrics.improvement}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {entry.tech?.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Tech</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {entry.tags.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Tags</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {entry.links ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Links</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {entry.links.article ? (
                      <Link href={entry.links.article} className="inline-flex text-sm font-semibold text-[var(--accent)]">
                        Related page →
                      </Link>
                    ) : null}
                    {entry.links.github ? (
                      <Link href={entry.links.github} target="_blank" rel="noreferrer" className="inline-flex text-sm font-semibold hover:underline">
                        GitHub
                      </Link>
                    ) : null}
                    {entry.links.demo ? (
                      <Link href={entry.links.demo} target="_blank" rel="noreferrer" className="inline-flex text-sm font-semibold hover:underline">
                        Demo
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="pt-2">
                <Link href="/news" className="text-sm font-semibold hover:underline">
                  ← Back to News
                </Link>
              </div>
            </div>
          </Card>

          {related.length ? (
            <div>
              <p className="text-sm font-semibold tracking-tight">Related Updates</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {related.map((r) => {
                  const rMeta = newsTypeMeta[r.type];
                  return (
                    <Card key={r.slug} variant="outline" className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm" aria-hidden="true">
                          {rMeta.icon}
                        </span>
                        <p className="text-xs font-semibold text-[var(--muted)]">{rMeta.label}</p>
                        <span className="text-xs text-[var(--muted)]">·</span>
                        <p className="text-xs text-[var(--muted)]">{r.date}</p>
                      </div>
                      <Link
                        href={`/news/${r.slug}`}
                        className="mt-3 block text-sm font-semibold tracking-tight hover:underline"
                      >
                        {r.title}
                      </Link>
                      <p className="mt-2 text-sm text-[var(--muted)]">{r.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </Section>
    </PageShell>
  );
}
