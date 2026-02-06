import type { Metadata } from 'next';
import PrivacyPolicyInteractive from './components/PrivacyPolicyInteractive';

export const metadata: Metadata = {
  title: 'Privacy Policy - Krishan Stamps Professional | Your Data Protection',
  description: 'Read our privacy policy to understand how Krishan Stamps Professional collects, uses, and protects your personal information when you use our stamping services.',
  canonical: 'https://krishanstampsmaker.in/privacy-policy',
  openGraph: {
    type: 'website',
    url: 'https://krishanstampsmaker.in/privacy-policy',
    title: 'Privacy Policy - Krishan Stamps Professional',
    description: 'Our commitment to protecting your personal information and data privacy.',
  },
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyInteractive />;
}
