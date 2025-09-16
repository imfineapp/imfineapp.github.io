import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-lg shadow-xl p-8 border border-border">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              {t('privacy.backToHome')}
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('privacy.lastUpdated')}
            </p>
          </div>

          <div className="prose prose-foreground max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.introduction.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.introduction.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.dataCollection.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('privacy.dataCollection.websiteData')}</li>
                <li>{t('privacy.dataCollection.appData')}</li>
                <li>{t('privacy.dataCollection.analyticsData')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.dataUsage.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.dataUsage.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('privacy.dataUsage.analytics')}</li>
                <li>{t('privacy.dataUsage.improvement')}</li>
                <li>{t('privacy.dataUsage.security')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.dataSharing.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.dataSharing.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('privacy.dataSharing.legal')}</li>
                <li>{t('privacy.dataSharing.business')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.dataSecurity.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.dataSecurity.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('privacy.dataSecurity.encryption')}</li>
                <li>{t('privacy.dataSecurity.access')}</li>
                <li>{t('privacy.dataSecurity.monitoring')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.userRights.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.userRights.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('privacy.userRights.access')}</li>
                <li>{t('privacy.userRights.rectification')}</li>
                <li>{t('privacy.userRights.erasure')}</li>
                <li>{t('privacy.userRights.portability')}</li>
                <li>{t('privacy.userRights.objection')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.cookies.content')}
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  {t('privacy.cookies.necessary.title')}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {t('privacy.cookies.necessary.description')}
                </p>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {t('privacy.cookies.analytics.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.cookies.analytics.description')}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.contact.content')}
              </p>
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
                <p className="text-sm text-primary">
                  <strong>{t('privacy.contact.email')}:</strong> privacy@menhausen.com
                </p>
                <p className="text-sm text-primary">
                  <strong>{t('privacy.contact.telegram')}:</strong> <a href="https://t.me/menhausen_app" className="text-primary hover:text-primary/80 underline">@menhausen_app</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.changes.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('privacy.changes.content')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
