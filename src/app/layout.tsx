import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brianthammond.com"),
  title: {
    default: "Brian T. Hammond | Business Strategy & Marketing Consultant",
    template: "%s | Brian T. Hammond",
  },
  description:
    "Brian T. Hammond helps entrepreneurs and business owners innovate and grow through strategic planning, marketing, and coaching. 30+ years of experience, MBA from LSU.",
  keywords: [
    "business consultant",
    "marketing strategist",
    "business coach",
    "entrepreneur mentor",
    "digital marketing audit",
    "sales funnel",
    "SEO",
    "content marketing",
  ],
  openGraph: {
    type: "website",
    title: "Brian T. Hammond | Business Strategy & Marketing Consultant",
    description:
      "I help businesses innovate and grow — strategy, marketing, and coaching built on 30+ years of experience.",
    siteName: "Brian T. Hammond",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body suppressHydrationWarning className="bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
