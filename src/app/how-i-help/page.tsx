import Link from "next/link";
import { ArrowRight, Target, Users, Check, Sparkles, Compass, Shield } from "lucide-react";

export const metadata = { title: "How I help" };

type Service = {
  id: string;
  icon: typeof Sparkles;
  title: string;
  tagline: string;
  body: string;
  items: string[];
  price?: string;
  footer?: { label: string; href: string };
  primary?: boolean;
  highlight?: string;
};

const services: Service[] = [
  {
    id: "family-framework",
    icon: Sparkles,
    title: "FAMILY Framework Engagement",
    tagline: "The flagship. Multi-month, multi-pillar, built for family businesses that mean it.",
    body: "A structured engagement across all six FAMILY pillars — Foundations, Alignment, Management, Innovation, Leadership, and Yield & Feedback. You come out with the systems, governance, and succession plan the next chapter needs.",
    items: [
      "Six-pillar, multi-month engagement",
      "Family and business assessed together, not separately",
      "Governance, succession, and communication built in",
      "Systems designed to outlast the founder",
      "Best for: $2M–$50M family businesses 5–10 years from transition",
    ],
    price: "$1,964/month · 3-month minimum",
    footer: { label: "See the framework", href: "/family-framework" },
    primary: true,
    highlight: "30-day money-back guarantee on month 1 — if you\u2019re not seeing clear value by day 30, I refund it. No questions.",
  },
  {
    id: "readiness-audit",
    icon: Compass,
    title: "The Readiness Audit",
    tagline: "A paid deep-dive. Not ready for a 90-day engagement? Start here.",
    body: "A 2- to 3-week paid discovery built for owners who want to work with me before committing to the full Framework. We do structured interviews with you and key family members, assess where you stand across the six pillars, and deliver a written report with a clear read on the work ahead.",
    items: [
      "Two to three weeks, start to finish",
      "Two interview sessions with owner + key family members",
      "Written assessment across all six FAMILY pillars",
      "90-minute debrief session with action priorities",
      "100% of the fee credits toward month 1 if you engage the full Framework",
    ],
    price: "$2,000 flat",
    highlight: "Fee credits in full toward the FAMILY Framework engagement — so if you go from Audit to Framework, month 1 is essentially covered.",
  },
  {
    id: "strategy",
    icon: Target,
    title: "Strategy & Succession Consults",
    tagline: "Targeted engagements on a specific problem you need solved now.",
    body: "Shorter, sharper work when you know what\u2019s broken and need outside help fixing it. A stalled strategic plan, a messy governance structure, a succession conversation that keeps getting punted.",
    items: [
      "Strategic planning workshops",
      "Succession roadmap & readiness reviews",
      "Governance structure design",
      "Board & family council facilitation",
      "Best for: owners with a specific problem to solve",
    ],
    price: "Scoped to the problem",
  },
  {
    id: "coaching",
    icon: Users,
    title: "Coaching & Mentorship",
    tagline: "One-on-one work for owners and next-generation leaders.",
    body: "Ongoing coaching for leaders who want a thinking partner in the chair with them. We meet regularly, work on the real problems, and you leave each session with sharper decisions and a clearer head.",
    items: [
      "1:1 founder & owner coaching",
      "Next-gen leader mentoring",
      "Quarterly strategy reviews",
      "Decision-making frameworks",
      "Best for: owners wanting an ongoing outside voice",
    ],
    price: "Monthly retainer",
  },
];

export default function HowIHelp() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">How I help</p>
          <h1 className="font-serif mb-6">
            Four ways to work together. One goal: connect the dots and build the systems to grow.
          </h1>
          <p className="text-xl">
            Most clients start with the FAMILY Framework. Some test the waters with the
            Readiness Audit first. Others come to me for a single-problem consult, or
            ongoing coaching. All four share the same arc — see clearly, build right,
            grow durably.
          </p>
        </div>
      </section>

      {services.map(({ id, icon: Icon, title, tagline, body, items, price, footer, primary, highlight }) => (
        <section
          key={id}
          id={id}
          className={`py-16 border-t border-border ${primary ? "bg-surface" : ""}`}
        >
          <div className="container-site grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="w-14 h-14 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <Icon size={26} />
              </div>
              {primary && <p className="eyebrow mb-3">Flagship engagement</p>}
              <h2 className="font-serif mb-4">{title}</h2>
              <p className="text-xl text-ink-soft">{tagline}</p>
              {price && (
                <p className="mt-4 font-serif text-2xl text-foreground">{price}</p>
              )}
              {footer && (
                <Link href={footer.href} className="link-arrow mt-6 inline-flex">
                  {footer.label} <ArrowRight size={16} />
                </Link>
              )}
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg mb-8">{body}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={20} className="text-coral shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {highlight && (
                <div className="mt-8 flex gap-3 p-5 border border-gold rounded-xl bg-cream-deep">
                  <Shield size={22} className="text-gold-deep shrink-0 mt-1" />
                  <p className="text-ink-soft">{highlight}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-white">Not sure which fits?</h2>
          <p className="text-xl mb-8 text-white/80">
            Start with the diagnostic — it&apos;ll tell you where the real work is.
            Then book a call and we&apos;ll scope the right shape together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnostic" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Take the 10-min diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-foreground">
              Schedule a consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
