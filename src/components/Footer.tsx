import React from 'react';
import { Flower2, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setSelectedCategory } = useShop();

  const handleNavCategory = (cat: any) => {
    setSelectedCategory(cat);
    const shop = document.getElementById('shop');
    if (shop) shop.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#2B2B2B] text-[#EEEEEE] pt-16 pb-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Flower2 className="w-5 h-5 text-[#C2A3FF]" />
              <span className="font-serif text-2xl text-white tracking-tight">
                Bloom <span className="text-[#C2A3FF]">&</span> Petal
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#B8BAFF]/80 leading-relaxed max-w-sm">
              An artisan flower studio and online botanical atelier. Thoughtfully gathered blooms, sustainable paper packaging, and meaningful gifting for life's precious chapters.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#807CFC] hover:text-white flex items-center justify-center transition-colors text-white/70"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#807CFC] hover:text-white flex items-center justify-center transition-colors text-white/70"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social"
                onClick={(e) => e.preventDefault()}
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#807CFC] hover:text-white flex items-center justify-center transition-colors text-white/70"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Boutique Shop
            </h4>
            <ul className="space-y-2 text-xs text-[#EEEEEE]/70">
              <li>
                <button
                  onClick={() => handleNavCategory('all')}
                  className="hover:text-white transition-colors"
                >
                  All Arrangements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('roses')}
                  className="hover:text-white transition-colors"
                >
                  Heritage Roses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('tulips')}
                  className="hover:text-white transition-colors"
                >
                  Dutch Tulips
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('seasonal')}
                  className="hover:text-white transition-colors"
                >
                  Seasonal Meadow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavCategory('luxury')}
                  className="hover:text-white transition-colors"
                >
                  Grand Luxury Stems
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#EEEEEE]/70">
              <li>
                <a href="#care" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Flower Care Guide
                </a>
              </li>
              <li>
                <a href="#delivery" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Delivery & Shipping
                </a>
              </li>
              <li>
                <a href="#vase" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Vase Styling Tips
                </a>
              </li>
              <li>
                <a href="#corporate" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Corporate & Event Styling
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Atelier & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#EEEEEE]/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C2A3FF] shrink-0 mt-0.5" />
                <span>48 Primrose Lane, Floral Quarter, Covent Garden, WC2E</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C2A3FF] shrink-0" />
                <span>+44 (0) 20 7946 0892</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C2A3FF] shrink-0" />
                <span>concierge@bloomandpetal.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEEEEE]/60">
          <p>© {new Date().getFullYear()} Bloom & Petal Florals Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
