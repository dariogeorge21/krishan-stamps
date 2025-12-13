"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Star, Clock, Zap, ShieldCheck } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface shadow-brand">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo Section */}
          <Link href="/homepage" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center bg-primary rounded-md transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  d="M24 8L16 16H20V28H28V16H32L24 8Z"
                  fill="currentColor"
                  className="text-primary-foreground"
                />
                <rect
                  x="12"
                  y="32"
                  width="24"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  className="text-primary-foreground"
                />
                <path
                  d="M14 38H34C35.1046 38 36 38.8954 36 40C36 41.1046 35.1046 42 34 42H14C12.8954 42 12 41.1046 12 40C12 38.8954 12.8954 38 14 38Z"
                  fill="currentColor"
                  className="text-accent"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl text-primary leading-tight">
                Krishan Stamps
              </span>
              <span className="font-body text-xs text-text-secondary leading-tight">
                Professional Maker
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.href}
                href={item?.href}
                className="px-4 py-2 font-body font-medium text-text-primary hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-accent text-accent-foreground font-cta font-bold text-sm rounded-md shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+911234567890"
              className="hidden md:flex items-center space-x-2 px-4 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-all duration-300"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-text-primary hover:text-primary hover:bg-muted rounded-md transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-surface animate-slide-in">
            <nav className="flex flex-col py-4 px-4 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.href}
                  href={item?.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 font-body font-medium text-text-primary hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                >
                  {item?.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-cta font-bold text-sm rounded-md shadow-md hover:bg-accent/90 transition-all duration-300"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Trust Bar */}
      <div className="hidden lg:block bg-muted border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-3">
            <div className="flex items-center space-x-2">
              <Star size={16} className="text-warning fill-current" />
              <span className="font-body text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">4.8/5</span> Rating
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-primary" />
              <span className="font-body text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">Since 2012</span>
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-accent fill-current" />
              <span className="font-body text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">Same Day</span> Service
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2">
              <ShieldCheck size={16} className="text-success fill-current" />
              <span className="font-body text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">Premium</span> Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;