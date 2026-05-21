import { ArrowUpRight } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/contact";
import { InstagramIcon, LinkedinIcon, ThreadsIcon, XIcon } from "./SocialIcons";

const ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  threads: ThreadsIcon,
  x: XIcon,
} as const;

type Props = {
  showMap?: boolean;
  className?: string;
};

export function ContactAside({ showMap = false, className = "" }: Props) {
  return (
    <aside className={`space-y-10 ${className}`}>
      <div>
        <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Direct channels</p>
        <ul className="mt-5 space-y-4 font-brand uppercase text-2xl md:text-3xl text-ink">
          <li>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              {CONTACT.email} <ArrowUpRight size={20} />
            </a>
          </li>
          {/* <li>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              {CONTACT.phone} <ArrowUpRight size={20} />
            </a>
          </li> */}
        </ul>
      </div>

      <div>
        <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Elsewhere</p>
        <div className="mt-5 flex flex-wrap gap-3 text-ink/70">
          {SOCIAL_LINKS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-12 w-12 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-bone transition-colors"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        {/* <ul className="mt-4 space-y-2 font-body text-sm text-ink/70">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul> */}
      </div>

      <div>
        <p className="font-body uppercase tracking-[0.3em] text-[10px] text-ink/50">Studio</p>
        <p className="mt-4 font-body text-ink/75">{CONTACT.location}</p>
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 font-body uppercase tracking-[0.2em] text-[11px] text-ink/60 hover:text-ink"
        >
          Open in Google Maps <ArrowUpRight size={14} />
        </a>
        <p className="mt-6 font-body text-ink/75">{CONTACT.hours}</p>
        <p className="font-body text-ink/55 text-sm mt-1">Working with clients across 12 time zones.</p>
      </div>

      {showMap && (
        <div className="rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3] min-h-[220px]">
          <iframe
            title="Lexivo Tech studio location"
            src={CONTACT.mapsEmbed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}
    </aside>
  );
}
