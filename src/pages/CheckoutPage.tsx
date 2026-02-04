import { useState } from "react";
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
  CheckCircle,
  Shield,
  Lock,
  ArrowLeft,
  Clock,
  Award,
  ExternalLink,
} from "lucide-react";

const CheckoutPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isIndia } = useRegion();
  const course = getCourseBySlugForRegion(slug || "", isIndia);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    couponCode: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Course Not Found
          </h1>
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyCoupon = () => {
    if (formData.couponCode.toUpperCase() === "CERTIFY20") {
      setCouponApplied(true);
    }
  };

  const getDiscountedPrice = () => {
    const basePrice = course.price;
    return couponApplied ? Math.round(basePrice * 0.8) : basePrice;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/payment/initiate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            region: isIndia ? "IN" : "OUT",

            amount: getDiscountedPrice(),
            currency: isIndia ? "INR" : "USD",
            course: course.shortTitle,
          }),
        }
      );

      const data = await res.json();

      // 🌍 Outside India → PayPal
      if (data.gateway === "PayPal" && data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }

      // 🇮🇳 India → CCAvenue (error expected until domain approved)
      if (data.gateway === "CCAvenue" && data.action) {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = data.action;

        const encInput = document.createElement("input");
        encInput.type = "hidden";
        encInput.name = "encRequest";
        encInput.value = data.encRequest;

        const accessInput = document.createElement("input");
        accessInput.type = "hidden";
        accessInput.name = "access_code";
        accessInput.value = data.accessCode;

        form.appendChild(encInput);
        form.appendChild(accessInput);

        document.body.appendChild(form);
        form.submit();
      }
    } catch (err) {
      console.error("Payment initiation failed", err);
      alert("Payment initiation failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatDisplayPrice = (amount: number): string => {
    return new Intl.NumberFormat(
      course.currency === "INR" ? "en-IN" : "en-US",
      {
        style: "currency",
        currency: course.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    ).format(amount);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Enrollment Successful!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Congratulations! You're now enrolled in {course.title}. Check your
              email for login credentials and course access details.
            </p>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <h3 className="font-bold text-foreground mb-4">Order Details</h3>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Course:</span>
                <span className="font-medium text-foreground">
                  {course.shortTitle}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Amount Paid:</span>
                <span className="font-bold text-foreground">
                  {formatDisplayPrice(getDiscountedPrice())}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID:</span>
                <span className="font-medium text-foreground">
                  CP-{Date.now().toString().slice(-8)}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Access Course
              </button>
              <Link to="/">
                <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link
            to={`/course/${course.slug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </Link>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-foreground mb-6">
                  Checkout
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Your Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-foreground"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder={
                            isIndia ? "+91 98765 43210" : "+1 (555) 123-4567"
                          }
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Have a Coupon?
                    </h3>
                    <div className="flex gap-2">
                      <input
                        name="couponCode"
                        value={formData.couponCode}
                        onChange={handleInputChange}
                        placeholder="Enter coupon code"
                        disabled={couponApplied}
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                      />
                      <button
                        type="button"
                        onClick={applyCoupon}
                        disabled={couponApplied}
                        className="px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors disabled:opacity-50"
                      >
                        {couponApplied ? "Applied!" : "Apply"}
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-sm text-accent mt-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Coupon CERTIFY20 applied - 20% discount!
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Try: CERTIFY20 for 20% off
                    </p>
                  </div>

                  {/* Security & Payment Info */}
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          Secure Payment Gateway
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          You will be redirected to{" "}
                          {isIndia ? "CCAvenue" : "PayPal"} to complete your
                          payment securely. Your payment details are never
                          stored on our servers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs">256-bit SSL Encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs">PCI DSS Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full px-6 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-glow font-bold text-lg rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Redirecting to Payment...
                      </span>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Proceed to Secure Payment -{" "}
                        {formatDisplayPrice(getDiscountedPrice())}
                        <ExternalLink className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    By proceeding, you agree to our Terms of Service and Privacy
                    Policy. You will be redirected to{" "}
                    {isIndia ? "CCAvenue" : "PayPal"} to complete your payment.
                  </p>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Order Summary
                </h2>

                {/* Course Preview */}
                <div className="flex gap-4 pb-4 border-b border-border">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground mb-1">
                      {course.badge}
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {course.shortTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {course.title}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="py-4 border-b border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration} Duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>PMI® Certification Prep</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4" />
                    <span>Lifetime Access</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="py-4 space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Original Price</span>
                    <span className="line-through">
                      {formatCourseOriginalPrice(course)}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Discount</span>
                    <span className="text-green-600">
                      -{formatDisplayPrice(course.originalPrice - course.price)}
                    </span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Coupon (CERTIFY20)</span>
                      <span className="text-green-600">
                        -{formatDisplayPrice(Math.round(course.price * 0.2))}
                      </span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      {formatDisplayPrice(getDiscountedPrice())}
                    </span>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        30-Day Money-Back Guarantee
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Not satisfied? Get a full refund within 30 days, no
                        questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
