import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/services";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (service) {
    return {
      title: service.title,
      description: service.description,
    };
  }

  return {
    title: `Service — ${params.slug}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <PageShell
      title={service.title}
      subtitle={service.tagline}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="glass" className="p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
              {service.timeline}
            </span>
            <span className="text-xs text-[var(--muted)]">·</span>
            <span className="text-xs text-[var(--muted)]">{service.typicalRange}</span>
          </div>
          <p className="mt-4 text-sm text-[var(--muted)] leading-7">{service.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)]"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)]"
            >
              View all services
            </Link>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Outcomes</p>
            <div className="mt-4 grid gap-3">
              {service.outcomes.map((o) => (
                <div
                  key={o}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {o}
                </div>
              ))}
            </div>
          </Card>

          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Deliverables</p>
            <div className="mt-4 grid gap-3">
              {service.deliverables.map((d) => (
                <div
                  key={d}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {d}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Ideal for</p>
            <div className="mt-4 grid gap-3">
              {service.idealFor.map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {x}
                </div>
              ))}
            </div>
          </Card>

          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Not a fit</p>
            <div className="mt-4 grid gap-3">
              {service.notFor.map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {x}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card variant="outline" className="p-7">
          <p className="text-sm font-semibold tracking-tight">FAQ</p>
          <div className="mt-4 grid gap-3">
            {service.faq.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
              >
                <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-[var(--muted)] leading-7">{f.a}</p>
              </details>
            ))}
          </div>
        </Card>

        <Card variant="gradient" glow className="p-7">
          <p className="text-sm font-semibold tracking-tight text-white">Ready to scope it?</p>
          <p className="mt-2 max-w-2xl text-sm text-white/80 leading-7">
            Tell me what you’re building, your constraints, and your success metrics. I’ll propose the cleanest path.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Explore services
            </Link>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
