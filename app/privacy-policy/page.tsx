import type { Metadata } from 'next';
import PrivacyPolicyInteractive from './components/PrivacyPolicyInteractive';

export const metadata: Metadata = {
  title: 'Privacy Policy - Krishan Stamps Professional',
  description: 'Read our privacy policy to understand how Krishan Stamps Professional collects, uses, and protects your personal information when you use our stamping services.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyInteractive />;
}
