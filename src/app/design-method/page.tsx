import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "The DESIGN Method — A Six-Step Discipline for Any Strategic Question",
  description:
    "The discipline we apply to every strategic question: Discover, Envision, Strategize, Implement, Govern, Nurture. FAMILY is what we build. DESIGN is how we build it.",
};

const steps = [
  {
    letter: "D",
    word: "Discover",
    tag: "Honest assessment",
    body: "Numbers, evidence, behaviors — not opinions. Before anything else, you see the business as it actually is. Financial baseline, leadership self-assessment, customer reality. No spin, no hope.",
  },
  {
    letter: "E",
    word: "Envision",
    tag: "Destination in present tense",
    body: "Clarify where you’re going in specific, present-tense language. A future you can describe, not a slogan you can recite. Vision without specificity is wishful thinking.",
  },
  {
    letter: "S",
    word: "Strategize",
    tag: "The few priorities",
    body: "Choose the three to five priorities that close the gap between where the business is and where you envisioned it going. Everything else waits. The hardest part of strategy is what you say no to.",
  },
  {
    letter: "I",
    word: "Implement",
    tag: "The disciplined daily work",
    body: "Execution beats planning, every time. Weekly cadence. Named owners. Metrics visible. Priorities on the board, reviewed in the room, moved forward every week.",
  },
  {
    letter: "G",
    word: "Govern",
    tag: "Rhythms that make accountability visible",
    body: "Scoreboards, cadences, reviews. The operating system that keeps the team honest with itself. Governance isn’t bureaucracy — it’s the discipline that makes momentum compound.",
  },
  {
    letter: "N",
    word: "Nurture",
    tag: "Sustain the gains; build the legacy",
    body: "Develop the next generation of leaders. Refresh the priorities. Feed the feedback loops. Sustain what you built so the next quarter, the next year, and the next generation inherit a business in better shape than they found it.",
  },
];

export default function DesignMethodPage() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">The DESIGN Method</p>
          <h1 className="font-serif mb-6">
            A six-step discipline for any strategic question.
          </h1>
          <p className="text-xl mb-6">
            FAMILY is the content we build — six domains of structural work,
            one durable business. The DESIGN Method is the discipline we apply to
            every strategic question along the way. Six steps. Used every quarter,
            every priority, every hard decision — during the program and for
            the rest of your career as an owner.
          </p>
          <p className="font-serif text-2xl mb-2">FAMILY by <span className="text-coral">DESIGN</span>.</p>
          <p className="text-sm text-ink-soft">
            FAMILY is what we build. DESIGN is how we build it.
          </p>
        </div>
      </section>

      {/* BIG LETTERS */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container-site">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 md:gap-y-0 md:gap-x-4 text-center">
            {steps.map(({ letter, word }) => (
              <a
                key={letter}
                href={`#${letter.toLowerCase()}`}
                className="group flex flex-col items-center min-w-0"
              >
                <span className="font-serif text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-coral group-hover:text-coral-deep transition leading-none">
                  {letter}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-ink-soft mt-3 font-semibold px-1 leading-tight">
                  {word}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS IN DETAIL */}
      {steps.map(({ letter, word, tag, body }) => (
        <section key={letter} id={letter.toLowerCase()} className="py-16 border-t border-border">
          <div className="container-site grid lg:grid-cols-12 gap-12 max-w-5xl">
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-8xl text-coral leading-none">{letter}</span>
              </div>
              <h2 className="font-serif">{word}</h2>
              <p className="eyebrow mt-3">{tag}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed">{body}</p>
            </div>
          </div>
        </section>
      ))}

      {/* HOW IT PAIRS WITH FAMILY */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">Two frameworks, working together</p>
          <h2 className="font-serif mb-6">FAMILY is the content. DESIGN is the discipline.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-coral rounded-2xl bg-background">
              <p className="eyebrow mb-3">FAMILY</p>
              <h3 className="font-serif mb-3">Six domains — what we build</h3>
              <p className="mb-6">
                Foundations & Values. Alignment & Aspirations. Monitoring & Management.
                Innovation & Integration. Leadership Transition. Yield & Feedback.
              </p>
              <Link href="/family-framework" className="link-arrow">
                Explore FAMILY <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-8 border-2 border-gold rounded-2xl bg-background">
              <p className="eyebrow mb-3">DESIGN</p>
              <h3 className="font-serif mb-3">Six steps — how we build</h3>
              <p className="mb-6">
                Discover. Envision. Strategize. Implement. Govern. Nurture.
                The discipline applied to every strategic question, forever.
              </p>
              <span className="text-muted text-sm">You&apos;re on the page.</span>
            </div>
          </div>
          <p className="mt-10 font-serif text-2xl text-center text-ink-soft">
            Six letters. Six steps. <span className="underline-wavy">Held forever.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-4">Put it to work</p>
          <h2 className="font-serif mb-6">
            The Architecture is where FAMILY and DESIGN meet.
          </h2>
          <p className="text-xl mb-8">
            Structured, disciplined work across six modules — the two frameworks
            applied week by week to your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/architecture" className="btn-primary">
              See the Architecture program <ArrowRight size={18} />
            </Link>
            <Link href="/readiness" className="btn-outline">
              Take the Readiness Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
