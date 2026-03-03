import Link from "next/link";
import Image from "next/image";
import { StatsTicker } from "@/components/StatsTicker";
import { MagneticWrapper } from "@/components/MagneticWrapper";

export function EnhancedHero() {
  return (
    <section className="relative min-h-[calc(100vh-140px)] overflow-hidden pb-16 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_60%)] blur-3xl opacity-70 animate-float" />
        <div className="absolute right-[-260px] top-[200px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--glow-2),transparent_62%)] blur-3xl opacity-70 animate-float-delayed" />
        <div className="absolute bottom-[-320px] left-[16%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_64%)] blur-3xl opacity-55 animate-float-slow" />

        <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-3xl border border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-xl rotate-12 animate-float" />
        <div className="absolute right-[10%] top-[34%] h-20 w-20 rounded-full border border-[var(--border)] bg-[var(--card)]/35 backdrop-blur-xl -rotate-12 animate-float-delayed" />
        <div className="absolute left-[14%] bottom-[14%] h-24 w-24 rounded-2xl border border-[var(--border)] bg-[var(--card)]/35 backdrop-blur-xl rotate-6 animate-float-slow" />
      </div>

      <div className="container-page relative">
        <div className="relative">
          <div className="text-center md:text-left md:pr-[400px]">
            <p className="text-sm font-medium text-[var(--muted)]">
              Hey, I’m <span className="text-[var(--foreground)]">Sathveek Nalla</span>
            </p>
            <p className="mt-2 text-sm font-semibold tracking-tight text-[var(--foreground)]">
              AI Systems Developer & Automation Architect
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/70 px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-[var(--shadow-sm)] backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Accepting AI & Automation Projects — Q2 2026
            </div>

            <h1 className="mt-6 text-balance text-[clamp(2.25rem,6.8vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
              Engineering <span className="text-gradient">Scalable</span>
              <br />
              AI & <span className="text-gradient">Automation</span> Systems
            </h1>

            <p className="mt-5 max-w-2xl text-[clamp(0.98rem,1.9vw,1.0625rem)] leading-8 text-[var(--muted)] mx-auto md:mx-0">
              I design architecture-first, performance-driven systems — from trading logic engines and RAG-powered
              AI agents to full-stack automation platforms built for real-world deployment.
            </p>

            <div className="mt-8">
              <StatsTicker />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <MagneticWrapper>
                <Link
                  href="/book"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-primary px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(109,40,217,0.24)] transition-transform duration-200 hover:translate-y-[-1px]"
                >
                  Book Strategy Call
                </Link>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-sm)] transition-transform duration-200 hover:translate-y-[-1px]"
                >
                  View Case Studies
                </a>
              </MagneticWrapper>
            </div>

            <div className="mt-8 text-xs font-semibold tracking-tight text-[var(--muted)]">
              10K+ Client Deliveries • Production-Ready Systems • AI Agents & RAG Frameworks • Automation at Scale
            </div>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-[380px] md:absolute md:right-0 md:top-0 md:mt-0 md:max-w-[340px]">
            <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(55%_55%_at_30%_20%,var(--glow-1),transparent_60%),radial-gradient(55%_55%_at_70%_70%,var(--glow-2),transparent_60%)] blur-xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-md)]">
              <div className="relative mx-auto aspect-square w-full max-w-[300px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_62%)]" />
                <div className="absolute inset-3 rounded-full border border-[var(--ring)]" />
                <Image
                  src="/images/portrait.png"
                  alt="Portrait"
                  fill
                  priority
                  className="rounded-full object-cover"
                  sizes="(max-width: 1024px) 320px, 360px"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] p-4">
                  <p className="text-xs font-medium text-[var(--muted)]">Systems</p>
                  <p className="mt-1 text-sm font-semibold tracking-tight">Architecture-first</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] p-4">
                  <p className="text-xs font-medium text-[var(--muted)]">Delivery</p>
                  <p className="mt-1 text-sm font-semibold tracking-tight">Performance-ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
