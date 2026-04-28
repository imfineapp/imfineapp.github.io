import Layout from "@/components/layout";
import { getTechnique, techniques } from "@/lib/techniques-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  const langs = ['en', 'ru'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const technique of techniques) {
      params.push({ lang, slug: technique.slug });
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
  const technique = getTechnique(slug);

  if (!technique) {
    return { title: "Technique Not Found" };
  }

  return {
    title: `${technique.name} Technique | Menhausen`,
    description: technique.description,
  };
}

const categoryColors = {
  cbt: "text-blue-400",
  act: "text-green-400",
  mindfulness: "text-purple-400",
};

export default async function TechniqueDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const technique = getTechnique(slug);

  if (!technique) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#111111] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white">Technique not found</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <span
            className={`text-sm uppercase tracking-wide ${
              categoryColors[technique.category]
            }`}
          >
            {technique.category}
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-6">
            {technique.name}
          </h1>

          <p className="text-xl text-[#A1A1A1] mb-8">
            {technique.description}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
            <ul className="space-y-2">
              {technique.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E1FF00]">✓</span>
                  <span className="text-[#A1A1A1]">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <ol className="space-y-4">
              {technique.howItWorks.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#E1FF00] text-black rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[#A1A1A1] pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions to Ask Yourself
            </h2>
            <div className="space-y-3">
              {technique.questions.map((q, i) => (
                <div key={i} className="card-base">
                  <p className="text-[#A1A1A1]">"{q}"</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 p-8 bg-[#1C1C1C] rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Practice This Technique Now
            </h3>
            <p className="text-[#A1A1A1] mb-6">
              Get step-by-step guidance via Telegram.
            </p>
            <a
              href={`https://t.me/menhausen_app_bot/app?start=${technique.slug}`}
              className="btn-primary"
            >
              Start Practice
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
