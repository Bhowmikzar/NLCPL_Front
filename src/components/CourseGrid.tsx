import CourseCard from "./CourseCard";
import { getCoursesForRegion } from "@/data/course-utils";
import { useRegion } from "@/hooks/useRegion";

const CourseGrid = () => {
  const { isIndia } = useRegion();
  const courses = getCoursesForRegion(isIndia);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            PMI® Authorized Partner
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Industry-Leading Certification Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive range of PMI® certification courses
            designed by industry experts with hands-on project experience.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
