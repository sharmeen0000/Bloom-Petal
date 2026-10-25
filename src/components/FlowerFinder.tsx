import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { FlowerOccasion, FlowerColor, Product } from '../types';
import { ProductCard } from './ProductCard';
import { RotateCcw, Sparkles, Filter, Check } from 'lucide-react';

type BudgetTier = 'all' | 'under40' | '40to60' | 'above60';

export const FlowerFinder: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<FlowerOccasion | 'all'>('all');
  const [selectedColor, setSelectedColor] = useState<FlowerColor | 'all'>('all');
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier>('all');

  const occasions: (FlowerOccasion | 'all')[] = [
    'all',
    'Birthday',
    'Anniversary',
    'Wedding',
    'Thank You',
    'Just Because',
  ];

  const colors: { key: FlowerColor | 'all'; label: string; swatch: string }[] = [
    { key: 'all', label: 'All Hues', swatch: 'bg-stone-300' },
    { key: 'Pink', label: 'Blush Pink', swatch: 'bg-rose-300' },
    { key: 'White', label: 'Pure White', swatch: 'bg-slate-100 border border-slate-300' },
    { key: 'Red', label: 'Velvet Red', swatch: 'bg-red-500' },
    { key: 'Purple', label: 'Lavender Purple', swatch: 'bg-[#C2A3FF]' },
    { key: 'Yellow', label: 'Golden Yellow', swatch: 'bg-amber-300' },
  ];

  const budgetTiers: { key: BudgetTier; label: string }[] = [
    { key: 'all', label: 'Any Budget' },
    { key: 'under40', label: 'Under $40' },
    { key: '40to60', label: '$40 — $60' },
    { key: 'above60', label: 'Above $60' },
  ];

  const filteredMatches = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Occasion filter
      if (selectedOccasion !== 'all' && !p.occasions.includes(selectedOccasion)) {
        return false;
      }
      // Color filter
      if (selectedColor !== 'all' && !p.colors.includes(selectedColor)) {
        return false;
      }
      // Budget filter
      if (selectedBudget === 'under40' && p.price >= 40) return false;
      if (selectedBudget === '40to60' && (p.price < 40 || p.price > 60)) return false;
      if (selectedBudget === 'above60' && p.price <= 60) return false;

      return true;
    });
  }, [selectedOccasion, selectedColor, selectedBudget]);

  const hasActiveFilters = selectedOccasion !== 'all' || selectedColor !== 'all' || selectedBudget !== 'all';

  const resetFilters = () => {
    setSelectedOccasion('all');
    setSelectedColor('all');
    setSelectedBudget('all');
  };

  return (
    <section id="finder" className="py-16 sm:py-24 bg-[#F7F5F0] border-t border-[#D2D2D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#807CFC] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Floral Matchmaker</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#333333] tracking-tight">
            Find Your Perfect Flowers
          </h2>
          <p className="text-[#526E7A] text-sm sm:text-base mt-3 leading-relaxed [text-wrap:balance]">
            Tell us your celebration, desired color story, and gifting budget. We will curate the ideal stem combinations for your moment.
          </p>
        </div>

        {/* Filter Selection Panel */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#D2D2D2]/40 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D2D2D2]/40">
            
            {/* 1. Occasion */}
            <div className="pt-4 md:pt-0 md:pr-6 space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#333333] flex items-center justify-between">
                <span>1. Occasion</span>
                <span className="text-[11px] font-normal text-[#526E7A]">
                  {selectedOccasion === 'all' ? 'All Moments' : selectedOccasion}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                      selectedOccasion === occ
                        ? 'bg-[#333333] text-white'
                        : 'bg-[#FAF9F5] text-[#444444] hover:bg-stone-200 border border-[#D2D2D2]/50'
                    }`}
                  >
                    {occ === 'all' ? 'All Occasions' : occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Palette */}
            <div className="pt-6 md:pt-0 md:px-6 space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#333333] flex items-center justify-between">
                <span>2. Color Story</span>
                <span className="text-[11px] font-normal text-[#526E7A]">
                  {selectedColor === 'all' ? 'Any Palette' : selectedColor}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setSelectedColor(c.key)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all ${
                      selectedColor === c.key
                        ? 'bg-[#807CFC] text-white shadow-xs'
                        : 'bg-[#FAF9F5] text-[#444444] hover:bg-stone-200 border border-[#D2D2D2]/50'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${c.swatch}`} />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Budget */}
            <div className="pt-6 md:pt-0 md:pl-6 space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#333333] flex items-center justify-between">
                <span>3. Budget Tier</span>
                <span className="text-[11px] font-normal text-[#526E7A]">
                  {budgetTiers.find((b) => b.key === selectedBudget)?.label}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetTiers.map((tier) => (
                  <button
                    key={tier.key}
                    onClick={() => setSelectedBudget(tier.key)}
                    className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                      selectedBudget === tier.key
                        ? 'bg-[#333333] text-white'
                        : 'bg-[#FAF9F5] text-[#444444] hover:bg-stone-200 border border-[#D2D2D2]/50'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Filter Footer Info & Reset */}
          <div className="mt-6 pt-5 border-t border-[#D2D2D2]/40 flex flex-wrap items-center justify-between gap-4 text-xs text-[#526E7A]">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#807CFC]" />
              <span>
                Found <strong className="text-[#333333] font-semibold tabular-nums">{filteredMatches.length}</strong> matching boutique arrangement{filteredMatches.length === 1 ? '' : 's'}
              </span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#807CFC] hover:text-[#333333] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Showcase */}
        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredMatches.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center max-w-lg mx-auto border border-[#D2D2D2]/50 shadow-xs">
            <p className="font-serif text-2xl text-[#333333]">No Direct Matches</p>
            <p className="text-xs text-[#526E7A] mt-2 leading-relaxed">
              We couldn't find a bouquet matching that specific combination of occasion, color, and budget tier.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 px-6 py-2.5 bg-[#333333] text-white text-xs font-medium rounded-full hover:bg-black transition-colors"
            >
              Reset Flower Finder
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
