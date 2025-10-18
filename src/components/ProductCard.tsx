import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            product.badge === 'Sale' ? 'bg-red-500 text-white' :
            product.badge === 'New' ? 'bg-green-500 text-white' :
            'bg-gray-500 text-white'
          }`}>
            {product.badge === 'Sale' && product.discount ? `${product.discount}% OFF` : product.badge}
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full ${inWishlist ? 'bg-pink-500 text-white' : 'bg-white text-gray-700'} hover:scale-110 transition shadow-lg`}
          >
            <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-2 bg-white rounded-full text-gray-700 hover:scale-110 transition shadow-lg"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        {product.vendor && <p className="text-xs text-gray-500 mb-1">{product.vendor}</p>}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">{product.title}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-gray-900">Rs.{product.price.toLocaleString()}</span>
          {product.regularPrice && (
            <span className="text-sm text-gray-500 line-through">Rs.{product.regularPrice.toLocaleString()}</span>
          )}
        </div>
        <p className="text-xs text-gray-500 mb-3">Inclusive of all taxes</p>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-2 rounded-lg font-semibold transition ${
            product.inStock
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? (
            <span className="flex items-center justify-center gap-2">
              <ShoppingCart size={18} /> Add to Cart
            </span>
          ) : (
            'Sold Out'
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
