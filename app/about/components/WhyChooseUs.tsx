import React from 'react';
import { ShieldCheck, Zap, Users, IndianRupee, MapPin, Sparkles, CheckCircle } from 'lucide-react';

interface ValueProposition {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  benefits: string[];
}

const WhyChooseUs = () => {
  const valueProps: ValueProposition[] = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      description: 'Every stamp undergoes rigorous quality checks to ensure precision and durability.',
      benefits: [
        'Premium materials only',
        'Multi-point quality inspection',
        'Long-lasting impressions',
        'Consistent results',
      ],
    },
    {
      icon: Zap,
      title: 'Same Day Service',
      description: 'Need it urgently? We offer same-day service without compromising on quality.',
      benefits: [
        'Express processing available',
        'Quick turnaround times',
        'Flexible scheduling',
        'Emergency orders accepted',
      ],
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'We treat every customer as unique, providing tailored solutions for your needs.',
      benefits: [
        'One-on-one consultations',
        'Custom design assistance',
        'Dedicated support team',
        'Follow-up service',
      ],
    },
    {
      icon: IndianRupee,
      title: 'Competitive Pricing',
      description: 'Premium quality at prices that make sense for businesses of all sizes.',
      benefits: [
        'Transparent pricing',
        'Bulk order discounts',
        'No hidden charges',
        'Value for money',
      ],
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep understanding of Delhi NCR business needs and quick local service.',
      benefits: [
        'Same-day delivery available',
        'Local market knowledge',
        'Easy accessibility',
        'Community trusted',
      ],
    },
    {
      icon: Sparkles,
      title: 'Innovation & Tradition',
      description: 'Perfect blend of time-tested craftsmanship and modern technology.',
      benefits: [
        'Latest equipment',
        'Traditional techniques',
        'Continuous improvement',
        'Best of both worlds',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Why Choose Krishan Stamps?
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Six compelling reasons why businesses across Delhi NCR trust us with their stamping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-slate-400 rounded-xl flex items-center justify-center mb-4">
                {React.createElement(prop.icon, { size: 32, className: 'text-white fill-current' })}
              </div>

              <h3 className="font-headline font-bold text-xl text-text-primary mb-3">
                {prop.title}
              </h3>

              <p className="font-body text-text-secondary mb-4 leading-relaxed">
                {prop.description}
              </p>

              <ul className="space-y-2">
                {prop.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle
                      size={18}
                      className="text-success fill-current flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-slate-500 text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-headline font-bold text-3xl mb-4 text-white">
                Bridging Quality and Accessibility
              </h3>
              <p className="font-body text-lg opacity-90 leading-relaxed">
                We occupy a unique space in the market—accessible enough for small businesses yet capable of handling large corporate requirements. This versatility, combined with our commitment to quality, makes us the preferred choice across all business segments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="font-headline font-bold text-4xl mb-2">500000+</div>
                <div className="font-body text-sm opacity-90">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="font-headline font-bold text-4xl mb-2">4.8/5</div>
                <div className="font-body text-sm opacity-90">Average Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="font-headline font-bold text-4xl mb-2">25+</div>
                <div className="font-body text-sm opacity-90">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="font-headline font-bold text-4xl mb-2">100%</div>
                <div className="font-body text-sm opacity-90">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;