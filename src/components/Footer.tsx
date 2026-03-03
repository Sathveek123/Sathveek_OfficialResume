import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-tight">Sathveek</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Sathveek Nalla. All rights reserved.
            </p>
            <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-sm)]">
              <p className="text-xs font-semibold tracking-tight text-[var(--muted)]">Built With</p>
              <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                Next.js • React • TypeScript • Tailwind • Framer Motion • Structured SEO • AI Integrations
              </p>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Quick Links</p>
            <div className="mt-3 grid gap-2 text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--foreground)]">
                Home
              </Link>
              <Link href="/journey" className="hover:text-[var(--foreground)]">
                Journey
              </Link>
              <Link href="/projects" className="hover:text-[var(--foreground)]">
                Projects
              </Link>
              <Link href="/services" className="hover:text-[var(--foreground)]">
                Services
              </Link>
              <Link href="/about" className="hover:text-[var(--foreground)]">
                About
              </Link>
              <Link href="/contact" className="hover:text-[var(--foreground)]">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Social</p>
            <div className="mt-3 grid gap-2 text-[var(--muted)]">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)]">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)]">
                GitHub
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)]">
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
