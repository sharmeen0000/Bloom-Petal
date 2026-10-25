import React, { useState } from 'react';
import { Sparkles, X, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#333333] text-[#FAF9F5] text-xs py-2 px-4 transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-[#B8BAFF] text-[11px] uppercase tracking-wider font-medium">
          <Truck className="w-3.5 h-3.5 text-[#C2A3FF]" />
          <span>Same-Day Atelier Delivery in Select Areas</span>
        </div>

        <div className="flex-1 text-center font-normal tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-[#C2A3FF] shrink-0" />
          <span>Fresh flowers, thoughtfully arranged — free delivery on orders over $75</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-block text-[#B8BAFF]/80 text-[11px]">
            Demo Store
          </span>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-[#FAF9F5]/70 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
