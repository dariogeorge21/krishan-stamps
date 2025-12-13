import type { Metadata } from 'next';
import Header from '@/components/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - Krishan Stamps Professional',
  description: 'Comprehensive stamping solutions including custom design consultation, bulk orders, same-day express service, and general printing. Serving Delhi NCR with 12+ years of expertise and premium quality guaranteed.'
};

export default function ServicesPage() {
  const heroData = {
    title: 'Professional Stamping Services',
    description: 'From custom design consultation to bulk orders and express delivery, we provide comprehensive stamping solutions tailored to your business needs across Delhi NCR.'
  };

  const services = [
  {
    icon: 'PencilSquareIcon',
    title: 'Custom Design Consultation',
    description: 'Expert guidance and personalized recommendations for creating the perfect stamp design that represents your professional identity.',
    features: [
    'One-on-one design consultation with experts',
    'Unlimited design revisions until perfect',
    'Professional mockups and previews',
    'Material and size recommendations',
    'Brand identity alignment guidance'],

    highlighted: false
  },
  {
    icon: 'CubeIcon',
    title: 'Bulk Order Solutions',
    description: 'Competitive pricing tiers and dedicated account management for corporate clients requiring large-scale stamping solutions.',
    features: [
    'Volume-based pricing discounts',
    'Dedicated account manager',
    'Formal quotations and invoicing',
    'Quality consistency guarantee',
    'Flexible payment terms'],

    highlighted: true
  },
  {
    icon: 'BoltIcon',
    title: 'Same-Day Express Service',
    description: 'Urgent stamping needs? We offer same-day and express delivery options for time-sensitive business requirements.',
    features: [
    'Same-day delivery within 10 km',
    'Express 24-hour service available',
    'Priority production queue',
    'Real-time order tracking',
    'Emergency support hotline'],

    highlighted: false
  },
  {
    icon: 'PrinterIcon',
    title: 'General Printing Solutions',
    description: 'Beyond stamps, we offer comprehensive printing services including business cards, letterheads, and official documentation.',
    features: [
    'Business cards and stationery',
    'Official letterheads and envelopes',
    'Certificate and document printing',
    'Custom packaging solutions',
    'Digital and offset printing options'],

    highlighted: false
  }];


  const processSteps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'Share your requirements and get expert recommendations',
    icon: 'ChatBubbleLeftRightIcon'
  },
  {
    number: '2',
    title: 'Design',
    description: 'Review and approve your custom stamp design',
    icon: 'PencilIcon'
  },
  {
    number: '3',
    title: 'Production',
    description: 'We craft your stamp with precision and care',
    icon: 'WrenchScrewdriverIcon'
  },
  {
    number: '4',
    title: 'Delivery',
    description: 'Receive your quality stamp on time, guaranteed',
    icon: 'TruckIcon'
  }];


  const serviceAreas = [
  { name: 'East Delhi', coverage: 'Shakarpur, Preet Vihar, Laxmi Nagar' },
  { name: 'Central Delhi', coverage: 'Connaught Place, Karol Bagh' },
  { name: 'South Delhi', coverage: 'Nehru Place, Saket, Greater Kailash' },
  { name: 'West Delhi', coverage: 'Janakpuri, Rajouri Garden' },
  { name: 'North Delhi', coverage: 'Model Town, Rohini' },
  { name: 'Noida', coverage: 'Sector 18, Sector 62' },
  { name: 'Gurgaon', coverage: 'Cyber City, DLF Phase 1-5' },
  { name: 'Faridabad', coverage: 'NIT, Sector 15-21' }];


  const brandPartners = [
  {
    name: 'Trodat',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_112fe8dc5-1765631453076.png",
    alt: 'Trodat logo - premium self-inking stamp manufacturer with red and white branding',
    description: 'Austrian precision engineering'
  },
  {
    name: 'Dura',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6007be6-1765631453742.png",
    alt: 'Dura logo - reliable stamp manufacturing brand with blue corporate identity',
    description: 'Durable quality solutions'
  },
  {
    name: 'Sun',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f462a613-1765631455938.png",
    alt: 'Sun logo - trusted stamp brand with yellow and orange sun symbol',
    description: 'Trusted Indian brand'
  },
  {
    name: 'Colop',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_154f20177-1764661576649.png",
    alt: 'Colop logo - innovative stamp technology company with modern blue design',
    description: 'Innovative stamp technology'
  }];


  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServicesInteractive
          heroData={heroData}
          services={services}
          processSteps={processSteps}
          serviceAreas={serviceAreas}
          brandPartners={brandPartners} />

      </main>
    </>);

}