'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  popular: boolean;
}

const FeaturedProducts = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const products: Product[] = [
  {
    id: 1,
    name: "Self-Inking Stamps",
    category: "Stamps",
    description: "Premium quality self-inking stamps with up to 10,000 impressions. Available in multiple sizes and colors.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_155bfd107-1765302420296.png",
    alt: "Professional self-inking rubber stamp with blue ink pad showing clear impression on white paper",
    features: ["10,000+ Impressions", "Multiple Colors", "Custom Design"],
    popular: true
  },
  {
    id: 2,
    name: "Embossing Seals",
    category: "Seals",
    description: "Elegant embossing seals for official documents. Create professional raised impressions that last.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1668d3d7a-1765031734317.png",
    alt: "Gold embossing seal creating raised circular impression on cream colored official document",
    features: ["Premium Quality", "Custom Design", "Durable Metal"],
    popular: true
  },
  {
    id: 3,
    name: "Date Stamps",
    category: "Stamps",
    description: "Adjustable date stamps perfect for offices. Easy to change dates with clear, crisp impressions.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f45be74c-1765302421185.png",
    alt: "Modern adjustable date stamp with rotating wheels showing current date in black ink",
    features: ["Easy Date Change", "Clear Impression", "Long Lasting"],
    popular: false
  },
  {
    id: 4,
    name: "Name Plates",
    category: "Plates",
    description: "Professional name plates in brass, steel, and acrylic. Perfect for offices and homes.",
    image: "https://images.unsplash.com/photo-1716488764186-78eb7351d276",
    alt: "Polished brass name plate with engraved text mounted on dark wooden door",
    features: ["Multiple Materials", "Custom Engraving", "Premium Finish"],
    popular: true
  },
  {
    id: 5,
    name: "Rubber Stamps",
    category: "Stamps",
    description: "Traditional rubber stamps with wooden handles. Reliable and cost-effective solution.",
    image: "https://images.unsplash.com/photo-1593448807258-e50956785800",
    alt: "Classic wooden handle rubber stamp with red ink pad on vintage desk",
    features: ["Cost Effective", "Durable Rubber", "Custom Text"],
    popular: false
  },
  {
    id: 6,
    name: "Common Seals",
    category: "Seals",
    description: "Official common seals for companies and organizations. Meets all legal requirements.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6a5b733-1765631453842.png",
    alt: "Corporate common seal with company logo creating official impression on legal document",
    features: ["Legal Compliant", "Professional Design", "High Quality"],
    popular: false
  }];


  const categories = ['All', 'Stamps', 'Seals', 'Plates'];

  const filteredProducts = activeCategory === 'All' ?
  products :
  products.filter((p) => p.category === activeCategory);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Featured Products
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Explore our comprehensive range of professional stamping solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) =>
            <div key={product.id} className="bg-muted rounded-lg p-6">
                <div className="aspect-square bg-background rounded-lg mb-4" />
                <h3 className="font-headline text-xl font-bold text-text-primary mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Featured Products
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our comprehensive range of professional stamping solutions crafted with precision and care
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 font-body font-semibold text-sm rounded-full transition-all duration-300 ${
            activeCategory === category ?
            'bg-primary text-primary-foreground shadow-md' :
            'bg-muted text-text-secondary hover:bg-muted/80'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) =>
          <div
            key={product.id}
            className="group bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" />

                {product.popular &&
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-body font-bold text-xs shadow-md">
                    Popular
                  </div>
              }
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-body font-semibold text-xs rounded-full">
                    {product.category}
                  </span>
                  <Star size={20} className="text-warning" />
                </div>

                <h3 className="font-headline text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) =>
                <div
                  key={index}
                  className="flex items-center space-x-1 text-xs font-body text-text-secondary">

                      <CheckCircle size={14} className="text-success" />
                      <span>{feature}</span>
                    </div>
                )}
                </div>

                {/* CTA */}
                <Link
                href="/services"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary/90 transition-all duration-300">

                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-cta font-bold text-base rounded-md shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            View All Products
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProducts;