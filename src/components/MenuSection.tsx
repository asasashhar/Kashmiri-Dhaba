import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, ASSET_IMAGES } from '../data/dhabaData';
import { CuisineCategory, MenuItem } from '../types';
import { Search, Flame, Clock, Sparkles, Plus, Minus, ShoppingBag, Phone, X, Info, Utensils } from 'lucide-react';

interface MenuSectionProps {
  onAddToOrder: (item: MenuItem) => void;
  orderItemsMap?: Record<string, number>;
  onUpdateQuantity?: (itemId: string, delta: number) => void;
  onOpenOrderTray: () => void;
  onCallKitchen: () => void;
  isDarkMode: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToOrder,
  orderItemsMap = {},
  onUpdateQuantity,
  onOpenOrderTray,
  onCallKitchen,
  isDarkMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CuisineCategory>('all');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg-only' | 'non-veg-only'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectDish, setInspectDish] = useState<MenuItem | null>(null);

  const categories: { id: CuisineCategory; label: string }[] = [
    { id: 'all', label: 'All Dishes' },
    { id: 'tandoor', label: 'Tandoor & Kebabs' },
    { id: 'handi', label: 'Clay Handi Curries' },
    { id: 'biryani', label: 'Dum Biryani & Rice' },
    { id: 'veg', label: 'Pure Vegetarian' },
    { id: 'dessert', label: 'Midnight Desserts' },
    { id: 'beverages', label: 'Kulhad Chai & Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (vegFilter === 'veg-only' && !item.isVeg) return false;
      if (vegFilter === 'non-veg-only' && item.isVeg) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.tag && item.tag.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedCategory, vegFilter, searchQuery]);

