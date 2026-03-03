import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { MagneticWrapper } from "@/components/MagneticWrapper";

export type BentoProject = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  metric?: string;
  featured?: boolean;
  image?: string;
  bento?: "featured" | "wide" | "normal";
};

export function BentoGrid({ projects }: { projects: BentoProject[] }) {
  return (
    <div className="bento-grid">
      {projects.map((p) => (
        <MagneticWrapper key={p.slug} strength={p.featured ? 0.18 : 0.22}>
          <Link href={`/projects/${p.slug}`} className={bentoItemClass(p)}>
            <Card
              variant={p.featured ? "gradient" : "glass"}
              className="relative h-full overflow-hidden p-0"
              interactive
              glow={p.featured}
            >
              <div className="relative h-full">
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                  <Image
                    src={p.image ?? "/images/stats.jpeg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                      {p.category}
                    </span>
                    {p.metric ? (
                      <span className="rounded-full border border-[var(--border)] bg-[var(--card)]/60 px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                        {p.metric}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    {p.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-7 text-[var(--muted)]">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--card-muted)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm font-semibold text-[var(--accent)]">View case study →</p>
                </div>
              </div>
            </Card>
          </Link>
        </MagneticWrapper>
      ))}
    </div>
  );
}

function bentoItemClass(p: BentoProject) {
  const base =
    "block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-3xl";

  if (p.bento === "featured") return base + " bento-item-featured";
  if (p.bento === "wide") return base + " bento-item-wide";
  return base;
}
