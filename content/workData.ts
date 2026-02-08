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
  "Team leadership",
  "Clear communication",
  "Coaching and mentoring",
  "Stakeholder alignment",
  "Conflict resolution",
];

export const experiences: Experience[] = [
  {
    role: "Consultant",
    company: "Luminous Group",
    location: "Munich, Germany",
    from: "Jul 2025",
    to: "Present",
    bullets: [
      "Luminous Group is a human-centred AI consultancy helping organizations move from AI adoption to AI capability — designing governance, workflows, and implementation systems that produce measurable outcomes.",
      "Built internal systems including CRM integrations (Attio, Linear, GitHub) and operational tooling that keeps the team coordinated.",
      "Created AI-augmented workflows used across the company — designing how the team works with AI, not just advising others on it.",
      "Published research on AI augmentation strategy — \"Open the Window,\" \"More Than a Mirror,\" and \"The Racing Yacht\" — contributing to the firm's thought leadership on human-AI collaboration.",
      "Work spans strategic consulting (client-facing workshops, capability assessments, workflow redesign) and hands-on building (prototyping AI tools, integrating systems, shipping internal products).",
    ],
    video: {
      label: "Luminous Group — AI solutions demo",
      srcWebm: "",
      srcMp4: "/videos/work/Luminous.mp4",
      poster: "/videos/work/luminous-poster.jpg",
    },
  },
  {
    role: "Co-Founder",
    company: "ViaVia",
    location: "Munich, Germany",
    from: "Sep 2025",
    to: "Present",
    bullets: [
      "Planning a trip across Europe is confusing, time-consuming, and costly. ViaVia exists to fix that.",
      "Leading product development from concept to live early-access platform, making core architecture and UX decisions that shape the product direction.",
      "Built and iterated the MVP hands-on with my co-founder.",
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
    to: "Feb 2026",
    bullets: [
      "Led technology development for a premium personal training studio, building the digital infrastructure that supported coaching delivery, client management, and business operations.",
      "Co-developed a native iOS coaching app (Swift) for premium clients with real-time session booking, progress tracking, and trainer-client communication.",
      "Oversaw the web platform handling scheduling, training plans, exercise libraries, invoicing, and point-of-sale operations.",
      "Directed a team of 6 offshore engineers, maintaining a 78% on-time release rate across concurrent product streams.",
      "Launched a bilingual corporate website and 5 partner portals, expanding the studio's B2B reach.",
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
      "Pursued personal training out of a deep interest in sport and human performance. Coached executives and founders one-on-one in a premium studio setting.",
      "Built a professional network of 40+ German founders and CEOs through coaching relationships — connections that informed later consulting and startup work.",
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
      "Directed the launch and live operations of BLOCKLORDS, an online blockchain strategy game that reached $40M in trade volume.",
      "Led a 10-person cross-timezone team, implementing Jira and Asana workflows that cut deployment projection from 6 to 4 months and maintained 97% sprint velocity adherence.",
      "Introduced the technical connection between Unity and blockchain smart contracts for a Direct Sales feature, generating $200K in direct revenue.",
      "Built Grafana and Tableau dashboards for on-chain analytics, giving leadership real-time visibility into game economy health and player behavior.",
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
    location: "Seoul, South Korea",
    from: "Mar 2020",
    to: "Jan 2021",
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

export const projects: Project[] = [];

export const skills: Skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Swift", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "React Native", "Node.js", "Tailwind CSS", "SwiftUI"],
  data_platforms: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "Tableau", "Grafana"],
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

