import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
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

const SITE_URL = "https://www.brianthammond.com";
const SITE_NAME = "Brian T. Hammond";
const DEFAULT_TITLE = "Brian T. Hammond | Family Business Advisor & Entrepreneur Mentor";
const DEFAULT_DESCRIPTION =
  "Family business advisor helping second-generation owners ($2M–$50M) connect the dots, build the right systems, and grow. The FAMILY Framework. 30+ years of experience. MBA, LSU.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Brian T. Hammond",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "family business advisor",
    "family business consultant",
    "family business succession planning",
    "second generation family business",
    "family business coaching",
    "family business transition",
    "next generation family business",
    "succession planning consultant",
    "entrepreneur mentor",
    "business advisor for owners",
    "FAMILY Framework",
  ],
  authors: [{ name: "Brian T. Hammond" }],
  creator: "Brian T. Hammond",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data — helps Google build a richer result with knowledge panel,
// FAQ rich snippets, and proper entity recognition.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#brian`,
      name: "Brian T. Hammond",
      jobTitle: "Family Business Advisor & Entrepreneur Mentor",
      url: SITE_URL,
      image: `${SITE_URL}/Hammond-Headshot.jpg`,
      sameAs: ["https://www.linkedin.com/in/brianthammond/"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Louisiana State University",
      },
      knowsAbout: [
        "Family business succession planning",
        "Governance and communication for multi-generational enterprises",
        "Business strategy and growth",
        "Leadership coaching",
        "The FAMILY Framework",
      ],
      description:
        "Family business advisor and entrepreneur mentor with 30+ years of experience helping second-generation owners navigate succession, governance, and growth.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service`,
      name: "Brian T. Hammond Advisory",
      url: SITE_URL,
      image: `${SITE_URL}/Hammond-Headshot.jpg`,
      description: DEFAULT_DESCRIPTION,
      founder: { "@id": `${SITE_URL}#brian` },
      serviceType: [
        "Family business advisory",
        "Succession planning",
        "Strategic planning",
        "Executive coaching",
      ],
      areaServed: { "@type": "Country", name: "United States" },
      priceRange: "$$$",
      telephone: "+1-800-428-2424",
      email: "brian@brianthammond.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}#brian` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${fraunces.variable}`}>
      <body suppressHydrationWarning className="bg-background text-foreground min-h-screen flex flex-col">
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
