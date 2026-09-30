import React from 'react';
import { ASSET_IMAGES } from '../data/dhabaData';
import { MenuItem } from '../types';
import { Flame, Sparkles, Utensils, Phone, ShoppingBag, Award } from 'lucide-react';

interface SignatureShowcaseProps {
  onAddToOrder: (item: MenuItem) => void;
  onReservePlatter: () => void;
  isDarkMode: boolean;
}

export const SignatureShowcase: React.FC<SignatureShowcaseProps> = ({
  onAddToOrder,
  onReservePlatter,
  isDarkMode,
}) => {
  const signaturePlatterItem: MenuItem = {
    id: 'sigri-banjara-feast-platter',
    name: 'Charcoal Sigri & Banjara Feast Platter',
    category: 'tandoor',
    price: 490,
    isVeg: false,
    tag: 'SIGNATURE CREATION',
    portion: 'Grand Platter (Serves 2-3)',
    description: 'Succulent cuts steeped for 12 hours in roasted cumin, stone-pounded coriander seeds, hung curd, and crushed mountain herbs, kissed by intense red embers on an open tabletop hearth.',
    spiceLevel: 2,
    preparationTime: '18-20 mins',
    pairsWith: 'Char-grilled lemons & Spiced Mint Chutney',
    image: ASSET_IMAGES.sigriKebab,
  };

  return (
    <section
      id="signature-dishes"
      className={`w-full py-16 sm:py-24 relative overflow-hidden transition-colors ${
        isDarkMode ? 'bg-[#141210]' : 'bg-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border transition-colors ${
            isDarkMode
              ? 'bg-[#1C1815] border-[#2C221C]'
              : 'bg-white border-stone-200 shadow-stone-200'
          }`}
        >
          {/* Photo Block */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
            <img
              alt="Chicken Banjara, fiery seekh kebabs and charred spices on clay charcoal grill"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              src={ASSET_IMAGES.sigriKebab}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

            {/* Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-[#F6AD55] font-bold text-xs flex items-center gap-2 border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#C2672B] animate-ping" />
              <Flame className="w-4 h-4 text-[#F6AD55]" />
              <span>HEIRLOOM CLAY OVEN PREPARATION</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2672B] tracking-widest uppercase mb-1">
                <Award className="w-4 h-4 text-[#C2672B]" />
                <span>CHEF SIGNATURE</span>
              </div>

              <h2
                className={`font-serif text-2xl sm:text-3xl lg:text-4xl mt-2 mb-3 font-bold leading-tight ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Charcoal Sigri &amp; Banjara Feast
              </h2>

              <p
                className={`text-sm sm:text-base font-normal mb-6 leading-relaxed font-sans ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                Succulent tender cuts steeped for 12 hours in roasted cumin, stone-pounded coriander seeds, hung yogurt, and crushed mountain herbs, kissed by intense red embers on an open tabletop hearth.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isDarkMode
                        ? 'bg-[#2B221C] text-[#F6AD55]'
                        : 'bg-[#FDF4ED] text-[#C2672B]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className={`font-serif text-base font-bold ${
                        isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                      }`}
                    >
                      Stone-Ground Spice Blends
                    </h4>
                    <p
                      className={`text-xs mt-0.5 font-sans leading-relaxed ${
                        isDarkMode ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      Blended freshly in Bhiwandi using whole roasted black cardamom and dagad phool stone flowers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isDarkMode
                        ? 'bg-[#2B221C] text-[#F6AD55]'
                        : 'bg-[#FDF4ED] text-[#C2672B]'
                    }`}
                  >
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className={`font-serif text-base font-bold ${
                        isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                      }`}
                    >
                      450°C Clay Tandoor Sear
                    </h4>
                    <p
                      className={`text-xs mt-0.5 font-sans leading-relaxed ${
                        isDarkMode ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      Instant intense searing locks natural juices inside while caramelizing crisp, smoky outer edges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isDarkMode
                        ? 'bg-[#2B221C] text-[#F6AD55]'
                        : 'bg-[#FDF4ED] text-[#C2672B]'
                    }`}
                  >
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className={`font-serif text-base font-bold ${
                        isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                      }`}
                    >
                      Served on Live Earthen Sigri
                    </h4>
                    <p
                      className={`text-xs mt-0.5 font-sans leading-relaxed ${
                        isDarkMode ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      Delivered smoking hot directly to your table with char-grilled lemons and spiced mint chutney.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div
              className={`pt-6 border-t mt-6 flex flex-wrap items-center justify-between gap-4 ${
                isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
              }`}
            >
              <div>
                <span className="text-[10px] text-stone-500 block font-sans font-semibold tracking-wider uppercase">
                  GRAND PLATTER (SERVES 2-3)
                </span>
                <span className="font-serif text-3xl font-bold text-[#C2672B] tabular-nums">
                  ₹ 490
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onAddToOrder(signaturePlatterItem)}
                  className="px-5 py-2.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Table</span>
                </button>

                <button
                  onClick={onReservePlatter}
                  className={`px-4 py-2.5 rounded-full font-semibold text-xs tracking-wider transition-all flex items-center gap-1.5 border cursor-pointer ${
                    isDarkMode
                      ? 'bg-[#2B221C] hover:bg-[#362B24] text-stone-200 border-[#713B0C]'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-200'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#C2672B]" />
                  <span>Reserve Platter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
