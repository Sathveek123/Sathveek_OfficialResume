"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = useMemo(() => status === "submitting", [status]);

  return (
    <form
      id="contact-form"
      className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
      onSubmit={async (e) => {
        e.preventDefault();
        if (disabled) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        setStatus("submitting");
        setMessage("");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            const body = (await res.json().catch(() => null)) as
              | { error?: string }
              | null;
            throw new Error(body?.error || "Failed to send message.");
          }

          form.reset();
          setStatus("success");
          setMessage("Message sent. I’ll get back to you soon.");
        } catch (err) {
          setStatus("error");
          setMessage(err instanceof Error ? err.message : "Something went wrong.");
        }
      }}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-semibold tracking-tight">Start a Project</h3>
        <p className="text-sm text-[var(--muted)]">
          Share a quick overview and I’ll reply with next steps.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            disabled={disabled}
            className="h-11 rounded-xl border border-[var(--border)] bg-transparent px-3 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] outline-none focus:border-[var(--accent)]"
            placeholder="Your name"
            autoComplete="name"
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

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={disabled}
            className="min-h-28 resize-y rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            placeholder="Tell me what you want to build…"
          />
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] px-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,130,246,0.18)] transition-transform duration-200 hover:translate-y-[-1px] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Start a Project"}
        </button>

        {message ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-emerald-600" : "text-red-600"
            }`}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
