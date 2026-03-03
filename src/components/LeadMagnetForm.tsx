"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadMagnetForm({
  resource,
  intentLabel,
  includeCompany = false,
  intentOptions,
  onSuccessRedirect,
}: {
  resource: string;
  intentLabel?: string;
  includeCompany?: boolean;
  intentOptions?: string[];
  onSuccessRedirect: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = useMemo(() => status === "submitting", [status]);

  return (
    <form
      className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
      onSubmit={async (e) => {
        e.preventDefault();
        if (disabled) return;

        const form = e.currentTarget;
        const data = new FormData(form);

        setStatus("submitting");
        setMessage("");

        try {
          const res = await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              resource,
              email: data.get("email"),
              firstName: data.get("firstName"),
              company: data.get("company"),
              intent: data.get("intent"),
            }),
          });

          if (!res.ok) {
            const body = (await res.json().catch(() => null)) as { error?: string } | null;
            throw new Error(body?.error || "Failed to submit.");
          }

          setStatus("success");
          window.location.assign(onSuccessRedirect);
        } catch (err) {
          setStatus("error");
          setMessage(err instanceof Error ? err.message : "Something went wrong.");
        }
      }}
    >
      <div className="space-y-1">
        <p className="text-sm font-semibold tracking-tight">Get instant access</p>
        <p className="text-sm text-[var(--muted)] leading-7">
          Enter your email and I’ll send you the resource. No spam.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="firstName">
            First name (optional)
          </label>
          <input
            id="firstName"
            name="firstName"
            disabled={disabled}
            className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
            placeholder="Your name"
            autoComplete="given-name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            disabled={disabled}
            className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>

        {includeCompany ? (
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="company">
              Company / Project (optional)
            </label>
            <input
              id="company"
              name="company"
              disabled={disabled}
              className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
              placeholder="What are you building?"
              autoComplete="organization"
            />
          </div>
        ) : null}

        {intentOptions?.length ? (
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="intent">
              {intentLabel || "Intended use"}
            </label>
            <select
              id="intent"
              name="intent"
              disabled={disabled}
              className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm outline-none focus:border-[var(--accent)]"
            >
              {intentOptions.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] px-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,130,246,0.18)] transition-transform duration-200 hover:translate-y-[-1px] disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Get the resource"}
        </button>

        {status === "error" && message ? (
          <p className="text-sm text-red-600" role="status">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
