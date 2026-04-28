import Layout from "@/components/layout";
import { techniques } from "@/lib/techniques-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Stress Relief Techniques for Men | Menhausen",
  description: "6 evidence-based stress relief techniques: cognitive reframing, somatic anchoring, values clarification, and more. Practical methods that work.",
};

export default function TechniquesPage() {
  const categoryColors = {
    cbt: "text-blue-400",
    act: "text-green-400",
    mindfulness: "text-purple-400",
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Stress Relief Techniques
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            6 evidence-based stress relief techniques backed by CBT and ACT psychology.
            Practical methods that actually work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <div key={technique.slug} className="card-container">
                <span
                  className={`text-xs uppercase tracking-wide ${
                    categoryColors[technique.category]
                  }`}
                >
                  {technique.category}
                </span>
                <h3 className="font-bold text-white text-xl mt-2 mb-3">
                  {technique.name}
                </h3>
                <p className="text-[#A1A1A1] mb-4">{technique.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Benefits:
                  </h4>
                  <ul className="text-sm text-[#A1A1A1] space-y-1">
                    {technique.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://t.me/menhausen_app_bot/app?start=${technique.slug}`}
                  className="btn-secondary w-full text-center text-sm"
                >
                  Practice Now
                </a>
              </div>
            ))}
          </div>

          <section className="mt-16 bg-[#1C1C1C] rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Try These Techniques?
            </h2>
            <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
              Get your personalized stress card delivered via Telegram. Free and anonymous.
            </p>
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Open in Telegram
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
