import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">About Stuffeez</h3>
            <p className="text-sm mb-4">Premium plushies & huggables made with ❤️ in Pakistan. Eco-friendly materials from recycled plastic bottles.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition">Plushies</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Sofas</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition">Shipping</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@stuffeez.pk" className="hover:text-pink-400 transition">info@stuffeez.pk</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:03021472393" className="hover:text-pink-400 transition">0302 1472 393</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-pink-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Stuffeez.pk. All rights reserved. Made with ❤️ in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
