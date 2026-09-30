import React, { useState } from 'react';
import { DhabaLogo } from './DhabaLogo';
import { ReservationData } from '../types';
import { Calendar, Check, X, MessageSquare } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [partySize, setPartySize] = useState(4);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('20:30');
  const [seatingPreference, setSeatingPreference] = useState<ReservationData['seatingPreference']>('family-gazebo');
  const [notes, setNotes] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !phone.trim()) return;

    const newRes: ReservationData = {
      id: `KASH-${Math.floor(1000 + Math.random() * 9000)}`,
      guestName: guestName.trim(),
      phone: phone.trim(),
      partySize,
      date,
      timeSlot,
      seatingPreference,
      notes: notes.trim(),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setConfirmedReservation(newRes);
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setGuestName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const timeOptions = [
    '16:30', '17:30', '18:30', '19:30', '20:30', '21:30',
    '22:30', '23:30', '00:30', '01:30', '02:30', '03:30'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto border transition-colors ${
          isDarkMode
            ? 'bg-[#1C1815] border-[#2C221C] text-white'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        <div className="relative z-10">
          <div
            className={`flex items-center justify-between pb-4 border-b ${
              isDarkMode ? 'border-[#2C221C]' : 'border-stone-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <DhabaLogo size="sm" isDarkMode={isDarkMode} showWordmark={false} />
              <div>
                <h3
                  className={`font-serif text-xl sm:text-2xl font-bold ${
                    isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                  }`}
                >
                  Reserve Table or Gazebo
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Bhinar, Nashik Highway · Kitchen Open Till 4:00 AM
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {confirmedReservation ? (
            /* Confirmation State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C2672B] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#C2672B] tracking-widest uppercase font-sans">
                  TABLE CONCIERGE CONFIRMED
                </span>
                <h4
                  className={`font-serif text-2xl font-bold mt-1 ${
                    isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                  }`}
                >
                  We are preparing your seating, {confirmedReservation.guestName}!
                </h4>
                <p className="text-xs text-stone-500 mt-1 font-sans">
                  Your table is prioritized for tonight along the Mumbai-Nashik corridor.
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border text-left space-y-2 text-xs font-sans ${
                  isDarkMode ? 'bg-[#211A14] border-[#2C221C]' : 'bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-stone-500">Booking Ref:</span>
                  <span className="text-[#C2672B] font-mono font-bold text-sm">
                    {confirmedReservation.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Seating Atmosphere:</span>
                  <span className="font-semibold capitalize">
                    {confirmedReservation.seatingPreference.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Party Size:</span>
                  <span className="font-semibold">
                    {confirmedReservation.partySize} Guests
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date &amp; Expected Arrival:</span>
                  <span className="font-semibold">
                    {confirmedReservation.date} at {confirmedReservation.timeSlot}
                  </span>
                </div>
                {confirmedReservation.notes && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Special Notes:</span>
                    <span className="italic">{confirmedReservation.notes}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href={`https://wa.me/919323387207?text=Hello%20Kashmira%20Dhaba,%20I%20have%20booked%20table%20${confirmedReservation.id}%20under%20${encodeURIComponent(confirmedReservation.guestName)}%20for%20${confirmedReservation.partySize}%20guests%20at%20${confirmedReservation.timeSlot}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="py-4 space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samir Patil"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className={`w-full border rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C2672B] ${
                      isDarkMode
                        ? 'bg-[#211A14] border-[#2C221C] text-white'
                        : 'bg-stone-50 border-stone-200 text-stone-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98200 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full border rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C2672B] ${
                      isDarkMode
                        ? 'bg-[#211A14] border-[#2C221C] text-white'
                        : 'bg-stone-50 border-stone-200 text-stone-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Party Size
                  </label>
                  <div
                    className={`flex items-center border rounded-xl p-1 ${
                      isDarkMode ? 'bg-[#211A14] border-[#2C221C]' : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setPartySize(Math.max(1, partySize - 1))}
                      className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 hover:bg-stone-300 font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-[#C2672B] tabular-nums">
                      {partySize} Guests
                    </span>
                    <button
                      type="button"
                      onClick={() => setPartySize(Math.min(30, partySize + 1))}
                      className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 hover:bg-stone-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:border-[#C2672B] ${
                      isDarkMode
                        ? 'bg-[#211A14] border-[#2C221C] text-white'
                        : 'bg-stone-50 border-stone-200 text-stone-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                    Expected Arrival
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:border-[#C2672B] ${
                      isDarkMode
                        ? 'bg-[#211A14] border-[#2C221C] text-white'
                        : 'bg-stone-50 border-stone-200 text-stone-900'
                    }`}
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t} {parseInt(t) >= 16 ? 'PM' : 'AM'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1.5">
                  Seating Atmosphere Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'family-gazebo', label: 'Private Gazebo' },
                    { id: 'timber-pergola', label: 'Timber Pergola' },
                    { id: 'starlit-lawn', label: 'Garden Lawn' },
                    { id: 'ac-family-suite', label: 'AC Family Hall' },
                  ].map((seat) => (
                    <button
                      type="button"
                      key={seat.id}
                      onClick={() => setSeatingPreference(seat.id as ReservationData['seatingPreference'])}
                      className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                        seatingPreference === seat.id
                          ? 'bg-[#C2672B] border-[#C2672B] text-white shadow-sm'
                          : isDarkMode
                          ? 'bg-[#211A14] border-[#2C221C] text-stone-400 hover:text-white'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span className="text-xs">{seat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-stone-500 font-bold uppercase tracking-wider mb-1">
                  Special Requests / Dietary
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jain preparations, toddler high-chair, driving from Thane"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`w-full border rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C2672B] ${
                    isDarkMode
                      ? 'bg-[#211A14] border-[#2C221C] text-white'
                      : 'bg-stone-50 border-stone-200 text-stone-900'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-extrabold text-xs tracking-widest uppercase transition-all shadow-md cursor-pointer"
                >
                  Confirm Table Request
                </button>
                <p className="text-[10px] text-center text-stone-500 mt-2 font-light">
                  No advance cancellation charges. Table held for 25 minutes past arrival time.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
