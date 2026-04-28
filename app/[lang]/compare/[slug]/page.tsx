import Layout from "@/components/layout";
import { getComparison, comparisons } from "@/lib/comparisons-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  const langs = ['en', 'ru'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const comparison of comparisons) {
      params.push({ lang, slug: comparison.slug });
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
  const comparison = getComparison(slug);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: `Menhausen vs ${comparison.name} - Stress Management Comparison`,
    description: comparison.tagline,
  };
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#111111] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white">Comparison not found</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">{comparison.logo}</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Menhausen vs {comparison.name}
            </h1>
            <p className="text-xl text-[#A1A1A1]">{comparison.tagline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-container">
              <h2 className="text-xl font-bold text-white mb-4">
                {comparison.name}
              </h2>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">
                  {comparison.pricing}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-2">Pros:</h3>
              <ul className="space-y-2 mb-4">
                {comparison.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-[#A1A1A1] text-sm">{pro}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-white mb-2">Cons:</h3>
              <ul className="space-y-2">
                {comparison.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400">×</span>
                    <span className="text-[#A1A1A1] text-sm">{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-container border-[#E1FF00]">
              <h2 className="text-xl font-bold text-white mb-4">Menhausen</h2>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">Free</span>
                <span className="text-[#A1A1A1]"> (basic plan)</span>
              </div>
              <div className="space-y-2">
                {comparison.keyDifferences.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#E1FF00]">★</span>
                    <span className="text-[#A1A1A1] text-sm">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Best For</h2>
            <div className="flex flex-wrap gap-2">
              {comparison.bestFor.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#252525] text-[#A1A1A1] px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-12 p-8 bg-[#1C1C1C] rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Try Menhausen?
            </h3>
            <p className="text-[#A1A1A1] mb-6">
              Free to start. No registration. 100% anonymous.
            </p>
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
