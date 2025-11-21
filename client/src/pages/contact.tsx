import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('contact.title')} 
        description="Contact Menhausen support team. We are here to help with any questions about our anonymous stress management app."
        canonical="/contact"
        keywords="contact, support, help, men's mental health support"
      />
      
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="typography-h1 mb-6">{t('contact.title')}</h1>
          <p className="typography-body text-muted-foreground text-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{t('contact.email')}</h3>
            <a href="mailto:support@menhausen.com" className="text-primary hover:underline mb-4 font-sans">
              support@menhausen.com
            </a>
            <p className="text-sm text-muted-foreground font-sans">
              {t('contact.response_time')}
            </p>
          </div>

          {/* Telegram */}
          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{t('contact.telegram')}</h3>
            <a href="https://t.me/MenhausenSupport" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mb-4 font-sans">
              @MenhausenSupport
            </a>
            <Button variant="outline" size="sm" asChild className="mt-auto">
              <a href="https://t.me/MenhausenSupport" target="_blank" rel="noopener noreferrer">
                Chat now
              </a>
            </Button>
          </div>

          {/* Office */}
          <div className="bg-card p-8 rounded-[16px] border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{t('contact.office')}</h3>
            <p className="text-muted-foreground font-sans">
              {t('contact.office_address')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
