import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";
import { ProjectCard } from "@/components/lexivo/ProjectCard";
import { ALL_PROJECTS } from "@/lib/projects";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Lexivo Tech" },
      { name: "description", content: "Selected work from Lexivo Tech — brands, products and digital experiences." },
      { property: "og:title", content: "Projects — Lexivo Tech" },
      { property: "og:description", content: "Selected work from Lexivo Tech." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader index="003" title="Projects" lead="A small set of recent work. We take on a handful of partners each year — depth beats breadth, every time." />
      <section className="relative py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {ALL_PROJECTS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.65, 0, 0.35, 1] }}
            >
              <ProjectCard project={p} className="aspect-[4/3] h-full" />
            </motion.div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </PageShell>
  );
}
