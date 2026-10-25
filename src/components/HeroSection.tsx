import React from 'react';
import { ArrowUpRight, Sparkles, Flower2, Heart, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Delicate floating petals background accents */}
      <div className="absolute top-12 left-8 w-24 h-24 rounded-full bg-[#C2A3FF]/15 blur-2xl pointer-events-none" />
      <div className="absolute bottom-16 right-12 w-48 h-48 rounded-full bg-[#B8BAFF]/20 blur-3xl pointer-events-none" />
      
      {/* Botanical animated petal glyphs floating */}
      <div className="absolute top-20 right-1/3 hidden lg:block animate-float-gentle text-[#C2A3FF]/40 pointer-events-none">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 6 6 10 7 14c1 4 4 7 8 7 3-1 5-4 5-8-1-5-4-9-8-11Z" />
        </svg>
      </div>
      <div className="absolute bottom-28 left-16 hidden lg:block animate-float-sway text-[#807CFC]/30 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 6 6 10 7 14c1 4 4 7 8 7 3-1 5-4 5-8-1-5-4-9-8-11Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#526E7A] tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-[#807CFC]">
                <Flower2 className="w-3.5 h-3.5" />
                Artisan Atelier
              </span>
              <span aria-hidden="true">·</span>
              <span>Autumn / Winter Curation</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2019</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#333333] leading-[1.08] [text-wrap:balance]">
              Flowers That Speak <br />
              <span className="italic font-light text-[#807CFC]">From the Heart.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#526E7A] leading-relaxed max-w-xl font-normal [text-wrap:balance]">
              Thoughtfully gathered blooms for the moments that matter and the beauty of every day. Hand-tied in sustainable papers with bespoke botanical poetry.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#333333] text-white text-sm font-medium hover:bg-black transition-all hover:scale-[1.02] shadow-sm group"
              >
                <span>Shop Flowers</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2A3FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D2D2D2] text-[#333333] text-sm font-medium hover:border-[#807CFC] hover:bg-[#807CFC]/5 transition-all"
              >
                <span>Explore Collections</span>
              </a>
            </div>

            {/* Brand Commitments Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D2D2D2]/50 text-xs text-[#526E7A]">
              <div>
                <p className="font-semibold text-[#333333] text-sm tabular-nums">100%</p>
                <p className="text-[12px] leading-tight">Fresh Farm Direct</p>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm tabular-nums">7+ Days</p>
                <p className="text-[12px] leading-tight">Vase Life Guarantee</p>
              </div>
              <div>
                <p className="font-semibold text-[#333333] text-sm tabular-nums">Artisanal</p>
                <p className="text-[12px] leading-tight">Hand-Tied Wraps</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Floral Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/5 aspect-[4/5] bg-stone-100">
                <img
                  src="/images/hero_peonies.png"
                  alt="Lush pink peonies and peach roses bouquet hand-tied with silk ribbon"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Image caption badge on primary bouquet */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#B8BAFF] font-medium">Boutique Signature</p>
                    <p className="font-serif text-lg text-white">Pastel Peony & Garden Rose</p>
                  </div>
                  <span className="text-sm font-semibold text-white/90 tabular-nums bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    From $72
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card (Brand Tulip Aesthetic) */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF9F5] aspect-square hidden sm:block bg-stone-200 transform hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="/images/brand_tulips.png"
                  alt="Dutch purple and ivory tulips wrapped bouquet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-[10px] text-[#B8BAFF] uppercase tracking-wider">Dutch Heritage</p>
                  <p className="text-xs font-serif font-medium">Lavender Dreams</p>
                </div>
              </div>

              {/* Floating Review / Rating Glass Tag */}
              <div className="absolute top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-[#D2D2D2]/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#807CFC]/10 flex items-center justify-center text-[#807CFC]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#333333] pt-0.5">Top Florist 2026</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
