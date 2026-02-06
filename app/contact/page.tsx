import type { Metadata } from 'next';
import Header from '@/components/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact Krishan Stamps | Same-Day Service & Quick Response',
  description: 'Get in touch with Krishan Stamps for custom stamp solutions in Delhi NCR. Call +91-98765-43210 or visit our Shakarpur shop. Same-day service available with 2-hour response guarantee.',
  canonical: 'https://krishanstampsmaker.in/contact',
  openGraph: {
    type: 'website',
    url: 'https://krishanstampsmaker.in/contact',
    title: 'Contact Krishan Stamps | Same-Day Service & Quick Response',
    description: 'Reach us for custom stamp solutions in Delhi NCR. Same-day service, 2-hour response guarantee.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Krishan Stamps',
    description: 'Get in touch for custom stamps. Same-day service in Delhi NCR.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 lg:pt-32">
        <ContactInteractive />
      </div>
    </main>
  );
}