import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag } from 'lucide-react';

interface MobileReserveButtonProps {
  onReserveClick: () => void;
  onOrderClick: () => void;
  cartCount: number;
}

export const MobileReserveButton: React.FC<MobileReserveButtonProps> = ({
  onReserveClick,
  onOrderClick,
  cartCount
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when near the reservation section itself
      const reservationEl = document.querySelector('#reservation');
      if (reservationEl) {
        const rect = reservationEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden pointer-events-auto pb-[env(safe-area-inset-bottom)] flex items-center gap-2">
      <button
        onClick={onOrderClick}
        className="flex-1 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-semibold py-3 px-3 rounded-md shadow-2xl border border-[#E8A33D]/50 flex items-center justify-center gap-1.5 text-xs sm:text-sm tracking-wide transition-all transform active:scale-95 cursor-pointer relative"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Order & Pay</span>
        {cartCount > 0 && (
          <span className="bg-[#1A1410] text-[#E8A33D] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ml-0.5">
            {cartCount}
          </span>
        )}
      </button>

      <button
        onClick={onReserveClick}
        className="flex-1 bg-[#2A1F18] hover:bg-[#3D2E24] text-[#F5EDE4] border border-[#3D2E24] font-medium py-3 px-3 rounded-md shadow-2xl flex items-center justify-center gap-1.5 text-xs sm:text-sm tracking-wide transition-all transform active:scale-95 cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#E8A33D]" />
        <span>Reserve Table</span>
      </button>
    </div>
  );
};

