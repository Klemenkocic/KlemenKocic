# PLAN — "Planting trees" rework

Started 2026-08-25. Owner: Klemen. Agent: Claude.

**The line.** "Planting trees in the shade of which I will never sit."
No attribution. Replaces "keep it simple".

**The decision.** Full metaphor rework (chosen 2026-08-25, over "season module only"
and "splash + favicon only"). The site learns what season it is, and Work and Life
carry the growth metaphor in their layout, not just their palette.

**Rule for this build.** Show every change in chat before or as it lands. No batching.
Tick a box here the moment the task is actually done, never at the end.

---

## Track A — the sentence

- [x] **A1.** `components/IntroSplash.tsx`: replace `words` with three phrases.
      "Planting trees" / "in the shade of which" / "I will never sit."
      Stack vertically, reveal phrase by phrase.
- [x] **A2.** Timing: preBlack 500ms, show 3400ms (was 2200), fade 700ms.
      Stagger 420ms per phrase (was 260ms per word).
- [x] **A3.** Keep untouched: reduced-motion escape hatch, once-per-session gate in
      `ClientIntroWrapper.tsx`, the `?fresh=1` demo override.
- [x] **A4.** Check the line does not wrap badly at 320px, 390px and 768px.

## Track B — the favicon (agent `favicon-tree`, running)

- [x] **B1.** `app/icon.svg` — one tree, canopy split into four quadrants reading
      clockwise spring → summer → autumn → winter. First attempt used vertical
      bands; I rejected it (bands merged at 16px, the pale band read as glare).
- [x] **B2.** `public/icons/tree-{spring,summer,autumn,winter}.svg` written.
      Trunk geometry verified identical across all five (`M128 222V138`, `#C89B6E`).
      **Caveat: canopy radii drift.** Year-round canopy is ~13% larger than the
      variants. Harmless today; fix before wiring seasonal swapping or the tree
      will visibly breathe between seasons.
- [x] **B3.** Legibility verified: rendered all five at 256/32/16px with
      rsvg-convert, upscaled nearest-neighbour, inspected. Four quadrants remain
      distinguishable at 16px. Winter is strongest (bare branches read through).
- [x] **B4a.** DONE. Confirmed empirically: the rendered `<head>` had TWO icon
      links, both `/favicon.ico`, none to the tree. Removed the `icons` field from
      `app/layout.tsx` metadata (an explicit entry overrides Next's file-based
      convention). Re-verified: the head now emits
      `<link rel="icon" href="/icon.svg?..." type="image/svg+xml" sizes="any">`.
      The tree shows in modern browsers.
- [ ] **B4b. BLOCKED — needs Klemen's permission.** `app/favicon.ico` still holds
      the old "#" glyph and is still linked at `sizes="16x16"`. Old browsers,
      Google results and bookmark hardcodes will keep showing "#".
      Fix is to regenerate it from the tree:
      `magick ico-16.png ico-32.png ico-48.png ico-64.png ico-128.png ico-256.png app/favicon.ico`
      (PNGs already rendered in scratchpad). The write was denied by the auto-mode
      classifier because it overwrites a tracked binary. The old file stays in git
      either way. Awaiting go-ahead.
- [x] **B5.** Contact sheet shown to Klemen, both the rejected v1 and the accepted v2.

### B6 — ANIMATED favicon (added 2026-08-25, Klemen's request)

