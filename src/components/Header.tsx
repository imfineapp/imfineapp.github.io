
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <header className="section-padding py-6 md:py-8 sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center space-x-4" itemScope itemType="https://schema.org/Organization">
          <div>
            <img 
              src="/Menhausen_logo.svg" 
              alt="Menhausen logo" 
              className="w-32 h-auto"
              itemProp="logo"
            />
          </div>
          <meta itemProp="name" content="Menhousen" />
          <meta itemProp="url" content="https://menhausen.com/" />
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            onClick={handleTelegramStart}
            className="btn-primary glow-effect"
          >
            {t('header.startInTelegram')}
          </Button>
        </div>
      </div>
    </header>
  );
};
