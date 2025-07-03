
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/imfine_app_bot', '_blank');
  };

  return (
    <header className="section-padding py-4 md:py-6 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">I</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">I'm fine</h1>
            <p className="text-xs text-muted-foreground">Я в порядке</p>
          </div>
        </div>
        
        <Button 
          onClick={handleTelegramStart}
          className="btn-primary"
        >
          Начать в Telegram
        </Button>
      </div>
    </header>
  );
};
