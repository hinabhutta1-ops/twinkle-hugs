import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-blue-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="mailto:info@stuffeez.pk" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition">
              <Mail size={14} />
              <span>info@stuffeez.pk</span>
            </a>
            <a href="tel:03021472393" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition">
              <Phone size={14} />
              <span>0302 1472 393</span>
            </a>
          </div>
          <div className="text-gray-600 text-center">
            <span className="hidden md:inline">Made with ❤️ in Pakistan · </span>
            <span>100% recycled polyester · Each purchase removes plastic</span>
          </div>
        </div>
      </div>
      <div className="bg-pink-100 text-center py-1 text-xs text-gray-700">
        Need help? Chat with us or call 0302 1472 393 — Mon–Sat 9am–6pm
      </div>
    </div>
  );
};

export default TopBar;
