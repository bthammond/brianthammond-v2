import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/insights";

export const metadata = { title: "Insights" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Insights() {
  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Insights</p>
          <h1 className="font-serif mb-6">
            Ideas, frameworks, and arguments about building better businesses.
          </h1>
          <p className="text-xl">
            Short, practical reads on strategy, marketing, coaching, and the craft of
            running a family business. New essays monthly.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-site grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group p-8 border border-border rounded-2xl bg-surface hover:border-coral transition-colors flex flex-col"
            >
              <p className="eyebrow mb-4">{post.tag}</p>
              <h3 className="font-serif mb-3 group-hover:text-coral transition-colors">
                {post.title}
              </h3>
              <p className="text-ink-soft mb-6 flex-1">{post.excerpt}</p>
              <div className="text-sm text-muted flex justify-between">
                <span>{formatDate(post.date)}</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-site max-w-2xl text-center">
          <p className="eyebrow mb-4">Newsletter</p>
          <h2 className="font-serif mb-6">Get new essays in your inbox.</h2>
          <p className="mb-8">
            One thoughtful read per month on strategy, growth, and leadership for
            family businesses and entrepreneurs. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-5 py-3 border border-border rounded-full bg-surface focus:outline-none focus:border-coral"
            />
            <button type="submit" className="btn-primary">
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
