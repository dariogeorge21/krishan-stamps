'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronRight, CheckCircle, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react'

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

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/krishanstampsmaker/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61580728542853',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Krishan_rubberstamp',
      icon: Youtube,
      color: 'hover:text-red-600'
    },
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center p-1">
                <Image
                  src="/krishan-black.png"
                  alt="Krishan Stamps Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-headline font-bold text-xl">Krishan Stamps Maker</div>
                <div className="font-body text-xs opacity-80">Professional Maker</div>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
              Making your mark matter since 1990. Quality stamping solutions for businesses across Delhi NCR.
            </p>
            <div className="flex items-center space-x-2">
                <Star size={16} className="text-warning fill-current" />
              <span className="font-body text-sm">4.8/5 Rating • 500000+ Customers</span>
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
                href="https://maps.app.goo.gl/TAaxzhaavLtxBNtz8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-accent transition-colors group"
              >
                <MapPin size={18} className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="font-body text-sm opacity-80 hover:opacity-100 group-hover:text-accent">
                  <div className="font-semibold text-white mb-1">Visit Our Location</div>
                  Shop No.17, Veer Savarkar Block,<br /> Shakarpur, Delhi-110092
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <div className="font-body text-sm opacity-80">
                  <div className="font-semibold text-white mb-0.5">Call Us</div>
                  <a href="tel:+919899259454" className="hover:text-accent transition-colors">
                    +91-9899259454
                  </a>
                  <br />
                  <a href="tel:+919625495373" className="hover:text-accent transition-colors">
                    9625495373
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:krishankumar651@yahoo.com" className="font-body text-sm opacity-80 hover:text-accent transition-colors">
                  <div className="font-semibold text-white mb-0.5">Email</div>
                  krishankumar651@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us - Social Media */}
          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Follow Us</h3>
            <p className="font-body text-sm opacity-80 mb-6">
              Connect with us on social media for updates and offers.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks?.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-110 group flex items-center justify-center`}
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <Icon size={20} className="transition-transform group-hover:-translate-y-1" />
                  </a>
                );
              })}
              <a
                href="https://maps.app.goo.gl/TAaxzhaavLtxBNtz8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:text-orange-500 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-110 group flex items-center justify-center"
                aria-label="Visit us on Google Maps"
                title="Google Maps Location"
              >
                <MapPin size={20} className="transition-transform group-hover:-translate-y-1" />
              </a>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-body text-xs opacity-70">
                <span className="font-semibold text-white">Hours:</span> Mon-Sat, 10:00 AM - 8:00 PM IST
              </p>
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