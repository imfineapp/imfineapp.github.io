import { useTranslation } from "react-i18next";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{ text: string; author: string; role: string }>;

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('testimonials.title')}
          </h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
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
