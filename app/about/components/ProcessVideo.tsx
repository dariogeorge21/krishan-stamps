import Image from 'next/image';
import { Play, PenSquare, Box, Cog, CheckCircle } from 'lucide-react';

const ProcessVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Behind the Scenes
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Witness the craftsmanship and precision that goes into creating every stamp
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-text-primary/5">
            <Image
              src="https://img.rocket.new/generatedImages/rocket_gen_img_10b0d1f77-1764792037149.png"
              alt="Craftsman hands carefully engraving custom design on rubber stamp material with precision tools in well-lit workshop"
              fill
              className="object-cover" />

            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/40 to-transparent flex items-center justify-center">
              <button className="w-20 h-20 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110">
                <Play size={32} className="text-accent-foreground fill-current ml-1" />
              </button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-headline font-bold text-2xl text-white mb-2">
                The Art of Stamp Making
              </h3>
              <p className="font-body text-white/90">
                Watch how traditional craftsmanship meets modern technology
              </p>
            </div>
          </div>

          {/* Process Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: PenSquare, title: 'Design', description: 'Custom design consultation' },
              { icon: Box, title: 'Material', description: 'Premium quality selection' },
              { icon: Cog, title: 'Crafting', description: 'Precision manufacturing' },
              { icon: CheckCircle, title: 'Quality', description: 'Rigorous inspection' }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-background rounded-xl p-6 text-center shadow-md">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={28} className="text-primary" />
                  </div>
                  <h4 className="font-headline font-bold text-lg text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>);

};

export default ProcessVideo;