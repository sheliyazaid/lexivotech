import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { Process } from "@/components/lexivo/home/Process";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Lexivo Tech" },
      { name: "description", content: "Five phases. Every project, same rigor — calibrated to scope." },
      { property: "og:title", content: "Process — Lexivo Tech" },
      { property: "og:description", content: "How Lexivo Tech moves from brief to launch." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <PageShell>
      <PageHeader index="005" title="Process" lead="The path from a vague spark to a launched product. Same shape every time — different gear depending on scope." />
      <Process />
      <ContactCTA />
    </PageShell>
  );
}