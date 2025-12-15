import { Briefcase, AlertTriangle, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessStory {
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
}

const SuccessStories = () => {
  const stories: SuccessStory[] = [
  {
    title: 'Quick Turnaround for Startup',
    client: 'Local Retail Shop Owner',
    category: 'Same-Day Stamp',
    challenge: 'Needed custom shop stamp urgently for inventory marking before the next business day',
    solution: 'Custom designed and delivered the stamp within 3 hours at our workshop',
    result: 'Shop owner got their stamp ready and started using it the same day without any delay'
  },
  {
    title: 'Bulk Order for Small Business',
    client: 'Office Supplies Distributor',
    category: 'Bulk Order',
    challenge: 'Required 50 customized company stamps for their clients with consistent quality',
    solution: 'Organized production schedule and ensured perfect consistency across all stamps',
    result: 'All stamps delivered on time with excellent quality, distributor became a regular customer'
  },
  {
    title: 'Professional Seal for Certificates',
    client: 'Training Institute',
    category: 'Custom Embossing Seal',
    challenge: 'Needed an embossing seal for their certificates to add authenticity',
    solution: 'Created a custom embossing seal with their logo and institute name',
    result: 'Certificates now look official and professional, enhancing the value of training programs'
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