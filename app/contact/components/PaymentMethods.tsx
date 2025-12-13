import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface PaymentMethod {
  name: string;
  icon: string;
  alt: string;
  description: string;
}

interface PaymentMethodsProps {
  methods: PaymentMethod[];
}

export default function PaymentMethods({ methods }: PaymentMethodsProps) {
  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 border border-border">
      <h3 className="font-headline text-xl lg:text-2xl font-bold text-text-primary mb-6">
        Payment Methods Accepted
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {methods.map((method, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-muted hover:bg-primary/5 rounded-lg transition-all duration-300 group"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300 relative">
              <Image
                src={method.icon}
                alt={method.alt}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="font-cta text-xs font-bold text-text-primary text-center">
              {method.name}
            </p>
            <p className="font-body text-xs text-text-secondary text-center mt-1">
              {method.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-success/10 border border-success/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5 fill-current" />
          <div>
            <p className="font-cta text-sm font-bold text-success mb-1">
              Secure Payment Processing
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              All online transactions are encrypted and secure. We accept advance payment for custom orders and offer cash on delivery for standard products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}