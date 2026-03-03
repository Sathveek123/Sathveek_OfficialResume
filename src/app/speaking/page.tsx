import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { speaking } from "@/lib/authority";

export const metadata = {
  title: "Speaking",
};

export default function SpeakingPage() {
  return (
    <PageShell
      title="Speaking"
      subtitle="Talks, interviews, and topics I can present on. Invite me to speak."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Speaking" },
      ]}
    >
      <div className="grid gap-6">
        <Card variant="gradient" glow className="p-7">
          <p className="text-sm font-semibold tracking-tight text-white">Invite me to speak</p>
          <p className="mt-2 max-w-2xl text-sm text-white/80 leading-7">
            I speak about AI system architecture, automation, reliability, and risk-first engineering.
            If you’re organizing a meetup, podcast, or conference track — reach out.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white"
            >
              Email
            </Link>
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          {speaking.map((s) => (
            <Card key={s.title} variant="glass" className="p-7">
              <p className="text-lg font-semibold tracking-tight">{s.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)] leading-7">{s.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {s.link ? (
                <Link href={s.link} className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)]">
                  Watch →
                </Link>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
