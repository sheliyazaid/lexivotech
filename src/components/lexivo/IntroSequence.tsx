import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "LEXIVO TECH";
const TAGLINE = "WE BUILD DIGITAL SOLUTIONS";

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 900),
      setTimeout(() => setPhase(2), 1700),
      setTimeout(() => setPhase(3), 2700),
      setTimeout(() => setPhase(4), 3900),
      setTimeout(() => onDone(), 4600),
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
          className="fixed inset-0 z-[200] overflow-hidden"
          style={{ backgroundColor: "var(--bone)" }}
        >
          <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12 isolate">
            <div className="flex items-center justify-center gap-0 md:gap-7">
              <motion.span
                className="inline-flex h-[36vw] w-[36vw] md:h-[165px] md:w-[165px] shrink-0 items-center justify-center rounded-[3vw] md:rounded-[14px] bg-ink text-bone select-none [transform:translateZ(0)]"
                style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                initial={{ opacity: 0, scale: 1.2, rotate: -4 }}
                animate={{
                  opacity: 1,
                  scale: phase >= 2 ? 1 : 1.04,
                  rotate: phase >= 1 ? 0 : -4,
                  x: phase >= 2 && isDesktop ? -12 : 0,
                }}
                transition={{ duration: 1.05, ease: [0.65, 0, 0.35, 1] }}
              >
                <span className="font-icon text-[15vw] md:text-[76px] leading-none tracking-[-0.04em]">&lt;lt/&gt;</span>
              </motion.span>

              {isDesktop && (
                <motion.div
                  className="hidden md:flex flex-col items-start pl-1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{
                    opacity: phase >= 2 ? 1 : 0,
                    x: phase >= 2 ? 0 : 16,
                  }}
                  transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
                >
                  <h1 className="font-brand uppercase text-ink leading-[0.86] text-[88px] whitespace-nowrap">
                    {BRAND}
                  </h1>
                  <motion.p
                    className="mt-1 font-body uppercase tracking-[0.06em] text-ink/85 text-[25px] leading-none whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {TAGLINE}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
