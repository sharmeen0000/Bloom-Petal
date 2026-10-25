import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Shop', href: '#shop' },
    { label: 'Collections', href: '#collections' },
    { label: 'Occasions', href: '#finder' },
    { label: 'Our Story', href: '#story' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#D2D2D2]/40 py-3.5'
            : 'bg-[#FAF9F5] border-b border-[#D2D2D2]/30 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-[#807CFC] transition-transform duration-500 group-hover:rotate-45"
              >
                <path d="M12 2C8.5 6 6 9.5 6 13a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11Z" />
                <path d="M12 12c-1.5 2-2 3.5-2 5a2 2 0 0 0 4 0c0-1.5-.5-3-2-5Z" />
              </svg>
              <span className="font-serif text-2xl tracking-tight text-[#333333]">
                Bloom <span className="text-[#807CFC] font-light">&</span> Petal
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#444444]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 hover:text-[#333333] transition-colors whitespace-nowrap group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#807CFC] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Interactive Actions */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search blooms"
                className="p-2 text-[#444444] hover:text-[#333333] hover:bg-black/5 rounded-full transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                aria-label="View wishlist"
                className="p-2 text-[#444444] hover:text-[#333333] hover:bg-black/5 rounded-full transition-colors relative"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C2A3FF] text-[#333333] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Open shopping bag"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333] text-white hover:bg-black transition-all shadow-sm group"
              >
                <ShoppingBag className="w-4 h-4 text-[#C2A3FF] transition-transform group-hover:scale-110" />
                <span className="text-xs font-semibold tabular-nums">{cartCount}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation"
                className="md:hidden p-2 text-[#444444] hover:text-black hover:bg-black/5 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-[#FAF9F5] h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D2D2D2]/50">
                <span className="font-serif text-xl text-[#333333]">
                  Bloom & Petal
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-900 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-lg font-serif text-[#333333] py-2 border-b border-[#D2D2D2]/20 hover:text-[#807CFC] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#807CFC]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#D2D2D2]/50">
              <div className="text-xs text-[#526E7A]">
                Boutique Hours: Mon — Sat, 8:00 AM — 7:00 PM
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 bg-[#333333] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#C2A3FF]" />
                <span>View Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
