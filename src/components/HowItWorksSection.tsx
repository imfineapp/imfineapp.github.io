
import { ArrowRight, Search, FileText, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  const icons = {
    "01": Search,
    "02": FileText,
    "03": Award
  };

  return (
    <section className="section-padding py-16 md:py-24" itemScope itemType="https://schema.org/HowTo">
      <meta itemProp="totalTime" content="PT3M" />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title" itemProp="name">
            {t('howItWorks.title')}
          </h2>
          <p className="section-subtitle" itemProp="description">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t('howItWorks.steps', { returnObjects: true }).map((step, index) => {
            const stepNumber = `0${index + 1}`;
            const Icon = icons[stepNumber as keyof typeof icons] || Search;
            
            return (
              <div 
                key={index} 
                className="text-center relative"
                itemScope 
                itemProp="step" 
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                <div className="mb-6">
                  <div className="mb-4">
                    <Icon className="w-16 h-16 mx-auto text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{stepNumber}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4" itemProp="name">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed" itemProp="text">
                  {step.description}
                </p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-8 text-primary">
                    <ArrowRight className="w-full h-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
