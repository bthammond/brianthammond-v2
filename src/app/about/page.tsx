import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Building2,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "About Brian T. Hammond",
  description:
    "Strategic consultant, Chief Learning Officer, and founder of BLE Training. Two decades inside Capital One, Goodyear, and CompUSA designing leadership and learning systems — followed by building a multi-office family business of his own. Brian works at the intersection of advisory, training, and ownership.",
};

const threads = [
  {
    icon: Compass,
    eyebrow: "Thread one",
    title: "Advisor",
    body:
      "Strategic consultant to family enterprises, founder-led businesses, and mid-market companies. Builder of the FAMILY Framework and the DESIGN Method. The work where the hardest conversations happen.",
  },
  {
    icon: GraduationCap,
    eyebrow: "Thread two",
    title: "Chief Learning Officer",
    body:
      "Two decades designing leadership development, training programs, and learning systems inside Capital One, Goodyear, and CompUSA. Enterprise rigor, brought down to the scale of owner-led businesses.",
  },
  {
    icon: Building2,
    eyebrow: "Thread three",
    title: "Founder & Operator",
    body:
      "Founder of BLE Training — a multi-office, multi-state operation. When I talk about succession, governance, or generational friction, I’m reporting from the same seat you’re sitting in.",
  },
];

const credentials = [
  { label: "MBA", body: "Louisiana State University, Shreveport" },
  { label: "Goldman Sachs 10,000 Small Businesses", body: "Alumni" },
  { label: "Tuck School of Business · Dartmouth", body: "Executive Education" },
  { label: "Leadership Maryland", body: "Class member" },
  { label: "ACP Mentor", body: "American Corporate Partners" },
  { label: "Founder", body: "BLE Training" },
];

