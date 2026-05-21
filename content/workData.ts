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
  status: string; // "Live", "Beta", "Live · App Store + Google Play", "Internal · Luminous Group"
  url?: string;
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
    role: "AI Systems Architect",
    company: "Luminous Group",
    location: "Munich, Germany",
    from: "Jul 2025",
    to: "Present",
    bullets: [
      "Co-led ~6 capability-assessment engagements with senior leaders across healthcare, sport, law, marketing, automotive sales, and architecture. Translated ambiguous AI goals into specific workflows, each shipped as a working product or reference architecture their team adopted.",
      "Co-architect of Luminosity, our internal multi-agent multi-person production system serving seven people across the company. Designed around the three-layer system architecture (Interaction, Coordination, Data) behind the company's \"AI that instruments the human\" thesis.",
      "Built Luminosity's video production pipeline and the team-coordination workflows that keep the distributed team aligned. Co-built the runtime infrastructure: agent provisioning, MCP tool servers, the rules-and-skills harness, and knowledge and context graphs.",
      "Built and operate the company's weekly AI-intelligence pipeline: ~14 parallel agents pull from 40+ sources across 12 categories, routing ~50 net-new entries a week into Tana, Slack, and a shared GitHub doc with per-person and per-agent callouts so each teammate (and each agent) gets a concrete list of items to act on. The system informs partnership decisions, product positioning, and competitive response.",
      "Co-inventor on patents covering multi-agent multi-team coordination.",
      "Shape Luminous Group's editorial voice on public surfaces (website, positioning, bios) with the founding team. Co-author of eight of the twenty essays published at luminousgroup.net/liminality on human-AI collaboration. See Writing section.",
    ],
    video: {
      label: "Luminous Group AI solutions demo",
      srcWebm: "",
      srcMp4: "/videos/work/Luminous.mp4",
      poster: "/videos/work/luminous-poster.jpg",
    },
  },
  {
    role: "Technical Lead",
    company: "NHS Personal Training GmbH",
    location: "Munich, Germany",
    from: "Jan 2025",
    to: "Feb 2026",
    bullets: [
      "Co-developed a native iOS coaching app (Swift, SwiftUI) purpose-built for the gym's one-on-one personal training methodology: adopted by every trainer and client, still in daily production use across the gym's coaching team.",
      "Built the web platform covering scheduling, training plans, exercise libraries, invoicing, and point-of-sale, plus a bilingual corporate site and 5 partner portals expanding the studio's B2B reach.",
      "Coordinated 6 offshore engineers across concurrent product streams at a 78% on-time release rate.",
      "Deployed AI into the coaching team's daily workflow: pgvector retrieval over scientific training data, methodology-driven programme generation, and multi-model orchestration (Claude, ChatGPT, Gemini) for client analysis and content drafting.",
    ],
    video: {
      label: "NHS Personal Training iOS app demo",
      srcWebm: "",
      srcMp4: "/videos/work/New Health Society Technical Lead.mp4",
      poster: "/videos/work/nhs-poster.jpg",
    },
  },
  {
    role: "Personal Trainer · Embedded with Executives",
    company: "MTM Personal Training",
    location: "Berlin, Germany",
    from: "Apr 2024",
    to: "Dec 2024",
    bullets: [
      "Coached executives and founders one-on-one in a premium studio. Embedded fieldwork that became the domain foundation for Charles (AI strength coach) and the NHS technical lead role that followed.",
      "Built a network of 40+ German founders and CEOs through these coaching relationships. Connections that informed later consulting and product work.",
    ],
    video: {
      label: "MTM Personal Training fitness tech demo",
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
      "Shipped BLOCKLORDS, an online blockchain strategy game that reached $40M in trade volume; led a 10-person cross-timezone team and cut deployment projection 6 → 4 months at 97% sprint velocity.",
      "Coordinated the team across Jira, Asana, and Miro from architecture to game economy (using Machinations) to the Unity build, plus a Unity-to-blockchain bridge designed to stay non-intrusive so players never had to touch the on-chain layer to enjoy the game.",
      "Owned go-to-market for the BLOCKLORDS launch: marketing materials, community activation across Discord, Telegram, and X, partnerships with Web3 gaming guilds, launch-day coordination across regions, and on-chain growth tracking after launch.",
      "Built Grafana and Tableau dashboards for on-chain analytics, giving leadership real-time visibility into game-economy health and player behaviour.",
    ],
    video: {
      label: "Metaking Studios game launch demo",
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
      "Shipped 5 gaming project launches across Ethereum, Polygon, and BSC. Managed Lighthouse, a fund-generating platform supporting 10+ external game developers. Negotiated ~$500K investor funding, extending runway ~9 months.",
      "Built KPI tracking dashboards in SQL + Tableau on top of on-chain event data, giving leadership real-time visibility into ecosystem health.",
    ],
    video: {
      label: "Seascape Network program management overview",
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
      "Partner-ecosystem analytics drove 30+ integration decisions and 460% MAU growth (10K → 56K).",
      "Built repeatable KPI tracking to support leadership planning and investor reporting.",
    ],
    video: {
      label: "Seascape Network data analytics dashboard",
      srcWebm: "",
      srcMp4: "/videos/work/Seascape Network Data analyst.mp4",
      poster: "/videos/work/seascape-data-poster.jpg",
    },
  },
];

