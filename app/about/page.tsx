import type { Metadata } from 'next';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About Us - Krishan Stamps Professional | 12+ Years of Excellence',
  description: 'Discover Krishan Stamps Maker\'s 12+ year heritage of traditional craftsmanship and modern efficiency. Meet our expert team and learn why we\'re Delhi NCR\'s trusted stamping solution provider since 2012.',
  canonical: 'https://krishanstampsmaker.in/about',
  openGraph: {
    type: 'website',
    url: 'https://krishanstampsmaker.in/about',
    title: 'About Us - Krishan Stamps Professional | 12+ Years of Excellence',
    description: 'Discover our heritage of traditional craftsmanship, modern expertise, and commitment to quality since 2012.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Krishan Stamps - 12+ Years of Excellence',
    description: 'Learn about our heritage, expertise, and commitment to professional stamping solutions.',
  },
};

export default function AboutPage() {
  return <AboutInteractive />;
}
