"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Mail } from "lucide-react";
import {
  QUESTIONS,
  SCALE,
  PILLAR_META,
  type Answers,
  type Pillar,
  scorePillar,
  scoreOverall,
  pillarBand,
  overallBand,
} from "@/lib/diagnostic";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Phase = "intro" | "quiz" | "results";

export default function DiagnosticPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Answers>({});

  const allAnswered = QUESTIONS.every((q) => answers[q.id] != null);

  return (
    <>
      {phase === "intro" && (
        <IntroScreen onStart={() => setPhase("quiz")} />
      )}

      {phase === "quiz" && (
        <QuizScreen
          answers={answers}
          onChange={setAnswers}
          allAnswered={allAnswered}
          onBack={() => setPhase("intro")}
          onSubmit={() => setPhase("results")}
        />
      )}

      {phase === "results" && (
        <ResultsScreen answers={answers} onRetake={() => {
          setAnswers({});
          setPhase("quiz");
        }} />
      )}
    </>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="pt-20 pb-24">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4">The family business diagnostic</p>
        <h1 className="font-serif mb-6">
          Ten minutes. Twelve questions. A clear read on where your business stands.
        </h1>
        <p className="text-xl mb-8">
          The diagnostic scores your family business across the six FAMILY pillars —
          Foundations, Alignment, Management, Innovation, Leadership, and Yield &amp;
          Feedback. You&apos;ll see your overall readiness, a per-pillar breakdown,
          and where to focus first.
        </p>

        <div className="p-6 border border-border rounded-2xl bg-surface mb-8">
          <h3 className="font-serif text-lg mb-3">Before you start</h3>
          <ul className="space-y-2 text-ink-soft">
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Answer honestly — there are no &ldquo;right&rdquo; answers, only useful ones.</span>
            </li>
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Think about how things actually are, not how you wish they were.</span>
            </li>
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Your answers aren&apos;t stored or sent anywhere until you choose to share them.</span>
            </li>
          </ul>
        </div>

        <button onClick={onStart} className="btn-primary">
          Start the diagnostic <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function QuizScreen({
  answers,
  onChange,
  allAnswered,
  onBack,
  onSubmit,
}: {
  answers: Answers;
  onChange: (a: Answers) => void;
  allAnswered: boolean;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const answeredCount = Object.keys(answers).length;
  const pct = Math.round((answeredCount / QUESTIONS.length) * 100);

  return (
    <section className="pt-12 pb-24">
      <div className="container-site max-w-3xl">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted hover:text-coral mb-6">
          <ArrowLeft size={14} /> Back to intro
        </button>

        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-2">
            <p className="eyebrow">Progress</p>
            <p className="text-sm text-ink-soft font-medium">{answeredCount} of {QUESTIONS.length}</p>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-coral transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <h1 className="font-serif mb-10">Rate how strongly each statement describes your business today.</h1>

        <div className="space-y-8">
          {QUESTIONS.map((q, i) => (
            <div key={q.id} className="p-6 border border-border rounded-2xl bg-surface">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-xl text-gold-deep shrink-0 w-8">{i + 1}.</span>
                <p className="text-lg">
                  {q.text}
                </p>
              </div>
              <div className="pl-11">
                <div className="grid grid-cols-5 gap-2">
                  {SCALE.map((opt) => {
                    const selected = answers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange({ ...answers, [q.id]: opt.value })}
                        className={`py-3 px-2 rounded-lg border text-sm font-medium transition ${
                          selected
                            ? "bg-coral text-white border-coral"
                            : "bg-background border-border hover:border-coral"
                        }`}
                        aria-label={`${opt.value} — ${opt.label}`}
                      >
                        <div className="font-serif text-lg">{opt.value}</div>
                        <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">
                          {opt.label.split(" ")[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between text-xs text-muted mt-2 px-1">
                  <span>Strongly disagree</span>
                  <span>Strongly agree</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-muted">
            {allAnswered ? "All set — ready to see your results." : `${QUESTIONS.length - answeredCount} questions remaining.`}
          </p>
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            See my results <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultsScreen({ answers, onRetake }: { answers: Answers; onRetake: () => void }) {
  const overall = scoreOverall(answers);
  const band = overallBand(overall);
  const pillars: Pillar[] = ["F", "A", "M", "I", "L", "Y"];
  const pillarScores = pillars.map((p) => ({
    pillar: p,
    score: scorePillar(answers, p),
    meta: PILLAR_META[p],
  }));
  const weakest = [...pillarScores].sort((a, b) => a.score - b.score).slice(0, 2);

  return (
    <>
      {/* OVERALL SCORE */}
      <section className="pt-20 pb-12">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">Your results</p>
          <h1 className="font-serif mb-6">{band.title}.</h1>
          <p className="text-xl mb-10">{band.summary}</p>

          <div className="p-10 border-2 border-coral rounded-2xl bg-surface">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center shrink-0">
                <p className="font-serif text-7xl md:text-8xl text-coral leading-none">{overall}</p>
                <p className="eyebrow mt-2">Overall score</p>
              </div>
              <div className="flex-1">
                <p className="font-serif text-2xl mb-3">
                  Your two weakest pillars:
                </p>
                <ul className="space-y-2">
                  {weakest.map((p) => (
                    <li key={p.pillar} className="flex items-baseline gap-3">
                      <span className="font-serif text-3xl text-gold-deep">{p.pillar}</span>
                      <span className="font-semibold">{p.meta.name}</span>
                      <span className="text-sm text-muted">({p.score}%)</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-ink-soft">
                  These are the pillars most likely to benefit from focused work first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PER-PILLAR BREAKDOWN */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-4xl">
          <h2 className="font-serif mb-10">Per-pillar breakdown</h2>
          <div className="space-y-6">
            {pillarScores.map(({ pillar, score, meta }) => {
              const b = pillarBand(score);
              return (
                <div key={pillar} className="p-6 border border-border rounded-2xl bg-background">
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-6xl text-coral leading-none shrink-0 w-14 text-center">{pillar}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4 mb-1 flex-wrap">
                        <h3 className="font-serif text-xl">{meta.full}</h3>
                        <span className="font-serif text-2xl text-ink-soft">{score}%</span>
                      </div>
                      <p className="text-sm text-muted mb-3">{meta.short}</p>
                      <div className="h-2 bg-border rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full transition-all ${
                            score < 50 ? "bg-gold" : score < 75 ? "bg-gold-deep" : "bg-coral"
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <p className="text-sm">
                        <span className="font-semibold">{b.label}.</span> {b.guidance}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE — non-blocking */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <EmailCapture overall={overall} pillarScores={pillarScores} />
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">What&apos;s next</p>
          <h2 className="font-serif mb-6">Now let&apos;s talk about what to do with this.</h2>
          <p className="text-lg mb-8">
            A 30-minute consult is free. Bring your results, we&apos;ll talk through
            what&apos;s behind the numbers, and you&apos;ll leave with a clear read on
            whether the FAMILY Framework — or some other shape of engagement — is the
            right next step.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/contact?score=${overall}&weak=${weakest.map((w) => w.pillar).join(",")}`}
              className="btn-primary"
            >
              Schedule a free consult <ArrowRight size={18} />
            </Link>
            <button onClick={onRetake} className="btn-outline">
              Retake the diagnostic
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function EmailCapture({
  overall,
  pillarScores,
}: {
  overall: number;
  pillarScores: { pillar: Pillar; score: number; meta: typeof PILLAR_META[Pillar] }[];
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    const payload = new FormData();
    payload.append("email", email);
    payload.append("source", "diagnostic_summary_request");
    payload.append("_subject", `Diagnostic summary request — ${email}`);
    payload.append("overall_score", String(overall));
    pillarScores.forEach(({ pillar, score, meta }) => {
      payload.append(`pillar_${pillar}`, `${meta.name}: ${score}%`);
    });

    if (!FORMSPREE_ENDPOINT) {
      setTimeout(() => setStatus("success"), 600);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 border border-gold bg-cream-deep rounded-2xl flex gap-4">
        <Check className="text-gold-deep shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-serif text-xl mb-2">Summary on its way.</h3>
          <p className="text-ink-soft">
            I&apos;ll email you a copy of your results within one business day,
            along with a short note on what to do next.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-10 border border-gold rounded-2xl bg-cream-deep">
      <div className="flex gap-4 mb-5">
        <Mail className="text-gold-deep shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-serif text-2xl mb-2">Want a copy for later?</h3>
          <p className="text-ink-soft">
            Drop your email and I&apos;ll send you a summary of your results plus a
            short note on where I&apos;d focus first if I were in your seat. No
            subscription, no spam — one email, then silence unless you reach back out.
          </p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 sm:pl-12">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 px-5 py-3 border border-border rounded-full bg-surface focus:outline-none focus:border-coral"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : (<>Email me my summary <ArrowRight size={18} /></>)}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-coral-deep sm:pl-12">{errorMsg}</p>
      )}
    </div>
  );
}
