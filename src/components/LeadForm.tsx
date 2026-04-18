"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Check, TrendingUp, ClipboardCheck } from "lucide-react";
import { PILLAR_META, type Pillar } from "@/lib/diagnostic";

const INTERESTS = [
  "The FAMILY Framework Architecture",
  "Discovery conversation",
  "Consulting & Coaching",
  "Family Enterprise advisory",
  "Entrepreneur Strategy",
  "Financial Analysis",
  "Not sure yet",
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type ReadinessBand = "strong" | "likely" | "notyet" | "different";

const BAND_LABEL: Record<ReadinessBand, string> = {
  strong: "Strong Fit",
  likely: "Likely Fit",
  notyet: "Not Yet",
  different: "Different Program Needed",
};

function parsePillars(raw: string | null): Pillar[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter((s): s is Pillar => ["F", "A", "M", "I", "L", "Y"].includes(s));
}

function parseBand(raw: string | null): ReadinessBand | null {
  if (!raw) return null;
  const v = raw.toLowerCase();
  if (v === "strong" || v === "likely" || v === "notyet" || v === "different") return v;
  return null;
}

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const params = useSearchParams();
  const source = params.get("source"); // "diagnostic" | "readiness" | null
  const score = params.get("score");
  const weak = parsePillars(params.get("weak"));
  const band = parseBand(params.get("band"));

  const fromDiagnostic = source === "diagnostic" || (source == null && (score !== null || weak.length > 0));
  const fromReadiness = source === "readiness" || band !== null;

  const defaultMessage = useMemo(() => {
    if (fromReadiness && band) {
      const lines = [
        "Coming from the Readiness Assessment:",
        `• Band: ${BAND_LABEL[band]}`,
        "",
        "What I'd like to talk through:",
        "",
      ];
      return lines.join("\n");
    }
    if (fromDiagnostic) {
      const weakNames = weak.map((p) => PILLAR_META[p].name).join(" and ");
      const lines = [
        "Coming from the FAMILY diagnostic:",
        score ? `• Overall score: ${score}%` : null,
        weakNames ? `• Weakest pillar${weak.length > 1 ? "s" : ""}: ${weakNames}` : null,
        "",
        "What I'd like to talk through:",
        "",
      ].filter(Boolean);
      return lines.join("\n");
    }
    return "";
  }, [fromDiagnostic, fromReadiness, score, weak, band]);

  const defaultInterest = useMemo(() => {
    if (fromReadiness) return "The FAMILY Framework Architecture";
    if (fromDiagnostic) return "Discovery conversation";
    return "";
  }, [fromDiagnostic, fromReadiness]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    if (!FORMSPREE_ENDPOINT) {
      setTimeout(() => setStatus("success"), 600);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Please email brian@brianthammond.com directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email brian@brianthammond.com directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-coral/40 bg-cream p-10 text-center">
        <Check className="mx-auto h-12 w-12 text-coral" />
        <h3 className="mt-4 font-serif text-2xl">
          Thank you — I&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-ink-soft">
          I&apos;ll reach out within one business day to schedule your
          confidential 45-minute discovery conversation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-surface p-8 md:p-10 shadow-sm"
    >
      {fromReadiness && band && (
        <div className="mb-8 flex gap-4 p-5 bg-cream-deep border border-coral rounded-xl">
          <ClipboardCheck className="shrink-0 mt-1 text-coral" size={22} />
          <div>
            <p className="font-serif text-lg leading-snug mb-1">
              Your Readiness Assessment results are attached.
            </p>
            <p className="text-sm text-ink-soft">
              Band: <strong>{BAND_LABEL[band]}</strong>.{" "}
              {band === "strong" && "The program is designed for owners in your position. Let's get the discovery conversation scheduled."}
              {band === "likely" && "You're close. Let's talk through the specific gaps in the discovery conversation."}
              {band === "notyet" && "We'll talk through what needs to change before the program lands for you."}
              {band === "different" && "I'll respond with a pointer to a better-fitting next step."}
            </p>
          </div>
        </div>
      )}

      {fromDiagnostic && !fromReadiness && (
        <div className="mb-8 flex gap-4 p-5 bg-cream-deep border border-gold rounded-xl">
          <TrendingUp className="shrink-0 mt-1 text-gold-deep" size={22} />
          <div>
            <p className="font-serif text-lg leading-snug mb-1">
              Your FAMILY diagnostic results are attached.
            </p>
            <p className="text-sm text-ink-soft">
              {score && <>Overall: <strong>{score}%</strong>. </>}
              {weak.length > 0 && (
                <>
                  Weakest pillar{weak.length > 1 ? "s" : ""}:{" "}
                  <strong>{weak.map((p) => PILLAR_META[p].name).join(" and ")}</strong>.
                </>
              )}{" "}
              I&apos;ll walk into our call already briefed — you just need to tell me
              what you want to work on.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="block text-sm font-medium mb-2">
          I&apos;m interested in <span className="text-coral">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest}
          required
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30 transition"
        >
          <option value="" disabled>Select a service</option>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell me about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={fromDiagnostic || fromReadiness ? 8 : 5}
          defaultValue={defaultMessage}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30 transition font-mono"
          placeholder={
            fromDiagnostic || fromReadiness
              ? undefined
              : "What challenges are you facing? What outcomes matter most?"
          }
        />
      </div>

      {/* Hidden fields so the source context submits with the form */}
      {fromReadiness && band && (
        <>
          <input type="hidden" name="readiness_band" value={BAND_LABEL[band]} />
          <input type="hidden" name="source" value="readiness" />
        </>
      )}
      {fromDiagnostic && !fromReadiness && (
        <>
          <input type="hidden" name="diagnostic_score" value={score ?? ""} />
          <input type="hidden" name="diagnostic_weak_pillars" value={weak.join(",")} />
          <input type="hidden" name="source" value="diagnostic" />
        </>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-coral px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-coral-deep transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : (<>Send inquiry <Send className="h-4 w-4" /></>)}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-coral-deep">{errorMsg}</p>
      )}

      <p className="mt-3 text-xs text-muted text-center">
        I reply within one business day. Your information is never shared.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30 transition"
      />
    </div>
  );
}
