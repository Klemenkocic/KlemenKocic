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
    role: "Interaction Architecture",
    company: "Luminous Group",
    location: "Munich, Germany",
    from: "Jul 2025",
    to: "Present",
    bullets: [
      "Luminous Group is a human-centred AI consultancy that's also building its own AI product, Luminosity. I work both sides.",
      "Interaction Architecture: designing the full structure of how humans work with the agents. The transparency that makes communication visible, the pacing that keeps autonomous action under human control, the progressive structure that lets domain experts engage with autonomous AI without technical fluency.",
      "Help build Luminosity — a multi-agent, multi-person system. Each person works with their own agents; agents coordinate across people through deliberate, observable message-passing. Isolated memory by default — if context isn't explicit, it doesn't propagate.",
      "Led capability-assessment workshops with CEOs, executives, and professionals across dentistry, education, and sport. Helped ~20 individuals plus one full company go from \"I don't know how AI fits\" to a working answer for their specific work.",
      "Built internal systems: CRM integrations (Attio, Linear, GitHub), operational tooling, agent-mediated workflows that keep the team coordinated without adding meetings.",
      "Lead author and co-author of seven essays on human-AI collaboration at Luminous Group, including \"The Displacement of Judgement,\" \"They Built It. They Can't Control It.,\" \"What You Govern Determines What You Become,\" \"The Resolution of Intelligence,\" and \"What Agents Cannot Want.\"",
      "Co-inventor on four patents filed at Luminous Group, on the architecture of human-agent collaboration.",
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
    company: "ViaVia UG",
    location: "Munich, Germany",
    from: "Sep 2025",
    to: "Present",
    bullets: [
      "ViaVia builds AI systems for professionals. Started in September 2025 — a place to ship AI products outside the consultancy work, against problems I care about.",
      "Current focus: Charles — an AI strength training coach, coming soon to the App Store. Charles builds periodised training programmes (accumulation, intensification, strength blocks) and rebuilds them session by session as the user logs what actually happened. Multi-model under the hood (Claude, Gemini, swappable). Six layers of filtering before the LLM ever sees the data: AI does what's genuinely hard to code, deterministic code does the rest.",
      "Lead Charles end-to-end with my co-founder: data model, periodisation logic, the feedback loop, multi-model orchestration, the filtering pipeline.",
      "Earlier ViaVia products I built: Viadio (AI-powered memory video app — turn existing phone photos and videos into meaningful compilations) and ShipStack (production framework for AI-native software — seven AI departments, human approval gates).",
      "The hard part of building AI products isn't getting the model to do something. It's deciding what it should NOT do. Surgical AI — deterministic code where it matters, model where it has to — beats \"throw it all at the LLM and hope\" by a lot.",
    ],
    video: {
      label: "ViaVia — building AI systems for professionals",
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
      "Built the bilingual corporate website and 5 partner portals, expanding the studio's B2B reach.",
      "Directed a team of 6 offshore engineers, maintaining a 78% on-time release rate across concurrent product streams.",
      "Helped the coaching team adopt AI in their daily work — turning a vague \"we should use AI\" aspiration into specific use cases people actually applied.",
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
  data_platforms: ["PostgreSQL", "Supabase", "Pinecone", "MongoDB", "Firebase", "Tableau", "Grafana"],
  tools: ["Git", "GitHub", "Warp", "Miro", "Jira", "Asana", "Xcode", "VS Code", "Vercel", "Tana", "Obsidian", "npm/pnpm", "Agile/Scrum"],
  certifications: [
    "Meta – Backend Developer",
    "Google – Project Management Specialization",
    "GO TEL – Programming Using Python",
    "Salesforce – Sales & CRM Overview",
    "UIUC – Leading Teams: Developing as a Leader",
  ],
};

export const aiSkills: string[] = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Mistral",
  "Cove AI",
  "Llama (local)",
  "MCP",
  "LangGraph",
  "Cursor",
  "Hera",
  "Perplexity",
  "Sora",
  "Dora.AI",
  "fal.ai",
  "Kling AI",
  "Power BI with AI",
  "UiPath",
  "Cluely",
  "DeepSeek",
  "Grok",
  "Supabase AI",
  "RevenueCat",
];

