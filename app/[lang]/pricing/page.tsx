import Layout from "@/components/layout";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Pricing - Menhausen",
  description: "Free forever plan available. Premium: $4.99/month for advanced stress modules, unlimited history, and audio guides. No registration required.",
};

const features = {
  free: [
    "Access to 10+ basic stress cards",
    "Daily check-in feature",
    "8 stress topics covered",
    "6 evidence-based techniques",
    "Telegram-based (no app download)",
    "100% anonymous",
  ],
  premium: [
    "Everything in Free",
    "Advanced stress modules",
    "Audio guides for techniques",
    "Unlimited history",
    "Personalized daily cards",
    "Priority support",
  ],
};

export default function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            Start free. Upgrade when you need more.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-container">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Free</h2>
                <div className="text-4xl font-bold text-white">$0</div>
                <p className="text-[#A1A1A1]">Forever</p>
              </div>
              <ul className="space-y-3 mb-8">
                {features.free.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#E1FF00]">✓</span>
                    <span className="text-[#A1A1A1]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/menhausen_app_bot/app"
                className="btn-secondary w-full text-center"
              >
                Get Started
              </a>
            </div>

            <div className="card-container border-[#E1FF00] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E1FF00] text-black text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Premium</h2>
                <div className="text-4xl font-bold text-white">$4.99</div>
                <p className="text-[#A1A1A1]">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                {features.premium.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#E1FF00]">✓</span>
                    <span className="text-[#A1A1A1]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/menhausen_app_bot/app?premium"
                className="btn-primary w-full text-center"
              >
                Upgrade Now
              </a>
            </div>
          </div>

          <p className="text-center text-[#666666] text-sm mt-8">
            No registration required. No credit card for free plan.
          </p>
        </div>
      </div>
    </Layout>
  );
}
