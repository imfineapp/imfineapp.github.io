import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import stressImage from "@assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";

export default function StressManagement() {
  return (
    <Layout>
      <SEO 
        title="Stress Management for Men - Techniques & Guide" 
        description="Comprehensive guide to stress management for men. Learn why traditional advice fails and how to use CBT and ACT to regain control."
        canonical="/stress-management"
        keywords="stress management, men's stress, CBT, ACT, stress techniques, male mental health"
      />
      
      <div className="relative h-[400px] w-full overflow-hidden bg-secondary">
        <img 
          src={stressImage} 
          alt="Order from chaos" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
             <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Guide</span>
             <h1 className="text-4xl md:text-6xl font-bold text-foreground">Stress Management for Men</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Why "Just Relax" doesn't work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most stress advice is passive: "take a bath," "breathe deep," "let it go." For many men, especially those in high-performance roles, this advice feels counter-intuitive. You are wired to solve problems, not ignore them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Menhausen approaches stress as a data problem. Your brain is receiving signals (stressors) and processing them through a filter (cognitive bias) that results in an output (anxiety/cortisol). To fix the output, we debug the code.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The 3 Pillars of Male Stress Control</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">1. Cognitive Reappraisal (CBT)</h3>
                <p className="text-muted-foreground">
                  Stress often comes not from the event itself, but your interpretation of it. We use Socratic questioning to challenge catastrophic thinking.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">2. Psychological Flexibility (ACT)</h3>
                <p className="text-muted-foreground">
                  Instead of fighting feelings (which makes them stronger), we teach you to observe them with detachment and continue acting according to your values.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">3. Physiological Regulation</h3>
                <p className="text-muted-foreground">
                  Short, tactical interventions to lower heart rate and cortisol spikes in real-time, using breathwork protocols like Box Breathing or Physiological Sighs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">10 Daily Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Morning: 3-Point Gratitude Audit",
                "Mid-day: 2-minute Physiological Sigh",
                "Meeting Prep: Worst-Case Visualization",
                "Decision Making: The 10-10-10 Rule",
                "Conflict: The 'Pause' Protocol",
                "Deep Work: 90-minute Focus Blocks",
                "Evening: Neural Decompression Walk",
                "Sleep: Cognitive Offloading Journaling",
                "Weekend: Digital Fasting",
                "Monthly: Value Alignment Check"
              ].map((tech, i) => (
                 <div key={i} className="bg-muted/30 p-4 rounded-lg border border-border/50 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <span className="font-medium">{tech}</span>
                 </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-4">Start your practice</h3>
            <p className="text-white/70 mb-6">
              Reading about swimming won't keep you afloat. You need to get in the water.
            </p>
            <Button size="lg" className="w-full mb-4" asChild>
              <a href="tg://resolve?domain=ImFineBot&start=miniapp">Open Stress App</a>
            </Button>
            <p className="text-xs text-center text-white/40">Free, anonymous, instant.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
