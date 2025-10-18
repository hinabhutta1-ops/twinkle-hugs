import React from 'react';
import { Heart, Recycle, RotateCcw, Shield } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const features = [
    { icon: Heart, text: 'Made with ❤️ in Pakistan', link: '#about' },
    { icon: Recycle, text: 'Recycled polyester from plastic bottles', link: '#sustainability' },
    { icon: RotateCcw, text: 'Free returns (14 days)', link: '#returns' },
    { icon: Shield, text: 'Secure payments', link: '#security' }
  ];

  return (
    <div className="bg-white border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <a
              key={idx}
              href={feature.link}
              className="flex items-center gap-3 justify-center text-sm text-gray-700 hover:text-pink-500 transition group"
            >
              <feature.icon size={20} className="text-pink-500 group-hover:scale-110 transition" />
              <span className="text-center md:text-left">{feature.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
