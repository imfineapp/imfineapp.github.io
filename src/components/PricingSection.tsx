
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
            Start <span className="text-gradient">free</span>
          </h2>
          <p className="section-subtitle">
            Basic access is always free. Premium — by choice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="card-pain text-center relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                Free
              </div>
              <p className="text-muted-foreground">Forever</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Daily check-in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">3 cards per day</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Basic badges</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Full anonymity</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} className="btn-primary w-full">
              Start free
            </Button>
          </div>
          
          {/* Premium Plan */}
          <div className="card-pain text-center relative border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                Popular
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                $4.99
              </div>
              <p className="text-muted-foreground">per month</p>
              <p className="text-xs text-muted-foreground mt-1">or $49.99 per year</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Everything from Basic</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Unlimited cards</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Micro-courses</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Advanced statistics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Priority support</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} className="btn-primary w-full">
              Try Premium
            </Button>
          </div>
          
          {/* Donation */}
          <div className="card-pain text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Support</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                💎
              </div>
              <p className="text-muted-foreground">Optional</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Crypto donations (TON)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">One-time cards</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Help the project</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Exclusive badges</span>
              </li>
            </ul>
            
            <Button onClick={handleTelegramStart} variant="outline" className="w-full">
              Support project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
