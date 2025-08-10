export type Experience = {
  role: string;
  company: string;
  location?: string;
  from: string; // "Jan 2025"
  to: string; // "Present" or "Dec 2024"
  bullets: string[];
};

export type Project = {
  name: string;
  summary: string;
  tech: string[];
  notes?: string[];
};

export type Skills = {
  languages: string[];
  frameworks: string[];
  data_platforms: string[];
  tools: string[];
  certifications: string[];
};

export const experiences: Experience[] = [
  {
    role: "Technical Lead",
    company: "NHS Personal Training GmbH",
    location: "Munich, Germany",
    from: "Jan 2025",
    to: "Present",
    bullets: [
      "Co-led and shipped a Swift iOS coaching app enabling premium clients to self-book sessions and track results in real time.",
      "Launched a bilingual corporate site plus 5 partner portals with Next.js.",
      "Directed 6 offshore engineers in Agile sprints; achieved ~78% on-time releases.",
      "Designed scalable backend database architecture for future use by sport scientists and physicians.",
      "Ran internal workshops on app infrastructure and data management.",
    ],
  },
  {
    role: "Personal Trainer (Tech-Adjacent)",
    company: "MTM Personal Training",
    location: "Berlin, Germany",
    from: "Apr 2024",
    to: "Dec 2024",
    bullets: [
      "Implemented correct data storage practices and version control; optimized the in-house application workflow.",
      "Coached 25 executives; achieved ~90% adherence to bespoke fitness KPIs over 6 months.",
      "Cultivated a network of 40+ founders/CEOs, seeding B2B opportunities.",
    ],
  },
  {
    role: "Project Manager",
    company: "MetaKing Studios",
    location: "Stockholm (remote)",
    from: "Feb 2022",
    to: "Feb 2024",
    bullets: [
      "Directed launch of an online strategy game, reaching ~$40M trade volume.",
      "Led a 10-person cross-time-zone squad; maintained ~95% velocity adherence on Jira Scrum.",
      "Implemented Jira/Asana workflows, reducing projected deployments from 6 months to 4.",
      "Global press outreach generating ~4M views across YouTube, Instagram, X, and Telegram.",
      "Contributed to brand strategy still in use.",
    ],
  },
  {
    role: "Program Manager",
    company: "Seascape Network",
    location: "Stockholm (remote)",
    from: "Jan 2021",
    to: "Feb 2022",
    bullets: [
      "Orchestrated strategic launches of five gaming projects.",
      "Negotiated ~$500k investor funding, extending runway by ~9 months.",
      "Managed development of a fund-generating platform supporting 10+ external game developers.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Seascape Network",
    location: "Stockholm (remote)",
    from: "Jan 2021",
    to: "Feb 2022",
    bullets: [
      "Analyzed user and wallet growth to inform product launches and partnership priorities.",
      "Partner ecosystem insights contributed to 30+ integrations and MAU growth from ~10k to ~56k.",
      "Built repeatable KPI tracking to support leadership planning and investor reporting.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Detour",
    summary:
      "Road-trip planner that turns basic inputs into an interactive 3D itinerary with optimized routes and a quick AI planning feature.",
    tech: ["Cesium", "Google Maps", "TypeScript", "Next.js", "Node.js"],
  },
  {
    name: "Libre Sudoku (iOS)",
    summary: "Free Sudoku app built in Swift for distraction-free play.",
    tech: ["Swift", "UIKit/SwiftUI"],
  },
  {
    name: "Squat Visualizer (iOS)",
    summary:
      "Record and analyze squat technique with visual cues and a step-by-step improvement guide.",
    tech: ["Swift", "AVFoundation", "CoreMotion"],
  },
];

export const skills: Skills = {
  languages: ["TypeScript", "Python", "Swift", "Java", "R"],
  frameworks: ["Node.js", "Next.js", "Django", "Ruby on Rails", "Stimulus"],
  data_platforms: ["PostgreSQL", "MongoDB", "Firebase", "Tableau", "Grafana"],
  tools: ["Jira", "Asana", "Git", "Agile/Scrum"],
  certifications: [
    "Meta – Backend Developer",
    "Google – Project Management Specialization",
    "GO TEL – Programming Using Python",
    "Salesforce – Sales & CRM Overview",
    "UIUC – Leading Teams: Developing as a Leader",
  ],
};