// Uses sourced from tool docs and common workflows; kept concise for UI tooltip
export const aiUses: Record<string, string> = {
  Claude: "long-form reasoning, agent backbone, sensitive documents",
  ChatGPT: "rapid drafting, refactors, and idea exploration",
  Gemini: "Workspace help and multimodal research",
  Mistral: "European LLM, cost-efficient inference",
  "Cove AI": "visual AI canvas — used before Microsoft acquired the team",
  "Llama (local)": "local LLM for offline experimentation and privacy-sensitive work",
  MCP: "Model Context Protocol — connecting tools and data to LLMs",
  LangGraph: "graph-based LLM workflows with loops and branches",
  Cursor: "AI pair programming inside the editor",
  Hera: "agentic automations and workflow orchestration",
  Perplexity: "grounded web research with citations",
  Sora: "text-to-video concept drafts",
  "Dora.AI": "web animation and motion design for prototype sites",
  "fal.ai": "AI infrastructure for video generation pipelines",
  "Kling AI": "cinematic AI video creation from images",
  "Power BI with AI": "dashboards with natural-language insights",
  UiPath: "RPA for repetitive back-office tasks",
  Cluely: "data analysis assistance and quick insights",
  DeepSeek: "cost-efficient coding and reasoning",
  Grok: "real-time answers and technical Q&A",
  "Supabase AI": "vector embeddings and AI-powered database queries (pgvector)",
  RevenueCat: "subscription analytics and in-app purchase management",
};

export const blogPosts: BlogPost[] = [
  {
    title: "They Built It. They Can't Control It.",
    excerpt: "The largest AI companies keep losing control of their own systems — Amazon, Anthropic, Google, Microsoft, OpenAI. The pattern is the same: AI-generated code deployed without adequate human review, then a post-hoc requirement that senior engineers approve AI-assisted changes. Co-written with Barton Friedland and Jim Highsmith, this piece argues the failures are not technological but architectural, and that aviation, surgery, and nuclear safety solved a version of this problem decades ago by treating human oversight as essential capability rather than expendable overhead.",
    url: "https://www.luminousgroup.net/liminality/they-built-it-they-cant-control-it",
    date: "Apr 26",
    readingTime: "9 min read",
    publication: "Luminous Group"
  },
  {
    title: "What You Govern Determines What You Become",
    excerpt: "AI systems optimise what is specified; they do not determine what ought to be specified. If the objective encoded three years ago was incomplete, the system has been compounding that gap at scale — into pricing, hiring, incentives, and capital allocation. The dashboards stay green the entire time.",
    url: "https://www.luminousgroup.net/liminality/what-are-you-scaling",
    date: "Mar 15",
    readingTime: "12 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Resolution of Intelligence",
    excerpt: "AI integration often erodes human judgement rather than enhancing it. When systems replace judgement long enough, practitioners lose the capacity to originate decisions independently. The most valuable organisations in forty years will be those that preserved and elevated human authorship, not those that optimised it away.",
    url: "https://www.luminousgroup.net/liminality/the-resolution-of-intelligence",
    date: "Mar 4",
    readingTime: "8 min read",
    publication: "Luminous Group"
  },
  {
    title: "What Agents Cannot Want",
    excerpt: "In an agent-mediated world, execution becomes abundant. What becomes scarce is direction driven by human intent. When agents raise the standard, they erase the old signal that 'good work' once carried—and scarcity migrates upward, from making things to deciding which things deserve to exist.",
    url: "https://www.luminousgroup.net/liminality/what-agents-cannot-want",
    date: "Feb 16",
    readingTime: "7 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Displacement of Judgement",
    excerpt: "Modern organisations have systematically moved consequential decision-making away from human judgement, automating critical choices upstream while leaders remain nominally responsible for ratifying predetermined outcomes. The displacement creates the illusion of control while eliminating genuine strategic choice. Co-written with Barton Friedland — formative vs corrective intervention as the lever for redesigning systems that preserve discernment while decisions remain malleable.",
    url: "https://www.luminousgroup.net/liminality/the-displacement-of-judgement",
    date: "Feb 9",
    readingTime: "8 min read",
    publication: "Luminous Group"
  },
  {
    title: "Open the Window",
    excerpt: "Using AI at work is not cheating—when it is used to augment human judgment and capability, not replace it. A framework for organizations to permit, equip, and audit AI-assisted work.",
    url: "https://www.luminousgroup.net/liminality/open-the-window",
    date: "Nov 28",
    readingTime: "6 min read",
    publication: "Luminous Group"
  },
  {
    title: "More Than a Mirror",
    excerpt: "AI isn't lacking—most of the time, it's a you-problem. Bring vague questions and thin knowledge, and AI will upscale your vagueness. This article explores the Augmentation Arc: Mirror, Lens, Lighthouse, and Prism—four modes that transform how we work with AI from reflection to resonance.",
    url: "https://www.luminousgroup.net/liminality/more-than-a-mirror",
    date: "Sep 24",
    readingTime: "5 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Racing Yacht",
    excerpt: "Steve Jobs called the computer a 'bicycle for the mind'—but that metaphor no longer fits. In the age of AI, leaders need to think less like cyclists and more like sailors. This piece explores how augmentation requires collective intelligence, turning ambient signals into strategic advantage.",
    url: "https://www.luminousgroup.net/liminality/the-racing-yacht",
    date: "Oct 10",
    readingTime: "4 min read",
    publication: "Luminous Group"
  }
];

