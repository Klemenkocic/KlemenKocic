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
  // Client wrapper to show intro only once per session
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ClientIntroWrapper>{children}</ClientIntroWrapper>
      </body>
    </html>
  );
}
