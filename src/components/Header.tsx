import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { useRegion } from "@/hooks/useRegion";
import { getCoursesForRegion } from "@/data/course-utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isIndia } = useRegion();
  const courses = getCoursesForRegion(isIndia);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 hero-gradient rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              NextLadder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Certifications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Certifications
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-card border border-border rounded-xl shadow-xl p-2 min-w-[280px]">
                  <div className="divide-y divide-border">
                    {courses.map((course) => (
                      <Link
                        key={course.id}
                        to={`/course/${course.slug}`}
                        className="flex items-center gap-3 px-3 py-3 hover:bg-muted rounded-lg transition-colors group"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-sm">
                            {course.shortTitle.replace("®", "")}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                            {course.shortTitle}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {course.duration} • {course.level}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-secondary">
                          {course.currencySymbol}
                          {course.price.toLocaleString()}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border">
                    <Link
                      to="/courses"
                      className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      View All Courses
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              All Courses
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2 text-foreground hover:bg-muted rounded-lg font-medium transition-colors">
              Login
            </button>
            <button className="px-6 py-2 hero-gradient text-primary-foreground hover:opacity-90 rounded-lg font-semibold transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-2">
                Certifications
              </p>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.slug}`}
                  className="flex items-center justify-between px-2 py-3 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">
                        {course.shortTitle.replace("®", "")}
                      </span>
                    </div>
                    <span className="font-medium text-foreground">
                      {course.shortTitle}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-secondary">
                    {course.currencySymbol}
                    {course.price.toLocaleString()}
                  </span>
                </Link>
              ))}
              <Link
                to="/courses"
                className="text-primary font-medium py-2 px-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                View All Courses →
              </Link>
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <button className="w-full px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 hero-gradient text-primary-foreground hover:opacity-90 rounded-lg font-semibold transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
