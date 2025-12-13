'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Package, Star } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ size: number; className: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const StatsCounter = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      icon: Calendar,
      value: 12,
      suffix: '+',
      label: 'Years of Excellence',
      color: 'text-primary'
    },
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'text-accent'
    },
    {
      icon: Package,
      value: 50000,
      suffix: '+',
      label: 'Stamps Delivered',
      color: 'text-success'
    },
    {
      icon: Star,
      value: 4.8,
      suffix: '/5',
      label: 'Customer Rating',
      color: 'text-warning'
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

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(increment * currentStep, stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, isHydrated]);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-surface rounded-full mb-4 shadow-md`}>
                <stat.icon size={32} className="text-current" />
              </div>
              <div className="text-4xl lg:text-5xl font-headline font-bold text-text-primary mb-2">
                {stat.value === 4.8 
                  ? counts[index].toFixed(1)
                  : Math.floor(counts[index]).toLocaleString('en-IN')
                }
                {stat.suffix}
              </div>
              <div className="font-body text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;