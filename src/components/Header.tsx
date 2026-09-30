import React, { useState } from 'react';
import { DhabaLogo } from './DhabaLogo';
import { Phone, Calendar, ShoppingBag, Menu as MenuIcon, X, MapPin, Compass } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenReservation: () => void;
  onOpenOrderTray: () => void;
  orderCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenReservation,
  onOpenOrderTray,
  orderCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'menu', label: 'Menu' },
    { id: 'experience', label: 'Gazebos & Cabins' },
    { id: 'signature-dishes', label: 'Signature Dishes' },
    { id: 'night-journey', label: 'Night Journey' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Route & Map' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSelectTab(id);
    setMobileMenuOpen(false);

    if (id === 'gallery' || id === 'reservation-concierge') return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top Highway Corridor Status Ticker */}
      <div className="w-full py-1 sm:py-1.5 px-3 sm:px-4 text-[10px] sm:text-[11px] font-sans border-b bg-[#0F0D0B] text-[#D8C2B6] border-[#2A231E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2672B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C2672B]" />
            </span>
            <span className="text-[#F6AD55] font-bold tracking-wider uppercase text-[10px] shrink-0">
              HIGHWAY LIVE:
            </span>
            <span className="truncate text-stone-200">
              BHINAR, NASHIK HIGHWAY · OPEN DAILY 4:00 PM – 4:00 AM · CHARCOAL HEARTH ACTIVE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-stone-400 text-[11px] shrink-0 font-mono">
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#F6AD55]" />
              19.3481° N, 73.0822° E
            </span>
            <span className="text-[#F6AD55] font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              NH-3 · KM 42
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header className="w-full backdrop-blur-xl border-b bg-[#141210]/95 border-[#2A231E] shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
          {/* Brand Signature with Custom Kashmiri Dhaba Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center cursor-pointer"
            >
              <DhabaLogo size="md" isDarkMode={true} subtitle="BHINAR · NH-3 KM 42" />
            </a>

            <div className="hidden xl:flex items-center pl-1">
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full border tracking-wider uppercase bg-[#211A14] border-[#C2672B]/30 text-[#F6AD55]">
                NH-3 · KM 42
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`px-2.5 py-1.5 text-xs tracking-wide transition-all rounded-lg font-medium whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C2672B] text-white font-semibold shadow-sm'
                      : 'text-[#D8C2B6] hover:bg-[#211A14] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster - Responsive for phones and desktops */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Phone Hotlink: ONLY PHONE ICON, NO NUMBER DISPLAYED IN HEADER */}
            <a
              href="tel:+919323387207"
              className="p-2 sm:p-2.5 rounded-full transition-all border flex items-center justify-center cursor-pointer bg-[#211A14] text-[#F6AD55] border-[#2A231E] hover:border-[#F6AD55] hover:bg-[#2A231E]"
              title="Call Kashmiri Dhaba Desk (+91 93233 87207)"
              aria-label="Call Kashmiri Dhaba"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Table Order Bag Button */}
            <button
              onClick={onOpenOrderTray}
              className="relative p-2 sm:p-2.5 rounded-full transition-all border cursor-pointer bg-[#211A14] text-[#F6AD55] border-[#2A231E] hover:border-[#F6AD55] hover:bg-[#2A231E]"
              title="Table Order Tray"
              aria-label="View current table order tray"
            >
              <ShoppingBag className="w-4 h-4" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#C2672B] text-white text-[9px] sm:text-[10px] font-extrabold flex items-center justify-center shadow-md animate-pulse">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Reserve Table Button (Accessible on both phones and larger screens) */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-[11px] sm:text-xs tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0 active:scale-95"
              title="Reserve a Table or Gazebo"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>RESERVE<span className="hidden sm:inline"> TABLE</span></span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border transition-colors text-stone-300 border-[#2A231E] hover:bg-[#211A14]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b px-4 py-5 space-y-2 shadow-2xl animate-fadeIn bg-[#141210] border-[#2A231E]">
            {/* Prominent Mobile Reserve Button at Top of Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer mb-3 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table or Family Gazebo</span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`block px-3.5 py-2.5 text-sm rounded-lg transition-colors font-medium ${
                  activeTab === link.id
                    ? 'bg-[#C2672B] text-white font-semibold'
                    : 'text-stone-300 hover:bg-[#211A14] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t flex items-center justify-between text-xs border-[#2A231E]">
              <a
                href="tel:+919323387207"
                className="text-[#F6AD55] flex items-center gap-1.5 font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 93233 87207
              </a>
              <span className="text-stone-400">
                Open Daily till 4:00 AM
              </span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
