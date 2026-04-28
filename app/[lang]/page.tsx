import Layout from "@/components/layout";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Menhausen - Anonymous Stress Management for Men",
  description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
};

export default async function HomePage() {

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111]">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#E1FF00]">Anonymous</span> Stress Management
            <br />for Men
          </h1>
          <p className="text-xl text-[#A1A1A1] max-w-2xl mx-auto mb-8">
            Practical stress cards using CBT & ACT techniques. No registration, 100% anonymous, via Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Start Free
            </a>
            <a href="/en/stress-cards" className="btn-secondary">
              View Cards
            </a>
          </div>
        </section>

        <section className="bg-[#1C1C1C] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Menhausen?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-container text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  100% Anonymous
                </h3>
                <p className="text-[#A1A1A1]">
                  No account, no email, no data collection. Your stress
                  management journey stays private.
                </p>
              </div>
              <div className="card-container text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  3-7 Minutes
                </h3>
                <p className="text-[#A1A1A1]">
                  Quick, practical sessions that fit into busy schedules. No
                  long meditation required.
                </p>
              </div>
              <div className="card-container text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  CBT & ACT Based
                </h3>
                <p className="text-[#A1A1A1]">
                  Evidence-based techniques that actually work, not generic
                  meditation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Start Managing Stress Today
          </h2>
          <p className="text-[#A1A1A1] text-center mb-8">
            Free to start. No registration required.
          </p>
          <div className="flex justify-center">
            <a
              href="https://t.me/menhausen_app_bot/app"
              className="btn-primary"
            >
              Open in Telegram
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
