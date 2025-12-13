import type { Metadata } from 'next';
import Header from '@/components/Header';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact Us - Krishan Stamps Professional',
  description: 'Get in touch with Krishan Stamps for custom stamp solutions in Delhi NCR. Call +91-98765-43210 or visit our Shakarpur shop. Same-day service available with 2-hour response guarantee.',
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