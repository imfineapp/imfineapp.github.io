import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title={t('pricing.seo_title')} 
        description={t('pricing.seo_description')}
        canonical="/pricing"
      />
      
      <div className="py-20 container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pricing.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="border border-border rounded-3xl p-8 bg-muted shadow-sm relative overflow-hidden">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.basic_title')}</h3>
              <p className="text-muted-foreground">{t('pricing.basic_desc')}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold">{t('pricing.basic_price')}</span>
              <span className="text-muted-foreground">{t('pricing.basic_period')}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                t('pricing.basic_feature1'),
                t('pricing.basic_feature2'),
                t('pricing.basic_feature3'),
                t('pricing.basic_feature4'),
                t('pricing.basic_feature5')
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full h-12 text-lg" asChild>
              <a href="https://t.me/menhausen_app_bot/app">{t('pricing.basic_cta')}</a>
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="border-2 border-primary rounded-3xl p-8 bg-secondary text-secondary-foreground shadow-2xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              {t('pricing.premium_badge')}
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('pricing.premium_title')}</h3>
              <p className="text-white/70">{t('pricing.premium_desc')}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">{t('pricing.premium_price')}</span>
              <span className="text-white/60">{t('pricing.premium_period')}</span>
            </div>
            <ul className="space-y-4 mb-8 text-white/90">
              {[
                t('pricing.premium_feature1'),
                t('pricing.premium_feature2'),
                t('pricing.premium_feature3'),
                t('pricing.premium_feature4'),
                t('pricing.premium_feature5'),
                t('pricing.premium_feature6')
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full h-12 text-lg shadow-lg shadow-primary/25" asChild>
              <a href="https://t.me/menhausen_app_bot/app">{t('pricing.premium_cta')}</a>
            </Button>
            <p className="text-center text-xs text-white/40 mt-4">{t('pricing.premium_note')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
