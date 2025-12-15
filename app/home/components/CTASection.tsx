import Link from 'next/link';
import { FileText, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <h2 className="font-headline text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Make Your Mark?
          </h2>
          
          <p className="font-body text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 5000+ satisfied customers who trust Krishan Stamps for their professional stamping needs. Get started today with a free quote!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-md shadow-xl hover:bg-accent/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <FileText size={20} className="mr-2" />
              Get Free Quote
            </Link>
            
            <a
              href="tel:+919899259454"
              className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary font-body font-bold text-base rounded-md shadow-xl hover:bg-primary-foreground/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Phone size={20} className="mr-2" />
              Call: +91 98992 59454
            </a>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-base rounded-md shadow-xl hover:bg-secondary/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="font-headline text-3xl font-bold mb-1">25+</div>
              <div className="font-body text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl font-bold mb-1">5000+</div>
              <div className="font-body text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl font-bold mb-1">50K+</div>
              <div className="font-body text-sm opacity-80">Stamps Made</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl font-bold mb-1">4.8/5</div>
              <div className="font-body text-sm opacity-80">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;