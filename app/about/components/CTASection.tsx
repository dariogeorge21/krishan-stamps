import Link from 'next/link';
import { Sparkles, MessageSquare, Phone, Clock, ShieldCheck, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles size={20} className="text-white fill-current" />
            <span className="font-body font-semibold text-sm text-white">Ready to Get Started?</span>
          </div>

          <h2 className="font-headline font-bold text-3xl md:text-5xl text-primary-foreground mb-6">
            Let's Create Your Perfect Stamp Together
          </h2>

          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a single custom stamp or bulk orders for your organization, our expert team is ready to help you make your mark matter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-cta font-bold rounded-lg shadow-xl hover:bg-accent/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare size={20} />
              <span>Get Free Quote</span>
            </Link>

            <a
              href="tel:+919899259454"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-body font-semibold rounded-lg shadow-xl hover:bg-white/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={20} />
              <span>Call Now: +91-98992-59454</span>
            </a>
            <a href="https://wa.me/919899259454" className="inline-flex items-center space-x-2 px-8 py-4 bg-success text-success-foreground font-body font-semibold rounded-lg shadow-xl hover:bg-success/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              target="_blank" rel="noopener noreferrer">
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock size={32} className="text-white mx-auto mb-3" />
              <div className="font-headline font-bold text-2xl text-white mb-1">Same Day</div>
              <div className="font-body text-sm text-white/80">Service Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <ShieldCheck size={32} className="text-white mx-auto mb-3 fill-current" />
              <div className="font-headline font-bold text-2xl text-white mb-1">100%</div>
              <div className="font-body text-sm text-white/80">Quality Guaranteed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users size={32} className="text-white mx-auto mb-3" />
              <div className="font-headline font-bold text-2xl text-white mb-1">500000+</div>
              <div className="font-body text-sm text-white/80">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;