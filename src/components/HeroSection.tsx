
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <section className="section-padding py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container-max text-center relative">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" itemScope itemProp="headline">
            {t('hero.title')}
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed" itemScope itemProp="description">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleTelegramStart}
              size="lg"
              className="btn-primary text-xl px-12 py-6 glow-effect"
              aria-label={t('hero.startButton')}
            >
              {t('hero.startButton')}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-lg text-muted-foreground font-medium">
              {t('hero.features')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
