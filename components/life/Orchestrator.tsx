"use client";

export default function Orchestrator() {
  return (
    <main className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">
      {/* Curved Timeline - Hidden on mobile */}
      <svg
        className="hidden md:block absolute left-0 top-0 h-full pointer-events-none"
        width="100"
        height="100%"
        viewBox="0 0 100 3600"
        preserveAspectRatio="xMinYMin meet"
        style={{ zIndex: 0 }}
      >
        {/* Curved path - river flowing down */}
        <path
          d="M 30 50
             Q 50 200, 40 350
             Q 30 500, 50 650
             Q 60 800, 40 950
             Q 25 1100, 45 1250
             Q 55 1400, 35 1550
             Q 20 1700, 40 1850
             Q 50 2000, 35 2150
             Q 25 2300, 40 2450
             Q 50 2600, 40 2750
             Q 35 2850, 40 2950
             Q 50 3100, 35 3250
             Q 25 3400, 40 3550"
          stroke="rgba(255, 122, 89, 0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Dots for each chapter */}
        <circle cx="30" cy="50" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="350" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="50" cy="650" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="950" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="45" cy="1250" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="35" cy="1550" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="1850" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="35" cy="2150" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="2450" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="2750" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="2950" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="35" cy="3250" r="5" fill="rgba(255, 122, 89, 0.7)" />
        <circle cx="40" cy="3550" r="5" fill="rgba(255, 122, 89, 0.7)" />
      </svg>
      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Chapters
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I live to learn and experience. New cities, new teams, new ideas, new people. Everything and everybody hands me a different set of questions. I go where curiosity points, try to leave things clearer than I found them, and keep my feet in motion so my mind stays open. If there&apos;s a thread through all of this, it&apos;s simple: notice more, help more, and keep things simple enough that people actually use what we build.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Childhood
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I grew up outside the capital of Slovenia. I spent my afternoons playing basketball, Aikido and Rugby. Rugby in Particular taught me companionship, brotherhood and discipline. That&apos;s where I learned that encouragement can change the course of a day.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          High School
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          High school was the first time I spent most of my days in the capital. At Gimnazija Poljane I learned to mix worlds: music with math, language with logic. I became the person who gathers friends around a half-formed idea and says, &quot;let&apos;s try.&quot; I wasn&apos;t the best at any one thing, but I was good at connecting dots and creating momentum. It&apos;s also when I learned what real friendship looks like.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Eurotrip
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          We packed light, grabbed the cheapest tickets we could find, and pieced a route together with train timetables and luck. Mornings started at new platforms; nights ended in hostels. We filmed everything badly and loved it anyway. I think of that trip as a rehearsal for independence: plan just enough, improvise the rest, be kind to strangers, and say yes more than no. It&apos;s one of my core memories.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          University
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I chose business for breadth and learned to code for leverage. Clarity beats complexity; a rough demo convinces faster than a perfect deck, and progress mostly comes from removing what doesn&apos;t help. The lectures were useful, but the small projects we shipped with friends changed me. I jumped into overnight build competitions and saw how much three to four focused people can do when they align and move fast.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          South Korea
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          First time I flew alone. I landed to silent airport corridors and went straight into two weeks of quarantine. Outside my window the city moved in a language I couldn&apos;t read. I stumbled through menus, everything spicy, smiling when words failed. I listened more than I spoke, got lost, got helped, fell in love and found a rhythm. Some nights I counted the days to home; most days I wished I&apos;d come sooner. I left with new friends and a deeper respect for what it takes to start again in someone else&apos;s world.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Lisbon
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          Two weeks after coming home from South Korea, I moved to Lisbon for eight months to study at ISCTE. Lisbon gave me community and momentum. I found a circle that fed my curiosity and pushed me further. I learned to work long and focused, and I learned to switch off: surf in the morning, pastel de nata after class, dinners that turned into plans. A quick hop to San Francisco for GDC put me in big-tech rooms and reminded me that horizons are invitations, not stop signs. Joy turned out to be excellent fuel for focus.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Stockholm
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I moved closer to the cold on purpose. I wanted to learn directly from the CEO and CTO, to sit in rooms where feedback was straight and the bar rose the moment you reached it. There I learned what lean work feels like: clear priorities, small batches, fast loops. I learned to make decisions without drama and to own them. I saw how culture compounds when leaders model it every day. That mentorship sharpened what matters to me: clear goals, tight loops, and kindness that doesn&apos;t dodge the truth.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Asia Once Again
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          Moving from country to country, city to city, I realized travel isn&apos;t a hobby for me, rather it&apos;s how I want to live and learn. With friends it became even better. From dakgalbi and takoyaki to bánh mì, nasi lemak, pad thai, and popiah, my taste buds recalibrated for good. I learned that the right company can turn anywhere into a makeshift home, and that you remember places by their flavors and faces long after the street names fade.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Valencia
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          Living with my girlfriend for the first time, we chose sun on purpose and moved to Valencia. I joined a jiu-jitsu club, worked on the mats and off them, and started asking real questions about the life I want to build. I learned compromise and rhythm: groceries, cooking, training, deep work, evening walks and most importantly a lot of Patatas Bravas. Small rituals that make a day feel well lived. I can design the life I want and let work fit around it.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Berlin
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          The move ended up more influential than I expected. It took six flights from Valencia to Berlin to move everything we owned, but we got it done. I started working in a one-on-one coaching studio that cared about craft and its people. The team is one I won&apos;t forget, and most days started before the city did. Discipline changed shape for me. It became consistency, attention, and presence. I learned to teach with patience, to keep a technical lens while working with real human bodies and real human days. Early mornings, careful notes, steady progress. Berlin itself was a joy to live in: open, creative, and full of small pockets that feel like their own worlds. I&apos;d recommend living there at least once. It gave me energy and new habits I still carry.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Munich
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I met a gym founder in Berlin, and together with him and his cofounder we opened a gym in Munich. I helped build the tech under it: a booking and progress app, and tools that made coaches&apos; days smoother and clients&apos; journeys clearer. I found out what long, hard days really feel like. From agreeing to arguing, I experienced startup life first hand and learned how to work through conflict without losing respect. I also learned that home can be both a place and a project. Munich feels like both. My girlfriend and I decided to stay for the next few years. The Alps and the lakes are close, the airport and trains make travel easy, and both our families are within reach. It&apos;s a city that fits how we want to live.
        </p>
      </section>

      <section className="relative space-y-3 sm:space-y-4 md:pl-24" style={{ zIndex: 1 }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Outro
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-foreground/85 max-w-3xl">
          I don&apos;t try to write the ending. My job is to set the stage: do the work, meet people halfway, keep showing up, and leave space for opportunity to land. The rest isn&apos;t mine to control, and I&apos;m grateful for that. It keeps surprise alive. The next honest step is enough. I&apos;ll keep noticing, helping, and moving toward the places that teach me.
        </p>
          </section>
    </main>
  );
}