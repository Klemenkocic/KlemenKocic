import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-10 border-t border-white/10 mt-24 text-foreground">
      <nav
        className="max-w-6xl mx-auto px-6"
        aria-label="Footer navigation"
      >
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-center">
          <p className="text-xs sm:text-sm text-foreground/80">© {year} Klemen Kocic.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-start sm:justify-end text-xs sm:text-sm">
            <li>
              <Link
                href="/"
                className="hover:underline decoration-white/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="hover:underline decoration-white/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/life"
                className="hover:underline decoration-white/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Life
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Klemenkocic"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="hover:underline decoration-white/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/klemen-kocic"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="hover:underline decoration-white/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

