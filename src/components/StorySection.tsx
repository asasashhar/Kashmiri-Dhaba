import React from 'react';
import { ASSET_IMAGES } from '../data/dhabaData';
import { MapPin, Award, Clock, Star, Flame } from 'lucide-react';

interface StorySectionProps {
  isDarkMode: boolean;
}

export const StorySection: React.FC<StorySectionProps> = ({ isDarkMode }) => {
  return (
    <section
      id="our-story"
      className={`w-full py-16 sm:py-24 relative overflow-hidden transition-colors ${
        isDarkMode ? 'bg-[#141210]' : 'bg-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Asymmetric Photo Block */}
        <div className="lg:col-span-5 relative">
          <div
            className={`relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] border transition-colors group ${
              isDarkMode ? 'bg-[#211A14] border-[#2C221C]' : 'bg-white border-stone-200 shadow-stone-200'
            }`}
          >
            <img
              alt="Kashmira Dhaba entrance illuminated under highway sky"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSET_IMAGES.heroBg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

            {/* Float Card */}
            <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200 text-stone-900">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C2672B] tracking-widest uppercase mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION ANCHOR</span>
              </div>
              <p className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                Bhinar, Bhiwandi Highway
              </p>
              <p className="text-xs text-stone-600 mt-1 font-sans leading-relaxed">
                Between Thane Toll and Padgha. The landmark highway culinary stop for travelers over three decades.
              </p>
            </div>
          </div>
        </div>

        {/* Right Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C2672B] tracking-widest uppercase font-sans">
            <span className="w-8 h-0.5 bg-[#C2672B]" />
            <Flame className="w-4 h-4 text-[#C2672B]" />
            <span>Heritage of the Road</span>
          </div>

          <blockquote
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-snug ${
              isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
            }`}
          >
            “Some places are simply highway stops. <span className="italic font-normal text-[#C2672B]">Kashmira</span> becomes the memory of the journey.”
          </blockquote>

          <div
            className={`flex flex-col gap-3.5 text-sm sm:text-base font-normal leading-relaxed font-sans ${
              isDarkMode ? 'text-stone-300' : 'text-stone-700'
            }`}
          >
            <p>
              For generations of road-trippers heading toward Nashik, Shirdi, and Dhule, pulling into Bhinar as evening settles is a cherished tradition. Here, the aroma of burning oak charcoal and roasted whole spices greets every traveler before the car engine even cools.
            </p>
            <p>
              We built Kashmira around what genuine highway dining should always be: unpretentious, deeply flavorful, generous, and alive. From rustic wood pergolas lit by warm lanterns to clay handis stewed low and slow, this is where journey meets nourishment.
            </p>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-3">
            <div
              className={`p-3.5 sm:p-5 rounded-2xl border shadow-sm transition-all text-center sm:text-left ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#2C221C]'
                  : 'bg-white border-stone-200'
              }`}
            >
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#C2672B] mb-1.5 mx-auto sm:mx-0" />
              <span className="font-serif text-2xl sm:text-4xl text-[#C2672B] block leading-none font-bold tabular-nums">
                30+
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider mt-1.5 block">
                Years Serving
              </span>
            </div>

            <div
              className={`p-3.5 sm:p-5 rounded-2xl border shadow-sm transition-all text-center sm:text-left ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#2C221C]'
                  : 'bg-white border-stone-200'
              }`}
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C2672B] mb-1.5 mx-auto sm:mx-0" />
              <span className="font-serif text-2xl sm:text-4xl text-[#C2672B] block leading-none font-bold tabular-nums">
                4 AM
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider mt-1.5 block">
                Nightly Tandoor
              </span>
            </div>

            <div
              className={`p-3.5 sm:p-5 rounded-2xl border shadow-sm transition-all text-center sm:text-left ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#2C221C]'
                  : 'bg-white border-stone-200'
              }`}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#C2672B] fill-[#C2672B] mb-1.5 mx-auto sm:mx-0" />
              <span className="font-serif text-2xl sm:text-4xl text-[#C2672B] block leading-none font-bold tabular-nums">
                8.4K
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider mt-1.5 block">
                5-Star Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
