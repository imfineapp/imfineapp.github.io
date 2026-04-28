import Layout from "@/components/layout";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Privacy Policy | Menhausen",
  description: "Menhausen is 100% anonymous. We don't collect personal data. Your stress management journey stays private with AES-256 encryption.",
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Data We Don't Collect
              </h2>
              <p className="text-[#A1A1A1] mb-4">
                Menhausen is designed with privacy as our core principle. We don't collect:
              </p>
              <ul className="list-disc list-inside text-[#A1A1A1] space-y-2">
                <li>Your name or personal information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location data</li>
                <li>Usage analytics</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Telegram Integration
              </h2>
              <p className="text-[#A1A1A1] mb-4">
                We use Telegram as our platform. When you use Menhausen:
              </p>
              <ul className="list-disc list-inside text-[#A1A1A1] space-y-2">
                <li>Telegram handles all message encryption</li>
                <li>Your chat history stays on Telegram's servers</li>
                <li>We only receive anonymous session data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
              <p className="text-[#A1A1A1] mb-4">
                All data transmitted uses AES-256 encryption. Your stress management
                journey remains completely private.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-[#A1A1A1]">
                For privacy concerns, contact us at{" "}
                <a href="mailto:privacy@menhausen.com" className="text-[#E1FF00]">
                  privacy@menhausen.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
