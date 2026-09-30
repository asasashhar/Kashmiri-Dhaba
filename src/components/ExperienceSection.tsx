import React, { useState } from 'react';
import { SEATING_ZONES } from '../data/dhabaData';
import { Users, Moon, Baby, Flame, Calendar, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  onReserveGazebo: () => void;
  isDarkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onReserveGazebo, isDarkMode }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);

  const activeZone = SEATING_ZONES[activeZoneIndex];

  return (
    <section
      id="experience"
      className={`w-full py-16 sm:py-24 relative border-y transition-colors ${
        isDarkMode
          ? 'bg-[#0F0D0B] border-[#2A231E]'
          : 'bg-[#F4EFEA] border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2672B] tracking-widest uppercase mb-1">
              <Sparkles className="w-4 h-4 text-[#C2672B]" />
              <span>Atmospheric Hospitality</span>
            </div>
            <h2
              className={`font-serif text-3xl sm:text-5xl font-bold ${
                isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
              }`}
            >
              The Highway Sanctuary
            </h2>
          </div>
          <p
            className={`text-sm sm:text-base max-w-md font-sans leading-relaxed ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Designed to unwind high-speed highway driving. Step away from concrete expressways into wide open spaces, garden lawns, and private thatched pergolas.
          </p>
        </div>

        {/* 4 Feature Mosaic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            {
              num: '01',
              icon: Users,
              title: 'Family Dining & Cabins',
              desc: 'Expansive wooden banquet tables and private thatch-roof gazebos crafted for long family feasts.',
              tag: 'PRIVATE ZONES AVAILABLE',
            },
            {
              num: '02',
              icon: Moon,
              title: 'Open-Air Ambience',
              desc: 'Breezy timber pergolas, starlit skies over Bhinar village, and warm hanging lanterns.',
              tag: 'COOL HILL BREEZES',
            },
            {
              num: '03',
              icon: Baby,
              title: 'Kids Play & Lawns',
              desc: 'Safe enclosed garden lawns, dedicated play zones, and child-friendly seating for little travelers.',
              tag: 'ATTENDED GARDEN',
            },
            {
              num: '04',
              icon: Flame,
              title: 'The 4:00 AM Nocturne',
              desc: 'The charcoal sigris sizzle through the night. Never rushed, never compromised after dark.',
              tag: 'FULL KITCHEN SERVICE',
            },
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm border transition-all duration-300 group hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-[#1C1815] border-[#2C221C] hover:border-[#C2672B]/60'
                    : 'bg-white border-stone-200 hover:border-[#C2672B]/60 shadow-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#C2672B] tracking-widest uppercase font-sans">
                      EXPERIENCE · {feat.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isDarkMode
                          ? 'bg-[#211A14] text-[#F6AD55] border border-[#C2672B]/30'
                          : 'bg-[#FDF4ED] text-[#C2672B]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`font-serif text-xl mb-2 font-bold ${
                      isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                    }`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed font-sans ${
                      isDarkMode ? 'text-stone-300' : 'text-stone-600'
                    }`}
                  >
                    {feat.desc}
                  </p>
                </div>

                <div
                  className={`pt-5 border-t mt-4 flex items-center justify-between text-[11px] font-sans font-semibold tracking-wider ${
                    isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
                  }`}
                >
                  <span className="text-[#C2672B]">{feat.tag}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C2672B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Seating Showcase Card */}
        <div
          className={`rounded-3xl p-5 sm:p-8 md:p-10 border shadow-lg transition-colors ${
            isDarkMode
              ? 'bg-[#1C1815] border-[#2C221C]'
              : 'bg-white border-stone-200 shadow-stone-200'
          }`}
        >
          <div
            className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pb-6 border-b ${
              isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
            }`}
          >
            <div>
              <span className="text-[11px] font-bold text-[#C2672B] tracking-widest uppercase">
                EXPLORE SEATING SPACES
              </span>
              <h3
                className={`font-serif text-2xl sm:text-3xl font-bold mt-1 ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Choose Your Atmosphere Tonight
              </h3>
            </div>

            {/* Zone Selector Buttons */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {SEATING_ZONES.map((zone, idx) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneIndex(idx)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeZoneIndex === idx
                      ? 'bg-[#C2672B] text-white shadow-md'
                      : isDarkMode
                      ? 'bg-[#2B221C] text-stone-300 hover:text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Zone Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-6 sm:pt-8">
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-md aspect-[16/10] border border-stone-200 group">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#F6AD55] text-xs font-bold border border-white/10">
                {activeZone.tag}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Capacity: {activeZone.capacity}
                </span>
                <span className="text-[#F6AD55] font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  🟢 Available For Reservation
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div>
                <h4
                  className={`font-serif text-2xl sm:text-3xl font-bold ${
                    isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                  }`}
                >
                  {activeZone.name}
                </h4>
                <p
                  className={`text-sm mt-2.5 font-sans leading-relaxed ${
                    isDarkMode ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {activeZone.desc}
                </p>

                <div className="space-y-2 mt-5">
                  {activeZone.features.map((feat, fidx) => (
                    <div
                      key={fidx}
                      className={`flex items-center gap-2 text-xs font-sans ${
                        isDarkMode ? 'text-stone-200' : 'text-stone-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C2672B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onReserveGazebo}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Seating</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
