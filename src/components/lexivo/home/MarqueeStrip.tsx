import { Marquee } from "../Marquee";

const WORDS = ["Web Development", "UI / UX", "Branding", "Automation", "E-commerce", "Performance", "SEO", "Digital Solutions"];

export function MarqueeStrip() {
  return (
    <section className="relative py-8 border-y border-ink/10 bg-bone">
      <Marquee>
        {WORDS.concat(WORDS).map((w, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="font-brand uppercase text-3xl md:text-5xl text-ink/85">{w}</span>
            <span className="h-2 w-2 rounded-full bg-ink/40" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}