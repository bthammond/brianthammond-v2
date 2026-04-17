import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";

export const metadata = { title: "The FAMILY Framework" };

// Public-facing: one line per pillar. The mechanics stay behind the paywall.
const pillars = [
  { letter: "F", word: "Foundations", promise: "Get clear on the values and history that quietly run the business." },
  { letter: "A", word: "Alignment", promise: "Build the communication channels that keep generations in step." },
  { letter: "M", word: "Management", promise: "Put governance and metrics in place that survive the transition." },
  { letter: "I", word: "Innovation", promise: "Evolve the business without breaking what made it work." },
  { letter: "L", word: "Leadership", promise: "Prepare the next generation so the handoff doesn\u2019t fumble." },
  { letter: "Y", word: "Yield & Feedback", promise: "Install the feedback loops that keep the plan honest." },
];

const phases = [
  { n: "01", title: "Discover", body: "We map the family, the business, and the tensions nobody\u2019s naming." },
  { n: "02", title: "Align", body: "We build shared language and goals the whole system can stand behind." },
  { n: "03", title: "Build", body: "We put the structures, governance, and plans in place." },
  { n: "04", title: "Sustain", body: "We install the feedback loops so the work holds, year over year." },
];

const outcomes = [
  "A succession plan the next generation is genuinely ready for — not just a signed document",
  "Governance that separates family dynamics from business decisions",
  "Honest communication channels across generations and branches",
  "A plan that still works a year from now, not just at the offsite",
];

export default function FamilyFramework() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">The FAMILY Framework</p>
          <h1 className="font-serif mb-6">
            Six pillars for family businesses that want to outlast the founder.
          </h1>
          <p className="text-xl mb-6">
            Most family businesses don&apos;t fail because of market forces. They fail
            because of the things nobody wants to talk about: succession, governance,
            communication across generations. FAMILY is the system I&apos;ve built over
            three decades for getting those conversations right — and turning them into
            a business that&apos;s ready for the next chapter.
          </p>
          <p className="text-lg text-ink-soft mb-8 italic">
            I didn&apos;t build this from a textbook. I run my own family business with
            offices stretched across the US. The FAMILY Framework is the system I use
            on my own business first — and the one I&apos;ve refined inside client
            engagements for thirty years.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/diagnostic" className="btn-primary">
              Take the 10-minute diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule a free consult
            </Link>
          </div>
        </div>
      </section>

      {/* BIG LETTERS + PROMISE */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 md:gap-y-0 md:gap-x-4 text-center">
            {pillars.map(({ letter, word }) => (
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
            {pillars.map(({ letter, word, promise }) => (
              <div key={letter} className="flex gap-4">
                <span className="font-serif text-3xl text-gold-deep leading-none shrink-0 w-8">{letter}</span>
                <p><strong className="text-foreground">{word}.</strong> {promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES — the promise, not the mechanics */}
      <section className="py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">What changes</p>
            <h2 className="font-serif mb-6">
              The outcome: a business that&apos;s ready for what&apos;s next.
            </h2>
            <p>
              The framework is the system. But what you&apos;re buying is the outcome
              — a family enterprise that runs on clear agreements instead of unspoken
              assumptions.
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

      {/* PHASES — high level */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">How we work together</p>
            <h2 className="font-serif mb-6">A four-phase engagement.</h2>
            <p className="text-xl">
              Every engagement follows the same arc. The specifics are tailored to
              your family and your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map(({ n, title, body }) => (
              <div key={n} className="p-8 bg-background border border-border rounded-2xl">
                <p className="font-serif text-3xl text-gold-deep mb-2">{n}</p>
                <h3 className="font-serif mb-3">{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPRIETARY NOTE — signals this is real IP */}
      <section className="py-20">
        <div className="container-site max-w-3xl">
          <div className="flex gap-4 p-8 border border-border rounded-2xl bg-cream-deep">
            <Lock size={22} className="text-coral shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-xl mb-2">The methodology stays in the room.</h3>
              <p>
                The exercises, diagnostics, and specific tools inside each pillar are
                proprietary and reserved for client engagements. What you see here is
                the shape — not the playbook. Serious about putting it to work in your
                business? Start with a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-white">Not sure if FAMILY is right for you?</h2>
          <p className="text-xl mb-8 text-white/80">
            Take the 10-minute diagnostic. You&apos;ll get a clear read on where your
            family business stands today and which pillars need the most work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnostic" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Start the diagnostic <ArrowRight size={18} />
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
