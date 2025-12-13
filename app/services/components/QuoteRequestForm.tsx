'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Loader2, Send, Phone, Mail, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  urgency: string;
  message: string;
}

export default function QuoteRequestForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    urgency: 'standard',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      quantity: '',
      urgency: 'standard',
      message: ''
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg h-96 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Request a Quote
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Get a personalized quote for your stamping needs within 24 hours
            </p>
          </div>

          <div className="bg-surface rounded-lg shadow-lg p-6 md:p-8 border border-border">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start space-x-3">
                <CheckCircle size={24} className="text-success flex-shrink-0" />
                <div>
                  <p className="font-body font-semibold text-success mb-1">Quote Request Submitted!</p>
                  <p className="font-body text-sm text-text-secondary">We'll get back to you within 24 hours with a detailed quote.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                    placeholder="+91-XXXXX-XXXXX"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-design">Custom Design Consultation</option>
                    <option value="bulk-order">Bulk Order Solutions</option>
                    <option value="express-service">Same-Day/Express Service</option>
                    <option value="printing">General Printing Solutions</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                    placeholder="e.g., 50 stamps"
                  />
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block font-body text-sm font-semibold text-text-primary mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm"
                  >
                    <option value="standard">Standard (3-5 days)</option>
                    <option value="express">Express (1-2 days)</option>
                    <option value="same-day">Same Day</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-body text-sm font-semibold text-text-primary mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-body text-sm resize-none"
                  placeholder="Please provide any specific requirements, design preferences, or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-body text-xs text-text-secondary">
                  * Required fields. We'll respond within 24 hours.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-cta font-bold text-sm rounded-md shadow-md hover:bg-accent/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Alternatives */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center justify-center space-x-3 p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <Phone size={20} />
              <span className="font-body font-semibold text-sm">Call Now</span>
            </a>
            <a
              href="mailto:info@krishanstamps.com"
              className="flex items-center justify-center space-x-3 p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300"
            >
              <Mail size={20} />
              <span className="font-body font-semibold text-sm">Email Us</span>
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span className="font-body font-semibold text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}