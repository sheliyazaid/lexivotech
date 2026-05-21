import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { ContactForm } from "@/components/lexivo/ContactForm";
import { ContactAside } from "@/components/lexivo/ContactAside";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lexivo Tech" },
      { name: "description", content: "Start a project with Lexivo Tech. Reach us by email, phone or the studio form." },
      { property: "og:title", content: "Contact — Lexivo Tech" },
      { property: "og:description", content: "Tell us what you're building. We reply within one working day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        index="006"
        title="Contact"
        lead="Tell us what you're building. We reply within one working day — usually faster."
      />
      <section className="relative py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-ink/10">
            <ContactAside showMap />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
