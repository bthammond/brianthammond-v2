import Link from "next/link";
import { ArrowRight, Check, BookOpen, Calendar, FileSpreadsheet, MessagesSquare } from "lucide-react";

export const metadata = {
  title: "The FAMILY Framework Architecture",
  description:
    "The signature transformation program for business owners ready to work on the business. Six modules. Weekly sessions. Working tools. Bound companion books. FAMILY is what we build; DESIGN is how we build it.",
};

const modules = [
  {
    id: "M1",
    letter: "F",
    title: "Foundations & Values",
    designStep: "Discover",
    milestones: "Financial baseline complete · Weekly Revenue Target locked · Values written",
  },
  {
    id: "M2",
    letter: "A + M",
    title: "Alignment & Management",
    designStep: "Implement + Govern",
    milestones: "Revenue engine installed · Comp aligned · Marketing calendar live",
  },
  {
    id: "M3",
    letter: "I",
    title: "Innovation & Integration",
    designStep: "Envision + Strategize",
    milestones: "3-year vision published · Strategic priorities cascaded · Pilot designed",
  },
  {
    id: "M4",
    letter: "L",
    title: "Team & Operations",
    designStep: "Implement + Govern",
    milestones: "Org chart built · SOPs operating · CX journey mapped · Reviews active",
  },
  {
    id: "M5",
    letter: "L",
    title: "Leadership Transition",
    designStep: "Implement + Nurture",
    milestones: "Integrator named & trained · Handoff complete · Owner-as-CEO rhythm",
  },
  {
    id: "M6",
    letter: "Y",
    title: "Yield & Feedback",
    designStep: "Govern + Nurture",
    milestones: "Feedback loops live · Legacy plan documented · Next-horizon named · Graduation",
  },
];

const deliverables = [
  {
    icon: FileSpreadsheet,
    title: "The FAMILY Framework Architecture",
    sub: "Your Working System",
    body:
      "A working system tailored to your business size. Diagnostics, financial baselines, KPIs, and weekly plans — all in one place, built for weekly use.",
  },
  {
    icon: BookOpen,
    title: "The Client Workbook",
    sub: "Your Weekly Companion",
    body:
      "A keepsake-quality bound book with one chapter for every week of the program. Teaching, exercises, and reflection space — designed for working in your own handwriting.",
  },
  {
    icon: BookOpen,
    title: "The Advisor Companion",
    sub: "Used by Your Consultant",
    body:
      "A facilitation guide your consultant carries through every session. Ensures consistency and depth across every phase of the program.",
  },
  {
    icon: MessagesSquare,
    title: "Weekly Sessions",
    sub: "The Heartbeat",
    body:
      "60-minute sessions every week, extended at the close of each module. Structured between-session work keeps the program moving.",
  },
];

const milestones = [
  {
    week: "Module 1",
    subtitle: "Foundations & Values",
    items: [
      "Complete financial baseline and Weekly Revenue Target locked",
      "Written core values the team can recite from memory",
      "Two to three measurable quick wins quantified",
      "First 90-day ROI documented",
    ],
  },
  {
    week: "Module 2",
    subtitle: "Alignment & Management",
    items: [
      "Weekly leadership meeting rhythm operating at a self-improving cadence",
      "Sales process and pipeline scoreboard live across all client-facing leads",
      "Marketing calendar producing measurable inquiry flow",
      "Aligned compensation plans rolled out and stabilizing",
      "Average transaction value and retention measurably improved",
    ],
  },
  {
    week: "Module 3",
    subtitle: "Innovation & Integration",
    items: [
      "3-year vision drafted, refined, and cascaded to leadership",
      "Three to five strategic priorities named with owners and metrics",
      "Innovation pilot designed and launched",
    ],
  },
  {
    week: "Module 4",
    subtitle: "Team & Operations",
    items: [
      "Org chart, hiring system, and role scorecards in place for every key role",
      "Standard operating procedures documented, trained, and validated",
      "Customer experience journey map operating with named owners and metrics",
      "First formal performance review cycle complete",
    ],
  },
  {
    week: "Module 5",
    subtitle: "Leadership Transition",
    items: [
      "Integrator (general manager / COO) selected, trained, and in seat",
      "Owner out of daily operations; CEO operating rhythm in place",
      "Owner’s calendar reduced by 30–50% of operational time",
    ],
  },
  {
    week: "Module 6",
    subtitle: "Yield & Feedback — Graduation",
    items: [
      "Stakeholder feedback loops live (clients, team, advisors, family where applicable)",
      "Continuity plan documented and accessible",
      "Next-horizon strategy named and resourced",
      "Owner is operating as CEO. Business operates without daily owner attention.",
    ],
  },
];

