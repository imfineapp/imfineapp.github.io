
export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Сначала это казалось странным. А потом помогло.",
      author: "Алексей, 34 года",
      role: "IT-менеджер"
    },
    {
      text: "Я просто начал делать одну карточку в день. И стало проще.",
      author: "Михаил, 28 лет", 
      role: "Предприниматель"
    },
    {
      text: "Мне не нужно было ничего говорить. Это как будто кто-то дал мне голос.",
      author: "Дмитрий, 41 год",
      role: "Госслужащий"
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Что говорят <span className="text-gradient">пользователи</span>
          </h2>
          <p className="section-subtitle">
            Реальные отзывы мужчин, которые сделали первый шаг
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-pain">
              <div className="mb-6">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-lg leading-relaxed italic">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
