import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { Button } from "@/components/ui/button";
import { Link, useRoute, Redirect } from "wouter";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog-data";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Redirect to="/blog" />;
  }

  const imageUrl = typeof post.image === "string" 
    ? post.image 
    : (post.image as any)?.src || "/favicon.png";
  
  return (
    <Layout>
      <SEO 
        title={post.title} 
        description={post.description}
        canonical={`/blog/${post.slug}`}
        image={imageUrl}
        type="article"
        keywords={`${post.category}, men's mental health, stress management, ${post.title}`}
      />
      <StructuredData type="article" data={{ article: post }} />
      <StructuredData 
        type="breadcrumb" 
        data={{ 
          breadcrumbs: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` }
          ] 
        }} 
      />
      
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
            <span>•</span>
            <span className="text-primary font-medium">{post.category}</span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={typeof post.image === "string" ? post.image : (post.image as any)?.src || post.image} 
              alt={post.title} 
              className="w-full h-auto" 
            />
          </div>

          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {post.content}
          </div>
        </div>
      </article>
    </Layout>
  );
}
