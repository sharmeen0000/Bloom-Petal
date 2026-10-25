import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { BestsellingFlowers } from './components/BestsellingFlowers';
import { FlowerFinder } from './components/FlowerFinder';
import { SeasonalStory } from './components/SeasonalStory';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { DemoCheckoutModal } from './components/DemoCheckoutModal';
import { ToastContainer } from './components/ToastContainer';

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#333333] font-sans selection:bg-[#C2A3FF]/25 selection:text-[#333333]">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Header & Navigation */}
        <Navbar />

        {/* Main Editorial Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Collections */}
          <FeaturedCollections />

          {/* Bestselling Flowers Grid */}
          <BestsellingFlowers />

          {/* Interactive Flower Finder */}
          <FlowerFinder />

          {/* Seasonal Story Feature */}
          <SeasonalStory />

          {/* Brand Story & Artisanal Philosophy */}
          <BrandStory />

          {/* Customer Reviews & Testimonials */}
          <Testimonials />

          {/* Newsletter Subscription */}
          <Newsletter />
        </main>

        {/* Spacious Footer */}
        <Footer />

        {/* Interactive Modals & Drawers */}
        <CartDrawer />
        <QuickViewModal />
        <WishlistDrawer />
        <SearchModal />
        <DemoCheckoutModal />
        <ToastContainer />
      </div>
    </ShopProvider>
  );
}
