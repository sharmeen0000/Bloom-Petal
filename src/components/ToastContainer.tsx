import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[#333333] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-2.5 text-xs pointer-events-auto transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C2A3FF] shrink-0" />
          <span className="font-medium">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
