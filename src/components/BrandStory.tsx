import React from 'react';
import { Leaf, Heart, Sparkles, Sprout } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#F7F5F0] border-t border-[#D2D2D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#526E7A]">
              <Sprout className="w-3.5 h-3.5 text-[#807CFC]" />
              <span>Our Philosophy & Craft</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#333333] tracking-tight leading-[1.12] [text-wrap:balance]">
              Rooted in Nature. <br />
              <span className="italic font-light text-[#807CFC]">Made With Love.</span>
            </h2>

            <p className="text-[#526E7A] text-sm sm:text-base leading-relaxed [text-wrap:balance]">
              At Bloom & Petal, we believe that flowers are more than mere decor — they are living emotional notes sent across distances, gentle markers of milestones, and silent companions to human celebrations.
            </p>

            <p className="text-[#526E7A] text-sm sm:text-base leading-relaxed [text-wrap:balance]">
              We partner directly with sustainable, multigenerational growers across the rolling hills of Sussex, the flower bourses of Aalsmeer, and sun-drenched Ecuadorian valleys. Every arrangement is hand-composed by master floral artists who balance color temperature, stem geometry, and textural cadence.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-[#D2D2D2]/40 shadow-xs">
                <Leaf className="w-5 h-5 text-[#807CFC] mb-2" />
                <h4 className="text-xs font-semibold text-[#333333]">Zero Floral Foam</h4>
                <p className="text-[11px] text-[#526E7A] mt-1 leading-snug">
                  100% compostable wraps & water packs only.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D2D2D2]/40 shadow-xs">
                <Heart className="w-5 h-5 text-[#C2A3FF] mb-2" />
                <h4 className="text-xs font-semibold text-[#333333]">Handwritten Cards</h4>
                <p className="text-[11px] text-[#526E7A] mt-1 leading-snug">
                  Every order includes your personal penned note.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D2D2D2]/40 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#807CFC] mb-2" />
                <h4 className="text-xs font-semibold text-[#333333]">Artisan Hand-Tied</h4>
                <p className="text-[11px] text-[#526E7A] mt-1 leading-snug">
                  Arranged by certified florists, never pre-boxed.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#526E7A] border-t border-[#D2D2D2]/40">
              <span className="font-serif italic text-base text-[#333333]">Clara Sterling & Team</span>
              <span aria-hidden="true">·</span>
              <span>Founders & Lead Floral Artisans</span>
            </div>
          </div>

          {/* Right Column: Moodboard / Story Photography */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl border border-black/5 bg-stone-100">
                <img
                  src="/images/moodboard_editorial.png"
                  alt="Editorial florist studio moodboard with floral studies, color palette and botanical glasshouse"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B8BAFF] font-medium">Studio Archive</span>
                    <p className="font-serif text-lg">Botanical Moodboard & Color Studies</p>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white font-mono">
                    2026 Season
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
