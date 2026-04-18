import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";

export const metadata = {
  title: "The FAMILY Framework",
  description:
    "Six domains of work for building a durable business: Foundations, Alignment, Management, Innovation, Leadership, and Yield & Feedback. FAMILY is what we build; the DESIGN Method is how we build it.",
};

// Public-facing: one line per domain. The mechanics stay behind the paywall.
const domains = [
  {
    letter: "F",
    word: "Foundations & Values",
    promise: "History, legacy, and the core values that drive how the business actually decides.",
  },
  {
    letter: "A",
    word: "Alignment & Aspirations",
    promise: "Communication channels and goals shared across team, leadership, and (where applicable) family.",
  },
  {
    letter: "M",
    word: "Monitoring & Management",
    promise: "Governance, KPIs, and the operating rhythm that makes accountability visible.",
  },
  {
    letter: "I",
    word: "Innovation & Integration",
    promise: "Evolution, diversification, and capability development that carry the business forward.",
  },
  {
    letter: "L",
    word: "Leadership Transition",
    promise: "Succession, mentoring, and the stewardship discipline that prepares the next generation.",
  },
  {
    letter: "Y",
    word: "Yield & Feedback",
    promise: "Feedback mechanisms, advisor engagement, and continuous improvement over time.",
  },
];

const outcomes = [
  "A succession or transition plan the next generation is genuinely ready for — not just a signed document",
  "Governance that separates family or ownership dynamics from business decisions",
  "KPIs and an operating rhythm that make accountability visible every week",
  "Systems and people capable of running the business without you in it every day",
];

export default function FamilyFramework() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">The FAMILY Framework</p>
          <h1 className="font-serif mb-6">
            Six domains for building a business that outlasts the founder.
          </h1>
          <p className="text-xl mb-6">
            Most businesses stall because of the work owners don&apos;t want to do —
            the succession, the governance, the KPIs, the generational conversation.
            FAMILY is the system I&apos;ve built over three decades of advising family
            enterprises, founders, and established mid-market companies. Six domains,
            addressed across the full arc of an engagement.
          </p>
          <p className="text-lg text-ink-soft mb-8">
            <strong>FAMILY is what we build.</strong> The <Link href="/design-method" className="link-arrow inline-flex">DESIGN Method</Link> is how we build it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/architecture" className="btn-primary">
              See the 117-week Architecture program <ArrowRight size={18} />
            </Link>
            <Link href="/diagnostic" className="btn-outline">
              Take the 10-minute diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* BIG LETTERS + PROMISE */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 md:gap-y-0 md:gap-x-4 text-center">
            {domains.map(({ letter, word }) => (
              <div key={letter} className="flex flex-col items-center min-w-0">
                <span className="font-serif text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-coral leading-none">
                  {letter}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-ink-soft mt-3 font-semibold px-1 leading-tight">
                  {word}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {domains.map(({ letter, word, promise }) => (
              <div key={letter} className="flex gap-4">
                <span className="font-serif text-3xl text-gold-deep leading-none shrink-0 w-8">{letter}</span>
                <p><strong className="text-foreground">{word}.</strong> {promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO FRAMEWORKS */}
      <section className="py-20">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">Two frameworks, working together</p>
          <h2 className="font-serif mb-6">FAMILY is the content. DESIGN is the discipline.</h2>
          <p className="text-lg mb-10">
            FAMILY names the six domains we build across an engagement. The DESIGN
            Method is the repeatable discipline applied to every priority, every
            quarter, every hard question — in the program and for the rest of your
            career as an owner.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border-2 border-coral rounded-2xl bg-background">
              <p className="eyebrow mb-3">FAMILY</p>
              <h3 className="font-serif mb-3">Six domains — what we build</h3>
              <p className="mb-6 text-ink-soft">Foundations. Alignment. Management. Innovation. Leadership. Yield & Feedback.</p>
              <span className="text-muted text-sm">You&apos;re on the page.</span>
            </div>
            <div className="p-8 border-2 border-gold rounded-2xl bg-background">
              <p className="eyebrow mb-3">DESIGN</p>
              <h3 className="font-serif mb-3">Six steps — how we build</h3>
              <p className="mb-6 text-ink-soft">Discover. Envision. Strategize. Implement. Govern. Nurture.</p>
              <Link href="/design-method" className="link-arrow">
                Explore DESIGN <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site grid lg:grid-cols-12 gap-12 max-w-5xl">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">What changes</p>
            <h2 className="font-serif mb-6">
              The outcome: a business capable of running without you in it every day.
            </h2>
            <p>
              The framework is the system. But what you&apos;re buying is the outcome —
              an enterprise that runs on clear agreements, visible scoreboards, and
              named accountability, instead of on your presence.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check size={22} className="text-coral shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROPRIETARY NOTE */}
      <section className="py-20">
        <div className="container-site max-w-3xl">
          <div className="flex gap-4 p-8 border border-border rounded-2xl bg-cream-deep">
            <Lock size={22} className="text-coral shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-xl mb-2">The methodology stays in the room.</h3>
              <p>
                The exercises, diagnostics, and specific tools inside each domain are
                proprietary and reserved for client engagements — delivered through
                the 117-week Architecture program with a bound Client Workbook, a
                21-tab Excel working system, and weekly consulting sessions. What you
                see on this page is the shape, not the playbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-white">Ready to put FAMILY to work?</h2>
          <p className="text-xl mb-8 text-white/80">
            The Architecture is the 117-week program where FAMILY and the DESIGN
            Method meet your business. Start with the Readiness Assessment to see if
            it&apos;s the right next step for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Take the Readiness Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/architecture" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-foreground">
              See the Architecture program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
