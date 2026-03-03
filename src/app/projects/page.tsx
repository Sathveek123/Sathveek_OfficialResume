import { PageShell } from "@/components/PageShell";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      subtitle="Selected work — systems I’ve architected across AI, automation, trading, and product engineering."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Projects" },
      ]}
    >
      <ProjectsClient />
    </PageShell>
  );
}
