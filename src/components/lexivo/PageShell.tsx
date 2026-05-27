import { useEffect, useState, type ReactNode, createContext, useContext } from "react";
import { FloatingNav } from "./FloatingNav";
import { Footer } from "./Footer";
import { IntroSequence } from "./IntroSequence";
import { SmoothScroll } from "./SmoothScroll";
import { CursorFollower } from "./CursorFollower";
import { markIntroComplete, shouldPlayIntro } from "@/lib/intro";

const IntroContext = createContext<{ introDone: boolean }>({ introDone: true });

export function useIntroDone() {
  return useContext(IntroContext).introDone;
}

type PageShellProps = {
  children: ReactNode;
  /** Play full-screen intro on first visit / reload (home only). */
  withIntro?: boolean;
};

export function PageShell({ children, withIntro = false }: PageShellProps) {
  const [introDone, setIntroDone] = useState(() => {
    if (!withIntro) return true;
    if (typeof window === "undefined") return false;
    return !shouldPlayIntro();
  });

  useEffect(() => {
    if (!withIntro) {
      setIntroDone(true);
      return;
    }
    if (!shouldPlayIntro()) {
      setIntroDone(true);
    }
  }, [withIntro]);

  const showIntro = withIntro && !introDone;

  return (
    <IntroContext.Provider value={{ introDone: !showIntro }}>
      <div className="relative">
        {showIntro && (
          <IntroSequence
            onDone={() => {
              markIntroComplete();
              setIntroDone(true);
            }}
          />
        )}
        {!showIntro && (
          <>
            <SmoothScroll />
            <CursorFollower />
            <FloatingNav />
            <main className="relative z-0">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </IntroContext.Provider>
  );
}
