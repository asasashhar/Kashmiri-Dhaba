import React, { useState } from 'react';
import { OrderItem } from '../types';
import { ShoppingBag, Check, Plus, Minus, X, MessageSquare, Utensils, Flame } from 'lucide-react';

interface OrderTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onUpdateSpice: (itemId: string, spice: OrderItem['spicePreference']) => void;
  onClearTray: () => void;
  isDarkMode: boolean;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onUpdateSpice,
  onClearTray,
  isDarkMode,
}) => {
  const [diningMode, setDiningMode] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [carOrTable, setCarOrTable] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderReceiptId, setOrderReceiptId] = useState('');

  if (!isOpen) return null;

  const subtotal = orderItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + tax;

  const handlePlaceOrder = () => {
    if (orderItems.length === 0) return;
    const ref = `KASH-ORDER-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderReceiptId(ref);
    setOrderPlaced(true);
  };

  const handleDone = () => {
    setOrderPlaced(false);
    onClearTray();
    onClose();
  };

  const getWhatsAppMessage = () => {
    let msg = `*Kashmira Dhaba Order Request (%23${orderReceiptId || 'PRE-ORDER'})*%0A`;
    msg += `Type: ${diningMode === 'dine-in' ? 'Dine-In Table Order' : 'Highway Express Takeaway'}%0A`;
    if (carOrTable) msg += `Vehicle/Table: ${carOrTable}%0A`;
    msg += `%0A*Items:*%0A`;
    orderItems.forEach((oi) => {
      msg += `• ${oi.quantity}x ${oi.item.name} (₹${oi.item.price * oi.quantity}) - [${oi.spicePreference || 'Medium'}]%0A`;
    });
    msg += `%0A*Total:* ₹${grandTotal}%0A`;
    msg += `Prepared fresh at Bhinar, Nashik Highway.`;
    return msg;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-md h-full flex flex-col justify-between shadow-2xl overflow-hidden border-l transition-colors ${
          isDarkMode
            ? 'bg-[#141210] border-[#2C221C] text-white'
            : 'bg-white border-stone-200 text-stone-900'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-5 border-b flex items-center justify-between ${
            isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-[#FAF8F5] border-stone-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDarkMode ? 'bg-[#2B221C] text-[#F6AD55]' : 'bg-[#FDF4ED] text-[#C2672B]'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3
                className={`font-serif text-xl font-bold ${
                  isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                }`}
              >
                Table Order Tray
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                {orderItems.reduce((acc, curr) => acc + curr.quantity, 0)} Items Selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {orderPlaced ? (
          <div className="flex-1 p-6 sm:p-8 text-center flex flex-col justify-center items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C2672B] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <span className="text-xs font-bold text-[#C2672B] tracking-widest uppercase font-sans">
              ORDER TRANSMITTED
            </span>
            <h4
              className={`font-serif text-2xl font-bold ${
                isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
              }`}
            >
              Preparing Earthen Charcoal Order
            </h4>
            <p className="text-xs text-stone-500 font-sans max-w-xs leading-relaxed">
              Receipt: <span className="text-[#C2672B] font-mono font-bold">{orderReceiptId}</span>. The sigri chef has received your preparation ticket.
            </p>

            <div
              className={`w-full p-4 rounded-2xl border text-left text-xs font-sans space-y-2 ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex justify-between text-stone-500">
                <span>Dining Mode:</span>
                <span className="font-semibold capitalize text-stone-800">{diningMode}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Total Amount:</span>
                <span className="text-[#C2672B] font-bold text-sm tabular-nums">₹{grandTotal}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Estimated Prep:</span>
                <span className="font-semibold text-stone-800">15-20 Mins</span>
              </div>
            </div>

            <div className="w-full space-y-2.5 pt-3">
              <a
                href={`https://wa.me/919323387207?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-bold text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp Kitchen</span>
              </a>
              <button
                onClick={handleDone}
                className="w-full py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Done / Back to Menu
              </button>
            </div>
          </div>
        ) : orderItems.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center text-stone-400 space-y-3">
            <Utensils className="w-12 h-12 text-stone-300" />
            <p
              className={`font-serif text-xl font-bold ${
                isDarkMode ? 'text-stone-200' : 'text-stone-800'
              }`}
            >
              Your table tray is empty
            </p>
            <p className="text-xs max-w-xs font-sans text-stone-500 leading-relaxed">
              Explore our charcoal sigri kebabs, slow-braised mutton handi, and fragrant dum biryani to start a feast.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#C2672B] text-white text-xs font-bold font-sans hover:bg-[#A8531D] shadow-sm"
            >
              Browse Specialties
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {/* Dining Mode selector */}
            <div
              className={`grid grid-cols-2 gap-2 p-1.5 rounded-2xl border ${
                isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-stone-100 border-stone-200'
              }`}
            >
              <button
                type="button"
                onClick={() => setDiningMode('dine-in')}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  diningMode === 'dine-in'
                    ? 'bg-[#C2672B] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Dine-In Table</span>
              </button>
              <button
                type="button"
                onClick={() => setDiningMode('takeaway')}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  diningMode === 'takeaway'
                    ? 'bg-[#C2672B] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Highway Takeaway</span>
              </button>
            </div>

            {/* Vehicle or Table info */}
            <div>
              <label className="block text-[11px] font-sans font-bold text-stone-500 uppercase mb-1">
                {diningMode === 'dine-in' ? 'Table / Gazebo Name' : 'Vehicle Reg. / Car Model'}
              </label>
              <input
                type="text"
                placeholder={diningMode === 'dine-in' ? 'e.g. Gazebo 4 / Sharma' : 'e.g. MH 04 AB 1234 (Silver Creta)'}
                value={carOrTable}
                onChange={(e) => setCarOrTable(e.target.value)}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#C2672B] ${
                  isDarkMode
                    ? 'bg-[#1C1815] border-[#2C221C] text-white'
                    : 'bg-stone-50 border-stone-200 text-stone-900'
                }`}
              />
            </div>

            {/* Item list */}
            <div className="space-y-3 pt-1">
              {orderItems.map((oi) => (
                <div
                  key={oi.item.id}
                  className={`p-3.5 rounded-2xl border flex flex-col gap-2.5 transition-colors ${
                    isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4
                        className={`font-serif text-sm font-bold ${
                          isDarkMode ? 'text-[#F4EFE6]' : 'text-stone-900'
                        }`}
                      >
                        {oi.item.name}
                      </h4>
                      <span className="text-[11px] text-stone-500 font-mono">
                        ₹{oi.item.price} each
                      </span>
                    </div>
                    <span className="font-serif text-base font-bold text-[#C2672B] tabular-nums">
                      ₹{oi.item.price * oi.quantity}
                    </span>
                  </div>

                  {/* Quantity & Spice customization */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Spice selector */}
                    <div className="flex items-center gap-1">
                      {(['Mild', 'Medium', 'Dhaba Spicy'] as const).map((sp) => (
                        <button
                          key={sp}
                          type="button"
                          onClick={() => onUpdateSpice(oi.item.id, sp)}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-colors ${
                            (oi.spicePreference || 'Medium') === sp
                              ? 'bg-[#C2672B] text-white'
                              : isDarkMode
                              ? 'bg-[#2B221C] text-stone-400 hover:text-white'
                              : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                          }`}
                        >
                          {sp}
                        </button>
                      ))}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center bg-[#C2672B] text-white rounded-full p-0.5 shadow-sm">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(oi.item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-white hover:bg-black/20 rounded-full"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold tabular-nums">
                        {oi.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(oi.item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-white hover:bg-black/20 rounded-full"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer with totals */}
        {!orderPlaced && orderItems.length > 0 && (
          <div
            className={`p-4 sm:p-5 border-t space-y-3 font-sans ${
              isDarkMode ? 'bg-[#1C1815] border-[#2C221C]' : 'bg-[#FAF8F5] border-stone-200'
            }`}
          >
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Item Subtotal:</span>
                <span className="tabular-nums font-semibold text-stone-800">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>GST (5%):</span>
                <span className="tabular-nums font-semibold text-stone-800">₹{tax}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold pt-1.5 border-t border-stone-200">
                <span>Total Payable:</span>
                <span className="text-xl text-[#C2672B] font-bold tabular-nums">
                  ₹{grandTotal}
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-3.5 sm:py-4 rounded-full bg-[#C2672B] hover:bg-[#A8531D] text-white font-extrabold text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              <span>Send Pre-Order to Kitchen</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
