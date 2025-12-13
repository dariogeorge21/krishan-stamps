'use client';

import { useState, useEffect } from 'react';
import { Star, Medal, File, Phone, Clock, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

const HeroSection = ({ onQuoteClick }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroSlides = [
  {
    title: "Making Your Mark Matter",
    subtitle: "Professional Stamp Solutions Since 2012",
    description: "Transform your business identity with precision-crafted stamps, seals, and plates. Same-day service available for urgent needs.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a571eaff-1765302422516.png",
    alt: "Close-up of professional rubber stamp being pressed on official document with blue ink pad"
  },
  {
    title: "12+ Years of Precision",
    subtitle: "Trusted by 5000+ Businesses",
    description: "From small enterprises to corporate giants, we deliver quality stamping solutions that stand the test of time.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe89ea8-1764657313919.png",
    alt: "Artisan craftsman carefully engraving custom stamp design on wooden workbench with precision tools"
  },
  {
    title: "Same Day Solutions",
    subtitle: "Speed Without Compromise",
    description: "Need it today? We've got you covered. Express service for urgent business requirements without sacrificing quality.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19caddd2d-1765455217361.png",
    alt: "Modern stamp manufacturing workspace with organized tools and completed custom stamps ready for delivery"
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[600px] lg:h-[700px] bg-muted">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="font-headline text-4xl lg:text-6xl font-bold mb-4">
              Making Your Mark Matter
            </h1>
            <p className="font-body text-lg lg:text-xl mb-8 opacity-90">
              Professional Stamp Solutions Since 2012
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) =>
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star size={20} className="text-warning" />
              <span className="font-body font-semibold text-sm">4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-success/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Medal size={20} className="text-success" />
              <span className="font-body font-semibold text-sm">5000+ Customers</span>
            </div>
          </div>

          <h1 className="font-headline text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          <p className="font-body text-xl lg:text-2xl mb-2 font-semibold">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <p className="font-body text-base lg:text-lg mb-8 opacity-90 max-w-xl">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-md shadow-lg hover:bg-accent/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <File size={20} className="mr-2" />
              Get Free Quote
            </button>
            
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-body font-bold text-base rounded-md shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <Phone size={20} className="mr-2" />
              Call Now: +91-12345-67890
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span className="font-body">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck size={18} />
              <span className="font-body">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck size={18} />
              <span className="font-body">Free Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={handlePrevSlide}
          className="w-12 h-12 flex items-center justify-center bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full hover:bg-primary-foreground/30 transition-all duration-300"
          aria-label="Previous slide">

          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-2">
          {heroSlides.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ?
            'bg-primary-foreground w-8' :
            'bg-primary-foreground/40 hover:bg-primary-foreground/60'}`
            }
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>

        <button
          onClick={handleNextSlide}
          className="w-12 h-12 flex items-center justify-center bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full hover:bg-primary-foreground/30 transition-all duration-300"
          aria-label="Next slide">

          <ChevronRight size={24} />
        </button>
      </div>
    </section>);

};

export default HeroSection;