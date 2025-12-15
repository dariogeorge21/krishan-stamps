import type { Metadata } from 'next';
import TermsConditionsInteractive from './components/TermsConditionsInteractive';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Krishan Stamps Professional',
  description: 'Read our terms and conditions to understand the rules and guidelines for using Krishan Stamps Professional services and products.',
};

export default function TermsConditionsPage() {
  return <TermsConditionsInteractive />;
}
