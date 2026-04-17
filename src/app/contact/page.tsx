import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact — Schedule a free consult",
  description:
    "Book a free 30-minute consultation with Brian T. Hammond. Discuss strategy, succession, or growth for your family business or entrepreneurial venture.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO STRIP */}
      <section className="bg-surface border-b border-border">
        <div className="container-site pt-14 pb-12 text-center">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 font-serif">Let&apos;s have a frank conversation.</h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-gold" />
          <p className="mt-6 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Call, email, or send a message below. I respond within one business
            day — usually sooner.
          </p>
        </div>
      </section>

      {/* PRIMARY CONTACT BAND */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border-t-4 border-coral shadow-sm p-8 text-center rounded-xl">
            <Phone className="mx-auto h-8 w-8 text-coral" strokeWidth={1.75} />
            <p className="mt-4 eyebrow">Toll-Free</p>
            <a
              href="tel:18004282424"
              className="mt-2 block font-serif text-3xl md:text-4xl hover:text-coral transition-colors"
            >
              1.800.428.2424
            </a>
            <p className="mt-1 text-sm text-muted tracking-wider">
              Monday–Friday, 9a–6p CT
            </p>
          </div>

          <div className="bg-surface border-t-4 border-coral shadow-sm p-8 text-center rounded-xl">
            <Mail className="mx-auto h-8 w-8 text-coral" strokeWidth={1.75} />
            <p className="mt-4 eyebrow">Email</p>
            <a
              href="mailto:brian@brianthammond.com"
              className="mt-2 block font-serif text-2xl md:text-3xl hover:text-coral transition-colors break-all"
            >
              brian@brianthammond.com
            </a>
            <p className="mt-1 text-sm text-muted">
              Response within one business day
            </p>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-surface">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimateOnScroll className="lg:col-span-2">
            <h2 className="font-serif">Send a message</h2>
            <div className="mt-4 h-px w-24 bg-gold" />
            <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">
              Share a little context and I&apos;ll be in touch within one
              business day to schedule a confidential 30-minute call.
            </p>
            <div className="mt-8">
              <Suspense fallback={<div className="rounded-2xl border border-border bg-surface p-10 h-96" />}>
                <LeadForm />
              </Suspense>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120} className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div>
                <h2 className="font-serif text-2xl">What to expect</h2>
                <div className="mt-4 h-px w-24 bg-gold" />
                <ul className="mt-6 space-y-5 text-ink-soft">
                  <li className="flex gap-3">
                    <Clock size={18} className="text-coral shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">30 minutes.</strong> Long enough
                      to go beyond surface talk, short enough to respect your time.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="text-coral shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">No pitch.</strong> If I&apos;m not
                      the right help, I&apos;ll say so — and point you to who is.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="text-coral shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">Confidential.</strong> What
                      you share stays between us.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
