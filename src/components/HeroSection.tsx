
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <section className="section-padding py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="container-max text-center relative">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            You don't have{" "}
            <span className="text-primary text-glow">to cope</span>{" "}
            alone
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Anonymous digital self-help tool for men. 
            60-second cards based on scientific methods. 
            Right in Telegram, no registration required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleTelegramStart}
              size="lg"
              className="btn-primary text-xl px-12 py-6 glow-effect"
            >
              Start in Telegram
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-lg text-muted-foreground font-medium">
              Free • Anonymous • No registration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
