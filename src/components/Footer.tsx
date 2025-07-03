
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/imfine_app_bot', '_blank');
  };

  const handleChannelOpen = () => {
    window.open('https://t.me/imfine_channel', '_blank');
  };

  return (
    <footer className="section-padding py-16 border-t border-border">
      <div className="container-max">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов сделать первый шаг?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Начни прямо сейчас. Бесплатно, анонимно, без обязательств.
          </p>
          <Button 
            onClick={handleTelegramStart}
            size="lg"
            className="btn-primary text-lg px-8 py-4"
          >
            Начать в Telegram
          </Button>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">I'm fine</h3>
                <p className="text-xs text-muted-foreground">Я в порядке</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Анонимный цифровой инструмент самопомощи для мужчин. 
              Научные методы, современные технологии, полная конфиденциальность.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={handleTelegramStart} className="hover:text-primary transition-colors">Начать в Telegram</button></li>
              <li><button onClick={handleChannelOpen} className="hover:text-primary transition-colors">Telegram-канал</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Публичная оферта</a></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="bg-card/50 p-6 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Важно:</strong> I'm fine не является медицинской услугой и не заменяет профессиональную психологическую или психиатрическую помощь. 
              При серьёзных проблемах с ментальным здоровьем обращайтесь к специалистам.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 I'm fine. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <span>Сделано с ❤️ для мужчин</span>
              <span>•</span>
              <span>Работает на TON</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
