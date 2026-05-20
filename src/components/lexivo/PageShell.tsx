import { useEffect, useState, type ReactNode } from "react";
import { FloatingNav } from "./FloatingNav";
import { Footer } from "./Footer";
import { IntroSequence } from "./IntroSequence";
import { SmoothScroll } from "./SmoothScroll";
import { CursorFollower } from "./CursorFollower";

export function PageShell({ children, showIntro = false }: { children: ReactNode; showIntro?: boolean }) {
  const [introDone, setIntroDone] = useState(!showIntro);

  useEffect(() => {
    if (!showIntro) return;
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("lexivo-intro-seen");
    if (seen) setIntroDone(true);
  }, [showIntro]);

  return (
    <div className="relative">
      <SmoothScroll />
      <CursorFollower />
      {showIntro && !introDone && (
        <IntroSequence
          onDone={() => {
            sessionStorage.setItem("lexivo-intro-seen", "1");
            setIntroDone(true);
          }}
        />
      )}
      <FloatingNav />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
}