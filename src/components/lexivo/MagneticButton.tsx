import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  as?: "button" | "a";
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  disabled?: boolean;
};

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.35,
  as,
  type = "button",
  target,
  rel,
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div style={{ x: sx, y: sy }} className="inline-flex">
      {children}
    </motion.div>
  );

  const Tag = as ?? (href ? "a" : "button");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-flex"
    >
      {Tag === "a" && href && isInternalPath(href) ? (
        <Link to={href} onClick={onClick} className={className} data-cursor="hover">
          {inner}
        </Link>
      ) : Tag === "a" ? (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={className}
          data-cursor="hover"
        >
          {inner}
        </a>
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={className} data-cursor="hover">
          {inner}
        </button>
      )}
    </motion.div>
  );
}
