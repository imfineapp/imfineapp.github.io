import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('terms.title')} 
        description="Terms of service for Menhausen. Read our terms and conditions for using our stress management app."
        canonical="/terms"
      />
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-3xl">
        <h1 className="typography-h1 mb-8">{t('terms.title')}</h1>
        <div className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8 font-sans">
            {t('terms.intro')}
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('terms.section1.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('terms.section1.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('terms.section2.title')}</h3>
              <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-foreground font-sans font-medium">{t('terms.section2.content')}</p>
              </div>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('terms.section3.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('terms.section3.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('terms.section4.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('terms.section4.content')}</p>
            </section>

            <section>
              <h3 className="font-heading font-bold text-2xl mb-4">{t('terms.section5.title')}</h3>
              <p className="text-muted-foreground font-sans">{t('terms.section5.content')}</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
