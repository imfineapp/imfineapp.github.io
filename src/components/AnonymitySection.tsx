
import { Lock, Globe, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AnonymitySection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">{t('anonymity.title.line1')}</span>
            <br />
            {t('anonymity.title.line2')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('anonymity.cards.clientSide.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('anonymity.cards.clientSide.text')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('anonymity.cards.web3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('anonymity.cards.web3.text')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('anonymity.cards.anonymous.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('anonymity.cards.anonymous.text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('anonymity.badge.title')}</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">{t('anonymity.badge.rows.personalData.label')}</span>
                <span className="text-primary font-semibold">{t('anonymity.badge.rows.personalData.value')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">{t('anonymity.badge.rows.answers.label')}</span>
                <span className="text-primary font-semibold">{t('anonymity.badge.rows.answers.value')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">{t('anonymity.badge.rows.session.label')}</span>
                <span className="text-primary font-semibold">{t('anonymity.badge.rows.session.value')}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">{t('anonymity.badge.rows.security.label')}</span>
                <span className="text-primary font-semibold">{t('anonymity.badge.rows.security.value')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
