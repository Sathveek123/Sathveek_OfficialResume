import { PageShell } from "@/components/PageShell";
import { ServicesClient } from "@/components/services/ServicesClient";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      subtitle="Strategic technical partnerships — designed to deliver outcomes, not just code."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
    >
      <ServicesClient />
    </PageShell>
  );
}
