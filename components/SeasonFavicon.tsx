"use client";

import { useEffect } from "react";

// Animated favicon: the icon.svg tree cycling through the four seasons.
// Browsers do not animate SVG or GIF favicons, so this repaints a small
// canvas and swaps the <link rel="icon"> href to its data URL. Colours and
// geometry are shared with app/icon.svg and public/icons/tree-*.svg.
const SEASONS = ["#A8DB57", "#2FC275", "#FF7A59", "#CFE4F2"]; // spring..winter

// Each season holds, then crossfades into the next: 4 x (7s + 3s) = a 40s
// year. Slow enough to read as the seasons turning rather than a flicker,
// short enough that a second glance at the tab catches it mid-change.
const HOLD_MS = 7000;
const FADE_MS = 3000;
const SEASON_MS = HOLD_MS + FADE_MS;
const CYCLE_MS = SEASON_MS * 4;
const FADE_FRAME_MS = 125; // ~8fps, and only while crossfading

// Geometry in the same 256-space as the SVG marks.
const PLATE =
  "M48 0H208A48 48 0 0 1 256 48V208A48 48 0 0 1 208 256H48A48 48 0 0 1 0 208V48A48 48 0 0 1 48 0Z";
const BRANCHES: Array<[string, number]> = [
  ["M128 222V138", 32],
  ["M128 178Q102 172 82 130M128 178Q154 172 174 130", 20],
  ["M128 142Q116 122 106 104M128 142Q140 122 150 104", 16],
];
const CANOPY: Array<[number, number, number]> = [
  [128, 90, 48],
  [95, 114, 40],
  [161, 114, 40],
];

function mix(a: string, b: string, f: number): string {
  const ch = (hex: string, i: number) => parseInt(hex.slice(i, i + 2), 16);
  const lerp = (x: number, y: number) => Math.round(x + (y - x) * f);
  return `rgb(${lerp(ch(a, 1), ch(b, 1))},${lerp(ch(a, 3), ch(b, 3))},${lerp(
    ch(a, 5),
    ch(b, 5)
  )})`;
}

// Current real-world season (northern hemisphere): the cycle starts here,
// and it is the single frame shown under prefers-reduced-motion.
function seasonNow(): number {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return 0; // spring
  if (m >= 5 && m <= 7) return 1; // summer
  if (m >= 8 && m <= 10) return 2; // autumn
  return 3; // winter
}

export default function SeasonFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx || typeof Path2D === "undefined") return; // static icon stays

    const plate = new Path2D(PLATE);
    const branches = BRANCHES.map(
      ([d, w]) => [new Path2D(d), w] as [Path2D, number]
    );

    const strokeBranches = () => {
      ctx.strokeStyle = "#C89B6E";
      ctx.lineCap = "round";
      for (const [path, width] of branches) {
        ctx.lineWidth = width;
        ctx.stroke(path);
      }
    };

    const draw = (canopy: string) => {
      ctx.setTransform(64 / 256, 0, 0, 64 / 256, 0, 0);
      ctx.clearRect(0, 0, 256, 256);
      ctx.fillStyle = "#0D0D0F";
      ctx.fill(plate);
      strokeBranches();
      ctx.fillStyle = canopy;
      for (const [cx, cy, r] of CANOPY) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Our own icon link. The static links (icon.svg, favicon.ico) are left
    // in place for no-JS browsers and crawlers, but demoted at runtime so
    // the browser has exactly one candidate; cleanup restores them.
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    const demoted = new Set<HTMLLinkElement>();
    const setIcon = (canopy: string) => {
      document.head
        .querySelectorAll<HTMLLinkElement>("link[rel~='icon']")
        .forEach((el) => {
          if (el !== link) {
            el.rel = "kk-demoted-icon";
            demoted.add(el);
          }
        });
      if (!link.isConnected) document.head.appendChild(link);
      draw(canopy);
      link.href = canvas.toDataURL("image/png");
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;

    // The position in the cycle is derived from the wall clock each tick,
    // so throttled background-tab timers make the animation choppier but
    // never wrong.
    const t0 = Date.now() - seasonNow() * SEASON_MS;

    const tick = () => {
      const t = (Date.now() - t0) % CYCLE_MS;
      const season = Math.floor(t / SEASON_MS);
      const local = t - season * SEASON_MS;
      const next = (season + 1) % 4;
      if (local < HOLD_MS) {
        setIcon(SEASONS[season]);
        timer = window.setTimeout(tick, HOLD_MS - local);
      } else {
        const f = (local - HOLD_MS) / FADE_MS;
        const eased = f * f * (3 - 2 * f);
        setIcon(mix(SEASONS[season], SEASONS[next], eased));
        timer = window.setTimeout(tick, FADE_FRAME_MS);
      }
    };

    const start = () => {
      window.clearTimeout(timer);
      if (mq.matches) {
        setIcon(SEASONS[seasonNow()]);
      } else {
        tick();
      }
    };

    start();
    mq.addEventListener("change", start);

    return () => {
      window.clearTimeout(timer);
      mq.removeEventListener("change", start);
      link.remove();
      demoted.forEach((el) => {
        el.rel = "icon";
      });
    };
  }, []);

  return null;
}
