import React from 'react';
import { COLLECTIONS } from '../data/collections';
import { ArrowUpRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { FlowerCategory } from '../types';

export const FeaturedCollections: React.FC = () => {
  const { setSelectedCategory } = useShop();

  const handleSelectCollection = (catKey: FlowerCategory) => {
    setSelectedCategory(catKey);
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#F7F5F0] border-y border-[#D2D2D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#526E7A] font-semibold">
              Curated Series
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#333333] mt-2 tracking-tight">
              Signature Collections
            </h2>
            <p className="text-[#526E7A] text-sm sm:text-base mt-3 leading-relaxed">
              Explore bespoke arrangements grouped by floral botanical families, seasonal harvests, and artistic atmospheres.
            </p>
          </div>

          <button
            onClick={() => handleSelectCollection('all')}
            className="text-xs font-semibold uppercase tracking-wider text-[#333333] hover:text-[#807CFC] inline-flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>View All Blooms</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Collections Grid - 4 Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COLLECTIONS.map((col, index) => (
            <div
              key={col.id}
              onClick={() => handleSelectCollection(col.categoryKey)}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-500 border border-[#D2D2D2]/40"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Micro Index label */}
                <span className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  0{index + 1}
                </span>

                {/* Stems count */}
                <span className="absolute top-4 right-4 text-[11px] font-medium text-white/90">
                  {col.itemCount} Designs
                </span>

                {/* Overlay Text Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] text-[#B8BAFF] uppercase tracking-wider font-medium">
                    {col.tagline}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl mt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-xs text-[#526E7A] line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2D2D2]/30 flex items-center justify-between text-xs font-medium text-[#333333] group-hover:text-[#807CFC] transition-colors">
                  <span>Explore Series</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
