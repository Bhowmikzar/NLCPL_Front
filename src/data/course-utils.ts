import {
  CourseIndia,
  coursesIndia,
  getCourseBySlugIndia,
} from "./courses-india";
import {
  CourseInternational,
  coursesInternational,
  getCourseBySlugInternational,
} from "./courses-international";

// Unified course type for components
export type RegionCourse = CourseIndia | CourseInternational;

export const getCoursesForRegion = (isIndia: boolean): RegionCourse[] => {
  return isIndia ? coursesIndia : coursesInternational;
};

export const getCourseBySlugForRegion = (
  slug: string,
  isIndia: boolean
): RegionCourse | undefined => {
  return isIndia
    ? getCourseBySlugIndia(slug)
    : getCourseBySlugInternational(slug);
};

export const formatCoursePrice = (course: RegionCourse): string => {
  return new Intl.NumberFormat(course.currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency: course.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(course.price);
};

export const formatCourseOriginalPrice = (course: RegionCourse): string => {
  return new Intl.NumberFormat(course.currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency: course.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(course.originalPrice);
};
