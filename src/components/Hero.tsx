import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';


const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = [
    { image: 'https://d64gsuwffb70l.cloudfront.net/68ee2f674148b1c24c5d4ebe_1760440223747_11f88203.webp', title: 'Step into Style', subtitle: 'Cute & Fluffy plushies, sofas and huggables — made in Pakistan.' }
  ];

  const categories = ['Teddy Bears', 'Sofas', '1-2 Feet', '4-5 Feet', 'Valentine Gifts'];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition">
                Shop Plushies
              </button>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition border-2 border-gray-200">
                Order Now — Nationwide Delivery
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>


        <form onSubmit={handleSearch} className="mt-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search plushie, sofa, teddy…"
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-pink-500 focus:outline-none shadow-lg"
            />
          </div>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat} className="px-6 py-2 bg-white rounded-full text-sm font-medium hover:bg-pink-500 hover:text-white transition shadow-md">
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
