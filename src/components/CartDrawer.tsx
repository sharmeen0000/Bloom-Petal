import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
    setIsCheckoutOpen,
  } = useShop();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 75;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#D2D2D2]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#807CFC]" />
            <h2 className="font-serif text-xl text-[#333333]">
              Your Shopping Bag
            </h2>
            <span className="text-xs text-[#526E7A] tabular-nums">
              ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-1.5 text-gray-400 hover:text-gray-900 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3.5 bg-[#FAF9F5] border-b border-[#D2D2D2]/40 text-xs text-[#444444]">
          <div className="flex items-center justify-between mb-1.5 font-medium">
            <span className="flex items-center gap-1.5 text-[#526E7A]">
              <Truck className="w-3.5 h-3.5 text-[#807CFC]" />
              {remainingForFreeShipping > 0
                ? `Add $${remainingForFreeShipping.toFixed(0)} more for Free Atelier Delivery`
                : 'Unlocked Free Atelier Delivery!'}
            </span>
            <span className="tabular-nums font-semibold">{progressPercent.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-[#EEEEEE] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#807CFC] h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F5] mx-auto flex items-center justify-center text-[#526E7A]">
                <ShoppingBag className="w-8 h-8 text-[#807CFC]/60" />
              </div>
              <h3 className="font-serif text-xl text-[#333333]">Your bag is currently empty</h3>
              <p className="text-xs text-[#526E7A] max-w-xs mx-auto leading-relaxed">
                Add an arrangement from our fresh seasonal curation to start your floral gift.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const shop = document.getElementById('shop');
                  if (shop) shop.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-2 px-6 py-2.5 bg-[#333333] text-white text-xs font-semibold rounded-full hover:bg-black"
              >
                Browse Fresh Blooms
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 rounded-xl border border-[#D2D2D2]/30 bg-[#FAF9F5]/50 hover:bg-[#FAF9F5] transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-sm font-semibold text-[#333333] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-rose-600 p-1 transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#526E7A]">
                      ${item.product.price} each · {item.product.stemCount}
                    </p>
                    {item.customNote && (
                      <p className="text-[10px] text-[#807CFC] italic mt-0.5 line-clamp-1">
                        Note: "{item.customNote}"
                      </p>
                    )}
                  </div>

                  {/* Quantity and Line Total */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#D2D2D2]/20">
                    <div className="flex items-center border border-[#D2D2D2]/60 rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-black/5 text-[#444444]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold tabular-nums text-[#333333]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-black/5 text-[#444444]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-semibold text-[#333333] tabular-nums">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-[#D2D2D2]/40 bg-[#FAF9F5] space-y-4">
            <div className="space-y-1.5 text-xs text-[#526E7A]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#333333] tabular-nums text-sm">
                  ${cartSubtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Atelier Delivery</span>
                <span className="tabular-nums">
                  {cartSubtotal >= freeShippingThreshold ? 'FREE' : '$8.00'}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full py-3.5 bg-[#333333] hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C2A3FF]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#526E7A]/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#807CFC]" />
              <span>Safe & Secure Demo Checkout Process</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
