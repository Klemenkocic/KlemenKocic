"use client";

import { useEffect, useState } from "react";
import IntroSplash from "@/components/IntroSplash";

export default function ClientIntroWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_done") === "1";
    setShow(!seen);
  }, []);

  return (
    <>
      {show && (
        <IntroSplash
          onDone={() => {
            sessionStorage.setItem("intro_done", "1");
            setShow(false);
          }}
        />
      )}
      {children}
    </>
  );
}


