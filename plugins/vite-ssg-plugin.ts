import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  type?: string;
  additionalSchemas?: string[];
}

const brandName = "Menhausen";
const siteUrl = "https://menhausen.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const routeMetaMap: Record<string, SeoMeta> = {
  "/": {
    title: "Menhausen - Anonymous Stress Management for Men",
    description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
    canonical: "https://menhausen.com/",
    type: "website",
    additionalSchemas: ["organization", "product"],
  },
  "/stress-cards": {
    title: "Free Stress Cards for Men | Menhausen",
    description: "Browse evidence-based stress cards using CBT & ACT techniques. Cognitive reframing, somatic anchoring & more. Get your daily card via Telegram.",
    canonical: "https://menhausen.com/stress-cards",
    type: "website",
    additionalSchemas: ["product"],
  },
  "/stress-management": {
    title: "Stress Management for Men | Menhausen",
    description: "Practical stress management techniques built for men. CBT & ACT methods that actually work. Start managing stress in under 5 minutes.",
    canonical: "https://menhausen.com/stress-management",
    type: "website",
  },
  "/stress-test": {
    title: "Stress Level Test for Men | Menhausen",
    description: "Take our free stress assessment and get personalized stress management recommendations based on CBT principles.",
    canonical: "https://menhausen.com/stress-test",
    type: "website",
  },
  "/blog": {
    title: "Stress Management Blog | Menhausen",
    description: "Expert insights on stress, burnout, and anxiety for men. Evidence-based techniques, practical advice, and actionable strategies.",
    canonical: "https://menhausen.com/blog",
    type: "website",
  },
  "/pricing": {
    title: "Pricing - Menhausen",
    description: "Free forever plan available. Premium: $4.99/month for advanced stress modules, unlimited history, and audio guides. No registration required.",
    canonical: "https://menhausen.com/pricing",
    type: "website",
    additionalSchemas: ["product"],
  },
  "/techniques": {
    title: "Stress Relief Techniques for Men | Menhausen",
    description: "6 evidence-based stress relief techniques: cognitive reframing, somatic anchoring, values clarification, and more. Practical methods that work.",
    canonical: "https://menhausen.com/techniques",
    type: "website",
  },
  "/compare": {
    title: "Menhausen vs Other Stress Relief Methods",
    description: "See how Menhausen compares to meditation apps, therapy, and other stress management approaches. Built specifically for men.",
    canonical: "https://menhausen.com/compare",
    type: "website",
  },
  "/professions": {
    title: "Stress Management for Professionals | Menhausen",
    description: "Stress management techniques tailored for executives, entrepreneurs, healthcare workers, and other busy professionals.",
    canonical: "https://menhausen.com/professions",
    type: "website",
  },
  "/privacy": {
    title: "Privacy Policy | Menhausen",
    description: "Menhausen is 100% anonymous. We don't collect personal data. Your stress management journey stays private with AES-256 encryption.",
    canonical: "https://menhausen.com/privacy",
    type: "website",
  },
  "/terms": {
    title: "Terms of Service | Menhausen",
    description: "Read our terms of service. Menhausen provides stress management tools for informational purposes.",
    canonical: "https://menhausen.com/terms",
    type: "website",
  },
  "/contact": {
    title: "Contact Us | Menhausen",
    description: "Get in touch with the Menhausen team. We're here to help with any questions about stress management.",
    canonical: "https://menhausen.com/contact",
    type: "website",
  },
  "/blog/stress-management-techniques": {
    title: "12 Evidence-Based Stress Management Techniques for Men | Menhausen",
    description: "Discover 12 practical stress management techniques backed by CBT and ACT. Simple exercises that take 3-7 minutes and fit into busy schedules.",
    canonical: "https://menhausen.com/blog/stress-management-techniques",
    type: "article",
  },
  "/blog/burnout-signs-men": {
    title: "Burnout Signs in Men: 6 Warning Flags | Menhausen",
    description: "Learn to recognize burnout symptoms specific to men. Includes actionable recovery strategies and prevention tips based on psychological research.",
    canonical: "https://menhausen.com/blog/burnout-signs-men",
    type: "article",
  },
  "/blog/anxiety-vs-stress": {
    title: "Anxiety vs Stress: What's the Difference? | Menhausen",
    description: "Understanding the key differences between anxiety and stress, and how to address each effectively using CBT and ACT techniques.",
    canonical: "https://menhausen.com/blog/anxiety-vs-stress",
    type: "article",
  },

  // Dynamic technique routes
  "/techniques/cognitive-reframing": {
    title: "Cognitive Reframing Technique | Menhausen",
    description: "Learn cognitive reframing - a CBT technique to change negative thought patterns and manage stress effectively.",
    canonical: "https://menhausen.com/techniques/cognitive-reframing",
    type: "article",
  },
  "/techniques/somatic-anchoring": {
    title: "Somatic Anchoring Technique | Menhausen",
    description: "Master somatic anchoring - a mindfulness technique to ground yourself and reduce stress through body awareness.",
    canonical: "https://menhausen.com/techniques/somatic-anchoring",
    type: "article",
  },
  "/techniques/values-clarification": {
    title: "Values Clarification Technique | Menhausen",
    description: "Discover your core values with this ACT technique to align your actions with what truly matters.",
    canonical: "https://menhausen.com/techniques/values-clarification",
    type: "article",
  },
  "/techniques/behavioral-activation": {
    title: "Behavioral Activation Technique | Menhausen",
    description: "Use behavioral activation to overcome avoidance and reduce stress through purposeful action.",
    canonical: "https://menhausen.com/techniques/behavioral-activation",
    type: "article",
  },
  "/techniques/acceptance-practice": {
    title: "Acceptance Practice Technique | Menhausen",
    description: "Learn acceptance practice - an ACT technique to acknowledge difficult emotions without fighting them.",
    canonical: "https://menhausen.com/techniques/acceptance-practice",
    type: "article",
  },
  "/techniques/defusion-technique": {
    title: "Defusion Technique | Menhausen",
    description: "Master cognitive defusion to distance yourself from negative thoughts and reduce their impact.",
    canonical: "https://menhausen.com/techniques/defusion-technique",
    type: "article",
  },

  // Dynamic comparison routes
  "/compare/calm": {
    title: "Menhausen vs Calm - Stress Management Comparison",
    description: "Compare Menhausen with Calm. See why Menhausen is the better choice for men seeking practical, anonymous stress management.",
    canonical: "https://menhausen.com/compare/calm",
    type: "website",
  },
  "/compare/betterhelp": {
    title: "Menhausen vs BetterHelp - Stress Management Comparison",
    description: "Compare Menhausen with BetterHelp. Discover the differences between app-based therapy and practical stress cards.",
    canonical: "https://menhausen.com/compare/betterhelp",
    type: "website",
  },
  "/compare/headspace": {
    title: "Menhausen vs Headspace - Stress Management Comparison",
    description: "Compare Menhausen with Headspace. See how our practical CBT/ACT approach differs from meditation apps.",
    canonical: "https://menhausen.com/compare/headspace",
    type: "website",
  },
  "/compare/waking-up": {
    title: "Menhausen vs Waking Up - Stress Management Comparison",
    description: "Compare Menhausen with Waking Up. Learn which stress management approach works better for busy men.",
    canonical: "https://menhausen.com/compare/waking-up",
    type: "website",
  },
  "/compare/noom": {
    title: "Menhausen vs Noom - Stress Management Comparison",
    description: "Compare Menhausen with Noom. See why Menhausen is specifically designed for stress management, not weight loss.",
    canonical: "https://menhausen.com/compare/noom",
    type: "website",
  },

  // Dynamic profession routes
  "/professions/software-developer": {
    title: "Stress Management for Software Developers | Menhausen",
    description: "Practical stress management techniques specifically for software developers dealing with deadline pressure and code challenges.",
    canonical: "https://menhausen.com/professions/software-developer",
    type: "website",
  },
  "/professions/entrepreneur": {
    title: "Stress Management for Entrepreneurs | Menhausen",
    description: "Stress management strategies for entrepreneurs handling business pressure, uncertainty, and work-life balance.",
    canonical: "https://menhausen.com/professions/entrepreneur",
    type: "website",
  },
  "/professions/executive": {
    title: "Stress Management for Executives | Menhausen",
    description: "Effective stress management techniques for executives and business leaders managing teams and organizations.",
    canonical: "https://menhausen.com/professions/executive",
    type: "website",
  },
  "/professions/remote-worker": {
    title: "Stress Management for Remote Workers | Menhausen",
    description: "Stress management tips for remote workers dealing with isolation, work-life boundaries, and digital fatigue.",
    canonical: "https://menhausen.com/professions/remote-worker",
    type: "website",
  },
  "/professions/sales-professional": {
    title: "Stress Management for Sales Professionals | Menhausen",
    description: "Stress management techniques for sales professionals handling rejection, targets, and client pressure.",
    canonical: "https://menhausen.com/professions/sales-professional",
    type: "website",
  },
  "/professions/healthcare-professional": {
    title: "Stress Management for Healthcare Professionals | Menhausen",
    description: "Stress management for doctors, nurses, and healthcare workers dealing with high-stakes environments.",
    canonical: "https://menhausen.com/professions/healthcare-professional",
    type: "website",
  },
  "/professions/freelancer": {
    title: "Stress Management for Freelancers | Menhausen",
    description: "Stress management strategies for freelancers navigating irregular income and client management.",
    canonical: "https://menhausen.com/professions/freelancer",
    type: "website",
  },
  "/professions/tradesperson": {
    title: "Stress Management for Tradespeople | Menhausen",
    description: "Practical stress management for tradespeople dealing with physical demands and job site pressures.",
    canonical: "https://menhausen.com/professions/tradesperson",
    type: "website",
  },
};

