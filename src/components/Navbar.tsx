"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Book", href: "/book" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Now", href: "/now" },
  { label: "Uses", href: "/uses" },
  { label: "Changelog", href: "/changelog" },
  { label: "Stats", href: "/stats" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const mobileNavLabelId = useId();
  const moreMenuId = useId();
  const moreWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!moreOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const el = moreWrapRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setMoreOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [moreOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const primaryNav: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Journey", href: "/journey" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  const overflowNav = navItems.filter((i) => !primaryNav.some((p) => p.href === i.href));
  const overflowActive = overflowNav.some((i) => isActive(i.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page">
        <div className="mt-4 rounded-2xl px-4 py-3 glass shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-[var(--foreground)]"
              aria-label="Go to home"
            >
              Sathveek
            </Link>

            <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    "group text-sm transition-colors hover:text-[var(--foreground)] " +
                    (isActive(item.href) ? "text-[var(--foreground)]" : "text-[var(--muted)]")
                  }
                  onClick={() => setMoreOpen(false)}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={
                        "absolute -bottom-1 left-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full " +
                        (isActive(item.href) ? "w-full" : "w-0")
                      }
                    />
                  </span>
                </Link>
              ))}

              <div className="relative" ref={moreWrapRef}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                  aria-controls={moreMenuId}
                  onClick={() => setMoreOpen((v) => !v)}
                  className={
                    "group inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--foreground)] " +
                    (overflowActive || moreOpen ? "text-[var(--foreground)]" : "text-[var(--muted)]")
                  }
                >
                  <span className="relative">
                    More
                    <span
                      className={
                        "absolute -bottom-1 left-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full " +
                        (overflowActive || moreOpen ? "w-full" : "w-0")
                      }
                    />
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className={"transition-transform duration-200 " + (moreOpen ? "rotate-180" : "")}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {moreOpen ? (
                  <div
                    id={moreMenuId}
                    role="menu"
                    className="absolute left-0 top-[calc(100%+12px)] w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow-lg)]"
                  >
                    <div className="grid p-2">
                      {overflowNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          aria-current={isActive(item.href) ? "page" : undefined}
                          onClick={() => setMoreOpen(false)}
                          className={
                            "rounded-xl px-3 py-2 text-sm font-medium transition-colors " +
                            (isActive(item.href)
                              ? "bg-[var(--card)] text-[var(--foreground)]"
                              : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]")
                          }
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px] md:hidden"
                aria-label="Open menu"
                aria-controls="mobile-nav"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <a
                href="/resume.pdf"
                download="Sathveek_Nalla_Resume.pdf"
                className="hidden h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px] md:inline-flex"
              >
                Download Resume
              </a>
              <a
                href="/work-with-me"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[var(--accent)] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-labelledby={mobileNavLabelId}>
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-nav"
            className="absolute right-0 top-0 h-full w-[min(420px,88vw)] border-l border-[var(--border)] bg-[var(--background)] p-5 shadow-[var(--shadow-lg)]"
          >
            <div className="flex items-center justify-between">
              <p id={mobileNavLabelId} className="text-sm font-semibold tracking-tight">
                Menu
              </p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-[var(--shadow-sm)]"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 grid gap-1" aria-label="Mobile primary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={
                    "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors " +
                    (isActive(item.href)
                      ? "bg-[var(--card)] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]")
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[var(--muted)]">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <a
                href="/resume.pdf"
                download="Sathveek_Nalla_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)]"
              >
                Download Resume
              </a>
              <a
                href="/work-with-me"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)]"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
