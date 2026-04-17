import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Brian T. Hammond",
  description:
    "Thirty years advising owners across Fortune 500 boardrooms, scrappy startups, and family-owned businesses. Brian built the FAMILY Framework on pattern recognition earned the hard way — and runs his own multi-office family business too.",
};

export default function About() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-serif mb-6">
            Thirty years of sitting in the room where the real conversation happens.
          </h1>
          <p className="text-xl">
            I&apos;m Brian Hammond — family business advisor, entrepreneur mentor, and
            the outside voice owners call when they can feel something&apos;s off and
            can&apos;t quite name it.
          </p>
        </div>
      </section>

      {/* PRACTITIONER CALLOUT */}
      <section className="pb-4">
        <div className="container-site max-w-3xl">
          <div className="p-8 border-l-4 border-coral bg-surface rounded-r-2xl">
            <p className="eyebrow mb-3">Why this matters</p>
            <p className="text-xl font-serif leading-snug">
              I don&apos;t just study family business theory. I&apos;m a practitioner — I
              run my own family business with offices stretched across the United States.
              When I talk about succession, governance, or generational friction, I&apos;m
              not quoting a textbook. I&apos;m reporting from the same seat you&apos;re
              sitting in. I get it because I&apos;m in it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-site max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            My path isn&apos;t tidy. I&apos;ve built companies, bought them, sold them,
            turned them around, and walked away from them. I&apos;ve sat in Fortune 500
            strategy rooms, scrappy startup kitchens, and family-owned boardrooms where
            the hardest conversations happen between the second cup of coffee and
            &ldquo;we&apos;ll talk about it next quarter.&rdquo; I have an MBA from LSU,
            but the lessons I lean on most came from the quarters I didn&apos;t make
            payroll easily.
          </p>
          <p>
            That experience runs across SaaS, eCommerce, mobile apps, information
            products, and brick-and-mortar. Different scales, different industries,
            same principles. Over three decades, I started noticing that the most
            successful businesses — and the ones that imploded — both shared patterns
            the owners themselves couldn&apos;t see.
          </p>
          <p>
            That&apos;s the gift, if there is one: pattern recognition built up over
            thousands of hours sitting across from owners. I&apos;ve seen this movie
            before. I can tell you what&apos;s about to happen, and more importantly,
            what to do about it.
          </p>
          <p>
            For family businesses specifically, I built the <strong>FAMILY Framework</strong> —
            six pillars for navigating the things that sink most family enterprises:
            succession, governance, generational communication, and growth. It&apos;s
            the work I&apos;m most proud of, and the work I spend most of my time on now.
          </p>
          <p>
            What I believe, after thirty years: most businesses don&apos;t need a new
            idea. They need a sharper read on the one they already have, a tighter plan
            for executing it, and someone honest enough to tell them when they&apos;re
            wrong.
          </p>
          <p>
            That&apos;s the job. That&apos;s what I do.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-4xl grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-5xl text-coral">30+</p>
            <p className="mt-2 eyebrow">Years advising owners</p>
          </div>
          <div>
            <p className="font-serif text-5xl text-coral">MBA</p>
            <p className="mt-2 eyebrow">Louisiana State University</p>
          </div>
          <div>
            <p className="font-serif text-5xl text-coral">6</p>
            <p className="mt-2 eyebrow">Pillar framework — proprietary</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6">Let&apos;s see if I&apos;m the right help.</h2>
          <p className="text-xl mb-8">
            Start with the 10-minute diagnostic to see where your business stands,
            or book a free consult and we&apos;ll talk it through.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnostic" className="btn-primary">
              Take the diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule a consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
