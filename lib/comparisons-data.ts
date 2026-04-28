export interface Comparison {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  pricing: string;
  pros: string[];
  cons: string[];
  keyDifferences: string[];
  bestFor: string[];
}

export const comparisons: Comparison[] = [
  {
    slug: "calm",
    name: "Calm",
    tagline: "The #1 app for Sleep, Meditation and Relaxation",
    logo: "🧘",
    pricing: "$14.99/month or $69.99/year",
    pros: [
      "Massive library of sleep stories",
      "Celebrity-led meditations",
      "Strong brand recognition",
      "High production quality"
    ],
    cons: [
      "No focus on specific demographics",
      "Generic stress content, not tailored",
      "Requires account creation",
      "Subscription required for full access"
    ],
    keyDifferences: [
      "Menhausen is 100% anonymous (no account needed)",
      "Menhausen targets men's specific stressors",
      "Menhausen uses Telegram (no app download)",
      "Menhausen focuses on actionable CBT/ACT techniques"
    ],
    bestFor: ["General relaxation", "Sleep improvement", "Beginners to meditation"]
  },
  {
    slug: "betterhelp",
    name: "BetterHelp",
    tagline: "Professional therapy, accessible anytime, anywhere",
    logo: "💬",
    pricing: "$60-80/week (billed monthly)",
    pros: [
      "Licensed therapists",
      "Regular video sessions",
      "Prescription services in some states",
      "Structured therapy format"
    ],
    cons: [
      "Requires personal information",
      "Expensive long-term",
      "Not truly anonymous",
      "Scheduling required"
    ],
    keyDifferences: [
      "Menhausen is completely free (basic plan)",
      "Menhausen is anonymous - no therapy talk",
      "Menhausen is instant access - no scheduling",
      "Menhausen uses practical techniques, not talk therapy"
    ],
    bestFor: ["Those seeking traditional therapy", "People comfortable sharing data", "Long-term therapeutic support"]
  },
  {
    slug: "headspace",
    name: "Headspace",
    tagline: "Mindfulness for every moment",
    logo: "🧠",
    pricing: "$12.99/month or $69.99/year",
    pros: [
      "Fun, animated presentations",
      "Strong gamification",
      "Partnerships with employers",
      "Wide content library"
    ],
    cons: [
      "Often feels juvenile",
      "Not tailored to men's needs",
      "Account required",
      "Higher price point for limited features"
    ],
    keyDifferences: [
      "Menhausen targets adult men specifically",
      "Menhausen uses evidence-based CBT/ACT",
      "Menhausen is free to start",
      "Menhausen requires no app download"
    ],
    bestFor: ["Beginners to meditation", "Those who prefer gamified learning", "People who want fun animations"]
  },
  {
    slug: "waking-up",
    name: "Waking Up",
    tagline: "A new way to meditate",
    logo: "🌅",
    pricing: "$12.99/month or $99.99/year",
    pros: [
      "Philosophical depth",
      "No fluff or corporate vibe",
      "Sam Harris's involvement",
      "Thoughtful explanations"
    ],
    cons: [
      "Monthly subscription required",
      "No focus on practical tools",
      "Not tailored to men specifically",
      "Less structured than CBT approaches"
    ],
    keyDifferences: [
      "Menhausen provides actionable techniques",
      "Menhausen focuses on men's specific issues",
      "Menhausen is free (basic)",
      "Menhausen uses structured CBT/ACT methodology"
    ],
    bestFor: ["Philosophically-minded people", "Sam Harris fans", "Those wanting deeper meaning"]
  },
  {
    slug: "noom",
    name: "Noom",
    tagline: "Psychology-backed weight loss",
    logo: "⚖️",
    pricing: "$199/month",
    pros: [
      "Psychology-based approach",
      "Food tracking included",
      "Coaching included",
      "Structured program"
    ],
    cons: [
      "Focused on weight loss, not stress",
      "Very expensive",
      "Requires significant time commitment",
      "Food logging is mandatory"
    ],
    keyDifferences: [
      "Menhausen is free for stress management",
      "Menhausen is specifically for stress, not weight",
      "Menhausen requires no food logging",
      "Menhausen is quick - 3-7 minute sessions"
    ],
    bestFor: ["Those focused on weight loss", "People who want coaching", "Those with significant time to commit"]
  }
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}
