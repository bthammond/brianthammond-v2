import Link from "next/link";
import { ArrowRight, Sparkles, MessagesSquare, Home, Rocket, Calculator, Check } from "lucide-react";

export const metadata = {
  title: "How I help — The Architecture Program and Four Practice Areas",
  description:
    "The FAMILY Framework Architecture is the flagship 117-week program. Practice areas: Consulting & Coaching, Family Enterprise, Entrepreneur Strategy, and Financial Analysis.",
};

const practiceAreas = [
  {
    id: "consulting-coaching",
    icon: MessagesSquare,
    title: "Consulting & Coaching",
    body: "Long-form transformation engagements for owners and leadership teams. Deep structural work on operating rhythm, strategic priorities, decision-rights, and the owner's own leadership practice. The Architecture program lives here, along with shorter scoped engagements where the fit is right.",
    highlights: [
      "Weekly sessions with structured between-session work",
      "Scoreboards and cadences installed",
      "Leadership practices built, not just discussed",
    ],
  },
  {
    id: "family-enterprise",
    icon: Home,
    title: "Family Enterprise",
    body: "Multi-generational family businesses navigating governance, succession, and continuity. The conversations most families can't have without someone in the middle — next-generation readiness, role clarity, shareholder agreements, family councils, and the quiet work of preparing a legacy to transfer.",
    highlights: [
      "Governance structures that separate family and business",
      "Succession plans the next generation is actually ready for",
      "Communication channels that outlast the founding owner",
    ],
  },
  {
    id: "entrepreneur-strategy",
    icon: Rocket,
    title: "Entrepreneur Strategy",
    body: "Founders and CEOs scaling beyond the founder-dependent stage. The systems, hires, and operating discipline that turn a business running on your presence into one running on structure. Includes the hardest step of all — hiring the Integrator and actually letting them lead.",
    highlights: [
      "Getting out of daily operations without losing the thread",
      "Building the leadership team the next chapter requires",
      "The operator's transition from founder to CEO",
    ],
  },
  {
    id: "financial-analysis",
    icon: Calculator,
    title: "Financial Analysis",
    body: "Diagnostic and strategic financial work supporting major decisions. KPIs owners should know cold. Unit economics. Financial baselines and targets. The numbers you need to see to make the strategic moves with confidence instead of hope.",
    highlights: [
      "Financial baseline and Weekly Revenue Target",
      "KPI scoreboard across growth, profit, and cash",
      "Analysis to support pricing, hiring, and expansion decisions",
    ],
  },
];

export default function HowIHelp() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">How I help</p>
          <h1 className="font-serif mb-6">
            One flagship program. Four practice areas.
          </h1>
          <p className="text-xl mb-6">
            Most of the work I do sits inside the Architecture — a 117-week
            transformation program for owners ready to work on the business. The
            four practice areas below describe the contexts where that work lives.
          </p>
          <p className="text-lg text-ink-soft">
            <strong>FAMILY is what we build.</strong> The <Link href="/design-method" className="link-arrow inline-flex">DESIGN Method</Link> is how we build it.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE FLAGSHIP CARD */}
      <section className="pb-8">
        <div className="container-site max-w-5xl">
          <div className="p-10 border-2 border-coral rounded-2xl bg-surface">
            <div className="flex items-start gap-6 mb-6 flex-wrap">
              <div className="w-14 h-14 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                <Sparkles size={26} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="eyebrow mb-2">Flagship program</p>
                <h2 className="font-serif mb-3">The FAMILY Framework Architecture</h2>
                <p className="text-lg text-ink-soft">
                  A complete transformation system: the master framework, a 21-tab
                  Excel working system, a bound Client Workbook (539 pages), the
                  Advisor Companion, and a consultant walking the program with you
                  week by week for two and a quarter years.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <p className="eyebrow mb-3">Structure</p>
                <ul className="space-y-2 text-ink-soft">
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>117 weeks across six modules</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Weekly 60-minute consulting sessions</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Structured between-session work</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Bound companion books for both sides</span></li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Fit</p>
                <ul className="space-y-2 text-ink-soft">
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Businesses of 5–250 people, $1M–$250M</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Owner with authority to commit two years</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Willing to do measurement and accountability</span></li>
                  <li className="flex gap-3"><Check size={18} className="text-coral shrink-0 mt-1" /><span>Wants a transformation that holds, not a quick fix</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="eyebrow mb-2">Investment</p>
              <p className="font-serif text-2xl">$1,964 / month · 27 months</p>
              <p className="text-sm text-muted mt-2">
                Total program investment is scoped in the discovery conversation
                based on business size and complexity. The Readiness Assessment
                tells you in fifteen minutes whether the program fits your situation
                before any pricing conversation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/architecture" className="btn-primary">
                See the full program <ArrowRight size={18} />
              </Link>
              <Link href="/readiness" className="btn-outline">
                Take the Readiness Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PRACTICE AREAS */}
      <section className="py-16">
        <div className="container-site max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Practice areas</p>
            <h2 className="font-serif mb-4">Four contexts where the work lives.</h2>
            <p className="text-lg">
              The Architecture is the primary vehicle. The practice areas below
              describe the specific contexts where it applies — and where shorter,
              scoped engagements also make sense when the situation calls for them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practiceAreas.map(({ id, icon: Icon, title, body, highlights }) => (
              <div key={id} id={id} className="p-8 border border-border rounded-2xl bg-surface">
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft mb-6">{body}</p>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <Check size={16} className="text-coral shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-white">Not sure which fits?</h2>
          <p className="text-xl mb-8 text-white/80">
            Start with the 10-minute diagnostic for a read on where the business
            stands, or take the Readiness Assessment to see whether the full
            Architecture program is a fit. Either way, the discovery conversation
            is where we scope the right engagement together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Readiness Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-foreground">
              Schedule a discovery conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
