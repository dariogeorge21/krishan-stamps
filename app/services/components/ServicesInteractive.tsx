'use client';

import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import ProcessTimeline from './ProcessTimeline';
import ServiceAreaMap from './ServiceAreaMap';
import BrandPartners from './BrandPartners';
import QuoteRequestForm from './QuoteRequestForm';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface ServiceArea {
  name: string;
  coverage: string;
}

interface BrandPartner {
  name: string;
  logo: string;
  alt: string;
  description: string;
}

interface ServicesInteractiveProps {
  heroData: {
    title: string;
    description: string;
  };
  services: Service[];
  processSteps: ProcessStep[];
  serviceAreas: ServiceArea[];
  brandPartners: BrandPartner[];
}

export default function ServicesInteractive({
  heroData,
  services,
  processSteps,
  serviceAreas,
  brandPartners
}: ServicesInteractiveProps) {
  return (
    <>
      <ServiceHero title={heroData.title} description={heroData.description} />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Service Offerings
              </h2>
              <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
                Comprehensive stamping solutions tailored to meet your business needs with precision and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  highlighted={service.highlighted}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline steps={processSteps} />
      <ServiceAreaMap areas={serviceAreas} />
      <BrandPartners partners={brandPartners} />
      <QuoteRequestForm />
    </>
  );
}