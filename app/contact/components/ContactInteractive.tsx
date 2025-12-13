'use client';

import React from 'react';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import ContactHero from './ContactHero';
import ContactInfoCard from './ContactInfoCard';
import LocationMap from './LocationMap';
import QuoteRequestForm from './QuoteRequestForm';
import PaymentMethods from './PaymentMethods';
import FAQSection from './FAQSection';
import FloatingContactButtons from './FloatingContactButtons';

interface ContactMethod {
  icon: React.ComponentType<{ size: number; className: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
  available: string;
}

interface PaymentMethod {
  name: string;
  icon: string;
  alt: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ContactInteractive() {
  const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-98765-43210',
    href: 'tel:+919876543210',
    description: 'Call us for immediate assistance',
    available: 'Available Mon-Sat, 9 AM - 8 PM IST'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@krishanstamps.com',
    href: 'mailto:info@krishanstamps.com',
    description: 'Send us your detailed requirements',
    available: 'Response within 2 hours'
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91-98765-43210',
    href: 'https://wa.me/919876543210',
    description: 'Quick chat for instant queries',
    available: 'Available Mon-Sat, 9 AM - 8 PM IST'
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Shakarpur, East Delhi',
    href: 'https://www.google.com/maps/dir/?api=1&destination=28.6517,77.2865',
    description: 'Shop No. 45, Main Market Road',
    available: 'Open Mon-Sat, 9 AM - 8 PM IST'
  }];


  const paymentMethods: PaymentMethod[] = [
  {
    name: 'Cash',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5b39561-1765263582381.png",
    alt: 'Stack of Indian rupee currency notes on wooden surface',
    description: 'On Delivery'
  },
  {
    name: 'UPI',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_169e95c18-1765108881198.png",
    alt: 'Smartphone displaying UPI payment interface with QR code',
    description: 'Instant'
  },
  {
    name: 'Cards',
    icon: "https://images.unsplash.com/photo-1621524239965-e56030a5379e",
    alt: 'Credit and debit cards arranged on blue background',
    description: 'All Major'
  },
  {
    name: 'Net Banking',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1984e44e5-1764790864165.png",
    alt: 'Laptop screen showing online banking login interface',
    description: 'Secure'
  },
  {
    name: 'Paytm',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_177d031cd-1765552528277.png",
    alt: 'Mobile phone displaying Paytm digital wallet app',
    description: 'Wallet'
  },
  {
    name: 'Google Pay',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc985682-1764635352004.png",
    alt: 'Smartphone showing Google Pay payment confirmation screen',
    description: 'Quick Pay'
  },
  {
    name: 'PhonePe',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_130bf8169-1765591642341.png",
    alt: 'Mobile device with PhonePe app open showing transaction history',
    description: 'Easy'
  },
  {
    name: 'NEFT/RTGS',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_14224218f-1764667263945.png",
    alt: 'Bank transfer receipt showing NEFT transaction details',
    description: 'Bank Transfer'
  }];


  const faqs: FAQ[] = [
  {
    question: 'What is your typical turnaround time for custom stamps?',
    answer: 'Standard orders are completed within 3-5 business days. We offer express service (1-2 days) and same-day service for urgent requirements. Same-day service is available for orders placed before 12 PM and depends on design complexity.'
  },
  {
    question: 'Do you offer same-day stamp making service?',
    answer: 'Yes! We provide same-day service for most standard stamp designs. Orders must be placed before 12 PM, and the design should not be overly complex. Additional charges apply for same-day service. Please call us at +91-98765-43210 to confirm availability.'
  },
  {
    question: 'What information do I need to provide for a custom stamp?',
    answer: 'You need to provide: 1) Text content for the stamp, 2) Preferred size, 3) Type of stamp (rubber, self-inking, etc.), 4) Any logo or design elements, 5) Quantity required. Our team will guide you through the design process and provide a proof before production.'
  },
  {
    question: 'Can I see a proof before the stamp is made?',
    answer: 'Absolutely! We provide a digital proof of your stamp design for approval before production begins. You can request changes until you are completely satisfied with the design. This ensures you get exactly what you want.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including cash, UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and NEFT/RTGS transfers. For custom orders, we typically require 50% advance payment, with the balance due on delivery or completion.'
  },
  {
    question: 'Do you deliver stamps, or do I need to pick them up?',
    answer: 'We offer both options! You can visit our shop in Shakarpur to collect your order, or we can arrange delivery within Delhi NCR. Delivery charges apply based on location. For urgent orders, we recommend pickup to ensure fastest service.'
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'We accept orders starting from a single stamp. There is no minimum order quantity. However, for bulk orders (10+ stamps), we offer special discounted pricing. Contact us for a custom quote on bulk orders.'
  },
  {
    question: 'Can you replicate an existing stamp design?',
    answer: 'Yes, we can replicate existing stamp designs. Please bring the original stamp or provide a clear image of the impression. We will create a new stamp matching the design as closely as possible. Note that we cannot replicate government seals or copyrighted designs without proper authorization.'
  }];


  return (
    <>
      <ContactHero
        title="Get In Touch With Us"
        subtitle="Have questions about our stamp services? Need a custom quote? Our expert team is ready to help you find the perfect stamping solution for your business needs." />


      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <ContactInfoCard methods={contactMethods} />
            <QuoteRequestForm />
          </div>

          <div className="mb-16">
            <LocationMap />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <FAQSection faqs={faqs} />
            </div>
            <div>
              <PaymentMethods methods={paymentMethods} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-2xl p-8 lg:p-12 text-center shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Make Your Mark?
              </h2>
              <p className="font-body text-lg text-primary-foreground/90 mb-8">
                Join hundreds of satisfied customers who trust Krishan Stamps for their professional stamping needs. Get your custom quote today!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-cta font-bold text-base rounded-lg shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">

                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-[#25D366] text-white font-cta font-bold text-base rounded-lg shadow-md hover:bg-[#20BD5A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">

                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingContactButtons />
    </>);

}