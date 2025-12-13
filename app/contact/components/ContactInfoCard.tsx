import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, ChevronRight } from 'lucide-react';

interface ContactMethod {
  icon: React.ComponentType<{ size: number; className: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
  available: string;
}

interface ContactInfoCardProps {
  methods: ContactMethod[];
}

export default function ContactInfoCard({ methods }: ContactInfoCardProps) {
  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 lg:p-10 border border-border">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Phone size={24} className="text-primary fill-current" />
        </div>
        <h2 className="font-headline text-2xl lg:text-3xl font-bold text-text-primary">
          Get In Touch
        </h2>
      </div>
      
      <div className="space-y-6">
        {methods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            className="flex items-start space-x-4 p-5 bg-muted hover:bg-primary/5 rounded-lg transition-all duration-300 hover:shadow-md group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300">
              {React.createElement(method.icon, { 
                size: 24,
                className: "text-primary group-hover:text-primary-foreground transition-colors duration-300 fill-current"
              })}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-semibold text-text-secondary mb-1">
                {method.label}
              </p>
              <p className="font-cta text-lg font-bold text-text-primary mb-1 break-words">
                {method.value}
              </p>
              <p className="font-body text-sm text-text-secondary mb-2">
                {method.description}
              </p>
              <p className="font-body text-xs text-success font-medium">
                {method.available}
              </p>
            </div>
            
            <ChevronRight 
              size={20} 
              className="text-text-secondary group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-2" 
            />
          </a>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="font-headline text-lg font-bold text-text-primary mb-4">
          Business Hours
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-body text-sm text-text-secondary">Monday - Saturday</span>
            <span className="font-cta text-sm font-bold text-text-primary">09:00 AM - 08:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-sm text-text-secondary">Sunday</span>
            <span className="font-cta text-sm font-bold text-destructive">Closed</span>
          </div>
          <p className="font-body text-xs text-text-secondary italic mt-4">
            * All times in IST (Indian Standard Time)
          </p>
        </div>
      </div>
    </div>
  );
}