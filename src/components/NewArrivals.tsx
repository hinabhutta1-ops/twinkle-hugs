import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

const NewArrivals: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const newProducts = products.filter(p => p.badge === 'New');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">New Arrivals</h2>
            <p className="text-gray-600">Fresh additions to our collection</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-500 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-500 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
