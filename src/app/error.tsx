"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Card } from "@/components/ui/Card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="pt-28 pb-20">
      <div className="container-page">
        <div className="mx-auto grid max-w-3xl gap-6">
          <Card variant="glass" className="p-7">
            <p className="text-sm font-semibold tracking-tight">Something went wrong</p>
            <p className="mt-3 text-sm text-[var(--muted)] leading-7">
              Try again. If it persists, go back home or contact me.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold"
              >
                Home
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center text-sm font-semibold hover:underline">
                Contact
              </Link>
            </div>

            {error?.message ? (
              <pre className="mt-6 overflow-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-xs text-[var(--muted)]">
                {error.message}
              </pre>
            ) : null}
          </Card>
        </div>
      </div>
    </main>
  );
}
