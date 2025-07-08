
import { ArrowRight, Search, FileText, Award } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us how you feel",
      description: "Simple check-in: choose your current state from several options",
      Icon: Search
    },
    {
      number: "02", 
      title: "Get a card on the topic",
      description: "60-second exercise: breathing, reflection or cognitive technique",
      Icon: FileText
    },
    {
      number: "03",
      title: "Complete and get support",
      description: "Badge for completion, option to continue or try more",
      Icon: Award
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="section-subtitle">
            Three simple steps to better well-being
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-6">
                <div className="mb-4">
                  <step.Icon className="w-16 h-16 mx-auto text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{step.number}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-8 text-primary">
                  <ArrowRight className="w-full h-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
