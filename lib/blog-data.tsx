import { ReactNode } from "react";

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

const blog1 = "/attached_assets/generated_images/Calm_water_surface_for_anxiety_blog_post_34484ece.png";
const blog2 = "/attached_assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";

export function getBlogPost(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [
    {
      slug: "stress-management-techniques",
      title: "12 Evidence-Based Stress Management Techniques for Men",
      description: "Discover 12 practical stress management techniques backed by CBT and ACT.",
      excerpt: "Learn practical stress management techniques that actually work for busy men.",
      category: "Stress Management",
      date: "2024-01-15",
      image: blog2,
      readTime: "8 min read",
      content: null
    },
    {
      slug: "burnout-signs-men",
      title: "Burnout Signs in Men: 6 Warning Flags",
      description: "Learn to recognize burnout symptoms specific to men.",
      excerpt: "Recognize the warning signs of burnout before it's too late.",
      category: "Burnout",
      date: "2024-01-10",
      image: blog1,
      readTime: "6 min read",
      content: null
    },
    {
      slug: "anxiety-vs-stress",
      title: "Anxiety vs Stress: What's the Difference?",
      description: "Understanding the key differences between anxiety and stress.",
      excerpt: "Learn how to distinguish between anxiety and stress.",
      category: "Anxiety",
      date: "2024-01-05",
      image: blog2,
      readTime: "7 min read",
      content: null
    }
  ];
}
