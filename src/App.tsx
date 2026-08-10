import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { MenuSection } from './components/MenuSection';
import { ChefStory } from './components/ChefStory';
import { ExperienceSection } from './components/ExperienceSection';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileReserveButton } from './components/MobileReserveButton';
import { FullMenuModal } from './components/FullMenuModal';
import { OrderModal } from './components/OrderModal';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [fullMenuModalOpen, setFullMenuModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const scrollToReservation = () => {
    document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((c) => c.item.id === item.id);
      if (existing) {
        return prevCart.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
    setOrderModalOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <div className="min-h-screen bg-[#1A1410] text-[#F5EDE4] selection:bg-[#E8A33D] selection:text-[#1A1410]">
      {/* Navigation Header */}
      <Navbar
        onReserveClick={scrollToReservation}
        onOrderClick={() => setOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Hero Banner Section */}
      <main>
        <Hero
          onReserveClick={scrollToReservation}
          onExploreMenuClick={scrollToMenu}
        />

        {/* The ÀYỌ̀ Experience Intro */}
        <IntroSection />

        {/* Featured Menu Showcase */}
        <MenuSection
          onViewFullMenuClick={() => setFullMenuModalOpen(true)}
          onSelectDish={() => setFullMenuModalOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Chef's Story */}
        <ChefStory />

        {/* Philosophy & Experience */}
        <ExperienceSection />

        {/* Gallery & Lightbox */}
        <Gallery />

        {/* Reservation Form */}
        <Reservation />

        {/* Location & Opening Hours */}
        <Contact />
      </main>

      {/* Footer & Copyright */}
      <Footer />

      {/* Sticky Mobile Action CTA */}
      <MobileReserveButton
        onReserveClick={scrollToReservation}
        onOrderClick={() => setOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Full Culinary Menu Modal View */}
      <FullMenuModal
        isOpen={fullMenuModalOpen}
        onClose={() => setFullMenuModalOpen(false)}
        onReserveClick={scrollToReservation}
        onAddToCart={handleAddToCart}
      />

      {/* Online Order & Direct Payment Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenMenu={() => setFullMenuModalOpen(true)}
      />
    </div>
  );
}


