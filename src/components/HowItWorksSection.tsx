
import { ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Отвечаешь, как ты себя чувствуешь",
      description: "Простой чек-ин: выбираешь своё состояние из нескольких вариантов",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Получаешь карточку на тему",
      description: "60-секундное упражнение: дыхание, рефлексия или когнитивная техника",
      icon: "📋"
    },
    {
      number: "03",
      title: "Завершаешь — получаешь поддержку",
      description: "Бейдж за выполнение, возможность продолжить или попробовать ещё",
      icon: "🏆"
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Как это <span className="text-gradient">работает</span>
          </h2>
          <p className="section-subtitle">
            Три простых шага к лучшему самочувствию
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-6">
                <div className="text-6xl mb-4">{step.icon}</div>
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
