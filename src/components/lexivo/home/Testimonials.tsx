import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ITEMS = [
  { quote: "Lexivo didn't just redesign our site — they redesigned how we think about our product. The launch beat our annual revenue target in 11 weeks.", who: "Sara Yilmaz", role: "CEO, Northwind Goods" },
  { quote: "Genuinely the only studio I've worked with where design, engineering and strategy speak the same language. Rare and worth every cent.", who: "Daniel Mehta", role: "Founder, Halcyon AI" },
  { quote: "They took a vague brand idea and built an entire universe around it. We've been getting cold inbounds from competitors asking who did it.", who: "Anaïs Roux", role: "Creative Director, Maison Verre" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % ITEMS.length);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const item = ITEMS[i];

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-10 bg-ink text-bone overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-bone/40">(Clients say)</p>
        <div className="mt-8 min-h-[320px] md:min-h-[260px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            >
              <p className="font-brand uppercase text-3xl md:text-5xl leading-[1.1]">
                "{item.quote}"
              </p>
              <div className="mt-10 font-body uppercase tracking-[0.25em] text-[12px] text-bone/70">
                {item.who} — <span className="text-bone/50">{item.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-bone/15 pt-6">
          <span className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/40">{String(i + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}</span>
          <div className="flex gap-3">
            <button aria-label="Previous" onClick={prev} className="h-11 w-11 rounded-full border border-bone/25 grid place-items-center hover:bg-bone hover:text-ink transition-colors" data-cursor="hover"><ArrowLeft size={16}/></button>
            <button aria-label="Next" onClick={next} className="h-11 w-11 rounded-full border border-bone/25 grid place-items-center hover:bg-bone hover:text-ink transition-colors" data-cursor="hover"><ArrowRight size={16}/></button>
          </div>
        </div>
      </div>
    </section>
  );
}