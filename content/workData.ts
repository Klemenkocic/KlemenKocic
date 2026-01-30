export type Experience = {
  role: string;
  company: string;
  location?: string;
  from: string; // "Jan 2025"
  to: string; // "Present" or "Dec 2024"
  bullets: string[];
  video?: {
    label: string;
    srcWebm: string;
    srcMp4?: string;
    poster?: string;
  };
};

export type Project = {
  name: string;
  summary: string;
  tech: string[];
  notes?: string[];
  video?: {
    label: string;
    srcWebm: string;
    srcMp4?: string;
    poster?: string;
    format?: "laptop" | "phone"; // Display format for the video
  };
};

export type BlogPost = {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readingTime: string;
  publication: string;
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
    role: "CEO & Co-Founder",
    company: "ViaVia",
    location: "Munich, Germany",
    from: "2024",
    to: "Present",
    bullets: [
      "Building a multi-city European trip planning platform solving the problem: planning trips to Europe is time-consuming, confusing, and costly.",
      "Led product development from concept to live early-access platform with integrated booking flow for flights, trains, hotels, and activities.",
      "Designed and built the technical architecture using Next.js, TypeScript, Supabase, Cesium, and Google Maps.",
      "Managing go-to-market strategy, user acquisition, and investor relations.",
    ],
    video: {
      label: "ViaVia — European trip planner",
      srcWebm: "",
      srcMp4: "",
      poster: "/images/viavia-logo.png",
    },
  },
  {
    role: "Technical Lead",
    company: "NHS Personal Training GmbH",
    location: "München, Germany",
    from: "Jan 2025",
    to: "Present",
    bullets: [
      "Lead and co-developed a Swift iOS coaching app end-to-end, enabling 10 premium clients to self-book sessions and track results in real time.",
      "Oversaw development of the company's web app, integrating scheduling, training plan creation, exercise library, invoicing, accounting, and point-of-sale functionalities.",
      "Launched 2-language corporate site + 5 partner portals (Next.js).",
      "Directed 6 offshore engineers through Agile sprints, hitting 78% on-time release.",
      "Structured backend database architecture, for future usage by Doctors of Sport Scientists.",
      "Conducted educational sessions on application infrastructure and data management.",
      "Built partnerships with 5 communities via networking events.",
    ],
    video: {
      label: "NHS Personal Training — iOS app demo",
      srcWebm: "",
      srcMp4: "/videos/work/New Health Society Technical Lead.mp4",
      poster: "/videos/work/nhs-poster.jpg",
    },
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
    video: {
      label: "MTM Personal Training — Fitness tech demo",
      srcWebm: "",
      srcMp4: "/videos/work/MTM Personal Training.mp4",
      poster: "/videos/work/mtm-poster.jpg",
    },
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
    video: {
      label: "Metaking Studios — Game launch demo",
      srcWebm: "",
      srcMp4: "/videos/work/Metaking Studios Project Manager.mp4",
      poster: "/videos/work/metaking-poster.jpg",
    },
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
    video: {
      label: "Seascape Network — Program management overview",
      srcWebm: "",
      srcMp4: "/videos/work/Seascaep network Program Manager.mp4",
      poster: "/videos/work/seascape-pm-poster.jpg",
    },
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
    video: {
      label: "Seascape Network — Data analytics dashboard",
      srcWebm: "",
      srcMp4: "/videos/work/Seascape Network Data analyst.mp4",
      poster: "/videos/work/seascape-data-poster.jpg",
    },
  },
];