function generateOgTags(meta: SeoMeta): string {
  const imageUrl = `${siteUrl}/favicon.ico`;
  const escapedTitle = escapeHtml(meta.title);
  const escapedDescription = escapeHtml(meta.description);
  return `
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDescription}" />
    <meta property="og:url" content="${escapeHtml(meta.canonical)}" />
    <meta property="og:type" content="${escapeHtml(meta.type || "website")}" />
    <meta property="og:site_name" content="${escapeHtml(brandName)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDescription}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <link rel="canonical" href="${escapeHtml(meta.canonical)}" />`;
}

function generateProductSchema(): string {
  return `"@type": "Product",
  "name": "${escapeHtml(brandName)}",
  "description": "Anonymous stress management app for men using CBT & ACT techniques",
  "brand": {
    "@type": "Brand",
    "name": "${escapeHtml(brandName)}"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Free plan available"
  },
  "category": "Health & Wellness"`;
}

function generateJsonLd(meta: SeoMeta): string {
  const schemas: string[] = [];

  if (meta.type === "article") {
    schemas.push(`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${escapeHtml(meta.title)}",
  "description": "${escapeHtml(meta.description)}",
  "url": "${escapeHtml(meta.canonical)}",
  "publisher": {
    "@type": "Organization",
    "name": "${escapeHtml(brandName)}",
    "url": "${escapeHtml(siteUrl)}"
  }
}`);
  }

  if (meta.type === "website" || !meta.type) {
    schemas.push(`{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "${escapeHtml(brandName)}",
  "url": "${escapeHtml(siteUrl)}",
  "description": "${escapeHtml(meta.description)}"
}`);
  }

  if (meta.additionalSchemas?.includes("product")) {
    schemas.push(`{
  "@context": "https://schema.org",
  ${generateProductSchema()}
}`);
  }

  if (meta.additionalSchemas?.includes("organization")) {
    schemas.push(`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${escapeHtml(brandName)}",
  "url": "${escapeHtml(siteUrl)}",
  "logo": "${escapeHtml(siteUrl)}/favicon.ico",
  "description": "Anonymous stress management for men. Practical stress cards, CBT & ACT techniques.",
  "sameAs": ["https://t.me/menhausen_app_bot"]
}`);
  }

  if (schemas.length === 1) {
    return `<script type="application/ld+json">\n${schemas[0]}\n</script>`;
  }

  return `<script type="application/ld+json">
{
  "@graph": [
    ${schemas.map(s => s.trim()).join(",\n    ")}
  ]
}
</script>`;
}

