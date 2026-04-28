import Layout from "@/components/layout";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Free Stress Cards for Men | Menhausen",
  description: "Browse evidence-based stress cards using CBT & ACT techniques. Cognitive reframing, somatic anchoring & more. Get your daily card via Telegram.",
};

const stressTopics = [
  { id: "anxiety", name: "Anxiety", icon: "😰", count: 12 },
  { id: "stress", name: "Stress", icon: "💼", count: 15 },
  { id: "anger", name: "Anger", icon: "😤", count: 8 },
  { id: "burnout", name: "Burnout", icon: "🔥", count: 10 },
  { id: "relationships", name: "Relationships", icon: "💔", count: 6 },
  { id: "self-esteem", name: "Self-Esteem", icon: "💪", count: 9 },
  { id: "sleep", name: "Sleep", icon: "😴", count: 7 },
  { id: "productivity", name: "Productivity", icon: "⚡", count: 11 },
];

const techniques = [
  { name: "Cognitive Reframing", category: "CBT", description: "Change negative thought patterns" },
  { name: "Somatic Anchoring", category: "Mindfulness", description: "Ground yourself in the present" },
  { name: "Values Clarification", category: "ACT", description: "Align with what matters most" },
];

export default function StressCardsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Free Stress Cards for Men
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            Practical stress management cards using CBT & ACT techniques.
            No registration, 100% anonymous, via Telegram.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {stressTopics.map((topic) => (
              <div
                key={topic.id}
                className="card-base cursor-pointer text-center"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <h3 className="font-bold text-white mb-1">{topic.name}</h3>
                <p className="text-sm text-[#A1A1A1]">{topic.count} cards</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-container text-center">
                <div className="text-3xl mb-4">1️⃣</div>
                <h3 className="font-bold text-white mb-2">Choose a Topic</h3>
                <p className="text-[#A1A1A1]">
                  Select from 8 stress categories affecting men
                </p>
              </div>
              <div className="card-container text-center">
                <div className="text-3xl mb-4">2️⃣</div>
                <h3 className="font-bold text-white mb-2">Get Your Card</h3>
                <p className="text-[#A1A1A1]">
                  Receive a practical technique in 3-7 minutes
                </p>
              </div>
              <div className="card-container text-center">
                <div className="text-3xl mb-4">3️⃣</div>
                <h3 className="font-bold text-white mb-2">Practice Daily</h3>
                <p className="text-[#A1A1A1]">
                  Build resilience with consistent practice
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Techniques Included
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {techniques.map((tech) => (
                <div key={tech.name} className="card-container">
                  <span className="text-xs text-[#E1FF00] uppercase tracking-wide">
                    {tech.category}
                  </span>
                  <h3 className="font-bold text-white mt-2 mb-2">{tech.name}</h3>
                  <p className="text-sm text-[#A1A1A1]">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-[#1C1C1C] rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
              Free to use. No registration. 100% anonymous.
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
