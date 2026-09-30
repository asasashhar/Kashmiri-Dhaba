import React, { useMemo } from 'react';
import { TIMELINE_PHASES } from '../data/dhabaData';
import { Moon, Coffee } from 'lucide-react';

interface NightJourneySectionProps {
  isDarkMode: boolean;
}

export const NightJourneySection: React.FC<NightJourneySectionProps> = ({ isDarkMode }) => {
  const currentHour = new Date().getHours();

  const activePhaseIndex = useMemo(() => {
    if (currentHour >= 16 && currentHour < 18) return 0;
    if (currentHour >= 18 && currentHour < 20) return 1;
    if (currentHour >= 20 && currentHour < 23) return 2;
    if (currentHour >= 23 || currentHour < 2) return 3;
    if (currentHour >= 2 && currentHour < 4) return 4;
    return 5;
  }, [currentHour]);

  return (
    <section
      id="night-journey"
      className={`w-full py-16 sm:py-24 relative transition-colors ${
        isDarkMode ? 'bg-[#141210]' : 'bg-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF4ED] text-[#C2672B] text-xs font-bold tracking-widest uppercase mb-2">
            <Moon className="w-3.5 h-3.5" />
            <span>The Rhythm of the Corridor</span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl font-bold ${
              isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
            }`}
          >
            The 4:00 PM to 4:00 AM Cycle
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 font-sans leading-relaxed ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Experience the changing mood of the corridor as evening cool descends and the midnight traveler rush begins along NH-3.
          </p>
        </div>

        {/* Chronological Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TIMELINE_PHASES.map((phase, idx) => {
            const isNow = activePhaseIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 relative shadow-sm border transition-all duration-300 flex flex-col justify-between ${
                  isNow
                    ? 'border-[#C2672B] ring-2 ring-[#C2672B]/30 transform -translate-y-1 shadow-md'
                    : isDarkMode
                    ? 'bg-[#1C1815] border-[#2C221C]'
                    : 'bg-white border-stone-200 shadow-stone-200'
                } ${isNow ? (isDarkMode ? 'bg-[#211A14]' : 'bg-[#FDF9F5]') : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-4xl sm:text-5xl text-[#C2672B] font-bold block leading-none tabular-nums">
                      {phase.time}
                    </span>

                    {isNow ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2672B] text-white text-[10px] font-bold tracking-wider shadow-sm animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        CORRIDOR NOW
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold text-stone-400 uppercase tracking-wider">
                        STAGE 0{idx + 1}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-sans font-bold text-[#C2672B] block mb-1 uppercase tracking-wider">
                    {phase.phase}
                  </span>

                  <h3
                    className={`font-serif text-xl sm:text-2xl mb-2 font-bold ${
                      isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                    }`}
                  >
                    {phase.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed font-sans ${
                      isDarkMode ? 'text-stone-300' : 'text-stone-600'
                    }`}
                  >
                    {phase.description}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t mt-5 flex items-center gap-2 text-xs font-sans italic ${
                    isDarkMode ? 'border-[#2C221C] text-stone-400' : 'border-stone-100 text-stone-500'
                  }`}
                >
                  <Coffee className="w-4 h-4 text-[#C2672B] shrink-0" />
                  <span className="truncate">{phase.vibe}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
