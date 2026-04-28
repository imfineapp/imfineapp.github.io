import Layout from "@/components/layout";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Terms of Service | Menhausen",
  description: "Read our terms of service. Menhausen provides stress management tools for informational purposes.",
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance</h2>
              <p className="text-[#A1A1A1]">
                By using Menhausen, you agree to these terms. If you don't agree,
                please don't use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Nature of Service
              </h2>
              <p className="text-[#A1A1A1] mb-4">
                Menhausen provides stress management tools for informational purposes:
              </p>
              <ul className="list-disc list-inside text-[#A1A1A1] space-y-2">
                <li>Not a replacement for professional medical advice</li>
                <li>Not a substitute for therapy or counseling</li>
                <li>Techniques are based on CBT & ACT but not a treatment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-[#A1A1A1]">
                The information provided through Menhausen is for general informational
                purposes only. We make no warranties about the completeness or effectiveness
                of the techniques. Consult a healthcare professional for medical advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-[#A1A1A1]">
                Questions about these terms? Contact us at{" "}
                <a href="mailto:legal@menhausen.com" className="text-[#E1FF00]">
                  legal@menhausen.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
