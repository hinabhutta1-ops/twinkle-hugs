import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Snuggle up — Get 10% off your first order</h2>
        <p className="text-pink-100 mb-8">Subscribe for early drops, exclusive deals & care tips</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition"
            >
              Subscribe
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-white">
            <CheckCircle size={20} />
            <span>Thank you for subscribing!</span>
          </div>
        )}

        <p className="text-pink-100 text-sm mt-4">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
