import React from 'react';
import { Star, Instagram } from 'lucide-react';

const SocialProof: React.FC = () => {
  const reviews = [
    { name: 'Ayesha Khan', rating: 5, text: 'Absolutely love my teddy bear! Quality is amazing and delivery was super fast.' },
    { name: 'Ahmed Ali', rating: 5, text: 'Perfect Valentine gift! My girlfriend loved the penguin plushie. Highly recommend!' },
    { name: 'Sara Malik', rating: 5, text: 'The sofa is adorable and well-made. Great for kids room decor!' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Loved by Customers</h2>
          <p className="text-gray-600">See what our happy customers are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-pink-50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6B6B" className="text-pink-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold">
            <Instagram size={20} />
            <span>Tag us @stuffeez.pk #StuffeezMoments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
