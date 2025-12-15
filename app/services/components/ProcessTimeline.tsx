import React from 'react';
import * as Icons from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Service Process
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Simple, transparent, and efficient workflow designed for your convenience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0" style={{ transform: 'translateX(-50%)' }} />
                )}

                {/* Step Card */}
                <div className="relative bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 z-10">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-cta font-bold text-xl mb-4 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    {Icons[step.icon as keyof typeof Icons] ? (
                      React.createElement(Icons[step.icon as keyof typeof Icons] as React.ElementType, { size: 32, className: "text-black" })
                    ) : (
                      <span className="text-accent">Icon not found</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-lg font-bold text-text-primary mb-2 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-text-secondary text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}