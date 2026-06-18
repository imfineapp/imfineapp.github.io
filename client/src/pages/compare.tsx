import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { PageFaq } from "@/components/page-faq";
import { TelegramCTA } from "@/components/telegram-cta";
import { Link, useRoute, Redirect } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check, X, Sparkles } from "lucide-react";

const validSlugs = ["calm", "betterhelp", "headspace", "waking-up", "noom"];

function slugToKey(slug: string): string {
  return slug.replace(/-/g, '_');
}

interface DetailedComparison {
  category: string;
  competitor: string;
  menhausen: string;
  bottomLine: string;
}

interface MigrationInfo {
  intro: string;
  whatTransfers: string[];
  whatDoesnt: string[];
  timeEstimate: string;
  support: string;
}

function safeArray<T = string>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function safeObject<T>(value: unknown): T | null {
  return value && typeof value === "object" ? (value as T) : null;
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
  // seoName is optional — falls back to `name`. Used in title tag, H1, meta
  // description, and structured-data questions where the keyword-stuffed form
  // ("Mental App" vs "Mental") is what users actually search for.
  const seoName = (() => {
    try {
      const v = t(`comparisons_data.${key}.seoName`);
      return typeof v === "string" && v.length > 0 ? v : name;
    } catch {
      return name;
    }
  })();
  const tagline = t(`comparisons_data.${key}.tagline`);
  const pricing = t(`comparisons_data.${key}.pricing`);
  const pros = safeArray(t(`comparisons_data.${key}.pros`, { returnObjects: true }));
  const cons = safeArray(t(`comparisons_data.${key}.cons`, { returnObjects: true }));
  const keyDifferences = safeArray(t(`comparisons_data.${key}.keyDifferences`, { returnObjects: true }));
  const bestFor = safeArray(t(`comparisons_data.${key}.bestFor`, { returnObjects: true }));

  // Optional rich sections — only present for some competitors (e.g. Mental)
  const tldr = (() => {
    try {
      const v = t(`comparisons_data.${key}.tldr`);
      return typeof v === "string" && v.length > 0 ? v : null;
    } catch {
      return null;
    }
  })();

  const detailed = safeArray<DetailedComparison>(
    t(`comparisons_data.${key}.detailed`, { returnObjects: true })
  );

  const whoShouldChoose = safeArray(
    t(`comparisons_data.${key}.whoShouldChoose`, { returnObjects: true })
  );

  const whoShouldSwitchFrom = safeArray(
    t(`comparisons_data.${key}.whoShouldSwitchFrom`, { returnObjects: true })
  );

  const migration = safeObject<MigrationInfo>(
    t(`comparisons_data.${key}.migration`, { returnObjects: true })
  );

  const compareFaq = [
    {
      question: `Is Menhausen better than ${seoName}?`,
      answer: "Menhausen offers anonymity, no account required, and targets men's stress with evidence-based CBT/ACT techniques in Telegram.",
    },
    {
      question: `How does ${seoName} compare to Menhausen?`,
      answer: keyDifferences[0] || tagline,
    },
    {
      question: t("comparisons.quick_verdict"),
      answer: bestFor[0] || tagline,
    },
  ];

  return (
    <Layout>
      <SEO 
        title={`${seoName} vs Menhausen`}
        description={`Compare ${seoName} with Menhausen. ${keyDifferences[0] || ""} Find the best stress management solution for men.`}
        canonical={`/compare/${slug}`}
      />
      <StructuredData 
        type="faq" 
        data={{ faqItems: compareFaq }}
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
                {seoName} vs Menhausen
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

          {/* TL;DR — optional rich summary */}
          {tldr && (
            <div className="bg-primary/5 border border-primary/30 rounded-2xl p-8 md:p-10 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-primary">TL;DR</h2>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">{tldr}</p>
            </div>
          )}

          {/* Detailed Comparison — paragraph comparisons by category */}
          {detailed.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{seoName} vs Menhausen: a deeper look</h2>
              <p className="text-muted-foreground mb-8">
                Beyond the checklist — here is how the two products actually differ in practice.
              </p>
              <div className="space-y-6">
                {detailed.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-5">{item.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          {name}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.competitor}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Menhausen
                        </div>
                        <p className="text-foreground/90 leading-relaxed">{item.menhausen}</p>
                      </div>
                    </div>
                    <div className="pt-5 border-t border-border/60">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Bottom line
                      </div>
                      <p className="text-foreground/90">{item.bottomLine}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Who Should Choose — optional two-column section */}
          {(whoShouldChoose.length > 0 || whoShouldSwitchFrom.length > 0) && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Who should choose which</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-4">Stay with {name}</h3>
                  <ul className="space-y-3">
                    {whoShouldChoose.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border-2 border-primary/40 rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-4 text-primary">Switch to Menhausen</h3>
                  <ul className="space-y-3">
                    {whoShouldSwitchFrom.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Migration — optional section */}
          {migration && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Switching from {name} to Menhausen
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {migration.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold mb-3 text-primary">What transfers</h3>
                    <ul className="space-y-2">
                      {migration.whatTransfers.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 text-muted-foreground">What does not</h3>
                    <ul className="space-y-2">
                      {migration.whatDoesnt.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <X className="w-4 h-4 text-muted-foreground mr-2 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 border-t border-border/60">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Time to switch
                    </div>
                    <p className="text-foreground/90">{migration.timeEstimate}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Support during switch
                    </div>
                    <p className="text-foreground/90">{migration.support}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          <PageFaq title={t("comparisons.detail_faq_title")} items={compareFaq} />

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