  return (
    <section
      id="menu"
      className={`w-full py-16 sm:py-24 border-t transition-colors ${
        isDarkMode
          ? 'bg-[#0F0D0B] border-[#2A231E]'
          : 'bg-[#F4EFEA] border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2672B] tracking-widest uppercase mb-1">
              <Sparkles className="w-4 h-4 text-[#C2672B]" />
              <span>Epicurean Highway Repertoire</span>
            </div>
            <h2
              className={`font-serif text-3xl sm:text-5xl font-bold ${
                isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
              }`}
            >
              Highway Specialties
            </h2>
            <p
              className={`text-xs sm:text-sm mt-2 font-sans max-w-lg leading-relaxed ${
                isDarkMode ? 'text-stone-300' : 'text-stone-600'
              }`}
            >
              Stone-ground Bhiwandi masalas, live Babool charcoal embers, and terracotta clay handis simmered for travelers.
            </p>
          </div>

          {/* Search & Veg/Non-Veg controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search biryani, mutton, naan..."
                className={`w-full border rounded-full py-2 pl-9 pr-8 text-xs focus:outline-none focus:border-[#C2672B] transition-colors ${
                  isDarkMode
                    ? 'bg-[#1C1815] border-[#2C221C] text-[#F4EFE6] placeholder-stone-500'
                    : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 shadow-sm'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-700 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Veg toggle */}
            <div
              className={`flex items-center justify-center gap-1 p-1 rounded-full border w-full sm:w-auto ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => setVegFilter('all')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-colors cursor-pointer text-center ${
                  vegFilter === 'all'
                    ? 'bg-[#C2672B] text-white shadow-sm'
                    : isDarkMode
                    ? 'text-stone-400 hover:text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setVegFilter('veg-only')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  vegFilter === 'veg-only'
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Pure Veg
              </button>
              <button
                onClick={() => setVegFilter('non-veg-only')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  vegFilter === 'non-veg-only'
                    ? 'bg-rose-800 text-white font-bold'
                    : 'text-stone-600 hover:text-rose-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold font-sans mb-8 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C2672B] text-white shadow-md'
                    : isDarkMode
                    ? 'bg-[#1C1815] text-stone-300 hover:text-white border border-[#2C221C]'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div
            className={`py-16 text-center rounded-3xl border ${
              isDarkMode
                ? 'text-stone-400 bg-[#1C1815] border-[#2C221C]'
                : 'text-stone-600 bg-white border-stone-200'
            }`}
          >
            <Utensils className="w-10 h-10 text-[#C2672B] mx-auto mb-2 opacity-60" />
            <p className="font-serif text-xl font-bold">No dishes match your filter.</p>
            <p className="text-xs text-stone-500 mt-1 font-sans">
              Try adjusting your search query or dietary filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setVegFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 px-5 py-2 rounded-full bg-[#C2672B] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => {
              const inCartQty = orderItemsMap[item.id] || 0;

              return (
                <div
                  key={item.id}
                  className={`rounded-3xl overflow-hidden shadow-sm border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md ${
                    isDarkMode
                      ? 'bg-[#1C1815] border-[#2C221C] hover:border-[#C2672B]/60'
                      : 'bg-white border-stone-200 hover:border-[#C2672B]/60 shadow-stone-200'
                  }`}
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div
                      className="relative w-full h-44 overflow-hidden cursor-pointer"
                      onClick={() => setInspectDish(item)}
                    >
                      <img
                        src={item.image || ASSET_IMAGES.sigriKebab}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Dietary Indicator */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md flex items-center gap-1.5 border border-white/10 shadow-sm">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
                          }`}
                        />
                        <span className="text-[10px] font-bold tracking-wider text-white">
                          {item.isVeg ? 'PURE VEG' : 'NON-VEG'}
                        </span>
                      </div>

                      {/* Tag */}
                      {item.tag && (
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#C2672B] text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                          {item.tag}
                        </div>
                      )}

                      {/* Quick Inspect Hint */}
                      <div className="absolute bottom-2 right-3 text-[10px] text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                        <Info className="w-3 h-3 text-[#F6AD55]" />
                        <span>Tap for details</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          onClick={() => setInspectDish(item)}
                          className={`font-serif text-lg sm:text-xl font-bold group-hover:text-[#C2672B] transition-colors cursor-pointer leading-tight ${
                            isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                          }`}
                        >
                          {item.name}
                        </h3>

                        {/* Spice Meter */}
                        {item.spiceLevel && (
                          <div
                            className="flex items-center text-[#C2672B] shrink-0"
                            title={`Spice level: ${item.spiceLevel} / 3`}
                          >
                            {Array.from({ length: item.spiceLevel }).map((_, i) => (
                              <Flame key={i} className="w-3.5 h-3.5 fill-[#C2672B]" />
                            ))}
                          </div>
                        )}
                      </div>

                      <p
                        className={`text-xs mt-2 font-sans line-clamp-2 leading-relaxed ${
                          isDarkMode ? 'text-stone-300' : 'text-stone-600'
                        }`}
                      >
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 mt-3 text-[11px] text-stone-500 font-sans">
                        {item.preparationTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C2672B]" />
                            {item.preparationTime}
                          </span>
                        )}
                        <span>·</span>
                        <span className="truncate">{item.portion}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Order Actions */}
                  <div
                    className={`px-5 py-3.5 border-t flex items-center justify-between ${
                      isDarkMode
                        ? 'border-[#2C221C] bg-[#141210]'
                        : 'border-stone-100 bg-[#FAF8F5]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-stone-500 block tracking-wider uppercase font-semibold">
                        PRICE
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-[#C2672B] font-bold tabular-nums">
                        ₹{item.price}
                      </span>
                    </div>

                    {inCartQty > 0 ? (
                      <div className="flex items-center bg-[#C2672B] rounded-full p-0.5 text-white shadow-sm">
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold tabular-nums">
                          {inCartQty}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToOrder(item)}
                        className="px-4 py-2 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm transform active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Dish Detail Inspection Modal */}
        {inspectDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div
              className={`relative w-full max-w-lg border rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      inspectDish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  />
                  <span className="text-xs font-bold text-[#C2672B] uppercase tracking-wider">
                    {inspectDish.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian Heritage'}
                  </span>
                </div>
                <button
                  onClick={() => setInspectDish(null)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    isDarkMode
                      ? 'bg-[#2B221C] text-stone-200 hover:text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4 border border-stone-200">
                <img
                  src={inspectDish.image || ASSET_IMAGES.sigriKebab}
                  alt={inspectDish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3
                  className={`font-serif text-2xl font-bold ${
                    isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                  }`}
                >
                  {inspectDish.name}
                </h3>
                <span className="font-serif text-3xl font-bold text-[#C2672B] tabular-nums">
                  ₹{inspectDish.price}
                </span>
              </div>

              <p
                className={`text-sm mt-3 font-sans leading-relaxed ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                {inspectDish.description}
              </p>

              <div
                className={`mt-4 p-4 rounded-xl space-y-2 text-xs font-sans ${
                  isDarkMode ? 'bg-[#211A14]' : 'bg-stone-50'
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-stone-500">Serving Portion:</span>
                  <span className="font-semibold">{inspectDish.portion}</span>
                </div>
                {inspectDish.preparationTime && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Fresh Prep Time:</span>
                    <span className="font-semibold">{inspectDish.preparationTime}</span>
                  </div>
                )}
                {inspectDish.pairsWith && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Chef Recommendation:</span>
                    <span className="text-[#C2672B] font-semibold">{inspectDish.pairsWith}</span>
                  </div>
                )}
              </div>

              <div
                className={`pt-5 mt-4 border-t flex items-center justify-end gap-3 ${
                  isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
                }`}
              >
                <button
                  onClick={() => setInspectDish(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onAddToOrder(inspectDish);
                    setInspectDish(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add To Table Tray</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Menu Footer Inquiry Box */}
        <div
          className={`mt-12 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border shadow-sm ${
            isDarkMode
              ? 'bg-[#1C1815] border-[#2C221C]'
              : 'bg-white border-stone-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDarkMode
                  ? 'bg-[#2B221C] text-[#F6AD55]'
                  : 'bg-[#FDF4ED] text-[#C2672B]'
              }`}
            >
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p
                className={`font-serif text-lg font-bold ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Custom spice levels or looking for Jain preparations?
              </p>
              <p
                className={`text-xs mt-0.5 font-sans leading-relaxed ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                Our kitchen gladly prepares separate vegetarian handis, no-onion-garlic Jain gravies, and custom spice profiles upon request.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenOrderTray}
              className={`flex-1 sm:flex-initial px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                isDarkMode
                  ? 'bg-[#2B221C] hover:bg-[#362B24] text-[#F6AD55] border-[#713B0C]'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-200'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#C2672B]" />
              <span>View Table Tray</span>
            </button>
            <button
              onClick={onCallKitchen}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Order In Advance</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
