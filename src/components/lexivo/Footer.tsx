import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";

const WHATSAPP = "https://wa.me/0000000000?text=Hello%20Lexivo%20Tech";

export function Footer() {
  return (
    <footer className="relative bg-ink text-bone overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-body uppercase tracking-[0.3em] text-[11px] text-bone/50">Build with us</p>
            <h2 className="mt-4 font-brand uppercase text-4xl md:text-6xl leading-[0.95]">
              Have an idea?<br/>Let's give it a shape.
            </h2>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 group">
              <span className="font-body uppercase tracking-[0.25em] text-[12px]">Start a project</span>
              <span className="h-10 w-10 rounded-full border border-bone/30 grid place-items-center group-hover:bg-bone group-hover:text-ink transition-all">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/40">Sitemap</p>
            <ul className="mt-4 space-y-2 font-body text-bone/80 uppercase tracking-[0.15em] text-sm">
              {[["/", "Home"], ["/services", "Services"], ["/projects", "Projects"], ["/about", "About"], ["/process", "Process"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to as string} className="hover:text-bone">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/40">Connect</p>
            <ul className="mt-4 space-y-2 font-body text-bone/80 uppercase tracking-[0.15em] text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-bone"><Instagram size={14}/> Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-bone"><Linkedin size={14}/> LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-bone"><Github size={14}/> GitHub</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/40">Contact</p>
            <ul className="mt-4 space-y-2 font-body text-bone/80 text-sm">
              <li><a className="hover:text-bone" href="mailto:hello@lexivo.tech">hello@lexivo.tech</a></li>
              <li><a className="hover:text-bone" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li className="text-bone/50">Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 -mx-6 md:-mx-10 border-t border-bone/15">
          <h3 className="font-brand uppercase text-bone leading-none text-[18vw] md:text-[15vw] tracking-[-0.02em] text-center select-none">
            LEXIVO
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-[10px] uppercase tracking-[0.3em] font-body text-bone/40">
          <span>© {new Date().getFullYear()} Lexivo Tech — All rights reserved</span>
          <span>Crafted with obsession</span>
        </div>
      </div>
    </footer>
  );
}