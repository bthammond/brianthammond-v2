import Link from "next/link";
import { ArrowRight, Target, Users, Check, Sparkles } from "lucide-react";

export const metadata = { title: "How I help" };

const services = [
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
    footer: { label: "See the framework", href: "/family-framework" },
    primary: true,
  },
  {
    id: "strategy",
    icon: Target,
    title: "Strategy & Succession Consults",
    tagline: "Targeted engagements on a specific problem you need solved now.",
    body: "Shorter, sharper work when you know what&apos;s broken and need outside help fixing it. A stalled strategic plan, a messy governance structure, a succession conversation that keeps getting punted.",
    items: [
      "Strategic planning workshops",
      "Succession roadmap & readiness reviews",
      "Governance structure design",
      "Board & family council facilitation",
      "Best for: owners with a specific problem to solve",
    ],
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
  },
];

export default function HowIHelp() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">How I help</p>
          <h1 className="font-serif mb-6">
            Three ways in. One goal: connect the dots and build the systems to grow.
          </h1>
          <p className="text-xl">
            Most clients start with the FAMILY Framework. Some come to me for a
            single-problem consult. Others want ongoing coaching. All three share
            the same arc — see clearly, build right, grow durably.
          </p>
        </div>
      </section>

      {services.map(({ id, icon: Icon, title, tagline, body, items, footer, primary }) => (
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
              <p className="text-xl text-ink-soft" dangerouslySetInnerHTML={{ __html: tagline }} />
              {footer && (
                <Link href={footer.href} className="link-arrow mt-6 inline-flex">
                  {footer.label} <ArrowRight size={16} />
                </Link>
              )}
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg mb-8" dangerouslySetInnerHTML={{ __html: body }} />
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={20} className="text-coral shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
