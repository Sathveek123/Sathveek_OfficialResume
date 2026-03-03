import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/projects";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (project) {
    return {
      title: project.title,
      description: project.description,
    };
  }

  return {
    title: `Project — ${params.slug}`,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => {
      const tagSet = new Set(project.tech);
      const overlap = p.tech.filter((t) => tagSet.has(t)).length;
      const score = (p.category === project.category ? 3 : 0) + overlap;
      return { project: p, score };
    })
    .sort((a, b) => (a.score === b.score ? (a.project.year < b.project.year ? 1 : -1) : b.score - a.score))
    .slice(0, 3)
    .map((x) => x.project);

  return (
    <PageShell
      title={project.title}
      subtitle={project.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: project.title },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
              {project.category}
            </span>
            <span className="text-xs text-[var(--muted)]">{project.year}</span>
            <span className="text-xs text-[var(--muted)]">·</span>
            <span className="text-xs text-[var(--muted)]">{project.status}</span>
          </div>
          <p className="mt-4 text-lg font-semibold tracking-tight">{project.tagline}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Card variant="outline" className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Role</p>
              <p className="mt-2 text-sm font-semibold">{project.role}</p>
            </Card>
            <Card variant="outline" className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Duration</p>
              <p className="mt-2 text-sm font-semibold">{project.duration}</p>
            </Card>
            <Card variant="outline" className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Year</p>
              <p className="mt-2 text-sm font-semibold">{project.year}</p>
            </Card>
            <Card variant="outline" className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Status</p>
              <p className="mt-2 text-sm font-semibold">{project.status}</p>
            </Card>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Overview</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-7">{project.description}</p>

            <p className="mt-6 text-sm font-semibold tracking-tight">Key highlights</p>
            <div className="mt-3 grid gap-3">
              {project.highlights.map((h) => (
                <Card key={h.title} variant="outline" className="p-5">
                  <p className="text-sm font-semibold tracking-tight">{h.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">{h.description}</p>
                </Card>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            <Card variant="glass" className="p-7">
              <p className="text-sm font-semibold tracking-tight">Tech stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            {project.metrics?.length ? (
              <Card variant="glass" className="p-7">
                <p className="text-sm font-semibold tracking-tight">Results & metrics</p>
                <div className="mt-4 grid gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3"
                    >
                      <p className="text-sm text-[var(--muted)]">{m.label}</p>
                      <p className="text-sm font-semibold">{m.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ) : null}
          </div>
        </div>

        <Card variant="glass" className="p-7">
          <p className="text-sm font-semibold tracking-tight">Challenges & solutions</p>
          <div className="mt-4 grid gap-3">
            {project.challenges.map((c, idx) => (
              <Card key={`${c.problem}-${idx}`} variant="outline" className="p-5">
                <p className="text-sm font-semibold">The problem</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{c.problem}</p>
                <p className="mt-4 text-sm font-semibold">The solution</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{c.solution}</p>
              </Card>
            ))}
          </div>
        </Card>

        <Card variant="outline" className="p-7">
          <p className="text-sm font-semibold tracking-tight">Next steps</p>
          <p className="mt-2 text-sm text-[var(--muted)] leading-7">
            Add architecture diagram, image gallery, and before/after comparisons. Then wire in live demo and GitHub links.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex text-sm font-semibold text-[var(--accent)]">
              Let’s build something similar →
            </Link>
            <Link href="/projects" className="inline-flex text-sm font-semibold hover:underline">
              Back to projects
            </Link>
          </div>
        </Card>

        {related.length ? (
          <div>
            <p className="text-sm font-semibold tracking-tight">Related projects</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/projects/${r.slug}`} className="block">
                  <Card variant="outline" className="h-full p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                        {r.category}
                      </span>
                      <span className="text-xs text-[var(--muted)]">{r.year}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold tracking-tight">{r.title}</p>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-7">{r.tagline}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </PageShell>
  );
}
