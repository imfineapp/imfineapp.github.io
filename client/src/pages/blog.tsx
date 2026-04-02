import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getAllBlogPosts } from "@/lib/blog-data";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const posts = getAllBlogPosts();

  return (
    <Layout>
      <SEO 
        title={t('blog.seo_title')} 
        description={t('blog.seo_description')}
        canonical="/blog"
      />
      
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('blog.title')}</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            {t('blog.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="group cursor-pointer h-full flex flex-col">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 bg-muted">
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                   <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider">
                     {post.category}
                   </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-bold text-sm inline-flex items-center">
                    {t('common.read_article')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
