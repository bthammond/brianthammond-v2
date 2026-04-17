import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { INSIGHTS, getInsight } from "@/lib/insights";
import type { Metadata } from "next";

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const otherPosts = INSIGHTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="py-20">
        <div className="container-site max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-muted hover:text-coral mb-8">
            <ArrowLeft size={14} /> All insights
          </Link>
          <p className="eyebrow mb-4">{post.tag}</p>
          <h1 className="font-serif mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted mb-12 pb-8 border-b border-border">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>Brian T. Hammond</span>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site">
          <h2 className="font-serif mb-10">More reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                href={`/insights/${other.slug}`}
                className="group p-8 border border-border rounded-2xl bg-background hover:border-coral transition-colors"
              >
                <p className="eyebrow mb-4">{other.tag}</p>
                <h3 className="font-serif mb-3 group-hover:text-coral transition-colors">
                  {other.title}
                </h3>
                <p className="text-ink-soft">{other.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-serif mb-6">Want to talk through this?</h2>
          <p className="text-xl mb-8">
            If this hit a nerve, let&apos;s have a frank conversation about what&apos;s
            going on in your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a free consult <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
