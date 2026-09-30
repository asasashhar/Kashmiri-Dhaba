import React, { useState } from 'react';
import { ASSET_IMAGES } from '../data/dhabaData';
import { Camera, X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  if (!isOpen) return null;

  const galleryItems = [
    {
      title: 'Starlit Timber Pergolas',
      desc: 'Ambient hanging amber lanterns glowing over open wooden banquet tables at midnight in Bhinar.',
      url: ASSET_IMAGES.heroBg,
      category: 'Ambience',
    },
    {
      title: 'Charcoal Sigri & Banjara Skewers',
      desc: 'Basting tender cuts with spiced yogurt and yellow chili over red Babool embers at 450°C.',
      url: ASSET_IMAGES.sigriKebab,
      category: 'Tandoor Hearth',
    },
    {
      title: 'NH-3 Highway Corridor Navigator',
      desc: 'Milestone KM 42 marker between Thane Toll and Padgha, safe parking for 120+ vehicles.',
      url: ASSET_IMAGES.mapRouteBg,
      category: 'Location',
    },
    {
      title: 'Clay Handi Slow Braise',
      desc: 'Tender baby goat slow-braised for four hours in sealed terracotta handis with marrow and whole spices.',
      url: ASSET_IMAGES.sigriKebab,
      category: 'Kitchen Craft',
    },
    {
      title: 'Family Garden Gazebos',
      desc: 'Private chalets designed with thatched roofs and flowering bougainvillea gardens for restful road trips.',
      url: ASSET_IMAGES.heroBg,
      category: 'Family Sanctuary',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-4xl border rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto transition-colors ${
          isDarkMode
            ? 'bg-[#1C1815] border-[#2C221C] text-white'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        <div
          className={`flex items-center justify-between pb-4 border-b mb-6 ${
            isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
              }`}
            >
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#C2672B] tracking-widest uppercase font-sans">
                PHOTOGRAPHIC ARCHIVE
              </span>
              <h3
                className={`font-serif text-xl sm:text-2xl font-bold ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Kashmira Dhaba Moments
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-stone-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 text-white text-[10px] font-bold tracking-wider uppercase font-sans border border-white/10">
                {item.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-serif text-base font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-300 mt-0.5 line-clamp-1 font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Photo Modal Preview */}
        {activePhoto !== null && (
          <div
            className={`mt-6 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center gap-4 sm:gap-5 animate-fadeIn ${
              isDarkMode ? 'bg-[#211A14] border-[#2C221C]' : 'bg-stone-50 border-stone-200'
            }`}
          >
            <img
              src={galleryItems[activePhoto].url}
              alt={galleryItems[activePhoto].title}
              className="w-full sm:w-56 h-36 object-cover rounded-xl border border-stone-200"
            />
            <div className="flex-1">
              <span className="text-[10px] text-[#C2672B] uppercase tracking-wider font-bold">
                {galleryItems[activePhoto].category}
              </span>
              <h4
                className={`font-serif text-lg font-bold mt-0.5 ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                {galleryItems[activePhoto].title}
              </h4>
              <p
                className={`text-xs mt-1.5 font-sans leading-relaxed ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                {galleryItems[activePhoto].desc}
              </p>
            </div>
            <button
              onClick={() => setActivePhoto(null)}
              className="px-4 py-2 rounded-lg bg-stone-200 text-xs font-bold text-stone-800 hover:bg-stone-300 cursor-pointer"
            >
              Close View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
