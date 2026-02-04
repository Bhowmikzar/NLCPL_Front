import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import {
  RegionCourse,
  formatCoursePrice,
  formatCourseOriginalPrice,
} from "../data/course-utils";

interface CourseCardProps {
  course: RegionCourse;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const getBadgeClasses = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-primary text-primary-foreground";
      case "Premium":
      case "Elite":
        return "bg-secondary text-secondary-foreground";
      case "Trending":
        return "border border-border text-foreground bg-card";
      default:
        return "border border-border text-foreground bg-card";
    }
  };

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className="bg-card rounded-xl overflow-hidden card-elevated group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className={`absolute top-4 left-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getBadgeClasses(
            course.badge
          )}`}
        >
          {course.badge}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {course.shortTitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium text-foreground">{course.rating}</span>
            <span>({course.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Enrolled */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{course.enrolled.toLocaleString()}+ enrolled</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <span className="text-2xl font-bold text-foreground">
            {formatCoursePrice(course)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {formatCourseOriginalPrice(course)}
          </span>
          <span className="ml-auto inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
            {discountPercent}% OFF
          </span>
        </div>

        {/* CTA */}
        <Link to={`/course/${course.slug}`}>
          <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors group/btn">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