export const projects: Project[] = [
  {
    name: "Charles",
    status: "Live",
    url: "https://charles-website-ten.vercel.app/",
    summary:
      "AI strength-training coach for iOS. Builds periodised programmes (accumulation, intensification, strength) that rebuild session by session as the user logs what actually happened. Flutter + Supabase + pgvector. Two-layer architecture: relational gym data on Layer 1, vector-backed AI knowledge on Layer 2. Multi-model orchestration (Claude, Gemini, swappable). Six deterministic filter layers before the model ever sees the data.",
    tech: ["Flutter", "Supabase", "pgvector", "Claude", "Gemini"],
  },
  {
    name: "ViaVia",
    status: "Live",
    url: "https://viavia.solutions/",
    summary:
      "Multi-city European travel platform. Planning a five-city trip across Europe is meant to be the fun part. Right now it's the bottleneck. ViaVia turns the routing, booking, and pacing into one simple flow.",
    tech: [],
  },
  {
    name: "Viadio",
    status: "Live · App Store + Google Play",
    url: "https://www.getviadio.com/",
    summary:
      "AI memory video app for iOS and Android. Turn existing phone photos into meaningful compilations. An image-research algorithm and prompting structure does the heavy lifting under the hood, so users never need to think about AI.",
    tech: [],
  },
  {
    name: "CelesteAI",
    status: "Live",
    url: "https://getcelestai.com",
    summary:
      "Localised astrology, computed and written by AI. Charts and readings that take time, place, and language seriously.",
    tech: [],
  },
  {
    name: "ShipStack",
    status: "Internal · Luminous Group",
    summary:
      "Production framework for AI-native software. Seven AI departments coordinating through human approval gates. The structure that lets a small team ship product without losing oversight.",
    tech: [],
  },
];

export const skills: Skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Swift", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "React Native", "Node.js", "Tailwind CSS", "SwiftUI"],
  data_platforms: ["PostgreSQL", "Supabase", "pgvector", "MongoDB", "Firebase", "Tableau", "Grafana"],
  tools: ["Git", "GitHub", "Warp", "Miro", "Jira", "Asana", "Xcode", "VS Code", "Vercel", "Tana", "Obsidian", "npm/pnpm", "Agile/Scrum"],
  certifications: [
    "Meta – Backend Developer",
    "Google – Project Management Specialization",
    "UIUC – Leading Teams: Developing as a Leader",
  ],
};

// Kept for backwards compatibility. UI now uses the split arrays below.
export const aiSkills: string[] = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Mistral",
  "Cove AI",
  "Llama (local)",
  "MCP",
  "LangGraph",
  "Pinecone",
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

// AI Engineering: the serious infrastructure I build with.
export const aiEngineering: string[] = [
  "Claude",
  "GPT",
  "Gemini",
  "Mistral",
  "Llama (local)",
  "MCP",
  "LangGraph",
  "Knowledge graphs",
  "Context graphs",
  "Pinecone",
  "Supabase AI",
  "Cursor",
];

// AI Tools I use daily: the prosumer + workflow surface.
export const aiTools: string[] = [
  "ChatGPT",
  "Cove AI",
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
  "RevenueCat",
];

