import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link, useRoute, Redirect } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Brain, Heart, Sparkles, CheckCircle2 } from "lucide-react";

const categoryIcons: Record<string, React.ReactElement> = {
  cbt: <Brain className="w-8 h-8" />,
  act: <Heart className="w-8 h-8" />,
  mindfulness: <Sparkles className="w-8 h-8" />
};

const categoryLabels: Record<string, string> = {
  cbt: "Cognitive Behavioral Therapy",
  act: "Acceptance & Commitment Therapy",
  mindfulness: "Mindfulness-Based"
};

const categoryForTechnique: Record<string, string> = {
  "cognitive-reframing": "cbt",
  "behavioral-activation": "cbt",
  "somatic-anchoring": "mindfulness",
  "values-clarification": "act",
  "acceptance-practice": "act",
  "defusion-technique": "act"
};

const validSlugs = [
  "cognitive-reframing", "somatic-anchoring", "values-clarification",
  "behavioral-activation", "acceptance-practice", "defusion-technique"
];

function slugToKey(slug: string): string {
  return slug.replace(/-/g, '_');
}

export default function TechniqueDetail() {
  const { t } = useTranslation();
  const [match, params] = useRoute("/techniques/:slug");
  const slug = params?.slug;

  if (!slug || !validSlugs.includes(slug)) {
    return <Redirect to="/techniques" />;
  }

  const key = slugToKey(slug);
  const category = categoryForTechnique[slug] || "cbt";
  const name = t(`techniques_data.${key}.name`);
  const description = t(`techniques_data.${key}.description`);
  const benefits = (t(`techniques_data.${key}.benefits`, { returnObjects: true }) as string[]) || [];
  const howItWorks = (t(`techniques_data.${key}.howItWorks`, { returnObjects: true }) as string[]) || [];
  const questions = (t(`techniques_data.${key}.questions`, { returnObjects: true }) as string[]) || [];

  const howtoSteps = howItWorks.map((step, index) => ({
    "@type": "HowToStep",
    "name": `Step ${index + 1}`,
    "text": step,
    "position": index + 1
  }));

  return (
    <Layout>
      <SEO 
        title={`${name} - ${t('techniques.seo_title')}`}
        description={description}
        canonical={`/techniques/${slug}`}
      />
      <StructuredData 
        type="howto" 
        data={{
          howto: {
            name: name,
            description: description,
            steps: howtoSteps
          }
        }}
      />

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          {/* Back Link */}
          <Link href="/techniques" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('techniques.back_to_techniques')}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                {categoryIcons[category]}
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {categoryLabels[category]}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {name}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('techniques.benefits')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start p-4 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('techniques.how_it_works')}</h2>
            <div className="space-y-4">
              {howItWorks.map((step, i) => (
                <div key={i} className="flex items-start p-6 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4 shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Questions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('techniques.reflective_questions')}</h2>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {questions.map((question, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4 shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-lg text-foreground/90">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-primary text-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('techniques.practice_now')}</h2>
            <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
              {t('techniques.cta_description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('techniques.start_practice')}
            </TelegramCTA>
          </section>
        </div>
      </article>
    </Layout>
  );
}
