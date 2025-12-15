'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  date: string;
}

const TestimonialsHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Raj Patel',
    role: 'Shop Owner',
    company: 'Local Retail Store',
    rating: 5,
    text: 'Been using Krishan Stamps for 3 years now. Quick turnaround, good quality, and reasonable prices. They sorted out my inventory stamp on the same day I needed it. Great service!',
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'Meera Singh',
    role: 'Office Manager',
    company: 'Small Finance Office',
    rating: 5,
    text: 'We needed 20 custom stamps for our office. They completed the order on time with perfect quality. The team was friendly and easy to work with. Recommended to colleagues!',
    date: 'October 2024'
  },
  {
    id: 3,
    name: 'Vikram Kumar',
    role: 'Store Manager',
    company: 'Clothing Boutique',
    rating: 5,
    text: 'Got our shop stamp made here. Simple process, good quality, and the price was fair. They understood exactly what we needed. Will definitely order again.',
    date: 'September 2024'
  },
  {
    id: 4,
    name: 'Priya Verma',
    role: 'Accountant',
    company: 'Small Accounting Firm',
    rating: 5,
    text: 'Got a custom seal made for our documents. Very professional work. They made sure the design was exactly what we wanted. Good attention to detail.',
    date: 'August 2024'
  },
  {
    id: 5,
    name: 'Ashok Sharma',
    role: 'Business Owner',
    company: 'Import-Export Business',
    rating: 5,
    text: 'Needed stamps for shipping documents urgently. They helped me out within a few hours. Been a loyal customer since then. Always reliable!',
    date: 'July 2024'
  },
  {
    id: 6,
    name: 'Divya Nair',
    role: 'Consultant',
    company: 'Self-Employed',
    rating: 5,
    text: 'Got my professional stamp designed here. The team gave me good suggestions and made it exactly as I wanted. Affordable and quick service. Very happy with the result.',
    date: 'June 2024'
  }];


  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Real experiences from businesses across Delhi NCR
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-surface rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) =>
                    <Star key={i} size={20} className="text-warning fill-current" />
                  )}
                </div>

                <blockquote className="font-body text-lg text-text-primary leading-relaxed mb-6">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-headline font-bold text-xl text-text-primary">
                      {currentTestimonial.name}
                    </div>
                    <div className="font-body text-sm text-text-secondary">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                    <div className="font-body text-xs text-text-secondary mt-1">
                      {currentTestimonial.date}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Previous testimonial">
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Next testimonial">
                      <ChevronRight size={20} />
                    </button>
                </div>
              </div>
            </div>
          </div>          {/* Testimonial Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface rounded-xl p-6 text-center shadow-md">
            <div className="font-headline font-bold text-4xl text-primary mb-2">4.8/5</div>
            <div className="font-body text-sm text-text-secondary">Average Rating</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center shadow-md">
            <div className="font-headline font-bold text-4xl text-primary mb-2">5000+</div>
            <div className="font-body text-sm text-text-secondary">Happy Customers</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center shadow-md">
            <div className="font-headline font-bold text-4xl text-primary mb-2">98%</div>
            <div className="font-body text-sm text-text-secondary">Satisfaction Rate</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center shadow-md">
            <div className="font-headline font-bold text-4xl text-primary mb-2">25+</div>
            <div className="font-body text-sm text-text-secondary">Years Trusted</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsHub;