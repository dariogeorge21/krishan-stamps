import Image from 'next/image';
import { Briefcase, AlertTriangle, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessStory {
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
}

const SuccessStories = () => {
  const stories: SuccessStory[] = [
  {
    title: 'Corporate Rebranding Success',
    client: 'TechCorp Solutions',
    category: 'Bulk Corporate Order',
    challenge: 'Needed 500+ stamps across 15 offices with new branding within 2 weeks',
    solution: 'Coordinated bulk production with quality consistency and phased delivery',
    result: 'Delivered all stamps on time with 100% brand consistency across locations',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_177edc861-1764769947353.png",
    beforeAlt: 'Old worn-out rubber stamp with faded company logo on wooden desk',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a571eaff-1765302422516.png",
    afterAlt: 'New professional self-inking stamp with crisp modern company logo and clear impression'
  },
  {
    title: 'Medical Practice Excellence',
    client: 'Dr. Anjali Mehta Clinic',
    category: 'Custom Professional Stamp',
    challenge: 'Required unique stamp design reflecting medical professionalism and personal brand',
    solution: 'Custom design consultation with multiple iterations and premium materials',
    result: 'Created distinctive stamp that enhanced professional image and patient trust',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_166647e7a-1764667686056.png",
    beforeAlt: 'Generic basic rubber stamp with simple text on medical prescription pad',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11f17e459-1765631454300.png",
    afterAlt: 'Elegant custom medical stamp with professional logo and detailed information on prescription'
  },
  {
    title: 'Legal Firm Upgrade',
    client: 'Verma & Associates',
    category: 'Premium Embossing Seal',
    challenge: 'Needed high-quality embossing seal for official legal documents',
    solution: 'Premium brass embossing seal with intricate design and perfect alignment',
    result: 'Enhanced document authenticity and firm prestige with professional seal',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a571eaff-1765302422516.png",
    beforeAlt: 'Standard rubber stamp impression on legal document lacking official appearance',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12290c094-1765355656487.png",
    afterAlt: 'Raised embossed seal impression on legal document showing professional quality and authenticity'
  }];


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Customer Success Stories
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Real projects, real results—see how we've helped businesses make their mark
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) =>
          <div
            key={index}
            className="bg-surface rounded-2xl overflow-hidden shadow-lg">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 h-full">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={story.beforeImage}
                        alt={story.beforeAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-text-primary/80 text-white px-3 py-1 rounded-full">
                        <span className="font-body text-xs font-semibold">Before</span>
                      </div>
                    </div>
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={story.afterImage}
                        alt={story.afterAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full">
                        <span className="font-body text-xs font-semibold">After</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <Briefcase size={16} className="text-primary" />
                    <span className="font-body text-xs font-semibold text-primary">
                      {story.category}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-2xl md:text-3xl text-text-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="font-body text-lg text-text-secondary mb-6">
                    {story.client}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle size={18} className="text-accent" />
                        <span className="font-body font-semibold text-text-primary">Challenge</span>
                      </div>
                      <p className="font-body text-sm text-text-secondary leading-relaxed pl-7">
                        {story.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb size={18} className="text-primary" />
                        <span className="font-body font-semibold text-text-primary">Solution</span>
                      </div>
                      <p className="font-body text-sm text-text-secondary leading-relaxed pl-7">
                        {story.solution}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle size={18} className="text-success fill-current" />
                        <span className="font-body font-semibold text-text-primary">Result</span>
                      </div>
                      <p className="font-body text-sm text-text-secondary leading-relaxed pl-7">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-text-secondary mb-6">
            Want to be our next success story?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-cta font-bold rounded-lg shadow-lg hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>);

};

export default SuccessStories;