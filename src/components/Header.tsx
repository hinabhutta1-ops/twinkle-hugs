import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Header: React.FC = () => {
  const { cart, wishlist } = useShop();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Stuffeez
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-pink-500 transition">Home</a>
            <div className="relative" onMouseEnter={() => setShopMenu(true)} onMouseLeave={() => setShopMenu(false)}>
              <button className="flex items-center gap-1 hover:text-pink-500 transition">
                Shop <ChevronDown size={16} />
              </button>
              {shopMenu && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 mt-2 w-48 grid gap-2">
                  <a href="#" className="hover:text-pink-500">Lababu</a>
                  <a href="#" className="hover:text-pink-500">1-2 Feet</a>
                  <a href="#" className="hover:text-pink-500">2-5 Feet</a>
                  <a href="#" className="hover:text-pink-500">5-8 Feet</a>
                  <a href="#" className="hover:text-pink-500">Soft Toy</a>
                  <a href="#" className="hover:text-pink-500">Valentine Day</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-pink-500 transition">New Arrivals</a>
            <a href="#" className="hover:text-pink-500 transition">About</a>
            <a href="#" className="hover:text-pink-500 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hover:text-pink-500 transition"><Search size={20} /></button>
            <button className="relative hover:text-pink-500 transition">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="relative hover:text-pink-500 transition">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-white border-t p-4 space-y-3">
          <a href="#" className="block hover:text-pink-500">Home</a>
          <a href="#" className="block hover:text-pink-500">Shop</a>
          <a href="#" className="block hover:text-pink-500">New Arrivals</a>
          <a href="#" className="block hover:text-pink-500">About</a>
          <a href="#" className="block hover:text-pink-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
