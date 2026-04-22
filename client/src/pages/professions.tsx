import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Briefcase, Code, Rocket, Users, Globe, Heart, Shield, Wrench } from "lucide-react";

type IconType = React.ReactElement<any>;

const professionIcons: Record<string, IconType> = {
  "software-developer": <Code className="w-8 h-8" />,
  "entrepreneur": <Rocket className="w-8 h-8" />,
  "executive": <Users className="w-8 h-8" />,
  "remote-worker": <Globe className="w-8 h-8" />,
  "sales-professional": <Briefcase className="w-8 h-8" />,
  "healthcare-professional": <Heart className="w-8 h-8" />,
  "freelancer": <Shield className="w-8 h-8" />,
  "tradesperson": <Wrench className="w-8 h-8" />
};

const professionKeys = [
  "software_developer", "entrepreneur", "executive", 
  "remote_worker", "sales_professional", "healthcare_professional",
  "freelancer", "tradesperson"
];

export default function Professions() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('professions.seo_title')}
        description={t('professions.seo_description')}
        canonical="/professions"
      />

      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('professions.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {t('professions.hero.description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('professions.hero.cta')}
            </TelegramCTA>
          </div>
        </div>
      </section>

      {/* Professions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionKeys.map((key, index) => {
              const name = t(`professions_data.${key}.name`);
              const description = t(`professions_data.${key}.description`);
              const stressFactors = (t(`professions_data.${key}.stress_factors`, { returnObjects: true }) as string[]) || [];
              const slug = key.replace(/_/g, "-");
              
              return (
                <Link key={index} href={`/professions/${slug}`}>
                  <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        {professionIcons[slug] || <Briefcase className="w-8 h-8" />}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {name}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stressFactors.slice(0, 2).map((factor, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-secondary/50 rounded-full text-muted-foreground">
                          {factor}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary font-bold text-sm">
                      <span>{t('professions.learn_stress_management')}</span>
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
              {t('professions.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('professions.cta.description')}
            </p>
            <TelegramCTA size="lg">
              {t('professions.cta.button')}
            </TelegramCTA>
          </div>
        </div>
      </section>
    </Layout>
  );
}