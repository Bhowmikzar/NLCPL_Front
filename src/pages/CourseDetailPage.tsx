import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getCourseBySlugForRegion,
  formatCoursePrice,
  formatCourseOriginalPrice,
} from "@/data/course-utils";
import { useRegion } from "@/hooks/useRegion";
import {
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const CourseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isIndia } = useRegion();
  const course = getCourseBySlugForRegion(slug || "", isIndia);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Course Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The course you're looking for doesn't exist in your region.
          </p>
          <Link to="/courses">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View All Courses
            </button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleEnrollNow = () => {
    navigate(`/checkout/${course.slug}`);
  };

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                    {course.badge}
                  </span>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white/10 border border-white/20 text-white">
                    {course.level}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {course.title}
                </h1>

                <p className="text-lg text-white/90">
                  {course.longDescription}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold">{course.rating}</span>
                    <span>({course.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.enrolled.toLocaleString()}+ enrolled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-sm">PMI® Authorized</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">100% Pass Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right - Enrollment Card */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-6">
                    {/* Price */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-foreground">
                        {formatCoursePrice(course)}
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatCourseOriginalPrice(course)}
                      </span>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                        {discountPercent}% OFF
                      </span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={handleEnrollNow}
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-glow font-bold text-lg rounded-lg transition-colors group"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-sm text-muted-foreground">
                      30-Day Money-Back Guarantee
                    </p>

                    {/* Features */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl text-center card-elevated"
                >
                  <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-medium text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Course Curriculum
              </h2>

              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleModule(index)}
                      className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-foreground">
                            Module {index + 1}: {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {module.topics.length} topics
                          </p>
                        </div>
                      </div>
                      {expandedModules.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>

                    {expandedModules.includes(index) && (
                      <div className="px-6 pb-6">
                        <ul className="space-y-3 ml-14">
                          {module.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-center gap-3 text-muted-foreground"
                            >
                              <Play className="w-4 h-4 text-accent" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Career Outcomes */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Eligibility */}
              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {course.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Outcomes */}
              <div className="bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Career Outcomes
                </h3>
                <ul className="space-y-4">
                  {course.careerOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have achieved their
              certification goals with NextLadder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleEnrollNow}
                className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-glow font-bold text-lg rounded-lg transition-colors group"
              >
                Enroll Now - {formatCoursePrice(course)}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold text-lg rounded-lg bg-transparent transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
