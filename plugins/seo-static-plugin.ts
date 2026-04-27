import type { Plugin } from "vite";
import type { RouteMeta, RouteMeta as IRouterMeta } from "./seo-routes";

interface SeoRoutesModule {
  routeMeta: Record<string, RouteMeta>;
  blogPostMeta: Record<string, RouteMeta>;
  getRouteMeta: (path: string) => RouteMeta;
  siteUrl: string;
  brandName: string;
}

interface PageMeta extends RouteMeta {
  path: string;
}

function generateOgTags(meta: RouteMeta, siteUrl: string, brandName: string): string {
  const fullTitle = meta.title.includes(brandName) ? meta.title : `${meta.title} | ${brandName}`;
  const canonicalUrl = `${siteUrl}${meta.canonical || ""}`;
  const imageUrl = meta.image ? (meta.image.startsWith("http") ? meta.image : `${siteUrl}${meta.image}`) : `${siteUrl}/favicon.ico`;

  return `
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${meta.type || "website"}" />
    <meta property="og:site_name" content="${brandName}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="canonical" href="${canonicalUrl}" />`;
}

function generateJsonLd(meta: RouteMeta, path: string, siteUrl: string, brandName: string): string {
  const canonicalUrl = `${siteUrl}${meta.canonical || path}`;

  if (meta.type === "article") {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${meta.title}",
  "description": "${meta.description}",
  "url": "${canonicalUrl}",
  "publisher": {
    "@type": "Organization",
    "name": "${brandName}",
    "url": "${siteUrl}"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${canonicalUrl}"
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
  "description": "${meta.description}",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "${siteUrl}/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>`;
}

export function seoStaticPlugin(): Plugin {
  return {
    name: "seo-static-inject",
    enforce: "post",

    async transformIndexHtml(html: string, ctx?: { path?: string }) {
      const pagePath = ctx?.path || "/";

      try {
        const seoRoutes = await import("./client/src/lib/seo-routes") as SeoRoutesModule;
        const meta = seoRoutes.getRouteMeta(pagePath);
        const { siteUrl, brandName } = seoRoutes;

        const ogTags = generateOgTags(meta, siteUrl, brandName);
        const jsonLd = generateJsonLd(meta, pagePath, siteUrl, brandName);

        const titleTag = `<title>${meta.title.includes(brandName) ? meta.title : `${meta.title} | ${brandName}`}</title>`;
        const descTag = `<meta name="description" content="${meta.description}" />`;

        let modifiedHtml = html;

        if (modifiedHtml.includes("<title>")) {
          modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/i, titleTag);
        } else {
          modifiedHtml = modifiedHtml.replace("<head>", `<head>\n    ${titleTag}`);
        }

        if (modifiedHtml.includes('name="description"')) {
          modifiedHtml = modifiedHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, descTag);
        } else if (modifiedHtml.includes("</title>")) {
          modifiedHtml = modifiedHtml.replace("</title>", `</title>\n    ${descTag}`);
        }

        const headEnd = modifiedHtml.indexOf("</head>");
        if (headEnd !== -1) {
          modifiedHtml =
            modifiedHtml.slice(0, headEnd) +
            ogTags +
            jsonLd +
            modifiedHtml.slice(headEnd);
        }

        return modifiedHtml;
      } catch (error) {
        console.warn(`[seo-static-inject] Failed to inject SEO for ${pagePath}:`, error);
        return html;
      }
    },
  };
}

export function collectPageMeta(routes: PageMeta[]): Record<string, RouteMeta> {
  const result: Record<string, RouteMeta> = {};

  for (const route of routes) {
    result[route.path] = {
      title: route.title,
      description: route.description,
      type: route.type,
      canonical: route.canonical || route.path,
      image: route.image,
    };
  }

  return result;
}
