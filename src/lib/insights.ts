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
    slug: "running-family-business-by-the-numbers",
    tag: "Operations",
    title: "Running your family business by the numbers: the KPIs that actually matter",
    excerpt:
      "Most family business owners run on instinct and the occasional look at the bank account. Here's the dashboard that replaces the guesswork.",
    date: "2026-04-17",
    readingTime: "7 min read",
    content: [
      "Most owners I work with will tell you, within about thirty seconds of asking, that the business is “doing fine.” When I ask what fine means, the answer gets vague. Revenue is up. Maybe flat. Cash flow is mostly okay. The bank account has enough to make payroll next Friday. That’s not running a business. That’s surviving one.",
      "Running a business by the numbers means you have six to ten metrics you can quote without looking — and you know what each one is telling you about whether the company is healthier or sicker than it was last quarter. The alternative is hope, and hope is not a strategy.",
      "For a business between $1M and $250M in revenue — family enterprise, founder-led, or established mid-market — here’s the shortlist that matters. Growth: revenue growth year-over-year, new-customer count, customer retention rate. Profit: gross margin, operating margin. Cash: days of cash on hand, working capital ratio, AR days outstanding. Team: revenue per employee, voluntary turnover.",
      "That’s nine metrics. You don’t need more. You need those nine, reviewed monthly, with last month, last quarter, and year-ago comparisons side by side.",
      "The trap most owners fall into is the opposite — tracking everything. A dashboard with thirty metrics is a dashboard nobody looks at. The other trap is tracking vanity metrics: social media followers, website hits, impressions. None of those pay payroll. If the metric doesn’t correlate with cash in the bank within 90 days, leave it off the dashboard.",
      "[REAL STORY: a client who couldn’t tell you their gross margin when we started, what they discovered when they finally tracked it, what changed in the business once they could see it monthly]",
      "The monthly review ritual is as important as the metrics themselves. Same day every month. Same people in the room — owner, finance, and one or two operational leads. Forty-five minutes, not three hours. For each metric: what changed, why, what we’re going to do about it. Document one decision per meeting. That’s how the dashboard becomes the business, not just a report.",
      "The business you can measure is the business you can improve. The business you can’t measure is the business running you. Pick the nine numbers. Review them every month. Everything else follows.",
    ],
  },
  {
    slug: "three-legged-stool",
    tag: "Ownership",
    title: "The three-legged stool: family, employees, and community",
    excerpt:
      "Family businesses exist to support three things, not just one. Here's how to think about whether you're making enough for all three — and what it means when you're not.",
    date: "2026-04-10",
    readingTime: "6 min read",
    content: [
      "Every family business I work with is sitting on what I call the three-legged stool. Leg one: the family — the owners, the spouses, the kids, the parents who built the thing. Leg two: the employees — the people who show up every day and trade their time for a paycheck that feeds their own families. Leg three: the community — the customers, the suppliers, the town, the industry. Whatever ecosystem your business touches.",
      "A healthy family business generates enough to support all three legs. An unhealthy one is resting on one or two. And the thing about a stool — take one leg away and it falls over.",
      "Most owners I meet have the family leg dialed in. They know what the family needs. They know what the quarterly distribution looks like. They’ve talked about it at the kitchen table a hundred times. The other two legs? Much blurrier.",
      "Here’s the test. Ask yourself three questions, this week. What does my employee team need from this business to build real lives — not just survive, but actually build? Not vague. Specifics. Health insurance that doesn’t bankrupt them if someone gets sick. A bonus program that pays out when it should. Paths to promotion that don’t require marrying in.",
      "Then: what am I giving back to the community this business depends on? Customers, yes — but deeper. The town. The industry. The next generation of operators who’ll still be working when I’m not.",
      "And finally — am I making enough to fund all three? Not just distribute profit to the family. Fund the stool. That’s a different calculation.",
      "[REAL STORY: a time you saw a family business get this wrong — maybe the family leg crowded out the others, or the business shrunk to the point all three were starving. What the owner did about it or didn’t.]",
      "The mental shift is this. The business doesn’t exist to enrich the family. It exists to support the stool. When you think about it that way, a lot of hard decisions get easier — what to pay the general manager, whether to approve the sponsorship, whether to take the distribution this quarter or reinvest. You’re not making the call based on your bank account. You’re making it based on which leg is under-funded.",
      "Family businesses that get the three-legged stool right outlast the ones that don’t. It’s a generational decision disguised as a weekly one.",
    ],
  },
  {
    slug: "hiring-outside-the-family",
    tag: "Leadership",
    title: "Hiring outside the family: how to do it without breaking trust",
    excerpt:
      "Every growing family business hits the ceiling where you have to hire people who aren't blood. Here's how to build that trust — and what not to do.",
    date: "2026-04-03",
    readingTime: "6 min read",
    content: [
      "At some point every family business crosses the line from “everyone at the table is related” to “some of these people aren’t.” It’s usually when you hit a ceiling. You need a controller. Or a VP of sales. Or someone who actually understands operations, and nobody in the family is going to learn it fast enough.",
      "This is where a lot of family businesses stall. The owner knows they need to hire outside. They can’t bring themselves to delegate real authority to someone who doesn’t share the last name. So they hire, underpay, under-empower, and then fire the person when it doesn’t work. Rinse. Repeat.",
      "The trust problem is real. Family members have skin in the game that outsiders don’t. Your cousin loses sleep if the business goes sideways. The new controller you just hired probably won’t.",
      "But here’s the thing: trust isn’t genetic. It’s behavioral. You build it the same way with non-family as you do with family — by defining the role, giving them real authority in it, watching what they do, and holding them accountable. Skipping any of those steps guarantees failure.",
      "[REAL STORY: a specific hire you or a client made from outside the family. What they were hired for, how you structured the authority, what went right or wrong, what you’d tell an owner facing the same decision now.]",
      "Three things to get right when hiring outside. First: define the role in writing before you recruit. What are they responsible for? What can they decide without asking? What do they need to escalate? Family businesses have a habit of running on vibes. Non-family hires need explicit boundaries — it’s not disrespect, it’s clarity.",
      "Second: pay market. Every time I see a family business try to save money on a senior non-family hire, it backfires. The person they hired wasn’t the person they needed. Quality costs. You get what you pay for.",
      "Third: give them a real seat. Include them in the strategy conversation, not just the execution. If you’re going to have meetings where the actual decisions are made behind closed doors, without them, they’ll figure it out within six weeks and you’ll have the best people quietly checking out. Transparency isn’t a favor to non-family leaders. It’s the job.",
      "The test: a year from now, would you trust this person to run a key decision while you’re on vacation? If no, you haven’t delegated. You’ve assigned. And the business will still run on you.",
    ],
  },
  {
    slug: "old-heads-dont-want-to-change",
    tag: "Family Dynamics",
    title: "The old heads don't want to change: navigating generational mindset shifts",
    excerpt:
      "Every 2nd-generation owner runs into it. The founders built something that works. The younger generation sees things that need to change. Here's how to get past the standoff.",
    date: "2026-03-27",
    readingTime: "6 min read",
    content: [
      "Every second-generation family business I’ve worked with hits the same wall. The old heads — the founders, the parents, the people who built the thing — don’t want to change. And from where they sit, they’re right. It’s worked for thirty years. Why would they rip it apart now?",
      "The next generation sees it differently. The systems are old. The margins are drifting. The talent is leaving. What worked at $3M doesn’t scale to $15M. Everyone in the room knows it. Nobody is willing to say the hard part out loud.",
      "This is where most family businesses lose a decade. The standoff settles in. The old heads don’t budge. The next generation gets frustrated and either quietly checks out or loudly blows up. Both outcomes are bad.",
      "Here’s what I’ve learned from sitting in the middle of these conversations for thirty years. The problem isn’t the old heads. It’s the framing.",
      "When change is framed as “you did it wrong, we’re going to fix it,” the old heads hear their life’s work being insulted. Of course they dig in. When it’s framed as “you built something that got us here, now we need to build what takes us further,” the conversation changes. Same change. Different story.",
      "[REAL STORY: a specific client situation — owner refusing to let the next gen modernize something, how you reframed the conversation, what broke loose.]",
      "A few things help. One: honor what worked before criticizing what’s broken. Every meeting where change comes up, start with what the founder got right. Not as a formality. Actually trace the decisions they made that built the company. The old heads need to know you see it before they can hear anything else.",
      "Two: let the next generation pilot, don’t overhaul. Pick one problem. Give the younger generation authority to fix it. Don’t touch the rest. Once they deliver a win, the old heads give up more territory voluntarily. Once.",
      "Three: the owner has to say “not my call anymore” out loud. Until the founder verbally releases an area of the business, the next generation is just playing pretend. The explicit handoff matters. Even if nothing else changes, that one sentence changes everything.",
      "The old heads don’t fear change. They fear irrelevance. Handle the second fear and the first one takes care of itself.",
    ],
  },
  {
    slug: "one-on-ones-that-dont-break",
    tag: "Leadership",
    title: "Building 1:1s that don't break when you're out",
    excerpt:
      "Most owners run their business by being around. Take them out of the building for a week and things slip. The fix is a communication rhythm the business owns, not one you do.",
    date: "2026-03-20",
    readingTime: "5 min read",
    content: [
      "Here’s a simple test. Take a week off. Don’t answer email. Don’t check Slack. Don’t take the 4pm call from your GM about the thing. Just be unavailable. When you come back, how much ground did the team lose?",
      "If the answer is “a lot,” you don’t have a communication system. You have a dependency. You’re the glue. And glue wears out.",
      "The fix is weekly 1:1s with your key people. Not performance reviews. Not status updates. A real, structured, protected thirty minutes between you and each person who matters. The same time, every week, no exceptions. Even when it feels like you don’t need it. Especially then.",
      "Here’s the structure I use. Ten minutes: them. What they’re working on, what’s stuck, what they need from you. Ten minutes: you. What you’re seeing, what’s coming, what you need from them. Ten minutes: relationship. How’s the job going? Are they where they want to be? What’s the honest answer?",
      "That last ten minutes is where most owners skip. Don’t. Three months of skipped relationship check-ins and your best people are already interviewing elsewhere and you don’t know it.",
      "[REAL STORY: a time you saw 1:1 discipline pay off — a problem caught early, a great employee who stayed because they felt heard, a client who installed this rhythm and it unstuck something.]",
      "The common objection: “we talk all day, I don’t need a scheduled meeting.” Yes you do. Casual conversation is transactional. 1:1s are where you build trust, surface what nobody says out loud, and catch small problems before they’re big ones. Different function. Both needed.",
      "Two rules. First: take notes. Every 1:1, one page of notes, shared with them. That’s the paper trail of your leadership. Second: follow up on what you committed to last week. If you said you’d do something and didn’t, flag it at the top of the next meeting. Modeling accountability is the whole job.",
      "The business that runs on discipline runs without you in it. The business that runs on your presence can’t let you go. Build the rhythm. Then take the week off and see what happens.",
    ],
  },
  {
    slug: "why-most-strategic-plans-fail",
    tag: "Strategy",
    title: "Why most strategic plans fail in the first 90 days",
    excerpt:
      "The problem isn't the plan — it's the handoff. Here's the bridge that separates strategy from execution.",
    date: "2026-03-13",
    readingTime: "6 min read",
    content: [
      "Every year I sit in a conference room where a leadership team unveils the new plan. The deck is sharp. The financials pencil out. Everyone nods. By Q2, the plan is a PDF on a shared drive nobody opens.",
      "This happens so reliably that most owners assume it’s just how planning goes. It isn’t. The plans don’t fail because they’re bad plans. They fail because nobody built the bridge between the plan and the calendar.",
      "Here’s the bridge: every strategic initiative needs three things before the offsite ends. An owner — a single name, not a committee. A date — not a quarter, a specific week. A metric — how you’ll know it’s done, measured in something other than “we talked about it.”",
      "Most plans fail the owner test first. “The leadership team” owns nothing because everyone owning it means no one does. When I push on this in planning sessions, people squirm. That’s the signal you’re in the right conversation.",
      "The date test is next. “Q2” is not a date — it’s a season. “Week of May 12” is a date. The moment you pick a week, the initiative becomes real because now it competes with the other things happening that week.",
      "And the metric — the metric is what turns the plan into a contract. Not “improve customer experience” but “NPS above 60 by June 30.” If you can’t articulate the metric, you don’t have a plan. You have a wish.",
      "The next planning session you run, try this: nothing makes it onto the final list without owner, date, metric. The list will be half as long. It will also be twice as likely to actually happen.",
    ],
  },
  {
    slug: "three-questions-every-coaching-client",
    tag: "Coaching",
    title: "The three questions I ask every new coaching client",
    excerpt:
      "They sound simple. They aren't. If you can answer them cleanly, you're further ahead than most owners.",
    date: "2026-03-06",
    readingTime: "4 min read",
    content: [
      "The first session with a new coaching client follows the same rhythm. After the small talk, I ask three questions. They sound simple. They aren’t.",
      "One: what’s the business actually for? Not the mission statement. The reason the business exists for you. Cash flow? Legacy? A platform for the next thing? I’ve had clients stare at me for two minutes on this question. The good ones eventually answer with something honest that would never make it onto a website.",
      "Two: what would have to be true for you to sell this in five years? I don’t ask because I think they should sell. I ask because the answer reveals what they actually believe about the business. People who couldn’t sell even if they wanted to have a different business than the one they describe.",
      "Three: what’s the thing you know you should be doing and aren’t? Everyone has one. Most people have three. The shape of the answer tells me where the real work is — not the work they’d like to do, the work they’ve been avoiding.",
      "These three questions do something useful even without me in the room. Put them in your notebook. Answer them for yourself, honestly, once a quarter. Compare the answers across quarters. The places your answers shift are the places you’re growing. The places they don’t shift are either bedrock or avoidance. Your job is to know which.",
    ],
  },
  {
    slug: "the-annual-marketing-audit",
    tag: "Marketing",
    title: "The audit every small business should run once a year",
    excerpt:
      "A simple framework for pressure-testing your marketing — what to keep, what to kill, what to double down on.",
    date: "2026-02-27",
    readingTime: "5 min read",
    content: [
      "Most small businesses don’t have a marketing problem. They have a marketing accumulation problem. Every tactic that ever kind of worked is still running — underfunded, under-attended, and eating calendar time.",
      "The annual marketing audit is the cure. One day, once a year, you sit down with every channel you’re running and ask the same three questions.",
      "First: does it still pay for itself? Not last year. Now. Run the last 90 days. If the channel is breakeven or worse and you don’t have a specific, funded plan to fix it, kill it. The honest answer is usually “no” and “no.”",
      "Second: is it on strategy? Every channel should map back to either awareness (new people learn you exist) or conversion (people who know you take the next step). If a channel does neither clearly, it’s busy work. Kill it.",
      "Third: is it competing with the channels that actually work? This is the hardest one. A mediocre channel doesn’t just underperform — it steals attention, budget, and best effort from the channel that would crush it if you fed it instead. Kill it.",
      "The list of things to keep is always shorter than the list of things currently running. That’s the point. The businesses I’ve seen double revenue in a year almost always did it by doing fewer things harder, not more things the same.",
      "Set the audit on your calendar. Q1 is ideal — you’ve got a full year of data and enough runway left to act on what you find.",
    ],
  },
  {
    slug: "year-end-employee-assessments",
    tag: "Leadership",
    title: "Year-end employee assessments: how to actually do them",
    excerpt:
      "Most family businesses skip them, rush them, or turn them into formalities. Here's what a real assessment looks like — and why it's worth doing right.",
    date: "2026-02-20",
    readingTime: "6 min read",
    content: [
      "Two things happen in most family businesses at the end of the year. The owner gives everyone a vague “great year, keep it up” and hands out bonuses loosely tied to revenue. Or the owner does nothing at all, because year-end assessments feel awkward and corporate. Both are misses.",
      "Real assessments aren’t paperwork. They’re the conversations that define whether each person on the team is growing or stagnating — and whether you, as the owner, know the difference.",
      "The structure I use is three questions. What did they do well? Where did they fall short? What’s next? Not a form. Not a numerical rating. A conversation built around those three, with real specifics in each bucket.",
      "What did they do well — be specific, with examples from the last year. “You handled the Johnson account handoff really well” beats “great work.” Specificity shows you were paying attention. Generalities show you weren’t.",
      "Where did they fall short — also specific. Not “you need to communicate better.” Try “when the Q3 margin issue came up, I heard it from accounting before I heard it from you.” That’s a critique they can do something with.",
      "What’s next — this is where most owners stop too early. “More of the same” isn’t a next. What skill should they build this year? What project should they own that they didn’t last year? What’s the growth path? If you don’t have an answer, they’ll find one somewhere else.",
      "[REAL STORY: an employee assessment that changed the trajectory of a person or the business — either you caught a problem early, or you signaled an investment in someone that kept them on the team.]",
      "The part most owners dread: the compensation conversation. Separate the assessment from the comp review by two weeks. Same person, different meeting. Assessments that double as raise discussions devolve into negotiation. Assessments that stand alone actually build people.",
      "The business is the people. Assessing them seriously, once a year, with real specificity and a real “what’s next” — that’s the difference between a team that stays and grows, and a team that drifts.",
    ],
  },
  {
    slug: "tribal-knowledge-problem",
    tag: "Operations",
    title: "The tribal knowledge problem: building processes that outlast the people",
    excerpt:
      "Every family business runs on tribal knowledge. Bob knows how to do the thing, but it's only in Bob's head. Here's how to get it out.",
    date: "2026-02-13",
    readingTime: "6 min read",
    content: [
      "Every family business I visit has a version of this. “Oh, that’s Bob’s thing. Bob knows how to handle the inventory reconciliation. He’s been doing it for twenty years.” Bob retires. The inventory reconciliation becomes a crisis. Nobody saw it coming. Everyone saw it coming.",
      "This is the tribal knowledge problem. Critical operations run in the heads of specific people, undocumented, unreplicable. It works fine until it doesn’t. Then the business is suddenly hostage to whoever has the knowledge — and when they leave, get sick, or quietly check out, the business stops with them.",
      "The fix is simple in principle: document the critical processes. Painful in practice, because nobody wants to do it. The person who knows it thinks it’s obvious. The owner doesn’t have time. Nobody has the authority to force the issue.",
      "Start with the 80/20. Don’t document everything. Find the five to ten critical processes — the ones that would cost real money if they stopped — and document those first. For a typical $5M family business: cash collection, payroll, customer onboarding, inventory, month-end close. Five processes. Everything else comes later, or never, and that’s fine.",
      "Each process gets a one-page written SOP. Not a manual. A page. Who does it, what triggers it, what steps, what outputs, what can go wrong. The person who does it writes the first draft. A second person then follows the SOP blind and flags every place they got stuck. You revise. Done.",
      "[REAL STORY: a client who had a critical process locked in one person’s head, what happened when that person left or was unavailable, how they rebuilt the knowledge.]",
      "The real test for every SOP: a new hire, following it without anyone coaching them, can execute the process end-to-end. If they can’t, the SOP isn’t done yet. Don’t sign off on it until a second person has run it clean.",
      "Tribal knowledge is a tax on the business. You pay it in every crisis, every onboarding, every succession conversation. Systematic documentation is the one-time cost that pays down that tax forever.",
    ],
  },
  {
    slug: "owner-treasury",
    tag: "Ownership",
    title: "Putting enough money away: the owner treasury question",
    excerpt:
      "Family business owners reinvest or distribute. Rarely do they build a personal treasury that outlasts the business. Here's why that's a mistake.",
    date: "2026-02-06",
    readingTime: "6 min read",
    content: [
      "Most family business owners I know have two financial modes. Reinvest — put every extra dollar back into the business. Or distribute — take the quarterly distribution, buy the things, live the life. Almost nobody has a third mode: build a personal treasury that outlasts the business.",
      "The logic of reinvesting feels obvious. You trust your business more than the stock market. Your ROI on a new truck or a key hire is better than your ROI on an index fund. And the business IS the retirement plan, right?",
      "Here’s the problem with that logic. The business is an illiquid, concentrated, undiversified asset. You’re betting everything on one company in one industry in one region. If the business stumbles — or if the succession to the next generation doesn’t go as planned — your retirement stumbles with it.",
      "A real owner treasury is money the business can’t touch. In your name, outside the business, diversified across asset classes, enough to support your family for ten-plus years without the business distributing anything.",
      "How much? A rough rule of thumb: by age 55, you should have 3 to 5 times your current annual distribution in outside assets. By 65, 10 times. Most owners are at 0.5 to 1 times when they get to 60. That’s a problem they spent a lifetime making.",
      "[REAL STORY: an owner who had most of their wealth in the business, what happened when a transition came up, or the opposite — an owner who’d built a real treasury and how it changed their options.]",
      "The tactical part: pay yourself a real market salary, not just distributions. Take the distribution after. Build up a separate investment account. Work with an advisor who doesn’t report to you at the company. Keep the two worlds separate — business money and family money, in two different accounts, with two different strategies.",
      "Your business should support your family. Your treasury should make sure it still can if the business changes hands, changes direction, or changes fortunes. Don’t confuse the two.",
    ],
  },
  {
    slug: "budgets-that-work",
    tag: "Operations",
    title: "How to build a budget a family business will actually follow",
    excerpt:
      "Most budgets get made in December and ignored by March. Here's what a working budget looks like — and how to build one the team uses.",
    date: "2026-01-30",
    readingTime: "6 min read",
    content: [
      "Here’s how most family business budgets get made. The owner and the bookkeeper sit down in December, take last year’s numbers, add 5 percent, call it next year’s budget. It gets filed. By March, actual spending has drifted in five places nobody’s tracking. By June, the budget is a historical artifact.",
      "The problem isn’t budgeting. The problem is budgets that nobody uses. A budget you don’t reference monthly isn’t a budget — it’s a wish list.",
      "A working budget has three properties. First: it’s built from the bottom up, not the top down. Each department head submits what they need. Aggregate them. Debate them. Approve them. When a department head’s budget is set, it’s their budget — not yours. Ownership matters more than accuracy in the first year.",
      "Second: the variance review happens monthly, not annually. You sit with each department head for ten minutes, look at their line items vs. actuals, and explain any variance over 10 percent. You’d be shocked how many owners skip this. “We’ll look at it at year-end.” By year-end it’s too late to do anything about it.",
      "Third: the budget is connected to the strategic plan. Every budget line maps to either a strategic priority or a fixed cost. If a line doesn’t support the strategy and isn’t a fixed cost, cut it. Budgets that aren’t strategy are just spending categories.",
      "[REAL STORY: a client whose budget process was broken, what they changed, what surfaced that they hadn’t seen before.]",
      "A tactical note on cash. Budget operating expenses in one line, capital expenses in another, tax obligations in another. Mixing them is how cash crises happen. The money that looks like profit in November is the money that should have been set aside for Q1 taxes.",
      "The budget isn’t a forecast. It’s a contract. Made between you and your team, reviewed every month, adjusted when conditions change. Budgets that work are budgets that get used.",
    ],
  },
  {
    slug: "hardest-skill-leaders-never-build",
    tag: "Leadership",
    title: "The hardest skill leaders never build: having the conversation",
    excerpt:
      "Avoidance is the single biggest leadership failure I see. Here's what the tough conversation actually looks like — and how to have it.",
    date: "2026-01-23",
    readingTime: "6 min read",
    content: [
      "In thirty years of advising owners, I can count on one hand the ones who said they were good at hard conversations. Everyone else avoids them. They talk around them. They let things fester. They have the conversation in their head fifty times and never in the room.",
      "Avoidance is the single biggest leadership failure I see. It’s worse than bad decisions. A bad decision you can correct. Avoided conversations just rot the business from the inside.",
      "The most avoided conversations in a family business, in order: the family member who isn’t performing. The long-tenured employee who used to be an A-player and now is a C-player. The business partner whose judgment you’ve stopped trusting. The customer who’s draining resources and needs to go.",
      "Every one of those conversations has the same structure. Be specific. Be direct. Be kind. Be quick.",
      "Specific: “I’ve noticed three situations in the last six weeks where the customer was unhappy and you didn’t flag it to me until later.” Not “I’m worried about how you’re handling customers.” Specifics give them something to respond to. Generalities give them something to argue about.",
      "Direct: say the thing. “I can’t keep going the way this has been going.” Not “I’m just wondering if we should think about…” Direct doesn’t mean harsh. It means the other person knows what you actually mean.",
      "Kind: remember the whole person, not just the problem. “I know you care about this job. I care about you being in it. That’s why I’m telling you this now instead of waiting.” Kindness costs nothing and changes everything.",
      "Quick: don’t let the conversation take an hour. State it, let them respond, agree on next steps, end it. Dragging it out makes it worse for both of you.",
      "[REAL STORY: a specific tough conversation you had or helped a client have — what was avoided before it, what changed after.]",
      "The conversations you don’t have are the ones shaping your business. The ones you do have are the ones building it. There is no third option.",
    ],
  },
  {
    slug: "you-dont-need-to-know-everything",
    tag: "Ownership",
    title: "You don't need to know everything (and never did)",
    excerpt:
      "The founder trap: feeling like you have to be the smartest person in every room. Here's why that belief is holding your business back.",
    date: "2026-01-16",
    readingTime: "5 min read",
    content: [
      "Here’s a belief I run into in every family business: the owner needs to know everything. They feel it when they hire someone — “I should understand what they’re doing well enough to check their work.” They feel it when a problem comes up — “I should have seen this.” They feel it when the business is running fine without them — “am I even necessary?”",
      "It’s a trap. The businesses I’ve seen stall have owners who believe they have to be the smartest person in the room. The ones that scale have owners who figured out they don’t.",
      "The reasoning behind the trap: I built this. I understand it. If I don’t know what’s happening, things will go wrong. The problem is, as the business grows, there’s more happening than any one human can know. Trying to keep up turns the owner into a bottleneck. Nothing gets decided without them. Everything waits for them. The business moves at the speed of the owner’s inbox.",
      "What changes when you drop the belief: you hire people smarter than you in their domain. You let them make calls without checking with you. You measure their output, not their methods. You focus on the handful of things only you can do — the vision, the big decisions, the relationships — and let the rest go.",
      "The transition is harder than it sounds. It requires you to be comfortable not knowing. A good CFO will do things with the books you don’t fully understand. A good GM will run operations in ways you wouldn’t have. That’s not a problem. That’s the goal.",
      "[REAL STORY: a specific moment where letting go of needing to know was the unlock — a hire, a decision, a delegation that changed the business.]",
      "A practical test. List three things you currently weigh in on that, if you didn’t, the business would probably run fine. Stop weighing in on them for 60 days. See what happens. Most owners discover the business runs fine. Some discover the business runs better.",
      "Your job is not to know the most. It’s to build a business that knows what it’s doing without you. The second one outlasts you. The first one can’t.",
    ],
  },
  {
    slug: "ill-just-teach-them-what-i-know",
    tag: "Leadership",
    title: "Why “I’ll just teach them what I know” isn’t training",
    excerpt:
      "Most owners default to teaching people themselves. That caps the business at what one person knows. The shift: invest in people so they have skills you don't.",
    date: "2026-01-09",
    readingTime: "5 min read",
    content: [
      "Ask most family business owners about training and you’ll hear a version of this: “I’ll just teach them what I know.” It sounds efficient. It feels like control. And it’s the reason their business has a ceiling they can’t see.",
      "The math is simple. If everyone in your company is trained by you, your business is capped at your knowledge. Your blind spots become their blind spots. Your out-of-date practices become their practices. Your ceiling becomes their ceiling. The business never gets smarter than you.",
      "This is a weird thing for an owner to hear, because it feels like a compliment to say “I’ll train them myself.” It’s actually a limitation. The best-trained teams in any business have been trained by dozens of sources — books, courses, mentors outside the company, conferences, industry certifications, direct experience with other leaders. No one of them is you.",
      "The shift in mindset: invest in your people so they have skills you don’t. Not so they have your skills. Sounds different? It is different. If your controller is no better at controlling than you are, you didn’t hire a controller — you hired an assistant. If your GM is no better at operations than you are, you didn’t hire a GM — you hired a delegate.",
      "Practical investment: every key employee should have a training budget in the annual plan. Not an afterthought. A line item. $2,000 to $10,000 per person per year depending on role. Books, courses, conferences, professional memberships. Not “if we can afford it.” Every year. Budgeted in.",
      "The other half: time to use it. Training budgets that don’t come with time to actually take the training are theater. Block time. Two days a year minimum for a key employee to do structured learning outside the office. Pay them while they do it. Ask them to come back and teach one thing they learned to the team.",
      "[REAL STORY: a client who shifted from “I’ll teach them” to structured external training, what changed — or an employee who grew past their role because the investment was made.]",
      "The return is quiet but compounding. People you invest in stay longer. They bring ideas you wouldn’t have had. They catch things you’d miss. They build bench strength so you can take a vacation without the business slowing down. And when the next generation takes over, there’s a team in place that knows how to keep growing the business past what any one person — even the founder — knew how to do.",
      "The business grows to the size of the team’s skills, not the owner’s. Invest in the team, and the business grows. Don’t, and you’ll spend the rest of your career hitting the same ceiling.",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
