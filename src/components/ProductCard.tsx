import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setQuickViewProduct(product)}
      className="group cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden border border-[#D2D2D2]/40 hover:border-[#807CFC]/40 transition-all duration-300 hover:shadow-md"
    >
      {/* Visual Slot - 70% height aspect ratio */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F5F0]">
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Minimal Sale or Bestseller Tag - Single quiet label, no pill sandwich */}
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-[#333333] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
            Sale
          </span>
        )}
        {!product.originalPrice && product.isBestseller && (
          <span className="absolute top-3 left-3 bg-[#807CFC] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
            Bestseller
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            wishlisted
              ? 'bg-rose-50 text-rose-500 scale-105 shadow-sm'
              : 'bg-white/80 text-[#444444] hover:text-rose-500 hover:bg-white backdrop-blur-xs'
          }`}
        >
          <Heart className={`w-4 h-4 transition-transform ${wishlisted ? 'fill-rose-500 scale-110' : ''}`} />
        </button>

        {/* Quick View Floating Action Bar on Hover */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-[#333333] text-xs font-medium rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors backdrop-blur-xs"
          >
            <Eye className="w-3.5 h-3.5 text-[#526E7A]" />
            <span>Quick View</span>
          </button>
          
          <button
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="p-2 bg-[#333333] hover:bg-black text-white rounded-lg shadow-sm transition-transform active:scale-95"
          >
            {isAddedRecently ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <ShoppingBag className="w-4 h-4 text-[#C2A3FF]" />
            )}
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-2">
        {/* Unboxed metadata line with typographic separator */}
        <div className="flex items-center gap-2 text-[11px] text-[#526E7A] tracking-wide">
          <span className="uppercase font-medium text-[#807CFC]">{product.category}</span>
          <span aria-hidden="true">·</span>
          <span>{product.stemCount}</span>
        </div>

        {/* Product Title */}
        <h3 className="font-serif text-lg sm:text-xl text-[#333333] group-hover:text-[#807CFC] transition-colors leading-snug">
          {product.name}
        </h3>

        {/* Short botanical note */}
        <p className="text-xs text-[#526E7A] line-clamp-1">
          {product.subtitle}
        </p>

        {/* Price & Add to Cart button */}
        <div className="pt-2 flex items-center justify-between border-t border-[#D2D2D2]/30 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#333333] tabular-nums">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#526E7A] line-through tabular-nums">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              isAddedRecently
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-[#333333] hover:text-white hover:bg-[#333333]'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#807CFC]" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
