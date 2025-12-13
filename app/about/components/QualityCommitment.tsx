import Image from 'next/image';
import { Beaker, Cog, Search, FileCheck, ShieldCheck, PenSquare, Box, ThumbsUp } from 'lucide-react';

interface QualityStandard {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
}

const QualityCommitment = () => {
  const standards: QualityStandard[] = [
    {
      icon: Beaker,
      title: 'Premium Materials',
      description: 'We source only the finest rubber, ink, and metal components from trusted suppliers to ensure durability and consistent performance.'
    },
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'State-of-the-art equipment combined with skilled craftsmanship ensures every stamp meets exact specifications.'
    },
    {
      icon: Search,
      title: 'Quality Inspection',
      description: 'Multi-point quality checks at every stage of production guarantee flawless results before delivery.'
    },
    {
      icon: FileCheck,
      title: 'Industry Standards',
      description: 'We adhere to established industry standards and continuously update our processes to maintain excellence.'
    }
  ];


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Our Quality Commitment
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Excellence is not an act, but a habit embedded in every aspect of our work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {standards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-xl text-text-primary mb-2">
                        {standard.title}
                      </h3>
                      <p className="font-body text-text-secondary leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10202005b-1764660484309.png"
                alt="Close-up of quality control specialist inspecting finished rubber stamp with magnifying glass under bright workshop lighting"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <ShieldCheck size={32} className="text-success flex-shrink-0 fill-current" />
                <div>
                  <h4 className="font-headline font-bold text-xl text-text-primary mb-2">
                    100% Quality Guarantee
                  </h4>
                  <p className="font-body text-text-secondary leading-relaxed">
                    We stand behind every product we create. If you're not completely satisfied with the quality of your stamp, we'll remake it at no additional cost. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-text-primary mb-3">
              Our Quality Process
            </h3>
            <p className="font-body text-text-secondary">
              From design to delivery, every step is carefully monitored
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Design Review', icon: PenSquare },
              { step: '02', title: 'Material Selection', icon: Box },
              { step: '03', title: 'Production', icon: Cog },
              { step: '04', title: 'Quality Check', icon: FileCheck },
              { step: '05', title: 'Final Approval', icon: ThumbsUp }
            ].map((phase, index) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <PhaseIcon size={28} className="text-primary-foreground" />
                    </div>
                    <div className="font-headline font-bold text-4xl text-primary/20 mb-2">
                      {phase.step}
                    </div>
                    <div className="font-body font-semibold text-text-primary">
                      {phase.title}
                    </div>
                  </div>
                  {index < 4 &&
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>);

};

export default QualityCommitment;