// Uses sourced from tool docs and common workflows; kept concise for UI tooltip
export const aiUses: Record<string, string> = {
  Claude: "long-form reasoning, agent backbone, sensitive documents",
  GPT: "OpenAI's API as an agent backbone. Multi-model orchestration alongside Claude.",
  ChatGPT: "rapid drafting, refactors, and idea exploration",
  "Knowledge graphs": "structured domain knowledge that agents can query and update across sessions",
  "Context graphs": "the live structure of what an agent knows about a person, a project, and the relationships between them",
  pgvector: "Postgres-native vector retrieval. Used in Charles's two-layer architecture (relational + vector).",
  Gemini: "Workspace help and multimodal research",
  Mistral: "European LLM, cost-efficient inference",
  "Cove AI": "visual AI canvas, used before Microsoft acquired the team",
  "Llama (local)": "local LLM for offline experimentation and privacy-sensitive work",
  MCP: "Model Context Protocol. Connecting tools and data to LLMs.",
  LangGraph: "graph-based LLM workflows with loops and branches",
  Pinecone: "vector store for retrieval. Giving agents the right context at the right time.",
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
    excerpt: "The largest AI companies keep losing control of their own systems. Amazon, Anthropic, Google, Microsoft, OpenAI. The pattern is the same: AI-generated code deployed without adequate human review, then a post-hoc requirement that senior engineers approve AI-assisted changes. Co-written with Barton Friedland and Jim Highsmith, this piece argues the failures are not technological but architectural, and that aviation, surgery, and nuclear safety solved a version of this problem decades ago by treating human oversight as essential capability rather than expendable overhead.",
    url: "https://www.luminousgroup.net/liminality/they-built-it-they-cant-control-it",
    date: "Apr 26",
    readingTime: "9 min read",
    publication: "Luminous Group"
  },
  {
    title: "What You Govern Determines What You Become",
    excerpt: "AI systems optimise what is specified; they do not determine what ought to be specified. If the objective encoded three years ago was incomplete, the system has been compounding that gap at scale, into pricing, hiring, incentives, and capital allocation. The dashboards stay green the entire time.",
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
    excerpt: "In an agent-mediated world, execution becomes abundant. What becomes scarce is direction driven by human intent. When agents raise the standard, they erase the old signal that 'good work' once carried. Scarcity migrates upward, from making things to deciding which things deserve to exist.",
    url: "https://www.luminousgroup.net/liminality/what-agents-cannot-want",
    date: "Feb 16",
    readingTime: "7 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Displacement of Judgement",
    excerpt: "Modern organisations have systematically moved consequential decision-making away from human judgement, automating critical choices upstream while leaders remain nominally responsible for ratifying predetermined outcomes. The displacement creates the illusion of control while eliminating genuine strategic choice. Co-written with Barton Friedland. Formative vs corrective intervention as the lever for redesigning systems that preserve discernment while decisions remain malleable.",
    url: "https://www.luminousgroup.net/liminality/the-displacement-of-judgement",
    date: "Feb 9",
    readingTime: "8 min read",
    publication: "Luminous Group"
  },
  {
    title: "Open the Window",
    excerpt: "Using AI at work is not cheating when it is used to augment human judgment and capability, not replace it. A framework for organizations to permit, equip, and audit AI-assisted work.",
    url: "https://www.luminousgroup.net/liminality/open-the-window",
    date: "Nov 28",
    readingTime: "6 min read",
    publication: "Luminous Group"
  },
  {
    title: "More Than a Mirror",
    excerpt: "AI isn't lacking. Most of the time, it's a you-problem. Bring vague questions and thin knowledge, and AI will upscale your vagueness. This article explores the Augmentation Arc: Mirror, Lens, Lighthouse, and Prism. Four modes that transform how we work with AI from reflection to resonance.",
    url: "https://www.luminousgroup.net/liminality/more-than-a-mirror",
    date: "Sep 24",
    readingTime: "5 min read",
    publication: "Luminous Group"
  },
  {
    title: "The Racing Yacht",
    excerpt: "Steve Jobs called the computer a 'bicycle for the mind.' That metaphor no longer fits. In the age of AI, leaders need to think less like cyclists and more like sailors. This piece explores how augmentation requires collective intelligence, turning ambient signals into strategic advantage.",
    url: "https://www.luminousgroup.net/liminality/the-racing-yacht",
    date: "Oct 10",
    readingTime: "4 min read",
    publication: "Luminous Group"
  }
];

