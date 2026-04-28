export interface Technique {
  slug: string;
  name: string;
  category: "cbt" | "act" | "mindfulness";
  description: string;
  benefits: string[];
  howItWorks: string[];
  questions: string[];
  relatedTopics: string[];
}

export const techniques: Technique[] = [
  {
    slug: "cognitive-reframing",
    name: "Cognitive Reframing",
    category: "cbt",
    description: "A CBT technique that helps you identify negative thought patterns and replace them with more balanced, realistic perspectives. By challenging automatic thoughts, you can reduce stress and gain clarity.",
    benefits: [
      "Reduce anxious and depressive thoughts",
      "Gain objective perspective on situations",
      "Build mental resilience",
      "Improve decision-making under pressure"
    ],
    howItWorks: [
      "Identify the negative thought triggering your stress",
      "Examine the evidence for and against this thought",
      "Generate 3 alternative interpretations",
      "Choose the most balanced perspective"
    ],
    questions: [
      "What specific thought is increasing your stress right now?",
      "What evidence supports this thought? What evidence contradicts it?",
      "Come up with 3 alternative interpretations of this situation.",
      "What would you tell a friend in this same situation?"
    ],
    relatedTopics: ["stress", "anxiety", "self-esteem", "anger"]
  },
  {
    slug: "somatic-anchoring",
    name: "Somatic Anchoring",
    category: "mindfulness",
    description: "A body-based technique that uses physical sensations to ground yourself in the present moment. It helps interrupt stress spirals by shifting focus from racing thoughts to bodily experience.",
    benefits: [
      "Quickly calm acute stress or anxiety",
      "Ground yourself in overwhelming situations",
      "Build awareness of mind-body connection",
      "Create personal anchors for calm states"
    ],
    howItWorks: [
      "Notice your current physical sensations",
      "Focus on points of contact (feet on floor, body in chair)",
      "Name what you see, hear, and feel in your body",
      "Press fingertips together and breathe deeply"
    ],
    questions: [
      "What sensations do you notice in your body right now?",
      "Where do you feel stress manifesting physically?",
      "What does your body need right now?",
      "Can you name 5 things you can see, 4 you can hear?"
    ],
    relatedTopics: ["anxiety", "panic", "stress", "burnout"]
  },
  {
    slug: "values-clarification",
    name: "Values Clarification",
    category: "act",
    description: "An ACT technique that helps you identify what truly matters to you. When you know your core values, decisions become easier and stress from misalignment dissipates.",
    benefits: [
      "Gain clarity on life direction",
      "Reduce stress from value conflicts",
      "Make decisions with confidence",
      "Build a life aligned with your authentic self"
    ],
    howItWorks: [
      "Imagine your ideal life in 10 years",
      "Identify what achievements would matter then",
      "Ask: what would I want people to remember about me?",
      "Choose your top 5 core values"
    ],
    questions: [
      "If you could not fail, what would you attempt?",
      "What do you want your life to stand for?",
      "When do you feel most alive and authentic?",
      "What would you do if you knew you couldn't fail?"
    ],
    relatedTopics: ["burnout", "depression", "grief", "relationships"]
  },
  {
    slug: "behavioral-activation",
    name: "Behavioral Activation",
    category: "cbt",
    description: "A proven technique for breaking the depression-stress cycle. By scheduling valued activities, you restore momentum and naturally boost mood through action rather than waiting for motivation.",
    benefits: [
      "Break free from avoidance loops",
      "Boost mood through action",
      "Restore routine and structure",
      "Build momentum and motivation"
    ],
    howItWorks: [
      "List activities that used to bring you joy",
      "Rate each on a scale of mastery and pleasure",
      "Schedule one small activity daily",
      "Track mood before and after"
    ],
    questions: [
      "What activities used to make you feel good?",
      "What's one small thing you could do today that aligns with your values?",
      "What have you been avoiding lately?",
      "What would your ideal day look like?"
    ],
    relatedTopics: ["depression", "burnout", "stress", "grief"]
  },
  {
    slug: "acceptance-practice",
    name: "Acceptance Practice",
    category: "act",
    description: "An ACT technique that teaches you to make room for difficult emotions rather than fighting them. By accepting what you cannot control, you free energy for what you can change.",
    benefits: [
      "Reduce struggle with difficult emotions",
      "Build emotional resilience",
      "Decrease avoidance behaviors",
      "Increase psychological flexibility"
    ],
    howItWorks: [
      "Notice the emotion without trying to change it",
      "Name the emotion and where you feel it in your body",
      "Remind yourself: emotions are temporary",
      "Ask: what can I do right now that's in my control?"
    ],
    questions: [
      "What emotion is present right now, and where do you feel it?",
      "Can you allow this feeling to be here without fighting it?",
      "What would happen if you stopped resisting this emotion?",
      "What's one thing within your control right now?"
    ],
    relatedTopics: ["anxiety", "grief", "stress", "anger"]
  },
  {
    slug: "defusion-technique",
    name: "Thought Defusion",
    category: "act",
    description: "Learn to separate yourself from your thoughts. Rather than being caught in thought loops, you observe thoughts as mental events - passing clouds rather than defining truths.",
    benefits: [
      "Reduce the impact of negative thought spirals",
      "Gain distance from rumination",
      "Stop taking thoughts so literally",
      "Build observational awareness of mental activity"
    ],
    howItWorks: [
      "Notice a stressful thought passing through",
      "Add 'I notice I'm having the thought that...'",
      "Sing the thought to a tune (breaks its power)",
      "Imagine thoughts as leaves floating down a stream"
    ],
    questions: [
      "What thought keeps replaying in your mind?",
      "If this thought was music, what genre would it be?",
      "Are you having the thought, or is the thought having you?",
      "What would you think if you weren't the thinker?"
    ],
    relatedTopics: ["anxiety", "depression", "stress", "anger"]
  }
];

export function getTechnique(slug: string): Technique | undefined {
  return techniques.find(t => t.slug === slug);
}

export function getTechniquesByCategory(category: string): Technique[] {
  return techniques.filter(t => t.category === category);
}
