
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AnonymitySection } from "@/components/AnonymitySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Menhousen — You don't have to cope alone" />
      <meta itemProp="description" content="Anonymous digital self-help tool for men. 60-second CBT-based cards in Telegram." />
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AnonymitySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
