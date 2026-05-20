import { Link } from "@tanstack/react-router";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Lexivo Tech — Home"
    >
      <span
        className="font-icon text-3xl md:text-4xl leading-none text-ink"
        style={{ color: "var(--ink)" }}
      >
        L
      </span>
      <span
        className={`flex flex-col leading-none ${
          compact ? "hidden md:flex" : "flex"
        }`}
      >
        <span className="font-brand uppercase text-[15px] md:text-[17px] text-ink leading-none">
          Lexivo Tech
        </span>
        <span className="font-body uppercase tracking-[0.25em] text-[8px] md:text-[9px] text-ink/60 mt-1">
          We build digital solutions
        </span>
      </span>
    </Link>
  );
}