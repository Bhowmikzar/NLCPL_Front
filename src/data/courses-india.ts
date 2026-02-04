export interface CourseIndia {
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
  currency: 'INR';
  currencySymbol: '₹';
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

export const coursesIndia: CourseIndia[] = [
  {
    id: 'pmp-in',
    slug: 'pmp-certification',
    title: 'PMP® Certification Training',
    shortTitle: 'PMP®',
    description: 'Become a certified Project Management Professional with our comprehensive PMP® training program.',
    longDescription: 'Master project management with our industry-leading PMP® certification course. Learn the PMBOK® Guide 7th Edition, agile methodologies, and predictive approaches. Our course includes 35 contact hours, mock exams, and personalized mentorship.',
    duration: '8 Weeks',
    level: 'Intermediate',
    price: 45000,
    originalPrice: 75000,
    currency: 'INR',
    currencySymbol: '₹',
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
    id: 'capm-in',
    slug: 'capm-certification',
    title: 'CAPM® Certification Training',
    shortTitle: 'CAPM®',
    description: 'Start your project management career with CAPM® foundation certification.',
    longDescription: 'Begin your project management journey with CAPM® certification. Perfect for beginners, this course covers fundamental project management concepts based on PMBOK® Guide. Build a strong foundation for your PM career.',
    duration: '4 Weeks',
    level: 'Beginner',
    price: 25000,
    originalPrice: 40000,
    currency: 'INR',
    currencySymbol: '₹',
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
  },
  {
    id: 'acp-in',
    slug: 'acp-certification',
    title: 'PMI-ACP® Certification Training',
    shortTitle: 'PMI-ACP®',
    description: 'Master Agile methodologies and become a certified Agile practitioner.',
    longDescription: 'Become proficient in agile practices with PMI-ACP® certification. Learn Scrum, Kanban, Lean, XP, and other agile methodologies. This comprehensive course prepares you for real-world agile implementations and the certification exam.',
    duration: '6 Weeks',
    level: 'Intermediate',
    price: 35000,
    originalPrice: 55000,
    currency: 'INR',
    currencySymbol: '₹',
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
  }
];

export const getCourseBySlugIndia = (slug: string): CourseIndia | undefined => {
  return coursesIndia.find(course => course.slug === slug);
};
