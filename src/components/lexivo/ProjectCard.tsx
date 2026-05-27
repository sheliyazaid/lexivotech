import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project: p, className = "" }: Props) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className={`relative block rounded-2xl overflow-hidden grain group ${className}`}
      style={{ backgroundColor: p.color }}
      data-cursor="hover"
    >
      <img
        src={p.image}
        alt={p.client}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
      <div className="relative h-full min-h-[280px] md:min-h-[320px] flex flex-col justify-between p-6 md:p-10 text-bone">
        <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] font-body text-bone/70">
          <span>
            {p.n} / {p.client}
          </span>
          <span>{p.year}</span>
        </div>
        <div>
          <p className="font-body uppercase tracking-[0.3em] text-[10px] text-bone/70">{p.tag}</p>
          <h3 className="mt-3 font-brand uppercase text-2xl md:text-4xl lg:text-5xl leading-[0.95] max-w-md">
            {p.title}
          </h3>
          <span className="mt-6 inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-bone/90 group-hover:gap-4 transition-all duration-500">
            View project <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
