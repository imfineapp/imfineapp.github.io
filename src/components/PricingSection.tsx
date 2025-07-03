
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/imfine_bot', '_blank');
  };

  return (
    <section className="section-padding py-16 md:py-24 bg-card/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Начни <span className="text-gradient">бесплатно</span>
          </h2>
          <p className="section-subtitle">
            Базовый доступ всегда бесплатен. Премиум — по желанию
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="card-pain text-center relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Базовый</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                Бесплатно
              </div>
              <p className="text-muted-foreground">Навсегда</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Ежедневный чек-ин</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">3 карточки в день</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Базовые бейджи</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Полная анонимность</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} className="btn-primary w-full">
              Начать бесплатно
            </Button>
          </div>
          
          {/* Premium Plan */}
          <div className="card-pain text-center relative border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                Популярный
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Премиум</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                149 ₽
              </div>
              <p className="text-muted-foreground">в месяц</p>
              <p className="text-xs text-muted-foreground mt-1">или 1499 ₽ в год</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Всё из базового</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Неограниченные карточки</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Микрокурсы</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Расширенная статистика</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Приоритетная поддержка</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} className="btn-primary w-full">
              Попробовать премиум
            </Button>
          </div>
          
          {/* Donation */}
          <div className="card-pain text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Поддержка</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                💎
              </div>
              <p className="text-muted-foreground">По желанию</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Криптодонаты (TON)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Разовые карточки</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Помощь проекту</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Эксклюзивные бейджи</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} variant="outline" className="w-full">
              Поддержать проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
