import { ReactNode } from "react";
import blog1 from "@assets/generated_images/Calm_water_surface_for_anxiety_blog_post_34484ece.png";
import blog2 from "@assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";

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

const blogPosts: BlogPost[] = [
  {
    slug: "stress-management-techniques",
    title: "5 Scientific Techniques to Lower Cortisol Immediately",
    description: "Learn effective techniques to manage stress instantly. Box breathing, physiological sighs, and cold exposure can reset your nervous system.",
    excerpt: "Box breathing is just the beginning. Learn how physiological sighs and cold exposure can reset your nervous system.",
    category: "Stress Management",
    date: "Nov 18, 2025",
    image: blog2,
    readTime: "5 min read",
    content: (
      <>
        <p className="lead">
          Stress isn't just "in your head." It's a physiological cascade of hormones, primarily cortisol and adrenaline. To stop stress, you have to speak the body's language.
        </p>
        
        <h2>1. The Physiological Sigh</h2>
        <p>
          Discovered by neuroscientists, this breathing pattern is the fastest known way to lower arousal in real-time.
        </p>
        <ul>
          <li>Inhale deeply through the nose.</li>
          <li>Take a second, shorter inhale on top of it (to fully inflate alveoli).</li>
          <li>Exhale slowly and fully through the mouth.</li>
          <li>Repeat 1-3 times.</li>
        </ul>

        <h2>2. Visual Panorama</h2>
        <p>
          When we are stressed, our vision narrows (tunnel vision). This is a vestigial predator response. By consciously widening your gaze to see the periphery (panoramic vision), you signal to your brain that you are safe.
        </p>

        <div className="bg-muted/50 p-8 rounded-xl border border-border my-8 not-prose">
          <h3 className="text-xl font-bold mb-4">Need a guide?</h3>
          <p className="mb-6 text-muted-foreground">
            Menhausen has a guided 2-minute "Panic Reset" card that walks you through these steps.
          </p>
          <a href="tg://resolve?domain=ImFineBot&start=miniapp" className="inline-block px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors">
            Try Panic Reset in App
          </a>
        </div>

        <h2>3. Cold Exposure</h2>
        <p>
          Splashing cold water on your face triggers the "mammalian dive reflex," which instantly lowers heart rate. It's crude, but effective.
        </p>

        <h2>4. Box Breathing</h2>
        <p>
          The classic 4-4-4-4 pattern: inhale for 4 counts, hold for 4, exhale for 4, hold for 4. This technique is used by Navy SEALs to maintain composure under extreme pressure.
        </p>

        <h2>5. Progressive Muscle Relaxation</h2>
        <p>
          Tense and release muscle groups systematically. Start with your toes and work your way up. This physical release signals your nervous system that the threat has passed.
        </p>

        <h2>Conclusion</h2>
        <p>
          You cannot "think" your way out of a stress response. You must "act" your way out. These tools are your first line of defense.
        </p>
      </>
    )
  },
  {
    slug: "burnout-signs-men",
    title: "The Silent Signs of Burnout in High-Performing Men",
    description: "Burnout doesn't always look like exhaustion. Sometimes it looks like cynicism, detachment, and a loss of efficacy. Learn to recognize the silent signs.",
    excerpt: "It doesn't always look like exhaustion. Sometimes it looks like cynicism, detachment, and a loss of efficacy.",
    category: "Burnout",
    date: "Nov 15, 2025",
    image: blog1,
    readTime: "6 min read",
    content: (
      <>
        <p className="lead">
          Burnout is not just being tired. It's a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. For high-performing men, the signs are often subtle and easy to dismiss.
        </p>

        <h2>The Three Dimensions of Burnout</h2>
        <p>
          According to research, burnout has three core components:
        </p>
        <ol>
          <li><strong>Exhaustion:</strong> Physical and emotional depletion</li>
          <li><strong>Cynicism:</strong> Detachment and negative attitudes toward work and life</li>
          <li><strong>Inefficacy:</strong> Reduced personal accomplishment and productivity</li>
        </ol>

        <h2>Silent Signs in Men</h2>
        <p>
          Men often express burnout differently than women. Watch for these subtle indicators:
        </p>
        <ul>
          <li>Increased irritability over small things</li>
          <li>Withdrawal from social activities you used to enjoy</li>
          <li>Difficulty making decisions that used to be easy</li>
          <li>Feeling like you're going through the motions</li>
          <li>Physical symptoms: headaches, digestive issues, sleep problems</li>
          <li>Using substances (alcohol, caffeine) more than usual to cope</li>
        </ul>

        <h2>Why High Performers Are at Risk</h2>
        <p>
          High-performing men often have:
        </p>
        <ul>
          <li>Perfectionist tendencies</li>
          <li>Difficulty saying no</li>
          <li>Identity tied to achievement</li>
          <li>Neglect of self-care</li>
        </ul>
        <p>
          These traits make them more susceptible to burnout because they push through warning signs.
        </p>

        <h2>Early Intervention</h2>
        <p>
          The earlier you recognize burnout, the easier it is to recover. Start with small changes:
        </p>
        <ul>
          <li>Set boundaries around work hours</li>
          <li>Schedule regular breaks throughout the day</li>
          <li>Reconnect with hobbies and interests outside work</li>
          <li>Practice stress management techniques daily</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Burnout is not a sign of weakness. It's a sign that your system is overloaded. Recognizing the silent signs early can prevent a full breakdown and help you maintain your performance sustainably.
        </p>
      </>
    )
  },
  {
    slug: "anxiety-vs-stress",
    title: "Anxiety vs. Stress: Understanding the Difference",
    description: "Stress is a reaction to a threat. Anxiety is a reaction to the stress. Here is how to tell them apart and treat them differently.",
    excerpt: "Stress is a reaction to a threat. Anxiety is a reaction to the stress. Here is how to tell them apart and treat them differently.",
    category: "Anxiety",
    date: "Nov 10, 2025",
    image: blog2,
    readTime: "7 min read",
    content: (
      <>
        <p className="lead">
          Many men use "stress" and "anxiety" interchangeably, but they're different experiences that require different approaches. Understanding the distinction is crucial for effective management.
        </p>

        <h2>What is Stress?</h2>
        <p>
          Stress is your body's response to an external pressure or demand. It has a clear cause and typically subsides when the stressor is removed or resolved.
        </p>
        <p><strong>Characteristics of stress:</strong></p>
        <ul>
          <li>Has an identifiable trigger (deadline, conflict, financial pressure)</li>
          <li>Is time-limited (ends when the situation is resolved)</li>
          <li>Can be motivating in small doses</li>
          <li>Physical symptoms: increased heart rate, tension, alertness</li>
        </ul>

        <h2>What is Anxiety?</h2>
        <p>
          Anxiety is a persistent feeling of worry, fear, or unease that may not have a clear cause. It's often a reaction to stress that continues even after the stressor is gone.
        </p>
        <p><strong>Characteristics of anxiety:</strong></p>
        <ul>
          <li>May lack a clear trigger</li>
          <li>Persists beyond the original stressor</li>
          <li>Can interfere with daily functioning</li>
          <li>Physical symptoms: racing thoughts, restlessness, difficulty concentrating, sleep problems</li>
        </ul>

        <h2>Key Differences</h2>
        <table className="w-full my-8 border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4">Aspect</th>
              <th className="text-left p-4">Stress</th>
              <th className="text-left p-4">Anxiety</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="p-4">Source</td>
              <td className="p-4">External (work, relationships, events)</td>
              <td className="p-4">Internal (worries, fears, thoughts)</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-4">Duration</td>
              <td className="p-4">Short-term, situation-specific</td>
              <td className="p-4">Long-term, persistent</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="p-4">Focus</td>
              <td className="p-4">On the present situation</td>
              <td className="p-4">On future threats or "what ifs"</td>
            </tr>
          </tbody>
        </table>

        <h2>Managing Stress</h2>
        <p>
          Since stress has a clear cause, management focuses on:
        </p>
        <ul>
          <li>Problem-solving the stressor</li>
          <li>Time management and prioritization</li>
          <li>Physical activity to release tension</li>
          <li>Relaxation techniques (breathing, meditation)</li>
        </ul>

        <h2>Managing Anxiety</h2>
        <p>
          Anxiety management requires different strategies:
        </p>
        <ul>
          <li>Cognitive techniques to challenge anxious thoughts</li>
          <li>Exposure therapy for specific fears</li>
          <li>Mindfulness to stay present</li>
          <li>Lifestyle changes (sleep, diet, exercise)</li>
          <li>Professional support if anxiety is severe</li>
        </ul>

        <h2>When to Seek Help</h2>
        <p>
          Consider professional help if:
        </p>
        <ul>
          <li>Symptoms persist for more than a few weeks</li>
          <li>Anxiety or stress interfere with work or relationships</li>
          <li>You're using substances to cope</li>
          <li>You have thoughts of self-harm</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Both stress and anxiety are normal human experiences, but they require different management approaches. Understanding which one you're experiencing is the first step toward effective treatment.
        </p>
      </>
    )
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