export const projects: Project[] = [
  {
    name: "Luminous Group",
    summary:
      "AI Researcher at a human-centered consulting firm operating across Berlin and USA. We help organizations transition from AI augmentation to automation through strategic frameworks, governance systems, and hands-on implementation. Built comprehensive tooling including CRM integrations (Attio, Linear, GitHub), lead generation systems, AI governance frameworks, and engineering manifestos that guide how teams adopt AI responsibly.",
    tech: ["TypeScript", "Next.js", "Python", "AI Governance", "LangGraph", "Attio API", "Linear API", "Strategic Consulting"],
    notes: [
      "AI governance and augmentation frameworks for enterprise adoption",
      "Custom API integrations for CRM, project management, and analytics",
      "Published thought leadership on AI integration in organizations",
      "Lead generation and case study systems for consulting pipeline",
    ],
    video: {
      label: "Luminous Group — AI solutions demo",
      srcWebm: "",
      srcMp4: "/videos/work/Luminous.mp4",
      poster: "/videos/work/luminous-poster.jpg",
      format: "laptop",
    },
  },
  {
    name: "ViaVia",
    summary:
      "CEO and co-founder solving a real problem: planning a trip to Europe is time-consuming, confusing, and costly. ViaVia is a multi-city trip planning platform that lets travelers book flights, trains, hotels, and activities across multiple European cities in a single checkout. Less stress. More memories.",
    tech: ["Next.js", "TypeScript", "Supabase", "Cesium", "Google Maps", "Node.js"],
    notes: [
      "Multi-city European trip booking in one seamless flow",
      "Integrated flights, trains, hotels, and activities",
      "Lead capture and early access platform live",
    ],
    video: {
      label: "ViaVia — European trip planner demo",
      srcWebm: "",
      srcMp4: "/videos/work/ViaVia.mp4",
      poster: "/videos/work/viavia-poster.jpg",
      format: "phone",
    },
  },
  {
    name: "Viadio",
    summary:
      "Mobile AI video creation app that generates cinematic drone-style transition videos from two photos. Built with Flutter for iOS and Android, using fal.ai and Kling AI for video generation, with RevenueCat handling subscriptions.",
    tech: ["Flutter", "Dart", "Supabase", "fal.ai", "Kling AI", "RevenueCat"],
    notes: [
      "AI-powered video generation from static images",
      "Subscription-based monetization model",
      "Cross-platform mobile app (iOS & Android)",
    ],
    video: {
      label: "Viadio — AI video creation demo",
      srcWebm: "",
      srcMp4: "/videos/work/Viadio.mp4",
      poster: "/videos/work/viadio-poster.jpg",
      format: "phone",
    },
  },
  {
    name: "Squat Visualizer (iOS)",
    summary:
      "A free Squat visualizer App built in Swift on iOS for users to be able to record their squat and improve their technique with visual cues including a step-by-step technique Improvement guide.",
    tech: ["Swift", "AVFoundation", "CoreMotion"],
    video: {
      label: "Squat Visualizer — Technique analysis demo",
      srcWebm: "",
      srcMp4: "/videos/work/Squat App.mp4",
      poster: "/videos/work/squat-poster.jpg",
      format: "phone",
    },
  },
  {
    name: "Libre Sudoku (iOS)",
    summary: "Frustrated by intrusive ads in existing Sudoku apps, I built my own free, ad-free version in Swift for truly distraction-free play.",
    tech: ["Swift", "UIKit/SwiftUI"],
  },
];

export const skills: Skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Swift", "Kotlin", "Java", "SQL", "HTML/CSS", "R"],
  frameworks: ["React", "Next.js", "React Native", "Node.js", "Tailwind CSS", "SwiftUI", "Django", "Ruby on Rails", "Stimulus"],
  data_platforms: ["PostgreSQL", "MongoDB", "Firebase", "Tableau", "Grafana"],
  tools: ["Git", "GitHub", "Jira", "Asana", "Xcode", "VS Code", "Vercel", "npm/pnpm", "Agile/Scrum"],
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
  "Dora.AI",
  "Perplexity",
  "Power BI with AI",
  "UiPath",
  "Cluely",
  "LangGraph",
  "DeepSeek",
  "Grok",
  "fal.ai",
  "Kling AI",
  "Supabase AI",
  "RevenueCat",
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
  "Dora.AI": "web animation and motion design for prototype sites",
  "fal.ai": "AI infrastructure for video generation pipelines",
  "Kling AI": "cinematic AI video creation from images",
  "Supabase AI": "vector embeddings and AI-powered database queries",
  RevenueCat: "subscription analytics and in-app purchase management",
};

export const blogPosts: BlogPost[] = [
  {
    title: "Open the Window",
    excerpt: "Using AI at work is not cheating—when it is used to augment human judgment and capability, not replace it. A framework for organizations to permit, equip, and audit AI-assisted work.",
    url: "https://www.luminousgroup.net/luminosity/open-the-window",
    date: "Nov 28",
    readingTime: "6 min read",
    publication: "Luminous Group"
  },
  {
    title: "More Than a Mirror",
    excerpt: "AI isn't lacking—most of the time, it's a you-problem. Bring vague questions and thin knowledge, and AI will upscale your vagueness. This article explores the Augmentation Arc: Mirror, Lens, Lighthouse, and Prism—four modes that transform how we work with AI from reflection to resonance.",
    url: "https://www.luminousgroup.net/luminosity/more-than-a-mirror",
    date: "Sep 24",
    readingTime: "5 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Racing Yacht",
    excerpt: "Steve Jobs called the computer a 'bicycle for the mind'—but that metaphor no longer fits. In the age of AI, leaders need to think less like cyclists and more like sailors. This piece explores how augmentation requires collective intelligence, turning ambient signals into strategic advantage.",
    url: "https://www.luminousgroup.net/luminosity/the-racing-yacht",
    date: "Oct 10",
    readingTime: "4 min read",
    publication: "Luminous Group"
  }
];

