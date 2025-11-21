import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to show animation
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transform transition-transform duration-500 ease-out",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base text-foreground font-sans">
            {t('cookie_consent.message')}
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="ghost" size="sm" onClick={decline} className="text-muted-foreground hover:text-foreground">
            {t('cookie_consent.decline')}
          </Button>
          <Button size="default" onClick={accept} className="bg-primary text-black hover:bg-primary/90 px-8">
            {t('cookie_consent.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
}
