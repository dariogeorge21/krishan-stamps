'use client';

import { Clock, ShieldCheck, Users, IndianRupee, Sparkles, Truck, Phone } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Need it urgently? We offer express same-day delivery for most products without compromising on quality.',
      color: 'text-accent'
    },
    {
      icon: ShieldCheck,
      title: 'Premium Quality',
      description: 'We use only the finest materials and latest technology to ensure every stamp meets the highest standards.',
      color: 'text-success'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced craftsmen bring over 12 years of expertise to every project, ensuring perfection.',
      color: 'text-primary'
    },
    {
      icon: IndianRupee,
      title: 'Competitive Pricing',
      description: 'Get the best value for your money with our transparent pricing and no hidden charges.',
      color: 'text-warning'
    },
    {
      icon: Sparkles,
      title: 'Custom Designs',
      description: 'From simple text to complex logos, we can create any design you need with precision and care.',
      color: 'text-accent'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Enjoy complimentary delivery across Delhi NCR for all orders. We bring quality to your doorstep.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Why Choose Krishan Stamps?
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Experience the perfect blend of traditional craftsmanship and modern efficiency that has made us Delhi NCR's trusted stamping partner for over a decade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-muted rounded-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} bg-surface rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <feature.icon size={32} className="text-current" />
              </div>
              <h3 className="font-headline text-xl font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/5 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-text-secondary">Have questions?</p>
                <p className="font-body font-bold text-text-primary">Call us now!</p>
              </div>
            </div>
            <a
              href="tel:+911234567890"
              className="px-6 py-3 bg-accent text-accent-foreground font-cta font-bold text-sm rounded-md shadow-md hover:bg-accent/90 hover:shadow-lg transition-all duration-300"
            >
              +91-12345-67890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;