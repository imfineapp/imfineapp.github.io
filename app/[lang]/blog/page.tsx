import Layout from "@/components/layout";
import { getAllBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Stress Management Blog | Menhausen",
  description: "Expert insights on stress, burnout, and anxiety for men. Evidence-based techniques, practical advice, and actionable strategies.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Stress Management Blog
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            Expert insights on stress, burnout, and anxiety for men.
            Evidence-based techniques and practical advice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-base overflow-hidden"
              >
                <div className="aspect-video bg-[#252525] mb-4 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-[#E1FF00] uppercase tracking-wide">
                  {post.category}
                </span>
                <h2 className="font-bold text-white text-lg mt-2 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[#A1A1A1] text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#666666]">{post.date}</span>
                  <span className="text-xs text-[#666666]">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 bg-[#1C1C1C] rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want Daily Stress Cards?
            </h2>
            <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
              Get practical stress management techniques delivered to your Telegram daily.
            </p>
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Try Free
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
