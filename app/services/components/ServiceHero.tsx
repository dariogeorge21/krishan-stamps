import { Clock, ShieldCheck, Star } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-primary-foreground/80 text-sm font-body">Home</span>
            <span className="text-primary-foreground/60 text-sm font-body">/</span>
            <span className="text-primary-foreground font-body text-sm font-semibold">Services</span>
          </div>

          {/* Title */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center space-x-2">
              <Clock size={20} className="text-accent" />
              <span className="font-body text-sm text-primary-foreground font-semibold">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck size={20} className="text-success" />
              <span className="font-body text-sm text-primary-foreground font-semibold">Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-warning" />
              <span className="font-body text-sm text-primary-foreground font-semibold">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-background)" />
        </svg>
      </div>
    </section>
  );
}