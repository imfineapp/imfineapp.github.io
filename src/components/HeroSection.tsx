
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/imfine_app_bot', '_blank');
  };

  return (
    <section className="section-padding py-16 md:py-24 lg:py-32">
      <div className="container-max text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Ты не обязан{" "}
            <span className="text-gradient">справляться</span>{" "}
            один
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Анонимный цифровой инструмент самопомощи для мужчин. 
            60-секундные карточки на основе научных методов. 
            Прямо в Telegram, без регистрации.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleTelegramStart}
              size="lg"
              className="btn-primary text-lg px-8 py-4"
            >
              Начать в Telegram
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Бесплатно • Анонимно • Без регистрации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
