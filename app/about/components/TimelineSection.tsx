import React from 'react';
import { Rocket, TrendingUp, Cpu, Building2, Globe, Trophy, Sparkles, Heart } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className: string }>;
}

const TimelineSection = () => {
  const milestones: Milestone[] = [
    {
      year: '2012',
      title: 'Foundation',
      description: 'Krishan Stamps Maker established in East Delhi with a vision to provide quality stamping solutions to local businesses.',
      icon: Rocket,
    },
    {
      year: '2014',
      title: 'Expansion',
      description: 'Expanded product range to include self-inking stamps and embossing seals. Customer base grew to 500+ businesses.',
      icon: TrendingUp,
    },
    {
      year: '2016',
      title: 'Technology Upgrade',
      description: 'Invested in modern equipment and technology to improve precision and reduce turnaround times.',
      icon: Cpu,
    },
    {
      year: '2018',
      title: 'Corporate Partnerships',
      description: 'Established partnerships with major brands like Trodat, Dura, Sun, and Colop. Began serving corporate clients.',
      icon: Building2,
    },
    {
      year: '2020',
      title: 'Digital Presence',
      description: 'Launched online presence and quote request system. Adapted to serve customers during challenging times.',
      icon: Globe,
    },
    {
      year: '2022',
      title: '10 Year Milestone',
      description: 'Celebrated a decade of service with 4000+ satisfied customers. Introduced same-day service for urgent requirements.',
      icon: Trophy,
    },
    {
      year: '2024',
      title: 'Excellence Continues',
      description: 'Serving 5000+ customers with 4.8/5 rating. Committed to innovation while maintaining traditional craftsmanship values.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Our Journey Through Time
          </h2>
          <p className="font-body text-lg text-text-secondary">
            12+ years of growth, innovation, and unwavering commitment to quality
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          {React.createElement(milestone.icon, { size: 20, className: 'text-primary fill-current' })}
                        </div>
                        <div className="font-headline font-bold text-2xl text-primary">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="font-headline font-bold text-xl text-text-primary mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-text-secondary leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <Heart size={48} className="mx-auto mb-4 fill-current" />
          <h3 className="font-headline font-bold text-3xl mb-4">
            12+ Years of Making Your Mark Matter
          </h3>
          <p className="font-body text-lg opacity-90 leading-relaxed">
            From a small workshop to Delhi NCR's trusted stamping solution provider, our journey has been driven by one constant: an unwavering commitment to quality, service, and customer satisfaction. Thank you for being part of our story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;