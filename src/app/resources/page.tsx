import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Users, Mail, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Workbook, Cohort, and Tools (Coming Soon)",
  description:
    "Lower-ticket resources from Brian T. Hammond: the FAMILY Framework Workbook, the Next-Gen Leader Cohort, and deep-dive toolkits. Get notified when each one opens.",
};

const resources = [
  {
    icon: BookOpen,
    status: "In production",
    title: "The FAMILY Framework Workbook",
    price: "$97",
    body:
      "A self-guided workbook walking you through the six FAMILY pillars — one chapter per domain, with exercises, decision frameworks, and reflection prompts. Built for the owner who wants structure without committing to a full advisory engagement.",
    bullets: [
      "One chapter per FAMILY pillar",
      "Exercises, templates, and reflection prompts",
      "Digital download — print or fill in digitally",
      "Includes a quick-start diagnostic",
    ],
    ctaLabel: "Notify me when it opens",
    emailSubject: "Notify me: FAMILY Framework Workbook",
  },
  {
    icon: Users,
    status: "Accepting interest",
    title: "Next-Gen Leader Cohort",
    price: "$1,500",
    body:
      "A six-week online group program for next-generation leaders preparing to step up in a family business. Small cohort. Structured curriculum. Brian facilitating live. Peers who are wrestling with the same transition.",
    bullets: [
      "Six weeks, small cohort, live sessions with Brian",
      "Built for next-gen leaders (late-20s through mid-40s)",
      "Topics: owner transition, governance, credibility, hard conversations",
      "Ends with a written succession-readiness plan",
    ],
    ctaLabel: "Apply for the next cohort",
    emailSubject: "Apply: Next-Gen Leader Cohort",
  },
  {
    icon: Mail,
    status: "Free",
    title: "The monthly note",
    price: "Free",
    body:
      "One short, practical read per month on running a durable family business. No noise. No fluff. Unsubscribe anytime.",
    bullets: [
      "One email per month",
      "Short reads \u2014 five minutes or less",
      "Straight from Brian\u2019s desk",
      "Unsubscribe anytime",
    ],
    ctaLabel: "Subscribe",
    emailSubject: "Subscribe: The monthly note",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Resources</p>
          <h1 className="font-serif mb-6">
            Lower-commitment ways to work with the FAMILY Framework.
          </h1>
          <p className="text-xl">
            Not everyone is ready for the Architecture program. These resources
            are the on-ramps — self-guided, group-based, or free — for owners
            and next-generation leaders who want to start somewhere smaller.
          </p>
        </div>
      </section>

      {/* RESOURCE CARDS */}
      <section className="py-12">
        <div className="container-site max-w-5xl space-y-6">
          {resources.map(({ icon: Icon, status, title, price, body, bullets, ctaLabel, emailSubject }) => (
            <div
              key={title}
              className="p-8 md:p-10 border border-border rounded-2xl bg-surface"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap mb-2">
                    <span className="eyebrow">{status}</span>
                    {status !== "Free" && (
                      <span className="text-xs text-muted inline-flex items-center gap-1">
                        <Clock size={11} /> Coming soon
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl mb-3">{title}</h2>
                  <p className="text-ink-soft mb-4">{body}</p>
                  <ul className="space-y-1 text-sm text-ink-soft">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-coral">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:text-right">
                  <p className="font-serif text-3xl text-coral mb-4">{price}</p>
                  <a
                    href={`mailto:brian@brianthammond.com?subject=${encodeURIComponent(emailSubject)}`}
                    className="btn-outline inline-flex"
                  >
                    {ctaLabel} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THESE EXIST */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Why these exist</p>
          <h2 className="font-serif mb-6">
            Not every owner should start with a multi-thousand-dollar engagement.
          </h2>
          <p className="text-lg mb-4">
            The Architecture program is the premium end of the practice — it&apos;s
            built for owners who are ready to commit. Most owners aren&apos;t
            there yet. They want to read, learn, take a diagnostic, try the
            framework in their own time.
          </p>
          <p className="text-lg">
            These resources are for them. Work at your own pace. Come back when
            you&apos;re ready for the full engagement. Or don&apos;t — the
            workbook alone will move some owners a long way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-4">Or start here</p>
          <h2 className="font-serif mb-6">
            Take the free Readiness Assessment first.
          </h2>
          <p className="text-xl mb-8">
            Fifteen questions, fifteen minutes. A clear read on whether the
            Architecture program is the right fit — or whether one of these
            resources is a better starting point.
          </p>
          <Link href="/readiness" className="btn-primary">
            Take the Readiness Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
