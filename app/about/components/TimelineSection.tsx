import React from 'react';
import { Heart } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className: string }>;
}

const TimelineSection = () => {

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">     

        {/* Summary Card */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-primary to-slate-500 text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <Heart size={48} className="mx-auto mb-4 fill-current" />
          <h3 className="font-headline font-bold text-3xl text-white mb-4">
            12+ Years of Making Your Mark Matter
          </h3>
          <p className="font-body text-lg opacity-90 leading-relaxed">
            From a small shop to Delhi NCR's trusted stamping solution provider, our journey has been driven by one constant: an unwavering commitment to quality, service, and customer satisfaction. Thank you for being part of our story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;