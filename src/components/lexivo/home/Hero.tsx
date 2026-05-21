import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../MagneticButton";

const CHIPS = [
  { label: "Web Development", x: "8%", y: "20%" },
  { label: "Branding", x: "78%", y: "18%" },
  // { label: "UI / UX", x: "12%", y: "72%" },
  { label: "Automation", x: "82%", y: "68%" },
  { label: "SEO", x: "50%", y: "10%" },
];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = (ref.current as HTMLElement | null)?.getBoundingClientRect();
      if (!r) return;
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10 overflow-hidden grain">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Floating chips */}
      {CHIPS.map((c, i) => (
        <motion.div
          key={c.label}
          className="absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-ink/15 bg-bone/60 backdrop-blur-md font-body uppercase tracking-[0.25em] text-[10px] text-ink/70"
          style={{
            left: c.x,
            top: c.y,
            x: useTransform(smx, (v) => v * (i % 2 ? -1 : 1) * 0.7),
            y: useTransform(smy, (v) => v * (i % 2 ? 1 : -1) * 0.5),
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          {c.label}
        </motion.div>
      ))}

      <motion.div style={{ y: yShift }} className="relative max-w-7xl mx-auto">
        {/* meta row */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-body text-ink/50 mb-12 md:mb-20">
          <span>(Creative · Tech · Studio)</span>
          <span className="hidden md:inline">EST. 2026 / WORLDWIDE</span>
          <span>Index — 001</span>
        </div>

        <h1 className="font-brand uppercase leading-[0.85] text-ink text-[16vw] md:text-[12vw] tracking-[-0.02em]">
          <Line text="WE DESIGN." delay={0.2} />
          <Line text="WE DEVELOP." delay={0.35} stroke />
          <Line text="WE SCALE." delay={0.5} />
        </h1>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="md:col-span-5 font-body text-ink/70 text-base md:text-lg leading-relaxed max-w-md"
          >
            We build <span className="text-ink">powerful brands, modern websites and digital products</span> designed to stand out and grow fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="md:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:justify-end"
          >
            <MagneticButton
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ink text-bone font-body uppercase tracking-[0.25em] text-[11px]"
            >
              Start a project
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/projects"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-full border border-ink/25 text-ink font-body uppercase tracking-[0.25em] text-[11px] hover:border-ink"
            >
              See the work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 md:mt-28 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-body text-ink/50"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll to enter
        </motion.div>
      </motion.div>
    </section>
  );
}

function Line({ text, delay = 0, stroke }: { text: string; delay?: number; stroke?: boolean }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: [0.7, 0, 0.2, 1], delay }}
        className={`block ${stroke ? "text-stroke" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );
}