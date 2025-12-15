import Image from 'next/image';
import { Sparkles, CheckCircle, Clock, Users, Star, Zap } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ size: number; className: string }>;
  value: string;
  label: string;
}

const HeroSection = () => {
  const stats: StatItem[] = [
    { icon: Clock, value: '25+', label: 'Years of Excellence' },
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' },
    { icon: Zap, value: 'Same Day', label: 'Service Available' }
  ];


  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
              <Sparkles size={20} className="text-accent fill-current" />
              <span className="font-body font-semibold text-sm text-accent">Since 1990</span>
            </div>
            
            <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight">
              Making Your Mark Matter for Over 3 Decades
            </h1>
            
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              At Krishan Stamps Maker, we blend traditional craftsmanship with modern efficiency to deliver stamping solutions that represent your professional identity. Every stamp we create tells a story and serves a purpose.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle size={24} className="text-success fill-current" />
                <span className="font-body text-text-primary">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={24} className="text-success fill-current" />
                <span className="font-body text-text-primary">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={24} className="text-success fill-current" />
                <span className="font-body text-text-primary">Local Expertise</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="https://i.shgcdn.com/6fa6ee27-6862-4908-89d0-2402c81dbea2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Professional craftsman carefully creating custom rubber stamp with precision tools in modern workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-headline font-bold text-4xl">25+</div>
                <div className="font-body text-sm">Years Strong</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-surface rounded-xl p-6 shadow-md text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent size={24} className="text-primary fill-current" />
                  </div>
                </div>
                <div className="font-headline font-bold text-3xl text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>);

};

export default HeroSection;