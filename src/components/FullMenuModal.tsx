import React, { useState } from 'react';
import { ALL_MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types';
import { X, Search, Utensils, Sparkles, Filter, Check, ShoppingBag } from 'lucide-react';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveClick: () => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onReserveClick,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'starters', label: 'Starters & Small Plates' },
    { id: 'mains', label: 'Mains & Signature Bowls' },
    { id: 'desserts', label: 'Desserts & Sweets' },
    { id: 'cocktails', label: 'Craft Cocktails & Spirits' },
  ];

  const dietaryOptions = ['all', 'Gluten-Free', 'Vegetarian', 'Vegan'];

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      selectedDietary === 'all' ||
      (item.dietary &&
        item.dietary.some((d) =>
          d.toLowerCase().includes(selectedDietary.toLowerCase())
        ));

    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1410]/95 backdrop-blur-xl flex flex-col p-4 sm:p-6 md:p-10">
      {/* Modal Header */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[#3D2E24] sticky top-0 bg-[#1A1410]/90 backdrop-blur-md z-10 pt-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium block">
            ÀYỌ̀ FULL CULINARY MENU
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F5EDE4] font-normal">
            Contemporary Nigerian Fusion
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#2A1F18] border border-[#3D2E24] text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close full menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto w-full py-8 flex-1">
        {/* Controls Bar (Search & Category Pills) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E8A33D] text-[#1A1410] font-medium shadow-md'
                    : 'bg-[#2A1F18] text-[#F5EDE4]/80 hover:text-[#E8A33D] border border-[#3D2E24]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#8A7A6A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] text-[#F5EDE4] text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors placeholder-[#8A7A6A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A7A6A] hover:text-[#F5EDE4]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="flex items-center gap-2 mb-8 text-xs text-[#8A7A6A] overflow-x-auto pb-1">
          <span className="flex items-center gap-1 font-medium text-[#E8A33D] mr-2">
            <Filter className="w-3.5 h-3.5" /> Dietary:
          </span>
          {dietaryOptions.map((diet) => (
            <button
              key={diet}
              onClick={() => setSelectedDietary(diet)}
              className={`px-3 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${
                selectedDietary === diet
                  ? 'bg-[#3D2E24] text-[#E8A33D] border border-[#E8A33D]/40 font-medium'
                  : 'bg-[#1A1410] text-[#8A7A6A] border border-[#3D2E24] hover:text-[#F5EDE4]'
              }`}
            >
              {diet === 'all' ? 'All Dietary Options' : diet}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#2A1F18]/50 border border-[#3D2E24] rounded-sm p-8">
            <Utensils className="w-12 h-12 text-[#8A7A6A] mx-auto mb-4 opacity-50" />
            <h3 className="font-serif text-xl text-[#F5EDE4] mb-2">No dishes match your selection</h3>
            <p className="text-sm text-[#8A7A6A] max-w-md mx-auto mb-6">
              Try adjusting your search keywords or clearing dietary filter preferences.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedDietary('all');
              }}
              className="bg-[#E8A33D] text-[#1A1410] px-5 py-2 text-xs font-medium rounded-sm hover:bg-[#d49232] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#2A1F18] border border-[#3D2E24] hover:border-[#E8A33D]/50 rounded-sm p-5 flex flex-col justify-between transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-44 rounded-sm overflow-hidden mb-4 bg-[#1A1410]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-[#1A1410]/90 border border-[#E8A33D]/40 text-[#E8A33D] font-serif px-2.5 py-1 text-sm rounded-sm font-semibold">
                      {item.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#E8A33D]">
                      {item.category}
                    </span>
                    {item.tags && item.tags.length > 0 && (
                      <span className="text-[10px] bg-[#3D2E24] text-[#F5EDE4] px-1.5 py-0.5 rounded-xs">
                        {item.tags[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-[#F5EDE4] mb-2 group-hover:text-[#E8A33D] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#8A7A6A] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3D2E24]/60 flex items-center justify-between">
                  {item.dietary && item.dietary.length > 0 ? (
                    <span className="text-[11px] text-[#8A7A6A]">{item.dietary.join(', ')}</span>
                  ) : (
                    <span className="text-[11px] text-[#8A7A6A] uppercase">{item.category}</span>
                  )}

                  {onAddToCart && (
                    <button
                      onClick={() => onAddToCart(item)}
                      className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-3 py-1.5 rounded-sm transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto w-full pt-6 border-t border-[#3D2E24] flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
        <p className="text-xs text-[#8A7A6A] text-center sm:text-left">
          Please inform your server of any severe food allergies prior to ordering. Prices are inclusive of tax.
        </p>
        <button
          onClick={() => {
            onClose();
            onReserveClick();
          }}
          className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-2.5 rounded-sm text-sm transition-colors cursor-pointer"
        >
          Reserve a Table Now
        </button>
      </div>
    </div>
  );
};
