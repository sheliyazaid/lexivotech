import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { About } from "@/components/lexivo/home/About";
import { WhyUs } from "@/components/lexivo/home/WhyUs";
import { TechStack } from "@/components/lexivo/home/TechStack";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lexivo Tech" },
      { name: "description", content: "The vision, mission and craft philosophy behind Lexivo Tech." },
      { property: "og:title", content: "About — Lexivo Tech" },
      { property: "og:description", content: "Who we are and why we build the way we do." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader index="004" title="The studio" lead="A small, opinionated team of designers and engineers building the kind of digital work the internet is missing." />
      <About />
      <WhyUs />
      <TechStack />
      <ContactCTA />
    </PageShell>
  );
}