/**
 * The grove — every run you finish is planted and kept.
 *
 * A run lasts seconds; the grove accumulates over months. That asymmetry is
 * the whole point, so this is the one part of the game that must survive
 * closing the tab.
 *
 * Storage is best-effort by design. Private windows, cleared site data and
 * browsers configured to block storage all throw on access rather than
 * returning null, so every call here is wrapped. A visitor who cannot store
 * anything still gets a working game with an empty grove.
 */

import type { Season, TrailPoint } from "./engine";

const KEY = "klemenkocic:sunline:grove:v1";
const MAX_TREES = 40;
/** Trail points kept per planted tree. Enough to read the shape, small enough
 *  that forty of them do not bloat localStorage. */
const SHAPE_POINTS = 60;

export type PlantedTree = {
  /** ms epoch, so the grove can be shown oldest-first. */
  at: number;
  seed: number;
  distance: number;
  season: Season;
  years: number;
  /** Downsampled trail, normalised to 0..1 on both axes. */
  shape: { x: number; y: number }[];
};

export type Grove = {
  trees: PlantedTree[];
  best: number;
  runs: number;
};

const EMPTY: Grove = { trees: [], best: 0, runs: 0 };

function read(): Grove {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Grove>;
    if (!parsed || !Array.isArray(parsed.trees)) return EMPTY;
    return {
      trees: parsed.trees.slice(-MAX_TREES),
      best: typeof parsed.best === "number" ? parsed.best : 0,
      runs: typeof parsed.runs === "number" ? parsed.runs : 0,
    };
  } catch {
    // Storage unavailable or holding something we did not write. Either way
    // an empty grove is the right answer, not a crash.
    return EMPTY;
  }
}

function write(g: Grove): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(g));
  } catch {
    // Quota or a privacy setting. The run still counts in this session.
  }
}

export function loadGrove(): Grove {
  return read();
}

/** Reduce a full trail to a small normalised shape worth redrawing. */
function toShape(trail: TrailPoint[]): { x: number; y: number }[] {
  if (trail.length === 0) return [];
  const span = trail[trail.length - 1].x - trail[0].x || 1;
  const stride = Math.max(1, Math.floor(trail.length / SHAPE_POINTS));
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < trail.length; i += stride) {
    out.push({
      x: Number(((trail[i].x - trail[0].x) / span).toFixed(3)),
      y: Number(trail[i].y.toFixed(3)),
    });
  }
  return out;
}

export function plant(run: {
  seed: number;
  distance: number;
  season: Season;
  years: number;
  trail: TrailPoint[];
  at: number;
}): Grove {
  const g = read();
  const tree: PlantedTree = {
    at: run.at,
    seed: run.seed,
    distance: Number(run.distance.toFixed(2)),
    season: run.season,
    years: run.years,
    shape: toShape(run.trail),
  };
  const next: Grove = {
    trees: [...g.trees, tree].slice(-MAX_TREES),
    best: Math.max(g.best, tree.distance),
    runs: g.runs + 1,
  };
  write(next);
  return next;
}

export function clearGrove(): Grove {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Nothing to do; the in-memory grove below is still correct.
  }
  return EMPTY;
}
