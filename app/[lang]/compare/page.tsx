import Layout from "@/components/layout";
import { comparisons } from "@/lib/comparisons-data";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Menhausen vs Other Stress Relief Methods",
  description: "See how Menhausen compares to meditation apps, therapy, and other stress management approaches. Built specifically for men.",
};

export default function ComparePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            How We Compare
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            See how Menhausen stacks up against other stress management solutions.
            We built something different for men.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/en/compare/${comparison.slug}`}
                className="card-base hover:border-[#E1FF00] transition-colors"
              >
                <div className="text-3xl mb-4">{comparison.logo}</div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Menhausen vs {comparison.name}
                </h3>
                <p className="text-[#A1A1A1] text-sm mb-4">
                  {comparison.tagline}
                </p>
                <div className="text-sm text-[#E1FF00]">
                  View comparison →
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-16 bg-[#1C1C1C] rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Menhausen Wins for Men
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
              <div>
                <h3 className="font-bold text-white mb-2">100% Anonymous</h3>
                <p className="text-sm text-[#A1A1A1]">
                  No account, no email, no data collection.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Built for Men</h3>
                <p className="text-sm text-[#A1A1A1]">
                  Practical approach without the "fluff".
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">3-7 Minutes</h3>
                <p className="text-sm text-[#A1A1A1]">
                  Quick sessions that fit busy schedules.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
