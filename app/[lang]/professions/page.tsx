import Layout from "@/components/layout";
import { professions } from "@/lib/professions-data";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Stress Management for Professionals | Menhausen",
  description: "Stress management techniques tailored for executives, entrepreneurs, healthcare workers, and other busy professionals.",
};

export default function ProfessionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Stress Management by Profession
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            Tailored stress management techniques for your specific profession.
            Practical solutions that fit into busy schedules.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professions.map((profession) => (
              <Link
                key={profession.slug}
                href={`/en/professions/${profession.slug}`}
                className="card-base hover:border-[#E1FF00] transition-colors"
              >
                <h3 className="font-bold text-white text-lg mb-2">
                  {profession.name}
                </h3>
                <p className="text-[#A1A1A1] text-sm mb-4 line-clamp-2">
                  {profession.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {profession.techniques.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#252525] text-[#A1A1A1] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-16 bg-[#1C1C1C] rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Personalized Stress Management
            </h2>
            <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
              Tell us your profession and get tailored stress relief techniques.
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
