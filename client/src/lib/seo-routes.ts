export interface RouteMeta {
  title: string;
  description: string;
  image?: string;
  type?: string;
  canonical?: string;
}

export const siteUrl = "https://menhausen.com";
export const brandName = "Menhausen";

export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Menhausen - Anonymous Stress Management for Men",
    description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
    type: "website",
  },
  "/stress-cards": {
    title: "Free Stress Cards for Men | Menhausen",
    description: "Browse evidence-based stress cards using CBT & ACT techniques. Cognitive reframing, somatic anchoring & more. Get your daily card via Telegram.",
    type: "website",
    canonical: "/stress-cards",
  },
  "/stress-management": {
    title: "Stress Management for Men | Menhausen",
    description: "Practical stress management techniques built for men. CBT & ACT methods that actually work. Start managing stress in under 5 minutes.",
    type: "website",
    canonical: "/stress-management",
  },
  "/stress-test": {
    title: "Stress Level Test for Men | Menhausen",
    description: "Take our free stress assessment and get personalized stress management recommendations based on CBT principles.",
    type: "website",
    canonical: "/stress-test",
  },
  "/blog": {
    title: "Stress Management Blog | Menhausen",
    description: "Expert insights on stress, burnout, and anxiety for men. Evidence-based techniques, practical advice, and actionable strategies.",
    type: "website",
    canonical: "/blog",
  },
  "/pricing": {
    title: "Pricing - Menhausen",
    description: "Free forever plan available. Premium: $4.99/month for advanced stress modules, unlimited history, and audio guides. No registration required.",
    type: "website",
    canonical: "/pricing",
  },
  "/techniques": {
    title: "Stress Relief Techniques for Men | Menhausen",
    description: "6 evidence-based stress relief techniques: cognitive reframing, somatic anchoring, values clarification, and more. Practical methods that work.",
    type: "website",
    canonical: "/techniques",
  },
  "/compare": {
    title: "Menhausen vs Other Stress Relief Methods",
    description: "See how Menhausen compares to meditation apps, therapy, and other stress management approaches. Built specifically for men.",
    type: "website",
    canonical: "/compare",
  },
  "/professions": {
    title: "Stress Management for Professionals | Menhausen",
    description: "Stress management techniques tailored for executives, entrepreneurs, healthcare workers, and other busy professionals.",
    type: "website",
    canonical: "/professions",
  },
  "/privacy": {
    title: "Privacy Policy | Menhausen",
    description: "Menhausen is 100% anonymous. We don't collect personal data. Your stress management journey stays private with AES-256 encryption.",
    type: "website",
    canonical: "/privacy",
  },
  "/terms": {
    title: "Terms of Service | Menhausen",
    description: "Read our terms of service. Menhausen provides stress management tools for informational purposes.",
    type: "website",
    canonical: "/terms",
  },
  "/contact": {
    title: "Contact Us | Menhausen",
    description: "Get in touch with the Menhausen team. We're here to help with any questions about stress management.",
    type: "website",
    canonical: "/contact",
  },
};

export const blogPostMeta: Record<string, RouteMeta> = {
  "stress-management-techniques": {
    title: "12 Evidence-Based Stress Management Techniques for Men | Menhausen",
    description: "Discover 12 practical stress management techniques backed by CBT and ACT. Simple exercises that take 3-7 minutes and fit into busy schedules.",
    type: "article",
    canonical: "/blog/stress-management-techniques",
  },
  "burnout-signs-men": {
    title: "Burnout Signs in Men: 6 Warning Flags | Menhausen",
    description: "Learn to recognize burnout symptoms specific to men. Includes actionable recovery strategies and prevention tips based on psychological research.",
    type: "article",
    canonical: "/blog/burnout-signs-men",
  },
  "anxiety-vs-stress": {
    title: "Anxiety vs Stress: What's the Difference? | Menhausen",
    description: "Understanding the key differences between anxiety and stress, and how to address each effectively using CBT and ACT techniques.",
    type: "article",
    canonical: "/blog/anxiety-vs-stress",
  },
};

export function getRouteMeta(path: string): RouteMeta {
  const cleanPath = path.replace(/\?.*$/, "").replace(/\/$/, "") || "/";
  const basePath = cleanPath.split("/").slice(0, 3).join("/");

  if (cleanPath.startsWith("/blog/") && basePath !== "/blog") {
    const slug = cleanPath.replace("/blog/", "");
    return blogPostMeta[slug] || routeMeta["/blog"];
  }

  if (cleanPath.startsWith("/techniques/") && basePath !== "/techniques") {
    return {
      title: `${brandName} Technique`,
      description: "Evidence-based stress relief technique using CBT & ACT principles.",
      type: "article",
      canonical: cleanPath,
    };
  }

  if (cleanPath.startsWith("/compare/") && basePath !== "/compare") {
    return {
      title: `${brandName} vs Alternatives`,
      description: "How Menhausen compares to other stress relief methods.",
      type: "website",
      canonical: cleanPath,
    };
  }

  if (cleanPath.startsWith("/professions/") && basePath !== "/professions") {
    return {
      title: `Stress Management for Professionals | ${brandName}`,
      description: "Tailored stress management techniques for your profession.",
      type: "website",
      canonical: cleanPath,
    };
  }

  return routeMeta[cleanPath] || routeMeta["/"];
}
