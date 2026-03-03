import { PageShell } from "@/components/PageShell";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Notes on systems, automation, trading logic, and building scalable products."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]}
    >
      <BlogIndexClient posts={blogPosts} />
    </PageShell>
  );
}
