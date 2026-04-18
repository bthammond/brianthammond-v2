import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  Compass,
  ClipboardCheck,
  ChartBar,
  Target,
  Users,
  UserCircle2,
  BookOpen,
  Mail,
  FileText,
  Home,
  ArrowRight,
} from "lucide-react";
import { INSIGHTS } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Every page on brianthammond.com, organized. The Architecture, the frameworks, the assessments, the insights, and the legal fine print.",
};

type NavLink = {
  href: string;
  title: string;
  desc: string;
  icon?: typeof Sparkles;
};

const flagship: NavLink[] = [
  {
    href: "/architecture",
    title: "The Architecture",
    desc: "The signature transformation program. Six modules. One arc.",
    icon: Sparkles,
  },
  {
    href: "/family-framework",
    title: "The FAMILY Framework",
    desc: "Six domains for building a durable business.",
    icon: FileText,
  },
  {
    href: "/design-method",
    title: "The DESIGN Method",
    desc: "A six-step discipline for any strategic question.",
    icon: Compass,
  },
];

const assessments: NavLink[] = [
  {
    href: "/readiness",
    title: "Readiness Assessment",
    desc: "15 questions. 15 minutes. A clear read on fit for the Architecture.",
    icon: ClipboardCheck,
  },
  {
    href: "/diagnostic",
    title: "Business Diagnostic",
    desc: "12 questions across the six FAMILY pillars. A read on where your business stands.",
    icon: ChartBar,
  },
];

const core: NavLink[] = [
  { href: "/", title: "Home", desc: "The front door.", icon: Home },
  {
    href: "/how-i-help",
    title: "How I help",
    desc: "One flagship program. Four practice areas.",
    icon: Target,
  },
  {
    href: "/who-i-help",
    title: "Who I help",
    desc: "Owners ready to work on the business.",
    icon: Users,
  },
  {
    href: "/about",
    title: "About",
    desc: "Thirty years of sitting in the room where the real conversation happens.",
    icon: UserCircle2,
  },
  {
    href: "/insights",
    title: "Insights",
    desc: "Short, practical essays on running better businesses.",
    icon: BookOpen,
  },
  {
    href: "/contact",
    title: "Contact",
    desc: "Schedule a discovery conversation.",
    icon: Mail,
  },
];

const legal: NavLink[] = [
  { href: "/privacy", title: "Privacy Policy", desc: "What I collect and how it's handled." },
  { href: "/terms", title: "Terms of Use", desc: "How the Site may be used." },
  { href: "/disclaimer", title: "Disclaimer", desc: "Content is educational, not professional advice." },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function SitemapPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Sitemap</p>
          <h1 className="font-serif mb-6">Everything on this site, in one place.</h1>
          <p className="text-xl">
            A human-readable directory of every page on brianthammond.com —
            grouped by what it does. For search engines, there&apos;s also an{" "}
            <Link href="/sitemap.xml" className="link-arrow inline-flex">
              XML sitemap
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="mb-8">
            <p className="eyebrow mb-2">The work</p>
            <h2 className="font-serif">Flagship program &amp; frameworks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {flagship.map(({ href, title, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group p-6 border-2 border-coral rounded-2xl bg-background hover:shadow-lg transition"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4 group-hover:bg-coral group-hover:text-white transition">
                    <Icon size={22} />
                  </div>
                )}
                <h3 className="font-serif text-xl mb-2 group-hover:text-coral transition">
                  {title}
                </h3>
                <p className="text-sm text-ink-soft mb-4">{desc}</p>
                <span className="link-arrow text-sm">
                  {href.replace("/", "")} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENTS */}
      <section className="py-12">
        <div className="container-site max-w-5xl">
          <div className="mb-8">
            <p className="eyebrow mb-2">Start here</p>
            <h2 className="font-serif">Assessments</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {assessments.map(({ href, title, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group p-6 border-2 border-gold rounded-2xl bg-cream-deep hover:shadow-lg transition"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-deep flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                )}
                <h3 className="font-serif text-xl mb-2 group-hover:text-coral transition">
                  {title}
                </h3>
                <p className="text-sm text-ink-soft mb-4">{desc}</p>
                <span className="link-arrow text-sm">
                  {href.replace("/", "")} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CORE NAVIGATION */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container-site max-w-5xl">
          <div className="mb-8">
            <p className="eyebrow mb-2">Around the site</p>
            <h2 className="font-serif">Core pages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {core.map(({ href, title, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group p-5 border border-border rounded-xl bg-background hover:border-coral transition"
              >
                <div className="flex items-start gap-3">
                  {Icon && (
                    <div className="text-coral shrink-0 mt-1">
                      <Icon size={18} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg group-hover:text-coral transition">
                      {title}
                    </h3>
                    <p className="text-sm text-ink-soft mt-1">{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS — full list */}
      <section className="py-16">
        <div className="container-site max-w-5xl">
          <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-2">Reading</p>
              <h2 className="font-serif">Insights</h2>
            </div>
            <Link href="/insights" className="link-arrow">
              Browse all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
            {INSIGHTS.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group py-3 border-b border-border flex items-baseline justify-between gap-4 hover:border-coral transition"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-gold-deep font-bold mb-1">
                    {post.tag}
                  </p>
                  <p className="font-serif text-base group-hover:text-coral transition leading-snug">
                    {post.title}
                  </p>
                </div>
                <span className="text-xs text-muted shrink-0 whitespace-nowrap">
                  {formatDate(post.date)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section className="py-12 bg-foreground text-white">
        <div className="container-site max-w-5xl">
          <div className="mb-8">
            <p className="eyebrow text-gold mb-2">Fine print</p>
            <h2 className="font-serif text-white">Legal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {legal.map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group p-5 border border-white/10 rounded-xl hover:border-gold transition"
              >
                <h3 className="font-serif text-lg text-white group-hover:text-gold transition">
                  {title}
                </h3>
                <p className="text-sm text-white/70 mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-16">
        <div className="container-site max-w-3xl text-center">
          <p className="font-serif text-2xl mb-2">
            FAMILY by <span className="text-coral">DESIGN</span>.
          </p>
          <p className="text-sm text-muted">
            FAMILY is what we build. The{" "}
            <Link href="/design-method" className="link-arrow inline-flex">
              DESIGN Method
            </Link>{" "}
            is how we build it.
          </p>
        </div>
      </section>
    </>
  );
}
