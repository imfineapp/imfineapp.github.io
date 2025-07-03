
import { Check } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Без логина, без следа",
      description: "Работает прямо в Telegram. Никаких аккаунтов, никаких email'ов",
      icon: "🔒"
    },
    {
      title: "Основано на доказательных практиках",
      description: "КПТ, АСТ, МВСТ, позитивная психология — научно обоснованные методы",
      icon: "🧠"
    },
    {
      title: "Мужской стиль и тон",
      description: "Без сюсюканья. Прямо, честно, по делу. Как мужчина с мужчиной",
      icon: "💪"
    },
    {
      title: "Бейджи, прогресс, путь героя",
      description: "Видишь свой прогресс, получаешь признание за каждый шаг вперёд",
      icon: "🎯"
    },
    {
      title: "Шифрование данных",
      description: "AES-256, Web3 технологии. Твои данные защищены на уровне банков",
      icon: "🛡️"
    },
    {
      title: "Всегда с тобой",
      description: "В кармане, в Telegram. Помощь доступна 24/7, когда она нужна",
      icon: "📱"
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24 bg-card/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Почему <span className="text-gradient">I'm fine</span>
          </h2>
          <p className="section-subtitle">
            Создан специально для мужчин, которые ценят конфиденциальность и результат
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-pain">
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
