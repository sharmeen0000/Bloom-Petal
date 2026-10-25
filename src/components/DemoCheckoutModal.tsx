import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, MapPin, Heart, Sparkles, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const DemoCheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartSubtotal, clearCart } = useShop();

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [recipientName, setRecipientName] = useState('Sophia Laurent');
  const [address, setAddress] = useState('742 Evergreen Gardens, Apartment 4B');
  const [deliveryDate, setDeliveryDate] = useState('Tomorrow (Morning Atelier Dispatch)');
  const [giftNote, setGiftNote] = useState('Wishing you a radiant day filled with joy and sweetness. With all my love, Oliver.');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const deliveryFee = cartSubtotal >= 75 ? 0 : 8;
  const grandTotal = cartSubtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = 'BP-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrderNum);
    setStep('confirmed');
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D2D2D2]/50 z-10 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#D2D2D2]/40 flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#807CFC]" />
            <h2 className="font-serif text-xl text-[#333333]">
              {step === 'form' ? 'Atelier Demo Checkout' : 'Order Confirmed (Demo)'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-gray-400 hover:text-gray-900 rounded-full"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-5">
            {/* Demo Notice Banner */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Mode:</strong> No actual charges will occur. You can test the checkout workflow, recipient customization, and order receipt experience.
              </span>
            </div>

            {/* Recipient Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#333333] uppercase tracking-wider">
                Recipient & Delivery Address
              </h3>
              <div>
                <label className="block text-[11px] text-[#526E7A] mb-1 font-medium">Recipient Full Name</label>
                <input
                  type="text"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#D2D2D2] rounded-lg focus:border-[#807CFC] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#526E7A] mb-1 font-medium">Street Address & Unit</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#D2D2D2] rounded-lg focus:border-[#807CFC] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#526E7A] mb-1 font-medium">Delivery Schedule</label>
                <select
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#D2D2D2] rounded-lg focus:border-[#807CFC] focus:outline-hidden bg-white"
                >
                  <option>Tomorrow (Morning Atelier Dispatch)</option>
                  <option>Tomorrow (Afternoon Delivery)</option>
                  <option>This Friday (Celebration Weekend)</option>
                  <option>Next Monday (Fresh Floral Week Start)</option>
                </select>
              </div>
            </div>

            {/* Handwritten Gift Note Card */}
            <div className="space-y-2 pt-2 border-t border-[#D2D2D2]/30">
              <label className="block text-xs font-semibold text-[#333333] uppercase tracking-wider flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Complimentary Handwritten Gift Card</span>
              </label>
              <textarea
                rows={2}
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                placeholder="Pen your personal message here..."
                className="w-full p-3 text-xs bg-[#FAF9F5] border border-[#D2D2D2] rounded-lg focus:border-[#807CFC] focus:outline-hidden italic font-serif"
              />
            </div>

            {/* Order Summary Breakdown */}
            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#D2D2D2]/40 space-y-2 text-xs">
              <div className="flex justify-between text-[#526E7A]">
                <span>Bouquets Subtotal ({cart.length} items)</span>
                <span className="tabular-nums">${cartSubtotal}</span>
              </div>
              <div className="flex justify-between text-[#526E7A]">
                <span>Artisan Packaging & Delivery</span>
                <span className="tabular-nums">{deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between font-semibold text-[#333333] pt-2 border-t border-[#D2D2D2]/40 text-sm">
                <span>Total Due (Demo)</span>
                <span className="tabular-nums text-[#807CFC]">${grandTotal}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#333333] hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4 text-[#C2A3FF]" />
              <span>Confirm & Place Demo Order (${grandTotal})</span>
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-medium text-[#807CFC] uppercase tracking-wider">
                Order #{orderNumber} Confirmed
              </span>
              <h3 className="font-serif text-2xl text-[#333333] mt-1">
                Your Blooms Are Being Prepared!
              </h3>
              <p className="text-xs text-[#526E7A] mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, {recipientName}! Our florists will hand-gather your stems and dispatch them for: <strong className="text-[#333333]">{deliveryDate}</strong>.
              </p>
            </div>

            {giftNote && (
              <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#D2D2D2]/50 max-w-sm mx-auto text-left">
                <span className="text-[10px] uppercase font-semibold text-[#526E7A] tracking-wider block mb-1">
                  Enclosed Handwritten Message:
                </span>
                <p className="font-serif italic text-xs text-[#333333] leading-relaxed">
                  "{giftNote}"
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#333333] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors"
              >
                Return to Flower Atelier
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
