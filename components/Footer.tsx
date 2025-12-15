'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ChevronRight, CheckCircle, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'FAQs', href: '/faqs' },
  ];

  const services = [
    'Rubber Stamps',
    'Self-Inking Stamps',
    'Pre-Inked Stamps',
    'Embossing Seals',
    'Name Plates',
    'Common Seals',
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-md flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    d="M24 8L16 16H20V28H28V16H32L24 8Z"
                    fill="currentColor"
                    className="text-accent-foreground"
                  />
                  <rect
                    x="12"
                    y="32"
                    width="24"
                    height="4"
                    rx="2"
                    fill="currentColor"
                    className="text-accent-foreground"
                  />
                </svg>
              </div>
              <div>
                <div className="font-headline font-bold text-xl">Krishan Stamps</div>
                <div className="font-body text-xs opacity-80">Professional Maker</div>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
              Making your mark matter since 1990. Quality stamping solutions for businesses across Delhi NCR.
            </p>
            <div className="flex items-center space-x-2">
                <Star size={16} className="text-warning fill-current" />
              <span className="font-body text-sm">4.8/5 Rating • 5000+ Customers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <ChevronRight size={16} />
                    <span>{link?.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services?.map((service, index) => (
                <li key={index} className="font-body text-sm opacity-80 flex items-start space-x-2">
                  <CheckCircle size={14} className="text-success mt-0.5 flex-shrink-0 fill-current" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/KYC2xUJGVj7dDtLi9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-accent transition-colors"
              >
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div className="font-body text-sm opacity-80 hover:opacity-100">
                  Shop No.17, Veer Savarkar Block,<br /> Shakarpur, Delhi-110092
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919899259454" className="font-body text-sm opacity-80 hover:text-accent transition-colors">
                  +91-98992-59454
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:krishankumar651@yahoo.com" className="font-body text-sm opacity-80 hover:text-accent transition-colors">
                  krishankumar651@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="space-y-4 md:space-y-0">
            <p className="font-body text-sm opacity-80 text-center md:text-center">
              © {currentYear || '2026'} Krishan Stamps Professional. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;