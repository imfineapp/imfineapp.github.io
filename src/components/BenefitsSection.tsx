
import { Lock, Brain, Dumbbell, Target, Shield, Smartphone } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "No login, no trace",
      description: "Works directly in Telegram. No accounts, no emails",
      Icon: Lock
    },
    {
      title: "Based on evidence-based practices",
      description: "CBT, ACT, MBCT, positive psychology — scientifically proven methods",
      Icon: Brain
    },
    {
      title: "Masculine style and tone",
      description: "No sugarcoating. Direct, honest, to the point. Man to man",
      Icon: Dumbbell
    },
    {
      title: "Badges, progress, hero's journey",
      description: "See your progress, get recognition for every step forward",
      Icon: Target
    },
    {
      title: "Data encryption",
      description: "AES-256, Web3 technologies. Your data is protected at bank level",
      Icon: Shield
    },
    {
      title: "Always with you",
      description: "In your pocket, in Telegram. Help available 24/7, when you need it",
      Icon: Smartphone
    }
  ];

  return (
    <section className="section-padding py-20 md:py-28 bg-gradient-to-b from-transparent to-card/30">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Why <span className="text-gradient">Menhousen</span>
          </h2>
          <p className="section-subtitle">
            Created specifically for men who value privacy and results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-pain group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
