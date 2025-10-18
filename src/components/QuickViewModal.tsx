import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Quick View</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.title} className="w-full rounded-xl" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            {product.vendor && <p className="text-gray-500">{product.vendor}</p>}
            
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">Rs.{product.price.toLocaleString()}</span>
              {product.regularPrice && (
                <span className="text-lg text-gray-500 line-through">Rs.{product.regularPrice.toLocaleString()}</span>
              )}
            </div>

            {product.description && <p className="text-gray-700">{product.description}</p>}
            
            <div className="space-y-2 text-sm">
              <p><strong>Size:</strong> {product.size}</p>
              <p><strong>Material:</strong> {product.material}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <label className="font-semibold">Quantity:</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 border rounded">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border rounded">+</button>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={handleAddToCart} disabled={!product.inStock} className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:bg-gray-300">
                <ShoppingCart className="inline mr-2" size={18} />
                Add to Cart
              </button>
              <button onClick={() => toggleWishlist(product)} className={`p-3 rounded-lg border-2 ${isInWishlist(product.id) ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-300'}`}>
                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
