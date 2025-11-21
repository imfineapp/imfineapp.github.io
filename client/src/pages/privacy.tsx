import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('privacy.title')} 
        description="Privacy policy for Menhausen. Learn how we protect your anonymity and handle your data."
        canonical="/privacy"
      />
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-3xl">
        <h1 className="typography-h1 mb-8">{t('privacy.title')}</h1>
        <div className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8 font-sans">
            {t('privacy.intro')}
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('privacy.section1.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('privacy.section1.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('privacy.section2.title')}</h3>
              <p className="text-muted-foreground font-sans mb-4">{t('privacy.section2.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                {(t('privacy.section2.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('privacy.section3.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('privacy.section3.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('privacy.section4.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('privacy.section4.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('privacy.section5.title')}</h3>
              <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-foreground font-sans font-medium">{t('privacy.section5.content')}</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-sans">{t('privacy.last_updated')}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
