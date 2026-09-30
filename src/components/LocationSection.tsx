import React, { useState } from 'react';
import { ASSET_IMAGES, ROUTE_ORIGINS } from '../data/dhabaData';
import { MapPin, Navigation, Car, Phone, MessageSquare, Compass, Sparkles } from 'lucide-react';

interface LocationSectionProps {
  isDarkMode: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ isDarkMode }) => {
  const [selectedRouteId, setSelectedRouteId] = useState(ROUTE_ORIGINS[0].id);

  const activeRoute = ROUTE_ORIGINS.find((r) => r.id === selectedRouteId) || ROUTE_ORIGINS[0];

  return (
    <section
      id="location"
      className={`w-full py-16 sm:py-24 border-t transition-colors ${
        isDarkMode ? 'bg-[#0F0D0B] border-[#2A231E]' : 'bg-[#F4EFEA] border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2672B] tracking-widest uppercase mb-1">
            <Compass className="w-4 h-4 text-[#C2672B]" />
            <span>Highway Navigation &amp; Landmark</span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl font-bold ${
              isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
            }`}
          >
            Finding Kashmira Dhaba
          </h2>

          <p
            className={`text-sm max-w-xl mt-2 font-sans leading-relaxed ${
              isDarkMode ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Situated right along NH-3 (Mumbai - Nashik Expressway) at Bhinar, Bhiwandi. Dedicated deceleration lane and safe 120+ coach &amp; car parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Interactive Map Visual Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-md relative min-h-[380px] sm:min-h-[440px] border border-stone-200 group">
            <div
              className="w-full h-full min-h-[380px] sm:min-h-[440px] bg-cover bg-center relative"
              style={{ backgroundImage: `url('${ASSET_IMAGES.mapRouteBg}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Highway Milestone Pin */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md text-[#F6AD55] text-xs font-bold tracking-wider border border-white/10 flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C2672B] animate-pulse" />
                <MapPin className="w-4 h-4 text-[#F6AD55]" />
                <span>MILESTONE: NH-3 · KM 42 MARKER</span>
              </div>

              {/* Coordinates & Google Maps CTA */}
              <div className="absolute bottom-5 left-5 right-5 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-stone-200 text-stone-900">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#C2672B] tracking-wider uppercase flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    GPS: 19.3371° N, 73.0844° E
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mt-1">
                    Kashmira &amp; Shimla Dhaba
                  </h4>
                  <p className="text-xs text-stone-600 font-sans mt-0.5">
                    Bhinar, Post Padgha, Bhiwandi, Maharashtra 421302
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Kashmira+Dhaba+Bhinar+Nashik+Highway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-extrabold text-xs tracking-wider uppercase shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>START MAPS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Route Origin Planner & Concierge Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Live Drive Times Calculator */}
            <div
              className={`rounded-3xl p-6 sm:p-7 shadow-sm border flex flex-col gap-3.5 transition-colors ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`flex items-center justify-between pb-3 border-b ${
                  isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#C2672B]" />
                  <span className="text-xs font-bold text-[#C2672B] tracking-widest uppercase font-sans">
                    SELECT YOUR ORIGIN
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">ESTIMATED DRIVE</span>
              </div>

              {/* Route Tabs */}
              <div className="space-y-2">
                {ROUTE_ORIGINS.map((route) => {
                  const isSelected = selectedRouteId === route.id;
                  return (
                    <div
                      key={route.id}
                      onClick={() => setSelectedRouteId(route.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FDF4ED] border-[#C2672B] shadow-sm'
                          : isDarkMode
                          ? 'bg-[#211A14] border-[#2C221C] hover:bg-[#261F18]'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold ${
                            isSelected ? 'text-[#C2672B] font-bold' : isDarkMode ? 'text-stone-200' : 'text-stone-800'
                          }`}
                        >
                          {route.origin}
                        </span>
                        <span className="text-xs font-bold text-[#C2672B] font-mono tabular-nums">
                          {route.duration}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="mt-2.5 pt-2.5 border-t border-[#F6D7C3] text-[11px] text-stone-700 space-y-1 font-sans animate-fadeIn">
                          <div className="flex justify-between">
                            <span className="text-stone-500">Distance:</span>
                            <span className="font-bold text-stone-900">{route.distance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Expressway Corridor:</span>
                            <span className="font-medium text-stone-900">{route.route}</span>
                          </div>
                          <p className="text-[#C2672B] text-[10px] pt-1 italic font-medium">
                            Tip: {route.directionsTip}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Travel Assistance Box */}
            <div
              className={`rounded-3xl p-5 sm:p-6 shadow-sm border flex flex-col gap-2 transition-colors ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#2C221C]'
                  : 'bg-white border-stone-200'
              }`}
            >
              <span className="text-xs font-bold text-[#C2672B] tracking-widest uppercase font-sans flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                HIGHWAY CONCIERGE &amp; ARRIVAL PREP
              </span>
              <p
                className={`text-xs font-sans leading-relaxed ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                Unsure of highway exits or want your private gazebo pre-warmed with sizzler platters before your car rolls in?
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="tel:+919323387207"
                  className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-sm border border-stone-200"
                >
                  <Phone className="w-4 h-4 text-[#C2672B]" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`https://wa.me/919323387207?text=Hello%20Kashmira%20Dhaba,%20we%20are%20driving%20from%20${encodeURIComponent(activeRoute.origin)}%20and%20will%20arrive%20in%20about%20${encodeURIComponent(activeRoute.duration)}.%20Please%20guide%20us%20or%20keep%20a%20table%20ready.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#C2672B] hover:bg-[#A8531D] text-white text-xs font-bold tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
