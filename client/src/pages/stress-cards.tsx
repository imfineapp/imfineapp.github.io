import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StressCard } from "@/components/ui/stress-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function StressCards() {
  const { t } = useTranslation();
  const cards = [
    {
      id: "STRESS-01",
      title: t('stress_cards.cards.grounding.title'),
      questions: [
        t('stress_cards.cards.grounding.q1'),
        t('stress_cards.cards.grounding.q2'),
        t('stress_cards.cards.grounding.q3')
      ],
      recommendation: t('stress_cards.cards.grounding.action')
    },
    {
      id: "STRESS-04",
      title: t('examples.cards.reframing.title'),
      questions: [
        t('examples.cards.reframing.q1'),
        t('examples.cards.reframing.q2')
      ],
      recommendation: t('examples.cards.reframing.action')
    },
    {
      id: "STRESS-07",
      title: t('examples.cards.testing.title'),
      questions: [
        t('examples.cards.testing.q1'),
        t('examples.cards.testing.q2')
      ],
      recommendation: t('examples.cards.testing.action')
    },
    {
      id: "STRESS-02",
      title: t('examples.cards.somatic.title'),
      questions: [
        t('examples.cards.somatic.q1'),
        t('examples.cards.somatic.q2')
      ],
      recommendation: t('examples.cards.somatic.action')
    },
    {
      id: "ANXIETY-03",
      title: t('stress_cards.cards.worst_case.title'),
      questions: [
        t('stress_cards.cards.worst_case.q1'),
        t('stress_cards.cards.worst_case.q2'),
        t('stress_cards.cards.worst_case.q3')
      ],
      recommendation: t('stress_cards.cards.worst_case.action')
    },
    {
      id: "BURNOUT-01",
      title: t('stress_cards.cards.energy_audit.title'),
      questions: [
        t('stress_cards.cards.energy_audit.q1'),
        t('stress_cards.cards.energy_audit.q2'),
        t('stress_cards.cards.energy_audit.q3')
      ],
      recommendation: t('stress_cards.cards.energy_audit.action')
    }
  ];

  return (
    <Layout>
      <SEO 
        title={t('stress_cards.seo_title')} 
        description={t('stress_cards.seo_description')}
        canonical="/stress-cards"
        keywords={t('stress_cards.seo_keywords')}
      />
      
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('stress_cards.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('stress_cards.subtitle')}
          </p>
          <Button size="lg" asChild>
            <a href="https://t.me/menhausen_app_bot/app">{t('stress_cards.cta')}</a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <StressCard key={card.id} {...card} />
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('stress_cards.how_to_use_title')}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {t('stress_cards.how_to_use_p1')}
            </p>
            <p>
              {t('stress_cards.how_to_use_p2')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>{t('stress_cards.how_to_use_li1')}</strong></li>
              <li><strong>{t('stress_cards.how_to_use_li2')}</strong></li>
              <li><strong>{t('stress_cards.how_to_use_li3')}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
