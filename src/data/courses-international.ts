export interface CourseInternational {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  price: number;
  originalPrice: number;
  currency: 'USD';
  currencySymbol: '$';
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

export const coursesInternational: CourseInternational[] = [
  {
    id: 'pmp-intl',
    slug: 'pmp-certification',
    title: 'PMP® Certification Training',
    shortTitle: 'PMP®',
    description: 'Become a certified Project Management Professional with our comprehensive PMP® training program.',
    longDescription: 'Master project management with our industry-leading PMP® certification course. Learn the PMBOK® Guide 7th Edition, agile methodologies, and predictive approaches. Our course includes 35 contact hours, mock exams, and personalized mentorship.',
    duration: '8 Weeks',
    level: 'Intermediate',
    price: 549,
    originalPrice: 899,
    currency: 'USD',
    currencySymbol: '$',
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
    id: 'pgmp-intl',
    slug: 'pgmp-certification',
    title: 'PgMP® Certification Training',
    shortTitle: 'PgMP®',
    description: 'Advance your career with Program Management Professional certification for senior leaders.',
    longDescription: 'Elevate your leadership skills with PgMP® certification. This advanced program covers program lifecycle management, benefits realization, and strategic alignment. Perfect for experienced project managers ready to lead multiple related projects.',
    duration: '12 Weeks',
    level: 'Expert',
    price: 999,
    originalPrice: 1499,
    currency: 'USD',
    currencySymbol: '$',
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
    id: 'rmp-intl',
    slug: 'rmp-certification',
    title: 'PMI-RMP® Certification Training',
    shortTitle: 'PMI-RMP®',
    description: 'Specialize in project risk management with PMI-RMP® certification.',
    longDescription: 'Become a specialist in project risk management. Learn to identify, analyze, and mitigate risks effectively. This certification validates your expertise in risk management processes and positions you as a valuable asset to any organization.',
    duration: '6 Weeks',
    level: 'Advanced',
    price: 479,
    originalPrice: 699,
    currency: 'USD',
    currencySymbol: '$',
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
  }
];

export const getCourseBySlugInternational = (slug: string): CourseInternational | undefined => {
  return coursesInternational.find(course => course.slug === slug);
};
