import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Check, Sparkles, Compass } from "lucide-react";

const familyLetters = [
  { letter: "F", word: "Foundations" },
  { letter: "A", word: "Alignment" },
  { letter: "M", word: "Management" },
  { letter: "I", word: "Innovation" },
  { letter: "L", word: "Leadership" },
  { letter: "Y", word: "Yield & Feedback" },
];

const designSteps = [
  { letter: "D", word: "Discover" },
  { letter: "E", word: "Envision" },
  { letter: "S", word: "Strategize" },
  { letter: "I", word: "Implement" },
  { letter: "G", word: "Govern" },
  { letter: "N", word: "Nurture" },
];

const faqs = [
  {
    q: "What is the FAMILY Framework Architecture?",
    a: "A structured, multi-module transformation program for business owners ready to move from working in the business to working on it. Six modules. Weekly sessions. A working system. Bound Client and Advisor Companion books. Built around the FAMILY Framework and powered by the DESIGN Method.",
  },
  {
    q: "Who is this program for?",
    a: "Owners or co-owners of businesses with 5 to 250 people and $1M to $250M in annual revenue. Family enterprises, founder-led businesses, and established mid-market companies. The common thread is willingness to commit to structural work — not a quick fix.",
  },
  {
    q: "How is this different from hiring a business coach or a consulting firm?",
    a: "A coach works on you. A consulting firm does the work for you for a quarter and hands it back. The Architecture program does neither. It's a structured, week-by-week practice you build into the business, with a consultant walking the discipline alongside you through the program. The goal is a business that runs on structure, not on presence.",
  },
  {
    q: "How much does the program cost?",
    a: "Pricing starts at $1,964 per month, and total program investment is scoped in the discovery conversation — every engagement is sized to the business, the team, and the specific work ahead. The 15-question Readiness Assessment tells you in fifteen minutes whether the program fits where you are today, before any conversation about investment.",
  },
  {
    q: "What is the DESIGN Method?",
    a: "FAMILY names the six domains we build (Foundations, Alignment, Management, Innovation, Leadership, Yield & Feedback). The DESIGN Method names the six steps we use to build each one: Discover, Envision, Strategize, Implement, Govern, Nurture. FAMILY is the content. DESIGN is the discipline. Six letters and six steps, used together.",
  },
  {
    q: "Do you work with businesses that aren't family-owned?",
    a: "Yes. Family Enterprise is one of four practice areas, alongside Consulting & Coaching, Entrepreneur Strategy, and Financial Analysis. The Architecture works for family businesses, founder-led businesses, and established mid-market companies alike. The diagnostic and the readiness work the same across contexts.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-24">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Strategic consultant · Family-business specialist · Builder of leaders</p>
            <h1 className="font-serif mb-6">
              You&apos;re in the business. That&apos;s why you can&apos;t see the <span className="underline-wavy">dots</span>.
            </h1>
            <p className="text-xl max-w-xl mb-6">
              I help business owners — family enterprises, founders, and
              established mid-market companies — do the long structural work of
              moving from working <em>in</em> the business to working <em>on</em> it.
              A structured program. Two frameworks. One transformation.
            </p>
            <p className="text-lg text-ink-soft mb-8">
              <strong>FAMILY is what we build.</strong> The <Link href="/design-method" className="link-arrow inline-flex">DESIGN Method</Link> is how we build it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/readiness" className="btn-primary">
                Take the Readiness Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/architecture" className="btn-outline">
                See the Architecture program
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] bg-coral/10 rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/Hammond-Headshot.jpg"
                  alt="Brian T. Hammond, strategic consultant and family business specialist"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-2xl p-4 shadow-lg hidden md:block">
                <p className="text-xs uppercase tracking-widest text-muted">Credential</p>
                <p className="font-serif text-lg mt-1">MBA, LSU</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-foreground rounded-2xl p-4 shadow-lg hidden md:block">
                <p className="text-xs uppercase tracking-widest font-bold">Experience</p>
                <p className="font-serif text-lg mt-1">30+ years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-4xl text-center">
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="font-serif mb-8">
            You can&apos;t read the label from inside the bottle.
          </h2>
          <p className="text-xl leading-relaxed">
            Businesses don&apos;t stall because owners aren&apos;t smart. They stall
            because owners are <em>in</em> the business — running the day —
            and can&apos;t see the patterns from that seat. The succession that
            nobody&apos;s actually planning for. The communication that&apos;s
            drifted. The systems that worked at $2M and quietly break at $20M. You
            know something&apos;s off. You can&apos;t quite name it. That&apos;s the
            job.
          </p>
        </div>
      </section>

      {/* TWO FRAMEWORKS */}
      <section className="py-24">
        <div className="container-site max-w-5xl">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">Two frameworks, working together</p>
            <h2 className="font-serif mb-6">
              FAMILY is the content. DESIGN is the discipline.
            </h2>
            <p className="text-xl">
              Six domains of work we build across the program. Six steps of discipline
              we apply to every priority, every quarter, every hard decision — during
              the program and for the rest of your career as an owner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAMILY */}
            <Link
              href="/family-framework"
              className="group p-8 border-2 border-coral rounded-2xl bg-surface hover:shadow-lg transition"
            >
              <p className="eyebrow mb-4">FAMILY · what we build</p>
              <div className="grid grid-cols-6 gap-1 mb-6">
                {familyLetters.map(({ letter, word }) => (
                  <div key={letter} className="text-center min-w-0">
                    <div className="font-serif text-3xl text-coral leading-none">{letter}</div>
                    <div className="text-[9px] uppercase tracking-wider text-ink-soft mt-1 truncate">{word}</div>
                  </div>
                ))}
              </div>
              <p className="text-ink-soft mb-4">
                Foundations, Alignment, Management, Innovation, Leadership, Yield &
                Feedback. The six domains of a durable business.
              </p>
              <span className="link-arrow">
                Explore FAMILY <ArrowRight size={16} />
              </span>
            </Link>

            {/* DESIGN */}
            <Link
              href="/design-method"
              className="group p-8 border-2 border-gold rounded-2xl bg-surface hover:shadow-lg transition"
            >
              <p className="eyebrow mb-4">DESIGN · how we build</p>
              <div className="grid grid-cols-6 gap-1 mb-6">
                {designSteps.map(({ letter, word }) => (
                  <div key={letter} className="text-center min-w-0">
                    <div className="font-serif text-3xl text-gold-deep leading-none">{letter}</div>
                    <div className="text-[9px] uppercase tracking-wider text-ink-soft mt-1 truncate">{word}</div>
                  </div>
                ))}
              </div>
              <p className="text-ink-soft mb-4">
                Discover, Envision, Strategize, Implement, Govern, Nurture. The
                discipline applied to every strategic question, forever.
              </p>
              <span className="link-arrow">
                Explore DESIGN <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE TEASER */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">The Architecture</p>
            <h2 className="font-serif mb-6">
              Six modules. One transformation.
            </h2>
            <p className="text-xl">
              The Architecture is the signature program where the two frameworks
              meet your business. Weekly sessions. A working system.
              Bound companion books. Structured, disciplined work — week by week,
              module by module.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/architecture" className="btn-primary">
              Explore the Architecture <ArrowRight size={18} />
            </Link>
            <Link href="/readiness" className="btn-outline">
              See where you stand (15 min)
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME — real social proof */}
      <section className="py-24">
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">Why work with me</p>
            <h2 className="font-serif mb-6">
              Four things most advisors in this space can&apos;t say.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "30+",
                label: "Years advising owners",
                body: "Three decades across Fortune 500 boardrooms, startups, and family-owned businesses. Pattern recognition earned the hard way.",
              },
              {
                stat: "I live it",
                label: "Practitioner, not theorist",
                body: "I own and operate my own multi-office family business. When I talk about succession, I’m reporting from the same seat you’re sitting in.",
              },
              {
                stat: "6 + 6",
                label: "Two frameworks, not one",
                body: "FAMILY names the six domains we build. DESIGN names the six steps we use. The content and the discipline, held together, across every phase of the program.",
              },
              {
                stat: "Weekly",
                label: "A program, not a sprint",
                body: "A committed cadence of weekly sessions, structured work, and bound companion books. Built for transformation that holds, not a quick fix that fades.",
              },
            ].map(({ stat, label, body }) => (
              <div key={label} className="p-8 border border-border rounded-2xl bg-surface">
                <p className="font-serif text-4xl text-coral leading-none mb-2">{stat}</p>
                <p className="eyebrow mb-4">{label}</p>
                <p className="text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Who I help</p>
            <h2 className="font-serif mb-6">
              Owners ready to build something durable.
            </h2>
            <p className="mb-6">
              Family enterprises, founder-led businesses, and established mid-market
              companies. Typically 5 to 250 people, $1M to $250M in revenue. The
              common thread is willingness to do the structural work the next
              chapter requires.
            </p>
            <Link href="/who-i-help" className="link-arrow">
              See if this is you <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 border border-border rounded-2xl bg-background">
              <p className="eyebrow mb-4">The shape of the right owner</p>
              <h3 className="font-serif mb-4">Built something real. Ready to build something durable.</h3>
              <ul className="space-y-3">
                {[
                  "5 to 250 people, $1M to $250M in revenue",
                  "Owner or co-owner with authority over major decisions",
                  "Built through hard work; the model has reached its limits",
                  "Ready to work on the business, not just in it",
                  "Willing to commit to real structural work",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={18} className="text-coral shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-20">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">How I help</p>
            <h2 className="font-serif">One flagship program. Four practice areas.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "The Architecture",
                body: "The structured flagship transformation program. Weekly sessions, bound companions, a 21-tab working system.",
                href: "/architecture",
                primary: true,
              },
              {
                title: "Consulting & Coaching",
                body: "Long-form transformation engagements for owners and leadership teams. The Architecture lives here.",
                href: "/how-i-help#consulting-coaching",
              },
              {
                title: "Family Enterprise",
                body: "Multi-generational family businesses navigating governance, succession, and continuity.",
                href: "/how-i-help#family-enterprise",
              },
              {
                title: "Entrepreneur Strategy",
                body: "Founders and CEOs scaling beyond the founder-dependent stage.",
                href: "/how-i-help#entrepreneur-strategy",
              },
            ].map(({ icon: Icon, title, body, href, primary }) => (
              <Link
                key={title}
                href={href}
                className={`group p-8 border rounded-2xl bg-surface hover:border-coral transition-colors ${
                  primary ? "border-coral" : "border-border"
                }`}
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 group-hover:bg-coral group-hover:text-white transition">
                    <Icon size={22} />
                  </div>
                )}
                {primary && <p className="eyebrow mb-2">Flagship</p>}
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft mb-6">{body}</p>
                <span className="link-arrow">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-muted">
            Also available: <Link href="/how-i-help#financial-analysis" className="link-arrow">Financial Analysis</Link> — diagnostic and strategic financial work supporting major decisions.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Frequently asked</p>
          <h2 className="font-serif mb-10">Questions I get every week.</h2>
          <div className="divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-serif text-xl hover:text-coral transition-colors">
                  <span>{q}</span>
                  <span className="text-coral text-2xl leading-none mt-1 transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-3 text-ink-soft leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC CTA */}
      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-4">Start here</p>
          <h2 className="font-serif mb-6">
            Two assessments. Pick the one that fits.
          </h2>
          <p className="text-xl mb-8">
            The 10-minute FAMILY diagnostic scores your <em>business</em> across the
            six domains. The 15-minute Readiness Assessment scores <em>you</em> on
            fit for the Architecture program. Start with whichever feels more
            urgent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary">
              Readiness Assessment (15 min) <ArrowRight size={18} />
            </Link>
            <Link href="/diagnostic" className="btn-outline">
              Business Diagnostic (10 min)
            </Link>
          </div>
        </div>
      </section>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
