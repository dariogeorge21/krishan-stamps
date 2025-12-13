import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function ServiceCard({ icon, title, description, features, highlighted = false }: ServiceCardProps) {
  return (
    <div className={`relative bg-surface rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${highlighted ? 'ring-2 ring-accent' : ''}`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-cta font-bold rounded-bl-lg">
          POPULAR
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${highlighted ? 'bg-accent' : 'bg-primary'}`}>
          <CheckCircle size={32} className={highlighted ? 'text-accent-foreground' : 'text-primary-foreground'} />
        </div>

        {/* Title */}
        <h3 className="font-headline text-2xl font-bold text-text-primary mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-text-secondary mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-text-primary">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className={`w-full py-3 px-6 rounded-md font-cta font-bold text-sm transition-all duration-300 ${highlighted ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
          Learn More
        </button>
      </div>
    </div>
  );
}