import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { Filters, Product } from '../types';
import ProductCard from './ProductCard';
import FilterPane from './FilterPane';
import QuickViewModal from './QuickViewModal';

const ProductGrid: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    size: [],
    category: [],
    style: [],
    priceRange: [0, 20000],
    inStock: null,
    sort: 'featured'
  });
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => {
      if (filters.size.length && !filters.size.includes(p.size)) return false;
      if (filters.category.length && !filters.category.includes(p.category)) return false;
      if (filters.style.length && !filters.style.includes(p.style)) return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
      if (filters.inStock !== null && p.inStock !== filters.inStock) return false;
      return true;
    });

    if (filters.sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (filters.sort === 'price-high') filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [filters]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Shop — Plushies & Huggables</h2>
          <p className="text-gray-600">Filter by size, style, price or availability</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPane filters={filters} onFilterChange={setFilters} />
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
};

export default ProductGrid;
