import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Check, Sparkles, Target, Users, Compass } from "lucide-react";

const familyLetters = [
  { letter: "F", word: "Foundations" },
  { letter: "A", word: "Alignment" },
  { letter: "M", word: "Management" },
  { letter: "I", word: "Innovation" },
  { letter: "L", word: "Leadership" },
  { letter: "Y", word: "Yield & Feedback" },
];

const faqs = [
  {
    q: "What does a family business advisor do?",
    a: "A family business advisor helps owners of multi-generational enterprises navigate the work that consulting, coaching, and therapy don\u2019t cover on their own: succession planning, governance, generational communication, and growth. I sit between the family and the business and help both sides have the conversations that move the company forward.",
  },
  {
    q: "How is this different from hiring a business coach?",
    a: "A coach works on you. An advisor works on the business alongside you. Family business advisory specifically addresses the structural and relational dynamics a generalist coach isn\u2019t equipped to handle \u2014 ownership transitions, shareholder agreements, next-gen readiness, family council structures, and the patterns only visible from the outside.",
  },
  {
    q: "How much does working with you cost?",
    a: "The flagship FAMILY Framework engagement is $1,964 per month with a 3-month minimum, backed by a 30-day money-back guarantee on month 1. A shorter 2\u20133 week Readiness Audit is $2,000 flat, and that fee credits in full toward month 1 if you engage the full Framework. Coaching and single-problem consults are scoped separately.",
  },
  {
    q: "When should a family business start planning for succession?",
    a: "Five to ten years before the handoff. Owners who start earlier give the next generation time to develop, give themselves time to let go, and give the business time to test-run the transition while both generations can still correct course. Most owners start too late.",
  },
  {
    q: "Do you work with companies that aren\u2019t family-owned?",
    a: "Yes \u2014 a smaller portion of my work is with founder-led businesses and solo entrepreneurs who want the same outside-eye pattern recognition. Most of my work is with 2nd and 3rd-generation family businesses between $2M and $50M in revenue, which is where the FAMILY Framework delivers the most value.",
  },
  {
    q: "What is the FAMILY Framework?",
    a: "A proprietary system built from 30+ years inside family enterprises, organized around six pillars: Foundations, Alignment, Management, Innovation, Leadership, and Yield & Feedback. Together they cover the work that sinks most family businesses \u2014 succession, governance, communication across generations, and growth. The methodology itself stays reserved for client engagements.",
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
            <p className="eyebrow mb-6">Family business advisor &middot; Entrepreneur mentor</p>
            <h1 className="font-serif mb-6">
              You&apos;re in the business. That&apos;s why you can&apos;t see the <span className="underline-wavy">dots</span>.
            </h1>
            <p className="text-xl max-w-xl mb-8">
              I help second-generation family businesses and entrepreneurs connect the
              dots, then build the right systems to grow. Thirty years of pattern
              recognition, the <strong>FAMILY Framework</strong>, and the lived
              experience of running my own multi-office family business across the US
              — I&apos;m not a theorist. I get it because I&apos;m in it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/diagnostic" className="btn-primary">
                Take the 10-min diagnostic <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Schedule a free consult
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] bg-coral/10 rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/Hammond-Headshot.jpg"
                  alt="Brian T. Hammond, family business advisor and entrepreneur mentor"
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

      {/* PRACTITIONER CREDIBILITY STRIP */}
      <section className="py-10 bg-foreground text-white">
        <div className="container-site max-w-4xl text-center">
          <p className="font-serif text-xl md:text-2xl leading-snug text-white">
            I don&apos;t just study family business theory. <span className="underline-wavy">I run my own</span> — offices
            stretched across the US. I get it because I&apos;m in it.
          </p>
        </div>
      </section>

      {/* THE PROBLEM — why */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-4xl text-center">
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="font-serif mb-8">
            You can&apos;t read the label from inside the bottle.
          </h2>
          <p className="text-xl leading-relaxed">
            Family businesses don&apos;t fail because owners aren&apos;t smart.
            They fail because owners are <em>in</em> the business — running the day —
            and can&apos;t see the patterns from that seat. The succession that
            nobody&apos;s actually planning for. The communication that&apos;s drifted
            across generations. The systems that worked at $2M and quietly break at $20M.
            You know something&apos;s off. You can&apos;t quite name it. That&apos;s the job.
          </p>
        </div>
      </section>

      {/* THE PROMISE */}
      <section className="py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">The promise</p>
            <h2 className="font-serif mb-6">
              Connect the dots. Build the systems. Grow.
            </h2>
            <p className="text-lg mb-6">
              That&apos;s the arc of every engagement. We start by seeing the
              business clearly — the real one, not the one in the deck. Then we build
              the systems the next chapter actually needs. Then you grow.
            </p>
            <Link href="/how-i-help" className="link-arrow">
              See how we work together <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              { n: "01", title: "Connect", body: "See the patterns you can\u2019t see from inside." },
              { n: "02", title: "Build", body: "Put the systems in place your next chapter needs." },
              { n: "03", title: "Grow", body: "Scale on a foundation that won\u2019t crack under weight." },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-6 border border-border rounded-2xl bg-surface">
                <p className="font-serif text-2xl text-gold-deep mb-2">{n}</p>
                <h3 className="font-serif text-lg mb-2">{title}</h3>
                <p className="text-sm text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY FRAMEWORK TEASER */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">My proprietary system</p>
            <h2 className="font-serif mb-6">
              The FAMILY Framework: six pillars for businesses that want to outlast the founder.
            </h2>
            <p className="text-xl">
              The system I&apos;ve built over three decades inside family enterprises.
              Six pillars that together do what no individual consultant, coach, or
              advisor typically covers alone.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 md:gap-y-0 md:gap-x-4 text-center mb-10">
            {familyLetters.map(({ letter, word }) => (
              <div key={letter} className="flex flex-col items-center min-w-0">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-coral leading-none">
                  {letter}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-soft mt-2 font-semibold px-1 leading-tight">
                  {word}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/family-framework" className="btn-primary">
              Explore the FAMILY Framework <ArrowRight size={18} />
            </Link>
            <Link href="/diagnostic" className="btn-outline">
              See where you stand (10 min)
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME — real social proof, no fake testimonials */}
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
                body: "I own and operate my own multi-office family business. When I talk about succession, I\u2019m reporting from the same seat you\u2019re sitting in.",
              },
              {
                stat: "6",
                label: "Pillars, one system",
                body: "The proprietary FAMILY Framework covers what consulting, coaching, and therapy don\u2019t handle together — all six pillars, one integrated engagement.",
              },
              {
                stat: "30 days",
                label: "Money-back guarantee",
                body: "Engage the Framework with zero risk on month 1. If the work isn\u2019t delivering clear value by day 30, I refund it. No questions.",
              },
            ].map(({ stat, label, body }) => (
              <div key={label} className="p-8 border border-border rounded-2xl bg-surface">
                <p className="font-serif text-5xl text-coral leading-none mb-2">{stat}</p>
                <p className="eyebrow mb-4">{label}</p>
                <p className="text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — reserved space. Swap in real client quotes when you collect them.
          Intentionally left OUT of the rendered site until real content exists.
          When ready, uncomment the JSX below AND update the `testimonials` array with
          actual client quotes. Keep attributions truthful (role + industry). */}
      {/*
      <section className="py-20 bg-foreground text-white">
        <div className="container-site max-w-5xl">
          <p className="eyebrow text-gold mb-4">What clients say</p>
          <h2 className="font-serif mb-12 text-white">Voices from the work.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, name, role }) => (
              <blockquote key={name} className="p-8 border border-white/10 rounded-2xl">
                <p className="font-serif text-xl leading-snug text-white mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="text-white/70 text-sm">
                  <strong className="text-white">{name}</strong> — {role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* WHO I HELP — sharp ICP */}
      <section className="py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Who I help</p>
            <h2 className="font-serif mb-6">
              Second-generation family businesses with real stakes.
            </h2>
            <p className="mb-6">
              If you&apos;re a second or third-generation owner running a $2M–$50M
              family business, five to ten years from a handoff you haven&apos;t
              really planned yet — this work was built for you.
            </p>
            <p className="mb-6 text-muted">
              I also work with a smaller number of founder-led businesses and solo
              entrepreneurs who want the same pattern-recognition from the outside.
            </p>
            <Link href="/who-i-help" className="link-arrow">
              See if this is you <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 border border-border rounded-2xl bg-surface">
              <p className="eyebrow mb-4">Primary client</p>
              <h3 className="font-serif mb-4">The 2nd-gen family business</h3>
              <ul className="space-y-3">
                {[
                  "Revenue between $2M and $50M",
                  "Multi-generational — second or third generation at the helm",
                  "Owner is 5–10 years from handing off, or wondering when to start",
                  "The old systems still kind of work, but you can feel them straining",
                  "Family and business dynamics are tangled and it\u2019s costing money",
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

      {/* SERVICES — brief */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">How I help</p>
            <h2 className="font-serif">Four ways to work together.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "FAMILY Framework",
                body: "Deep, multi-month engagement across all six pillars. The flagship. 30-day money-back guarantee on month 1.",
                href: "/how-i-help#family-framework",
              },
              {
                icon: Compass,
                title: "Readiness Audit",
                body: "A paid 2–3 week deep-dive. Test the fit before committing. $2,000 credits in full toward month 1 of the Framework.",
                href: "/how-i-help#readiness-audit",
              },
              {
                icon: Target,
                title: "Strategy & Succession",
                body: "Targeted engagements on a specific problem — a succession gap, a governance mess, a stalled strategic plan.",
                href: "/how-i-help#strategy",
              },
              {
                icon: Users,
                title: "Coaching & Mentorship",
                body: "Ongoing one-on-one work for owners and next-gen leaders. Sharper decisions, fewer expensive mistakes.",
                href: "/how-i-help#coaching",
              },
            ].map(({ icon: Icon, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-8 border border-border rounded-2xl bg-background hover:border-coral transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6 group-hover:bg-coral group-hover:text-white transition">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif mb-3">{title}</h3>
                <p className="text-ink-soft mb-6">{body}</p>
                <span className="link-arrow">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — also fuels FAQPage rich snippets in Google */}
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
            Not sure if we&apos;re a fit? Take 10 minutes to find out.
          </h2>
          <p className="text-xl mb-8">
            A short self-assessment across the six FAMILY pillars. You&apos;ll get a
            clear read on where your business stands today and which pillars need
            attention first. Free, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnostic" className="btn-primary">
              Start the diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Or schedule a consult
            </Link>
          </div>
        </div>
      </section>

      {/* FAQPage structured data for rich results in Google */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
