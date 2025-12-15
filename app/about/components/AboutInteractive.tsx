'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from './HeroSection';
import CompanyStory from './CompanyStory';
import TeamSection from './TeamSection';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsHub from './TestimonialsHub';
import TimelineSection from './TimelineSection';
import SuccessStories from './SuccessStories';
import CTASection from './CTASection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

export default function AboutInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[1, 2, 3]?.map((i) => (
                  <div key={i} className="h-64 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <CompanyStory />
        <TimelineSection />
        <TeamSection />
        <WhyChooseUs />
  
        
        <SuccessStories />
        <TestimonialsHub />
        <CTASection />
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
}