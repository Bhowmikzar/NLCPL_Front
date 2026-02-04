import { BookOpen, Users, Award, Headphones, Video, FileText } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'In-depth content aligned with the latest PMI® standards and exam patterns.'
  },
  {
    icon: Video,
    title: 'Live & Self-Paced',
    description: 'Flexible learning options with live sessions and on-demand video content.'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from certified PMI® professionals with real-world experience.'
  },
  {
    icon: Award,
    title: 'Guaranteed Pass',
    description: '100% money-back guarantee if you don\'t pass on your first attempt.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated support team.'
  },
  {
    icon: FileText,
    title: 'Application Support',
    description: 'Complete guidance for exam application and documentation.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive learning ecosystem is designed to ensure your success 
            from enrollment to certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl card-elevated group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
