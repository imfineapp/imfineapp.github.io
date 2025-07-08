
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleTelegramStart = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  const handleChannelOpen = () => {
    window.open('https://t.me/menhausen_app', '_blank');
  };

  return (
    <footer className="section-padding py-20 border-t border-border bg-gradient-to-t from-card/20 to-transparent">
      <div className="container-max">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to take the first step?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 font-medium">
            Start right now. Free, anonymous, no commitments.
          </p>
          <Button 
            onClick={handleTelegramStart}
            size="lg"
            className="btn-primary text-xl px-12 py-6 glow-effect"
          >
            Start in Telegram
          </Button>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div>
                <img 
                  src="/lovable-uploads/857b8c8f-110f-4f7b-8d5a-977e09328344.png" 
                  alt="Menhousen logo" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Menhousen</h3>
                <p className="text-sm text-muted-foreground font-medium">Anonymous self-help for men</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md font-medium">
              Anonymous digital self-help tool for men. 
              Scientific methods, modern technology, complete confidentiality.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg text-primary">Product</h4>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li><button onClick={handleTelegramStart} className="hover:text-primary transition-colors">Start in Telegram</button></li>
              <li><button onClick={handleChannelOpen} className="hover:text-primary transition-colors">Telegram channel</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg text-primary">Documents</h4>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of use</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Public offer</a></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-border pt-10">
          <div className="bg-card/50 p-8 rounded-2xl mb-8">
            <p className="text-center font-medium text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Menhousen is not a medical service and does not replace professional psychological or psychiatric help. 
              For serious mental health problems, contact specialists.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-muted-foreground font-medium">
              © 2025 Menhousen. All rights reserved.
            </p>
            <div className="flex space-x-8 text-muted-foreground font-medium">
              <span>Powered by Menhousen Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
