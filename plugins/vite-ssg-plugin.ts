import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

interface RouteConfig {
  path: string;
  template: string;
  outputPath: string;
}

interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  type?: string;
}

const routeMetaMap: Record<string, SeoMeta> = {
  "/": {
    title: "Menhausen - Anonymous Stress Management for Men",
    description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
    canonical: "https://menhausen.com/",
    type: "website",
  },
  "/stress-cards": {
    title: "Free Stress Cards for Men | Menhausen",
    description: "Browse evidence-based stress cards using CBT & ACT techniques. Cognitive reframing, somatic anchoring & more. Get your daily card via Telegram.",
    canonical: "https://menhausen.com/stress-cards",
    type: "website",
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
};

const brandName = "Menhausen";
const siteUrl = "https://menhausen.com";

function generateOgTags(meta: SeoMeta): string {
  const imageUrl = `${siteUrl}/favicon.ico`;
  return `
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:type" content="${meta.type || "website"}" />
    <meta property="og:site_name" content="${brandName}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="canonical" href="${meta.canonical}" />`;
}

function generateJsonLd(meta: SeoMeta): string {
  if (meta.type === "article") {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${meta.title}",
  "description": "${meta.description}",
  "url": "${meta.canonical}",
  "publisher": {
    "@type": "Organization",
    "name": "${brandName}",
    "url": "${siteUrl}"
  }
}
</script>`;
  }
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "${brandName}",
  "url": "${siteUrl}",
  "description": "${meta.description}"
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

function pathToOutputDir(urlPath: string): string {
  if (urlPath === "/" || urlPath === "") return "/";
  const segments = urlPath.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (segments.length === 1) return `/${segments[0]}/`;
  return `/${segments.slice(0, -1).join("/")}/`;
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
