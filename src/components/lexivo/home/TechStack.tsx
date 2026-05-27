import { Marquee } from "../Marquee";

const TECH = ["React", "TypeScript", "Next.js", "TanStack", "Tailwind", "Framer Motion", "GSAP", "Three.js", "Node", "Postgres", "Supabase", "Figma", "Webflow", "Shopify", "Stripe", "OpenAI"];

export function TechStack() {
  return (
    <section className="relative py-14 md:py-20 px-6 md:px-10 bg-bone">
      <div className="max-w-7xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50 text-center">(Tools of the trade)</p>
      </div>
      <div className="mt-10">
        <Marquee>
          {TECH.map((t) => (
            <span key={t} className="font-brand uppercase text-3xl md:text-4xl text-ink/80 flex items-center gap-16">
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mt-4">
        <Marquee reverse>
          {TECH.slice().reverse().map((t) => (
            <span key={t} className="font-brand uppercase text-3xl md:text-4xl text-stroke flex items-center gap-16">
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
