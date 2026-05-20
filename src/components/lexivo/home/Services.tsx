import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { n: "01", title: "Web Development", desc: "Production-grade sites and apps built with modern stacks and obsessive attention to performance." },
  { n: "02", title: "UI / UX Design", desc: "Interfaces that feel inevitable — clear, considered, and crafted around real human behavior." },
  { n: "03", title: "Branding", desc: "Identity systems that go beyond a logo — voice, type, motion, the whole picture." },
  { n: "04", title: "Automation", desc: "Workflows, integrations and AI tooling that quietly do the boring work for you." },
  { n: "05", title: "E-commerce", desc: "Conversion-led storefronts engineered for speed, trust and repeat customers." },
  { n: "06", title: "Performance", desc: "Audits and rebuilds that get your existing product fast, accessible and resilient." },
  { n: "07", title: "SEO & Presence", desc: "Technical SEO, content architecture and digital presence that earns long-term traffic." },
  { n: "08", title: "Custom Solutions", desc: "Whatever the brief — internal tools, dashboards, integrations — built from scratch." },
];

export function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(What we do)</p>
            <h2 className="mt-3 font-brand uppercase text-5xl md:text-7xl leading-[0.9] text-ink">
              Services<br/><span className="text-stroke">— in detail.</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-ink/70">
            Eight disciplines, one studio. We move between them so your project never feels stitched together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
              className={`group relative bg-bone p-6 md:p-8 min-h-[280px] flex flex-col justify-between overflow-hidden ${
                activeCard === i ? "is-active" : ""
              }`}
              data-cursor="hover"
              onClick={() => setActiveCard((prev) => (prev === i ? null : i))}
            >
              <div className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 group-[.is-active]:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)]" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 group-hover:text-bone/60 group-[.is-active]:text-bone/60 transition-colors">{s.n}</span>
                <ArrowUpRight size={18} className="text-ink/40 group-hover:text-bone group-hover:-translate-y-1 group-hover:translate-x-1 group-[.is-active]:text-bone group-[.is-active]:-translate-y-1 group-[.is-active]:translate-x-1 transition-all duration-500" />
              </div>
              <div className="relative z-10">
                <h3 className="font-brand uppercase text-2xl md:text-3xl leading-tight text-ink group-hover:text-bone group-[.is-active]:text-bone transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="mt-4 font-body text-sm text-ink/65 group-hover:text-bone/75 group-[.is-active]:text-bone/75 transition-colors duration-500 max-h-0 group-hover:max-h-40 group-[.is-active]:max-h-40 overflow-hidden opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-[max-height,opacity] ease-out">
                  {s.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}