'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from './HeroSection';
import StatsCounter from './StatsCounter';
import FeaturedProducts from './FeaturedProducts';
import QuickQuoteForm from './QuickQouteForm';
import TestimonialsSection from './TestimonialsSection';
import WhyChooseUs from './WhyChooseUs';
import CTASection from './CTASection';
import Footer from '@/components/Footer';

const HomepageInteractive = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const handleQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const handleQuoteClose = () => {
    setIsQuoteFormOpen(false);
  };

  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-[180px]">
        <HeroSection onQuoteClick={handleQuoteClick} />
        <StatsCounter />
        <FeaturedProducts />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <QuickQuoteForm isOpen={isQuoteFormOpen} onClose={handleQuoteClose} />
    </>
  );
};

export default HomepageInteractive;