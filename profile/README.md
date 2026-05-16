# Profile — Klemen Kocic

Canonical positioning, voice, and content. The website (`content/workData.ts`, `content/educationData.ts`), the CV (`cv/master/Klemen_Kocic_CV.yaml` — rendered via RenderCV), and the LinkedIn profile are all downstream of these documents. When something changes here, propagate it there.

**Master positioning (committed 2026-05-15):** Translator who can build — Forward-Deployed Engineer / AI Solutions Engineer / AI Solutions Consultant shape. People-person identity foregrounded, technical credibility (Luminosity substrate, shipped products) as the backing layer.

## Source-of-truth docs

- [identity.md](identity.md) — one-liner, bios, thesis, differentiators, what I'm NOT
- [experience.md](experience.md) — career timeline with outcomes and lessons per role
- [skills.md](skills.md) — skills taxonomy, ordered by what I lead with
- [writing.md](writing.md) — published pieces register: argument, framework, key quote per piece
- [values.md](values.md) — work philosophy and character
- [voice-guide.md](voice-guide.md) — how I write (dictate, no dashes, no hooks)

## LinkedIn — [linkedin/](linkedin/)

- [strategy.md](linkedin/strategy.md) — content strategy: cadence, pillars, voice rules, topic bank
- [rewrite-guide.md](linkedin/rewrite-guide.md) — section-by-section rewrite reference for the public profile

## Posts — [posts/](posts/)

- [drafts/](posts/drafts/) — unpublished post drafts, slug-named
- [posted/](posts/posted/) — published posts, slug-named
- [rollout-plans/](posts/rollout-plans/) — multi-post campaign plans (e.g. Charles)

When a draft ships, move it from `drafts/` to `posted/`.

## What lives where — propagation map

| If you update… | Edit… | Then propagate to… |
|---|---|---|
| Headline positioning | `identity.md` | `content/workData.ts` (intro, role labels), LinkedIn About, `cv/master/Klemen_Kocic_CV.yaml`, BusinessCard tagline |
| A role's bullets / dates | `experience.md` | `content/workData.ts` `experiences`, `cv/master/Klemen_Kocic_CV.yaml`, LinkedIn Experience |
| Skills | `skills.md` | `content/workData.ts` `skills` + `aiEngineering` + `aiTools`, `cv/master/Klemen_Kocic_CV.yaml` skills, LinkedIn Skills |
| A new published piece | `writing.md` | `content/workData.ts` `blogPosts`, LinkedIn Publications |
| A project status/URL change | `identity.md` (long bio) | `content/workData.ts` `projects[]`, `cv/master/Klemen_Kocic_CV.yaml` projects |
| Voice / writing rules | `voice-guide.md` | (just here — used as input when drafting) |
| LinkedIn-only content | `linkedin/strategy.md`, `linkedin/rewrite-guide.md` | LinkedIn directly |

## When in doubt

The hierarchy of truth: **identity.md > experience.md > everything else**. If `experience.md` and `workData.ts` disagree, `experience.md` wins and `workData.ts` needs updating.
