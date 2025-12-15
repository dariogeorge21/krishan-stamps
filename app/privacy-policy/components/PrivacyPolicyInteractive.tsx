'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, UserCheck, Database, Mail } from 'lucide-react';

export default function PrivacyPolicyInteractive() {
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
                <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-trust-foreground" />
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Privacy Policy
              </h1>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information at Krishan Stamps Professional.
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
                
                {/* Information We Collect */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-primary mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Information We Collect
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>We collect information you provide directly to us, such as:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact information (name, email, phone number, address)</li>
                      <li>Order details and specifications for custom stamps and seals</li>
                      <li>Payment information (processed securely through our payment providers)</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <UserCheck className="w-6 h-6 text-success mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      How We Use Your Information
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Process and fulfill your stamp and seal orders</li>
                      <li>Communicate with you about your orders and services</li>
                      <li>Provide customer support and respond to inquiries</li>
                      <li>Improve our products and services</li>
                      <li>Send you updates about our business (with your consent)</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>

                {/* Information Sharing */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-warning mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Information Sharing
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With service providers who help us operate our business (payment processors, shipping companies)</li>
                      <li>When required by law or to protect our legal rights</li>
                      <li>In case of a business transfer or merger (with prior notice)</li>
                      <li>With your explicit consent for specific purposes</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <Lock className="w-6 h-6 text-craftsmanship mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Data Security
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>We implement appropriate security measures to protect your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Secure storage of physical customer records</li>
                      <li>Encrypted transmission of sensitive data</li>
                      <li>Limited access to personal information by authorized personnel only</li>
                      <li>Regular review and update of our security practices</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="bg-card rounded-lg p-8 shadow-brand">
                  <div className="flex items-center mb-4">
                    <UserCheck className="w-6 h-6 text-trust mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Your Rights
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and review your personal information</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>File a complaint about our privacy practices</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-accent/10 rounded-lg p-8 border border-accent/20">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-accent mr-3" />
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                      Contact Us About Privacy
                    </h2>
                  </div>
                  <div className="font-body text-text-secondary space-y-4">
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> krishankumar651@yahoo.com</p>
                      <p><strong>Phone:</strong> +91-98992-59454</p>
                      <p><strong>Address:</strong> Shop No.17, Veer Savarkar Block, Shakarpur, Delhi-110092</p>
                    </div>
                    <p className="text-sm mt-4">
                      We will respond to your privacy-related inquiries within 30 days of receipt.
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