- [x] **B6. DONE, verified independently.** `components/SeasonFavicon.tsx` repaints
      a 64px canvas and swaps `<link rel="icon">` to its data URL — the one
      technique Chrome honours. 40s year: 7s hold + 3s crossfade per season.
      My own Chrome check (not the agent's): 16 distinct favicon states over 45s,
      16 transitions, loop closes on its starting hash, 1 candidate link + 2
      demoted, href is a data URL.
      Reduced motion → single static frame of the real current season.
      **Unverified, stated honestly:** Firefox (not installed) and Safari (needs
      Remote Automation). Safari likely shows the static tree, not animated.
      **Traded away for 16px legibility:** the four-quadrant canopy (mud at 16px,
      quadrants survive only in the static `icon.svg`) and winter's bare branches
      (tan flooded the pale canopy).
      Geometry unified across all five SVGs — verified identical hash.
- [x] **B4b. RESOLVED WITHOUT THE BLOCKED WRITE.** This solution does not need
      `app/favicon.ico` changed; the file is untouched. The stale "#" glyph still
      serves to non-JS crawlers and Google results, which is a smaller problem than
      before but not zero. Revisit only if Klemen cares about the search-result icon.
- [ ] **B6-old.** One tree cycling through the four seasons, built by a Fable-model
      agent (`favicon-anim`).
      **The constraint that decides the design: Chrome does not animate SVG
      favicons.** It rasterises frame one and stops, and it dropped animated-GIF
      favicon support. So a SMIL or CSS-keyframe SVG would look finished, pass
      every file check, and silently do nothing in Klemen's main browser.
      Likely approach: a client module swapping `<link rel="icon">` on an interval.
      Must respect `prefers-reduced-motion`, must survive static export, must keep
      `app/icon.svg` valid standalone for crawlers.
      Agent instructed to PROVE animation in Chrome by sampling the favicon href
      over time, not by screenshotting the page (tab chrome is not in screenshots).
- [ ] **B7.** Klemen approved everything else as-is on 2026-08-25 ("everything else
      is good"), so the lumpy-canopy and radii-drift flaws in B2 are folded into
      B6 as optional fixes rather than separate work.

## Track C — the season seam

- [ ] **C1.** `content/season.ts`: derive season from date. One exported function,
      one type. No React in it.
- [ ] **C2.** Season exposed as CSS custom properties on `<html>`, so CSS reads it
      without prop drilling.
- [ ] **C3.** Favicon follows the season (Track B variants).
- [ ] **C4.** Intro splash tints to the season.
- [ ] **C5.** `ProgressRail` reads the season accent instead of hardcoded `bg-life`.

### Constraints on Track C, discovered 2026-08-25

- **The site is a static export.** `next.config.mjs` sets `output: "export"` and
  deploys to GitHub Pages via `.github/workflows/deploy.yml`. So the season CANNOT
  be computed at build time and stay correct: a site built in August and not rebuilt
  shows summer forever. The season must be resolved in the browser at runtime, or a
  scheduled rebuild must exist. This is the central design question for C1 and the
  grilling should settle it.
- **Static export also means the favicon is a static file.** Swapping it by season
  needs client-side JS rewriting the `<link rel="icon">` href, which is a real
  decision with a real cost, not a free win.
- **`vercel.json` contradicts the export config.** It declares
  `outputDirectory: ".next"`, but `output: "export"` writes to `out/`. One of these
  two deploy paths is dead. Worth resolving, separate from the season work.

Track C is the seam the architecture pass (Track D) will grill. Its shape is not
final until D has run.

## Track D — architecture pass

Run `/mattpocock-skills:improve-codebase-architecture`. Local HTML report, not a
claude.ai Artifact.

**Report written 2026-08-25:**
`/var/folders/4l/bt_60jsd1471c75_jy27plp40000gn/T/architecture-review-20260825-202126.html`
Six candidates. Top recommendation: build the accent seam (D8), but delete the dead
code (D1) first, with the tsconfig one-liner (D6) as prerequisite.

Note: the `arch-explorer` subagent went idle twice without delivering a report and
was stopped. All findings below were produced directly instead.

Known debt going in, to be confirmed or overruled by the scan:

- [x] **D1.** ~~Four overlapping life data files, no clear owner.~~ **CONFIRMED AND
      WORSE THAN STATED.** All four have ZERO importers, and so do five modules in
      `components/life/`, `SkillCloud.tsx`, `Timeline.tsx`, `styles/life.css`, and
      `aiSkills` in `workData.ts`. Verified by tracing every import in `app/` and
      `components/`. **1267 of 4313 lines (29%) are dead.** `Orchestrator.tsx`
      hardcodes all Life content inline and imports none of them.
      Four of the dead files carry `theme.accent: "#FF7A59"`, so editing "the theme
      data" during the season work would change nothing on screen.
- [ ] **D2.** `WorkClient.tsx` at 430 lines doing data, layout and animation at once.
      Confirmed: six concerns. Downgraded to "worth exploring" — naive extraction
      produces five SHALLOW modules, which is a lateral move, not a deepening.
- [x] **D3.** Dead components confirmed. Folded into D1's inventory.
- [x] **D4.** ~~`out/` build output committed to the repo.~~ **WRONG, retracted
      2026-08-25.** `git ls-files out` returns 0 files and `.gitignore` line 20 has
      `/out/`. It is an untracked local build dir. No action needed.
- [ ] **D5.** `klemen-job-search/.claude` is a nested agent config that shadows the
      root one. Klemen's own global rule forbids this.
- [x] **D6. FIXED.** `exclude` widened to `["node_modules","klemen-job-search","out"]`.
      `tsc --noEmit` now reports 0 errors. Original finding follows.
      ~~Root `tsconfig.json` includes `**/*.ts` and excludes only
      `node_modules`, so it swallows the nested `klemen-job-search/` subproject.
      Result: `tsc --noEmit` reports 83 errors, all 83 from that subproject and
      zero from the site, and **`pnpm build` fails locally** at the type-check
      step on `klemen-job-search/marble/drizzle.config.ts`.
      **Scope, verified 2026-08-25: this is LOCAL ONLY.** `klemen-job-search/` is
      untracked (`git ls-files` returns 0), so CI never sees it and the GitHub
      Pages build passes. The cost is that Klemen cannot run `pnpm build` to check
      his own site before pushing. Fix is one line in `tsconfig.json` `exclude`.
- [ ] **D8.** **No seam for "the site's current accent."** Verified 2026-08-25 by
      grep. One colour, `#FF7A59`, is restated in SEVEN notations across 24 sites:
      the Tailwind token (`tailwind.config.ts:13`), Tailwind classes (only 3 uses
      total), an RGB-triplet CSS var (`app/page.tsx:69`), a baked rgba in an
      arbitrary Tailwind value (`app/page.tsx:81`), 14 raw `rgba()` SVG attributes
      (`components/life/Orchestrator.tsx:30,37-49`), a `theme.accent` hex field in
      two data files (`lifeV2Data.ts:57,102`, `lifeV3Data.ts:26,65`), and a
      separate CSS variable system (`styles/life.css:2` `--sun-1`).
      The `work` token (`#0A2540`) is effectively DEAD: the Work half of the
      landing actually uses white (`app/page.tsx:37`).
      **Direct consequence for Track C: a season accent would have to be restated
      in all seven notations.** This is the single biggest blocker to the seasons
      idea and the strongest deepening candidate.
- [ ] **D9.** **Live reduced-motion bug, caused by D8.** `app/page.tsx:99` disables
      the Work half's hover glow via a selector targeting
      `rgba(10,37,64,0.35)` — but the element at `app/page.tsx:49` uses
      `rgba(255,255,255,0.35)`. The selector matches nothing. When the Work accent
      was changed from navy to white, the element was updated and the override was
      not. So users who ask for reduced motion still get the Work glow.
      The blanket rule in `globals.css` does not save it: that kills `animation`
      and `transition`, not `filter`. The Life half's override is correct, which is
      exactly why this went unnoticed.
- [ ] **D7.** The last CI run (2026-07-06, "Update README.md") failed, but at the
      *deploy* step, not the build: `actions/deploy-pages` returned "Deployment
      failed, try again later." A transient GitHub Pages error. Consequence:
      klemenkocic.com is still serving the 2026-07-02 build, and that README
      change never went live. Needs a workflow re-run, nothing more.

## Track E — the metaphor in the pages

Shape depends on Track D. Do not start before D has run.

- [ ] **E1.** Work timeline as growth rings.
- [ ] **E2.** Life sections carry seasonal progression.
- [ ] **E3.** `ProgressRail` as a trunk that grows with scroll.

## Track F — LinkedIn banner

- [x] **F1.** Banner rendered, TEXT ONLY. Klemen ruled out the tree and any
      decoration on 2026-08-25: "only the text, no images or anything else",
      same restraint as the old "keep it simple" banner. No mark, no glow, no
      grain, no name/title line (LinkedIn already shows the name above the banner).
      Two options saved, both verified against the desktop profile-photo overlap:
        `profile/linkedin/banner-1line-1584x396.png` (46px, one line)
        `profile/linkedin/banner-2line-1584x396.png` (58px, two lines)
      Superseded tree version deleted.
- [ ] **F2.** Show it to Klemen. He uploads it himself. Agent never posts.
- [ ] **F3.** Update the stale reference in `profile/linkedin/rewrite-guide.md:387`,
      which still records the banner as "keep it simple".

## Track G — verification

- [ ] **G1.** `pnpm build` passes. **BLOCKED on D6.** It currently fails at the
      type-check step on `klemen-job-search/`, not on site code. The site itself
      compiles clean ("✓ Compiled successfully").
- [x] **G2.** Splash checked in a real browser at 320 / 390 / 768 / 1440.
      `document.scrollWidth` equals viewport at all four, all three lines single-line.
- [~] **G3.** Favicon link verified in the rendered `<head>` and `/icon.svg`
      confirmed serving 200. Not yet eyeballed in an actual browser tab — headless
      screenshots do not render tab chrome. Klemen should confirm visually.
- [x] **G4.** Reduced-motion path checked with Chrome media emulation:
      `reduce` → splash gone in 110ms; `no-preference` → 4611ms, matching the
      intended 500 + 3400 + 700. **Open question for Klemen: 4.6s is long.**

---

## Not doing

- Publishing anything to LinkedIn. Klemen uploads the banner himself.
- Touching the CV or `resume.json`. This is a site and motto change, not a
  positioning change.
- Claude.ai Artifacts. Local files only.
