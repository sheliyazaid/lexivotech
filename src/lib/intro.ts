let introCompletedThisLoad = false;

/** True on full page load / reload; false on in-app (SPA) navigation. */
export function isDocumentNavigation(): boolean {
  if (typeof window === "undefined") return true;
  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === "navigate" || nav?.type === "reload";
}

export function shouldPlayIntro(): boolean {
  if (typeof window === "undefined") return false;
  if (!isDocumentNavigation()) return false;
  return !introCompletedThisLoad;
}

export function markIntroComplete(): void {
  introCompletedThisLoad = true;
}
