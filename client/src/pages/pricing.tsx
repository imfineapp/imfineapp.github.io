import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      <SEO 
        title="Pricing - Menhausen" 
        description="Simple, transparent pricing. Start for free. Upgrade for advanced stress management modules."
        canonical="/pricing"
        keywords="pricing, subscription, premium, stress management pricing, men's mental health cost"
      />
      
      <div className="py-20 container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Invest in your peace of mind</h1>
          <p className="text-xl text-muted-foreground">
            Most of Menhausen is free. We charge for advanced, specialized content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="border border-border rounded-3xl p-8 bg-white shadow-sm relative overflow-hidden">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-muted-foreground">Essential daily maintenance.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-muted-foreground">/forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Daily Check-in",
                "Basic Stress Cards (10+)",
                "Progress Tracking",
                "Anonymous Usage",
                "Telegram Access"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full h-12 text-lg" asChild>
              <a href="tg://resolve?domain=ImFineBot&start=miniapp">Start Free</a>
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="border-2 border-primary rounded-3xl p-8 bg-secondary text-secondary-foreground shadow-2xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
              <p className="text-white/70">Deep work and specialized tools.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$4.99</span>
              <span className="text-white/60">/month</span>
            </div>
            <ul className="space-y-4 mb-8 text-white/90">
              {[
                "Everything in Basic",
                "Advanced Modules (Burnout, Anxiety)",
                "Audio Guides",
                "Unlimited History",
                "Priority Support",
                "Early Access to New Features"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full h-12 text-lg shadow-lg shadow-primary/25" asChild>
              <a href="tg://resolve?domain=ImFineBot&start=miniapp">Get Premium</a>
            </Button>
            <p className="text-center text-xs text-white/40 mt-4">Cancel anytime via Telegram.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
