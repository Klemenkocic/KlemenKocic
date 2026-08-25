"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  DT,
  SEASONS,
  bandCenter,
  bandHalf,
  createState,
  obstaclesBetween,
  step,
  TUNING,
  type GameState,
  type Season,
} from "@/lib/sunline/engine";
import { loadGrove, plant, type Grove } from "@/lib/sunline/grove";

/** Same four colours as the favicon, so the tab icon and the game read as
 *  one object rather than two things that happen to both involve trees. */
const SEASON_COLOR: Record<Season, string> = {
  spring: "#A8DB57",
  summer: "#2FC275",
  autumn: "#FF7A59",
  winter: "#CFE4F2",
};

const BG = "#0D0D0F";
const TRUNK = "#C89B6E";

/** How much world sits on screen. Smaller means faster-feeling. */
const VIEW_WIDTH = 3.4;
/** The tip is parked here horizontally so you can see what is coming. */
const TIP_X_FRACTION = 0.32;

type Phase = "ready" | "playing" | "dead";

export default function SunlineGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(createState(1));
  const holdingRef = useRef(false);
  const phaseRef = useRef<Phase>("ready");
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const accRef = useRef<number>(0);

  const [phase, setPhase] = useState<Phase>("ready");
  const [hud, setHud] = useState({ distance: 0, light: 1, season: "spring" as Season });
  const [grove, setGrove] = useState<Grove>({ trees: [], best: 0, runs: 0 });

  useEffect(() => setGrove(loadGrove()), []);

  const setPhaseBoth = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const start = useCallback(() => {
    stateRef.current = createState((Math.floor(Date.now() / 1000) % 100000) + 1);
    accRef.current = 0;
    lastRef.current = 0;
    setPhaseBoth("playing");
  }, [setPhaseBoth]);

  const die = useCallback(() => {
    const s = stateRef.current;
    setGrove(
      plant({
        seed: s.seed,
        distance: s.distance,
        season: s.season,
        years: s.years,
        trail: s.trail,
        at: Date.now(),
      }),
    );
    setPhaseBoth("dead");
  }, [setPhaseBoth]);

  // --- input: one bit, held or not -----------------------------------------
  useEffect(() => {
    const down = (e: Event) => {
      if (e instanceof KeyboardEvent) {
        if (e.code !== "Space" && e.code !== "ArrowUp") return;
        // preventDefault MUST come before the repeat check. Holding a key
        // fires a stream of repeat keydowns, and letting those through is
        // what scrolls the page out from under the game.
        e.preventDefault();
        if (e.repeat) return;
      }
      if (phaseRef.current !== "playing") {
        start();
        holdingRef.current = true;
        return;
      }
      holdingRef.current = true;
    };
    const up = (e: Event) => {
      if (e instanceof KeyboardEvent && e.code !== "Space" && e.code !== "ArrowUp") return;
      holdingRef.current = false;
    };

    const el = canvasRef.current;
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    el?.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      el?.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [start]);

  // --- the loop -------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // A hidden tab stops delivering frames; without this the accumulator
    // would bank the whole time away and replay it in one lurch on return.
    const onVisibility = () => {
      if (document.hidden) {
        lastRef.current = 0;
        accRef.current = 0;
        holdingRef.current = false;
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const frame = (now: number) => {
      rafRef.current = requestAnimationFrame(frame);

      if (phaseRef.current === "playing") {
        if (lastRef.current === 0) lastRef.current = now;
        // Cap the catch-up so a stall can never spin the simulation forever.
        const elapsed = Math.min((now - lastRef.current) / 1000, 0.25);
        lastRef.current = now;
        accRef.current += elapsed;

        while (accRef.current >= DT) {
          stateRef.current = step(stateRef.current, holdingRef.current);
          accRef.current -= DT;
          if (!stateRef.current.alive) {
            accRef.current = 0;
            die();
            break;
          }
        }
      }

      draw(ctx, canvas, stateRef.current, phaseRef.current);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [die]);

  // HUD is React, but at 8Hz — redrawing text every frame is wasted work.
  useEffect(() => {
    const id = setInterval(() => {
      const s = stateRef.current;
      setHud({ distance: s.distance, light: s.light, season: s.season });
    }, 125);
    return () => clearInterval(id);
  }, []);

  const best = Math.max(grove.best, hud.distance);

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
        <canvas
          ref={canvasRef}
          className="block w-full touch-none select-none"
          style={{ height: "min(62vh, 520px)", background: BG }}
          aria-label="Sunline: hold to grow up, release to grow down"
        />

        {/* HUD */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">Grown</div>
            <div className="font-display text-2xl sm:text-3xl tabular-nums text-white">
              {hud.distance.toFixed(1)}m
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-white/40">Season</div>
            <div
              className="font-display text-lg sm:text-xl capitalize"
              style={{ color: SEASON_COLOR[hud.season] }}
            >
              {hud.season}
            </div>
          </div>
        </div>

        {/* Light meter: the only thing that can kill you, so it gets the width */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-[width] duration-100"
              style={{
                width: `${Math.max(0, hud.light) * 100}%`,
                background: SEASON_COLOR[hud.season],
              }}
            />
          </div>
        </div>

        {phase !== "playing" && (
          <Overlay
            phase={phase}
            distance={stateRef.current.distance}
            best={grove.best}
            runs={grove.runs}
            onStart={start}
          />
        )}
      </div>

      <GroveStrip grove={grove} />

      <p className="mt-4 text-xs text-white/40">
        Hold anywhere (or space) to grow up. Release to grow down. Stay in the
        light. Best {best.toFixed(1)}m over {grove.runs} run
        {grove.runs === 1 ? "" : "s"}.
      </p>
    </div>
  );
}

function Overlay({
  phase,
  distance,
  best,
  runs,
  onStart,
}: {
  phase: Phase;
  distance: number;
  best: number;
  runs: number;
  onStart: () => void;
}) {
  const isDead = phase === "dead";
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-[2px] px-6">
      <div className="text-center">
        <h2 className="font-display text-2xl sm:text-4xl text-white">
          {isDead ? `${distance.toFixed(1)}m` : "Sunline"}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/60 max-w-sm mx-auto">
          {isDead
            ? distance >= best && runs > 1
              ? "Your longest branch yet. It is in the grove."
              : "Out of the light. Planted in the grove below."
            : "A branch grows toward the sun. Hold to rise, release to fall, stay in the light."}
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-6 rounded-full bg-white px-6 py-2.5 font-display text-sm text-black hover:bg-white/90 transition-colors"
        >
          {isDead ? "Grow again" : "Grow"}
        </button>
        <p className="mt-3 text-xs text-white/35">or press space</p>
      </div>
    </div>
  );
}

function GroveStrip({ grove }: { grove: Grove }) {
  if (grove.trees.length === 0) return null;
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-baseline justify-between">
        <h3 className="text-[10px] uppercase tracking-widest text-white/40">
          Your grove
        </h3>
        <span className="text-[10px] text-white/30">
          {grove.trees.length} tree{grove.trees.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {grove.trees
          .slice()
          .reverse()
          .map((t) => (
            <svg
              key={`${t.at}-${t.seed}`}
              viewBox="0 0 40 60"
              className="h-16 w-11 flex-shrink-0 rounded-lg border border-white/10 bg-white/[0.03]"
              role="img"
              aria-label={`${t.distance.toFixed(1)} metres, ${t.season}`}
            >
              <polyline
                points={t.shape.map((p) => `${4 + p.x * 32},${6 + p.y * 48}`).join(" ")}
                fill="none"
                stroke={SEASON_COLOR[t.season]}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
      </div>
    </div>
  );
}

// --- rendering ---------------------------------------------------------------

function draw(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  s: GameState,
  phase: Phase,
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = canvas.width / dpr;
  const H = canvas.height / dpr;

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, W, H);

  const color = SEASON_COLOR[s.season];
  const scale = W / VIEW_WIDTH;
  const originX = s.x - (VIEW_WIDTH * TIP_X_FRACTION);
  const sx = (x: number) => (x - originX) * scale;
  const sy = (y: number) => y * H;

  // --- the sunlight band, drawn as a soft ribbon across the field
  const half = bandHalf(s.t);
  ctx.beginPath();
  const STEPS = 64;
  for (let i = 0; i <= STEPS; i++) {
    const wx = originX + (VIEW_WIDTH * i) / STEPS;
    const y = bandCenter(wx, s.t) - half;
    if (i === 0) ctx.moveTo(sx(wx), sy(y));
    else ctx.lineTo(sx(wx), sy(y));
  }
  for (let i = STEPS; i >= 0; i--) {
    const wx = originX + (VIEW_WIDTH * i) / STEPS;
    const y = bandCenter(wx, s.t) + half;
    ctx.lineTo(sx(wx), sy(y));
  }
  ctx.closePath();
  ctx.fillStyle = hexA(color, 0.13);
  ctx.fill();

  // Band edges, so the boundary you must not cross is unambiguous
  ctx.strokeStyle = hexA(color, 0.4);
  ctx.lineWidth = 1;
  for (const off of [-half, half]) {
    ctx.beginPath();
    for (let i = 0; i <= STEPS; i++) {
      const wx = originX + (VIEW_WIDTH * i) / STEPS;
      const y = bandCenter(wx, s.t) + off;
      if (i === 0) ctx.moveTo(sx(wx), sy(y));
      else ctx.lineTo(sx(wx), sy(y));
    }
    ctx.stroke();
  }

  // --- obstacles
  const ow = TUNING.OBSTACLE_WIDTH;
  ctx.fillStyle = "#1E1E24";
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  for (const o of obstaclesBetween(s.seed, originX - ow, originX + VIEW_WIDTH + ow)) {
    const x = sx(o.x);
    const w = ow * scale;
    ctx.fillRect(x, 0, w, sy(o.gapTop));
    ctx.strokeRect(x, 0, w, sy(o.gapTop));
    ctx.fillRect(x, sy(o.gapBottom), w, H - sy(o.gapBottom));
    ctx.strokeRect(x, sy(o.gapBottom), w, H - sy(o.gapBottom));
  }

  // --- the branch you have grown
  if (s.trail.length > 1) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Two passes: the woody line, then the lit segments glowing over it.
    ctx.strokeStyle = TRUNK;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    s.trail.forEach((p, i) => {
      if (i === 0) ctx.moveTo(sx(p.x), sy(p.y));
      else ctx.lineTo(sx(p.x), sy(p.y));
    });
    ctx.stroke();

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    let drawing = false;
    for (const p of s.trail) {
      if (p.lit) {
        if (drawing) ctx.lineTo(sx(p.x), sy(p.y));
        else ctx.moveTo(sx(p.x), sy(p.y));
        drawing = true;
      } else {
        drawing = false;
      }
    }
    ctx.stroke();
  }

  // --- the growing tip
  const tipX = sx(s.x);
  const tipY = sy(s.y);
  const lit = Math.abs(s.y - bandCenter(s.x, s.t)) <= half;
  if (lit) {
    const g = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 26);
    g.addColorStop(0, hexA(color, 0.5));
    g.addColorStop(1, hexA(color, 0));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(tipX, tipY, 26, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = lit ? color : "#6b6b78";
  ctx.beginPath();
  ctx.arc(tipX, tipY, 5, 0, Math.PI * 2);
  ctx.fill();

  // Starving is the one state that must be impossible to miss.
  if (phase === "playing" && !lit) {
    ctx.fillStyle = `rgba(13,13,15,${0.34 * (1 - s.light)})`;
    ctx.fillRect(0, 0, W, H);
  }
}

/** #RRGGBB + alpha → rgba(). Keeps the palette in one notation. */
function hexA(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

export { SEASON_COLOR, SEASONS };
