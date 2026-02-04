export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  priceINR: number;
  priceUSD: number;
  originalPriceINR: number;
  originalPriceUSD: number;
  rating: number;
  reviews: number;
  enrolled: number;
  image: string;
  badge: string;
  highlights: string[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  eligibility: string[];
  careerOutcomes: string[];
  features: string[];
}

export const courses: Course[] = [
  {
    id: 'pmp',
    slug: 'pmp-certification',
    title: 'PMP® Certification Training',
    shortTitle: 'PMP®',
    description: 'Become a certified Project Management Professional with our comprehensive PMP® training program.',
    longDescription: 'Master project management with our industry-leading PMP® certification course. Learn the PMBOK® Guide 7th Edition, agile methodologies, and predictive approaches. Our course includes 35 contact hours, mock exams, and personalized mentorship.',
    duration: '8 Weeks',
    level: 'Intermediate',
    priceINR: 45000,
    priceUSD: 549,
    originalPriceINR: 75000,
    originalPriceUSD: 899,
    rating: 4.8,
    reviews: 12450,
    enrolled: 85000,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    badge: 'Best Seller',
    highlights: [
      '35 PDUs/Contact Hours',
      'PMBOK® Guide 7th Edition',
      'Agile & Predictive Approaches',
      '8 Full-length Mock Exams',
      '24/7 Expert Support'
    ],
    curriculum: [
      {
        title: 'Project Management Fundamentals',
        topics: ['Introduction to PM', 'Project Life Cycle', 'Stakeholder Management', 'Project Charter']
      },
      {
        title: 'Predictive Methodologies',
        topics: ['Scope Management', 'Schedule Management', 'Cost Management', 'Quality Management']
      },
      {
        title: 'Agile Practices',
        topics: ['Agile Principles', 'Scrum Framework', 'Kanban', 'Hybrid Approaches']
      },
      {
        title: 'Exam Preparation',
        topics: ['Practice Questions', 'Mock Exams', 'Exam Strategies', 'Application Support']
      }
    ],
    eligibility: [
      '4-year degree with 36 months of project leadership experience',
      'OR High school diploma with 60 months of project leadership experience',
      '35 hours of project management education'
    ],
    careerOutcomes: [
      'Project Manager',
      'Senior Project Manager',
      'Program Manager',
      'PMO Director'
    ],
    features: [
      'Live Interactive Sessions',
      'Recorded Videos',
      'Case Studies',
      'Application Assistance',
      '1-Year Access'
    ]
  },
  {
    id: 'pgmp',
    slug: 'pgmp-certification',
    title: 'PgMP® Certification Training',
    shortTitle: 'PgMP®',
    description: 'Advance your career with Program Management Professional certification for senior leaders.',
    longDescription: 'Elevate your leadership skills with PgMP® certification. This advanced program covers program lifecycle management, benefits realization, and strategic alignment. Perfect for experienced project managers ready to lead multiple related projects.',
    duration: '12 Weeks',
    level: 'Expert',
    priceINR: 85000,
    priceUSD: 999,
    originalPriceINR: 125000,
    originalPriceUSD: 1499,
    rating: 4.9,
    reviews: 3200,
    enrolled: 15000,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    badge: 'Premium',
    highlights: [
      'For Senior Program Managers',
      'Strategic Program Management',
      'Benefits Realization',
      'Executive Mentorship',
      'Panel Interview Prep'
    ],
    curriculum: [
      {
        title: 'Program Strategy Alignment',
        topics: ['Strategic Planning', 'Program Roadmap', 'Stakeholder Engagement', 'Governance']
      },
      {
        title: 'Program Life Cycle',
        topics: ['Program Definition', 'Program Delivery', 'Program Closure', 'Transition Management']
      },
      {
        title: 'Benefits Management',
        topics: ['Benefits Identification', 'Benefits Analysis', 'Benefits Delivery', 'Benefits Sustainment']
      },
      {
        title: 'Exam & Panel Preparation',
        topics: ['Written Exam Prep', 'Panel Interview Simulation', 'Experience Documentation', 'Application Review']
      }
    ],
    eligibility: [
      '4-year degree with 4 years of project management experience',
      'AND 4 years of program management experience',
      'PMP® certification recommended'
    ],
    careerOutcomes: [
      'Program Director',
      'VP of Project Management',
      'Chief Operating Officer',
      'Portfolio Manager'
    ],
    features: [
      'Executive Coaching',
      'Panel Interview Practice',
      'Application Review',
      'Lifetime Community Access',
      'Experience Documentation Support'
    ]
  },
  {
    id: 'acp',
    slug: 'acp-certification',
    title: 'PMI-ACP® Certification Training',
    shortTitle: 'PMI-ACP®',
    description: 'Master Agile methodologies and become a certified Agile practitioner.',
    longDescription: 'Become proficient in agile practices with PMI-ACP® certification. Learn Scrum, Kanban, Lean, XP, and other agile methodologies. This comprehensive course prepares you for real-world agile implementations and the certification exam.',
    duration: '6 Weeks',
    level: 'Intermediate',
    priceINR: 35000,
    priceUSD: 429,
    originalPriceINR: 55000,
    originalPriceUSD: 649,
    rating: 4.7,
    reviews: 8900,
    enrolled: 52000,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop',
    badge: 'Trending',
    highlights: [
      '21 PDUs/Contact Hours',
      'All Agile Frameworks',
      'Scrum, Kanban, XP, Lean',
      '6 Mock Exams',
      'Real Agile Projects'
    ],
    curriculum: [
      {
        title: 'Agile Principles & Mindset',
        topics: ['Agile Manifesto', 'Agile Principles', 'Servant Leadership', 'Self-Organizing Teams']
      },
      {
        title: 'Agile Frameworks',
        topics: ['Scrum Deep Dive', 'Kanban System', 'Extreme Programming', 'Lean Principles']
      },
      {
        title: 'Agile Planning & Estimation',
        topics: ['User Stories', 'Story Points', 'Velocity', 'Release Planning']
      },
      {
        title: 'Continuous Improvement',
        topics: ['Retrospectives', 'Metrics & KPIs', 'Scaling Agile', 'Exam Preparation']
      }
    ],
    eligibility: [
      '21 contact hours of training in agile practices',
      '12 months of general project experience',
      '8 months of agile project experience'
    ],
    careerOutcomes: [
      'Agile Coach',
      'Scrum Master',
      'Agile Project Manager',
      'Product Owner'
    ],
    features: [
      'Hands-on Agile Projects',
      'Sprint Simulations',
      'Tool Training',
      'Interview Preparation',
      '6-Month Access'
    ]
  },
  {
    id: 'rmp',
    slug: 'rmp-certification',
    title: 'PMI-RMP® Certification Training',
    shortTitle: 'PMI-RMP®',
    description: 'Specialize in project risk management with PMI-RMP® certification.',
    longDescription: 'Become a specialist in project risk management. Learn to identify, analyze, and mitigate risks effectively. This certification validates your expertise in risk management processes and positions you as a valuable asset to any organization.',
    duration: '6 Weeks',
    level: 'Advanced',
    priceINR: 40000,
    priceUSD: 479,
    originalPriceINR: 60000,
    originalPriceUSD: 699,
    rating: 4.6,
    reviews: 2100,
    enrolled: 12000,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    badge: 'Specialized',
    highlights: [
      '30 PDUs/Contact Hours',
      'Risk Management Framework',
      'Quantitative Analysis',
      'Monte Carlo Simulation',
      'Industry Case Studies'
    ],
    curriculum: [
      {
        title: 'Risk Strategy & Planning',
        topics: ['Risk Management Planning', 'Risk Governance', 'Stakeholder Risk Attitude', 'Risk Categories']
      },
      {
        title: 'Risk Identification',
        topics: ['Risk Identification Techniques', 'Risk Register', 'Risk Breakdown Structure', 'SWOT Analysis']
      },
      {
        title: 'Risk Analysis',
        topics: ['Qualitative Analysis', 'Quantitative Analysis', 'Expected Monetary Value', 'Sensitivity Analysis']
      },
      {
        title: 'Risk Response & Monitoring',
        topics: ['Response Strategies', 'Contingency Planning', 'Risk Monitoring', 'Risk Reporting']
      }
    ],
    eligibility: [
      '4-year degree with 3 years of risk management experience',
      'OR Secondary degree with 5 years of risk management experience',
      '30 hours of risk management education'
    ],
    careerOutcomes: [
      'Risk Manager',
      'Risk Analyst',
      'Enterprise Risk Manager',
      'Risk Consultant'
    ],
    features: [
      'Risk Tools Training',
      'Case Studies',
      'Templates & Checklists',
      'Expert Mentoring',
      '6-Month Access'
    ]
  },
  {
    id: 'pfmp',
    slug: 'pfmp-certification',
    title: 'PfMP® Certification Training',
    shortTitle: 'PfMP®',
    description: 'Lead portfolio management and align projects with organizational strategy.',
    longDescription: 'Master portfolio management with PfMP® certification. Learn to manage and optimize project portfolios, align with business strategy, and maximize organizational value. This elite certification is for senior executives and portfolio managers.',
    duration: '10 Weeks',
    level: 'Expert',
    priceINR: 95000,
    priceUSD: 1149,
    originalPriceINR: 140000,
    originalPriceUSD: 1699,
    rating: 4.9,
    reviews: 890,
    enrolled: 5000,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
    badge: 'Elite',
    highlights: [
      'Executive Level Certification',
      'Strategic Portfolio Alignment',
      'Value Optimization',
      'Governance Frameworks',
      'Panel Interview Coaching'
    ],
    curriculum: [
      {
        title: 'Portfolio Strategic Management',
        topics: ['Strategic Alignment', 'Portfolio Roadmap', 'Resource Optimization', 'Value Measurement']
      },
      {
        title: 'Portfolio Governance',
        topics: ['Governance Framework', 'Decision Making', 'Portfolio Oversight', 'Risk Governance']
      },
      {
        title: 'Portfolio Performance',
        topics: ['Performance Metrics', 'Portfolio Balancing', 'Component Management', 'Reporting']
      },
      {
        title: 'Exam & Panel Preparation',
        topics: ['Written Exam Strategies', 'Panel Interview Practice', 'Experience Summary', 'Application Review']
      }
    ],
    eligibility: [
      '8 years of professional business experience',
      '10,500 hours of portfolio management experience',
      'PMP® or PgMP® recommended'
    ],
    careerOutcomes: [
      'Portfolio Director',
      'VP Strategy',
      'C-Suite Executive',
      'Management Consultant'
    ],
    features: [
      'Executive Mentorship',
      'Panel Simulation',
      'Experience Documentation',
      'Strategic Workshops',
      'Lifetime Alumni Access'
    ]
  },
  {
    id: 'capm',
    slug: 'capm-certification',
    title: 'CAPM® Certification Training',
    shortTitle: 'CAPM®',
    description: 'Start your project management career with CAPM® foundation certification.',
    longDescription: 'Begin your project management journey with CAPM® certification. Perfect for beginners, this course covers fundamental project management concepts based on PMBOK® Guide. Build a strong foundation for your PM career.',
    duration: '4 Weeks',
    level: 'Beginner',
    priceINR: 25000,
    priceUSD: 299,
    originalPriceINR: 40000,
    originalPriceUSD: 449,
    rating: 4.7,
    reviews: 15600,
    enrolled: 120000,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    badge: 'Entry Level',
    highlights: [
      '23 PDUs/Contact Hours',
      'PMBOK® Guide Foundation',
      'No Experience Required',
      '5 Mock Exams',
      'Career Guidance'
    ],
    curriculum: [
      {
        title: 'Project Management Basics',
        topics: ['What is Project Management', 'Project vs Operations', 'PM Roles', 'Project Success Factors']
      },
      {
        title: 'Project Environment',
        topics: ['Organizational Structures', 'Project Life Cycles', 'Process Groups', 'Knowledge Areas']
      },
      {
        title: 'Core Knowledge Areas',
        topics: ['Integration Management', 'Scope & Schedule', 'Cost & Quality', 'Resource Management']
      },
      {
        title: 'Exam Preparation',
        topics: ['Study Strategies', 'Practice Tests', 'Application Process', 'Exam Tips']
      }
    ],
    eligibility: [
      'Secondary degree (high school diploma)',
      '23 hours of project management education',
      'No project management experience required'
    ],
    careerOutcomes: [
      'Junior Project Manager',
      'Project Coordinator',
      'Project Administrator',
      'Team Lead'
    ],
    features: [
      'Self-Paced Learning',
      'Live Q&A Sessions',
      'Practice Tests',
      'Application Support',
      '3-Month Access'
    ]
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};
