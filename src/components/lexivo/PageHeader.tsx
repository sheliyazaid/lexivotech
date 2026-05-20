import { motion } from "framer-motion";

export function PageHeader({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <header className="relative pt-40 md:pt-48 pb-16 md:pb-24 px-6 md:px-10 grain overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }} />
      <div className="relative max-w-7xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">Index — {index}</p>
        <div className="overflow-hidden mt-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
            className="font-brand uppercase text-ink leading-[0.88] text-[16vw] md:text-[11vw] tracking-[-0.02em]"
          >
            {title}
          </motion.h1>
        </div>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 max-w-xl font-body text-ink/70 text-base md:text-lg"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
}