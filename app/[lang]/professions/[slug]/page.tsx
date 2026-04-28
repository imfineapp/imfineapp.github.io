import Layout from "@/components/layout";
import { getProfession, professions } from "@/lib/professions-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  const langs = ['en', 'ru'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const profession of professions) {
      params.push({ lang, slug: profession.slug });
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
  const profession = getProfession(slug);

  if (!profession) {
    return { title: "Profession Not Found" };
  }

  return {
    title: `Stress Management for ${profession.name} | Menhausen`,
    description: profession.description,
  };
}

export default async function ProfessionDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { slug } = await params;
  const profession = getProfession(slug);

  if (!profession) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#111111] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white">Profession not found</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Stress Management for {profession.name}
          </h1>
          <p className="text-xl text-[#A1A1A1] mb-8">
            {profession.description}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Common Stress Factors
            </h2>
            <ul className="space-y-2">
              {profession.stressFactors.map((factor, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E1FF00]">•</span>
                  <span className="text-[#A1A1A1]">{factor}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
            <ul className="space-y-2">
              {profession.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E1FF00]">•</span>
                  <span className="text-[#A1A1A1]">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Recommended Techniques
            </h2>
            <div className="grid gap-3">
              {profession.techniques.map((tech, i) => (
                <div key={i} className="card-base">
                  <p className="text-[#A1A1A1]">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Practical Tips</h2>
            <ul className="space-y-2">
              {profession.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E1FF00]">✓</span>
                  <span className="text-[#A1A1A1]">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 p-8 bg-[#1C1C1C] rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Get Personalized Stress Support
            </h3>
            <p className="text-[#A1A1A1] mb-6">
              Start with free stress cards tailored to your needs.
            </p>
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Try Free
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
