import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TEAM = [
  { name: "Zaid Sheliya", role: "Founder & Creative Director", bio: "Visionary designer with 8+ years crafting digital experiences" },
  { name: "Alex Chen", role: "Lead Developer", bio: "Full-stack engineer obsessed with performance and clean code" },
  { name: "Sarah Morgan", role: "UI/UX Specialist", bio: "Detail-oriented designer focused on human-centered design" },
  { name: "James Wilson", role: "Strategy & Growth", bio: "Business strategist who bridges design, tech, and business goals" },
  { name: "Maya Patel", role: "Brand & Content", bio: "Creative storyteller bringing brands to life through content" },
];

export function Team() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % TEAM.length);
  const prev = () => setI((v) => (v - 1 + TEAM.length) % TEAM.length);
  const member = TEAM[i];

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-10 bg-ink text-bone overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-bone/40">(Our team)</p>
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
                {member.name}
              </p>
              <div className="mt-6 font-body uppercase tracking-[0.25em] text-[12px] text-bone/70">
                {member.role}
              </div>
              <p className="mt-4 font-body text-bone/80 text-base leading-relaxed max-w-2xl">
                {member.bio}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-bone/15 pt-6">
          <span className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/40">{String(i + 1).padStart(2, "0")} / {String(TEAM.length).padStart(2, "0")}</span>
          <div className="flex gap-3">
            <button aria-label="Previous" onClick={prev} className="h-11 w-11 rounded-full border border-bone/25 grid place-items-center hover:bg-bone hover:text-ink transition-colors" data-cursor="hover"><ArrowLeft size={16}/></button>
            <button aria-label="Next" onClick={next} className="h-11 w-11 rounded-full border border-bone/25 grid place-items-center hover:bg-bone hover:text-ink transition-colors" data-cursor="hover"><ArrowRight size={16}/></button>
          </div>
        </div>
      </div>
    </section>
  );
}
