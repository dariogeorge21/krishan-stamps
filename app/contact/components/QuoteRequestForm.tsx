'use client';

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle, Send, Info, AlertTriangle, MessageCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  productType: string;
  quantity: string;
  urgency: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  productType?: string;
  quantity?: string;
  message?: string;
}

export default function QuoteRequestForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    urgency: 'standard',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const productTypes = [
    'Rubber Stamps',
    'Self-Inking Stamps',
    'Pre-Inked Stamps',
    'Date Stamps & Daters',
    'Embossing Seals',
    'Name Plates',
    'Common Seals',
    'Steel & Brass Plates'
  ];

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (3-5 Hours)' },
    { value: 'express', label: 'Express (1-2 Hours)' },
    { value: 'same-day', label: 'Quick' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.productType) {
      newErrors.productType = 'Please select a product type';
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) < 1) {
      newErrors.quantity = 'Please enter a valid quantity (minimum 1)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirements';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Format the message with all form data
      const urgencyLabel = urgencyOptions.find(opt => opt.value === formData.urgency)?.label || formData.urgency;
      
      const message = `*New Quote Request from Krishan Stamps Website*

*Customer Details:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: +91-${formData.phone}

*Order Details:*
Product Type: ${formData.productType}
Quantity: ${formData.quantity}
Service Urgency: ${urgencyLabel}

*Requirements:*
${formData.message}

---
Submitted via: Website Quote Form`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919899259454?text=${encodedMessage}`;

      // Show success message
      setSubmitStatus('success');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        urgency: 'standard',
        message: ''
      });
      setErrors({});

      // Open WhatsApp in new tab after a brief delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setSubmitStatus('idle');
      }, 1500);

      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 500000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl shadow-lg p-8 lg:p-10 border border-border">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-12 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 lg:p-10 border border-border">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <FileText size={24} className="text-accent" />
        </div>
        <div>
          <h2 className="font-headline text-2xl lg:text-3xl font-bold text-text-primary">
            Request a Quote
          </h2>
          <p className="font-body text-sm text-text-secondary mt-1">
            Get a response within 2 hours
          </p>
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-lg flex items-start space-x-3">
          <CheckCircle size={24} className="text-success fill-current flex-shrink-0" />
          <div>
            <p className="font-cta text-sm font-bold text-success">Quote Request Submitted!</p>
            <p className="font-body text-sm text-text-secondary mt-1">
              Thank you for your inquiry. Our team will contact you within 2 hours during business hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start space-x-3">
          <AlertCircle size={24} className="text-destructive flex-shrink-0" />
          <div>
            <p className="font-cta text-sm font-bold text-destructive">Error Opening WhatsApp</p>
            <p className="font-body text-sm text-text-secondary mt-1">
              Please make sure you have an internet connection or try contacting us directly at +91-98992-59454
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block font-body text-sm font-semibold text-text-primary mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-input border ${errors.fullName ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
              <AlertTriangle size={14} />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block font-body text-sm font-semibold text-text-primary mb-2">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input border ${errors.email ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
                <AlertTriangle size={14} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-body text-sm font-semibold text-text-primary mb-2">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-sm text-text-secondary">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-14 pr-4 py-3 bg-input border ${errors.phone ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                placeholder="98765 43210"
                maxLength={10}
              />
            </div>
            {errors.phone && (
              <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
                <AlertTriangle size={14} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productType" className="block font-body text-sm font-semibold text-text-primary mb-2">
              Product Type <span className="text-destructive">*</span>
            </label>
            <select
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input border ${errors.productType ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234A5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem'
              }}
            >
              <option value="">Select product type</option>
              {productTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.productType && (
              <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
                <AlertTriangle size={14} />
                <span>{errors.productType}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="block font-body text-sm font-semibold text-text-primary mb-2">
              Quantity <span className="text-destructive">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className={`w-full px-4 py-3 bg-input border ${errors.quantity ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
              placeholder="Enter quantity"
            />
            {errors.quantity && (
              <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
                <AlertTriangle size={14} />
                <span>{errors.quantity}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-body text-sm font-semibold text-text-primary mb-3">
            Service Urgency
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {urgencyOptions.map(option => (
              <label
                key={option.value}
                className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  formData.urgency === option.value
                    ? 'border-primary bg-primary/5' :'border-border bg-input hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  checked={formData.urgency === option.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="text-center">
                  <p className={`font-cta text-sm font-bold ${
                    formData.urgency === option.value ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {option.label.split('(')[0].trim()}
                  </p>
                  <p className="font-body text-xs text-text-secondary mt-1">
                    {option.label.match(/\((.*?)\)/)?.[1]}
                  </p>
                </div>
                {formData.urgency === option.value && (
                  <CheckCircle size={20} className="absolute top-2 right-2 text-primary fill-current" />
                )}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block font-body text-sm font-semibold text-text-primary mb-2">
            Requirements & Details <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-input border ${errors.message ? 'border-destructive' : 'border-border'} rounded-lg font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none`}
            placeholder="Please provide details about your stamp requirements, including size, text content, design preferences, and any special instructions..."
          />
          {errors.message && (
            <p className="mt-2 font-body text-xs text-destructive flex items-center space-x-1">
              <AlertTriangle size={14} />
              <span>{errors.message}</span>
            </p>
          )}
          <p className="mt-2 font-body text-xs text-text-secondary">
            Minimum 10 characters required
          </p>
        </div>

        <div className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-lg shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send via WhatsApp'}</span>
              <MessageCircle size={20} />
            </button>
          </div>

          <p className="mt-4 font-body text-xs text-center text-text-secondary">
            By submitting this form, you agree to our terms of service and privacy policy
          </p>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-cta text-sm font-bold text-text-primary mb-1">
              Quick Response Guarantee
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              We respond to all quote requests within 2 hours during business hours (Mon-Sat, 10 AM - 8 PM IST). For urgent requirements, you can also reach us via WhatsApp for instant response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}