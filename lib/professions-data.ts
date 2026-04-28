export interface Profession {
  slug: string;
  name: string;
  description: string;
  stressFactors: string[];
  challenges: string[];
  techniques: string[];
  tips: string[];
}

export const professions: Profession[] = [
  {
    slug: "software-developer",
    name: "Software Developer",
    description: "High-pressure deadlines, complex problem-solving, and constant learning demands create unique stress patterns for developers. Burnout from imposter syndrome and sedentary work is common.",
    stressFactors: [
      "Imposter syndrome and constant technology updates",
      "Sedentary lifestyle and screen fatigue",
      "Tight deadlines and technical debt pressure",
      "Remote work isolation"
    ],
    challenges: [
      "Finding time for self-care between code reviews",
      "Managing burnout from continuous learning",
      "Dealing with perfectionism in code",
      "Work-life boundary issues"
    ],
    techniques: [
      "Cognitive reframing for perfectionism",
      "Somatic anchoring for deadline anxiety",
      "Behavioral activation for social connection"
    ],
    tips: [
      "Use the Pomodoro technique with stress breaks",
      "Schedule walks between coding sessions",
      "Practice code reviews without self-criticism"
    ]
  },
  {
    slug: "entrepreneur",
    name: "Entrepreneur",
    description: "Founders face relentless pressure from investors, employees, and market demands. The responsibility of everyone's livelihoods creates chronic stress that's often hidden.",
    stressFactors: [
      "Financial uncertainty and investor pressure",
      "Employee responsibility and payroll",
      "Decision fatigue from constant demands",
      "Isolation at the top"
    ],
    challenges: [
      "Difficulty disconnecting from the business",
      "Managing failure and rejection",
      "Building a support network",
      "Maintaining physical health"
    ],
    techniques: [
      "Values clarification for life priorities",
      "Acceptance practice for uncertainty",
      "Thought defusion for failure fears"
    ],
    tips: [
      "Schedule dedicated non-work hours",
      "Hire help for non-core tasks",
      "Build an entrepreneur peer group"
    ]
  },
  {
    slug: "executive",
    name: "Executive / Manager",
    description: "Leaders carry the weight of organizational decisions, team performance, and stakeholder expectations. The constant need to perform creates high cortisol levels.",
    stressFactors: [
      "24/7 responsibility and accessibility",
      "Difficult people decisions",
      "Meeting overload and travel fatigue",
      "Maintaining strategic vision"
    ],
    challenges: [
      "Delegating without micromanaging",
      "Managing up and down simultaneously",
      "Making decisions with incomplete data",
      "Leadership loneliness"
    ],
    techniques: [
      "Somatic anchoring before important meetings",
      "Cognitive reframing for control issues",
      "Values clarification for priorities"
    ],
    tips: [
      "Block time for strategic thinking",
      "Practice being present in conversations",
      "Build a CEO peer advisory group"
    ]
  },
  {
    slug: "remote-worker",
    name: "Remote Worker",
    description: "Working from home blurs boundaries between professional and personal life. The lack of physical separation and social interaction creates unique stressors.",
    stressFactors: [
      "Boundary erosion between work and home",
      "Isolation and lack of casual interaction",
      "Overworking without natural stopping cues",
      "Communication friction"
    ],
    challenges: [
      "Creating dedicated workspace",
      "Staying motivated without supervision",
      "Maintaining work-life separation",
      "Building relationships remotely"
    ],
    techniques: [
      "Behavioral activation for routine",
      "Somatic anchoring for presence",
      "Acceptance practice for uncertainty"
    ],
    tips: [
      "Create a distinct morning routine",
      "Use commute替代 (walk, coffee) to separate work",
      "Schedule virtual co-working sessions"
    ]
  },
  {
    slug: "sales-professional",
    name: "Sales Professional",
    description: "Sales roles involve constant rejection, quota pressure, and emotional labor. The rollercoaster of wins and losses creates emotional volatility.",
    stressFactors: [
      "Rejection and 'no' fatigue",
      "Quota pressure and commission anxiety",
      "Emotional labor of positivity",
      "Unpredictable income"
    ],
    challenges: [
      "Not taking rejection personally",
      "Managing pipeline anxiety",
      "Maintaining motivation through slumps",
      "Work-life balance with flexible hours"
    ],
    techniques: [
      "Cognitive reframing for rejection",
      "Thought defusion for negative self-talk",
      "Values clarification for long-term goals"
    ],
    tips: [
      "Focus on help, not sales",
      "Celebrate small wins daily",
      "Separate identity from numbers"
    ]
  },
  {
    slug: "healthcare-professional",
    name: "Healthcare Professional",
    description: "Doctors, nurses, and medical staff face life-and-death decisions, emotional trauma, and shift work. Compassion fatigue and burnout are endemic to the profession.",
    stressFactors: [
      "Life-and-death decision making",
      "Shift work and irregular hours",
      "Emotional trauma exposure",
      "Systemic healthcare pressures"
    ],
    challenges: [
      "Processing difficult patient outcomes",
      "Setting boundaries with patients",
      "Managing exhaustion from long shifts",
      "Staying emotionally present"
    ],
    techniques: [
      "Somatic grounding after difficult cases",
      "Acceptance practice for what you can't control",
      "Behavioral activation for self-care"
    ],
    tips: [
      "Use transition rituals between work and home",
      "Debrief difficult cases with peers",
      "Prioritize sleep hygiene"
    ]
  },
  {
    slug: "freelancer",
    name: "Freelancer",
    description: "Independent workers juggle multiple clients, handle all business functions, and deal with feast-or-famine income cycles. Independence comes with isolation.",
    stressFactors: [
      "Income volatility and uncertainty",
      "Client management and scope creep",
      "No benefits or job security",
      "Social isolation"
    ],
    challenges: [
      "Setting rates and negotiating",
      "Finding new clients consistently",
      "Self-motivation without oversight",
      "Handling difficult clients"
    ],
    techniques: [
      "Values clarification for ideal work",
      "Cognitive reframing for rejection",
      "Behavioral activation for business development"
    ],
    tips: [
      "Maintain a client diversification target",
      "Create systems for outreach",
      "Build asynchronous communication habits"
    ]
  },
  {
    slug: "tradesperson",
    name: "Tradesperson",
    description: "Electricians, plumbers, carpenters, and construction workers face physical demands, injury risk, and seasonal income fluctuations. Mental health is often overlooked.",
    stressFactors: [
      "Physical exhaustion and injury risk",
      "Seasonal or economic downturns",
      "Lack of mental health awareness",
      "Client relationship management"
    ],
    challenges: [
      "Stigma around mental health in trades",
      "Physical recovery and self-care",
      "Managing business aspects",
      "Work-life with physical demands"
    ],
    techniques: [
      "Somatic anchoring for physical stress",
      "Cognitive reframing for self-worth",
      "Behavioral activation for rest"
    ],
    tips: [
      "Prioritize sleep and recovery",
      "Talk to fellow tradespeople",
      "Build emergency financial buffer"
    ]
  }
];

export function getProfession(slug: string): Profession | undefined {
  return professions.find(p => p.slug === slug);
}
