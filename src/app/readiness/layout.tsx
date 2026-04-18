import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Readiness Assessment",
  description:
    "Fifteen questions in fifteen minutes. Find out whether the FAMILY Framework Architecture program is the right next step for where you are today.",
};

export default function ReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
