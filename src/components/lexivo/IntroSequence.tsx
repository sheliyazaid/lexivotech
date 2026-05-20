import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "LEXIVO TECH";
const TAGLINE = "WE BUILD DIGITAL SOLUTIONS";

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 900),  // icon settles, prep shift
      setTimeout(() => setPhase(2), 1500), // shift left + reveal brand
      setTimeout(() => setPhase(3), 2500), // tagline
      setTimeout(() => setPhase(4), 3700), // exit
      setTimeout(() => onDone(), 4400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[200] grain"
          style={{ backgroundColor: "var(--bone)" }}
        >
          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12">
            <motion.div
              className="flex items-center"
              initial={{ x: 0 }}
              animate={{ x: phase >= 2 ? "-18%" : 0 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
            >
              {/* Icon */}
              <motion.span
                className="font-icon leading-none text-ink select-none"
                style={{ color: "var(--ink)" }}
                initial={{ opacity: 0, scale: 1.6, filter: "blur(24px)" }}
                animate={{
                  opacity: 1,
                  scale: phase >= 2 ? 1 : 1.15,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              >
                <span className="text-[28vw] md:text-[18vw]">L</span>
              </motion.span>
            </motion.div>

            {/* Brand + tagline reveal */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[2%] flex flex-col items-start">
              <div className="overflow-hidden">
                <motion.h1
                  className="font-brand uppercase text-ink leading-[0.85] text-[7vw] md:text-[5.5vw]"
                  initial={{ y: "110%" }}
                  animate={{ y: phase >= 2 ? "0%" : "110%" }}
                  transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                >
                  {BRAND.split("").map((c, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{
                        y: phase >= 2 ? "0%" : "100%",
                        opacity: phase >= 2 ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.65, 0, 0.35, 1],
                        delay: 0.15 + i * 0.04,
                      }}
                    >
                      {c === " " ? "\u00a0" : c}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
              <div className="overflow-hidden mt-2 md:mt-3">
                <motion.p
                  className="font-body uppercase tracking-[0.3em] text-ink/70 text-[2.4vw] md:text-[0.9vw]"
                  initial={{ y: "100%", opacity: 0, letterSpacing: "0.1em" }}
                  animate={{
                    y: phase >= 3 ? "0%" : "100%",
                    opacity: phase >= 3 ? 1 : 0,
                    letterSpacing: phase >= 3 ? "0.3em" : "0.1em",
                  }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                >
                  {TAGLINE}
                </motion.p>
              </div>
            </div>
          </div>

          {/* corner marks */}
          <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] font-body text-ink/50">
            Lexivo / 2026
          </div>
          <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] font-body text-ink/50">
            v1.0 — Awwwards class
          </div>
          <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] font-body text-ink/50">
            Loading experience
          </div>
          <div className="absolute bottom-6 right-6 h-[2px] w-40 bg-ink/15 overflow-hidden">
            <motion.div
              className="h-full bg-ink"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}