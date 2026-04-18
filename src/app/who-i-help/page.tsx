import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata = {
  title: "Who I help — Owners ready to work on the business",
  description:
    "Business owners between $1M and $250M in revenue, 5 to 250 people. Family enterprises, founder-led businesses, and established mid-market companies. Built for owners ready to commit to real structural work.",
};

export default function WhoIHelp() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Who I help</p>
          <h1 className="font-serif mb-6">
            Owners ready to move from working in the business to working on it.
          </h1>
          <p className="text-xl">
            The work is built for owners who&apos;ve built something real and now
            want to build something durable. Family enterprises, founder-led
            businesses, and established mid-market companies — where the common
            thread is the willingness to do the structural work the next chapter
            requires.
          </p>
        </div>
      </section>

      {/* PRIMARY ICP */}
      <section className="py-12">
        <div className="container-site max-w-5xl">
          <div className="p-10 border-2 border-coral rounded-2xl bg-surface">
            <p className="eyebrow mb-4">The shape of the right owner</p>
            <h2 className="font-serif mb-4">Built something real. Ready to build something durable.</h2>
            <p className="text-lg mb-8">
              The Architecture program works best for a specific profile. If this
              describes you, the program will land.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg mb-4">The shape</h3>
                <ul className="space-y-3">
                  {[
                    "5 to 250 people on the team",
                    "$1M to $250M in annual revenue",
                    "Owner or co-owner with authority over major decisions",
                    "Built through hard work and personal effort; model has reached its limits",
                    "Willing to commit two years to structural work",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={18} className="text-coral shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-4">What you&apos;re feeling</h3>
                <ul className="space-y-3">
                  {[
                    "The way it worked to get here isn’t going to scale further",
                    "You spend more time in daily operations than you should",
                    "The strategic work keeps getting pushed to “when things calm down”",
                    "You’re carrying too much of the business in your head",
                    "Something’s off — you can’t name it — but you can feel it",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={18} className="text-gold-deep shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
              <Link href="/readiness" className="btn-primary">
                Take the Readiness Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/architecture" className="btn-outline">
                See the Architecture program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SPECIFICALLY */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4">Where the work applies</p>
            <h2 className="font-serif">Three contexts, one approach.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-border rounded-2xl bg-background">
              <p className="eyebrow mb-3">Family enterprise</p>
              <h3 className="font-serif mb-3">Multi-generational businesses</h3>
              <p className="text-ink-soft">
                Second, third, or fourth-generation enterprises navigating
                governance, succession, and continuity. The conversations most
                families can&apos;t have without someone honest in the middle.
              </p>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-background">
              <p className="eyebrow mb-3">Founder-led</p>
              <h3 className="font-serif mb-3">Entrepreneurs scaling past founder-dependency</h3>
              <p className="text-ink-soft">
                Founders and CEOs whose businesses have outgrown the model that
                built them. Time to install the structure a scaled business
                requires — and hand the daily operations to someone else.
              </p>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-background">
              <p className="eyebrow mb-3">Established mid-market</p>
              <h3 className="font-serif mb-3">Businesses ready for their next chapter</h3>
              <p className="text-ink-soft">
                Established companies that need the disciplined structural work
                most consulting firms skip — the operating rhythm, the
                accountability systems, the leadership transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I'M NOT FOR */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Plain talk</p>
          <h2 className="font-serif mb-6">This program isn&apos;t for everyone.</h2>
          <p className="mb-8 text-lg">
            Saying yes to the wrong client hurts both of us. If any of these
            describe you, the Architecture isn&apos;t the right fit — and
            that&apos;s okay:
          </p>
          <ul className="space-y-3">
            {[
              "You want a turnaround consultant who runs your business for 90 days and hands it back",
              "You’re looking for a course you can complete on your own time without a weekly cadence",
              "You’re not yet ready to invest in measurement, accountability, and uncomfortable conversations",
              "You want growth without the structural work that sustains it",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <X size={18} className="text-muted shrink-0 mt-1" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            If you&apos;re uncertain whether this is right for you, the{" "}
            <Link href="/readiness" className="link-arrow">15-question Readiness Assessment</Link>{" "}
            will tell you in fifteen minutes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-white">Sound like you?</h2>
          <p className="text-xl mb-8 text-white/80">
            Take the Readiness Assessment, or schedule a discovery conversation
            directly. Both roads lead to the same place — a clear read on whether
            we should work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/readiness" className="btn-primary !bg-gold !text-foreground hover:!bg-gold-deep">
              Take the assessment <ArrowRight size={18} />
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
