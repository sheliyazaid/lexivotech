import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const PROJECTS = [
  { n: "01", client: "Northwind Goods", tag: "E-commerce · Branding", year: "2026", title: "A heritage retailer reborn for the next decade.", color: "oklch(0.55 0.12 40)" },
  { n: "02", client: "Halcyon AI", tag: "Product · UI/UX", year: "2026", title: "Designing the interface for an autonomous research lab.", color: "oklch(0.4 0.04 220)" },
  { n: "03", client: "Maison Verre", tag: "Branding · Web", year: "2025", title: "Luxury fragrance identity that lives in motion.", color: "oklch(0.7 0.09 80)" },
  { n: "04", client: "Forge Robotics", tag: "Web · Performance", year: "2025", title: "A robotics manifesto rendered at 60fps.", color: "oklch(0.3 0.02 260)" },
];

function ProjectCard({ p, className = "" }: { p: (typeof PROJECTS)[0]; className?: string }) {
  return (
    <article
      className={`relative rounded-2xl overflow-hidden grain group ${className}`}
      style={{ backgroundColor: p.color }}
      data-cursor="hover"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%)" }}
      />
      <div className="relative h-full min-h-[280px] md:min-h-[320px] flex flex-col justify-between p-6 md:p-10 text-bone">
        <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] font-body text-bone/70">
          <span>
            {p.n} / {p.client}
          </span>
          <span>{p.year}</span>
        </div>
        <div>
          <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/70">{p.tag}</p>
          <h3 className="mt-3 font-brand uppercase text-2xl md:text-4xl lg:text-5xl leading-[0.95] max-w-md">{p.title}</h3>
          <span className="mt-6 inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-bone/90 group-hover:gap-4 transition-all duration-500">
            View case study <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <>
      {/* Mobile + tablet: horizontal scroll */}
      <section ref={ref} className="relative h-[400vh] lg:hidden">
        <div className="sticky top-0 h-screen overflow-hidden bg-bone flex flex-col">
          <div className="pt-28 md:pt-36 px-6 md:px-10 flex items-end justify-between">
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Selected work)</p>
              <h2 className="mt-3 font-brand uppercase text-5xl md:text-7xl leading-[0.9] text-ink">
                Featured
                <br />
                <span className="text-stroke">projects.</span>
              </h2>
            </div>
          </div>

          <div className="flex-1 flex items-center min-h-0">
            <motion.div style={{ x }} className="flex gap-6 pl-6 will-change-transform">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.n} p={p} className="w-[85vw] md:w-[70vw] shrink-0 h-[58vh] md:h-[62vh]" />
              ))}
              <div className="w-[12vw] shrink-0" />
            </motion.div>
          </div>
          <div className="px-6 md:px-10 pb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-body text-ink/40">
            <span>← Scroll</span>
            <span>{PROJECTS.length} featured</span>
          </div>
        </div>
      </section>

      {/* Large screens: aligned grid */}
      <section className="hidden lg:block relative py-24 md:py-32 px-6 md:px-10 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Selected work)</p>
              <h2 className="mt-3 font-brand uppercase text-6xl xl:text-7xl leading-[0.9] text-ink">
                Featured
                <br />
                <span className="text-stroke">projects.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-ink/70 hover:text-ink"
            >
              All projects <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.n} p={p} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
