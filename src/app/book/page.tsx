"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

type MeetingType = "15" | "30" | "60";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  what: string;
  challenge: string;
  stack: string;
  meetingType: MeetingType;
};

const defaultState: FormState = {
  name: "",
  email: "",
  company: "",
  what: "",
  challenge: "",
  stack: "",
  meetingType: "30",
};

export default function BookPage() {
  const [state, setState] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = useMemo(() => {
    return (
      status === "submitting" ||
      !state.name.trim() ||
      !state.email.trim() ||
      !state.email.includes("@") ||
      !state.what.trim() ||
      !state.challenge.trim()
    );
  }, [state, status]);

  return (
    <main className="pt-28 pb-20">
      <div className="container-page">
        <div className="mx-auto grid max-w-5xl gap-10">
          <Card variant="gradient" glow className="p-8">
            <p className="text-sm font-semibold tracking-tight text-[var(--foreground)] dark:text-white">
              Book your free strategy call
            </p>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] dark:text-white/80 leading-7">
              30 minutes to discuss your system architecture, identify bottlenecks, and map a clear path
              forward. No sales pitch — pure technical depth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/work-with-me"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black"
              >
                See engagement models
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold text-[var(--foreground)] dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                View case studies
              </Link>
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <Card variant="glass" className="p-8">
              <p className="text-sm font-semibold tracking-tight">Help me prepare</p>
              <p className="mt-3 text-sm text-[var(--muted)] leading-7">
                This form qualifies the call and ensures we use the time well.
              </p>

              <form
                className="mt-6 grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (disabled) return;

                  setStatus("submitting");
                  setMessage("");

                  try {
                    const res = await fetch("/api/book", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(state),
                    });

                    if (!res.ok) {
                      const body = (await res.json().catch(() => null)) as
                        | { error?: string }
                        | null;
                      throw new Error(body?.error || "Failed to submit.");
                    }

                    setStatus("success");
                    setMessage("Saved. Next: choose a time in the calendar embed.");
                  } catch (err) {
                    setStatus("error");
                    setMessage(err instanceof Error ? err.message : "Something went wrong.");
                  }
                }}
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    value={state.name}
                    onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                    className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={state.email}
                    onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                    className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="company">
                    Company / Project (optional)
                  </label>
                  <input
                    id="company"
                    value={state.company}
                    onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                    className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="What are you building?"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="what">
                    What are you building?
                  </label>
                  <textarea
                    id="what"
                    value={state.what}
                    onChange={(e) => setState((s) => ({ ...s, what: e.target.value }))}
                    className="min-h-24 resize-y rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="Brief context + goals"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="challenge">
                    Biggest technical challenge right now
                  </label>
                  <textarea
                    id="challenge"
                    value={state.challenge}
                    onChange={(e) => setState((s) => ({ ...s, challenge: e.target.value }))}
                    className="min-h-24 resize-y rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="What’s blocking progress or causing risk?"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="stack">
                    Current stack (optional)
                  </label>
                  <input
                    id="stack"
                    value={state.stack}
                    onChange={(e) => setState((s) => ({ ...s, stack: e.target.value }))}
                    className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="Next.js, Python, Postgres…"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="meetingType">
                    Meeting type
                  </label>
                  <select
                    id="meetingType"
                    value={state.meetingType}
                    onChange={(e) => setState((s) => ({ ...s, meetingType: e.target.value as MeetingType }))}
                    className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
                  >
                    <option value="15">15 min — Quick Question</option>
                    <option value="30">30 min — Strategy Discussion</option>
                    <option value="60">60 min — Deep Dive Review</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,0.25)] transition-transform duration-200 hover:translate-y-[-1px] disabled:opacity-60"
                >
                  {status === "submitting" ? "Saving…" : "Continue"}
                </button>

                {message ? (
                  <p className={"text-sm " + (status === "success" ? "text-emerald-600" : "text-red-600")} role="status">
                    {message}
                  </p>
                ) : null}
              </form>
            </Card>

            <div className="grid gap-6">
              <Card variant="outline" className="p-8">
                <p className="text-sm font-semibold tracking-tight">What we’ll cover</p>
                <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
                  {[
                    "Your architecture challenges",
                    "Bottlenecks and risk points",
                    "Scalability roadmap",
                    "Stack evaluation",
                    "Implementation approach",
                    "Timeline + investment (if relevant)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)]">
                        ✓
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="glass" className="p-8">
                <p className="text-sm font-semibold tracking-tight">Calendar</p>
                <p className="mt-3 text-sm text-[var(--muted)] leading-7">
                  Embed Calendly / Cal.com here when ready. For now, use the contact form to request a time.
                </p>
                <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-sm font-semibold">Embed placeholder</p>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-7">
                    Add your scheduling link and I’ll wire it up.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)]"
                    >
                      Request a time
                    </Link>
                    <Link href="/work-with-me" className="inline-flex h-11 items-center justify-center text-sm font-semibold hover:underline">
                      Back to engagement models
                    </Link>
                  </div>
                </div>
              </Card>

              <Card variant="gradient" glow className="p-8">
                <p className="text-sm font-semibold tracking-tight text-white">After booking</p>
                <p className="mt-3 text-sm text-white/80 leading-7">
                  You’ll get a calendar invite and a short prep note. Bring 3 questions and any docs/diagrams
                  you want to share.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
