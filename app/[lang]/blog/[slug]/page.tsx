import Layout from "@/components/layout";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  const langs = ['en', 'ru'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const post of posts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#111111] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white">Post not found</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <span className="text-[#E1FF00] text-sm uppercase tracking-wide">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-white mt-4 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#666666]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="aspect-video bg-[#1C1C1C] rounded-xl mb-8 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#A1A1A1] mb-8">
              {post.excerpt}
            </p>
            <p className="text-[#A1A1A1]">
              Full article content coming soon. For now, try our stress management
              techniques via Telegram.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#1C1C1C] rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Want Daily Stress Cards?
            </h3>
            <p className="text-[#A1A1A1] mb-6">
              Get practical stress management delivered to your Telegram.
            </p>
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Try Free
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
