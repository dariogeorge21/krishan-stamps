import Image from 'next/image';
import { ShieldCheck, Heart, Zap, Lightbulb } from 'lucide-react';

const CompanyStory = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Our Story: A Legacy of Precision
          </h2>
          <p className="font-body text-lg text-text-secondary">
            From humble beginnings to becoming Delhi NCR's trusted stamping solution provider
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-headline font-bold text-2xl text-text-primary">
                The Beginning (2012)
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Krishan Stamps Maker was founded in 2012 with a simple vision: to provide businesses in Delhi NCR with high-quality, reliable stamping solutions that reflect their professional identity. What started as a small workshop in East Delhi has grown into a trusted name in the custom stamping industry.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline font-bold text-2xl text-text-primary">
                Our Philosophy
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                We believe that every stamp tells a story and serves a purpose. Whether it's a small business owner getting their first official stamp or a large corporation requiring bulk orders, we treat each project with the same level of care and precision. Our approach combines traditional craftsmanship with modern efficiency, ensuring that quality never takes a backseat to speed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline font-bold text-2xl text-text-primary">
                Today and Beyond
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Over 12 years later, we've served more than 5,000 satisfied customers across Delhi NCR. Our commitment to quality, personalized service, and community engagement has made us the go-to choice for businesses of all sizes. We continue to evolve, adopting new technologies while maintaining the artisanal quality that defines our brand.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
                <ShieldCheck size={20} className="text-primary fill-current" />
                <span className="font-body font-semibold text-primary">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-lg">
                <Heart size={20} className="text-success fill-current" />
                <span className="font-body font-semibold text-success">Customer First</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-lg">
                <Zap size={20} className="text-accent fill-current" />
                <span className="font-body font-semibold text-accent">Fast Service</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d6a63d93-1765307814241.png"
                alt="Traditional stamp making workshop with vintage equipment and modern tools side by side showing evolution of craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Lightbulb size={32} className="flex-shrink-0 fill-current" />
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2">Our Mission</h4>
                  <p className="font-body text-sm opacity-90">
                    To be the most trusted stamping solution provider in Delhi NCR by delivering exceptional quality, personalized service, and innovative solutions that help businesses make their mark matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default CompanyStory;