import { motion } from "framer-motion";

const REASONS = [
  { k: "01", t: "Studio scale, agency depth", d: "Small team, senior hands. No middle-layer noise between you and the people doing the work." },
  { k: "02", t: "Design + engineering, one room", d: "We don't hand off. Designers ship code, engineers care about pixels." },
  { k: "03", t: "Modern stack by default", d: "React, TypeScript, edge runtimes, AI tooling — built to last beyond the launch." },
  { k: "04", t: "Obsessive about the details", d: "Motion timing, copy rhythm, kerning, load order — every layer gets the same care." },
];

export function WhyUs() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-ink text-bone">
      <div className="max-w-7xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-bone/40">(Why us)</p>
        <h2 className="mt-3 font-brand uppercase text-5xl md:text-8xl leading-[0.9] max-w-5xl">
          Not another agency. A studio that ships.
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="relative py-10 md:py-14 px-2 border-t border-bone/15"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-bone/40">{r.k}</span>
                <div className="flex-1">
                  <h3 className="font-brand uppercase text-2xl md:text-4xl leading-tight">{r.t}</h3>
                  <p className="mt-4 font-body text-bone/70 max-w-lg">{r.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
