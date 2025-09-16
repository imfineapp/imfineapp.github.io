
import { Frown, Flame, CircleDot, Angry } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PainSection = () => {
  const { t } = useTranslation();
  
  const icons = {
    "Anxiety": Frown,
    "Burnout": Flame,
    "Emptiness": CircleDot,
    "Anger": Angry
  };

  return (
    <section className="section-padding py-20 md:py-28 bg-gradient-to-b from-card/30 to-transparent">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t('pain.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t('pain.items', { returnObjects: true }).map((pain, index) => {
            const Icon = icons[pain.title as keyof typeof icons] || Frown;
            return (
              <div key={index} className="card-pain text-center group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 mx-auto text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{pain.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  "{pain.description}"
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            {t('pain.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};