const corporateTrack = [
  {
    org: "Capital One",
    role: "Leadership development & training design",
    body: "Designed and delivered learning programs for retail and operations teams.",
  },
  {
    org: "Goodyear",
    role: "Training & development",
    body: "Built field training systems for distributed retail and service operations.",
  },
  {
    org: "CompUSA",
    role: "Corporate training",
    body: "Early career inside one of the largest specialty retailers of its era.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">About</p>
            <h1 className="font-serif mb-6">
              Three threads. <span className="underline-wavy">One practice.</span>
            </h1>
            <p className="text-xl mb-6">
              I&apos;m Brian T. Hammond — strategic consultant, Chief Learning
              Officer, and founder of BLE Training. The work I do today sits at
              the intersection of three threads I&apos;ve been pulling on for
              thirty years: advising owners, designing leadership at enterprise
              scale, and building and operating a business of my own.
            </p>
            <p className="text-lg text-ink-soft">
              Based in Ellicott City, Maryland. Working with owners across the
              country and beyond.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] bg-coral/10 rounded-3xl overflow-hidden border border-border">
                <Image
                  src="/Hammond-Headshot.jpg"
                  alt="Brian T. Hammond"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-2xl p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-2 text-muted">
                  <MapPin size={14} />
                  <p className="text-xs uppercase tracking-widest">Based in</p>
                </div>
                <p className="font-serif text-lg mt-1">Ellicott City, MD</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-foreground rounded-2xl p-4 shadow-lg hidden md:block">
                <p className="text-xs uppercase tracking-widest font-bold">
                  Practicing
                </p>
                <p className="font-serif text-lg mt-1">30+ years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE THREADS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">The work</p>
            <h2 className="font-serif">
              Advisor. Chief Learning Officer. Founder & operator.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {threads.map(({ icon: Icon, eyebrow, title, body }) => (
              <div
                key={title}
                className="hover-lift p-8 border border-border rounded-2xl bg-background"
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

      {/* PRACTITIONER CALLOUT */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <div className="p-8 border-l-4 border-coral bg-surface rounded-r-2xl">
            <p className="eyebrow mb-3">Why this matters</p>
            <p className="text-xl font-serif leading-snug">
              I don&apos;t just study family business theory. I&apos;m a
              practitioner — I run my own multi-office family business. When I
              talk about succession, governance, or generational friction,
              I&apos;m reporting from the same seat you&apos;re sitting in. I
              get it because I&apos;m in it.
            </p>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-12">
        <div className="container-site max-w-3xl space-y-6 text-lg leading-relaxed">
          <p className="eyebrow">The path</p>
          <h2 className="font-serif">Not tidy. On purpose.</h2>
          <p>
            My path isn&apos;t a straight line. I started inside the training
            and learning functions of large enterprises — CompUSA, Goodyear,
            Capital One — designing the systems that make distributed teams
            perform. Tens of thousands of people. National rollouts. The kind
            of rigor you don&apos;t learn in a classroom.
          </p>
          <p>
            From there I crossed over: built companies, bought them, sold them,
            turned them around, and walked away from a few. I&apos;ve sat in
            Fortune 500 strategy rooms, scrappy startup kitchens, and family
            boardrooms where the hardest conversations happen between the
            second cup of coffee and &ldquo;we&apos;ll talk about it next
            quarter.&rdquo; I have an MBA from LSU, but the lessons I lean on
            most came from the quarters I didn&apos;t make payroll easily.
          </p>
          <p>
            I founded BLE Training and grew it into a multi-office, multi-state
            operation. Same family, same business, every day. That&apos;s the
            seat I sit in now — and the seat that informs how I work with
            other owners.
          </p>
          <p>
            For family businesses specifically, I built the{" "}
            <strong>FAMILY Framework</strong> — six domains for navigating the
            things that sink most family enterprises: foundations, alignment,
            management, innovation, leadership, and yield. Paired with the{" "}
            <Link href="/design-method" className="link-arrow inline-flex">
              DESIGN Method
            </Link>
            , it&apos;s the work I&apos;m most proud of, and the work I spend
            most of my time on now.
          </p>
          <p>
            What I believe, after thirty years: most businesses don&apos;t need
            a new idea. They need a sharper read on the one they already have,
            a tighter plan for executing it, and someone honest enough to tell
            them when they&apos;re wrong.
          </p>
          <p>That&apos;s the job. That&apos;s what I do.</p>
        </div>
      </section>

      {/* CORPORATE TRACK */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Where the rigor came from</p>
            <h2 className="font-serif">
              Two decades of enterprise learning &amp; development.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {corporateTrack.map(({ org, role, body }) => (
              <div
                key={org}
                className="p-6 border border-border rounded-2xl bg-background"
              >
                <div className="flex items-center gap-2 text-coral mb-4">
                  <Briefcase size={16} />
                  <p className="eyebrow text-coral">{role}</p>
                </div>
                <h3 className="font-serif text-2xl mb-2">{org}</h3>
                <p className="text-ink-soft text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20">
        <div className="container-site max-w-5xl">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Credentials</p>
            <h2 className="font-serif">
              Schooled where it counted. Honed where it mattered.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map(({ label, body }) => (
              <div
                key={label}
                className="p-6 border border-border rounded-2xl bg-surface flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold-deep flex items-center justify-center shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="font-serif text-base leading-snug">{label}</p>
                  <p className="text-sm text-ink-soft mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-16 bg-foreground text-white">
        <div className="container-site max-w-5xl grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-5xl text-gold">30+</p>
            <p className="mt-2 eyebrow text-white/70">
              Years advising owners
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl text-gold">3</p>
            <p className="mt-2 eyebrow text-white/70">
              Threads — advisor · CLO · founder
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl text-gold">6 + 6</p>
            <p className="mt-2 eyebrow text-white/70">
              FAMILY framework · DESIGN method
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl text-gold">Multi</p>
            <p className="mt-2 eyebrow text-white/70">
              Office, multi-state operator
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6">
            Let&apos;s see if I&apos;m the right help.
          </h2>
          <p className="text-xl mb-8">
            Start with the 15-minute Readiness Assessment to see where you
            stand, take the 10-minute diagnostic for a business read, or just
            book a consult and we&apos;ll talk it through.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary">
              Take the Readiness Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule a consult
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
    </>
  );
}
