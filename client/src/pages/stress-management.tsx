import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { TelegramCTA } from "@/components/telegram-cta";
import stressImage from "@assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";
import { useTranslation } from "react-i18next";

export default function StressManagement() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <SEO 
        title={t('stress_management.seo_title')} 
        description={t('stress_management.seo_description')}
        canonical="/stress-management"
      />
      
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-secondary">
        <img 
          src={stressImage} 
          alt={t('common.alt_stress_management')} 
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
             <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{t('stress_management.badge')}</span>
             <h1 className="text-4xl md:text-6xl font-bold text-foreground">{t('stress_management.title')}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">{t('stress_management.section1_title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('stress_management.section1_p1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('stress_management.section1_p2')}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{t('stress_management.section2_title')}</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">{t('stress_management.pillar1_title')}</h3>
                <p className="text-muted-foreground">
                  {t('stress_management.pillar1_desc')}
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">{t('stress_management.pillar2_title')}</h3>
                <p className="text-muted-foreground">
                  {t('stress_management.pillar2_desc')}
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">{t('stress_management.pillar3_title')}</h3>
                <p className="text-muted-foreground">
                  {t('stress_management.pillar3_desc')}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">{t('stress_management.section3_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                t('stress_management.technique1'),
                t('stress_management.technique2'),
                t('stress_management.technique3'),
                t('stress_management.technique4'),
                t('stress_management.technique5'),
                t('stress_management.technique6'),
                t('stress_management.technique7'),
                t('stress_management.technique8'),
                t('stress_management.technique9'),
                t('stress_management.technique10')
              ].map((tech, i) => (
                 <div key={i} className="bg-muted/30 p-4 rounded-lg border border-border/50 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <span className="font-medium">{tech}</span>
                 </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl md:sticky md:top-24">
            <h3 className="text-2xl font-bold text-white mb-4">{t('stress_management.sidebar_title')}</h3>
            <p className="text-white/70 mb-6">
              {t('stress_management.sidebar_desc')}
            </p>
            <div className="mb-4">
              <TelegramCTA size="lg" className="w-full">{t('stress_management.sidebar_cta')}</TelegramCTA>
            </div>
            <p className="text-xs text-center text-white/40">{t('stress_management.sidebar_note')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
