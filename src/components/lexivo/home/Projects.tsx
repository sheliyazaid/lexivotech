import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { ProjectCard } from "../ProjectCard";

export function Projects() {
  return (
    <>
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-bone lg:hidden">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Selected work)</p>
          <h2 className="mt-3 font-brand uppercase text-5xl md:text-7xl leading-[0.9] text-ink">
            Featured
            <br />
            <span className="text-stroke">projects.</span>
          </h2>
          <div className="mt-10 -mx-6 px-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {FEATURED_PROJECTS.map((p) => (
              <ProjectCard key={p.n} project={p} className="w-[85vw] md:w-[70vw] shrink-0 snap-center" />
            ))}
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] font-body text-ink/40">← Swipe to explore</p>
        </div>
      </section>

      <section className="hidden lg:block relative py-16 md:py-24 px-6 md:px-10 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-body uppercase tracking-[0.3em] text-[11px] text-ink/50">(Selected work)</p>
              <h2 className="mt-3 font-brand uppercase text-6xl xl:text-7xl leading-[0.9] text-ink">
                Featured
                <br />
                <span className="text-stroke">projects.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-body uppercase tracking-[0.25em] text-[11px] text-ink/70 hover:text-ink"
            >
              All projects <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {FEATURED_PROJECTS.map((p) => (
              <ProjectCard key={p.n} project={p} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
