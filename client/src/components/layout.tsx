import { Link, useLocation } from "wouter";
import { Menu, X, ExternalLink, Send, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "react-i18next";
import { AnchorIcon } from "@/components/anchor-icon";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const isProgrammaticNavigation = useRef(false);
  const previousLocation = useRef(location);

  // Включаем нативное восстановление прокрутки браузера
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto';
    }
  }, []);

  // Отслеживаем popstate события (навигация назад/вперед)
  useEffect(() => {
    const handlePopState = () => {
      isProgrammaticNavigation.current = false;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Прокрутка страницы вверх только при программной навигации
  useEffect(() => {
    // Пропускаем прокрутку при первой загрузке или если навигация была через браузер
    if (previousLocation.current === location) {
      return;
    }

    // Прокручиваем вверх только при программной навигации
    if (isProgrammaticNavigation.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    previousLocation.current = location;
    // Сбрасываем флаг после обработки
    isProgrammaticNavigation.current = false;
  }, [location]);

  // Обработчик кликов на ссылках для отслеживания программной навигации
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.href && !link.target && !link.hasAttribute('download')) {
        const url = new URL(link.href);
        // Проверяем, что это внутренняя ссылка
        if (url.origin === window.location.origin) {
          isProgrammaticNavigation.current = true;
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, []);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/stress-cards", label: t('nav.stress_cards') },
    { href: "/stress-management", label: t('nav.methodology') },
    { href: "/stress-test", label: t('nav.stress_test') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/pricing", label: t('nav.pricing') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-white hover:text-white/90 transition-colors">
              <AnchorIcon className="h-6 w-6" />
              Menhausen
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="default" size="default" className="rounded-[12px] px-6 shadow-[0_0_20px_rgba(225,255,0,0.15)]" asChild>
              <a href="https://t.me/menhausen_app_bot/app" target="_blank" rel="noopener noreferrer">
                {t('nav.open_telegram')}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full bg-primary text-black hover:bg-[#D1EF00]" asChild>
                    <a href="https://t.me/menhausen_app_bot/app" target="_blank" rel="noopener noreferrer">
                      {t('nav.open_app')}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 text-muted-foreground border-t border-border">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-white mb-4">
                <AnchorIcon className="h-8 w-8" />
                Menhausen
              </Link>
              <p className="text-muted-foreground/70 max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 font-heading">{t('footer.product')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/70">
                <li><Link href="/stress-cards" className="block py-1 hover:text-primary transition-colors">{t('nav.stress_cards')}</Link></li>
                <li><Link href="/stress-management" className="block py-1 hover:text-primary transition-colors">{t('nav.methodology')}</Link></li>
                <li><Link href="/pricing" className="block py-1 hover:text-primary transition-colors">{t('nav.pricing')}</Link></li>
                <li><a href="https://t.me/menhausen_app_bot/app" className="block py-1 hover:text-primary transition-colors">{t('footer.telegram_bot')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 font-heading">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/70">
                <li><Link href="/privacy" className="block py-1 hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link href="/terms" className="block py-1 hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
                <li><Link href="/contact" className="block py-1 hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 font-heading">{t('footer.social')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/70">
                <li>
                  <a
                    href="https://t.me/menhausen_app_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 hover:text-primary transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    {t('footer.telegram_channel')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/menhausen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    {t('footer.linkedin')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/MenhausenApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    {t('footer.x')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground/50">
            <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
