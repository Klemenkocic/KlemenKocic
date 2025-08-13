export type Chapter = {
  id: string;
  title: string;
  years?: string;
  body: string;
  dir: "horizontal" | "vertical";
  theme: {
    bg: string;
    fg: string;
    accent: string;
    cursor: string;
    effects?: Array<"parallax" | "stagger" | "typewriter" | "glass" | "grain" | "noise">;
  };
  images: string[];
  route?: { projection: "world" | "europe"; coords: Array<[number, number]> };
};

export const chapters: Chapter[] = [
  {
    id: "born",
    title: "Born in Ljubljana",
    years: "2000",
    body:
      "I was born in Ljubljana, Slovenia, on 21.06.2000. That’s where my story begins—curiosity, family, and a sense that the world was bigger than any one place.",
    dir: "horizontal",
    theme: { bg: "dawn", fg: "#ffffff", accent: "#FF7A59", cursor: "compass", effects: ["grain"] },
    images: [
      "/images/life/born/img1.svg",
      "/images/life/born/img2.svg",
      "/images/life/born/img3.svg",
    ],
  },
  {
    id: "elementary",
    title: "Elementary Years",
    body:
      "I grew up outside the capital and spent most of my childhood in motion—basketball after school, aikido drills, and rugby on weekends. Sport taught me grit, teamwork, and joy.",
    dir: "vertical",
    theme: { bg: "court", fg: "#ffffff", accent: "#FFB020", cursor: "ball", effects: [] },
    images: [
      "/images/life/elementary/img1.svg",
      "/images/life/elementary/img2.svg",
      "/images/life/elementary/img3.svg",
    ],
  },
  {
    id: "highschool",
    title: "High School — Gimnazija Poljane",
    body:
      "Moving to the capital for high school opened everything up. At Gimnazija Poljane, I got a broad education—science, tech, music—fuel for a mind that likes mixing disciplines.",
    dir: "horizontal",
    theme: { bg: "notebook", fg: "#ffffff", accent: "#6AB6FF", cursor: "pen", effects: ["stagger"] },
    images: [
      "/images/life/highschool/img1.svg",
      "/images/life/highschool/img2.svg",
      "/images/life/highschool/img3.svg",
    ],
  },
  {
    id: "eurotrip",
    title: "Eurotrip",
    body:
      "After graduation I set off with friends on my first long adventure. That trip cemented my love of traveling light, meeting people, and finding my way in unfamiliar places.",
    dir: "vertical",
    theme: { bg: "map-world", fg: "#ffffff", accent: "#FF7A59", cursor: "plane", effects: ["parallax"] },
    images: [
      "/images/life/eurotrip/img1.svg",
      "/images/life/eurotrip/img2.svg",
      "/images/life/eurotrip/img3.svg",
    ],
    route: {
      projection: "europe",
      coords: [
        [14.5058, 46.0569],
        [26.1025, 44.4268],
        [14.4378, 50.0755],
        [17.1077, 48.1486],
        [13.405, 52.52],
        [4.9041, 52.3676],
        [4.3517, 50.8503],
        [2.3522, 48.8566],
        [8.5417, 47.3769],
        [14.5058, 46.0569],
      ],
    },
  },
  {
    id: "university",
    title: "University — Business meets Tech",
    body:
      "I chose International Business because it’s versatile—and in parallel I doubled down on technology. Code and markets. People and systems. It clicked.",
    dir: "horizontal",
    theme: { bg: "type", fg: "#ffffff", accent: "#8AE7B2", cursor: "keyboard", effects: ["typewriter"] },
    images: [
      "/images/life/university/img1.svg",
      "/images/life/university/img2.svg",
      "/images/life/university/img3.svg",
    ],
  },
  {
    id: "korea",
    title: "South Korea — First Big Solo Leap",
    body:
      "In late 2021 I went on exchange to Korea—the furthest place I applied to. The culture shock was real, but so was the growth. One of the best decisions I’ve made.",
    dir: "vertical",
    theme: { bg: "hangul", fg: "#ffffff", accent: "#FF9BC8", cursor: "chopsticks", effects: [] },
    images: [
      "/images/life/korea/img1.svg",
      "/images/life/korea/img2.svg",
      "/images/life/korea/img3.svg",
    ],
  },
  {
    id: "portugal",
    title: "Portugal — Lisbon Semester (+ GDC hop)",
    body:
      "Back in Europe, I chose Lisbon. Surf before class, pastel de nata after, and a circle of new friends. We even squeezed in a quick hop to San Francisco for GDC.",
    dir: "horizontal",
    theme: { bg: "azulejo", fg: "#ffffff", accent: "#7FD1FF", cursor: "wave", effects: ["parallax"] },
    images: [
      "/images/life/portugal/img1.svg",
      "/images/life/portugal/img2.svg",
      "/images/life/portugal/img3.svg",
    ],
  },
  {
    id: "iberia",
    title: "Iberian–Mediterranean Road Story",
    body:
      "With the same crew from my first big trip, we set out again—long miles, good music, and a coastline that kept surprising us.",
    dir: "vertical",
    theme: { bg: "map-europe", fg: "#ffffff", accent: "#FFD166", cursor: "road", effects: ["parallax"] },
    images: [
      "/images/life/iberia/img1.svg",
      "/images/life/iberia/img2.svg",
      "/images/life/iberia/img3.svg",
    ],
    route: {
      projection: "europe",
      coords: [
        [-9.1427, 38.7369],
        [-6.3373, 38.917],
        [-5.9845, 37.3891],
        [-4.7794, 37.8882],
        [-3.7038, 40.4168],
        [-0.3763, 39.4699],
        [2.1734, 41.3851],
        [5.3698, 43.2965],
        [7.2619, 43.7102],
        [9.19, 45.4642],
        [14.5058, 46.0569],
      ],
    },
  },
  {
    id: "sweden",
    title: "Sweden — Learning Up Close",
    body:
      "My team was based in Stockholm, so I moved up for a while to learn directly from the CEO. David’s mentorship was pivotal—I’m incredibly grateful.",
    dir: "horizontal",
    theme: { bg: "glass", fg: "#ffffff", accent: "#BEE3F8", cursor: "snow", effects: ["glass"] },
    images: [
      "/images/life/sweden/img1.svg",
      "/images/life/sweden/img2.svg",
      "/images/life/sweden/img3.svg",
    ],
  },
  {
    id: "asia",
    title: "Asia Loop — With Melina and Friends",
    body:
      "Next, we traveled through Asia together: Korea, Japan, Vietnam, Malaysia, Thailand, Singapore. Days blurred into street food, trains, and laughter—the kind of trip where you remember flavors as much as places.",
    dir: "vertical",
    theme: { bg: "collage", fg: "#ffffff", accent: "#FFC6A8", cursor: "noodles", effects: ["stagger"] },
    images: [
      "/images/life/asia/img1.svg",
      "/images/life/asia/img2.svg",
      "/images/life/asia/img3.svg",
    ],
  },
  {
    id: "valencia",
    title: "Valencia — Warm Base, New Direction",
    body:
      "Since we both worked remotely, we moved to Valencia. Sunshine, deep work, and a decision: give the sports industry an honest shot.",
    dir: "horizontal",
    theme: { bg: "sunburst", fg: "#ffffff", accent: "#FFBE0B", cursor: "sun", effects: [] },
    images: [
      "/images/life/valencia/img1.svg",
      "/images/life/valencia/img2.svg",
      "/images/life/valencia/img3.svg",
    ],
  },
  {
    id: "berlin",
    title: "Berlin — MTM Chapter",
    body:
      "My path pulled us to Berlin to join MTM—at the time, the best personal training studio I knew. Flights from Valencia turned into a real move. A global city with generous people.",
    dir: "vertical",
    theme: { bg: "neon-grid", fg: "#ffffff", accent: "#7C3AED", cursor: "tower", effects: ["stagger"] },
    images: [
      "/images/life/berlin/img1.svg",
      "/images/life/berlin/img2.svg",
      "/images/life/berlin/img3.svg",
    ],
  },
  {
    id: "munich",
    title: "Munich — Building Something Lasting",
    body:
      "In Berlin I met Alex, who wanted to open a gym in Munich. My Bavarian partner didn’t need convincing. We moved—and this time we’re staying. Munich has a magic of its own (and an excellent airport).",
    dir: "horizontal",
    theme: { bg: "alpine", fg: "#ffffff", accent: "#2DD4BF", cursor: "pretzel", effects: [] },
    images: [
      "/images/life/munich/img1.svg",
      "/images/life/munich/img2.svg",
      "/images/life/munich/img3.svg",
    ],
  },
  {
    id: "next",
    title: "What’s Next? — Detour",
    body:
      "I’m focused on a problem I’ve felt many times: planning a multi-day trip in a new country is hard and time-consuming. I’m building toward a better way—let’s see where it leads.",
    dir: "vertical",
    theme: { bg: "horizon", fg: "#ffffff", accent: "#94A3B8", cursor: "compass", effects: [] },
    images: [
      "/images/life/next/img1.svg",
      "/images/life/next/img2.svg",
      "/images/life/next/img3.svg",
    ],
  },
];


