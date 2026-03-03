import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

export function PageShell({
  title,
  subtitle,
  crumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <main className="pt-28">
        <section className="relative overflow-hidden pb-14 pt-12">
          <div className="absolute inset-0">
            <div className="pointer-events-none absolute left-[-20%] top-[-35%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_55%)] blur-2xl" />
            <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_55%)] blur-2xl" />
          </div>

          <div className="container-page relative">
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-[var(--muted)] leading-7">{subtitle}</p>
            ) : null}
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
