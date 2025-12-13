import Image from "next/image";
interface BrandPartner {
  name: string;
  logo: string;
  alt: string;
  description: string;
}

interface BrandPartnersProps {
  partners: BrandPartner[];
}

export default function BrandPartners({ partners }: BrandPartnersProps) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Premium Brand Partners
            </h2>
            <p className="font-body text-lg text-text-secondary">
              We work with the world's leading stamp manufacturers to ensure quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square flex items-center justify-center mb-4 overflow-hidden rounded-md bg-muted relative">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-headline text-lg font-bold text-text-primary text-center mb-2">
                  {partner.name}
                </h3>
                <p className="font-body text-xs text-text-secondary text-center">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}