import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';
import { FlowerCategory } from '../types';
import { ArrowUpDown, SlidersHorizontal, Sparkles } from 'lucide-react';

export const BestsellingFlowers: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShop();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlySale, setOnlySale] = useState(false);

  const categories: { key: FlowerCategory; label: string }[] = [
    { key: 'all', label: 'All Blooms' },
    { key: 'roses', label: 'Roses' },
    { key: 'seasonal', label: 'Seasonal Mix' },
    { key: 'tulips', label: 'Tulips' },
    { key: 'luxury', label: 'Luxury Grand' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (onlySale) {
      list = list.filter((p) => p.originalPrice !== undefined);
    }

    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [selectedCategory, onlySale, sortBy]);

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#807CFC] uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Atelier Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#333333] mt-2 tracking-tight">
            Bestselling Fresh Bouquets
          </h2>
          <p className="text-sm sm:text-base text-[#526E7A] mt-3 leading-relaxed [text-wrap:balance]">
            Each arrangement is freshly composed at dawn with seasonal stem selections, wrapped in breathable artisan papers and finished with handwritten note cards.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-[#D2D2D2]/40">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#333333] text-white shadow-xs'
                      : 'bg-white text-[#444444] border border-[#D2D2D2]/60 hover:border-[#807CFC] hover:text-[#333333]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Sort & Sale Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={() => setOnlySale(!onlySale)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 ${
                onlySale
                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                  : 'bg-white border-[#D2D2D2]/60 text-[#444444] hover:text-[#333333]'
              }`}
            >
              <span>On Special Offer</span>
            </button>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#D2D2D2]/60 text-xs text-[#444444]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#526E7A]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-xs font-medium text-[#333333] focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured Florals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid - 4 Columns Desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#D2D2D2]/40 max-w-lg mx-auto p-8">
            <p className="font-serif text-xl text-[#333333]">No blooms matched this filter</p>
            <p className="text-xs text-[#526E7A] mt-2">
              Try switching back to all categories or resetting the offer toggle.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setOnlySale(false);
              }}
              className="mt-5 px-5 py-2 bg-[#333333] text-white text-xs font-medium rounded-full hover:bg-black"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
