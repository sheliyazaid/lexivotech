import { motion } from "framer-motion";

export function About() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-bone-soft overflow-hidden grain">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(The studio)</p>
          <h2 className="mt-3 font-brand uppercase text-5xl md:text-6xl leading-[0.9]">About<br/>Lexivo.</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-brand uppercase text-3xl md:text-5xl leading-[1.05] text-ink"
          >
            We started Lexivo because too much of the internet feels rushed, copy-pasted, forgettable. We're here to build the opposite.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-ink/10">
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Vision</p>
              <p className="font-body text-ink/75 mt-3">A digital landscape where craft outlives trends — every brand we touch becomes harder to ignore.</p>
            </div>
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Mission</p>
              <p className="font-body text-ink/75 mt-3">Partner with ambitious teams and build digital products with the care of an architect and the speed of a startup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
