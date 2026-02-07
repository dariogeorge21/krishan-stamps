import type { Metadata } from 'next';
import TermsConditionsInteractive from './components/TermsConditionsInteractive';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Krishan Stamps Professional | Legal Terms',
  description: 'Read our terms and conditions to understand the rules and guidelines for using Krishan Stamps Professional services and products.',
  openGraph: {
    type: 'website',
    url: 'https://krishanstampsmaker.in/terms-conditions',
    title: 'Terms & Conditions - Krishan Stamps Professional',
    description: 'Legal terms and conditions for using our services.',
  },
  robots: {
    index: false,
  },
  alternates: {
    canonical: 'https://krishanstampsmaker.in/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return <TermsConditionsInteractive />;
}
