import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { Services } from "@/components/lexivo/home/Services";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lexivo Tech" },
      { name: "description", content: "Web development, UI/UX, branding, automation, e-commerce, performance, SEO and custom digital solutions." },
      { property: "og:title", content: "Services — Lexivo Tech" },
      { property: "og:description", content: "Eight disciplines, one studio. Explore the services Lexivo Tech offers." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        index="002"
        title={"Services"}
        lead="Eight disciplines, fully in-house. We move between strategy, design and engineering so your project never feels stitched together."
      />
      <Services />
      <ContactCTA />
    </PageShell>
  );
}