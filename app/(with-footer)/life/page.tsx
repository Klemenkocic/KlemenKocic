"use client";
import Orchestrator from "@/components/life/Orchestrator";
import ProgressRail from "@/components/ProgressRail";
import { useEffect, useState } from "react";

export default function LifePage() {
  // mirror Work page progress rail behavior with orange accent
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const p = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ProgressRail progress={progress} accentClassName="bg-life" />
      <Orchestrator />
    </>
  );
}

