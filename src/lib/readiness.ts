export type ReadinessAnswers = Record<number, number>;

export const READINESS_SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export const READINESS_QUESTIONS = [
  {
    id: 1,
    text: "I am willing to commit to a weekly consulting session for at least the next 90 days, and intend to honor that cadence through the program.",
  },
  {
    id: 2,
    text: "I have access to my business’s profit-and-loss statement and am willing to walk it line by line with a consultant in the first month.",
  },
  {
    id: 3,
    text: "I trust at least one person in my life enough to share difficult truths about how my business is going.",
  },
  {
    id: 4,
    text: "I am ready to write down my “why” for doing this work in my own handwriting and share it with my consultant.",
  },
  {
    id: 5,
    text: "I am willing to be told the truth about my business, even when the truth is uncomfortable.",
  },
  {
    id: 6,
    text: "I have authority over the major decisions in my business (or am the partner who does).",
  },
  {
    id: 7,
    text: "I am willing to write in a workbook by hand each week as part of the program.",
  },
  {
    id: 8,
    text: "I am open to changing my compensation structure for my team, my decision-rights, or my org chart if the analysis says I should.",
  },
  {
    id: 9,
    text: "I have at least 5 hours per week to dedicate to this program (1 hour with consultant, 4 hours of between-session work).",
  },
  {
    id: 10,
    text: "I am willing to identify and develop someone in my business who could one day take over daily operations from me.",
  },
  {
    id: 11,
    text: "I am willing to share the program’s core ideas — vision, values, scoreboards — publicly with my team.",
  },
  {
    id: 12,
    text: "I have been frustrated for at least one year with the same set of issues in my business and am ready to do something different.",
  },
  {
    id: 13,
    text: "I am willing to publish a Weekly Revenue Target to my leadership team and review it every week.",
  },
  {
    id: 14,
    text: "I have the financial bandwidth to sustain a multi-phase consulting investment.",
  },
  {
    id: 15,
    text: "I am willing, at the end of the program, to define what “enough” looks like for me — personally and professionally.",
  },
];

export function scoreReadiness(answers: ReadinessAnswers): number {
  return READINESS_QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
}

export type Band = {
  name: string;
  title: string;
  tone: "strong" | "likely" | "notyet" | "different";
  summary: string;
  nextStep: string;
  ctaLabel: string;
  ctaHref: string;
};

export function readinessBand(total: number): Band {
  if (total >= 65) {
    return {
      name: "Strong Fit",
      title: "You’re ready",
      tone: "strong",
      summary:
        "You’re ready. The program is designed for owners in your position. The work will land.",
      nextStep:
        "Schedule a discovery conversation. A 45-minute call with Brian to talk through your business, your situation, and your questions about the program.",
      ctaLabel: "Schedule the discovery conversation",
      ctaHref: "/contact?source=readiness&band=strong",
    };
  }
  if (total >= 50) {
    return {
      name: "Likely Fit",
      title: "You’re close",
      tone: "likely",
      summary:
        "You’re close. Identify the two or three statements you scored lowest. Those become the conversation in the discovery call — they’re usually addressable, not disqualifying.",
      nextStep:
        "Schedule a discovery conversation. We’ll talk through the specific gaps and what needs to be true before the program would land for you.",
      ctaLabel: "Schedule the discovery conversation",
      ctaHref: "/contact?source=readiness&band=likely",
    };
  }
  if (total >= 35) {
    return {
      name: "Not Yet",
      title: "Not the right time",
      tone: "notyet",
      summary:
        "The program will not yet land for you. The most common reasons: bandwidth, partner alignment, or financial position. Address those first; revisit in 6–12 months.",
      nextStep:
        "Take the free 10-minute business diagnostic instead. It’ll give you a read on where your business stands today — useful signal to act on in the meantime.",
      ctaLabel: "Take the free diagnostic",
      ctaHref: "/diagnostic",
    };
  }
  return {
    name: "Different Program Needed",
    title: "A different path makes more sense",
    tone: "different",
    summary:
      "This isn’t the right program for where you are today. A short-term consulting engagement, a turnaround specialist, or a peer mastermind may be better fits. Brian can help refer.",
    nextStep:
      "Send a short note about your situation. Brian will respond with a pointer to the right next step — even if that isn’t this program.",
    ctaLabel: "Send a note",
    ctaHref: "/contact?source=readiness&band=different",
  };
}