const fitYes = [
  "You own or co-own a business with a team you depend on — typically 5 to 250 people, $1M to $250M in revenue",
  "You’ve built it through hard work and personal effort, and can feel that the model has reached its limits",
  "You want to spend less time in daily operations and more on strategic, relational, and personal work",
  "You’re willing to commit to the structured work and be honest about what the business actually is",
  "You want a transformation that holds, not a quick fix that fades",
];

const fitNo = [
  "You want a turnaround consultant to run your business for 90 days and hand it back",
  "You’re looking for a course you can complete on your own time without a weekly cadence",
  "You’re not yet ready to invest in measurement, accountability, and uncomfortable conversations",
  "You want growth without the structural work that sustains it",
];

export default function ArchitecturePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">The Architecture · A program overview</p>
          <h1 className="font-serif mb-6">
            Six modules. One transformation.
          </h1>
          <p className="text-xl mb-6">
            The FAMILY Framework Architecture is the signature transformation program
            for owners ready to work <em>on</em> the business. A complete system — the
            master framework, the working tools, the bound companion books, and a
            consultant who walks the program with you week by week through every phase.
          </p>
          <p className="font-serif text-2xl mb-2">FAMILY by <span className="text-coral">DESIGN</span>.</p>
          <p className="text-sm text-ink-soft mb-8">
            FAMILY is what we build. The <Link href="/design-method" className="link-arrow inline-flex">DESIGN Method</Link> is how we build it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/readiness" className="btn-primary">
              Take the Readiness Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule a discovery conversation
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site grid lg:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <p className="eyebrow mb-4">You&apos;re the right fit if</p>
            <ul className="space-y-3">
              {fitYes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check size={20} className="text-coral shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">This isn&apos;t for you if</p>
            <ul className="space-y-3">
              {fitNo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-muted shrink-0 mt-1 w-5 h-5 text-center leading-none">×</span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Not sure? <Link href="/readiness" className="link-arrow">Take the 15-question Readiness Assessment</Link> — it&apos;ll tell you in fifteen minutes.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20">
        <div className="container-site max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">What you get</p>
            <h2 className="font-serif mb-4">Four deliverables. One integrated system.</h2>
            <p className="text-lg">
              A complete transformation system built around a weekly cadence —
              structured tools, bound companion books, and a consultant walking the
              program with you for through every phase.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map(({ icon: Icon, title, sub, body }) => (
              <div key={title} className="p-8 border border-border rounded-2xl bg-surface">
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                  <Icon size={22} />
                </div>
                <p className="eyebrow mb-2">{sub}</p>
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft">{body}</p>
              </div>
            ))}
          </div>

          {/* Investment */}
          <div className="mt-12 p-10 border-2 border-gold rounded-2xl bg-cream-deep">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="text-center">
                <p className="eyebrow mb-2">Investment</p>
                <p className="font-serif text-5xl text-coral leading-none">$1,964</p>
                <p className="mt-2 text-sm text-ink-soft">per month</p>
              </div>
              <div>
                <p className="text-lg">
                  A committed program with weekly sessions, bound companion
                  books, and the working system. Total program investment is
                  scoped in the discovery conversation based on business size
                  and complexity. The{" "}
                  <Link href="/readiness" className="link-arrow inline-flex">Readiness Assessment</Link>{" "}
                  tells you in fifteen minutes whether the program fits your
                  situation — before any pricing conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YEAR AT A GLANCE */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">Your program at a glance</p>
            <h2 className="font-serif mb-4">Six modules. One arc.</h2>
            <p className="text-lg">
              Anchored to the FAMILY Framework and powered by the DESIGN Method.
              Milestones at the close of every module.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background">
              <thead>
                <tr className="bg-foreground text-white">
                  <th className="text-left px-4 py-4 font-serif text-sm uppercase tracking-widest">Module</th>
                  <th className="text-left px-4 py-4 font-serif text-sm uppercase tracking-widest">Focus</th>
                  <th className="text-left px-4 py-4 font-serif text-sm uppercase tracking-widest">DESIGN step</th>
                  <th className="text-left px-4 py-4 font-serif text-sm uppercase tracking-widest">Milestones</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((m) => (
                  <tr key={m.id} className="border-b border-border align-top">
                    <td className="px-4 py-5 font-semibold whitespace-nowrap">{m.id}</td>
                    <td className="px-4 py-5">
                      <div className="font-serif font-semibold">{m.letter} · {m.title}</div>
                    </td>
                    <td className="px-4 py-5 text-ink-soft text-sm">{m.designStep}</td>
                    <td className="px-4 py-5 text-ink-soft text-sm">{m.milestones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 border-l-4 border-gold bg-cream-deep rounded-r-xl">
            <p className="font-serif text-xl">
              Six modules. Six letters. Six steps. One transformation.
            </p>
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="py-20">
        <div className="container-site max-w-4xl">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Expected outcomes</p>
            <h2 className="font-serif mb-4">What it has typically looked like.</h2>
            <p className="text-lg">
              Not guarantees. The realistic patterns owners experience when they hold
              the discipline of the program.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map(({ week, subtitle, items }) => (
              <div key={week} className="p-6 border border-border rounded-2xl bg-surface">
                <div className="flex items-baseline gap-3 flex-wrap mb-4">
                  <h3 className="font-serif text-2xl">{week}</h3>
                  <span className="text-muted text-sm">·</span>
                  <span className="text-ink-soft text-sm">{subtitle}</span>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={18} className="text-coral shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-foreground text-white rounded-2xl">
            <p className="font-serif text-xl text-white leading-snug">
              What does not change: the values you started with, the relationships
              you&apos;ve built, the work you love. What changes: who you become as a
              leader, and what your business is capable of without you.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-4xl">
          <div className="mb-10">
            <p className="eyebrow mb-4">Next steps</p>
            <h2 className="font-serif">If you&apos;re ready, the path forward is simple.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                title: "Complete the Readiness Assessment",
                body: "Take fifteen minutes with the 15-question self-qualifying assessment. Score honestly. The score will tell you whether the program fits where you are right now.",
                cta: { label: "Take the assessment", href: "/readiness" },
              },
              {
                n: "02",
                title: "Schedule a Discovery Conversation",
                body: "A 45-minute video conversation with Brian. We discuss your business, your situation, your readiness. We answer your questions. No obligation, no pressure.",
                cta: { label: "Schedule the conversation", href: "/contact" },
              },
              {
                n: "03",
                title: "Review the Engagement Letter",
                body: "If discovery indicates fit, you receive an engagement letter outlining the program structure, the cadence, the deliverables, the fees, and the mutual commitments. Take the time you need.",
              },
              {
                n: "04",
                title: "The Kickoff",
                body: "Engagement letter signed, weekly cadence locked, calendar set. Week 1 begins. The Discover step of the DESIGN Method begins. The Architecture begins.",
              },
            ].map(({ n, title, body, cta }) => (
              <div key={n} className="p-8 border border-border rounded-2xl bg-background">
                <p className="font-serif text-3xl text-gold-deep mb-3">{n}</p>
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft mb-4">{body}</p>
                {cta && (
                  <Link href={cta.href} className="link-arrow">
                    {cta.label} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow text-gold mb-4">Ready when you are</p>
          <h2 className="font-serif mb-6 text-white">Start with the Readiness Assessment.</h2>
          <p className="text-xl mb-8 text-white/80">
            Fifteen minutes. Fifteen honest questions. A clear read on whether the
            Architecture is the right next step for where you are today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Start the Readiness Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-foreground">
              Or schedule a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
