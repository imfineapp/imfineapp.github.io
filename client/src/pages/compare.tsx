import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link, useRoute, Redirect } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check, X } from "lucide-react";

const validSlugs = ["calm", "betterhelp", "headspace", "waking-up", "noom"];

function slugToKey(slug: string): string {
  return slug.replace(/-/g, '_');
}

export default function CompareDetail() {
  const { t } = useTranslation();
  const [match, params] = useRoute("/compare/:slug");
  const slug = params?.slug;

  if (!slug || !validSlugs.includes(slug)) {
    return <Redirect to="/compare" />;
  }

  const key = slugToKey(slug);
  const name = t(`comparisons_data.${key}.name`);
  const tagline = t(`comparisons_data.${key}.tagline`);
  const pricing = t(`comparisons_data.${key}.pricing`);
  const pros = (t(`comparisons_data.${key}.pros`, { returnObjects: true }) as string[]) || [];
  const cons = (t(`comparisons_data.${key}.cons`, { returnObjects: true }) as string[]) || [];
  const keyDifferences = (t(`comparisons_data.${key}.keyDifferences`, { returnObjects: true }) as string[]) || [];
  const bestFor = (t(`comparisons_data.${key}.bestFor`, { returnObjects: true }) as string[]) || [];

  return (
    <Layout>
      <SEO 
        title={`${name} vs Menhausen - ${t('comparisons.seo_title')}`}
        description={`Compare ${name} with Menhausen. ${keyDifferences[0] || ""} Find the best stress management solution for men.`}
        canonical={`/compare/${slug}`}
      />
      <StructuredData 
        type="faq" 
        data={{
          faqItems: [
            { question: `Is Menhausen better than ${name}?`, answer: `Menhausen offers anonymity, no account required, and targets men specific stress issues with evidence-based CBT/ACT techniques.` },
            { question: `How does ${name} compare to Menhausen?`, answer: keyDifferences[0] || "" }
          ]
        }}
      />

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          {/* Back Link */}
          <Link href="/compare" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('comparisons.back')}
          </Link>

          {/* Header */}
          <div className="flex items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {name} vs Menhausen
              </h1>
              <p className="text-xl text-muted-foreground">
                {tagline}
              </p>
            </div>
          </div>

          {/* Quick Verdict */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">{t('comparisons.quick_verdict')}</h2>
            <p className="text-lg mb-6">
              {t('comparisons.menhausen_better_for')}
            </p>
            <div className="flex flex-wrap gap-3">
              {bestFor.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-secondary/50 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('comparisons.head_to_head')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold">{t('comparisons.table.feature')}</th>
                    <th className="text-left py-4 px-4 font-bold text-muted-foreground">{name}</th>
                    <th className="text-left py-4 px-4 font-bold text-primary">Menhausen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.price')}</td>
                    <td className="py-4 px-4 text-muted-foreground">{pricing}</td>
                    <td className="py-4 px-4 text-primary font-bold">{t('comparisons.table.free')}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.anonymous')}</td>
                    <td className="py-4 px-4 text-muted-foreground"><X className="w-5 h-5 inline" /></td>
                    <td className="py-4 px-4 text-primary"><Check className="w-5 h-5 inline" /></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.no_account')}</td>
                    <td className="py-4 px-4 text-muted-foreground"><X className="w-5 h-5 inline" /></td>
                    <td className="py-4 px-4 text-primary"><Check className="w-5 h-5 inline" /></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.cbt_act')}</td>
                    <td className="py-4 px-4 text-muted-foreground">{t('comparisons.table.varies')}</td>
                    <td className="py-4 px-4 text-primary"><Check className="w-5 h-5 inline" /></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.telegram')}</td>
                    <td className="py-4 px-4 text-muted-foreground"><X className="w-5 h-5 inline" /></td>
                    <td className="py-4 px-4 text-primary"><Check className="w-5 h-5 inline" /></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{t('comparisons.table.men_focus')}</td>
                    <td className="py-4 px-4 text-muted-foreground"><X className="w-5 h-5 inline" /></td>
                    <td className="py-4 px-4 text-primary"><Check className="w-5 h-5 inline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Menhausen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">{t('comparisons.menhausen_advantages')}</h3>
              <ul className="space-y-3">
                {keyDifferences.map((diff, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">{t('comparisons.when_choose_other')}</h3>
              <ul className="space-y-3">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <section className="py-12 bg-primary text-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('comparisons.try_menhausen')}</h2>
            <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
              {t('comparisons.cta_description')}
            </p>
            <TelegramCTA size="lg" className="px-10">
              {t('comparisons.start_free')}
            </TelegramCTA>
          </section>
        </div>
      </article>
    </Layout>
  );
}
