import type { Metadata } from 'next';

import HomepageInteractive from './home/components/HomePageInteractive';

export const metadata: Metadata = {
  title: 'Krishan Stamps Maker - Custom Rubber Stamps & Printing Solutions',
  description:
    'Explore Krishan Stamps Maker, your trusted partner for custom rubber stamps, self-inking stamps, embossing seals, and name plates. Serving Delhi NCR since 2012 with fast, reliable, and high-quality stamping solutions.',
};

export default function Home() {
  return <HomepageInteractive />;
}