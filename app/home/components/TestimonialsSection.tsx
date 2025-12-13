'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Users, Award } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  date: string;
}

const TestimonialsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Kumar Enterprises",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a891c21d-1763296710025.png",
    alt: "Professional Indian businessman in navy blue suit smiling confidently in modern office",
    rating: 5,
    text: "Exceptional quality and service! Krishan Stamps delivered our company seals within the same day. The attention to detail and professional finish exceeded our expectations. Highly recommended for any business needs.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Office Manager",
    company: "Tech Solutions Pvt Ltd",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
    alt: "Professional Indian woman in white blazer with warm smile in corporate office setting",
    rating: 5,
    text: "We've been ordering from Krishan Stamps for over 3 years now. Their consistency in quality and timely delivery makes them our go-to vendor for all stamping requirements. The team is always helpful and accommodating.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Procurement Head",
    company: "Global Traders",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105b96742-1763300606680.png",
    alt: "Confident Indian professional man in grey suit with glasses in modern corporate environment",
    rating: 5,
    text: "Outstanding craftsmanship! The embossing seals we ordered look absolutely premium. Krishan and his team understood our requirements perfectly and delivered exactly what we needed. Great value for money.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "HR Director",
    company: "Sunrise Industries",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d84cd190-1763295718401.png",
    alt: "Professional Indian woman in burgundy blazer with confident expression in office boardroom",
    rating: 5,
    text: "Impressed with their professionalism and quick turnaround time. We needed bulk stamps for our new office setup, and they handled everything smoothly. The quality is top-notch and pricing is very competitive.",
    date: "1 week ago"
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <Star size={24} className="text-warning" />
              <span className="font-body text-2xl font-bold text-text-primary">4.8/5</span>
              <span className="font-body text-text-secondary">from 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star size={24} className="text-warning" />
            <span className="font-body text-2xl font-bold text-text-primary">4.8/5</span>
            <span className="font-body text-text-secondary">from 500+ reviews</span>
          </div>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Trusted by businesses across Delhi NCR for over 12 years
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-surface rounded-lg shadow-xl p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                <path d="M12 34h8l4-8V14H12v12h8zm16 0h8l4-8V14H28v12h8z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) =>
                <Star key={i} size={20} className="text-warning" />
                )}
              </div>

              {/* Text */}
              <p className="font-body text-lg text-text-primary text-center mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].alt}
                    fill
                    className="object-cover" />

                </div>
                <h4 className="font-headline text-xl font-bold text-text-primary">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="font-body text-sm text-text-secondary">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
                <p className="font-body text-xs text-text-secondary mt-1">
                  {testimonials[activeIndex].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-surface text-text-primary rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Previous testimonial">

              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ?
                'bg-primary w-8' : 'bg-border hover:bg-primary/50'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-surface text-text-primary rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Next testimonial">

              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 text-success rounded-full mb-3">
              <CheckCircle size={32} />
            </div>
            <p className="font-body text-sm font-semibold text-text-primary">Verified Reviews</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-3">
              <Users size={32} />
            </div>
            <p className="font-body text-sm font-semibold text-text-primary">5000+ Customers</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-3">
              <Award size={32} />
            </div>
            <p className="font-body text-sm font-semibold text-text-primary">Award Winning</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-warning/10 text-warning rounded-full mb-3">
              <Star size={32} className="text-warning" />
            </div>
            <p className="font-body text-sm font-semibold text-text-primary">Top Rated</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;