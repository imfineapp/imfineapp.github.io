import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link, useRoute, Redirect } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check, ArrowRight, Briefcase, Code, Rocket, Users, Globe, Heart, Shield, Wrench } from "lucide-react";

type IconType = React.ReactElement<any>;

const professionIcons: Record<string, IconType> = {
  "software-developer": <Code className="w-8 h-8" />,
  "entrepreneur": <Rocket className="w-8 h-8" />,
  "executive": <Users className="w-8 h-8" />,
  "remote-worker": <Globe className="w-8 h-8" />,
  "sales-professional": <Briefcase className="w-8 h-8" />,
  "healthcare-professional": <Heart className="w-8 h-8" />,
  "freelancer": <Shield className="w-8 h-8" />,
  "tradesperson": <Wrench className="w-8 h-8" />
};

const validSlugs = [
  "software-developer", "entrepreneur", "executive", 
  "remote-worker", "sales-professional", "healthcare-professional",
  "freelancer", "tradesperson"
];

function slugToKey(slug: string): string {
  return slug.replace(/-/g, '_');
}

export default function ProfessionDetail() {
  const { t, i18n } = useTranslation();
  const [match, params] = useRoute("/professions/:slug");
  const slug = params?.slug;

  if (!slug || !validSlugs.includes(slug)) {
    return <Redirect to="/professions" />;
  }

  const key = slugToKey(slug);
  const name = t(`professions_data.${key}.name`);
  const description = t(`professions_data.${key}.description`);
  const stressFactors = (t(`professions_data.${key}.stress_factors`, { returnObjects: true }) as string[]) || [];
  const challenges = (t(`professions_data.${key}.challenges`, { returnObjects: true }) as string[]) || [];
  const techniques = (t(`professions_data.${key}.techniques`, { returnObjects: true }) as string[]) || [];
  const tips = (t(`professions_data.${key}.tips`, { returnObjects: true }) as string[]) || [];

  return (
    <Layout>
      <SEO 
        title={`${name} Stress Management - ${t('professions.seo_title')}`}
        description={`Stress management for ${name.toLowerCase()}s. ${description} Learn evidence-based techniques.`}
        canonical={`/professions/${slug}`}
      />
      <StructuredData 
        type="faq" 
        data={{
          faqItems: [
            { question: `How do ${name}s manage stress?`, answer: stressFactors[0] || "" },
            { question: `What stress techniques work for ${name}s?`, answer: techniques.join(", ") }
          ]
        }}
      />

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          {/* Back Link */}
          <Link href="/professions" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('professions.back')}
          </Link>

          {/* Header */}
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
              {professionIcons[slug] || <Briefcase className="w-8 h-8" />}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('professions.subtitle')}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Stress Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('professions.stress_factors')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stressFactors.map((factor, i) => (
                <div key={i} className="flex items-start p-4 bg-card rounded-xl border border-border">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('professions.common_challenges')}</h2>
            <div className="space-y-4">
              {challenges.map((challenge, i) => (
                <div key={i} className="flex items-start p-6 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4 shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-lg">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('professions.recommended_techniques')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techniques.map((technique, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                  <span className="font-medium">{technique}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('professions.practical_tips')}</h2>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4 shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-lg text-foreground/90">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-primary text-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('professions.start_practice')}</h2>
            <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
              {t('professions.cta_description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('professions.cta.button')}
            </TelegramCTA>
          </section>
        </div>
      </article>
    </Layout>
  );
}
