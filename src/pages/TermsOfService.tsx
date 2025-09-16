import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-lg shadow-xl p-8 border border-border">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              {t('terms.backToHome')}
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('terms.lastUpdated')}
            </p>
          </div>

          <div className="prose prose-foreground max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.acceptance.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.acceptance.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.serviceDescription.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.serviceDescription.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.serviceDescription.features.selfHelp')}</li>
                <li>{t('terms.serviceDescription.features.anonymity')}</li>
                <li>{t('terms.serviceDescription.features.telegram')}</li>
                <li>{t('terms.serviceDescription.features.scientific')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.userEligibility.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.userEligibility.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.userEligibility.age')}</li>
                <li>{t('terms.userEligibility.legal')}</li>
                <li>{t('terms.userEligibility.telegram')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.userResponsibilities.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.userResponsibilities.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.userResponsibilities.honest')}</li>
                <li>{t('terms.userResponsibilities.legal')}</li>
                <li>{t('terms.userResponsibilities.medical')}</li>
                <li>{t('terms.userResponsibilities.privacy')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.serviceLimitations.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.serviceLimitations.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.serviceLimitations.notTherapy')}</li>
                <li>{t('terms.serviceLimitations.notMedical')}</li>
                <li>{t('terms.serviceLimitations.selfHelp')}</li>
                <li>{t('terms.serviceLimitations.emergency')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.privacyAndData.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.privacyAndData.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.privacyAndData.anonymity')}</li>
                <li>{t('terms.privacyAndData.encryption')}</li>
                <li>{t('terms.privacyAndData.noCollection')}</li>
                <li>{t('terms.privacyAndData.analytics')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.disclaimers.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.disclaimers.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('terms.disclaimers.noWarranty')}</li>
                <li>{t('terms.disclaimers.noGuarantee')}</li>
                <li>{t('terms.disclaimers.emergency')}</li>
                <li>{t('terms.disclaimers.professional')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.limitationOfLiability.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.limitationOfLiability.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.termination.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.termination.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.governingLaw.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.governingLaw.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.contact.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('terms.contact.content')}
              </p>
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
                <p className="text-sm text-primary">
                  <strong>{t('terms.contact.email')}:</strong> legal@menhausen.com
                </p>
                <p className="text-sm text-primary">
                  <strong>{t('terms.contact.telegram')}:</strong> <a href="https://t.me/menhausen_app" className="text-primary hover:text-primary/80 underline">@menhausen_app</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('terms.changes.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('terms.changes.content')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
