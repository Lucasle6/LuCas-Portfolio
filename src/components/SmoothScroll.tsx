"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/*
  First client component of the project. Lenis needs the browser
  (window, wheel events, requestAnimationFrame), none of which exist
  on the server — hence "use client".

  Renders nothing: it only owns the Lenis instance's lifecycle.
*/
export default function SmoothScroll() {
  useEffect(() => {
    // Users who ask the OS for less motion get native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      // Lenis runs its own requestAnimationFrame loop
      autoRaf: true,
      // intercept #anchor clicks; stop 64px early to clear the h-16 sticky navbar
      anchors: { offset: -64 },
    });

    // Cleanup: without destroy(), a hot-reload would stack listeners.
    return () => lenis.destroy();
  }, []);

  return null;
}
