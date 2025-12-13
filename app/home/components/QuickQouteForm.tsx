'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, ShieldCheck, Phone, Loader2, Send } from 'lucide-react';

interface QuickQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  productType: string;
  quantity: string;
  message: string;
}

const QuickQuoteForm = ({ isOpen, onClose }: QuickQuoteFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isHydrated]);

  const productTypes = [
    'Self-Inking Stamps',
    'Rubber Stamps',
    'Pre-Inked Stamps',
    'Date Stamps',
    'Embossing Seals',
    'Name Plates',
    'Common Seals',
    'Steel & Brass Plates',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        message: ''
      });
      onClose();
    }, 2000);
  };

  if (!isOpen || !isHydrated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-surface rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div>
            <h3 className="font-headline text-2xl font-bold">Get Free Quote</h3>
            <p className="font-body text-sm opacity-90">We'll respond within 2 hours</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary-foreground/20 transition-colors duration-300"
            aria-label="Close form"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Success Message */}
          {submitSuccess && (
            <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-md flex items-center space-x-3">
              <CheckCircle size={24} />
              <div>
                <p className="font-body font-semibold">Quote request submitted successfully!</p>
                <p className="font-body text-sm">We'll contact you shortly.</p>
              </div>
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-body font-semibold text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block font-body font-semibold text-text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-body font-semibold text-text-primary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="10-digit number"
              />
            </div>
          </div>

          {/* Product Type & Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="productType" className="block font-body font-semibold text-text-primary mb-2">
                Product Type *
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              >
                <option value="">Select product type</option>
                {productTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block font-body font-semibold text-text-primary mb-2">
                Quantity *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="Enter quantity"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-body font-semibold text-text-primary mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-md font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your requirements, design preferences, or any special instructions..."
            />
          </div>

          {/* Trust Indicators */}
          <div className="bg-muted rounded-md p-4 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-body text-text-secondary">
              <Clock size={16} className="text-primary" />
              <span>Response within 2 hours during business hours</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-body text-text-secondary">
              <ShieldCheck size={16} className="text-success" />
              <span>Your information is secure and confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-body text-text-secondary">
              <Phone size={16} className="text-accent" />
              <span>Or call us directly: +91-12345-67890</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-md shadow-md hover:bg-accent/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Submit Quote Request</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickQuoteForm;