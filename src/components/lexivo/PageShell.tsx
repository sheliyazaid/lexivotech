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
    setIntroDone(false);
  }, [showIntro]);

  return (
    <div className="relative">
      {showIntro && !introDone && (
        <IntroSequence
          onDone={() => {
            setIntroDone(true);
          }}
        />
      )}
      {introDone && (
        <>
          <SmoothScroll />
          <CursorFollower />
          <FloatingNav />
          <main className="relative z-0">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}