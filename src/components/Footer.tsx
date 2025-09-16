
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <footer className="section-padding py-16 md:py-24 border-t border-border" itemScope itemType="https://schema.org/Organization">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
            <img 
              src="/Menhausen_logo.svg" 
              alt="Menhausen logo" 
              className="w-32 h-auto"
              itemProp="logo"
            />
            </div>
            <p className="text-muted-foreground" itemProp="description">
              {t('hero.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.product')}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.howItWorks')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.features')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.faq')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.termsOfService')}</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.cookiePolicy')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.startNow')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('footer.startNowDescription')}
            </p>
            <Button 
              onClick={handleTelegramStart}
              className="btn-primary glow-effect"
            >
              {t('footer.startButton')}
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://t.me/menhausen_app" className="text-muted-foreground hover:text-primary transition-colors" itemProp="sameAs">
              <span className="sr-only">Telegram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
