import React from 'react';
import { ArrowUpRight, Sun, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SeasonalStory: React.FC = () => {
  const { setSelectedCategory } = useShop();

  const handleExplore = () => {
    setSelectedCategory('seasonal');
    const shop = document.getElementById('shop');
    if (shop) shop.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Oversized Floral Photography Composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              {/* Primary large image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] shadow-lg border border-black/5 bg-stone-200">
                <img
                  src="/images/brand_tulips.png"
                  alt="Dutch purple and ivory tulips wrapped in tissue with pink satin ribbon"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white max-w-sm">
                  <p className="text-[11px] uppercase tracking-widest text-[#B8BAFF] font-medium">Limited Seasonal Harvest</p>
                  <p className="font-serif text-xl sm:text-2xl mt-1">Dutch Parrot & French Double Tulips</p>
                </div>
              </div>

              {/* Inset botanical photography card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF9F5] aspect-[4/5] hidden sm:block bg-stone-100">
                <img
                  src="/images/conservatory.png"
                  alt="Historic Victorian glasshouse botanical conservatory"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/50 backdrop-blur-xs rounded text-white text-[10px]">
                  Glasshouse Conditioning
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#807CFC]">
              <Sun className="w-3.5 h-3.5" />
              <span>Autumnal & Early Spring Transition</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#333333] tracking-tight leading-[1.15] [text-wrap:balance]">
              A Little Spring, <br />
              <span className="italic font-light text-[#807CFC]">Delivered.</span>
            </h2>

            <p className="text-[#526E7A] text-sm sm:text-base leading-relaxed [text-wrap:balance]">
              Even as the seasons shift, our growers cultivate resilient early-blooming French tulips, fragrant freesias, and dancing chamomile under natural skylights.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#444444]">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#807CFC] mt-2 shrink-0" />
                <span>Harvested within 24 hours of dispatch for optimal bloom duration.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#807CFC] mt-2 shrink-0" />
                <span>Conditioned in cold mineral spring water to awaken stem vitality.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#807CFC] mt-2 shrink-0" />
                <span>Protected in recyclable corrugated sleeves with biodegradable hydration packs.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#333333] text-white text-xs font-medium hover:bg-black transition-all hover:scale-[1.02] shadow-sm"
              >
                <span>Discover Seasonal Blooms</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A3FF]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
