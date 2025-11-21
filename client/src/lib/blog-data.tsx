import { ReactNode } from "react";
import blog1 from "@assets/generated_images/Calm_water_surface_for_anxiety_blog_post_34484ece.png";
import blog2 from "@assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";
import i18n from "@/lib/i18n";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: ReactNode;
  readTime?: string;
}

function getBlogPostContent(slug: string): ReactNode {
  const t = (key: string) => i18n.t(key);
  
  if (slug === "stress-management-techniques") {
    return (
      <>
        <p className="lead">
          {t('blog_data.stress_management_techniques.lead')}
        </p>
        
        <h2>{t('blog_data.stress_management_techniques.h2_1')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.p1')}
        </p>
        <ul>
          <li>{t('blog_data.stress_management_techniques.li1_1')}</li>
          <li>{t('blog_data.stress_management_techniques.li1_2')}</li>
          <li>{t('blog_data.stress_management_techniques.li1_3')}</li>
          <li>{t('blog_data.stress_management_techniques.li1_4')}</li>
        </ul>

        <h2>{t('blog_data.stress_management_techniques.h2_2')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.p2')}
        </p>

        <div className="bg-muted/50 p-8 rounded-xl border border-border my-8 not-prose">
          <h3 className="text-xl font-bold mb-4">{t('blog_data.stress_management_techniques.guide_title')}</h3>
          <p className="mb-6 text-muted-foreground">
            {t('blog_data.stress_management_techniques.guide_desc')}
          </p>
          <a href="https://t.me/menhausen_app_bot/app" className="inline-block px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors">
            {t('blog_data.stress_management_techniques.guide_cta')}
          </a>
        </div>

        <h2>{t('blog_data.stress_management_techniques.h2_3')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.p3')}
        </p>

        <h2>{t('blog_data.stress_management_techniques.h2_4')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.p4')}
        </p>

        <h2>{t('blog_data.stress_management_techniques.h2_5')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.p5')}
        </p>

        <h2>{t('blog_data.stress_management_techniques.conclusion_title')}</h2>
        <p>
          {t('blog_data.stress_management_techniques.conclusion_p')}
        </p>
      </>
    );
  }
  
  if (slug === "burnout-signs-men") {
    return (
      <>
        <p className="lead">
          {t('blog_data.burnout_signs_men.lead')}
        </p>

        <h2>{t('blog_data.burnout_signs_men.h2_1')}</h2>
        <p>
          {t('blog_data.burnout_signs_men.p1')}
        </p>
        <ol>
          <li><strong>{t('blog_data.burnout_signs_men.li1_1')}</strong></li>
          <li><strong>{t('blog_data.burnout_signs_men.li1_2')}</strong></li>
          <li><strong>{t('blog_data.burnout_signs_men.li1_3')}</strong></li>
        </ol>

        <h2>{t('blog_data.burnout_signs_men.h2_2')}</h2>
        <p>
          {t('blog_data.burnout_signs_men.p2')}
        </p>
        <ul>
          <li>{t('blog_data.burnout_signs_men.li2_1')}</li>
          <li>{t('blog_data.burnout_signs_men.li2_2')}</li>
          <li>{t('blog_data.burnout_signs_men.li2_3')}</li>
          <li>{t('blog_data.burnout_signs_men.li2_4')}</li>
          <li>{t('blog_data.burnout_signs_men.li2_5')}</li>
          <li>{t('blog_data.burnout_signs_men.li2_6')}</li>
        </ul>

        <h2>{t('blog_data.burnout_signs_men.h2_3')}</h2>
        <p>
          {t('blog_data.burnout_signs_men.p3')}
        </p>
        <ul>
          <li>{t('blog_data.burnout_signs_men.li3_1')}</li>
          <li>{t('blog_data.burnout_signs_men.li3_2')}</li>
          <li>{t('blog_data.burnout_signs_men.li3_3')}</li>
          <li>{t('blog_data.burnout_signs_men.li3_4')}</li>
        </ul>
        <p>
          {t('blog_data.burnout_signs_men.p4')}
        </p>

        <h2>{t('blog_data.burnout_signs_men.h2_4')}</h2>
        <p>
          {t('blog_data.burnout_signs_men.p5')}
        </p>
        <ul>
          <li>{t('blog_data.burnout_signs_men.li4_1')}</li>
          <li>{t('blog_data.burnout_signs_men.li4_2')}</li>
          <li>{t('blog_data.burnout_signs_men.li4_3')}</li>
          <li>{t('blog_data.burnout_signs_men.li4_4')}</li>
        </ul>

        <h2>{t('blog_data.burnout_signs_men.conclusion_title')}</h2>
        <p>
          {t('blog_data.burnout_signs_men.conclusion_p')}
        </p>
      </>
    );
  }
  
  if (slug === "anxiety-vs-stress") {
    return (
      <>
        <p className="lead">
          {t('blog_data.anxiety_vs_stress.lead')}
        </p>

        <h2>{t('blog_data.anxiety_vs_stress.h2_1')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.p1')}
        </p>
        <p><strong>{t('blog_data.anxiety_vs_stress.stress_char_title')}</strong></p>
        <ul>
          <li>{t('blog_data.anxiety_vs_stress.stress_char1')}</li>
          <li>{t('blog_data.anxiety_vs_stress.stress_char2')}</li>
          <li>{t('blog_data.anxiety_vs_stress.stress_char3')}</li>
          <li>{t('blog_data.anxiety_vs_stress.stress_char4')}</li>
        </ul>

        <h2>{t('blog_data.anxiety_vs_stress.h2_2')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.p2')}
        </p>
        <p><strong>{t('blog_data.anxiety_vs_stress.anxiety_char_title')}</strong></p>
        <ul>
          <li>{t('blog_data.anxiety_vs_stress.anxiety_char1')}</li>
          <li>{t('blog_data.anxiety_vs_stress.anxiety_char2')}</li>
          <li>{t('blog_data.anxiety_vs_stress.anxiety_char3')}</li>
          <li>{t('blog_data.anxiety_vs_stress.anxiety_char4')}</li>
        </ul>

        <h2>{t('blog_data.anxiety_vs_stress.h2_3')}</h2>
        <table className="w-full my-8 border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4">{t('blog_data.anxiety_vs_stress.table_aspect')}</th>
              <th className="text-left p-4">{t('blog_data.anxiety_vs_stress.table_stress')}</th>
              <th className="text-left p-4">{t('blog_data.anxiety_vs_stress.table_anxiety')}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_source')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_source_stress')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_source_anxiety')}</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_duration')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_duration_stress')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_duration_anxiety')}</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_focus')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_focus_stress')}</td>
              <td className="p-4">{t('blog_data.anxiety_vs_stress.table_focus_anxiety')}</td>
            </tr>
          </tbody>
        </table>

        <h2>{t('blog_data.anxiety_vs_stress.h2_4')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.p3')}
        </p>
        <ul>
          <li>{t('blog_data.anxiety_vs_stress.manage_stress1')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_stress2')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_stress3')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_stress4')}</li>
        </ul>

        <h2>{t('blog_data.anxiety_vs_stress.h2_5')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.p4')}
        </p>
        <ul>
          <li>{t('blog_data.anxiety_vs_stress.manage_anxiety1')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_anxiety2')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_anxiety3')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_anxiety4')}</li>
          <li>{t('blog_data.anxiety_vs_stress.manage_anxiety5')}</li>
        </ul>

        <h2>{t('blog_data.anxiety_vs_stress.h2_6')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.p5')}
        </p>
        <ul>
          <li>{t('blog_data.anxiety_vs_stress.help1')}</li>
          <li>{t('blog_data.anxiety_vs_stress.help2')}</li>
          <li>{t('blog_data.anxiety_vs_stress.help3')}</li>
          <li>{t('blog_data.anxiety_vs_stress.help4')}</li>
        </ul>

        <h2>{t('blog_data.anxiety_vs_stress.conclusion_title')}</h2>
        <p>
          {t('blog_data.anxiety_vs_stress.conclusion_p')}
        </p>
      </>
    );
  }
  
  return null;
}

function getBlogPosts(): BlogPost[] {
  const t = (key: string) => i18n.t(key);
  
  return [
    {
      slug: "stress-management-techniques",
      title: t('blog_data.stress_management_techniques.title'),
      description: t('blog_data.stress_management_techniques.description'),
      excerpt: t('blog_data.stress_management_techniques.excerpt'),
      category: t('blog_data.stress_management_techniques.category'),
      date: t('blog_data.stress_management_techniques.date'),
      image: blog2,
      readTime: t('blog_data.stress_management_techniques.readTime'),
      content: getBlogPostContent("stress-management-techniques")
    },
    {
      slug: "burnout-signs-men",
      title: t('blog_data.burnout_signs_men.title'),
      description: t('blog_data.burnout_signs_men.description'),
      excerpt: t('blog_data.burnout_signs_men.excerpt'),
      category: t('blog_data.burnout_signs_men.category'),
      date: t('blog_data.burnout_signs_men.date'),
      image: blog1,
      readTime: t('blog_data.burnout_signs_men.readTime'),
      content: getBlogPostContent("burnout-signs-men")
    },
    {
      slug: "anxiety-vs-stress",
      title: t('blog_data.anxiety_vs_stress.title'),
      description: t('blog_data.anxiety_vs_stress.description'),
      excerpt: t('blog_data.anxiety_vs_stress.excerpt'),
      category: t('blog_data.anxiety_vs_stress.category'),
      date: t('blog_data.anxiety_vs_stress.date'),
      image: blog2,
      readTime: t('blog_data.anxiety_vs_stress.readTime'),
      content: getBlogPostContent("anxiety-vs-stress")
    }
  ];
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogPosts();
}
