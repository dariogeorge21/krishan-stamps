import type { Metadata } from 'next';
import AboutInteractive from './About';

export const metadata: Metadata = {
  title: 'About Us - Krishan Stamps Professional',
  description: 'Discover Krishan Stamps Maker\'s 12+ year heritage of traditional craftsmanship and modern efficiency. Meet our expert team and learn why we\'re Delhi NCR\'s trusted stamping solution provider since 2012.',
};

export default function AboutPage() {
  return <AboutInteractive />;
}
