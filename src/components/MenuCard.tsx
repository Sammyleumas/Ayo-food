import React from 'react';
import { MenuItem } from '../types';
import { Flame, Leaf, Wheat, ShieldAlert, ShoppingBag } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelect, onAddToCart }) => {
  const renderDietaryIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('spicy')) {
      return <Flame className="w-3 h-3 text-amber-400" />;
    }
    if (lower.includes('vegan') || lower.includes('vegetarian')) {
      return <Leaf className="w-3 h-3 text-emerald-400" />;
    }
    if (lower.includes('gluten')) {
      return <Wheat className="w-3 h-3 text-[#E8A33D]" />;
    }
    return <ShieldAlert className="w-3 h-3 text-[#8A7A6A]" />;
  };

  const getDietaryStyle = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('spicy')) {
      return 'bg-amber-950/50 text-amber-300 border-amber-800/50';
    }
    if (lower.includes('vegan') || lower.includes('vegetarian')) {
      return 'bg-emerald-950/50 text-emerald-300 border-emerald-800/50';
    }
    if (lower.includes('gluten')) {
      return 'bg-[#1A1410] text-[#E8A33D] border-[#E8A33D]/30';
    }
    return 'bg-[#1A1410] text-[#F5EDE4]/80 border-[#3D2E24]';
  };

  return (
    <div
      className="group relative bg-[#2A1F18] border border-[#3D2E24] hover:border-[#E8A33D]/60 rounded-sm overflow-hidden transition-all duration-500 transform hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#E8A33D]/10 flex flex-col h-full"
    >
      {/* Card Image Container */}
      <div 
        onClick={() => onSelect && onSelect(item)}
        className="relative h-60 sm:h-64 overflow-hidden bg-[#1A1410] cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F18] via-transparent to-black/20 opacity-90" />

        {/* Top Badges / Tags */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {item.tags && item.tags.length > 0 && (
            <span className="bg-[#1A1410]/90 text-[#E8A33D] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm border border-[#E8A33D]/30 backdrop-blur-sm font-medium">
              {item.tags[0]}
            </span>
          )}

          <span className="bg-[#1A1410]/90 text-[#F5EDE4]/90 text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm border border-[#3D2E24] backdrop-blur-sm ml-auto font-sans">
            {item.category}
          </span>
        </div>

        {/* Golden Bottom Accent Line on Hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8A33D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Card Body Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div onClick={() => onSelect && onSelect(item)} className="cursor-pointer">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-normal text-[#F5EDE4] group-hover:text-[#E8A33D] transition-colors">
              {item.name}
            </h3>
            <span className="font-serif text-lg font-semibold text-[#E8A33D] whitespace-nowrap pl-2">
              {item.price}
            </span>
          </div>

          <p className="font-sans text-sm text-[#8A7A6A] leading-relaxed font-light line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Subtle Dietary Tag Pills */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {item.dietary.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full border backdrop-blur-sm transition-colors ${getDietaryStyle(
                    tag
                  )}`}
                >
                  {renderDietaryIcon(tag)}
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 mt-2 border-t border-[#3D2E24]/60 flex items-center justify-between">
          <button
            onClick={() => onSelect && onSelect(item)}
            className="text-xs text-[#8A7A6A] hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Details &rarr;
          </button>

          {onAddToCart && (
            <button
              onClick={() => onAddToCart(item)}
              className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-3.5 py-1.5 rounded-sm transition-all duration-300 flex items-center gap-1.5 text-xs shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Order</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

