
export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "At first it seemed weird. But then it helped.",
      author: "Alex, 34 years old",
      role: "IT Manager"
    },
    {
      text: "I just started doing one card a day. And it became easier.",
      author: "Michael, 28 years old", 
      role: "Entrepreneur"
    },
    {
      text: "I didn't need to say anything. It's like someone gave me a voice.",
      author: "David, 41 years old",
      role: "Civil Servant"
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What <span className="text-gradient">users say</span>
          </h2>
          <p className="section-subtitle">
            Real reviews from men who took the first step
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
