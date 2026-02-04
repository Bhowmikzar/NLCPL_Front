import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";
import { useRegion } from "@/hooks/useRegion";
import { getCoursesForRegion } from "@/data/course-utils";

const Footer = () => {
  const { isIndia } = useRegion();
  const courses = getCoursesForRegion(isIndia);

  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">NextLadder</span>
            </Link>
            <p className="text-white/70">
              Empowering professionals worldwide with industry-recognized
              certifications. Your career transformation starts here.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Certifications - Region Based */}
          <div>
            <h4 className="font-bold text-lg mb-4">Certifications</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/course/${course.slug}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {course.shortTitle} Certification
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-white/80" />
                <span className="text-white/70">support@nextladder.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-white/80" />
                <div className="text-white/70">
                  {isIndia ? (
                    <p>+91 1800-123-4567</p>
                  ) : (
                    <p>+1 (888) 123-4567</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white/80" />
                <span className="text-white/70">
                  {isIndia ? "Mumbai, India" : "New York, USA"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 NextLadder. All rights reserved. PMI®, PMP®, PgMP®, CAPM®,
            PMI-ACP®, PMI-RMP®, and PfMP® are registered marks of the Project
            Management Institute, Inc.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/courses"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/courses"
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/courses"
              className="text-white/60 hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
