import { MessageSquare, Clock, Zap } from 'lucide-react';

interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export default function ContactHero({ title, subtitle }: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 shadow-lg">
            <MessageSquare size={40} className="text-accent-foreground fill-current" />
          </div>
          
          <h1 className="font-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="font-body text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Clock size={24} className="text-accent" />
              <div className="text-left">
                <p className="font-body text-sm text-primary-foreground/80">Response Time</p>
                <p className="font-cta text-base font-bold text-primary-foreground">Within 2 Hours</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Zap size={24} className="text-warning fill-current" />
              <div className="text-left">
                <p className="font-body text-sm text-primary-foreground/80">Same Day</p>
                <p className="font-cta text-base font-bold text-primary-foreground">Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}