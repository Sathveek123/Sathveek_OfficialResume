import { NextResponse } from "next/server";

type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubEvent = {
  id: string;
  type: string;
  repo?: { name?: string };
  created_at?: string;
  payload?: { action?: string };
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const usernameParam = url.searchParams.get("username");
  const username =
    usernameParam || process.env.NEXT_PUBLIC_GITHUB_USERNAME || process.env.GITHUB_USERNAME;

  if (!username) {
    return NextResponse.json(
      { error: "Missing GitHub username." },
      { status: 400 },
    );
  }

  try {
    const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: {
        "Accept": "application/vnd.github+json",
      },
      next: { revalidate: 60 * 60 },
    });

    if (!userRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub profile." },
        { status: 502 },
      );
    }

    const user = (await userRes.json()) as GitHubUser;

    const eventsRes = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=10`,
      {
        headers: { "Accept": "application/vnd.github+json" },
        next: { revalidate: 60 * 30 },
      },
    );

    const events = eventsRes.ok ? ((await eventsRes.json()) as GitHubEvent[]) : [];

    const recent = events
      .filter((e) => e?.type && e?.repo?.name)
      .slice(0, 5)
      .map((e) => ({
        id: e.id,
        type: e.type,
        repo: e.repo?.name || "",
        action: e.payload?.action || "",
        createdAt: e.created_at || "",
      }));

    return NextResponse.json({
      ok: true,
      user: {
        login: user.login,
        name: user.name,
        avatarUrl: user.avatar_url,
        url: user.html_url,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      recent,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data." },
      { status: 502 },
    );
  }
}
