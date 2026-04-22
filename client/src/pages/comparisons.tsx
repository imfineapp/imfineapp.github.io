import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";

const comparisonKeys = ["calm", "betterhelp", "headspace", "waking_up", "noom"];

export default function Comparisons() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('comparisons.seo_title')}
        description={t('comparisons.seo_description')}
        canonical="/compare"
      />

      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('comparisons.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {t('comparisons.hero.description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('comparisons.hero.cta')}
            </TelegramCTA>
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisonKeys.map((key, index) => {
              const name = t(`comparisons_data.${key}.name`);
              const tagline = t(`comparisons_data.${key}.tagline`);
              const pricing = t(`comparisons_data.${key}.pricing`);
              const keyDifferences = (t(`comparisons_data.${key}.keyDifferences`, { returnObjects: true }) as string[]) || [];
              const slug = key.replace(/_/g, "-");
              
              return (
                <Link key={index} href={`/compare/${slug}`}>
                  <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {name}
                    </h2>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {tagline}
                    </p>
                    
                    <div className="p-3 bg-secondary/50 rounded-lg mb-6">
                      <span className="text-sm font-medium">{pricing}</span>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-6">
                      {keyDifferences[0]}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold">
                      <span>{t('comparisons.see_comparison')}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Menhausen Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('comparisons.why.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('comparisons.why.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                t('comparisons.why.feature1'),
                t('comparisons.why.feature2'),
                t('comparisons.why.feature3'),
                t('comparisons.why.feature4')
              ].map((feature, i) => (
                <div key={i} className="flex items-center p-4 bg-background rounded-xl">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}