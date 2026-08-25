/**
 * Sunline — the simulation.
 *
 * Pure and deterministic: given a seed and the same sequence of inputs, this
 * produces byte-identical runs. No React, no canvas, no DOM. That is what
 * makes a run replayable from a URL, and what makes the rules testable
 * without rendering anything.
 *
 * Coordinates: `x` grows rightward without bound (world units). `y` is 0 at
 * the top of the play field and 1 at the bottom. The renderer maps both.
 */

export const SEASONS = ["spring", "summer", "autumn", "winter"] as const;
export type Season = (typeof SEASONS)[number];

/** Seconds per season. Four of these is one year. */
export const SEASON_SECONDS = 12;

/** Fixed simulation step. The renderer accumulates real time into these. */
export const DT = 1 / 120;

// --- tuning -----------------------------------------------------------------
// These are the numbers that decide whether the game feels good. They are
// gathered here on purpose so a tuning pass is one edit, not a hunt.

const BASE_SPEED = 0.42; // world units per second at t=0
const SPEED_RAMP = 48; // seconds to roughly double speed
const MAX_SPEED = 3.2;

const RISE = -1.85; // upward acceleration while held
const GRAVITY = 1.62; // downward acceleration while released
const MAX_VY = 0.92;

const LIGHT_REFILL = 0.62; // per second inside the band
const LIGHT_DRAIN = 0.4; // per second outside it

const OBSTACLE_SPACING = 1.35; // world units between obstacle slots
const OBSTACLE_GAP = 0.33; // vertical opening, as a fraction of the field
const OBSTACLE_WIDTH = 0.055;
/** No obstacles for the first stretch, so the first seconds teach the light. */
const OBSTACLE_START_X = 6.5;

const TRAIL_MAX = 900;

// --- deterministic noise ----------------------------------------------------

/** Integer hash → [0,1). Used instead of stateful RNG so obstacles are
 *  a pure function of their index, and replays never drift. */
function hash01(seed: number, n: number): number {
  let h = (seed ^ Math.imul(n + 0x9e3779b9, 0x85ebca6b)) >>> 0;
  h = Math.imul(h ^ (h >>> 15), 0x2c1b3c6d) >>> 0;
  h = Math.imul(h ^ (h >>> 12), 0x297a2d39) >>> 0;
  return ((h ^ (h >>> 15)) >>> 0) / 4294967296;
}

export type SeasonShape = {
  /** Middle of the sunlight band, as a fraction of field height. */
  center: number;
  /** Half-height of the band. Smaller is harder. */
  half: number;
  /** How far the band wanders. */
  swing: number;
  /** Sideways shove, used by autumn's wind. */
  wind: number;
};

const SHAPE: Record<Season, SeasonShape> = {
  // Wide and gentle. This is where a new player learns the control.
  spring: { center: 0.5, half: 0.2, swing: 0.14, wind: 0 },
  // High and quick: the band sits up top and moves faster.
  summer: { center: 0.36, half: 0.15, swing: 0.2, wind: 0 },
  // Wind pushes you off your line.
  autumn: { center: 0.5, half: 0.15, swing: 0.24, wind: 0.42 },
  // Narrow and low. Shadows are long. This is where runs end.
  winter: { center: 0.66, half: 0.105, swing: 0.17, wind: 0.1 },
};

export function seasonAt(t: number): Season {
  return SEASONS[Math.floor(t / SEASON_SECONDS) % SEASONS.length];
}

/** Progress through the current season, 0..1. Used to blend shapes. */
function seasonProgress(t: number): number {
  return (t % SEASON_SECONDS) / SEASON_SECONDS;
}

function lerp(a: number, b: number, k: number): number {
  return a + (b - a) * k;
}

function blendShape(t: number): SeasonShape {
  const i = Math.floor(t / SEASON_SECONDS);
  const cur = SHAPE[SEASONS[i % SEASONS.length]];
  const next = SHAPE[SEASONS[(i + 1) % SEASONS.length]];
  // Seasons turn rather than snap: the last fifth of one blends into the next.
  const p = seasonProgress(t);
  const k = p < 0.8 ? 0 : (p - 0.8) / 0.2;
  return {
    center: lerp(cur.center, next.center, k),
    half: lerp(cur.half, next.half, k),
    swing: lerp(cur.swing, next.swing, k),
    wind: lerp(cur.wind, next.wind, k),
  };
}

/** Centre of the sunlight band at a given world x and time. */
export function bandCenter(x: number, t: number): number {
  const s = blendShape(t);
  const wander =
    Math.sin(x * 0.85) * 0.6 + Math.sin(x * 0.31 + 1.7) * 0.4;
  return clamp(s.center + wander * s.swing, 0.08, 0.92);
}

/**
 * Everything tightens as a run goes on: the light narrows and the gaps close.
 * Without this a good player never dies, which is the wrong shape for a game
 * you are meant to restart. Floors keep late runs hard rather than impossible.
 */
export function tighten(t: number): number {
  return Math.max(0.5, 1 - t / 165);
}

export function bandHalf(t: number): number {
  return blendShape(t).half * tighten(t);
}

export function speedAt(t: number): number {
  return Math.min(MAX_SPEED, BASE_SPEED * (1 + t / SPEED_RAMP) ** 1.35);
}

