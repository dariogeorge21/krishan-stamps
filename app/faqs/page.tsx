import type { Metadata } from 'next';
import FAQsInteractive from './components/FAQsInteractive';

export const metadata: Metadata = {
  title: 'FAQs - Krishan Stamps Professional | Common Questions & Answers',
  description: 'Find answers to frequently asked questions about our stamp making services, delivery times, pricing, and custom stamp solutions at Krishan Stamps Professional.',
  openGraph: {
    type: 'website',
    url: 'https://krishanstampsmaker.in/faqs',
    title: 'FAQs - Krishan Stamps Professional',
    description: 'Answers to common questions about our stamp making services, pricing, and delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs - Krishan Stamps Professional',
    description: 'Find answers about our stamp services and solutions.',
  },
  alternates: {
    canonical: 'https://krishanstampsmaker.in/faqs',
  },
};

export default function FAQsPage() {
  return <FAQsInteractive />;
}
