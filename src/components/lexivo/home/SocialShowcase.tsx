import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../SocialIcons";
import { CONTACT } from "@/lib/contact";

const POSTS = [
  { tag: "Reel · 2.4k", color: "oklch(0.5 0.1 30)" },
  { tag: "Carousel · 1.1k", color: "oklch(0.3 0.04 240)" },
  { tag: "Reel · 5.8k", color: "oklch(0.78 0.06 80)" },
  { tag: "Story", color: "oklch(0.2 0 0)" },
  { tag: "Carousel · 980", color: "oklch(0.7 0.08 50)" },
  { tag: "Reel · 12k", color: "oklch(0.42 0.07 200)" },
];

export function SocialShowcase() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Always shipping)</p>
            <h2 className="mt-3 font-brand uppercase text-4xl md:text-6xl leading-[0.95]">Follow the work, live.</h2>
          </div>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-body uppercase tracking-[0.25em] text-[11px] text-ink/70 hover:text-ink">
            <InstagramIcon size={16}/> @lexivotech <ArrowUpRight size={14}/>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {POSTS.map((p, i) => (
            <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden relative grain group" style={{ backgroundColor: p.color }} data-cursor="hover">
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 60%)" }} />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-bone text-[10px] uppercase tracking-[0.25em] font-body">
                <span>{p.tag}</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}