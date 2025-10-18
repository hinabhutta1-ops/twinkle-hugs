import React from 'react';
import { ShopProvider } from '../context/ShopContext';
import TopBar from './TopBar';
import Header from './Header';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import CategoryGrid from './CategoryGrid';
import ProductGrid from './ProductGrid';
import NewArrivals from './NewArrivals';
import HowItWorks from './HowItWorks';
import SocialProof from './SocialProof';
import Newsletter from './Newsletter';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-white">
        <TopBar />
        <Header />
        <Hero />
        <TrustStrip />
        <CategoryGrid />
        <ProductGrid />
        <NewArrivals />
        <HowItWorks />
        <SocialProof />
        <Newsletter />
        <Footer />
      </div>
    </ShopProvider>
  );
};

export default AppLayout;
