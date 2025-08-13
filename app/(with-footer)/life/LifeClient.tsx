"use client";

import { chapters } from "@/content/lifeV3Data";

export default function LifeClient() {
  return (
    <main>
      <h1>Life</h1>
      <ol>
        {chapters.map((c, i) => (
          <li key={c.id}>
            <section>
              <h2>
                {i + 1}. {c.title}
                {c.years ? ` (${c.years})` : ""}
              </h2>
              <p>{c.body}</p>
            </section>
            {i < chapters.length - 1 ? <hr /> : null}
          </li>
        ))}
      </ol>
    </main>
  );
}


