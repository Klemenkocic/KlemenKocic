# Post — Rules Don't Scale

**Status:** Draft
**Pillar:** Augmentation Thinking

---

One thing I've learned building with AI is that rules don't scale.

If you try to control an AI system by loading it with more and more constraints, something will get missed. Always. You add a rule for edge case A, edge case B slips through. You patch B and now C appears. It is a losing game.

The approach that actually works is structural. Instead of telling the system "remember to do X," you build it so X happens automatically. The structure makes it impossible to forget.

A simple example. When a user triggers a change in a system I'm building, it doesn't just make the change. It invalidates the cache, updates the local database, syncs with the server, and navigates to the right screen. All in one function call. The structure makes it impossible to skip.

I think this applies anywhere agents are involved. In a product, in a team, in a company, the same pattern shows up. The moment you catch yourself writing "always remember to," you should stop and ask if the structure can handle that for you instead.
