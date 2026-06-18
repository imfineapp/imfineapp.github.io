import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StructuredData } from "@/components/structured-data";

export interface FaqItem {
  question: string;
  answer: string;
}

interface PageFaqProps {
  title: string;
  items: FaqItem[];
}

export function PageFaq({ title, items }: PageFaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 border-t border-border">
      <StructuredData type="faq" data={{ faqItems: items }} />
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-heading">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