/**
 * When the tip reaches a given x.
 *
 * Distance is the integral of `speedAt`, which has a closed form, so this
 * inverts it exactly. Obstacle placement needs it: a gap has to sit where the
 * sunlight band will be when the player actually gets there, and the band
 * moves with the season. The MAX_SPEED cap is ignored because it only bites
 * after ~315s, far beyond any survivable run.
 */
const DIST_K = (BASE_SPEED * SPEED_RAMP) / 2.35;
export function timeAtX(x: number): number {
  return SPEED_RAMP * ((x / DIST_K + 1) ** (1 / 2.35) - 1);
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export type Obstacle = {
  x: number;
  /** Opening runs from gapTop to gapBottom; the rest is solid. */
  gapTop: number;
  gapBottom: number;
};

/**
 * Obstacles are a pure function of their slot index, so they can be generated
 * on demand for any window of x without keeping a list around.
 */
export function obstaclesBetween(
  seed: number,
  x0: number,
  x1: number,
): Obstacle[] {
  const out: Obstacle[] = [];
  const first = Math.max(
    Math.ceil(OBSTACLE_START_X / OBSTACLE_SPACING),
    Math.floor(x0 / OBSTACLE_SPACING),
  );
  const last = Math.floor(x1 / OBSTACLE_SPACING);
  for (let i = first; i <= last; i++) {
    const x = i * OBSTACLE_SPACING;
    // The gap sits where the band will be when the player arrives, so
    // threading an obstacle and staying in the light are the same action in
    // every season. Without this the two fight each other once the band moves
    // off centre in summer and winter.
    const at = timeAtX(x);
    const jitter = (hash01(seed, i) - 0.5) * 0.14;
    const centre = clamp(bandCenter(x, at) + jitter, 0.18, 0.82);
    const gap = OBSTACLE_GAP * Math.max(0.62, 1 - at / 260);
    out.push({ x, gapTop: centre - gap / 2, gapBottom: centre + gap / 2 });
  }
  return out;
}

export type TrailPoint = { x: number; y: number; lit: boolean };

export type GameState = {
  seed: number;
  t: number;
  x: number;
  y: number;
  vy: number;
  /** 1 is full sun, 0 is starved. Reaching 0 ends the run. */
  light: number;
  alive: boolean;
  /** Metres of branch grown. This is the score. */
  distance: number;
  trail: TrailPoint[];
  season: Season;
  /** Seasons survived. Shown on the end card. */
  years: number;
};

export function createState(seed: number): GameState {
  return {
    seed,
    t: 0,
    x: 0,
    y: 0.5,
    vy: 0,
    light: 1,
    alive: true,
    distance: 0,
    trail: [{ x: 0, y: 0.5, lit: true }],
    season: "spring",
    years: 0,
  };
}

export function isLit(s: GameState): boolean {
  return Math.abs(s.y - bandCenter(s.x, s.t)) <= bandHalf(s.t);
}

function hitsObstacle(s: GameState, prevX: number): boolean {
  // Sweep the segment travelled this step, so fast speeds cannot tunnel through.
  for (const o of obstaclesBetween(
    s.seed,
    prevX - OBSTACLE_WIDTH,
    s.x + OBSTACLE_WIDTH,
  )) {
    const overlapsX = s.x + 0.012 > o.x && prevX - 0.012 < o.x + OBSTACLE_WIDTH;
    if (overlapsX && (s.y < o.gapTop || s.y > o.gapBottom)) return true;
  }
  return false;
}

/**
 * Advance one fixed step.
 *
 * `holding` is the entire input surface of this game: true while the pointer
 * or key is down. Everything else is derived.
 */
export function step(s: GameState, holding: boolean): GameState {
  if (!s.alive) return s;

  const prevX = s.x;
  const shape = blendShape(s.t);

  let vy = s.vy + (holding ? RISE : GRAVITY) * DT;
  // Autumn's wind nudges the tip off whatever line you were holding.
  if (shape.wind > 0) {
    vy += Math.sin(s.t * 2.3) * shape.wind * 0.42 * DT;
  }
  vy = clamp(vy, -MAX_VY, MAX_VY);

  const y = clamp(s.y + vy * DT, 0, 1);
  // Running into the ceiling or floor kills upward momentum, as hitting
  // something should — it does not end the run, the light does that.
  if (y === 0 || y === 1) vy = 0;

  const x = s.x + speedAt(s.t) * DT;
  const t = s.t + DT;

  const next: GameState = {
    ...s,
    t,
    x,
    y,
    vy,
    distance: x,
    season: seasonAt(t),
    years: Math.floor(t / (SEASON_SECONDS * SEASONS.length)),
    trail: s.trail,
  };

  const lit = isLit(next);
  next.light = clamp(
    s.light + (lit ? LIGHT_REFILL : -LIGHT_DRAIN) * DT,
    0,
    1,
  );

  // Sample the trail rather than storing every step, so the array stays small
  // enough to redraw every frame.
  const last = s.trail[s.trail.length - 1];
  if (!last || x - last.x > 0.012) {
    const trail = s.trail.concat({ x, y, lit });
    next.trail = trail.length > TRAIL_MAX ? trail.slice(-TRAIL_MAX) : trail;
  }

  if (next.light <= 0 || hitsObstacle(next, prevX)) {
    next.alive = false;
  }

  return next;
}

export const TUNING = {
  OBSTACLE_WIDTH,
  OBSTACLE_GAP,
  BASE_SPEED,
  MAX_SPEED,
} as const;
