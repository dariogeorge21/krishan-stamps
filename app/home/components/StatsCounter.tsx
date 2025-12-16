'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, Users, Package, Star, TrendingUp, Award, Clock, CheckCircle, Briefcase, Zap, Target } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ size: number; className: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
}

const StatsCounter = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [animationComplete, setAnimationComplete] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  const stats: Stat[] = [
    {
      icon: TrendingUp,
      value: 25,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Serving Delhi NCR since 1990',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Users,
      value: 500000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Trusted by businesses across Delhi',
      color: 'text-black',
      bgColor: 'bg-accent/10',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Target,
      value: 5000000,
      suffix: '+',
      label: 'Stamps Delivered',
      description: 'Quality stamps crafted with precision',
      color: 'text-success',
      bgColor: 'bg-success/10',
      gradient: 'from-success/20 to-success/5'
    },
    {
      icon: Award,
      value: 4.8,
      suffix: '/5',
      label: 'Customer Rating',
      description: 'Consistently exceeding expectations',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      gradient: 'from-warning/20 to-warning/5'
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isHydrated]);

  const animateCounter = useCallback((index: number, targetValue: number, delay: number = 0) => {
    setTimeout(() => {
      const duration = 2500;
      const steps = 80;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const increment = targetValue / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(increment * currentStep, targetValue);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimationComplete(prev => {
            const newComplete = [...prev];
            newComplete[index] = true;
            return newComplete;
          });
        }
      }, stepDuration);

      timerRefs.current[index] = timer;
    }, delay);
  }, []);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    // Stagger the animations for a more professional effect
    stats.forEach((stat, index) => {
      animateCounter(index, stat.value, index * 300);
    });

    // Cleanup function
    return () => {
      timerRefs.current.forEach(timer => {
        if (timer) clearInterval(timer);
      });
    };
  }, [isVisible, isHydrated, animateCounter]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Success in Numbers
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Trusted by thousands of businesses across Delhi NCR for quality stamping solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-surface rounded-2xl p-8 shadow-lg border border-border/50">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl mb-6 shadow-md`}>
                  <stat.icon size={36} className={stat.color} />
                </div>
                <div className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-body text-base font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm mb-4">
            <CheckCircle size={16} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Success in Numbers
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Trusted by thousands of businesses across Delhi NCR for quality stamping solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/30 hover:shadow-xl hover:border-border/50 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon size={36} className={`${stat.color} transition-transform duration-300 group-hover:rotate-12`} />
                </div>

                {/* Counter */}
                <div className="relative mb-4">
                  <div className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-2 transition-all duration-300">
                    {stat.value === 4.8 
                      ? counts[index].toFixed(1)
                      : Math.floor(counts[index]).toLocaleString('en-IN')
                    }
                    <span className={`${stat.color} ml-1`}>{stat.suffix}</span>
                  </div>
                  {animationComplete[index] && (
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-success rounded-full animate-pulse" />
                  )}
                </div>

                {/* Labels */}
                <div className="space-y-2">
                  <div className="font-body text-base font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="font-body text-sm text-text-secondary group-hover:text-text-primary/80 transition-colors duration-300">
                    {stat.description}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 w-full bg-border/30 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color.replace('text-', 'from-')} to-transparent rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animationComplete[index] ? '100%' : `${(counts[index] / stat.value) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-surface/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-border/30">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Clock size={16} className="text-primary" />
              <span className="text-sm font-medium">Est. 1990</span>
            </div>
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center space-x-2 text-text-secondary">
              <CheckCircle size={16} className="text-success" />
              <span className="text-sm font-medium">99.9% Success Rate</span>
            </div>
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center space-x-2 text-text-secondary">
              <Star size={16} className="text-warning fill-current" />
              <span className="text-sm font-medium">Top Rated Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;