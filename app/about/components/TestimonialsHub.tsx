'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  image: string;
  alt: string;
  date: string;
}

const TestimonialsHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Business Owner',
    company: 'Sharma Enterprises',
    rating: 5,
    text: 'Krishan Stamps has been our go-to for all stamping needs for the past 5 years. Their quality is unmatched, and the same-day service has saved us multiple times during urgent situations. Highly recommended!',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124bbe54a-1763295891998.png",
    alt: 'Professional Indian woman in business attire with confident smile in modern office setting',
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Procurement Manager',
    company: 'TechCorp Solutions',
    rating: 5,
    text: 'We order stamps in bulk for our multiple offices, and Krishan Stamps consistently delivers on time with perfect quality. Their team understands corporate requirements and provides excellent support.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102f196d8-1763296707783.png",
    alt: 'Middle-aged Indian businessman in formal suit with glasses reviewing documents in corporate office',
    date: 'October 2024'
  },
  {
    id: 3,
    name: 'Dr. Anjali Mehta',
    role: 'Medical Practitioner',
    company: 'Mehta Clinic',
    rating: 5,
    text: 'The custom design service is exceptional. They helped me create a professional stamp that perfectly represents my practice. The attention to detail and personalized consultation made all the difference.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14ed39e6a-1765122859411.png",
    alt: 'Female doctor in white coat with stethoscope smiling warmly in medical clinic environment',
    date: 'September 2024'
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'Legal Consultant',
    company: 'Verma & Associates',
    rating: 5,
    text: 'Quality and precision are crucial in legal documentation. Krishan Stamps understands this perfectly. Their embossing seals are of premium quality, and the service is always professional and reliable.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18f5ee1cc-1763299173298.png",
    alt: 'Professional Indian lawyer in formal attire with law books in traditional office setting',
    date: 'August 2024'
  },
  {
    id: 5,
    name: 'Neha Gupta',
    role: 'Startup Founder',
    company: 'InnovateTech',
    rating: 5,
    text: 'As a startup, we needed quality stamps without breaking the bank. Krishan Stamps provided excellent products at competitive prices. Their team was patient with our design iterations and delivered exactly what we wanted.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14646b0d7-1763300433747.png",
    alt: 'Young Indian entrepreneur woman in casual business wear with laptop in modern startup office',
    date: 'July 2024'
  },
  {
    id: 6,
    name: 'Suresh Patel',
    role: 'Administrative Head',
    company: 'Delhi Public School',
    rating: 5,
    text: 'We have been using their services for our school for over 8 years. From official seals to date stamps, everything is of top quality. Their understanding of institutional requirements is commendable.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12946c7bf-1763300744525.png",
    alt: 'Senior Indian administrator in formal attire with warm smile in educational institution office',
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
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-surface rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface/90 to-transparent" />
              </div>

              <div className="md:col-span-3 p-8 md:p-12">
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
            </div>
          </div>

          {/* Testimonial Indicators */}
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
            <div className="font-headline font-bold text-4xl text-primary mb-2">12+</div>
            <div className="font-body text-sm text-text-secondary">Years Trusted</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsHub;