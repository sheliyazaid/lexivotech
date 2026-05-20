import { Link } from "@tanstack/react-router";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Lexivo Tech — Home"
    >
      <span
        className="inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-ink text-bone shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
      >
        <span className="font-icon text-[20px] md:text-[30px] leading-none tracking-[-0.04em]">&lt;lt/&gt;</span>
      </span>
      <span
        className={`flex flex-col leading-none ${
          compact ? "hidden md:flex" : "flex"
        }`}
      >
        <span className="font-brand uppercase text-[15px] md:text-[18px] text-ink leading-none">
          Lexivo Tech
        </span>
        <span className="font-body uppercase tracking-[0.06em] text-[8px] md:text-[10px] text-ink/80 mt-1 leading-none">
          We build digital solutions
        </span>
      </span>
    </Link>
  );
}