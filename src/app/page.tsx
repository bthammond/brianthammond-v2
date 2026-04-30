import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  ArrowRight,
  Check,
  Sparkles,
  Compass,
  GraduationCap,
  Building2,
  Mic,
  Star,
} from "lucide-react";
import { INSIGHTS } from "@/lib/insights";

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

const credentials = [
  "Founder · BLE Training",
  "MBA · LSU Shreveport",
  "Goldman Sachs 10KSB",
  "Dartmouth Tuck Executive",
  "Leadership Maryland",
  "ACP Mentor",
  "Capital One · Goodyear · CompUSA",
  "Chief Learning Officer",
];

const valueProps = [
  {
    icon: Compass,
    eyebrow: "Advise",
    title: "Owner advisory",
    body:
      "Family enterprises, founder-led businesses, and mid-market companies navigating succession, growth, and the work of becoming durable.",
  },
  {
    icon: GraduationCap,
    eyebrow: "Develop",
    title: "Leadership & training",
    body:
      "Two decades designing learning and development inside Capital One, Goodyear, and CompUSA. The same rigor, brought to owner-led businesses.",
  },
  {
    icon: Building2,
    eyebrow: "Scale",
    title: "Operating systems",
    body:
      "BLE Training scaled from one location to a multi-office, multi-state operation. The discipline that built it is the discipline I bring to your business.",
  },
];

const services = [
  {
    title: "The Architecture",
    body:
      "The signature transformation program. Six modules, monthly sessions, bound companion books, and a working system. Built around FAMILY by DESIGN.",
    href: "/architecture",
    primary: true,
    icon: Sparkles,
  },
  {
    title: "Family Enterprise",
    body:
      "Multi-generational businesses navigating governance, succession, and continuity. The work that protects what was built.",
    href: "/how-i-help#family-enterprise",
    icon: Compass,
  },
  {
    title: "Leadership & Training",
    body:
      "Designed learning, onboarding, and coaching frameworks for owner-led teams. Enterprise rigor, owner-friendly scale.",
    href: "/how-i-help#consulting-coaching",
    icon: GraduationCap,
  },
  {
    title: "Speaking & Workshops",
    body:
      "Keynotes and intensives for family-business associations, mid-market peer groups, and leadership development programs.",
    href: "/contact",
    icon: Mic,
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "Brian helped us see what we couldn’t see from inside. We finally have a succession plan the whole family has bought into. That alone was worth every dollar.",
    name: "M.R.",
    role: "2nd-Generation Owner",
    company: "Manufacturing · $18M revenue",
  },
  {
    stars: 5,
    quote:
      "I’d been running my business for 22 years and thought I knew everything. Brian showed me the patterns I was blind to. The FAMILY Framework gave us a language to talk about things we’d been avoiding for a decade.",
    name: "D.T.",
    role: "Founder & CEO",
    company: "Distribution · $45M revenue",
  },
  {
    stars: 5,
    quote:
      "The Architecture is unlike anything else. It’s not coaching, it’s not consulting — it’s a complete operating system for the business. We’re a different company months later.",
    name: "K.W.",
    role: "Co-Owner",
    company: "Family Enterprise · $12M revenue",
  },
];

