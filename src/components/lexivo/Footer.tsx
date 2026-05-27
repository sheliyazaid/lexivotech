import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { CONTACT, SITEMAP_LINKS, SOCIAL_LINKS } from "@/lib/contact";
import {
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  XIcon,
} from "./SocialIcons";

const ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  threads: ThreadsIcon,
  x: XIcon,
} as const;

export function Footer() {
  return (
    <footer className="relative bg-ink text-bone overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">
        {/* Top Section */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-16 lg:gap-x-24">
  {/* CTA */}
  <div className="md:col-span-5">
    <p className="font-body uppercase tracking-[0.35em] text-[10px] text-bone/40">
      Build with us
    </p>

    <h2 className="mt-5 font-brand uppercase text-5xl md:text-7xl leading-[0.88] tracking-[-0.03em]">
      Let's build
      <br />
      something
      <br />
      unforgettable.
    </h2>

    <p className="mt-6 max-w-md text-bone/60 leading-relaxed">
      We craft premium websites, SaaS products and digital experiences
      that help ambitious brands stand out and grow online.
    </p>

    <Link
      to="/contact"
      className="mt-10 inline-flex items-center gap-3 group"
    >
      <span className="uppercase tracking-[0.25em] text-[12px]">
        Start a Project
      </span>

      <span className="h-11 w-11 rounded-full border border-bone/25 grid place-items-center transition-all duration-300 group-hover:bg-bone group-hover:text-ink">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  </div>

  {/* Services */}
  <div className="md:col-span-2">
    <p className="uppercase tracking-[0.35em] text-[10px] text-bone/40">
      Services
    </p>

    <ul className="mt-5 space-y-3 text-sm uppercase tracking-[0.12em] text-bone/75">
      <li>Web Design</li>
      <li>Web Development</li>
      <li>UI/UX Design</li>
      <li>SaaS Products</li>
      <li>E-Commerce</li>
      <li>Landing Pages</li>
    </ul>
  </div>

  {/* Navigation */}
  <div className="md:col-span-2">
    <p className="uppercase tracking-[0.35em] text-[10px] text-bone/40">
      Navigation
    </p>

    <ul className="mt-5 space-y-3 text-sm uppercase tracking-[0.12em] text-bone/75">
      {SITEMAP_LINKS.map(({ to, label }) => (
        <li key={to}>
          <Link
            to={to}
            className="hover:text-bone transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Contact */}
  <div className="md:col-span-3">
    <p className="uppercase tracking-[0.35em] text-[10px] text-bone/40">
      Contact
    </p>

    <ul className="mt-5 space-y-4 text-sm text-bone/75">
      <li>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 hover:text-bone transition-colors"
        >
          <Mail size={15} />
          {CONTACT.email}
        </a>
      </li>

      <li>
        <a
          href={`tel:${CONTACT.phoneTel}`}
          className="flex items-center gap-3 hover:text-bone transition-colors"
        >
          <Phone size={15} />
          {CONTACT.phone}
        </a>
      </li>

      <li>
        <a
          href="tel:+917798547243"
          className="flex items-center gap-3 hover:text-bone transition-colors"
        >
          <Phone size={15} />
          77985 47243
        </a>
      </li>

      <li className="text-bone/50 leading-relaxed">
        Available worldwide for freelance, startup and agency
        collaborations.
      </li>
    </ul>

    {/* Social Icons */}
    <div className="flex items-center gap-4 mt-8">
      {SOCIAL_LINKS.map((s) => {
        const Icon = ICONS[s.icon];

        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="h-10 w-10 rounded-full border border-bone/15 flex items-center justify-center text-bone/70 hover:text-bone hover:border-bone/40 transition-all"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  </div>
</div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[10px] uppercase tracking-[0.28em] text-bone/40">
          <span>
            © {new Date().getFullYear()} LexivoTech. All rights reserved.
          </span>

          <span>Design. Code. Impact.</span>
        </div>
      </div>
    </footer>
  );
}