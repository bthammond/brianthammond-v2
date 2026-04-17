export type Insight = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "why-most-strategic-plans-fail",
    tag: "Strategy",
    title: "Why most strategic plans fail in the first 90 days",
    excerpt:
      "The problem isn't the plan — it's the handoff. Here's the bridge that separates strategy from execution.",
    date: "2026-04-10",
    readingTime: "6 min read",
    content: [
      "Every year I sit in a conference room where a leadership team unveils the new plan. The deck is sharp. The financials pencil out. Everyone nods. By Q2, the plan is a PDF on a shared drive nobody opens.",
      "This happens so reliably that most owners assume it's just how planning goes. It isn't. The plans don't fail because they're bad plans. They fail because nobody built the bridge between the plan and the calendar.",
      "Here's the bridge: every strategic initiative needs three things before the offsite ends. An owner — a single name, not a committee. A date — not a quarter, a specific week. A metric — how you'll know it's done, measured in something other than 'we talked about it.'",
      "Most plans fail the owner test first. 'The leadership team' owns nothing because everyone owning it means no one does. When I push on this in planning sessions, people squirm. That's the signal you're in the right conversation.",
      "The date test is next. 'Q2' is not a date — it's a season. 'Week of May 12' is a date. The moment you pick a week, the initiative becomes real because now it competes with the other things happening that week.",
      "And the metric — the metric is what turns the plan into a contract. Not 'improve customer experience' but 'NPS above 60 by June 30.' If you can't articulate the metric, you don't have a plan. You have a wish.",
      "The next planning session you run, try this: nothing makes it onto the final list without owner, date, metric. The list will be half as long. It will also be twice as likely to actually happen.",
    ],
  },
  {
    slug: "the-annual-marketing-audit",
    tag: "Marketing",
    title: "The audit every small business should run once a year",
    excerpt:
      "A simple framework for pressure-testing your marketing — what to keep, what to kill, what to double down on.",
    date: "2026-04-02",
    readingTime: "5 min read",
    content: [
      "Most small businesses don't have a marketing problem. They have a marketing accumulation problem. Every tactic that ever kind of worked is still running — underfunded, under-attended, and eating calendar time.",
      "The annual marketing audit is the cure. One day, once a year, you sit down with every channel you're running and ask the same three questions.",
      "First: does it still pay for itself? Not last year. Now. Run the last 90 days. If the channel is breakeven or worse and you don't have a specific, funded plan to fix it, kill it. The honest answer is usually 'no' and 'no.'",
      "Second: is it on strategy? Every channel should map back to either awareness (new people learn you exist) or conversion (people who know you take the next step). If a channel does neither clearly, it's busy work. Kill it.",
      "Third: is it competing with the channels that actually work? This is the hardest one. A mediocre channel doesn't just underperform — it steals attention, budget, and best effort from the channel that would crush it if you fed it instead. Kill it.",
      "The list of things to keep is always shorter than the list of things currently running. That's the point. The businesses I've seen double revenue in a year almost always did it by doing fewer things harder, not more things the same.",
      "Set the audit on your calendar. Q1 is ideal — you've got a full year of data and enough runway left to act on what you find.",
    ],
  },
  {
    slug: "three-questions-every-coaching-client",
    tag: "Coaching",
    title: "The three questions I ask every new coaching client",
    excerpt:
      "They sound simple. They aren't. If you can answer them cleanly, you're further ahead than most owners.",
    date: "2026-03-25",
    readingTime: "4 min read",
    content: [
      "The first session with a new coaching client follows the same rhythm. After the small talk, I ask three questions. They sound simple. They aren't.",
      "One: what's the business actually for? Not the mission statement. The reason the business exists for you. Cash flow? Legacy? A platform for the next thing? I've had clients stare at me for two minutes on this question. The good ones eventually answer with something honest that would never make it onto a website.",
      "Two: what would have to be true for you to sell this in five years? I don't ask because I think they should sell. I ask because the answer reveals what they actually believe about the business. People who couldn't sell even if they wanted to have a different business than the one they describe.",
      "Three: what's the thing you know you should be doing and aren't? Everyone has one. Most people have three. The shape of the answer tells me where the real work is — not the work they'd like to do, the work they've been avoiding.",
      "These three questions do something useful even without me in the room. Put them in your notebook. Answer them for yourself, honestly, once a quarter. Compare the answers across quarters. The places your answers shift are the places you're growing. The places they don't shift are either bedrock or avoidance. Your job is to know which.",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
