import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "./SocialIcons";
import { LogoMark } from "./LogoMark";
import { MagneticButton } from "./MagneticButton";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

const WHATSAPP = "https://wa.me/0000000000?text=Hello%20Lexivo%20Tech";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-1.5rem)] max-w-7xl"
      >
        <div
          className={`flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-full border border-ink/10 transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-xl bg-bone/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
              : "bg-bone/30 backdrop-blur-md"
          }`}
        >
          <LogoMark compact />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 text-[12px] uppercase tracking-[0.2em] font-body text-ink/70 hover:text-ink transition-colors"
                  data-cursor="hover"
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink/8"
                      style={{ backgroundColor: "color-mix(in oklab, var(--ink) 8%, transparent)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[1px] origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <MagneticButton
              href={WHATSAPP}
              as="a"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-bone font-body uppercase tracking-[0.2em] text-[11px] hover:bg-ink-soft transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bone animate-pulse" />
              Let's talk
            </MagneticButton>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-ink/5"
              data-cursor="hover"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[80] bg-ink text-bone overflow-hidden"
          >
            <div className="h-full w-full flex flex-col px-6 pt-28 pb-10">
              <nav className="flex-1 flex flex-col gap-3">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <Link
                      to={item.to}
                      className="block font-brand uppercase text-5xl sm:text-6xl leading-none py-2 text-bone hover:text-stone transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between border-t border-bone/15 pt-6"
              >
                <div className="flex gap-4 text-bone/70">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-bone text-ink font-body uppercase tracking-[0.2em] text-[11px]"
                >
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}