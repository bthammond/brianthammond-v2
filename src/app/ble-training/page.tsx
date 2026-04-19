import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink, Building2, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About BLE Training — The Enterprise Side of Brian T. Hammond",
  description:
    "Brian T. Hammond is the Founder and Chief Learning Officer of BLE Training, an organizational training and consulting firm with six testing centers nationwide. brianthammond.com is the personal advisory practice — separate and complementary.",
};

export default function BleTrainingPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">The other side of the practice</p>
          <h1 className="font-serif mb-6">
            About BLE Training.
          </h1>
          <p className="text-xl">
            Brian T. Hammond is the Founder and Chief Learning Officer of BLE
            Training — an organizational training and business consulting firm
            with six testing centers nationwide. This page explains how BLE
            Training relates to the personal advisory work at brianthammond.com,
            so there&apos;s no confusion.
          </p>
        </div>
      </section>

      {/* TWO ENTITIES, ONE OPERATOR */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <p className="eyebrow mb-4">Two entities. One operator.</p>
          <h2 className="font-serif mb-10">
            Different scale. Different offering. Same practitioner.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border-2 border-coral rounded-2xl bg-background">
              <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <Users size={22} />
              </div>
              <p className="eyebrow mb-2">This site</p>
              <h3 className="font-serif mb-3">brianthammond.com</h3>
              <p className="text-ink-soft mb-4">
                Personal advisory practice. High-touch, low-volume. The FAMILY
                Framework Architecture program for owners who want direct access
                to Brian — monthly sessions, bound companion books, a working
                system built into their business.
              </p>
              <p className="text-sm text-muted">
                Best for: family business owners and entrepreneurs who want a
                committed, structured advisory engagement.
              </p>
            </div>

            <div className="p-8 border-2 border-gold rounded-2xl bg-cream-deep">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-deep flex items-center justify-center mb-6">
                <Building2 size={22} />
              </div>
              <p className="eyebrow mb-2">The enterprise arm</p>
              <h3 className="font-serif mb-3">BLE Training</h3>
              <p className="text-ink-soft mb-4">
                Organizational training and business consulting firm. Six
                physical testing centers nationwide. Team-based delivery of
                family business consulting, leadership development, and
                organizational training at scale.
              </p>
              <p className="text-sm text-muted">
                Best for: organizations that need structured training
                infrastructure or team-based consulting delivery.
              </p>
              <a
                href="https://ble.training"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-4 inline-flex"
              >
                Visit ble.training <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BACKED BY */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">The credential behind the consult</p>
          <h2 className="font-serif mb-6">
            Personal advisory — backed by enterprise infrastructure.
          </h2>
          <p className="text-lg mb-6">
            When you engage the Architecture program at brianthammond.com,
            you&apos;re working with Brian directly. But the practice sits on top
            of thirty years of operating experience and the infrastructure of a
            real, running training business — not a solo practitioner flying
            without a net.
          </p>
          <p className="text-lg mb-6">
            Brian founded BLE Training and still operates it. The advisory work
            draws on the same patterns, systems, and rigor that BLE Training
            delivers to organizations at scale. What you get through
            brianthammond.com is that experience concentrated into a personal
            engagement — built for owners who want Brian in the room, not a
            team.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            <div className="p-5 border border-border rounded-xl bg-surface">
              <GraduationCap size={22} className="text-coral mb-3" />
              <p className="font-serif text-2xl mb-1">6</p>
              <p className="text-sm text-ink-soft">
                Testing centers operated across the country
              </p>
            </div>
            <div className="p-5 border border-border rounded-xl bg-surface">
              <Users size={22} className="text-coral mb-3" />
              <p className="font-serif text-2xl mb-1">30+</p>
              <p className="text-sm text-ink-soft">
                Years of hands-on operating and advisory experience
              </p>
            </div>
            <div className="p-5 border border-border rounded-xl bg-surface">
              <Building2 size={22} className="text-coral mb-3" />
              <p className="font-serif text-2xl mb-1">4</p>
              <p className="text-sm text-ink-soft">
                Practice areas served across both entities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHICH ONE DO YOU WANT */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Which one do you want?</p>
          <h2 className="font-serif mb-6">Pick the door that matches your situation.</h2>
          <div className="space-y-4">
            <div className="p-6 border border-border rounded-xl bg-background">
              <p className="font-serif text-lg mb-2">
                I want Brian directly — personal advisory.
              </p>
              <p className="text-ink-soft mb-4">
                You want the Architecture program, monthly 1:1 sessions with
                Brian, bound companion books, and a working system installed in
                your business. This is the premium path for owners.
              </p>
              <Link href="/architecture" className="link-arrow">
                See the Architecture program <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 border border-border rounded-xl bg-background">
              <p className="font-serif text-lg mb-2">
                I want organizational training or team-based consulting.
              </p>
              <p className="text-ink-soft mb-4">
                You need training infrastructure, testing-center logistics, or
                scaled consulting delivery for an organization. That&apos;s the
                BLE Training side of the practice.
              </p>
              <a
                href="https://ble.training"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow inline-flex"
              >
                Visit ble.training <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6">Still not sure?</h2>
          <p className="text-xl mb-8">
            Take the 15-minute Readiness Assessment. It&apos;ll tell you whether
            brianthammond.com or BLE Training is the right fit for where you are.
          </p>
          <Link href="/readiness" className="btn-primary">
            Take the Readiness Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
