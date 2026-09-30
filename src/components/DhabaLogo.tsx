import React from 'react';

interface DhabaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  isDarkMode?: boolean;
  subtitle?: string;
}

export const DhabaLogo: React.FC<DhabaLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  isDarkMode = true,
  subtitle = 'AUTHENTIC HIGHWAY HAVEN · EST. 1994',
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold',
    md: 'text-lg sm:text-xl font-extrabold',
    lg: 'text-2xl sm:text-3xl font-extrabold',
    xl: 'text-3xl sm:text-4xl font-extrabold',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Bespoke Handcrafted Kashmiri Royal Crest Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm filter"
        >
          <defs>
            {/* Rich Copper Gold Gradient */}
            <linearGradient id="kdGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="80%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>

            {/* Ember Fire / Saffron Red Gradient */}
            <linearGradient id="kdFlame" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="25%" stopColor="#F59E0B" />
              <stop offset="65%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>

            {/* Clay Handi Terracotta Gradient */}
            <linearGradient id="kdPot" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C2672B" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            {/* Central Dark Hearth Background */}
            <radialGradient id="kdHearth" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#451A03" />
              <stop offset="70%" stopColor="#1C1917" />
              <stop offset="100%" stopColor="#0C0A09" />
            </radialGradient>
          </defs>

          {/* Outer Dashed Ornamental Highway Ring */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="url(#kdGold)"
            strokeWidth="1.8"
            strokeDasharray="4 2"
            opacity="0.85"
          />

          {/* Inner Solid Crest Shield */}
          <circle
            cx="50"
            cy="50"
            r="43"
            fill="url(#kdHearth)"
            stroke="url(#kdGold)"
            strokeWidth="1.6"
          />

          {/* Traditional Kashmiri Chinar Leaves on Left & Right */}
          {/* Left Kashmiri Leaf */}
          <path
            d="M23 48C21 41 24 33 30 29C27 36 29 43 33 46C29 46 25 48 23 48Z"
            fill="url(#kdGold)"
            opacity="0.9"
          />
          <path
            d="M19 59C19 52 23 46 29 43C26 49 28 56 33 59C28 59 22 60 19 59Z"
            fill="url(#kdGold)"
            opacity="0.8"
          />

          {/* Right Kashmiri Leaf */}
          <path
            d="M77 48C79 41 76 33 70 29C73 36 71 43 67 46C71 46 75 48 77 48Z"
            fill="url(#kdGold)"
            opacity="0.9"
          />
          <path
            d="M81 59C81 52 77 46 71 43C74 49 72 56 67 59C72 59 78 60 81 59Z"
            fill="url(#kdGold)"
            opacity="0.8"
          />

          {/* Highway North Star at Zenith */}
          <polygon
            points="50,11 52.5,17 58,18 53.5,21.5 55,27 50,23.5 45,27 46.5,21.5 42,18 47.5,17"
            fill="#FEF08A"
          />

          {/* Authentic Earthen Sigri / Clay Handi Vessel Base */}
          <path
            d="M32 58C32 58 35 74 50 74C65 74 68 58 68 58H32Z"
            fill="url(#kdPot)"
            stroke="url(#kdGold)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="50"
            cy="58"
            rx="18"
            ry="4"
            fill="#9A3412"
            stroke="url(#kdGold)"
            strokeWidth="1"
          />

          {/* Roaring Tandoor Fire Flame with Kashmiri Chinar Leaf Silhouette */}
          <path
            d="M50 22C50 22 57 32 54 39C60 36 62 31 62 31C62 31 65 40 59 49C56 54 50 56 45 52C43 50 44 46 45 43C42 46 38 50 39 54C35 50 37 43 41 38C43 35 45 32 44 28C48 32 50 22 50 22Z"
            fill="url(#kdFlame)"
          />

          {/* Golden Core Flame Tongue */}
          <path
            d="M50 28C50 28 53 35 51 39C54 37 55 34 55 34C55 34 56 41 53 46C50 50 47 52 44 48C44 45 47 42 46 38C48 36 50 28 50 28Z"
            fill="#FEF08A"
            opacity="0.95"
          />

          {/* Inception Ribbon Banner */}
          <rect
            x="34"
            y="76"
            width="32"
            height="10"
            rx="5"
            fill="#C2672B"
            stroke="#FEF08A"
            strokeWidth="0.8"
          />
          <text
            x="50"
            y="83"
            fontSize="6"
            fontWeight="bold"
            fill="#FEF3C7"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="0.8"
          >
            1994
          </text>
        </svg>

        {/* Ambient Warm Hearth Glow */}
        <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-full blur-sm -z-10 group-hover:bg-[#F59E0B]/40 transition-colors" />
      </div>

      {/* Brand Typographic Lockup */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif ${titleSizes[size]} tracking-tight leading-none transition-colors ${
                isDarkMode
                  ? 'text-[#F4EFE6] group-hover:text-[#F6AD55]'
                  : 'text-[#1C1917] group-hover:text-[#C2672B]'
              }`}
            >
              KASHMIRI DHABA
            </span>
          </div>

          <span
            className={`text-[8.5px] sm:text-[9.5px] leading-tight mt-0.5 tracking-[0.2em] font-sans font-bold uppercase truncate max-w-[170px] sm:max-w-none ${
              isDarkMode ? 'text-[#F6AD55]' : 'text-[#C2672B]'
            }`}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
