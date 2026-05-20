import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { n: "01", client: "Northwind Goods", tag: "E-commerce · Branding", year: "2026", title: "A heritage retailer reborn for the next decade.", color: "oklch(0.55 0.12 40)" },
  { n: "02", client: "Halcyon AI", tag: "Product · UI/UX", year: "2026", title: "Designing the interface for an autonomous research lab.", color: "oklch(0.4 0.04 220)" },
  { n: "03", client: "Maison Verre", tag: "Branding · Web", year: "2025", title: "Luxury fragrance identity that lives in motion.", color: "oklch(0.7 0.09 80)" },
  { n: "04", client: "Forge Robotics", tag: "Web · Performance", year: "2025", title: "A robotics manifesto rendered at 60fps.", color: "oklch(0.3 0.02 260)" },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-bone flex flex-col">
        <div className="pt-28 md:pt-36 px-6 md:px-10 flex items-end justify-between">
          <div>
            <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Selected work)</p>
            <h2 className="mt-3 font-brand uppercase text-5xl md:text-7xl leading-[0.9] text-ink">
              Featured<br/><span className="text-stroke">projects.</span>
            </h2>
          </div>
          <a href="/projects" className="hidden md:inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-ink/70 hover:text-ink">
            All projects <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-10 will-change-transform">
            {PROJECTS.map((p) => (
              <article
                key={p.n}
                className="relative w-[85vw] md:w-[55vw] lg:w-[45vw] h-[60vh] md:h-[65vh] flex-shrink-0 rounded-2xl overflow-hidden grain group"
                style={{ backgroundColor: p.color }}
                data-cursor="hover"
              >
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%)" }} />
                <div className="relative h-full flex flex-col justify-between p-6 md:p-10 text-bone">
                  <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] font-body text-bone/70">
                    <span>{p.n} / {p.client}</span>
                    <span>{p.year}</span>
                  </div>
                  <div>
                    <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/70">{p.tag}</p>
                    <h3 className="mt-3 font-brand uppercase text-3xl md:text-5xl leading-[0.95] max-w-md">
                      {p.title}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-bone/90 group-hover:gap-4 transition-all duration-500">
                      View case study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
            <div className="w-[20vw] flex-shrink-0" />
          </motion.div>
        </div>
        <div className="px-6 md:px-10 pb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-body text-ink/40">
          <span>← Drag · Scroll</span>
          <span>{PROJECTS.length} featured</span>
        </div>
      </div>
    </section>
  );
}