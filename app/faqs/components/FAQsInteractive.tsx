'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, Clock, CreditCard, Truck, Settings, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      color: 'primary',
      faqs: [
        {
          question: 'What types of stamps do you make?',
          answer: 'We specialize in rubber stamps, self-inking stamps, pre-inked stamps, embossing seals, name plates, and common seals. We can create custom designs for businesses, professionals, and personal use.'
        },
        {
          question: 'How long have you been in business?',
          answer: 'Krishan Stamps Professional has been serving Delhi NCR since 1990, bringing over 35+ years of experience in traditional craftsmanship combined with modern efficiency.'
        },
        {
          question: 'Do you make custom designs?',
          answer: 'Yes! We specialize in custom stamp designs. You can provide your logo, text, or design, and our expert team will create a high-quality stamp according to your specifications.'
        },
        {
          question: 'What is the minimum order quantity?',
          answer: 'We accept orders for single stamps as well as bulk orders. There is no minimum quantity requirement - whether you need one stamp or hundreds, we are here to help.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      icon: CreditCard,
      color: 'success',
      faqs: [
        {
          question: 'How much do stamps cost?',
          answer: 'Pricing varies based on size, type, and design complexity. Basic rubber stamps start from ₹150, self-inking stamps from ₹350, and embossing seals from ₹800. Contact us for exact quotes.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, UPI payments, bank transfers, and all major digital payment methods. For custom orders, we require 50% advance payment.'
        },
        {
          question: 'Do you offer discounts for bulk orders?',
          answer: 'Yes, we offer attractive discounts for bulk orders. The discount percentage depends on the quantity and type of stamps. Contact us with your requirements for a customized quote.'
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No, we believe in transparent pricing. All costs including design, manufacturing, and standard delivery within 5km are included in our quoted price. Additional charges only apply for express delivery or distant locations.'
        }
      ]
    },
    {
      title: 'Delivery & Timeline',
      icon: Truck,
      color: 'warning',
      faqs: [
        {
          question: 'How long does it take to make a stamp?',
          answer: 'Standard stamps are ready within 2-5 business days. Simple rubber stamps can be completed within 24 hours, while complex custom designs may take up to a week.'
        },
        {
          question: 'Do you provide delivery services?',
          answer: 'Yes, we offer free pickup and delivery within 5km of our shop in Shakarpur, Delhi. For locations beyond this, delivery charges apply based on distance.'
        },
        {
          question: 'Can I get same-day service?',
          answer: 'Yes, we offer express same-day service for simple stamp designs. This service is available for an additional charge and subject to our current workload.'
        },
        {
          question: 'Do you deliver outside Delhi?',
          answer: 'Yes, we deliver across India through courier services. Delivery charges and timeline vary based on location. We also ship stamps securely packaged to ensure they reach you in perfect condition.'
        }
      ]
    },
    {
      title: 'Technical & Design',
      icon: Settings,
      color: 'craftsmanship',
      faqs: [
        {
          question: 'What file formats do you accept for designs?',
          answer: 'We accept JPG, PNG, PDF, AI, and CDR files. For best results, provide high-resolution images. We can also work with hand-drawn sketches and convert them to digital formats.'
        },
        {
          question: 'What is the maximum size stamp you can make?',
          answer: 'We can create stamps up to 4" x 6" (100mm x 150mm) in size. For larger requirements, we can suggest alternative solutions or create multiple smaller stamps.'
        },
        {
          question: 'Can you recreate an existing stamp?',
          answer: 'Yes, if you have an existing stamp impression or clear image, we can recreate it. However, we need to ensure there are no copyright issues with the design.'
        },
        {
          question: 'Do you provide design services?',
          answer: 'Yes, our team can help create professional designs based on your requirements. We can design logos, layouts, and suggest the best stamp type for your needs.'
        }
      ]
    }
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
              <div className="space-y-4 mt-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-40 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 mt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-surface to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Frequently Asked Questions
              </h1>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Find quick answers to common questions about our stamping services, pricing, delivery, and custom solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-12">
                
                {faqCategories.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  
                  return (
                    <div key={categoryIndex} className="space-y-6">
                      {/* Category Header */}
                      <div className="flex items-center space-x-4 mb-8">
                        <div className={`w-12 h-12 bg-${category.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 text-${category.color}-foreground`} />
                        </div>
                        <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-primary">
                          {category.title}
                        </h2>
                      </div>

                      {/* FAQ Accordion */}
                      <div className="bg-card rounded-lg shadow-brand overflow-hidden">
                        <Accordion type="multiple" className="w-full">
                          {category.faqs.map((faq, faqIndex) => (
                            <AccordionItem 
                              key={faqIndex} 
                              value={`${categoryIndex}-${faqIndex}`}
                              className="border-border/50"
                            >
                              <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                                <span className="font-body font-semibold text-text-primary text-left">
                                  {faq.question}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-4">
                                <div className="font-body text-text-secondary leading-relaxed">
                                  {faq.answer}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gradient-to-b from-background to-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-accent/10 rounded-lg p-8 border border-accent/20 text-center">
                <div className="flex justify-center mb-6">
                  <Mail className="w-12 h-12 text-accent" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Still Have Questions?
                </h2>
                <p className="font-body text-text-secondary mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Don't hesitate to reach out to our friendly team. 
                  We're here to help with any questions about our stamping services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <p className="font-body font-semibold text-text-primary">Call Us</p>
                    <a 
                      href="tel:+919899259454" 
                      className="font-body text-accent hover:text-accent/80 transition-colors"
                    >
                      +91-98992-59454
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body font-semibold text-text-primary">Email Us</p>
                    <a 
                      href="mailto:krishankumar651@yahoo.com" 
                      className="font-body text-accent hover:text-accent/80 transition-colors"
                    >
                      krishankumar651@yahoo.com
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body font-semibold text-text-primary">Visit Us</p>
                    <a 
                      href="https://maps.app.goo.gl/KYC2xUJGVj7dDtLi9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-accent hover:text-accent/80 transition-colors"
                    >
                      Shop No.17, Shakarpur
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
