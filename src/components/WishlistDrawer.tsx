import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart, setQuickViewProduct } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#D2D2D2]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="font-serif text-xl text-[#333333]">
              Your Saved Blooms
            </h2>
            <span className="text-xs text-[#526E7A] tabular-nums">
              ({wishlistedProducts.length})
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
            className="p-1.5 text-gray-400 hover:text-gray-900 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F5] mx-auto flex items-center justify-center text-[#526E7A]">
                <Heart className="w-8 h-8 text-[#D2D2D2]" />
              </div>
              <h3 className="font-serif text-xl text-[#333333]">No saved bouquets yet</h3>
              <p className="text-xs text-[#526E7A] max-w-xs mx-auto leading-relaxed">
                Tap the heart on any arrangement to save your favorite stems for upcoming celebrations.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  const shop = document.getElementById('shop');
                  if (shop) shop.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-2 px-6 py-2.5 bg-[#333333] text-white text-xs font-semibold rounded-full hover:bg-black"
              >
                Explore Catalog
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 rounded-xl border border-[#D2D2D2]/30 bg-[#FAF9F5]/40 hover:bg-[#FAF9F5] transition-colors"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsWishlistOpen(false);
                  }}
                  className="w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-stone-100 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsWishlistOpen(false);
                        }}
                        className="font-serif text-sm font-semibold text-[#333333] hover:text-[#807CFC] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-gray-400 hover:text-rose-600 p-1"
                        aria-label={`Remove ${product.name} from wishlist`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#526E7A]">
                      ${product.price} · {product.stemCount}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#D2D2D2]/20">
                    <span className="text-sm font-semibold text-[#333333] tabular-nums">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                      }}
                      className="px-3 py-1.5 bg-[#333333] hover:bg-black text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#C2A3FF]" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
