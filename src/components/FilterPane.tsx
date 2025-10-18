import React from 'react';
import { Filters } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface FilterPaneProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const FilterPane: React.FC<FilterPaneProps> = ({ filters, onFilterChange }) => {
  const toggleFilter = (key: keyof Filters, value: string) => {
    const current = filters[key] as string[];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal size={20} className="text-pink-500" />
        <h3 className="font-bold text-lg">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3">Size</h4>
          {['1-2 ft', '2-5 ft', '5-8 ft'].map(size => (
            <label key={size} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={filters.size.includes(size)} onChange={() => toggleFilter('size', size)} className="rounded text-pink-500" />
              <span className="text-sm">{size}</span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-semibold mb-3">Category</h4>
          {['Teddy', 'Sofa', 'Soft Toy', 'Lababu'].map(cat => (
            <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={filters.category.includes(cat)} onChange={() => toggleFilter('category', cat)} className="rounded text-pink-500" />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-semibold mb-3">Style</h4>
          {['Cute', 'Cuddly', 'Valentine', 'Collectible'].map(style => (
            <label key={style} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={filters.style.includes(style)} onChange={() => toggleFilter('style', style)} className="rounded text-pink-500" />
              <span className="text-sm">{style}</span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-semibold mb-3">Sort By</h4>
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange({ ...filters, sort: e.target.value as any })}
            className="w-full p-2 border rounded-lg text-sm"
          >
            <option value="featured">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPane;
