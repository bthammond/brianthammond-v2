export type Pillar = "F" | "A" | "M" | "I" | "L" | "Y";

export const PILLAR_META: Record<Pillar, { name: string; full: string; short: string }> = {
  F: { name: "Foundations", full: "Foundations & Values", short: "Values and legacy that guide the business" },
  A: { name: "Alignment", full: "Alignment & Aspirations", short: "Communication and goals across generations" },
  M: { name: "Management", full: "Monitoring & Management", short: "Governance, roles, and performance tracking" },
  I: { name: "Innovation", full: "Innovation & Integration", short: "Evolution without losing what works" },
  L: { name: "Leadership", full: "Leadership Transition", short: "Succession and readiness of the next generation" },
  Y: { name: "Yield & Feedback", full: "Yield & Feedback", short: "Feedback loops and external perspective" },
};

export type Question = {
  id: string;
  pillar: Pillar;
  text: string;
};

export const QUESTIONS: Question[] = [
  { id: "f1", pillar: "F", text: "Our family has explicit, documented values that guide business decisions." },
  { id: "f2", pillar: "F", text: "The history and legacy of the business are clearly articulated to the next generation." },

  { id: "a1", pillar: "A", text: "Communication between generations is open, direct, and honest." },
  { id: "a2", pillar: "A", text: "The goals of each generation are mapped — and reconciled where they conflict." },

  { id: "m1", pillar: "M", text: "Governance roles (family member, owner, manager) are clearly separated and documented." },
  { id: "m2", pillar: "M", text: "We track business performance AND family engagement with explicit metrics." },

  { id: "i1", pillar: "I", text: "We have a clear plan to evolve the business without breaking what makes it work." },
  { id: "i2", pillar: "I", text: "The next generation is being trained for specific roles, not just broadly groomed." },

  { id: "l1", pillar: "L", text: "The succession plan is documented, current, and understood by key stakeholders." },
  { id: "l2", pillar: "L", text: "The next-generation leader is ready — or has a clear roadmap to readiness." },

  { id: "y1", pillar: "Y", text: "We have regular, structured feedback loops with family members and stakeholders." },
  { id: "y2", pillar: "Y", text: "We engage external advisors for unbiased input on family-business decisions." },
];

export const SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral / unsure" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export type Answers = Record<string, number>;

export function scorePillar(answers: Answers, pillar: Pillar): number {
  const pillarQs = QUESTIONS.filter((q) => q.pillar === pillar);
  const total = pillarQs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const max = pillarQs.length * 5;
  return Math.round((total / max) * 100);
}

export function scoreOverall(answers: Answers): number {
  const total = QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const max = QUESTIONS.length * 5;
  return Math.round((total / max) * 100);
}

export function pillarBand(score: number): { label: string; guidance: string } {
  if (score < 50) {
    return {
      label: "Gap",
      guidance: "This pillar is where the real work is. Start here.",
    };
  }
  if (score < 75) {
    return {
      label: "Developing",
      guidance: "Baseline in place. Room to formalize and deepen.",
    };
  }
  return {
    label: "Strength",
    guidance: "A genuine strength. Leverage it to carry the weaker pillars.",
  };
}

export function overallBand(score: number): { title: string; summary: string } {
  if (score < 40) {
    return {
      title: "Critical gaps",
      summary:
        "Significant work needed across multiple pillars. The good news: knowing this is half the battle. The sooner you start, the less expensive the fixes get.",
    };
  }
  if (score < 65) {
    return {
      title: "Foundation in place",
      summary:
        "The bones are there, but several pillars aren't carrying their weight. This is the most common place family businesses find themselves — and the highest-leverage point to bring in outside help.",
    };
  }
  if (score < 85) {
    return {
      title: "Strong shape",
      summary:
        "You're ahead of most family businesses at your stage. Targeted work on your weakest pillars will likely unlock meaningful growth without rebuilding what's working.",
    };
  }
  return {
    title: "Well-positioned",
    summary:
      "Your family business is unusually well-structured across the FAMILY pillars. If you're here, you likely need specific, tactical help rather than a full engagement.",
  };
}
