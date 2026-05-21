import { useEffect, useState, type ReactNode } from "react";
import { FloatingNav } from "./FloatingNav";
import { Footer } from "./Footer";
import { IntroSequence } from "./IntroSequence";
import { SmoothScroll } from "./SmoothScroll";
import { CursorFollower } from "./CursorFollower";
import { markIntroComplete, shouldPlayIntro } from "@/lib/intro";

export function PageShell({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(true);

  useEffect(() => {
    if (shouldPlayIntro()) {
      setIntroDone(false);
    }
  }, []);

  return (
    <div className="relative">
      {!introDone && (
        <IntroSequence
          onDone={() => {
            markIntroComplete();
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
