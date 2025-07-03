
export const PainSection = () => {
  const pains = [
    {
      title: "Тревога",
      description: "Мне тяжело, но я не могу об этом говорить",
      emoji: "😰"
    },
    {
      title: "Выгорание", 
      description: "Я не справляюсь, но не хочу выглядеть слабым",
      emoji: "🔥"
    },
    {
      title: "Пустота",
      description: "У меня нет сил, я не знаю, что со мной",
      emoji: "🕳️"
    },
    {
      title: "Злость",
      description: "Я злюсь на всё, и это мешает мне дома и на работе",
      emoji: "😠"
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24 bg-card/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Ты держишься?{" "}
            <span className="text-gradient">Всегда?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pains.map((pain, index) => (
            <div key={index} className="card-pain text-center">
              <div className="text-4xl mb-4">{pain.emoji}</div>
              <h3 className="text-xl font-semibold mb-3">{pain.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{pain.description}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl md:text-2xl font-medium">
            Это не слабость. Это сигнал.{" "}
            <span className="text-primary">Это — повод нажать кнопку.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
