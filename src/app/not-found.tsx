import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <main className="pt-28 pb-20">
      <div className="container-page">
        <div className="mx-auto grid max-w-3xl gap-6">
          <Card variant="gradient" glow className="p-7">
            <p className="text-sm font-semibold tracking-tight text-white">404</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white">Page not found</p>
            <p className="mt-3 max-w-2xl text-sm text-white/80 leading-7">
              The page you’re looking for doesn’t exist (or it moved). Use the links below to get
              back on track.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
              >
                Go home
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
              >
                View projects
              </Link>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/news", label: "News" },
              { href: "/blog", label: "Blog" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((x) => (
              <Link key={x.href} href={x.href} className="block">
                <Card variant="glass" className="p-6">
                  <p className="text-sm font-semibold tracking-tight">{x.label}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Open →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
