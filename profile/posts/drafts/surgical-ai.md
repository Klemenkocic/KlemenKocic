# Post — Surgical AI

**Status:** Draft
**Pillar:** Augmentation Thinking

---

I'm building an AI strength training coach called Charles. One thing people ask me is why there is no chatbot in the app. That was on purpose. If someone wants to ask a training question, they can already go to ChatGPT. That is not where the value is.

The value is in knowing when to use an LLM and when not to.

When Charles generates a training plan, six layers of deterministic logic run before the model is even involved. Equipment, injuries, movement capacity, training history, phase rules, recovery state. All of that is code. If-else trees. Structured validation. Things that can be solved deterministically should be solved deterministically.

The model only steps in where rules genuinely run out. When the context is too nuanced for a conditional. When there are two valid options and the right answer depends on things that are hard to formalise. That is where an LLM earns its place.

I think there is a real nuance here that gets lost. It is not about using AI or not using AI. It is about understanding which parts of your system need reasoning and which parts just need structure. Getting that line right is most of the work.
