import React from 'react';
import { TESTIMONIALS } from '../data/collections';
import { Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#D2D2D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#526E7A] font-semibold">
            Real Moments & Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#333333] mt-2 tracking-tight">
            Loved by Flower Enthusiasts
          </h2>
          <p className="text-[#526E7A] text-sm mt-3 leading-relaxed">
            From anniversary surprises to weekend self-care rituals, hear how our blooms brighten homes across the globe.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 shadow-xs border border-[#D2D2D2]/40 hover:border-[#807CFC]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars and Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Gift
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed italic relative">
                  "{item.review}"
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="mt-6 pt-4 border-t border-[#D2D2D2]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base text-[#333333] font-semibold">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-[#526E7A]">
                      {item.location} · {item.occasion}
                    </p>
                  </div>
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-wider text-[#807CFC] font-medium">
                  Ordered: {item.purchasedProduct}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
