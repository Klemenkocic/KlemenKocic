import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        {/* A cut stump: the page that used to be here, or never was. */}
        <svg
          viewBox="0 0 64 64"
          className="mx-auto mb-6 h-16 w-16 text-foreground/25"
          fill="none"
          aria-hidden
        >
          <ellipse cx="32" cy="22" rx="18" ry="7" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="32" cy="22" rx="10" ry="3.6" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="32" cy="22" rx="3.5" ry="1.4" fill="currentColor" />
          <path d="M14 22v14c0 3.9 8.1 7 18 7s18-3.1 18-7V22" stroke="currentColor" strokeWidth="3" />
        </svg>

        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">404</h1>
        <p className="mt-3 text-foreground/60">Nothing grows here.</p>

        <div className="mt-8 flex items-center justify-center gap-5 text-sm">
          <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
            Go home
          </Link>
          <span className="text-foreground/20">·</span>
          {/* The stump is a hint, not a signpost: this reads as a suggestion
              to plant something, and happens to be the game. */}
          <Link href="/plant" className="text-foreground/40 hover:text-foreground/80 transition-colors">
            Plant something
          </Link>
        </div>
      </div>
    </main>
  );
}
