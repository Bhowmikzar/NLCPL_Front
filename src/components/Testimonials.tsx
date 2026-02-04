import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Project Manager",
    company: "Infosys",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    content:
      "The PMP® training was exceptional. The instructors were knowledgeable and the mock exams were very close to the actual exam. Passed on my first attempt!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    company: "Amazon",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    content:
      "NextLadder helped me achieve my PgMP® certification. The panel interview preparation was incredibly valuable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Agile Coach",
    company: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    content:
      "The PMI-ACP® course covered all agile frameworks in depth. The hands-on exercises really helped solidify my understanding.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who have transformed their careers
            with our certification programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl card-elevated relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
