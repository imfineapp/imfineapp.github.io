import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Brain, Heart, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ReactElement> = {
  cbt: <Brain className="w-6 h-6" />,
  act: <Heart className="w-6 h-6" />,
  mindfulness: <Sparkles className="w-6 h-6" />
};

const techniqueKeys = [
  "cognitive_reframing", "somatic_anchoring", "values_clarification",
  "behavioral_activation", "acceptance_practice", "defusion_technique"
];

export default function Techniques() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('techniques.seo_title')}
        description={t('techniques.seo_description')}
        canonical="/techniques"
      />

      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('techniques.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {t('techniques.hero.description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('techniques.hero.cta')}
            </TelegramCTA>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniqueKeys.map((key, index) => {
              const name = t(`techniques_data.${key}.name`);
              const description = t(`techniques_data.${key}.description`);
              const slug = key.replace(/_/g, "-");
              
              return (
                <Link key={index} href={`/techniques/${slug}`}>
                  <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        {categoryIcons.cbt}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {name}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {description}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold">
                      <span>{t('techniques.learn_more')}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('techniques.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('techniques.cta.description')}
            </p>
            <TelegramCTA size="lg">
              {t('techniques.cta.button')}
            </TelegramCTA>
          </div>
        </div>
      </section>
    </Layout>
  );
}