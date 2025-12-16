import { Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="relative mt-24 bg-gradient-to-br from-primary via-primary/95 to-secondary pt-20 pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="diagonals" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" />
            </pattern>
          </defs>
          <rect width="1440" height="800" fill="url(#diagonals)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb with enhanced styling */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors">
              Home
            </Link>
            <span className="text-primary-foreground/50 text-sm font-body">/</span>
            <span className="text-primary-foreground font-body text-sm font-semibold bg-primary-foreground/10 px-3 py-1 rounded-full">
              Services
            </span>
          </div>

          {/* Title with enhanced styling */}
          <div className="mb-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
              <Star size={16} className="fill-current" />
              <span className="font-body text-xs font-semibold uppercase tracking-wider">Premium Services</span>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              {title}
            </h1>
          </div>

          {/* Description with enhanced styling */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/95 mb-12 leading-relaxed max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {description}
          </p>

          {/* Trust Indicators - Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              {
                icon: Clock,
                label: 'Same Day Service',
                description: 'Quick turnaround'
              },
              {
                icon: ShieldCheck,
                label: 'Quality Guaranteed',
                description: 'Premium materials'
              },
              {
                icon: Star,
                label: '4.8/5 Rating',
                description: '500000+ customers'
              }
            ].map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-primary-foreground/40 transition-all duration-300"
                >
                  <div className="p-3 bg-primary-foreground/20 rounded-lg group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div className="text-center">
                    <p className="font-body text-sm font-semibold text-primary-foreground">
                      {indicator.label}
                    </p>
                    <p className="font-body text-xs text-primary-foreground/70 mt-1">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-accent/90 transition-all duration-300"
            >
              <span>Get Your Quote</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="tel:+919899259454"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/40 text-primary-foreground font-body font-semibold text-base rounded-lg hover:bg-primary-foreground/30 hover:border-primary-foreground/60 transition-all duration-300"
            >
              <Clock size={20} />
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-background)" />
        </svg>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}