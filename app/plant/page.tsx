import Link from "next/link";
import type { Metadata } from "next";
import SunlineGame from "@/components/sunline/SunlineGame";

export const metadata: Metadata = {
  title: "Sunline",
  description:
    "A branch grows toward the sun. Hold to rise, release to fall, stay in the light.",
  openGraph: {
    title: "Sunline",
    description:
      "A branch grows toward the sun. Hold to rise, release to fall, stay in the light.",
    url: "https://klemenkocic.com/plant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunline",
    description: "Hold to rise, release to fall, stay in the light.",
  },
};

export default function PlantPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 sm:mb-8">
          <h1 className="font-display text-3xl sm:text-4xl tracking-tight">
            Sunline
          </h1>
          <p className="mt-2 max-w-xl text-sm sm:text-base text-foreground/60">
            Planting trees in the shade of which I will never sit. This one takes
            about thirty seconds.
          </p>
        </header>

        <SunlineGame />

        <footer className="mt-10 border-t border-white/10 pt-5 text-xs text-foreground/40">
          <Link href="/" className="hover:text-foreground/70 transition-colors">
            ← klemenkocic.com
          </Link>
        </footer>
      </div>
    </main>
  );
}
