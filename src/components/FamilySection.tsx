import React from 'react';
import { ASSET_IMAGES } from '../data/dhabaData';
import { ShieldCheck, Car, Smile, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

interface FamilySectionProps {
  onReserveGazebo: () => void;
  isDarkMode: boolean;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ onReserveGazebo, isDarkMode }) => {
  return (
    <section
      className={`w-full py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${
        isDarkMode ? 'bg-[#0F0D0B] border-[#2A231E]' : 'bg-[#F4EFEA] border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Information */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C2672B] tracking-widest uppercase font-sans">
            <ShieldCheck className="w-4 h-4 text-[#C2672B]" />
            <span>Uncompromised Comfort &amp; Hospitality</span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl font-bold leading-tight ${
              isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
            }`}
          >
            Built For Generations To Gather
          </h2>

          <p
            className={`text-sm sm:text-base font-normal leading-relaxed font-sans ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Highway dining often has a rough reputation, but Kashmira was reimagined from day one to be safe, exceptionally clean, and hospitable for families, women travelers, and children of all ages.
          </p>

          {/* 4 Feature Badges with Lucide Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
            <div
              className={`flex items-start gap-3 p-4 rounded-2xl shadow-sm border transition-colors ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
                }`}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`text-xs block font-bold font-sans tracking-wide ${
                    isDarkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  PRIVATE FAMILY GAZEBOS
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-sans">
                  Separate covered pergolas for quiet family dining away from highway noise.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start gap-3 p-4 rounded-2xl shadow-sm border transition-colors ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
                }`}
              >
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`text-xs block font-bold font-sans tracking-wide ${
                    isDarkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  SECURE VALET &amp; COACH LOT
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-sans">
                  24-hour guarded, brightly-lit private parking with round-the-clock CCTV.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start gap-3 p-4 rounded-2xl shadow-sm border transition-colors ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
                }`}
              >
                <Smile className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`text-xs block font-bold font-sans tracking-wide ${
                    isDarkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  DEDICATED PLAY LAWNS
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-sans">
                  Lush grass lawns where children can stretch their legs after hours in the car.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start gap-3 p-4 rounded-2xl shadow-sm border transition-colors ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`text-xs block font-bold font-sans tracking-wide ${
                    isDarkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  PRISTINE RESTROOMS
                </span>
                <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed font-sans">
                  Continuously sanitized, modern family washrooms with baby-changing tables.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onReserveGazebo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-widest uppercase shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve A Family Gazebo</span>
            </button>
          </div>
        </div>

        {/* Right Staggered Photo Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
          <div className="rounded-3xl overflow-hidden shadow-md aspect-square border border-stone-200 group">
            <img
              alt="Lanterns lit under wooden pergolas at Kashmira"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSET_IMAGES.heroBg}
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md aspect-square translate-y-6 sm:translate-y-8 border border-stone-200 group">
            <img
              alt="Freshly barbecued skewers on open fire"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSET_IMAGES.sigriKebab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
