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

export const personalSkills: string[] = [
  "Empathic leadership",
  "Clear communication",
  "Active listening",
  "Coaching and mentoring",
  "Team building",
  "Stakeholder alignment",
  "Conflict resolution",
  "Psychological safety",
];

export const experiences: Experience[] = [
  {
    role: "Technical Lead",
    company: "NHS Personal Training GmbH",
    location: "München, Germany",
    from: "Jan 2025",
    to: "Present",
    bullets: [
      "Lead and co-developed a Swift iOS coaching app end-to-end, enabling 10 premium clients to self-book sessions and track results in real time.",
      "Oversaw development of the company’s web app, integrating scheduling, training plan creation, exercise library, invoicing, accounting, and point-of-sale functionalities.",
      "Launched 2-language corporate site + 5 partner portals (Next.js).",
      "Directed 6 offshore engineers through Agile sprints, hitting 78% on-time release.",
      "Structured backend database architecture, for future usage by Doctors of Sport Scientists.",
      "Conducted educational sessions on application infrastructure and data management.",
      "Built partnerships with 5 communities via networking events.",
    ],
  },
  {
    role: "Personal Trainer",
    company: "MTM Personal Training",
    location: "Berlin, Germany",
    from: "Apr 2024",
    to: "Dec 2024",
    bullets: [
      "Instructed and educated the management team how to correctly store data, create version control and optimize the inhouse built application.",
      "Coached 25 executives, achieving 90% adherence to bespoke fitness KPIs over 6 months.",
      "Cultivated network of 40+ German founders/CEOs, seeding pipeline for future B2B consulting engagements.",
    ],
  },
  {
    role: "Project Manager",
    company: "Metaking Studios",
    location: "Stockholm, Sweden",
    from: "Feb 2022",
    to: "Feb 2024",
    bullets: [
      "Directed successful launch of an online strategy game, achieving $40 million in trade volume.",
      "Led 10-person cross-time-zone team; maintained 97% velocity adherence using Jira Scrum boards.",
      "Assisted with brand strategy creation which is still in use today.",
      "Enhanced workflow efficiency through implementation of Jira and Asana, reducing project deployment projection from 6 months to 4 months.",
      "Developed Grafana and Tableau dashboards to enable data-driven business decisions using live blockchain data.",
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

export const aiSkills: string[] = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Hera",
  "Gemini",
  "Sora",
  "Perplexity",
  "Power BI with AI",
  "UiPath",
  "Cluely",
  "LangGraph",
  "DeepSeek",
  "Grok",
];

// Uses sourced from tool docs and common workflows; kept concise for UI tooltip
export const aiUses: Record<string, string> = {
  ChatGPT: "rapid drafting, refactors, and idea exploration",
  Claude: "long‑form reasoning, summarization, and sensitive docs",
  Cursor: "AI pair programming inside the editor",
  Hera: "agentic automations and workflow orchestration",
  Gemini: "Workspace help and multimodal research",
  Sora: "text‑to‑video concept drafts",
  Perplexity: "grounded web research with citations",
  "Power BI with AI": "dashboards with natural‑language insights",
  UiPath: "RPA for repetitive back‑office tasks",
  Cluely: "data analysis assistance and quick insights",
  LangGraph: "graph‑based LLM workflows with loops/branches",
  DeepSeek: "cost‑efficient coding and reasoning",
  Grok: "real‑time answers and technical Q&A",
};

