import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StressCard } from "@/components/ui/stress-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function StressCards() {
  const cards = [
    {
      id: "STRESS-01",
      title: "The 5-4-3-2-1 Grounding",
      questions: [
        "Name 5 things you can see.",
        "Name 4 things you can feel.",
        "Name 3 things you can hear."
      ],
      recommendation: "Use this immediately when feeling overwhelmed."
    },
    {
      id: "STRESS-04",
      title: "Reframing Negative Thoughts",
      questions: [
        "What specific thought is increasing your stress right now?",
        "Come up with 3 alternative interpretations of this situation."
      ],
      recommendation: "Practice reframing 2 times a week."
    },
    {
      id: "STRESS-07",
      title: "Testing Reality",
      questions: [
        "What small experiment can you run to test if this thought is true?",
        "What results do you expect vs what actually happens?"
      ],
      recommendation: "Run this experiment within 24 hours."
    },
    {
      id: "STRESS-02",
      title: "Somatic Awareness",
      questions: [
        "What body signals are you noticing right now?",
        "Where is the tension located?"
      ],
      recommendation: "Rate your tension 1-10 and write it down."
    },
    {
      id: "ANXIETY-03",
      title: "Worst Case Scenario",
      questions: [
        "What is the absolute worst thing that could happen?",
        "How would you cope if it did happen?",
        "How likely is it really?"
      ],
      recommendation: "Write down your coping plan."
    },
    {
      id: "BURNOUT-01",
      title: "Energy Audit",
      questions: [
        "List 3 things that drained you today.",
        "List 3 things that gave you energy.",
        "How can you increase the energy givers tomorrow?"
      ],
      recommendation: "Schedule one energy giver for tomorrow morning."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Stress Cards Examples - Practical Tools for Men" 
        description="Browse our library of stress cards. Practical, CBT-based questions to manage anxiety, stress, and burnout in 5 minutes or less."
        canonical="/stress-cards"
        keywords="stress cards, CBT techniques, anxiety management, stress management tools, men's mental health"
      />
      
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stress Cards Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A "Stress Card" is a micro-tool designed to shift your cognitive state. 
            It combines a provocative question with a concrete action.
          </p>
          <Button size="lg" asChild>
            <a href="tg://resolve?domain=ImFineBot&start=miniapp">Open Library in Telegram</a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="h-80">
              <StressCard {...card} />
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How to use Stress Cards effectively</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Stress cards work because they interrupt automatic thinking patterns. When you are stressed, your brain is in a "tunnel vision" mode.
            </p>
            <p>
              By forcing you to answer a specific question (e.g., "What is the evidence for this thought?"), the card engages your prefrontal cortex—the logical part of your brain—and dampens the emotional response of the amygdala.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>Do one card at a time.</strong> Don't rush.</li>
              <li><strong>Write down the answers.</strong> Writing externalizes the thought.</li>
              <li><strong>Commit to the micro-action.</strong> Insight without action is just entertainment.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
