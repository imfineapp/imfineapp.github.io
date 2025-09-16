
import { Lock, Brain, Dumbbell, Target, Shield, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BenefitsSection = () => {
  const { t } = useTranslation();
  
  const icons = {
    "No login, no trace": Lock,
    "Based on evidence-based practices": Brain,
    "Masculine style and tone": Dumbbell,
    "Badges, progress, hero's journey": Target,
    "Data encryption": Shield,
    "Always with you": Smartphone
  };

  return (
    <section className="section-padding py-20 md:py-28 bg-gradient-to-b from-transparent to-card/30" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="itemListOrder" content="Unordered" />
      <meta itemProp="numberOfItems" content={t('benefits.items', { returnObjects: true }).length.toString()} />
      
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t('benefits.title')}
          </h2>
          <p className="section-subtitle">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('benefits.items', { returnObjects: true }).map((benefit, index) => {
            const Icon = icons[benefit.title as keyof typeof icons] || Lock;
            
            return (
              <div 
                key={index} 
                className="card-pain group"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary" itemProp="name">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium" itemProp="description">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
