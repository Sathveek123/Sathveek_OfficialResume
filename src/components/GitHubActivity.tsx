"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";

type GitHubPayload = {
  ok: boolean;
  user: {
    login: string;
    name: string | null;
    avatarUrl: string;
    url: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  recent: Array<{ id: string; type: string; repo: string; action: string; createdAt: string }>;
};

type Status = "idle" | "loading" | "success" | "error";

function formatEvent(e: { type: string; action: string }) {
  const action = e.action ? ` (${e.action})` : "";
  return `${e.type}${action}`;
}

export function GitHubActivity({ username }: { username?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState<GitHubPayload | null>(null);
  const [error, setError] = useState<string>("");

  const qs = useMemo(() => {
    return username ? `?username=${encodeURIComponent(username)}` : "";
  }, [username]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setStatus("loading");
      setError("");

      try {
        const res = await fetch(`/api/github${qs}`);
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error || "Failed to load GitHub data.");
        }
        const payload = (await res.json()) as GitHubPayload;
        if (!cancelled) {
          setData(payload);
          setStatus("success");
        }
      } catch (e) {
        if (!cancelled) {
          setStatus("error");
          setError(e instanceof Error ? e.message : "Failed to load GitHub data.");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [qs]);

  return (
    <Card variant="glass" className="p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-tight">Open source activity</p>
          <p className="mt-2 text-sm text-[var(--muted)] leading-7">
            Public GitHub snapshot (rate-limited by GitHub). Configure username via env or pass `username`.
          </p>
        </div>
      </div>

      {status === "loading" ? (
        <div className="mt-6 grid gap-3">
          <div className="h-10 w-full rounded-2xl border border-[var(--border)] bg-[var(--card)]" />
          <div className="h-10 w-full rounded-2xl border border-[var(--border)] bg-[var(--card)]" />
          <div className="h-10 w-full rounded-2xl border border-[var(--border)] bg-[var(--card)]" />
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-6 text-sm text-red-600" role="status">
          {error}
        </p>
      ) : null}

      {status === "success" && data ? (
        <div className="mt-6 grid gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--border)]">
                <Image src={data.user.avatarUrl} alt="GitHub avatar" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  {data.user.name || data.user.login}
                </p>
                <p className="text-xs text-[var(--muted)]">@{data.user.login}</p>
              </div>
            </div>

            <Link href={data.user.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--accent)]">
              View profile →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Public repos", value: data.user.publicRepos },
              { label: "Followers", value: data.user.followers },
              { label: "Following", value: data.user.following },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{s.value}</p>
              </div>
            ))}
          </div>

          {data.recent?.length ? (
            <div>
              <p className="text-sm font-semibold tracking-tight">Recent activity</p>
              <div className="mt-3 grid gap-2">
                {data.recent.map((e) => (
                  <div
                    key={e.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3"
                  >
                    <p className="text-sm font-semibold">{e.repo}</p>
                    <p className="text-xs text-[var(--muted)]">{formatEvent(e)}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
