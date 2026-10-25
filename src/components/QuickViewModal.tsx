import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Sparkles, Plus, Minus } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, isInWishlist, toggleWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [giftNote, setGiftNote] = useState('');
  const [addonVase, setAddonVase] = useState(false);

  if (!quickViewProduct) return null;

  const wishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, addonVase ? 'vase' : 'none', giftNote || undefined);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FAF9F5] rounded-2xl shadow-2xl overflow-hidden border border-[#D2D2D2]/50 z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-stone-100">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {quickViewProduct.originalPrice && (
              <span className="absolute top-4 left-4 bg-[#333333] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
                Special Offer
              </span>
            )}
          </div>

          {/* Right: Details & Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Stems */}
              <div className="flex items-center gap-2 text-xs text-[#526E7A] tracking-wider uppercase font-medium">
                <span className="text-[#807CFC]">{quickViewProduct.category}</span>
                <span aria-hidden="true">·</span>
                <span>{quickViewProduct.stemCount}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#333333] mt-1">
                {quickViewProduct.name}
              </h3>

              {/* Price & Rating */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-[#333333] tabular-nums">
                    ${quickViewProduct.price}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-[#526E7A] line-through tabular-nums">
                      ${quickViewProduct.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <span>★ {quickViewProduct.rating}</span>
                  <span className="text-[#526E7A]">({quickViewProduct.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#526E7A] mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Flower Types tags */}
              <div className="mt-4 pt-3 border-t border-[#D2D2D2]/40">
                <p className="text-[11px] font-semibold text-[#333333] uppercase tracking-wider mb-2">
                  Stem Composition:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#444444]">
                  {quickViewProduct.flowerTypes.map((type, i) => (
                    <span key={type} className="inline-flex items-center text-[11px] text-[#526E7A]">
                      {type}
                      {i < quickViewProduct.flowerTypes.length - 1 && <span className="mx-1.5 text-[#D2D2D2]">/</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flower Care Guide */}
              <div className="mt-3 p-3 bg-white rounded-lg border border-[#D2D2D2]/40 text-[11px] text-[#526E7A] leading-relaxed">
                <strong className="text-[#333333] block mb-0.5">Atelier Care Note:</strong>
                {quickViewProduct.careGuide}
              </div>

              {/* Custom Note input */}
              <div className="mt-4">
                <label className="block text-[11px] font-semibold text-[#333333] uppercase tracking-wider mb-1">
                  Complimentary Gift Message (Optional):
                </label>
                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="e.g. Happy Anniversary, my love! — James"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#D2D2D2] rounded-md focus:border-[#807CFC] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Actions Strip */}
            <div className="pt-4 border-t border-[#D2D2D2]/40 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#D2D2D2] rounded-lg bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-black/5 rounded text-[#444444]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-semibold tabular-nums text-[#333333]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-black/5 rounded text-[#444444]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 bg-[#333333] hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C2A3FF]" />
                  <span>Add to Bag · ${(quickViewProduct.price * quantity).toFixed(0)}</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  aria-label="Wishlist toggle"
                  className={`p-3 rounded-lg border transition-colors ${
                    wishlisted
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'bg-white border-[#D2D2D2] text-[#444444] hover:text-rose-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#526E7A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#807CFC]" />
                <span>7-Day Freshness Guarantee · Free hydration pack included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
