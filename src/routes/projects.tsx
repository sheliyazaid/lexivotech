import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/lexivo/PageShell";
import { PageHeader } from "@/components/lexivo/PageHeader";
import { ContactCTA } from "@/components/lexivo/home/ContactCTA";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ALL = [
  { n: "01", client: "Northwind Goods", tag: "E-commerce · Branding", year: "2026", title: "A heritage retailer reborn for the next decade.", color: "oklch(0.55 0.12 40)" },
  { n: "02", client: "Halcyon AI", tag: "Product · UI/UX", year: "2026", title: "Designing the interface for an autonomous research lab.", color: "oklch(0.4 0.04 220)" },
  { n: "03", client: "Maison Verre", tag: "Branding · Web", year: "2025", title: "Luxury fragrance identity that lives in motion.", color: "oklch(0.7 0.09 80)" },
  { n: "04", client: "Forge Robotics", tag: "Web · Performance", year: "2025", title: "A robotics manifesto rendered at 60fps.", color: "oklch(0.3 0.02 260)" },
  { n: "05", client: "Vela Studio", tag: "Branding", year: "2025", title: "Architecture studio identity built like a building.", color: "oklch(0.45 0.05 160)" },
  { n: "06", client: "Lumen Bank", tag: "Product", year: "2024", title: "Rebuilding a neobank dashboard with calm by design.", color: "oklch(0.6 0.1 90)" },
];

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
          {ALL.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden grain"
              style={{ backgroundColor: p.color }}
              data-cursor="hover"
            >
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%)" }} />
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8 text-bone">
                <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] font-body text-bone/70">
                  <span>{p.n} / {p.client}</span><span>{p.year}</span>
                </div>
                <div>
                  <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/70">{p.tag}</p>
                  <h3 className="mt-3 font-brand uppercase text-2xl md:text-4xl leading-[0.95] max-w-md">{p.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-bone/90 group-hover:gap-4 transition-all duration-500">
                    Case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </PageShell>
  );
}