function injectSeoIntoHtml(html: string, meta: SeoMeta): string {
  let modified = html;

  modified = modified.replace(
    /<title>.*?<\/title>/i,
    `<title>${meta.title}</title>`
  );

  modified = modified.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  modified = modified.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:image:width"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+property="og:image:height"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+name="twitter:card"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi,
    ""
  );
  modified = modified.replace(
    /<script\s+type="application\/ld\+json".*?<\/script>/gs,
    ""
  );

  const ogTags = generateOgTags(meta);
  const jsonLd = generateJsonLd(meta);

  const headCloseIndex = modified.indexOf("</head>");
  if (headCloseIndex !== -1) {
    modified = modified.slice(0, headCloseIndex) + ogTags + jsonLd + modified.slice(headCloseIndex);
  }

  return modified;
}

function generateRoutes(): { path: string; outputPath: string }[] {
  const routes: { path: string; outputPath: string }[] = [];

  for (const urlPath of Object.keys(routeMetaMap)) {
    if (urlPath === "/") {
      routes.push({ path: urlPath, outputPath: "index.html" });
    } else {
      const segments = urlPath.split("/").filter(Boolean);
      routes.push({
        path: urlPath,
        outputPath: `${segments.join("/")}/index.html`,
      });
    }
  }

  return routes;
}

export function ssgPlugin(): Plugin {
  const routes = generateRoutes();

  return {
    name: "vite-ssg-plugin",
    apply: "build",

    async writeBundle(options, bundle) {
      if (!options.dir) {
        console.warn("[vite-ssg-plugin] No output directory configured");
        return;
      }

      const outputDir = path.resolve(options.dir);

      for (const route of routes) {
        const templatePath = path.join(outputDir, "index.html");

        if (!fs.existsSync(templatePath)) {
          console.warn(`[vite-ssg-plugin] Template not found at ${templatePath}`);
          continue;
        }

        const template = fs.readFileSync(templatePath, "utf-8");
        const meta = routeMetaMap[route.path];

        if (!meta) {
          console.warn(`[vite-ssg-plugin] No meta found for ${route.path}`);
          continue;
        }

        const seoHtml = injectSeoIntoHtml(template, meta);
        const routeOutputPath = path.join(outputDir, route.outputPath);
        const routeDir = path.dirname(routeOutputPath);

        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }

        fs.writeFileSync(routeOutputPath, seoHtml);
        console.log(`[vite-ssg-plugin] Generated: ${route.outputPath}`);
      }

      console.log(`[vite-ssg-plugin] Successfully generated ${routes.length} pages with SEO`);
    },
  };
}
