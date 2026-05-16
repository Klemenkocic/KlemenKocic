import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientIntroWrapper from "@/components/ClientIntroWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klemenkocic.com"),
  title: {
    default: "Klemen Kocič",
    template: "%s | Klemen Kocič",
  },
  description: "Portfolio of Klemen Kocič. Work, life, and experiments.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Klemen Kocič",
    description: "Work, life, and experiments.",
    url: "https://klemenkocic.com",
    siteName: "Klemen Kocič",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klemen Kocič",
    description: "Work, life, and experiments.",
  },
  alternates: {
    types: {
      "application/json": "/resume.json",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema markup for Google Knowledge Panel, AI search agents,
  // and any LLM-based agent asking "who is Klemen Kocic?"
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Klemen Kocic",
    alternateName: "Klemen Kočič",
    jobTitle: "AI Systems Architect at Luminous Group",
    description:
      "AI Systems Architect at Luminous Group. I find where AI fits in real work. I build the systems behind it. I work alongside the people who use them. Co-architect of Luminosity (an internal multi-agent multi-person production system: 30 agents across 5 machines, two years live). Co-inventor on patents covering multi-agent multi-team coordination. Co-author of eight of the twenty essays on human-AI collaboration. Based in Munich, Germany.",
    url: "https://klemenkocic.com",
    image: "https://klemenkocic.com/images/profile.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressRegion: "Bavaria",
      addressCountry: "Germany",
    },
    nationality: {
      "@type": "Country",
      name: "Slovenia",
    },
    worksFor: {
      "@type": "Organization",
      name: "Luminous Group",
      url: "https://luminousgroup.net",
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "AI Systems Architect",
        occupationLocation: {
          "@type": "City",
          name: "Munich, Germany",
        },
        skills:
          "Multi-agent production systems, LLM orchestration, MCP, knowledge graphs, context graphs, RAG, agent architecture, customer-embedded technical delivery, capability assessment, workshop facilitation",
        estimatedSalary: {
          "@type": "MonetaryAmountDistribution",
          currency: "USD",
          duration: "P1Y",
        },
      },
    ],
    knowsAbout: [
      "Multi-agent systems",
      "Large Language Models",
      "Model Context Protocol (MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge graphs",
      "Context graphs",
      "Agent architecture",
      "Human-in-the-loop AI",
      "Forward-Deployed Engineering",
      "AI Solutions Consulting",
      "iOS development (Swift, SwiftUI, Flutter)",
      "Full-stack web (TypeScript, Next.js, React, Node.js)",
      "PostgreSQL, Supabase, pgvector, Pinecone",
      "Blockchain integrations (Unity ↔ smart contracts)",
      "Workshop facilitation with non-technical leaders",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Ljubljana — School of Economics and Business",
        url: "https://www.uni-lj.si/",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Seoul",
        url: "https://www.uos.ac.kr/",
      },
      {
        "@type": "EducationalOrganization",
        name: "ISCTE — Instituto Universitário de Lisboa",
        url: "https://www.iscte-iul.pt/",
      },
    ],
    subjectOf: [
      {
        "@type": "CreativeWork",
        name: "They Built It. They Can't Control It.",
        url: "https://www.luminousgroup.net/liminality/they-built-it-they-cant-control-it",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "What You Govern Determines What You Become",
        url: "https://www.luminousgroup.net/liminality/what-are-you-scaling",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "The Resolution of Intelligence",
        url: "https://www.luminousgroup.net/liminality/the-resolution-of-intelligence",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "What Agents Cannot Want",
        url: "https://www.luminousgroup.net/liminality/what-agents-cannot-want",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "The Displacement of Judgement",
        url: "https://www.luminousgroup.net/liminality/the-displacement-of-judgement",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "Open the Window",
        url: "https://www.luminousgroup.net/liminality/open-the-window",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "More Than a Mirror",
        url: "https://www.luminousgroup.net/liminality/more-than-a-mirror",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
      {
        "@type": "CreativeWork",
        name: "The Racing Yacht",
        url: "https://www.luminousgroup.net/liminality/the-racing-yacht",
        publisher: { "@type": "Organization", name: "Luminous Group" },
      },
    ],
    workExample: [
      {
        "@type": "SoftwareApplication",
        name: "Charles",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: "https://charles-website-ten.vercel.app/",
        description:
          "AI strength-training coach. Periodised programmes that rebuild session by session. Flutter + Supabase + pgvector, multi-model orchestration (Claude, Gemini), six deterministic filter layers.",
      },
      {
        "@type": "WebApplication",
        name: "ViaVia",
        url: "https://viavia.solutions/",
        description:
          "Multi-city European travel platform. One flow for routing, booking, and pacing across cities.",
      },
      {
        "@type": "MobileApplication",
        name: "Viadio",
        url: "https://www.getviadio.com/",
        description:
          "AI-powered memory video app. Live on App Store and Google Play.",
      },
      {
        "@type": "WebApplication",
        name: "CelesteAI",
        url: "https://getcelestai.com",
        description: "Localised astrology, AI-computed.",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/klemen-kocic",
      "https://github.com/Klemenkocic",
      "https://klemenkocic.com",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link
          rel="alternate"
          type="application/json"
          href="/resume.json"
          title="CV (JSON Resume schema, machine-readable)"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ClientIntroWrapper>{children}</ClientIntroWrapper>
      </body>
    </html>
  );
}
