
import { Lock, Globe, User } from 'lucide-react';

export const AnonymitySection = () => {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">We don't know who you are.</span>
            <br />
            And that's your strength.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client-side encryption</h3>
                  <p className="text-muted-foreground">
                    Your answers are encrypted on your device. We don't see them. Ever.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web3 and TON</h3>
                  <p className="text-muted-foreground">
                    TON wallet support. You can log in without Telegram ID.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete anonymity</h3>
                  <p className="text-muted-foreground">
                    No logins, passwords, emails. Just you and your path to yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AES-256 Encryption</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Personal data</span>
                <span className="text-primary font-semibold">Encrypted</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Answers to questions</span>
                <span className="text-primary font-semibold">Local</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Session history</span>
                <span className="text-primary font-semibold">Anonymous</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Security level</span>
                <span className="text-primary font-semibold">Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
