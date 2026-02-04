import { ArrowRight, Star, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden -mt-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Rated 4.8/5 by 150,000+ learners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accelerate Your
              <span className="block text-secondary">Project Management</span>
              Career
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Get certified in PMP®, PgMP®, PMI-ACP® and more with
              industry-leading training programs. Join 500,000+ professionals
              who transformed their careers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <button className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-glow font-semibold text-lg rounded-lg transition-colors group">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold text-lg rounded-lg bg-transparent transition-colors">
                Talk to Advisor
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-white/90">500K+ Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-white/90">PMI® Authorized</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-white/90">Flexible Learning</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    95%
                  </div>
                  <p className="text-white/80 text-sm">Pass Rate</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    45%
                  </div>
                  <p className="text-white/80 text-sm">Avg. Salary Hike</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    150+
                  </div>
                  <p className="text-white/80 text-sm">Countries</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    24/7
                  </div>
                  <p className="text-white/80 text-sm">Support</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-float">
              🎯 40% OFF
            </div>
          </div>
        </div>
      </div>

      {/* Company logos */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-white/60 text-sm mb-6">
            Our alumni work at leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <span className="text-white font-semibold text-lg">Google</span>
            <span className="text-white font-semibold text-lg">Microsoft</span>
            <span className="text-white font-semibold text-lg">Amazon</span>
            <span className="text-white font-semibold text-lg">IBM</span>
            <span className="text-white font-semibold text-lg">Deloitte</span>
            <span className="text-white font-semibold text-lg">Accenture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
