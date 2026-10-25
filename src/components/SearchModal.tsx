import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const q = searchTerm.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.flowerTypes.some((f) => f.toLowerCase().includes(q)) ||
        p.occasions.some((o) => o.toLowerCase().includes(q)) ||
        p.colors.some((c) => c.toLowerCase().includes(q))
    );
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  const quickPicks = ['Roses', 'Peonies', 'Tulips', 'Anniversary', 'Birthday', 'Under $50'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D2D2D2]/50 z-10">
        
        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#D2D2D2]/40 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#807CFC]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search roses, peonies, lavender, anniversary gifts..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#333333] placeholder:text-[#526E7A]/60 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-3 py-1 text-xs font-semibold text-[#526E7A] hover:text-[#333333]"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestions when empty */}
        {!searchTerm && (
          <div className="p-5 sm:p-6 bg-[#FAF9F5]/60">
            <p className="text-xs font-semibold text-[#526E7A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#807CFC]" />
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((pick) => (
                <button
                  key={pick}
                  onClick={() => setSearchTerm(pick.toLowerCase().replace('under $50', 'mix'))}
                  className="px-3 py-1.5 text-xs bg-white rounded-full border border-[#D2D2D2]/60 hover:border-[#807CFC] hover:text-[#807CFC] text-[#444444] transition-colors"
                >
                  {pick}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {searchTerm && (
          <div className="max-h-96 overflow-y-auto p-4 sm:p-5 space-y-3">
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#FAF9F5] cursor-pointer transition-colors border border-transparent hover:border-[#D2D2D2]/40"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-16 rounded-lg object-cover bg-stone-100 shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-sm font-semibold text-[#333333]">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#526E7A] line-clamp-1">
                      {product.flowerTypes.join(' · ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-[#333333] tabular-nums">
                      ${product.price}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#807CFC]">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-10 text-center text-[#526E7A]">
                <p className="font-serif text-lg text-[#333333]">No bouquets found</p>
                <p className="text-xs mt-1">Try searching for "tulip", "peony", or "rose".</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
