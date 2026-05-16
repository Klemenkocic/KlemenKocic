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
  description: "Portfolio of Klemen Kocič — work, life, and experiments.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema markup for Google Knowledge Panel
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Klemen Kocic",
    alternateName: "Klemen Kočič",
    jobTitle: "AI Solutions Engineer & Interaction Architect at Luminous Group",
    worksFor: [
      {
        "@type": "Organization",
        name: "Luminous Group",
      },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Ljubljana",
        url: "https://www.uni-lj.si/",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Seoul",
        url: "https://www.uos.ac.kr/",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/klemen-kocic",
      "https://github.com/Klemenkocic",
      "https://klemenkocic.com",
    ],
    url: "https://klemenkocic.com",
    image: "https://klemenkocic.com/images/profile.jpg",
    description:
      "AI Solutions Engineer and Interaction Architect at Luminous Group. I help non-technical leaders find where AI fits — and build the systems behind it. Co-architect and substrate operator for Luminosity (multi-agent multi-person production system, two years live). Co-inventor on patents covering multi-agent multi-team coordination. Based in Munich, Germany.",
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
  };

  // Client wrapper to show intro only once per session
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ClientIntroWrapper>{children}</ClientIntroWrapper>
      </body>
    </html>
  );
}
