import { Link, useLocation } from "wouter";
import { Menu, X, Shield, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "react-i18next";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-primary hover:text-primary/90 transition-colors">
              <Shield className="h-6 w-6 fill-primary/20" />
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
              <a href="tg://resolve?domain=ImFineBot&start=miniapp" target="_blank" rel="noopener noreferrer">
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
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
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
                    <a href="tg://resolve?domain=ImFineBot&start=miniapp" target="_blank" rel="noopener noreferrer">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-primary mb-4">
                <Shield className="h-8 w-8 fill-primary/20" />
                Menhausen
              </Link>
              <p className="text-muted-foreground/70 max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 font-heading">{t('footer.product')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/70">
                <li><Link href="/stress-cards" className="hover:text-primary transition-colors">{t('nav.stress_cards')}</Link></li>
                <li><Link href="/stress-management" className="hover:text-primary transition-colors">{t('nav.methodology')}</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">{t('nav.pricing')}</Link></li>
                <li><a href="tg://resolve?domain=ImFineBot&start=miniapp" className="hover:text-primary transition-colors">Telegram Bot</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 font-heading">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/70">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
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
