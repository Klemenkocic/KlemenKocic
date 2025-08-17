"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import IntroSplash from "@/components/IntroSplash";

export default function ClientIntroWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  // Show the intro on every load of the homepage
  useEffect(() => {
    setShow(pathname === "/");
  }, [pathname]);

  return (
    <>
      {show && (
        <IntroSplash
          onDone={() => {
            setShow(false);
          }}
        />
      )}
      {children}
    </>
  );
}


