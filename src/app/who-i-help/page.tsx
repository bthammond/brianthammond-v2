import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata = { title: "Who I help" };

export default function WhoIHelp() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Who I help</p>
          <h1 className="font-serif mb-6">
            Second-generation family businesses — and a small number of founders I believe in.
          </h1>
          <p className="text-xl">
            I&apos;ve narrowed my work on purpose. The clients I can make the biggest
            difference for share a specific shape. If that&apos;s you, we should talk.
          </p>
        </div>
      </section>

      {/* PRIMARY ICP */}
      <section className="py-12">
        <div className="container-site max-w-5xl">
          <div className="p-10 border-2 border-coral rounded-2xl bg-surface">
            <p className="eyebrow mb-4">Primary client</p>
            <h2 className="font-serif mb-4">The 2nd-generation family business</h2>
            <p className="text-lg mb-8">
              Multi-generational family enterprises wrestling with succession,
              governance, and what the next chapter looks like. The FAMILY Framework
              was built for you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg mb-4">The shape</h3>
                <ul className="space-y-3">
                  {[
                    "Revenue between $2M and $50M",
                    "Second or third generation at the helm",
                    "Owner is 5–10 years from a handoff",
                    "Family and business are tangled in ways costing money",
                    "You&apos;ve hit a ceiling the old systems can&apos;t carry you through",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={18} className="text-coral shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-4">What you&apos;re feeling</h3>
                <ul className="space-y-3">
                  {[
                    "The succession conversation keeps getting punted",
                    "Family meetings feel like they orbit the real issues",
                    "The next generation isn&apos;t where you hoped by now",
                    "You&apos;re carrying too much of the business in your head",
                    "Something&apos;s off — you can&apos;t name it — but you can feel it",
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
              <Link href="/diagnostic" className="btn-primary">
                See where you stand (10 min) <ArrowRight size={18} />
              </Link>
              <Link href="/family-framework" className="btn-outline">
                About the FAMILY Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY */}
      <section className="py-16">
        <div className="container-site max-w-5xl">
          <div className="p-10 border border-border rounded-2xl bg-surface">
            <p className="eyebrow mb-4">Also a fit</p>
            <h2 className="font-serif mb-4">Founder-led businesses and solo entrepreneurs</h2>
            <p className="mb-6">
              A smaller portion of my work. Founders between pre-seed and $10M who
              want the same outside-eye pattern recognition — and are willing to hear
              it unfiltered. Think of it as borrowing thirty years of mistakes I&apos;ve
              already made.
            </p>
            <Link href="/contact" className="link-arrow">
              Reach out if that&apos;s you <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO I'M NOT FOR */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Plain talk</p>
          <h2 className="font-serif mb-6">I&apos;m not the right help for everyone.</h2>
          <p className="mb-8 text-lg">
            Saying yes to the wrong client hurts both of us. If any of these describe you,
            we&apos;re probably not a fit — and that&apos;s okay:
          </p>
          <ul className="space-y-3">
            {[
              "You&apos;re looking for a cheerleader who&apos;ll confirm what you already believe",
              "You want a done-for-you agency — I&apos;m an advisor, not an operator",
              "You&apos;re pre-revenue and need product-market fit help",
              "You&apos;re uninterested in honest conversations when they&apos;re hard",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <X size={18} className="text-muted shrink-0 mt-1" />
                <span className="text-ink-soft" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6">Sound like you?</h2>
          <p className="text-xl mb-8">
            Take ten minutes with the diagnostic. If it points to real work, we&apos;ll
            talk. If not, you&apos;ll still walk away with clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnostic" className="btn-primary">
              Start the diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule a free consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
