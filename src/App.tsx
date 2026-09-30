import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { SignatureShowcase } from './components/SignatureShowcase';
import { MenuSection } from './components/MenuSection';
import { NightJourneySection } from './components/NightJourneySection';
import { FamilySection } from './components/FamilySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { CallToTableSection } from './components/CallToTableSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import { GalleryModal } from './components/GalleryModal';
import { MenuItem, OrderItem } from './types';

export default function App() {
  const isDarkMode = true; // Dark mode only as requested
  const [activeTab, setActiveTab] = useState('home');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [orderTrayOpen, setOrderTrayOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute item counts for the menu buttons
  const orderItemsMap = orderItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.item.id] = (acc[item.item.id] || 0) + item.quantity;
    return acc;
  }, {});

  const totalOrderCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToOrder = (menuItem: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((oi) => oi.item.id === menuItem.id);
      if (existing) {
        return prev.map((oi) =>
          oi.item.id === menuItem.id ? { ...oi, quantity: oi.quantity + 1 } : oi
        );
      }
      return [...prev, { item: menuItem, quantity: 1, spicePreference: 'Medium' }];
    });
    showToast(`Added ${menuItem.name} to Table Tray`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((oi) => {
          if (oi.item.id === itemId) {
            const nextQty = oi.quantity + delta;
            return nextQty > 0 ? { ...oi, quantity: nextQty } : null;
          }
          return oi;
        })
        .filter((oi): oi is OrderItem => oi !== null);
    });
  };

  const handleUpdateSpice = (itemId: string, spice: OrderItem['spicePreference']) => {
    setOrderItems((prev) =>
      prev.map((oi) => (oi.item.id === itemId ? { ...oi, spicePreference: spice } : oi))
    );
  };

  const handleClearTray = () => {
    setOrderItems([]);
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'gallery') {
      setGalleryModalOpen(true);
      return;
    }
    if (tabId === 'reservation-concierge') {
      setReservationModalOpen(true);
      return;
    }
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCallConcierge = () => {
    window.location.href = 'tel:+919323387207';
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#141210] text-[#E6E2DE] selection:bg-[#C2672B] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#1C1917] border border-[#C2672B] text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#C2672B] animate-ping" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setOrderTrayOpen(true)}
            className="ml-2 text-[#F6AD55] hover:underline font-bold"
          >
            View Tray →
          </button>
        </div>
      )}

      {/* Global Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenOrderTray={() => setOrderTrayOpen(true)}
        orderCount={totalOrderCount}
      />

      {/* Main Content Sections */}
      <main id="home" className="w-full pt-16 sm:pt-20">
        {/* 1. Cinematic Hero Section */}
        <HeroSection
          onExploreMenu={() => handleSelectTab('menu')}
          onOpenDirections={() => {
            const locEl = document.getElementById('location');
            if (locEl) locEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenReservation={() => setReservationModalOpen(true)}
          onAddToOrder={handleAddToOrder}
          isDarkMode={isDarkMode}
        />

        {/* 2. Heritage Story */}
        <StorySection isDarkMode={isDarkMode} />

        {/* 3. The Highway Sanctuary Experience & Seating */}
        <ExperienceSection
          onReserveGazebo={() => setReservationModalOpen(true)}
          isDarkMode={isDarkMode}
        />

        {/* 4. Signature Creation: Charcoal Sigri & Banjara Feast */}
        <SignatureShowcase
          onAddToOrder={handleAddToOrder}
          onReservePlatter={() => setReservationModalOpen(true)}
          isDarkMode={isDarkMode}
        />

        {/* 5. The Flavours: Highway Specialties Menu */}
        <MenuSection
          onAddToOrder={handleAddToOrder}
          orderItemsMap={orderItemsMap}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenOrderTray={() => setOrderTrayOpen(true)}
          onCallKitchen={handleCallConcierge}
          isDarkMode={isDarkMode}
        />

        {/* 6. Night Journey: The 4:00 PM to 4:00 AM Cycle */}
        <NightJourneySection isDarkMode={isDarkMode} />

        {/* 7. Family Haven: Built For Generations To Gather */}
        <FamilySection
          onReserveGazebo={() => setReservationModalOpen(true)}
          isDarkMode={isDarkMode}
        />

        {/* 8. Guest Stories & Social Proof */}
        <ReviewsSection isDarkMode={isDarkMode} />

        {/* 9. Interactive Route Planning & Location */}
        <LocationSection isDarkMode={isDarkMode} />

        {/* 10. Final Call to Table */}
        <CallToTableSection
          onOpenReservation={() => setReservationModalOpen(true)}
          onCallConcierge={handleCallConcierge}
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenOrderTray={() => setOrderTrayOpen(true)}
        onOpenReservation={() => setReservationModalOpen(true)}
        orderCount={totalOrderCount}
        isDarkMode={isDarkMode}
      />

      {/* Reservation Concierge Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        isDarkMode={isDarkMode}
      />

      {/* Table Order Tray Drawer */}
      <OrderTrayDrawer
        isOpen={orderTrayOpen}
        onClose={() => setOrderTrayOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateSpice={handleUpdateSpice}
        onClearTray={handleClearTray}
        isDarkMode={isDarkMode}
      />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
