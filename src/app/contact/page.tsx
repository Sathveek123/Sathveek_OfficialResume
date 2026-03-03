import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Let’s Work Together"
      subtitle="Share your goals — I’ll respond with a clear plan, timeline, and next steps."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <ContactForm />

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow-sm)]">
            <div className="grid gap-3">
              <p className="text-sm font-semibold">Direct</p>
              <p className="text-sm text-[var(--muted)]">Use the form for the fastest response.</p>
              <p className="text-sm text-[var(--muted)]">Location: India</p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border)]">
              <Image
                src="/images/contact.jpeg"
                alt="Contact photo"
                width={1200}
                height={900}
                className="h-72 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--foreground)] p-8 text-[var(--background)] shadow-[var(--shadow-md)]">
              <p className="text-sm font-semibold">Availability</p>
              <p className="mt-3 text-sm text-[var(--muted)] dark:text-white/80 leading-7">
                Limited slots. If your project needs architecture-level thinking, let’s talk.
              </p>
              <a
                href="#contact-form"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--background)] px-5 text-sm font-semibold text-[var(--foreground)]"
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
