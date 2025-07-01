import { useEffect, useState } from "react";
import { SCREEN_TO_BREAKPOINT } from "@constants";

export default function useScreenBreakpoint(
  screen: keyof typeof SCREEN_TO_BREAKPOINT
) {
  const [belowBreakpoint, setBelowBreakpoint] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(
      `(max-width: ${SCREEN_TO_BREAKPOINT[screen] - 1}px)`
    );
    const onChange = () => {
      setBelowBreakpoint(window.innerWidth < SCREEN_TO_BREAKPOINT[screen]);
    };

    mql.addEventListener("change", onChange);

    setBelowBreakpoint(window.innerWidth < SCREEN_TO_BREAKPOINT[screen]);
    return () => mql.removeEventListener("change", onChange);
  }, [screen]);

  return belowBreakpoint;
}
