'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, CreditCard, Truck, RefreshCw, Mail } from 'lucide-react';

export default function TermsConditionsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-32 bg-muted rounded" />
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
                <div className="w-16 h-16 bg-craftsmanship rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-craftsmanship-foreground" />
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Terms & Conditions
              </h1>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our stamping services and products.
              </p>
              <p className="font-body text-sm text-text-secondary mt-4">
                Last updated: December 15, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-8">
                
                {/* General Terms */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-primary mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      General Terms
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>By engaging our services at Krishan Stamps Professional, you agree to these terms and conditions:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>These terms apply to all orders, consultations, and services provided</li>
                      <li>We reserve the right to update these terms with reasonable notice</li>
                      <li>All orders are subject to our acceptance and availability</li>
                      <li>Custom orders require detailed specifications and advance payment</li>
                    </ul>
                  </div>
                </div>

                {/* Order and Payment Terms */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <CreditCard className="w-6 h-6 text-success mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Order & Payment Terms
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>Payment and order policies:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>50% advance payment required for custom stamp orders</li>
                      <li>Balance payment due upon completion before delivery</li>
                      <li>Prices are subject to change based on material costs</li>
                      <li>Payment accepted via cash, UPI, or bank transfer</li>
                      <li>All payments are in Indian Rupees (INR)</li>
                      <li>No refund on custom-made stamps and seals</li>
                    </ul>
                  </div>
                </div>

                {/* Delivery Terms */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <Truck className="w-6 h-6 text-warning mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Delivery Terms
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>Delivery and pickup policies:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Standard delivery time: 2-5 business days for most orders</li>
                      <li>Express service available for urgent orders (additional charges apply)</li>
                      <li>Free pickup available within 5km of our shop</li>
                      <li>Delivery charges apply for orders outside Delhi NCR</li>
                      <li>Customer must inspect items upon delivery</li>
                      <li>We are not responsible for delays due to unforeseen circumstances</li>
                    </ul>
                  </div>
                </div>

                {/* Quality and Warranty */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="w-6 h-6 text-craftsmanship mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Quality & Warranty
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>Our commitment to quality:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All products come with a 6-month manufacturing defect warranty</li>
                      <li>Warranty covers material and workmanship defects only</li>
                      <li>Replacement or repair at our discretion for defective items</li>
                      <li>Normal wear and tear is not covered under warranty</li>
                      <li>Customer must provide proof of purchase for warranty claims</li>
                      <li>We guarantee the accuracy of approved designs and specifications</li>
                    </ul>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-error mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Intellectual Property & Compliance
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>Important legal considerations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Customer must own or have rights to all designs and logos</li>
                      <li>We will not create stamps for copyrighted or trademarked content without permission</li>
                      <li>Customer is responsible for legal compliance of stamp usage</li>
                      <li>We reserve the right to refuse orders that may be illegal or unethical</li>
                      <li>Government seal reproductions require proper authorization</li>
                      <li>Customer indemnifies us against any legal claims related to their designs</li>
                    </ul>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-warning mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Limitation of Liability
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>Our liability is limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>The cost of the specific product or service provided</li>
                      <li>We are not liable for consequential or indirect damages</li>
                      <li>Customer must report issues within 7 days of delivery</li>
                      <li>Our total liability shall not exceed the order value</li>
                      <li>Force majeure events are beyond our control and responsibility</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-accent/10 rounded-lg p-8 border border-accent/20">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-accent mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Questions About Terms
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> krishankumar651@yahoo.com</p>
                      <p><strong>Phone:</strong> +91-98992-59454</p>
                      <p><strong>Address:</strong> Shop No.17, Veer Savarkar Block, Shakarpur, Delhi-110092</p>
                    </div>
                    <p className="text-sm mt-4">
                      By placing an order with us, you acknowledge that you have read, understood, and agree to these terms and conditions.
                    </p>
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
