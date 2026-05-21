import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import { CONTACT } from "@/lib/contact";

export function ContactCTA() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 bg-bone overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      <div className="relative max-w-7xl mx-auto text-center">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Have a brief?)</p>
        <h2 className="mt-6 font-brand uppercase text-[18vw] md:text-[12vw] leading-[0.85] text-ink tracking-[-0.02em]">
          Let's <span className="text-stroke">build</span><br/>something rare.
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <MagneticButton href="/contact" className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-ink text-bone font-body uppercase tracking-[0.25em] text-[12px]">
            Start a project <ArrowUpRight size={16}/>
          </MagneticButton>
          <MagneticButton href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-3 px-8 py-5 rounded-full border border-ink/25 text-ink font-body uppercase tracking-[0.25em] text-[12px] hover:border-ink">
            {CONTACT.email}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}