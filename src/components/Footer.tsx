import React, { useState } from 'react';
import { DhabaLogo } from './DhabaLogo';
import { ambientSound } from '../utils/audioSynthesizer';
import { Phone, MessageSquare, Mail, Volume2, VolumeX, Navigation, ShoppingBag, Calendar } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenOrderTray: () => void;
  onOpenReservation: () => void;
  orderCount: number;
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenOrderTray,
  onOpenReservation,
  orderCount,
  isDarkMode = true,
}) => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  const toggleSound = () => {
    const isNowPlaying = ambientSound.toggle();
    setSoundPlaying(isNowPlaying);
  };

  return (
    <>
      <footer className="w-full pt-16 pb-28 md:pb-16 border-t bg-[#0A0908] text-[#F4EFE6] border-[#2C221C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-12">
            {/* Col 1: Brand & Legacy */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-2">
                <DhabaLogo size="lg" isDarkMode={true} subtitle="KASHMIRI & SHIMLA HIGHWAY HAVEN · EST. 1994" />
              </div>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md font-sans leading-relaxed font-light">
                A legendary culinary haven on the Mumbai-Nashik arterial corridor. Purveyors of charcoal-flamed Mughlai signatures, fragrant earthen handis, and late-night highway hospitality since generations.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#F6AD55] text-xs font-bold font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#C2672B] animate-pulse" />
                  <span>OPEN DAILY · KITCHEN CLOSES 4:00 AM</span>
                </span>
              </div>
            </div>

            {/* Col 2: Epicurean Haven */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#F6AD55] tracking-widest uppercase font-sans">
                HIGHWAY HAVEN
              </span>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mt-1">
                Bhinar, Nashik Highway, Post Padgha,<br />
                Bhiwandi, Maharashtra 421302, India
              </p>
              <p className="text-xs text-stone-400 mt-1 font-sans leading-relaxed">
                Milestone: NH-3 Corridor, KM 42 Marker<br />
                Convenient valet &amp; coach parking ready 24/7.
              </p>
            </div>

            {/* Col 3: Direct Inquiries & Sound Synthesizer */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F6AD55] tracking-widest uppercase font-sans">
                DIRECT INQUIRIES &amp; CONCIERGE
              </span>
              <div className="flex flex-col gap-2 mt-1 font-sans">
                <a
                  href="tel:+919323387207"
                  className="text-sm sm:text-base text-stone-100 hover:text-[#F6AD55] transition-colors flex items-center gap-2.5 font-bold"
                >
                  <Phone className="w-4 h-4 text-[#F6AD55]" />
                  <span>+91 93233 87207</span>
                </a>
                <a
                  href="https://wa.me/919323387207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-stone-300 hover:text-[#F6AD55] transition-colors flex items-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-[#F6AD55]" />
                  <span>WhatsApp Highway Concierge</span>
                </a>
                <a
                  href="mailto:concierge@kashmiradhaba.com"
                  className="text-xs text-stone-400 hover:text-white transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>concierge@kashmiradhaba.com</span>
                </a>
              </div>

              {/* Sound Toggle Feature with Web Audio API */}
              <div className="pt-2">
                <button
                  onClick={toggleSound}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border text-xs font-bold tracking-wider font-sans transition-all cursor-pointer ${
                    soundPlaying
                      ? 'bg-[#C2672B] text-white border-[#C2672B] shadow-md'
                      : 'bg-white/10 text-stone-300 border-white/10 hover:bg-white/20'
                  }`}
                  title="Toggle ambient rain & hearth embers sound"
                >
                  {soundPlaying ? (
                    <Volume2 className="w-4 h-4 text-white animate-pulse" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-stone-400" />
                  )}
                  <span>
                    {soundPlaying ? 'Playing: Highway Rain & Embers' : 'Sound: Highway Rain & Embers'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Protocol Links */}
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-sans">
            <div className="flex items-center gap-3 flex-wrap">
              <p>© 2025 Kashmira Dhaba &amp; Hospitality Ltd. All rights reserved.</p>
              <span className="hidden md:inline">·</span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-300">
                FSSAI LIC: 11521021000492
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => onSelectTab('our-story')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Our Legacy
              </button>
              <button
                onClick={() => onSelectTab('experience')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Gazebo Protocols
              </button>
              <button
                onClick={() => onSelectTab('location')}
                className="hover:text-[#F6AD55] transition-colors cursor-pointer"
              >
                Route Navigator
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Bar with 4 Thumb-Friendly Actions Including Table Reservation */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 py-2 flex items-center justify-around gap-2 border-t backdrop-blur-xl shadow-2xl bg-[#141210]/95 border-[#2A231E]">
        {/* Call Desk */}
        <a
          href="tel:+919323387207"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-colors border bg-[#1C1815] text-stone-200 border-[#2C221C] hover:bg-[#2B221C]"
        >
          <Phone className="w-4 h-4 text-[#C2672B]" />
          <span className="text-[10px] mt-0.5 font-bold tracking-wider">CALL</span>
        </a>

        {/* RESERVE TABLE ACTION (Managed directly for mobile phones) */}
        <button
          onClick={onOpenReservation}
          className="flex-1.5 flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-[#C2672B] hover:bg-[#A8531D] text-white shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-extrabold tracking-wider whitespace-nowrap">
            RESERVE
          </span>
        </button>

        {/* Table Order Tray */}
        <button
          onClick={onOpenOrderTray}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-colors border relative cursor-pointer bg-[#1C1815] text-stone-200 border-[#2C221C] hover:bg-[#2B221C]"
        >
          <ShoppingBag className="w-4 h-4 text-[#C2672B]" />
          <span className="text-[10px] mt-0.5 font-bold tracking-wider">
            TRAY {orderCount > 0 ? `(${orderCount})` : ''}
          </span>
          {orderCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C2672B] text-white text-[9px] font-extrabold flex items-center justify-center shadow-sm animate-pulse">
              {orderCount}
            </span>
          )}
        </button>

        {/* Google Maps Directions */}
        <a
          href="https://maps.google.com/?q=Kashmira+Dhaba+Bhinar+Nashik+Highway"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-colors border bg-[#1C1815] text-stone-200 border-[#2C221C] hover:bg-[#2B221C]"
        >
          <Navigation className="w-4 h-4 text-[#C2672B]" />
          <span className="text-[10px] mt-0.5 font-bold tracking-wider">MAP</span>
        </a>
      </div>
    </>
  );
};
