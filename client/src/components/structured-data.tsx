import { useEffect } from "react";
import { useLocation } from "wouter";
import { BlogPost } from "@/lib/blog-data";

interface StructuredDataProps {
  type: "organization" | "article" | "faq" | "website" | "breadcrumb";
  data?: {
    article?: BlogPost;
    faqItems?: Array<{ question: string; answer: string }>;
    breadcrumbs?: Array<{ name: string; url: string }>;
  };
}

const SITE_URL = typeof window !== "undefined" ? window.location.origin : "";

export function StructuredData({ type, data }: StructuredDataProps) {
  const [location] = useLocation();

  useEffect(() => {
    let jsonLd: object = {};

    switch (type) {
      case "organization":
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Menhausen",
          "url": SITE_URL,
          "logo": `${SITE_URL}/favicon.png`,
          "description": "Anonymous stress management for men. Practical stress cards, CBT & ACT techniques.",
          "sameAs": []
        };
        break;

      case "article":
        if (data?.article) {
          const article = data.article;
          const imageUrl = typeof article.image === "string" 
            ? article.image 
            : (article.image as any)?.src || `${SITE_URL}/favicon.png`;
          
          jsonLd = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "image": imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`,
            "datePublished": article.date,
            "dateModified": article.date,
            "author": {
              "@type": "Organization",
              "name": "Menhausen"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Menhausen",
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/favicon.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${article.slug}`
            },
            "articleSection": article.category
          };
        }
        break;

      case "faq":
        if (data?.faqItems && data.faqItems.length > 0) {
          jsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          };
        }
        break;

      case "website":
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Menhausen",
          "url": SITE_URL,
          "description": "Anonymous stress management for men. Practical stress cards, CBT & ACT techniques.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${SITE_URL}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };
        break;

      case "breadcrumb":
        if (data?.breadcrumbs && data.breadcrumbs.length > 0) {
          jsonLd = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data.breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url.startsWith("http") ? crumb.url : `${SITE_URL}${crumb.url}`
            }))
          };
        }
        break;
    }

    if (Object.keys(jsonLd).length > 0) {
      const scriptId = `structured-data-${type}`;
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(jsonLd);

      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [type, data, location]);

  return null;
}

