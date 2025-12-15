"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Star, Clock, Zap, ShieldCheck, Mail, MapPin, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const contactInfo = {
    phone: '+91-9899-259-454',
    email: 'krishankumar651@yahoo.com',
    address: 'Shakarpur, Delhi NCR',
    hours: 'Mon-Sat: 10:00 AM - 8:00 PM'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary/95 to-primary/85 border-b border-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Left Contact Info */}
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-primary-foreground hover:text-white transition-colors duration-300 group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </a>
              <div className="w-px h-4 bg-primary-foreground/20" />
              <a 
                href="mailto:info@krishanstamps.com"
                className="flex items-center space-x-2 text-primary-foreground hover:text-white transition-colors duration-300 group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{contactInfo.email}</span>
              </a>
              <div className="w-px h-4 bg-primary-foreground/20" />
              <div className="flex items-center space-x-2 text-primary-foreground">
                <MapPin size={16} />
                <span className="text-sm font-medium">{contactInfo.address}</span>
              </div>
            </div>

            {/* Right Business Hours */}
            <div className="flex items-center space-x-2 text-primary-foreground">
              <Clock size={16} />
              <span className="text-sm font-medium">{contactInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'bg-surface shadow-brand'
      }`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4 lg:px-8">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl p-2">
                <div className="absolute inset-0 bg-white " />
                <Image
                  src="/krishan-white.png"
                  alt="Krishan Stamps Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl text-primary leading-tight group-hover:text-primary/90 transition-colors">
                  Krishan Stamps
                </span>
                <span className="font-body text-xs text-text-secondary leading-tight font-medium">
                  Professional Stamp Makers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.href}
                  href={item?.href}
                  className={`relative px-5 py-2.5 font-body font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 shadow-sm'
                      : 'text-text-primary hover:text-primary hover:bg-muted/70'
                  }`}
                >
                  {item?.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA and Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-cta font-bold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:from-accent/90 hover:to-accent transition-all duration-300"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+919876543210"
                className="hidden md:flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-body font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-primary/20"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative p-3 text-text-primary hover:text-primary hover:bg-muted/70 rounded-lg transition-all duration-300 group"
                aria-label="Toggle mobile menu"
              >
                <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden border-t border-border/30 bg-surface/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col py-6 px-4 space-y-2">
            {navigationItems?.map((item, index) => (
              <Link
                key={item?.href}
                href={item?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative px-5 py-4 font-body font-medium rounded-xl transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 shadow-sm border-l-4 border-primary'
                    : 'text-text-primary hover:text-primary hover:bg-muted/70 hover:translate-x-2'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item?.label}
              </Link>
            ))}
            <div className="pt-6 space-y-3 border-t border-border/30 mt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-cta font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-body font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-muted/50 to-muted border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center space-x-10 py-4">
            <div className="flex items-center space-x-2 group cursor-default">
              <div className="p-1 bg-warning/10 rounded-full">
                <Star size={16} className="text-warning fill-current" />
              </div>
              <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                <span className="font-bold text-text-primary">4.8/5</span> Customer Rating
              </span>
            </div>
            <div className="w-px h-5 bg-border/50" />
            <div className="flex items-center space-x-2 group cursor-default">
              <div className="p-1 bg-primary/10 rounded-full">
                <Clock size={16} className="text-primary" />
              </div>
              <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                <span className="font-bold text-text-primary">25+ Years</span> Experience
              </span>
            </div>
            <div className="w-px h-5 bg-border/50" />
            <div className="flex items-center space-x-2 group cursor-default">
              <div className="p-1 bg-accent/10 rounded-full">
                <Zap size={16} className="text-accent" />
              </div>
              <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                <span className="font-bold text-text-primary">Quick </span>Services
              </span>
            </div>
            <div className="w-px h-5 bg-border/50" />
            <div className="flex items-center space-x-2 group cursor-default">
              <div className="p-1 bg-success/10 rounded-full">
                <ShieldCheck size={16} className="text-success" />
              </div>
              <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                <span className="font-bold text-text-primary">Premium</span> Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;