const faqs = [
  {
    q: "Who is Brian T. Hammond?",
    a: "A strategic consultant, Chief Learning Officer, and founder of BLE Training. Two decades inside Capital One, Goodyear, and CompUSA designing leadership and learning systems — followed by building and operating a multi-office family business of his own. He works at the intersection of advisory, training, and ownership.",
  },
  {
    q: "What is the FAMILY Framework Architecture?",
    a: "A structured, multi-module transformation program for business owners ready to move from working in the business to working on it. Six modules. Monthly sessions. A working system. Bound Client and Advisor Companion books. Built around the FAMILY Framework and powered by the DESIGN Method.",
  },
  {
    q: "Who is this program for?",
    a: "Owners or co-owners of businesses with 5 to 250 people and $2M to $250M in annual revenue. Family enterprises, founder-led businesses, and established mid-market companies. The common thread is willingness to commit to structural work — not a quick fix.",
  },
  {
    q: "How is this different from hiring a business coach or a consulting firm?",
    a: "A coach works on you. A consulting firm does the work for you for a quarter and hands it back. The Architecture program does neither. It’s a structured, month-by-month practice you build into the business, with a consultant walking the discipline alongside you. The goal is a business that runs on structure, not on presence.",
  },
  {
    q: "How much does the program cost?",
    a: "Pricing starts at $1,964 per month, and total program investment is scoped in the discovery conversation — every engagement is sized to the business, the team, and the specific work ahead. The 15-question Readiness Assessment tells you in fifteen minutes whether the program fits where you are today.",
  },
  {
    q: "Do you work with businesses that aren’t family-owned?",
    a: "Yes. Family Enterprise is one of four practice areas, alongside Consulting & Coaching, Entrepreneur Strategy, and Financial Analysis. The Architecture works for family businesses, founder-led businesses, and established mid-market companies alike.",
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
  const featuredInsights = INSIGHTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-24">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">
              Strategic consultant · Chief Learning Officer · Founder, BLE Training
            </p>
            <h1 className="font-serif mb-6">
              You&apos;re in the business. That&apos;s why you can&apos;t see the{" "}
              <span className="underline-wavy">dots</span>.
            </h1>
            <p className="text-xl max-w-xl mb-6">
              I help business owners make the hardest shift there is — from
              working <em>in</em> the business to working <em>on</em> it. What
              changes: who you become as a leader, and what the business is
              capable of without you in it every day.
            </p>
            <p className="font-serif text-2xl mb-2">
              FAMILY by <span className="text-coral">DESIGN</span>.
            </p>
            <p className="text-sm text-ink-soft mb-8">
              FAMILY is what we build. The{" "}
              <Link href="/design-method" className="link-arrow inline-flex">
                DESIGN Method
              </Link>{" "}
              is how we build it.
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
                <p className="text-xs uppercase tracking-widest text-muted">
                  Based in
                </p>
                <p className="font-serif text-lg mt-1">Ellicott City, MD</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-foreground rounded-2xl p-4 shadow-lg hidden md:block">
                <p className="text-xs uppercase tracking-widest font-bold">
                  Experience
                </p>
                <p className="font-serif text-lg mt-1">30+ years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL MARQUEE */}
      <section className="py-8 border-y border-border bg-cream-deep/40 overflow-hidden">
        <div className="marquee text-sm uppercase tracking-[0.18em] text-muted">
          {[...credentials, ...credentials].map((c, i) => (
            <span key={`${c}-${i}`} className="flex items-center gap-4">
              {c}
              <span className="text-coral">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-surface border-b border-border">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4 text-center">The problem</p>
          <h2 className="font-serif mb-8 text-center">
            You can&apos;t read the label from inside the bottle.
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-center">
            Businesses don&apos;t stall because owners aren&apos;t smart. They stall
            because owners are <em>in</em> the business — running the day — and
            can&apos;t see the patterns from that seat.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
            {[
              {
                bold: "The 3am succession fear.",
                body: "You know the transition is coming. You also know nobody’s actually planning it. So it sits there.",
              },
              {
                bold: "The conversations no one has at dinner.",
                body: "Sibling friction. An heir who isn’t ready. A spouse who resents the business. Everyone feels it. Nobody names it.",
              },
              {
                bold: "Systems that worked at $2M and break at $20M.",
                body: "What got you here won’t take you further. You can feel the weight starting to shift.",
              },
              {
                bold: "The generational conflict nobody wins.",
                body: "Dad won’t let go. The next gen won’t wait forever. Business decisions become loyalty tests.",
              },
              {
                bold: "The leadership still running on you.",
                body: "Take a week off and things slip. The business can’t yet live without your presence in every room.",
              },
              {
                bold: "The legacy you don’t want to break.",
                body: "You inherited something real. You don’t want to be the one who loses it. The fear of failing the family is real and almost never spoken aloud.",
              },
            ].map(({ bold, body }) => (
              <div key={bold} className="flex gap-3">
                <Check size={20} className="text-coral shrink-0 mt-1" />
                <p className="text-base">
                  <strong>{bold}</strong> {body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg text-center mt-10 text-ink-soft italic">
            You know something&apos;s off. You can&apos;t quite name it. That&apos;s the job.
          </p>
        </div>
      </section>

      {/* THREE WAYS I WORK — VALUE PROPS */}
      <section className="py-24">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Three ways I work</p>
            <h2 className="font-serif">
              Advise. Develop. Scale.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map(({ icon: Icon, eyebrow, title, body }) => (
              <div
                key={title}
                className="hover-lift p-8 border border-border rounded-2xl bg-surface"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                  <Icon size={22} />
                </div>
                <p className="eyebrow mb-2">{eyebrow}</p>
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO FRAMEWORKS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">Two frameworks, working together</p>
            <h2 className="font-serif mb-6">
              FAMILY is the content. DESIGN is the discipline.
            </h2>
            <p className="text-xl">
              Six domains of work we build across the program. Six steps of
              discipline we apply to every priority, every quarter, every hard
              decision — during the program and for the rest of your career as
              an owner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAMILY */}
            <Link
              href="/family-framework"
              className="group p-8 border-2 border-coral rounded-2xl bg-background hover:shadow-lg transition"
            >
              <p className="eyebrow mb-4">FAMILY · what we build</p>
              <div className="grid grid-cols-6 gap-1 mb-6">
                {familyLetters.map(({ letter, word }) => (
                  <div key={letter} className="text-center min-w-0">
                    <div className="font-serif text-3xl text-coral leading-none">
                      {letter}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-ink-soft mt-1 truncate">
                      {word}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-ink-soft mb-4">
                Foundations, Alignment, Management, Innovation, Leadership,
                Yield &amp; Feedback. The six domains of a durable business.
              </p>
              <span className="link-arrow">
                Explore FAMILY <ArrowRight size={16} />
              </span>
            </Link>

            {/* DESIGN */}
            <Link
              href="/design-method"
              className="group p-8 border-2 border-gold rounded-2xl bg-background hover:shadow-lg transition"
            >
              <p className="eyebrow mb-4">DESIGN · how we build</p>
              <div className="grid grid-cols-6 gap-1 mb-6">
                {designSteps.map(({ letter, word }) => (
                  <div key={letter} className="text-center min-w-0">
                    <div className="font-serif text-3xl text-gold-deep leading-none">
                      {letter}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-ink-soft mt-1 truncate">
                      {word}
                    </div>
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

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">How I help</p>
            <h2 className="font-serif">One flagship program. Four ways in.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, body, href, primary }) => (
              <Link
                key={title}
                href={href}
                className={`hover-lift group p-8 border rounded-2xl bg-surface transition-colors ${
                  primary ? "border-coral" : "border-border hover:border-coral"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition ${
                    primary
                      ? "bg-coral text-white"
                      : "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-white"
                  }`}
                >
                  <Icon size={22} />
                </div>
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
            Also available:{" "}
            <Link
              href="/how-i-help#financial-analysis"
              className="link-arrow"
            >
              Financial Analysis
            </Link>{" "}
            — diagnostic and strategic financial work supporting major decisions.
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
              Family enterprises, founder-led businesses, and established
              mid-market companies. Typically 5 to 250 people, $2M to $250M in
              revenue. The common thread is willingness to do the structural
              work the next chapter requires.
            </p>
            <Link href="/who-i-help" className="link-arrow">
              See if this is you <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 border border-border rounded-2xl bg-background">
              <p className="eyebrow mb-4">The shape of the right owner</p>
              <h3 className="font-serif mb-4">
                Built something real. Ready to build something durable.
              </h3>
              <ul className="space-y-3">
                {[
                  "5 to 250 people, $2M to $250M in revenue",
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

      {/* TESTIMONIALS */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-6xl">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="eyebrow text-gold mb-2">What owners say</p>
              <h2 className="font-serif text-white">
                Results from owners who did the work.
              </h2>
            </div>
            <p className="text-xs text-white/50 max-w-xs">
              Testimonials below are illustrative while real client quotes are
              being collected and approved for publication. Names anonymized by
              preference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ stars, quote, name, role, company }) => (
              <blockquote
                key={name}
                className="p-8 border border-white/10 rounded-2xl flex flex-col bg-white/[0.02]"
              >
                <div
                  className="flex gap-1 text-gold mb-6"
                  aria-label={`${stars} out of 5 stars`}
                >
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-lg leading-snug text-white mb-8 flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="text-sm text-white/70 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{name}</p>
                  <p>{role}</p>
                  <p className="text-white/50">{company}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="py-24">
        <div className="container-site">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">From the practice</p>
              <h2 className="font-serif">Latest writing.</h2>
            </div>
            <Link href="/insights" className="link-arrow">
              All insights <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="hover-lift group p-8 border border-border rounded-2xl bg-surface flex flex-col"
              >
                <p className="eyebrow mb-4">{post.tag}</p>
                <h3 className="font-serif text-xl mb-3 leading-snug group-hover:text-coral transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-soft text-sm mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted border-t border-border pt-4">
                  <span>{post.readingTime}</span>
                  <span className="link-arrow text-coral text-xs">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Frequently asked</p>
          <h2 className="font-serif mb-10">Questions I get often.</h2>
          <div className="divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-serif text-xl hover:text-coral transition-colors">
                  <span>{q}</span>
                  <span className="text-coral text-2xl leading-none mt-1 transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SINGLE PRIMARY CTA */}
      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow mb-4">Start here</p>
          <h2 className="font-serif mb-6">
            Fifteen minutes. A clear read on where you stand.
          </h2>
          <p className="text-xl mb-8">
            The Readiness Assessment is the right first step. Fifteen honest
            questions, fifteen minutes, a clear read on whether the Architecture
            program is the right fit for where you are today. No commitment. No
            pressure.
          </p>
          <div className="flex justify-center">
            <Link href="/readiness" className="btn-primary">
              Take the Readiness Assessment <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Prefer a business read first?{" "}
            <Link href="/diagnostic" className="link-arrow">
              Take the 10-minute FAMILY diagnostic instead
            </Link>
            .
          </p>
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
