# Post — Agentic Engineering Course

**Status:** Posted
**Pillar:** Building in Public

---

Just finished the Agentic Engineering course from Joshua Kerievsky and Industrial Logic, Inc. Thank you for trusting me to provide feedback.

I highly suggest writing to them if you want to learn any of the following, and more:

- Agents amplify what they find. Point an agent at clean code and it stays clean; point it at a mess and every feature makes it worse. Invest in design, because the agent will extend whatever's already there.

- Guidance tells, guardrails enforce. You need both. Instructions (CLAUDE.md / AGENTS.md) help an agent try; hooks make the important things guaranteed. Simple test: if a script can catch it reliably, make it a guardrail. If it needs judgment, keep it guidance.

- Design First beats feature-first. Assess the design and refactor before adding the feature.

- "All tests pass" ≠ good tests. Mutation testing exposes tests that catch nothing. By default, agents write useless tests (getter/setter roundtrips) and tests coupled to internals (spies/mocks). The fix: test observable behavior, not implementation.

- Build a layered safety net, not a pile of rules. Block destructive commands before they run, lint after each edit, run tests + dead-code on finish gate at commit, mutation-test periodically. Each layer catches what the others can't.

- The boring structural checks are where agents fail silently. Dead code, duplication, runaway complexity, architecture drift. They pass tests and lint while quietly rotting a codebase.

The throughline: You + Agents > Agents. You can go a lot faster without dropping your quality bar. But only if you build the systems that make good design the path of least resistance.

If you're an engineering leader trying to give your team a real understanding of AI safety, and the deterministic things you can do today to ship fast and safe, I'd genuinely reach out to them.
