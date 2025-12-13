'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceArea {
  name: string;
  coverage: string;
}

interface ServiceAreaMapProps {
  areas: ServiceArea[];
}

export default function ServiceAreaMap({ areas }: ServiceAreaMapProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Service Area Coverage
              </h2>
              <p className="font-body text-lg text-text-secondary">
                Serving Delhi NCR with pride and dedication
              </p>
            </div>
            <div className="bg-muted rounded-lg h-96 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Service Area Coverage
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Serving Delhi NCR with pride and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-muted rounded-lg overflow-hidden shadow-md h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Krishan Stamps Service Area - Delhi NCR"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=28.6139,77.2090&z=11&output=embed"
                className="border-0"
              />
            </div>

            {/* Service Areas List */}
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                  <h3 className="font-headline text-xl font-bold text-text-primary">
                    Coverage Areas
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-sm font-semibold text-text-primary">{area.name}</p>
                        <p className="font-body text-xs text-text-secondary">{area.coverage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="ClockIcon" size={24} variant="solid" className="text-accent" />
                  <h3 className="font-headline text-xl font-bold text-text-primary">
                    Service Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-text-secondary">Monday - Saturday</span>
                    <span className="font-body text-sm font-semibold text-text-primary">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-text-secondary">Sunday</span>
                    <span className="font-body text-sm font-semibold text-text-primary">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-success/5 rounded-lg p-6 border border-success/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="BoltIcon" size={24} variant="solid" className="text-success" />
                  <h3 className="font-headline text-xl font-bold text-text-primary">
                    Express Service
                  </h3>
                </div>
                <p className="font-body text-sm text-text-secondary">
                  Same-day delivery available for orders placed before 2:00 PM within 10 km radius
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}