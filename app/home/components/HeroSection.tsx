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
    subtitle: "Professional Stamp Solutions Since 1990",
    description: "Transform your business identity with precision-crafted stamps, seals, and plates. Same-day service available for urgent needs.",
    image: "https://stampvala.com/wp-content/uploads/2022/05/Colop-Printer-R40.webp",
    alt: "Close-up of professional rubber stamp being pressed on official document with blue ink pad"
  },
  {
    title: "25+ Years of Precision",
    subtitle: "Trusted by 5000+ Businesses",
    description: "From small enterprises to corporate giants, we deliver quality stamping solutions that stand the test of time.",
    image: "https://www.stampsonclick.com/uploads/product_image/29-06-2017_colop10.jpg",
    alt: "Artisan craftsman carefully engraving custom stamp design on wooden workbench with precision tools"
  },
  {
    title: "Quickest Solutions",
    subtitle: "Speed Without Compromise",
    description: "Need it today? We offer the quickest response within 2 hours for select products without sacrificing quality.",
    image: "https://www.shivanienterprises.com/wp-content/uploads/2023/10/Self-Ink-Stamp.jpg",
    alt: "Modern stamp manufacturing workspace with organized tools and completed custom stamps ready for delivery"
  },
  {
    title: "Quality You Can Trust",
    subtitle: "Certified and Guaranteed",
    description: "Our stamps are made with the highest quality materials and craftsmanship, ensuring they last for years to come.",
    image: "https://cdn.simplystamps.com/media/catalog/product/t/r/trodat-round-stamps.jpg",
    alt: "Close-up of high-quality custom stamp with intricate design and clear imprint"
  },
  {
    title: "Contact Us Today",
    subtitle: "Your Perfect Stamp Awaits",
    description: "Get in touch for a free quote and experience our exceptional customer service and expert advice.",
    image: "/images/image19.jpeg",
    alt: "Friendly customer service representative assisting client with stamp order over the phone"
  },
  {
    title: "Since 1990",
    subtitle: "Experience the Krishan Stamps Difference",
    description: "With over three decades of expertise, we are your reliable partner for all stamping needs.",
    image: "/images/image18.jpeg",
    alt: "Exterior view of Krishan Stamps Maker storefront showcasing professional stamp services"
  },
  {
    title: "Custom Solutions",
    subtitle: "Tailored Stamps for Every Need",
    description: "From rubber stamps to embossing seals, we customize each product to meet your specific requirements.",
    image: "https://m.media-amazon.com/images/I/71iSS1q-7VL._AC_UF1000,1000_QL80_.jpg",
    alt: "Variety of custom rubber stamps and embossing seals displayed on wooden table"
  }
];


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
    <section className="relative h-[850px] lg:h-[700px] overflow-hidden">
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
              className="object-contain"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
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

          <h1 className="font-headline text-4xl lg:text-6xl font-bold mb-4 leading-tight text-white">
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
              href="tel:+919899259454"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-body font-bold text-base rounded-md shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <Phone size={20} className="mr-2" />
              Call Now: +91 98992 59454
            </a>

            <a
              href="https://wa.me/919899259454?text=I'm%20interested%20in%20your%20stamp%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-success text-success-foreground font-body font-bold text-base rounded-md shadow-lg hover:bg-success/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <Phone size={20} className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span className="font-body">Quickest Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck size={18} />
              <span className="font-body">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck size={18} />
              <span className="font-body">Quick Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <br></br>
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