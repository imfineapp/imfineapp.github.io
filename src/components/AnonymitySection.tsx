
export const AnonymitySection = () => {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Мы не знаем, кто ты.</span>
            <br />
            И это твоя сила.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Шифрование на клиенте</h3>
                  <p className="text-muted-foreground">
                    Твои ответы зашифрованы на твоём устройстве. Мы их не видим. Никогда.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web3 и TON</h3>
                  <p className="text-muted-foreground">
                    Поддержка TON-кошелька. Можешь войти без Telegram ID.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Полная анонимность</h3>
                  <p className="text-muted-foreground">
                    Никаких логинов, паролей, email'ов. Только ты и твой путь к себе.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">AES-256 Шифрование</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Личные данные</span>
                <span className="text-primary font-semibold">Зашифрованы</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Ответы на вопросы</span>
                <span className="text-primary font-semibold">Локально</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">История сессий</span>
                <span className="text-primary font-semibold">Анонимно</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Уровень защиты</span>
                <span className="text-primary font-semibold">Банковский</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
