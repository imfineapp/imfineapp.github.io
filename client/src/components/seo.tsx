import { useEffect } from "react";
import { useLocation } from "wouter";
import i18n from "@/lib/i18n";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
  author?: string;
}

const SITE_URL = typeof window !== "undefined" ? window.location.origin : "";

function getOrCreateMetaTag(property: string, attribute: "name" | "property" = "property"): HTMLElement {
  const selector = attribute === "property" 
    ? `meta[property='${property}']` 
    : `meta[name='${property}']`;
  
  let meta = document.querySelector(selector) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement("meta");
    if (attribute === "property") {
      meta.setAttribute("property", property);
    } else {
      meta.setAttribute("name", property);
    }
    document.head.appendChild(meta);
  }
  return meta;
}

function getOrCreateLinkTag(rel: string): HTMLLinkElement {
  let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  return link;
}

function removeMetaTags(selector: string) {
  const tags = document.querySelectorAll(selector);
  tags.forEach(tag => tag.remove());
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  image,
  type = "website",
  keywords,
  author
}: SEOProps) {
  const [location] = useLocation();
  const currentLang = i18n.language || "en";
  const availableLangs = ["en", "ru"];

  useEffect(() => {
    const fullTitle = `${title} | Menhausen`;
    document.title = fullTitle;
    
    // Base meta description
    if (description) {
      const metaDescription = getOrCreateMetaTag("description", "name") as HTMLMetaElement;
      metaDescription.setAttribute("content", description);
    }

    // Canonical URL
    const canonicalUrl = canonical || `${SITE_URL}${location}`;
    const linkCanonical = getOrCreateLinkTag("canonical");
    linkCanonical.setAttribute("href", canonicalUrl);

    // Open Graph tags
    const ogTitle = getOrCreateMetaTag("og:title") as HTMLMetaElement;
    ogTitle.setAttribute("content", fullTitle);

    if (description) {
      const ogDescription = getOrCreateMetaTag("og:description") as HTMLMetaElement;
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = getOrCreateMetaTag("og:url") as HTMLMetaElement;
    ogUrl.setAttribute("content", canonicalUrl);

    const ogType = getOrCreateMetaTag("og:type") as HTMLMetaElement;
    ogType.setAttribute("content", type);

    const ogImage = getOrCreateMetaTag("og:image") as HTMLMetaElement;
    const imageUrl = image 
      ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
      : `${SITE_URL}/favicon.png`;
    ogImage.setAttribute("content", imageUrl);

    // Twitter Card tags
    const twitterCard = getOrCreateMetaTag("twitter:card", "name") as HTMLMetaElement;
    twitterCard.setAttribute("content", "summary_large_image");

    const twitterTitle = getOrCreateMetaTag("twitter:title", "name") as HTMLMetaElement;
    twitterTitle.setAttribute("content", fullTitle);

    if (description) {
      const twitterDescription = getOrCreateMetaTag("twitter:description", "name") as HTMLMetaElement;
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = getOrCreateMetaTag("twitter:image", "name") as HTMLMetaElement;
    twitterImage.setAttribute("content", imageUrl);

    // Additional meta tags
    if (keywords) {
      const metaKeywords = getOrCreateMetaTag("keywords", "name") as HTMLMetaElement;
      metaKeywords.setAttribute("content", keywords);
    }

    if (author) {
      const metaAuthor = getOrCreateMetaTag("author", "name") as HTMLMetaElement;
      metaAuthor.setAttribute("content", author);
    }

    // hreflang tags
    // Remove existing hreflang tags (only those we manage)
    const existingHreflang = document.querySelectorAll("link[rel='alternate'][hreflang]");
    existingHreflang.forEach(link => {
      // Only remove if it's one of our managed languages or x-default
      const hreflang = link.getAttribute("hreflang");
      if (hreflang && (availableLangs.includes(hreflang) || hreflang === "x-default")) {
        link.remove();
      }
    });
    
    // Add hreflang for each language
    availableLangs.forEach(lang => {
      const hreflangLink = document.createElement("link");
      hreflangLink.setAttribute("rel", "alternate");
      hreflangLink.setAttribute("hreflang", lang);
      // Build URL with language parameter
      const baseUrl = SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
      const separator = location.includes("?") ? "&" : "?";
      hreflangLink.setAttribute("href", `${baseUrl}${location}${separator}lang=${lang}`);
      document.head.appendChild(hreflangLink);
    });

    // Add x-default hreflang
    const defaultHreflang = document.createElement("link");
    defaultHreflang.setAttribute("rel", "alternate");
    defaultHreflang.setAttribute("hreflang", "x-default");
    defaultHreflang.setAttribute("href", `${SITE_URL}${location}`);
    document.head.appendChild(defaultHreflang);

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup to avoid flickering
      // They will be updated on next render
    };
  }, [title, description, canonical, image, type, keywords, author, location, currentLang]);

  return null;
}
