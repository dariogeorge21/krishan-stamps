'use client';

import { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone, Mail } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl shadow-lg p-8 border border-border">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-3/4" />
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 lg:p-10 border border-border">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
          <HelpCircle size={24} className="text-warning fill-current" />
        </div>
        <h2 className="font-headline text-2xl lg:text-3xl font-bold text-text-primary">
          Frequently Asked Questions
        </h2>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 bg-muted hover:bg-primary/5 transition-colors duration-300 text-left"
            >
              <span className="font-cta text-sm lg:text-base font-bold text-text-primary pr-4">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-5 bg-surface border-t border-border">
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-5 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <MessageSquare size={20} className="text-primary flex-shrink-0 mt-0.5 fill-current" />
          <div>
            <p className="font-cta text-sm font-bold text-text-primary mb-2">
              Still Have Questions?
            </p>
            <p className="font-body text-sm text-text-secondary mb-4">
              Our team is here to help! Contact us directly for personalized assistance with your stamp requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919899259454"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground font-cta font-bold text-xs rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                <Phone size={16} className="fill-current" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:krishankumar651@yahoo.com"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground font-cta font-bold text-xs rounded-md hover:bg-accent/90 transition-all duration-300"
              >
                <Mail size={16} className="fill-current" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}