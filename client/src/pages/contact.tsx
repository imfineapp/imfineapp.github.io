import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { PageFaq } from "@/components/page-faq";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFaqFromI18n } from "@/lib/faq";

export default function Contact() {
  const { t } = useTranslation();
  const faqItems = getFaqFromI18n(t, "contact.faq");

  return (
    <Layout>
      <SEO 
        title={t('contact.title')} 
        description={t('contact.seo_description')}
        canonical="/contact"
      />
      
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="typography-h1 mb-6">{t('contact.title')}</h1>
          <p className="typography-body text-muted-foreground text-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("contact.page_intro")}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg mb-2">{t('contact.email')}</h2>
            <a href="mailto:support@menhausen.com" className="text-primary hover:underline mb-4 font-sans">
              support@menhausen.com
            </a>
            <p className="text-sm text-muted-foreground font-sans">
              {t('contact.response_time')}
            </p>
          </div>

          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg mb-2">{t('contact.telegram')}</h2>
            <a href="https://t.me/MenhausenSupport" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mb-4 font-sans">
              @MenhausenSupport
            </a>
            <Button variant="outline" size="sm" asChild className="mt-auto">
              <a href="https://t.me/MenhausenSupport" target="_blank" rel="noopener noreferrer">
                {t('contact.chat_now')}
              </a>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg mb-2">{t('contact.office')}</h2>
            <p className="text-muted-foreground font-sans">
              {t('contact.office_address')}
            </p>
          </div>
        </div>

        <PageFaq title={t("contact.faq_title")} items={faqItems} />
      </div>
    </Layout>
  );
}
