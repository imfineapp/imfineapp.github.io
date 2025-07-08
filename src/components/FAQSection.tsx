
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is this therapy?",
      answer: "No. This is evidence-based self-help. I'm fine is a tool for independent work with emotions, based on proven psychological methods. We do not replace professional medical help."
    },
    {
      question: "Is this safe?",
      answer: "Yes. Encryption and anonymity are built into the product at all levels. We use AES-256 encryption, don't collect personal data and don't require registration. Your privacy is our priority."
    },
    {
      question: "Is this only for men?",
      answer: "Yes, the product is created taking into account male psychology and features. But we are open to everyone who is ready to be honest with themselves and work on their emotional state."
    },
    {
      question: "How does this work in Telegram?",
      answer: "I'm fine is a Telegram Mini App. Open the bot, go through a simple check-in, get a 60-second exercise card. Everything happens right in the messenger you already have."
    },
    {
      question: "How much time does this take?",
      answer: "1-3 minutes a day. Check-in takes 30 seconds, exercise card — 60 seconds. You can do more if you want, but even the minimum gives results."
    },
    {
      question: "What if I need serious help?",
      answer: "I'm fine is support, not treatment. If you feel you need professional help, we always recommend contacting a psychologist or psychiatrist. Your health is more important than anything."
    }
  ];

  return (
    <section className="section-padding py-16 md:py-24 bg-card/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Questions and <span className="text-gradient">answers</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about I'm fine
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
