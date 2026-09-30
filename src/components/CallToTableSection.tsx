import React from 'react';
import { Navigation, Calendar, Phone, CheckCircle2, Flame } from 'lucide-react';

interface CallToTableSectionProps {
  onOpenReservation: () => void;
  onCallConcierge: () => void;
  isDarkMode: boolean;
}

export const CallToTableSection: React.FC<CallToTableSectionProps> = ({
  onOpenReservation,
  onCallConcierge,
  isDarkMode,
}) => {
  return (
    <section
      className={`w-full py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${
        isDarkMode ? 'bg-[#141210] border-[#2C221C]' : 'bg-[#FAF8F5] border-stone-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-5 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF4ED] text-[#C2672B] text-xs font-bold tracking-widest uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C2672B] animate-ping" />
          <Flame className="w-4 h-4 text-[#C2672B]" />
          <span>OPEN DAILY TILL 4:00 AM</span>
        </div>

        <h2
          className={`font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight font-bold ${
            isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
          }`}
        >
          HUNGRY YET?<br />
          <span className="italic font-normal text-[#C2672B]">
            YOUR TABLE IS WAITING.
          </span>
        </h2>

        <p
          className={`text-sm sm:text-lg max-w-xl font-normal font-sans leading-relaxed ${
            isDarkMode ? 'text-stone-300' : 'text-stone-600'
          }`}
        >
          Pull off the expressway, turn off your high beams, and let the aroma of sizzling tandoori butter naans welcome you to Bhinar.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3 w-full sm:w-auto">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table or Gazebo</span>
          </button>

          <a
            href="https://maps.google.com/?q=Kashmira+Dhaba+Bhinar+Nashik+Highway"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-7 py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm transition-all flex items-center justify-center gap-2 border cursor-pointer ${
              isDarkMode
                ? 'bg-[#1C1815] text-[#F4EFE6] border-[#2C221C] hover:bg-[#2C221C]'
                : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
            }`}
          >
            <Navigation className="w-4 h-4 text-[#C2672B]" />
            <span>Drive To Kashmira</span>
          </a>

          <button
            onClick={onCallConcierge}
            className={`w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isDarkMode ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Phone className="w-4 h-4 text-[#C2672B]" />
            <span>Call Table Desk</span>
          </button>
        </div>

        {/* Operational Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mt-8 text-stone-500 text-xs font-sans font-semibold tracking-wider">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C2672B]" />
            FRESH FOOD DAILY
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C2672B]" />
            SEPARATE VEG PREPARATION
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C2672B]" />
            100% FAMILY &amp; WOMAN SAFE
          </span>
        </div>
      </div>
    </section>
  );
};
