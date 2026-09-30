import React from 'react';
import { DhabaLogo } from './DhabaLogo';
import { ASSET_IMAGES, MENU_ITEMS } from '../data/dhabaData';
import { MenuItem } from '../types';
import { Flame, ArrowDown, Navigation, Clock, Star, Car, Users, Sparkles, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOpenDirections: () => void;
  onOpenReservation: () => void;
  onAddToOrder: (item: MenuItem) => void;
  isDarkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOpenDirections,
  onOpenReservation,
  onAddToOrder,
  isDarkMode,
}) => {
  const banjaraItem = MENU_ITEMS.find((i) => i.id === 'kebab-banjara') || MENU_ITEMS[0];

  return (
    <section className="relative w-full -mt-20 overflow-hidden min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12">
      {/* Background Image & Gentle Lighting Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Kashmira Dhaba Highway Sanctuary with glowing timber pergolas and lanterns"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          src={ASSET_IMAGES.heroBg}
        />
        {/* Scrim tailored for high legibility */}
        <div
          className={`absolute inset-0 transition-colors ${
            isDarkMode
              ? 'bg-gradient-to-t from-[#141210] via-[#141210]/80 to-[#0A0908]/85'
              : 'bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/70 to-[#1C1917]/70'
          }`}
        />
      </div>

      {/* Top Coordinates & Corridor Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4 flex flex-wrap items-center justify-between gap-3 text-stone-400">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase font-sans">
          <span className="w-2 h-2 rounded-full bg-[#C2672B] animate-pulse" />
          <span className={isDarkMode ? 'text-stone-200' : 'text-stone-800'}>
            NH-3 CORRIDOR · KM 42
          </span>
          <span className="text-stone-400">·</span>
          <span className={`font-mono ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            19.3371° N, 73.0844° E
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-wider font-sans">
          <span
            className={`px-3 py-1 rounded-full border shadow-sm flex items-center gap-1.5 ${
              isDarkMode
                ? 'bg-[#211A14] border-[#C2672B]/40 text-[#F6AD55]'
                : 'bg-white/90 backdrop-blur-md border-stone-200 text-[#C2672B]'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-[#C2672B]" />
            OPEN DAILY TILL 4:00 AM
          </span>
          <span
            className={`hidden sm:inline px-2.5 py-1 rounded-full border ${
              isDarkMode
                ? 'bg-[#1C1815]/80 text-stone-300 border-[#2C221C]'
                : 'bg-white/80 text-stone-700 border-stone-200'
            }`}
          >
            42 MINS FROM THANE TOLL
          </span>
        </div>
      </div>

      {/* Core Hero Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col items-start gap-4 sm:gap-6">
          {/* Handcrafted Brand Crest & Legacy Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm border ${
                isDarkMode
                  ? 'bg-[#211A14]/90 text-[#F6AD55] border-[#C2672B]/30'
                  : 'bg-white/95 text-[#C2672B] border-stone-200 backdrop-blur-md'
              }`}
            >
              <DhabaLogo size="sm" isDarkMode={isDarkMode} showWordmark={false} />
              <span>KASHMIRI DHABA · ESTD 1994 · NH-3 SANCTUARY</span>
            </div>
          </div>

          <h1
            className={`font-serif text-3xl sm:text-5xl lg:text-[68px] tracking-tight leading-[1.12] sm:leading-[1.08] max-w-3xl font-bold ${
              isDarkMode ? 'text-[#F4EFE6]' : 'text-[#1C1917]'
            }`}
          >
            WHERE THE <span className="italic font-normal text-[#C2672B]">HIGHWAY</span> MEETS GREAT FOOD.
          </h1>

          <p
            className={`text-sm sm:text-xl max-w-2xl font-normal leading-relaxed font-sans ${
              isDarkMode ? 'text-[#D8C2B6]' : 'text-stone-700'
            }`}
          >
            Slow-simmered clay handis, bold charcoal smoke, and late-night highway hospitality. Gather under starry timber pergolas on the Mumbai-Nashik corridor.
          </p>

          {/* Action CTAs (Optimized for Mobile & Desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2 w-full sm:w-auto">
            {/* Primary Reserve Table Button */}
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-extrabold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table or Gazebo</span>
            </button>

            {/* Explore Menu Button */}
            <button
              onClick={onExploreMenu}
              className={`w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                isDarkMode
                  ? 'bg-[#1C1815]/90 hover:bg-[#2C221C] text-[#F4EFE6] border-[#713B0C]'
                  : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300 shadow-sm'
              }`}
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-4 h-4 text-[#C2672B]" />
            </button>

            {/* Directions Link */}
            <button
              onClick={onOpenDirections}
              className={`w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-full font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isDarkMode
                  ? 'text-stone-300 hover:text-white'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Navigation className="w-4 h-4 text-[#C2672B]" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>

        {/* Floating Culinary Hero Card */}
        <div className="lg:col-span-4 mt-4 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none">
          <div
            className={`relative rounded-3xl p-4 sm:p-5 shadow-xl transition-all duration-300 border ${
              isDarkMode
                ? 'bg-[#1C1815]/95 border-[#713B0C]/50 text-white'
                : 'bg-white/95 border-stone-200 text-stone-900 backdrop-blur-md'
            }`}
          >
            <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 shadow-sm">
              <img
                alt="Signature Tandoori Seekh & Banjara Kebabs on flaming charcoal sigri"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={ASSET_IMAGES.sigriKebab}
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#F6AD55] font-bold text-[10px] tracking-wider uppercase border border-white/10">
                CHEF SPECIAL
              </div>

              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-sans flex items-center gap-1.5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block shadow-sm" />
                <span>Non-Veg Sigri</span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1 text-[#C2672B] text-xs mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#C2672B] text-[#C2672B]" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-bold ml-1 ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                    (4.9 · 8.4k reviews)
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                  Banjara Sigri Kebabs
                </h3>
                <p className={`text-xs mt-1 font-sans ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                  12-hour spiced curd &amp; yellow chili glaze on embers
                </p>
              </div>

              <span className="font-serif text-xl sm:text-2xl font-bold text-[#C2672B] tabular-nums shrink-0">
                ₹390
              </span>
            </div>

            <div
              className={`mt-4 pt-3.5 border-t flex items-center justify-between text-xs font-sans font-semibold tracking-wider ${
                isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
              }`}
            >
              <span className="flex items-center gap-1.5 text-[#C2672B] text-[11px]">
                <Flame className="w-3.5 h-3.5" />
                MADE FRESH TO ORDER
              </span>

              <button
                onClick={() => onAddToOrder(banjaraItem)}
                className="px-4 py-1.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs transition-all shadow-sm flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>+ ADD TO TABLE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Highway Scrubber & Pacing Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div
          className={`rounded-2xl p-3 sm:p-4 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border transition-colors ${
            isDarkMode
              ? 'bg-[#141210]/95 border-[#2C221C] text-stone-300'
              : 'bg-white/95 border-stone-200 text-stone-700 backdrop-blur-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#C2672B] tracking-widest uppercase">
              HIGHWAY SCENERY:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold tracking-wider overflow-x-auto w-full sm:w-auto py-0.5 no-scrollbar">
              <span
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border whitespace-nowrap ${
                  isDarkMode
                    ? 'bg-[#211A14] border-[#2C221C]'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                1. NH-3 RUN
              </span>
              <span className="text-stone-400">→</span>
              <span
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border whitespace-nowrap ${
                  isDarkMode
                    ? 'bg-[#211A14] border-[#2C221C]'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                2. LANTERN TIMBERS
              </span>
              <span className="text-stone-400">→</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#C2672B] text-white font-bold whitespace-nowrap shadow-sm">
                3. TANDOOR HEARTH
              </span>
              <span className="text-stone-400">→</span>
              <span
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border whitespace-nowrap ${
                  isDarkMode
                    ? 'bg-[#211A14] border-[#2C221C]'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                4. GAZEBO FEAST
              </span>
            </div>
          </div>

          <div
            className={`flex items-center justify-between w-full md:w-auto gap-4 text-[10px] sm:text-[11px] font-semibold tracking-wider pt-2 md:pt-0 border-t md:border-t-0 ${
              isDarkMode ? 'border-[#2C221C]' : 'border-stone-200'
            }`}
          >
            <span className="flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-[#C2672B]" />
              120+ CAR LOT
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#C2672B]" />
              FAMILY CABINS
            </span>
            <a
              href="#night-journey"
              className="text-[#C2672B] hover:underline flex items-center gap-1 font-bold"
            >
              HOURS &amp; TIMELINE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
