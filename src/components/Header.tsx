
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <header className="section-padding py-6 md:py-8 sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <img 
              src="/lovable-uploads/a88e0857-3b52-41f1-b9d1-d49365e4ed35.png" 
              alt="Menhousen logo" 
              className="w-32 h-auto"
            />
          </div>
        </div>
        
        <Button 
          onClick={handleTelegramStart}
          className="btn-primary glow-effect"
        >
          Start in Telegram
        </Button>
      </div>
    </header>
  );
};
