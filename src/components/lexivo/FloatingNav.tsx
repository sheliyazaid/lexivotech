import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, LinkedinIcon, ThreadsIcon, XIcon } from "./SocialIcons";
import { LogoMark } from "./LogoMark";
import { MagneticButton } from "./MagneticButton";
import { ContactForm } from "./ContactForm";
import { CONTACT, SOCIAL_LINKS } from "@/lib/contact";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

const ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  threads: ThreadsIcon,
  x: XIcon,
} as const;

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
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
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <MagneticButton
              as="button"
              onClick={() => setContactOpen(true)}
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

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="z-[100] max-w-2xl max-h-[90vh] overflow-y-auto bg-bone border-ink/15 sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-brand uppercase text-3xl text-ink tracking-wide">Let's talk</DialogTitle>
            <DialogDescription className="font-body text-ink/60">
              Same brief form as our contact page — we'll reply to {CONTACT.email} within one working day.
            </DialogDescription>
          </DialogHeader>
          <ContactForm compact onSuccess={() => setTimeout(() => setContactOpen(false), 2200)} />
        </DialogContent>
      </Dialog>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[80] bg-ink text-bone overflow-hidden"
          >
            {/* subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            <div className="relative h-full w-full flex flex-col px-6 pt-24 pb-8">

              {/* index label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/30 mb-6"
              >
                Navigation
              </motion.p>

              <nav className="flex-1 flex flex-col">
                {NAV.map((item, i) => {
                  const active = pathname === item.to;
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
                      className="border-t border-bone/10 first:border-t-0"
                    >
                      <Link
                        to={item.to}
                        className="group flex items-center justify-between py-4"
                      >
                        <span className={`font-brand uppercase text-4xl sm:text-5xl leading-none transition-colors ${active ? "text-bone" : "text-bone/50 group-hover:text-bone"}`}>
                          {item.label}
                        </span>
                        <span className="font-body text-[10px] tracking-[0.2em] text-bone/30 group-hover:text-bone/60 transition-colors">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex items-center justify-between border-t border-bone/15 pt-5"
              >
                <div className="flex gap-5 text-bone/50">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = ICONS[s.icon];
                    return (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="hover:text-bone transition-colors">
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setContactOpen(true);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bone text-ink font-body uppercase tracking-[0.2em] text-[11px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                  Let's talk
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
