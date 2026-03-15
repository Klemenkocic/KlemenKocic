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
      "Luminous Group is a human-centred AI consultancy helping organisations move from AI adoption to AI capability — designing governance, workflows, and implementation systems that produce measurable outcomes.",
      "Built Luminosity — the firm\u2019s internal multi-agent system. Five AI agents with isolated memory and deliberate message-passing coordination. No shared context by default — if it\u2019s not explicit, it doesn\u2019t happen.",
      "Built internal systems: CRM integrations (Attio, Linear, GitHub), operational tooling, and agent-mediated workflows that keep the team coordinated without adding meetings.",
      "Created AI-augmented workflows used across the company — designing how we work with AI, not just advising others on it.",
      "Published research on AI augmentation strategy — \"What Agents Cannot Want,\" \"Open the Window,\" \"More Than a Mirror,\" and \"The Racing Yacht\" — four pieces that form the firm\u2019s intellectual foundation on human-AI collaboration.",
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
      "ViaVia is a product studio — we build and ship digital products: apps, AI workflows, automation agents, SaaS, websites. Currently shipping Viadio (AI-powered memory videos from phone photos), ShipStack (production framework with 7 AI departments and human approval gates), and Celestia (localised astrology for underserved markets).",
      "Leading product development from concept to live platform — core architecture, UX decisions, and the multi-product strategy that makes each new product ship faster than the last.",
      "Built and iterated MVPs hands-on with my co-founder. Designed ShipStack as the shared production backbone across all ViaVia products.",
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
    location: "Munich, Germany",
    from: "Jan 2025",
    to: "Feb 2026",
    bullets: [
      "Led technology development for a premium personal training studio — building digital infrastructure for coaching delivery, client management, and business operations.",
      "Co-developed a native iOS coaching app (Swift): real-time session booking, progress tracking, trainer-client communication.",
      "Oversaw the web platform: scheduling, training plans, exercise libraries, invoicing, and point-of-sale.",
      "Directed a team of 6 offshore engineers, maintaining a 78% on-time release rate across concurrent product streams.",
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
    company: "MetaKing Studios",
    location: "Stockholm, Sweden",
    from: "Feb 2022",
    to: "Feb 2024",
    bullets: [
      "Directed launch and live operations of BLOCKLORDS — an online blockchain strategy game that reached $40M in trade volume.",
      "Led a 10-person cross-timezone team. Cut deployment projection from 6 to 4 months. Maintained 97% sprint velocity adherence.",
      "Introduced the Unity-to-blockchain smart contract connection for Direct Sales — $200K in direct revenue.",
      "Built Grafana and Tableau dashboards for on-chain analytics, giving leadership real-time visibility into game economy health.",
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
    location: "Stockholm (remote from Lisbon)",
    from: "Jan 2021",
    to: "Feb 2022",
    bullets: [
      "Orchestrated 5 gaming project launches across Ethereum, Polygon, and BSC.",
      "Negotiated ~$500K investor funding, extending runway by ~9 months.",
      "Managed Lighthouse — a fund-generating platform supporting 10+ external game developers.",
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
    title: "What You Govern Determines What You Become",
    excerpt: "AI systems optimise what is specified; they do not determine what ought to be specified. If the objective encoded three years ago was incomplete, the system has been compounding that gap at scale — into pricing, hiring, incentives, and capital allocation. The dashboards stay green the entire time.",
    url: "https://www.linkedin.com/pulse/what-you-scaling-mark-b%C3%A9liczky-mfoze/",
    date: "Mar 15",
    readingTime: "12 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Resolution of Intelligence",
    excerpt: "AI integration often erodes human judgement rather than enhancing it. When systems replace judgement long enough, practitioners lose the capacity to originate decisions independently. The most valuable organisations in forty years will be those that preserved and elevated human authorship, not those that optimised it away.",
    url: "https://www.luminousgroup.net/luminosity/the-resolution-of-intelligence",
    date: "Mar 4",
    readingTime: "8 min read",
    publication: "Luminous Group"
  },
  {
    title: "What Agents Cannot Want",
    excerpt: "In an agent-mediated world, execution becomes abundant. What becomes scarce is direction driven by human intent. When agents raise the standard, they erase the old signal that 'good work' once carried—and scarcity migrates upward, from making things to deciding which things deserve to exist.",
    url: "https://www.luminousgroup.net/luminosity/what-agents-cannot-want",
    date: "Feb 16",
    readingTime: "7 min read",
    publication: "Luminous Group"
  },
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

