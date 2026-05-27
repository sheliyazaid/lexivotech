import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Lexivo Tech developed a high-quality website for our brand that perfectly reflects our vision. The execution was seamless, the design was modern and professional, and the overall experience exceeded our expectations.",
    who: "Maviya Kadiwal",
    role: "CEO, Sealventures",
  },
  {
    quote:
      "We entrusted Lexivo Tech with building our e-commerce website, and the results exceeded all expectations. They transformed our vision into a seamless, high-performing platform with a clean design and exceptional user experience. Their attention to detail and professionalism truly set their work apart.",
    who: "Sadaf Patel",
    role: "Owner, Trendy Finds",
  },
  {
    quote:
      "Lexivo Tech built a stunning website for our bakery with a warm, modern design and a truly professional feel. The site captures our brand perfectly and provides a smooth experience for our customers.",
    who: "Riyaz Abdul Hamid",
    role: "CEO, Qremsia",
  },
  {
    quote:
      "Lexivo Tech developed a highly professional website for Ayesha Arts that not only reflects our brand identity beautifully but also plays a key role in attracting online customers. The design, functionality, and overall user experience have significantly improved our digital presence and helped us connect with a wider audience. Their work truly delivers both quality and results.",
    who: "Ayesha Aglodiya",
    role: "Owner, Ayesha Arts",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % ITEMS.length);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const item = ITEMS[i];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-ink text-bone overflow-hidden">
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
