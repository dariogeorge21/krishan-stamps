import type { Metadata } from 'next';
import FAQsInteractive from './components/FAQsInteractive';

export const metadata: Metadata = {
  title: 'FAQs - Krishan Stamps Professional',
  description: 'Find answers to frequently asked questions about our stamp making services, delivery times, pricing, and custom stamp solutions at Krishan Stamps Professional.',
};

export default function FAQsPage() {
  return <FAQsInteractive />;
}
