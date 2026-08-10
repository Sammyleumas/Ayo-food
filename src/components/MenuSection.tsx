import React, { useState } from 'react';
import { FEATURED_MENU_ITEMS, ALL_MENU_ITEMS } from '../data/menu';
import { MenuCard } from './MenuCard';
import { MenuItem } from '../types';
import { Utensils, Sparkles, BookOpen } from 'lucide-react';

interface MenuSectionProps {
  onViewFullMenuClick: () => void;
  onSelectDish?: (dish: MenuItem) => void;
  onAddToCart?: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onViewFullMenuClick,
  onSelectDish,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Featured Dishes' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'cocktails', label: 'Cocktails' },
  ];

  const displayedItems =
    activeFilter === 'all'
      ? FEATURED_MENU_ITEMS
      : ALL_MENU_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#1A1410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
              FROM OUR KITCHEN
            </span>
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EDE4] font-normal mb-4">
            A Taste Worth Remembering
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8A7A6A] font-light italic">
            “Bold Nigerian flavors, refined through a contemporary lens.”
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-sm text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#E8A33D] text-[#1A1410] font-medium shadow-lg shadow-[#E8A33D]/10'
                  : 'bg-[#2A1F18] text-[#8A7A6A] hover:text-[#F5EDE4] border border-[#3D2E24]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {displayedItems.map((dish) => (
            <MenuCard key={dish.id} item={dish} onSelect={onSelectDish} onAddToCart={onAddToCart} />
          ))}
        </div>

        {/* Action Button: View Full Menu */}
        <div className="text-center">
          <button
            onClick={onViewFullMenuClick}
            className="inline-flex items-center gap-3 bg-[#2A1F18] hover:bg-[#3D2E24] border border-[#E8A33D]/40 hover:border-[#E8A33D] text-[#F5EDE4] font-medium px-8 py-4 rounded-sm transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#E8A33D] group-hover:rotate-6 transition-transform" />
            <span className="text-base tracking-wide">View Full Menu & Drinks List</span>
          </button>
        </div>

      </div>
    </section>
  );
};
