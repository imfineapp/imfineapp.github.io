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
  menFocus?: boolean;
  cbtAct?: boolean | "varies";
}

export const comparisons: Comparison[] = [
  {
    slug: "calm",
    name: "Calm",
    tagline: "The #1 app for Sleep, Meditation and Relaxation",
    logo: "🧘",
    pricing: "$14.99/month or $69.99/year",
    menFocus: false,
    cbtAct: "varies",
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
    menFocus: false,
    cbtAct: "varies",
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
    menFocus: false,
    cbtAct: "varies",
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
    menFocus: false,
    cbtAct: "varies",
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
    menFocus: false,
    cbtAct: "varies",
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
  },
  {
    slug: "mental",
    name: "Mental",
    tagline: "The #1 app for men — your mind's personal trainer",
    logo: "🧠",
    pricing: "7-day free trial, then ~$9.99/month or $59.99/year (no permanent free plan)",
    menFocus: true,
    cbtAct: false,
    pros: [
      "Strong press coverage (Forbes, GQ, NBC, Men's Journal, WSJ)",
      "Polished native iOS and Android apps",
      "Action-oriented, masculine tone that resonates with men",
      "24/7 AI coaching with quick 15-minute sessions",
      "Novel 'protocols' (cold shower, push-ups) with celebrity tie-ins"
    ],
    cons: [
      "Requires account creation with email and name",
      "No anonymity — identity is tied to your data",
      "App download required (no Telegram or web-only option)",
      "Content-rich but methodology-light — no CBT/ACT framework",
      "No permanent free tier — credit card required after trial"
    ],
    keyDifferences: [
      "Menhausen is 100% anonymous (no account, no email, no name)",
      "Menhausen runs in Telegram — no app download required",
      "Menhausen uses structured CBT/ACT techniques, not AI chat",
      "Menhausen offers a permanent free plan with 10+ stress cards",
      "Menhausen's sessions are 3–7 minutes, not 15-minute coaching blocks"
    ],
    bestFor: [
      "Men who want a polished, dedicated mobile app",
      "Users who want persistent progress tracking tied to a named profile",
      "Those who prefer audio content (audiobooks, celebrity-led stories)",
      "People who enjoy gamified 'protocols' with celebrity tie-ins",
      "Anyone who values major-media validation (Forbes, GQ, WSJ)"
    ]
  }
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}
