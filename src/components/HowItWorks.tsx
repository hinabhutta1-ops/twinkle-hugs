import React from 'react';
import { Search, Truck, RotateCcw } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: Search, title: 'Browse & Choose', description: 'Filter by size & style to find your perfect plushie' },
    { icon: Truck, title: 'Fast Nationwide Delivery', description: 'Order shipped within 2-3 days across Pakistan' },
    { icon: RotateCcw, title: 'Easy Returns', description: '14-day returns for unused items, hassle-free' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600">Simple, fast, and reliable shopping experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white mb-4">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
