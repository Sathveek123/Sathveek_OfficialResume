import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[var(--muted)]">
        {items.map((c, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={`${c.label}-${idx}`} className="flex items-center gap-2">
              {idx > 0 ? <span aria-hidden>›</span> : null}
              {c.href && !isLast ? (
                <Link className="hover:text-[var(--foreground)]" href={c.href}>
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[var(--foreground)]" : ""}>{c.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
