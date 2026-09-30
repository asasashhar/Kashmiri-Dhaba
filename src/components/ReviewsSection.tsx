import React, { useState } from 'react';
import { GUEST_REVIEWS } from '../data/dhabaData';
import { GuestReview } from '../types';
import { Star, Edit3, ExternalLink, Sparkles, X, Check } from 'lucide-react';

interface ReviewsSectionProps {
  isDarkMode: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ isDarkMode }) => {
  const [reviews, setReviews] = useState<GuestReview[]>(GUEST_REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newTripType, setNewTripType] = useState('ROAD TRIPPER · MUMBAI');
  const [newRating, setNewRating] = useState(5);
  const [newDish, setNewDish] = useState('Chicken Banjara Kebab');
  const [newText, setNewText] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const added: GuestReview = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      tripType: newTripType,
      rating: newRating,
      text: newText.trim(),
      date: 'Just now',
      favoriteDish: newDish,
    };

    setReviews([added, ...reviews]);
    setNewAuthor('');
    setNewText('');
    setShowAddForm(false);
  };

  return (
    <section
      id="reviews"
      className={`w-full py-16 sm:py-24 relative transition-colors ${
        isDarkMode ? 'bg-[#141210]' : 'bg-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rating Highlight Banner */}
        <div
          className={`rounded-3xl p-6 sm:p-8 md:p-10 mb-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border transition-colors ${
            isDarkMode
              ? 'bg-[#1C1815] border-[#2C221C]'
              : 'bg-white border-stone-200 shadow-stone-200'
          }`}
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#C2672B] flex flex-col items-center justify-center text-white shadow-md shrink-0">
              <span className="font-serif text-2xl sm:text-3xl font-bold leading-none tabular-nums">
                4.2
              </span>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2672B] tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Road-Tripper Proof</span>
              </div>
              <h3
                className={`font-serif text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Over 8,400+ Verified Traveler Reviews
              </h3>
              <p
                className={`text-xs sm:text-sm mt-0.5 font-sans ${
                  isDarkMode ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                Top-rated highway haven on the Mumbai-Nashik NH-3 Corridor on Google Maps.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className={`flex-1 sm:flex-initial px-5 py-3 rounded-full text-xs font-bold tracking-wider font-sans border transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                isDarkMode
                  ? 'bg-[#2B221C] hover:bg-[#362B24] text-[#F6AD55] border-[#713B0C]'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-200'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              <span>Share Highway Tale</span>
            </button>

            <a
              href="https://maps.google.com/?q=Kashmira+Dhaba+Bhinar+Nashik+Highway"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white text-xs font-bold tracking-wider font-sans transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Add Review Form */}
        {showAddForm && (
          <form
            onSubmit={handleSubmitReview}
            className={`mb-12 p-6 sm:p-8 rounded-3xl border shadow-xl space-y-4 animate-fadeIn ${
              isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-white border-stone-200'
            }`}
          >
            <div
              className={`flex items-center justify-between pb-3 border-b ${
                isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
              }`}
            >
              <h4
                className={`font-serif text-xl font-bold ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Share Your Highway Tale at Kashmira
              </h4>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Shinde"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className={`w-full border rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#C2672B] ${
                    isDarkMode
                      ? 'bg-[#211A14] border-[#2C221C] text-white'
                      : 'bg-stone-50 border-stone-200 text-stone-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                  Traveler Type
                </label>
                <select
                  value={newTripType}
                  onChange={(e) => setNewTripType(e.target.value)}
                  className={`w-full border rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#C2672B] ${
                    isDarkMode
                      ? 'bg-[#211A14] border-[#2C221C] text-white'
                      : 'bg-stone-50 border-stone-200 text-stone-900'
                  }`}
                >
                  <option value="ROAD TRIPPER · MUMBAI">Road Tripper · Mumbai</option>
                  <option value="FAMILY PILGRIMAGE · SHIRDI">Family Pilgrimage · Shirdi</option>
                  <option value="MIDNIGHT FOODIE · THANE">Midnight Foodie · Thane</option>
                  <option value="BIKERS CLUB · NASHIK HIGHWAY">Bikers Club · Nashik Highway</option>
                  <option value="REGULAR COMMUTER">Regular Commuter</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-1 pt-1.5 text-[#C2672B]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="cursor-pointer hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newRating
                            ? 'fill-[#C2672B] text-[#C2672B]'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-stone-500 ml-2 font-mono font-bold">
                    ({newRating}/5)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                Favorite Dish / Memory
              </label>
              <input
                type="text"
                placeholder="e.g. Chicken Banjara & Garlic Naan at 2:00 AM under amber lanterns"
                value={newDish}
                onChange={(e) => setNewDish(e.target.value)}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#C2672B] ${
                  isDarkMode
                    ? 'bg-[#211A14] border-[#2C221C] text-white'
                    : 'bg-stone-50 border-stone-200 text-stone-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                Your Review
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell other travelers about the charcoal taste, gazebo seating, or tandoori naans..."
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#C2672B] ${
                  isDarkMode
                    ? 'bg-[#211A14] border-[#2C221C] text-white'
                    : 'bg-stone-50 border-stone-200 text-stone-900'
                }`}
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-5 py-2.5 rounded-full bg-stone-100 text-xs font-semibold text-stone-700 hover:bg-stone-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Post Highway Tale</span>
              </button>
            </div>
          </form>
        )}

        {/* Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className={`p-6 sm:p-7 rounded-3xl shadow-sm flex flex-col justify-between border transition-all duration-300 group hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-[#1C1815] border-[#2C221C] hover:border-[#C2672B]/50'
                  : 'bg-white border-stone-200 hover:border-[#C2672B]/50 shadow-stone-200'
              }`}
            >
              <div>
                <div className="flex text-[#C2672B] mb-3.5 items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rev.rating)
                            ? 'fill-[#C2672B] text-[#C2672B]'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">{rev.date}</span>
                </div>

                <p
                  className={`text-sm italic leading-relaxed font-serif ${
                    isDarkMode ? 'text-stone-200' : 'text-stone-800'
                  }`}
                >
                  “{rev.text}”
                </p>
              </div>

              <div
                className={`pt-4 mt-5 border-t ${
                  isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
                }`}
              >
                <div>
                  <span
                    className={`font-serif text-base block font-bold ${
                      isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                    }`}
                  >
                    {rev.author}
                  </span>
                  <span className="text-[10px] text-stone-500 font-sans font-bold tracking-wider uppercase mt-0.5 block">
                    {rev.tripType}
                  </span>
                </div>

                {rev.favoriteDish && (
                  <div
                    className={`mt-2.5 text-[11px] px-3 py-1 rounded-full inline-block font-sans ${
                      isDarkMode
                        ? 'bg-[#211A14] text-[#F6AD55]'
                        : 'bg-[#FDF4ED] text-[#C2672B]'
                    }`}
                  >
                    Craves: {rev.favoriteDish}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
