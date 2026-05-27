import { TEAM } from "@/lib/team";

export function Team() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-ink text-bone overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="font-body uppercase tracking-[0.3em] text-[11px] text-bone/40">(Our team)</p>
        <h2 className="mt-4 font-brand uppercase text-4xl md:text-6xl leading-[0.9]">The people behind the work.</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="group rounded-2xl border border-bone/15 bg-bone/5 overflow-hidden transition-colors hover:border-bone/30"
            >
              <div className="aspect-[4/5] overflow-hidden bg-bone/10">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-brand uppercase text-xl leading-tight">{member.name}</h3>
                <p className="mt-2 font-body uppercase tracking-[0.2em] text-[10px] text-bone/65">{member.role}</p>
                <p className="mt-3 font-body text-sm text-bone/75 leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
