
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Это терапия?",
      answer: "Нет. Это научно обоснованная самопомощь. I'm fine — это инструмент для самостоятельной работы с эмоциями, основанный на проверенных психологических методах. Мы не заменяем профессиональную медицинскую помощь."
    },
    {
      question: "Это безопасно?",
      answer: "Да. Шифрование и анонимность встроены в продукт на всех уровнях. Мы используем AES-256 шифрование, не собираем личные данные и не требуем регистрации. Твоя конфиденциальность — наш приоритет."
    },
    {
      question: "Это только для мужчин?",
      answer: "Да, продукт создан с учётом мужской психологии и особенностей. Но мы открыты всем, кто готов быть честным с собой и работать над своим эмоциональным состоянием."
    },
    {
      question: "Как это работает в Telegram?",
      answer: "I'm fine — это Telegram Mini App. Открываешь бота, проходишь простой чек-ин, получаешь карточку-упражнение на 60 секунд. Всё происходит прямо в мессенджере, который у тебя уже есть."
    },
    {
      question: "Сколько времени это занимает?",
      answer: "1-3 минуты в день. Чек-ин занимает 30 секунд, карточка-упражнение — 60 секунд. Можешь делать больше, если хочешь, но и минимум уже даёт результат."
    },
    {
      question: "Что если мне нужна серьёзная помощь?",
      answer: "I'm fine — это поддержка, а не лечение. Если ты чувствуешь, что тебе нужна профессиональная помощь, мы всегда рекомендуем обратиться к психологу или психиатру. Твоё здоровье важнее всего."
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24 bg-card/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Вопросы и <span className="text-gradient">ответы</span>
          </h2>
          <p className="section-subtitle">
            Всё, что нужно знать о I'm fine
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
