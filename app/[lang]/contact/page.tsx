import Layout from "@/components/layout";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: "Contact Us | Menhausen",
  description: "Get in touch with the Menhausen team. We're here to help with any questions about stress management.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-[#A1A1A1] text-center max-w-2xl mx-auto mb-12">
            Have questions about Menhausen? We're here to help.
          </p>

          <div className="card-container max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field w-full"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input-field w-full resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#333333]">
              <h3 className="font-bold text-white mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <p>
                  <span className="text-[#A1A1A1]">Telegram:</span>{" "}
                  <a
                    href="https://t.me/menhausen_app_bot"
                    className="text-[#E1FF00]"
                  >
                    @menhausen_app_bot
                  </a>
                </p>
                <p>
                  <span className="text-[#A1A1A1]">Email:</span>{" "}
                  <a
                    href="mailto:support@menhausen.com"
                    className="text-[#E1FF00]"
                  >
                    support@menhausen.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
