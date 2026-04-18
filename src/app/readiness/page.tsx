"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import {
  READINESS_QUESTIONS,
  READINESS_SCALE,
  scoreReadiness,
  readinessBand,
  type ReadinessAnswers,
} from "@/lib/readiness";

type Phase = "intro" | "quiz" | "results";

export default function ReadinessPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<ReadinessAnswers>({});

  const allAnswered = READINESS_QUESTIONS.every((q) => answers[q.id] != null);

  return (
    <>
      {phase === "intro" && <IntroScreen onStart={() => setPhase("quiz")} />}

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
        <ResultsScreen
          answers={answers}
          onRetake={() => {
            setAnswers({});
            setPhase("quiz");
          }}
        />
      )}
    </>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="pt-20 pb-24">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4">The Readiness Assessment</p>
        <h1 className="font-serif mb-6">
          Fifteen questions. Fifteen minutes. A clear read on fit.
        </h1>
        <p className="text-xl mb-8">
          The FAMILY Framework Architecture is a 117-week, two-year program for
          owners ready to work on the business. This assessment tells you whether
          it&apos;s the right program for where you are today. It&apos;s not about
          the business — it&apos;s about <em>you</em>: your bandwidth, your
          authority, your readiness to do the work.
        </p>

        <div className="p-6 border border-border rounded-2xl bg-surface mb-8">
          <h3 className="font-serif text-lg mb-3">Before you start</h3>
          <ul className="space-y-2 text-ink-soft">
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Score honestly — this is a decision tool, not a test to pass.</span>
            </li>
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Think about how things actually are, not how you want them to be.</span>
            </li>
            <li className="flex gap-3">
              <Check size={18} className="text-coral shrink-0 mt-1" />
              <span>Your answers aren&apos;t stored or sent anywhere until you choose to share them.</span>
            </li>
          </ul>
        </div>

        <button onClick={onStart} className="btn-primary">
          Start the assessment <ArrowRight size={18} />
        </button>

        <p className="mt-6 text-sm text-muted">
          Looking for the business diagnostic instead?{" "}
          <Link href="/diagnostic" className="link-arrow">
            Take the 10-minute FAMILY pillar diagnostic
          </Link>{" "}
          — it scores your business across the six domains.
        </p>
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
  answers: ReadinessAnswers;
  onChange: (a: ReadinessAnswers) => void;
  allAnswered: boolean;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const answeredCount = Object.keys(answers).length;
  const pct = Math.round((answeredCount / READINESS_QUESTIONS.length) * 100);

  return (
    <section className="pt-12 pb-24">
      <div className="container-site max-w-3xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-coral mb-6"
        >
          <ArrowLeft size={14} /> Back to intro
        </button>

        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-2">
            <p className="eyebrow">Progress</p>
            <p className="text-sm text-ink-soft font-medium">
              {answeredCount} of {READINESS_QUESTIONS.length}
            </p>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-coral transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <h1 className="font-serif mb-10">
          Rate how honestly each statement describes you today.
        </h1>

        <div className="space-y-8">
          {READINESS_QUESTIONS.map((q, i) => (
            <div key={q.id} className="p-6 border border-border rounded-2xl bg-surface">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-xl text-gold-deep shrink-0 w-8">
                  {i + 1}.
                </span>
                <p className="text-lg">{q.text}</p>
              </div>
              <div className="pl-11">
                <div className="grid grid-cols-5 gap-2">
                  {READINESS_SCALE.map((opt) => {
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
            {allAnswered
              ? "All set — ready to see your results."
              : `${READINESS_QUESTIONS.length - answeredCount} questions remaining.`}
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

function ResultsScreen({
  answers,
  onRetake,
}: {
  answers: ReadinessAnswers;
  onRetake: () => void;
}) {
  const total = scoreReadiness(answers);
  const band = readinessBand(total);

  const bandStyles: Record<string, string> = {
    strong: "border-coral bg-cream-deep",
    likely: "border-gold bg-cream-deep",
    notyet: "border-border bg-surface",
    different: "border-border bg-surface",
  };

  return (
    <>
      <section className="pt-20 pb-12">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">Your readiness score</p>
          <h1 className="font-serif mb-6">{band.title}.</h1>

          <div className={`p-10 border-2 rounded-2xl ${bandStyles[band.tone]}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center shrink-0">
                <p className="font-serif text-7xl md:text-8xl text-coral leading-none">
                  {total}
                  <span className="text-3xl text-muted">/75</span>
                </p>
                <p className="eyebrow mt-2">{band.name}</p>
              </div>
              <div className="flex-1">
                <p className="text-lg mb-4">{band.summary}</p>
                <p className="font-semibold text-foreground mb-2">Recommended next step:</p>
                <p className="text-ink-soft">{band.nextStep}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE SCORE BANDS MEAN */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-site max-w-4xl">
          <p className="eyebrow mb-4">How to read your score</p>
          <h2 className="font-serif mb-8">Four bands. Four different paths.</h2>
          <div className="space-y-4">
            {[
              {
                range: "65–75",
                name: "Strong Fit",
                body: "You’re ready. Schedule a discovery conversation.",
                active: band.tone === "strong",
              },
              {
                range: "50–64",
                name: "Likely Fit",
                body: "You’re close. The two or three statements you scored lowest become the discovery conversation.",
                active: band.tone === "likely",
              },
              {
                range: "35–49",
                name: "Not Yet",
                body: "Bandwidth, partner alignment, or financial position usually. Address those; revisit in 6–12 months.",
                active: band.tone === "notyet",
              },
              {
                range: "Below 35",
                name: "Different Program Needed",
                body: "A short-term consulting engagement, a turnaround specialist, or a peer mastermind may fit better. Brian can refer.",
                active: band.tone === "different",
              },
            ].map(({ range, name, body, active }) => (
              <div
                key={range}
                className={`p-6 rounded-2xl border ${
                  active ? "border-coral bg-background shadow-sm" : "border-border bg-background opacity-75"
                }`}
              >
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="font-serif text-2xl text-coral">{range}</span>
                  <span className="font-serif text-xl">{name}</span>
                  {active && <span className="eyebrow">your band</span>}
                </div>
                <p className="mt-2 text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">What’s next</p>
          <h2 className="font-serif mb-6">{band.ctaLabel}.</h2>
          <p className="text-lg mb-8">
            {band.tone === "strong" &&
              "You’re ready. Let’s get the conversation on the calendar. The discovery call is 45 minutes, free, no obligation."}
            {band.tone === "likely" &&
              "A discovery conversation will be more productive than trying to resolve the gaps on your own. We’ll talk through what’s standing between you and a Strong Fit."}
            {band.tone === "notyet" &&
              "The business diagnostic will give you something concrete to work on while you build the bandwidth and alignment this program requires."}
            {band.tone === "different" &&
              "Send a short note about your situation. You’ll get a response pointing to the right next step — even if that isn’t this program."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={band.ctaHref} className="btn-primary">
              {band.ctaLabel} <ArrowRight size={18} />
            </Link>
            <button onClick={onRetake} className="btn-outline">
              Retake the assessment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
