"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import IntroSplash from "@/components/IntroSplash";

const SESSION_KEY = "klemenkocic:introShown";

export default function ClientIntroWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShow(false);
      return;
    }

    // Escape hatch for demos/screenshots: ?fresh=1 always shows the splash
    const fresh = typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("fresh") === "1";
    if (fresh) {
      setShow(true);
      return;
    }

    // Otherwise gate to once-per-session
    try {
      const seen = sessionStorage.getItem(SESSION_KEY) === "1";
      setShow(!seen);
    } catch {
      // sessionStorage unavailable (e.g., SSR snapshot, privacy mode) — show by default
      setShow(true);
    }
  }, [pathname]);

  const handleDone = () => {
    setShow(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore — splash will just show again next load if storage fails
    }
  };

  return (
    <>
      {show && <IntroSplash onDone={handleDone} />}
      {children}
    </>
  );
}
