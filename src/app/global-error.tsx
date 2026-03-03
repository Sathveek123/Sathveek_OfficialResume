"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main style={{ padding: 24, fontFamily: "var(--font-inter), system-ui" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h1 style={{ fontSize: 28, margin: 0 }}>Unexpected error</h1>
            <p style={{ marginTop: 12, color: "#64748b" }}>
              The app hit a fatal error. You can retry or go home.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={reset}
                style={{
                  height: 44,
                  padding: "0 18px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,0.3)",
                  background: "#7c3aed",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Retry
              </button>
              <Link
                href="/"
                style={{
                  height: 44,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0 18px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,0.3)",
                  color: "#0b0f19",
                  background: "white",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </div>
            {error?.message ? (
              <pre style={{ marginTop: 16, padding: 12, borderRadius: 12, background: "#0b1020", color: "#cbd5e1", overflow: "auto" }}>
                {error.message}
              </pre>
            ) : null}
          </div>
        </main>
      </body>
    </html>
  );
}
