import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10-Minute Family Business Diagnostic",
  description:
    "Score your family business across the six FAMILY pillars in ten minutes. Get a free per-pillar breakdown and a clear read on where the real work is. Built for 2nd-generation owners, $2M–$50M.",
};

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
