export type ChapterTheme = {
  cursor:
    | "compass"
    | "ball"
    | "pen"
    | "plane"
    | "keyboard"
    | "chopsticks"
    | "wave"
    | "road"
    | "snow"
    | "noodles"
    | "sun"
    | "tower"
    | "pretzel";
  bg: string; // semantic key for background chrome
  accent: string; // tailwind color class or hex
};

export type ChapterLayout =
  | "standard"
  | "sticky-map"
  | "h-scroll";

export type ChapterAnimation =
  | "parallax"
  | "stagger"
  | "typewriter"
  | "panel"
  | "wave"
  | "grid"
  | "diagonal"
  | "minimal";

export type LifeChapter = {
  id: number;
  title: string;
  years?: string;
  body: string;
  theme: ChapterTheme;
  images: string[]; // 3 image placeholders
  layout: ChapterLayout;
  animation: ChapterAnimation;
  // Map-specific
  route?: [number, number][]; // [lon, lat]
  routeLabels?: string[]; // optional city labels for map rendering only
  projectionName?: "world-mercator" | "europe-lambert";
};

export const chaptersV2: LifeChapter[] = [
  {
    id: 1,
    title: "Born in Ljubljana (21.06.2000)",
    years: "2000",
    body:
      "I was born in Ljubljana, Slovenia, on June 21, 2000. That’s where my story begins—curiosity, family, and a sense that the world was bigger than any one place.",
    theme: { cursor: "compass", bg: "dawn", accent: "#FF7A59" },
    images: [
      "/images/life/01-born/img1.svg",
      "/images/life/01-born/img2.svg",
      "/images/life/01-born/img3.svg",
    ],
    layout: "standard",
    animation: "parallax",
  },
  {
    id: 2,
    title: "Elementary Years",
    years: "2006–2014",
    body:
      "I grew up outside the capital and spent most of my childhood in motion—basketball after school, aikido drills, and rugby on weekends. Sport taught me grit, teamwork, and joy.",
    theme: { cursor: "ball", bg: "court", accent: "#FFB020" },
    images: [
      "/images/life/02-elementary/img1.svg",
      "/images/life/02-elementary/img2.svg",
      "/images/life/02-elementary/img3.svg",
    ],
    layout: "standard",
    animation: "stagger",
  },
  {
    id: 3,
    title: "High School — Gimnazija Poljane",
    years: "2014–2018",
    body:
      "Moving to the capital for high school opened everything up. At Gimnazija Poljane, I got a broad education—science, tech, music—fuel for a mind that likes mixing disciplines.",
    theme: { cursor: "pen", bg: "notebook", accent: "#6AB6FF" },
    images: [
      "/images/life/03-highschool/img1.svg",
      "/images/life/03-highschool/img2.svg",
      "/images/life/03-highschool/img3.svg",
    ],
    layout: "standard",
    animation: "stagger",
  },
  {
    id: 4,
    title: "Eurotrip (show route on map only)",
    years: "2018",
    body:
      "After graduation I set off with friends on my first long adventure. That trip cemented my love of traveling light, meeting people, and finding my way in unfamiliar places.",
    theme: { cursor: "plane", bg: "map-world", accent: "#FF7A59" },
    images: [
      "/images/life/04-eurotrip/img1.svg",
      "/images/life/04-eurotrip/img2.svg",
      "/images/life/04-eurotrip/img3.svg",
    ],
    layout: "sticky-map",
    animation: "parallax",
    projectionName: "europe-lambert",
    route: [
      [14.5058, 46.0569], // Ljubljana
      [26.1025, 44.4268], // Bucharest
      [14.4378, 50.0755], // Prague
      [17.1077, 48.1486], // Bratislava
      [13.405, 52.52], // Berlin
      [4.9041, 52.3676], // Amsterdam
      [4.3517, 50.8503], // Brussels
      [2.3522, 48.8566], // Paris
      [8.5417, 47.3769], // Zurich
      [14.5058, 46.0569], // Ljubljana
    ],
    routeLabels: [
      "Ljubljana",
      "Bucharest",
      "Prague",
      "Bratislava",
      "Berlin",
      "Amsterdam",
      "Brussels",
      "Paris",
      "Zurich",
      "Ljubljana",
    ],
  },
  {
    id: 5,
    title: "University — Business meets Tech",
    years: "2018–2021",
    body:
      "I chose International Business because it’s versatile—and in parallel I doubled down on technology. Code and markets. People and systems. It clicked.",
    theme: { cursor: "keyboard", bg: "type", accent: "#8AE7B2" },
    images: [
      "/images/life/05-university/img1.svg",
      "/images/life/05-university/img2.svg",
      "/images/life/05-university/img3.svg",
    ],
    layout: "standard",
    animation: "typewriter",
  },
  {
    id: 6,
    title: "South Korea — First Big Solo Leap",
    years: "2021–2022",
    body:
      "In late 2021 I went on exchange to Korea—the farthest place I applied to. The culture shock was real, but so was the growth. I remember it as one of the best decisions I’ve made.",
    theme: { cursor: "chopsticks", bg: "hangul", accent: "#FF9BC8" },
    images: [
      "/images/life/06-korea/img1.svg",
      "/images/life/06-korea/img2.svg",
      "/images/life/06-korea/img3.svg",
    ],
    layout: "standard",
    animation: "panel",
  },
  {
    id: 7,
    title: "Portugal — Lisbon Semester (+ GDC hop)",
    years: "2022",
    body:
      "Back in Europe, I chose Lisbon. Surf before class, pastel de nata after, and a circle of new friends. We even squeezed in a quick hop to San Francisco for GDC—wild, inspiring week.",
    theme: { cursor: "wave", bg: "azulejo", accent: "#7FD1FF" },
    images: [
      "/images/life/07-portugal/img1.svg",
      "/images/life/07-portugal/img2.svg",
      "/images/life/07-portugal/img3.svg",
    ],
    layout: "standard",
    animation: "wave",
  },
  {
    id: 8,
    title: "Iberian–Mediterranean Road Story (map only)",
    years: "2022",
    body:
      "With the same crew from my first big trip, we set out again—long miles, good music, and a coastline that kept surprising us.",
    theme: { cursor: "road", bg: "map-europe", accent: "#FFD166" },
    images: [
      "/images/life/08-iberian-mediterranean/img1.svg",
      "/images/life/08-iberian-mediterranean/img2.svg",
      "/images/life/08-iberian-mediterranean/img3.svg",
    ],
    layout: "h-scroll",
    animation: "parallax",
    projectionName: "europe-lambert",
    route: [
      [-9.1427, 38.7369], // Lisbon
      [-8.6291, 41.1579], // Porto
      [-3.7038, 40.4168], // Madrid
      [-0.3763, 39.4699], // Valencia
      [2.1734, 41.3851], // Barcelona
      [5.3698, 43.2965], // Marseille
      [7.2619, 43.7102], // Nice
      [8.9463, 44.4056], // Genoa
      [9.1900, 45.4642], // Milan
      [12.3155, 45.4408], // Venice
      [13.7700, 45.6495], // Trieste
      [14.5058, 46.0569], // Ljubljana
    ],
    routeLabels: [
      "Lisbon",
      "Porto",
      "Madrid",
      "Valencia",
      "Barcelona",
      "Marseille",
      "Nice",
      "Genoa",
      "Milan",
      "Venice",
      "Trieste",
      "Ljubljana",
    ],
  },
  {
    id: 9,
    title: "Sweden — Learning Up Close",
    years: "2022–2023",
    body:
      "My team was based in Stockholm, so I moved up for a while to learn directly from the CEO. David’s mentorship was pivotal—I’m deeply grateful for everything he taught me.",
    theme: { cursor: "snow", bg: "glass", accent: "#BEE3F8" },
    images: [
      "/images/life/09-sweden/img1.svg",
      "/images/life/09-sweden/img2.svg",
      "/images/life/09-sweden/img3.svg",
    ],
    layout: "standard",
    animation: "grid",
  },
  {
    id: 10,
    title: "Asia Loop — With Melina and Friends",
    years: "2023",
    body:
      "Next, we traveled through Asia together. Days blurred into street food, trains, and laughter—the kind of trip where you remember flavors as much as places.",
    theme: { cursor: "noodles", bg: "collage", accent: "#FFC6A8" },
    images: [
      "/images/life/10-asia-loop/img1.svg",
      "/images/life/10-asia-loop/img2.svg",
      "/images/life/10-asia-loop/img3.svg",
    ],
    layout: "standard",
    animation: "stagger",
  },
  {
    id: 11,
    title: "Valencia — Warm Base, New Direction",
    years: "2023",
    body:
      "Since we both worked remotely, we moved to Valencia. Sunshine, deep work, and a decision: give the sports industry an honest shot.",
    theme: { cursor: "sun", bg: "sunburst", accent: "#FFBE0B" },
    images: [
      "/images/life/11-valencia/img1.svg",
      "/images/life/11-valencia/img2.svg",
      "/images/life/11-valencia/img3.svg",
    ],
    layout: "standard",
    animation: "minimal",
  },
  {
    id: 12,
    title: "Berlin — MTM Chapter",
    years: "2023–2024",
    body:
      "My path pulled us to Berlin to join MTM—at the time, the best personal training studio I knew. Flights from Valencia turned into a real move. A global city with generous people.",
    theme: { cursor: "tower", bg: "neon-grid", accent: "#7C3AED" },
    images: [
      "/images/life/12-berlin/img1.svg",
      "/images/life/12-berlin/img2.svg",
      "/images/life/12-berlin/img3.svg",
    ],
    layout: "standard",
    animation: "grid",
  },
  {
    id: 13,
    title: "Munich — Building Something Lasting",
    years: "2024–Present",
    body:
      "In Berlin I met Alex, who wanted to open a gym in Munich. My Bavarian partner didn’t need convincing. We moved—and this time we’re staying. Munich has a magic of its own (and an excellent airport).",
    theme: { cursor: "pretzel", bg: "alpine", accent: "#2DD4BF" },
    images: [
      "/images/life/13-munich/img1.svg",
      "/images/life/13-munich/img2.svg",
      "/images/life/13-munich/img3.svg",
    ],
    layout: "standard",
    animation: "diagonal",
  },
  {
    id: 14,
    title: "What’s Next? — Detour",
    years: "Next",
    body:
      "I’m focused on a problem I’ve felt many times: planning a multi-day trip in a new country is hard and time-consuming. I’m building toward a better way—let’s see where it leads.",
    theme: { cursor: "compass", bg: "horizon", accent: "#94A3B8" },
    images: [
      "/images/life/14-next/img1.svg",
      "/images/life/14-next/img2.svg",
      "/images/life/14-next/img3.svg",
    ],
    layout: "standard",
    animation: "minimal",
  },
];


