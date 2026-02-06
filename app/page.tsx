import type { Metadata } from 'next';

import HomepageInteractive from './home/components/HomePageInteractive';

export const metadata: Metadata = {
  title: 'Krishan Stamps Maker - Custom Rubber Stamps & Printing Solutions',
  description:
    'Explore Krishan Stamps Maker, your trusted partner for custom rubber stamps, self-inking stamps, embossing seals, and name plates. Serving Delhi NCR since 2012 with fast, reliable, and high-quality stamping solutions.',
  canonical: 'https://krishanstampsmaker.in',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishanstampsmaker.in',
    siteName: 'Krishan Stamps Maker',
    title: 'Krishan Stamps Maker - Custom Rubber Stamps & Printing Solutions',
    description: 'Your trusted partner for custom rubber stamps, self-inking stamps, embossing seals, and name plates since 2012.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishan Stamps Maker - Custom Rubber Stamps',
    description: 'Custom rubber stamps and professional printing solutions in Delhi NCR.',
  },
};

export default function Home() {
  return <HomepageInteractive />;
}