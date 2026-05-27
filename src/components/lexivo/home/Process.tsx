import { motion } from "framer-motion";

const STEPS = [
  { k: "01", t: "Discover", d: "We unpack the brief, the audience, and the business. No deck templates." },
  { k: "02", t: "Define", d: "Strategy, narrative, and an opinionated direction we'd defend in court." },
  { k: "03", t: "Design", d: "Design systems, prototypes, motion studies — refined until it feels inevitable." },
  { k: "04", t: "Build", d: "Production engineering with performance, accessibility and SEO baked in." },
  { k: "05", t: "Launch", d: "We ship, measure, iterate. Then we stay close — most clients stay for years." },
];

export function Process() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(How we work)</p>
            <h2 className="mt-3 font-brand uppercase text-5xl md:text-7xl leading-[0.9] text-ink">
              The process.
            </h2>
          </div>
          <p className="max-w-sm font-body text-ink/65">Five phases. Every project, same rigor — calibrated to scope.</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 h-px bg-ink/15 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
                className="relative"
              >
                <div className="hidden md:block absolute left-0 top-8 h-px bg-ink" style={{ width: "12%" }} />
                <div className="relative h-16 flex items-start">
                  <div className="h-4 w-4 rounded-full bg-ink mt-6" />
                </div>
                <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50 mt-2">{s.k}</p>
                <h3 className="font-brand uppercase text-2xl md:text-3xl mt-2 text-ink">{s.t}</h3>
                <p className="font-body text-sm text-ink/65 mt-3">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
