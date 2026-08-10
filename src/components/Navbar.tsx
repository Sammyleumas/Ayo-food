import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
  onOrderClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick, onOrderClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1A1410]/95 backdrop-blur-md py-4 border-b border-[#3D2E24] shadow-2xl'
            : 'bg-gradient-to-b from-[#1A1410]/90 via-[#1A1410]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex flex-col items-start focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F5EDE4] group-hover:text-[#E8A33D] transition-colors">
                ÀYỌ̀
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8A7A6A] group-hover:text-[#F5EDE4] transition-colors -mt-1 font-sans">
                Contemporary Dining
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm tracking-wide text-[#F5EDE4]/90 hover:text-[#E8A33D] transition-colors py-1 group font-medium"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8A33D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Reserve & Order Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOrderClick}
                className="bg-[#2A1F18] hover:bg-[#3D2E24] text-[#F5EDE4] border border-[#E8A33D]/50 hover:border-[#E8A33D] font-medium px-4 py-2.5 rounded-sm transition-all duration-300 flex items-center gap-2 text-sm tracking-wide cursor-pointer relative"
              >
                <ShoppingBag className="w-4 h-4 text-[#E8A33D]" />
                <span>Order Online</span>
                {cartCount > 0 && (
                  <span className="bg-[#E8A33D] text-[#1A1410] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center -mr-1">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={onReserveClick}
                className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-5 py-2.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#E8A33D]/10 flex items-center gap-2 text-sm tracking-wide cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onOrderClick}
                className="bg-[#2A1F18] border border-[#E8A33D]/50 p-2 rounded-sm text-[#E8A33D] relative cursor-pointer"
                title="View Order Basket"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#E8A33D] text-[#1A1410] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-md text-[#F5EDE4] hover:text-[#E8A33D] hover:bg-[#2A1F18] transition-colors focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1410]/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto pt-24' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          <div className="border-b border-[#3D2E24] pb-4 mb-2">
            <span className="font-serif text-3xl font-bold tracking-wider text-[#F5EDE4]">
              ÀYỌ̀
            </span>
            <p className="text-xs text-[#8A7A6A] mt-1 italic">
              “Where Nigerian Heritage Meets Contemporary Taste.”
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-2xl text-[#F5EDE4] hover:text-[#E8A33D] transition-colors py-2 flex items-center justify-between border-b border-[#2A1F18]"
              >
                <span>{link.name}</span>
                <span className="text-[#8A7A6A] text-sm">01</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#3D2E24] flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOrderClick();
            }}
            className="w-full bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium py-3 rounded-sm transition-colors text-center text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online & Pay (Opay)</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onReserveClick();
            }}
            className="w-full bg-[#2A1F18] border border-[#3D2E24] hover:bg-[#3D2E24] text-[#F5EDE4] font-medium py-3 rounded-sm transition-colors text-center text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E8A33D]" />
            <span>Reserve a Table</span>
          </button>
          
          <div className="text-center text-xs text-[#8A7A6A] pt-2">
            Victoria Island, Lagos • Direct Transfer: Opay 9078076906
          </div>
        </div>
      </div>
    </>
  );
};
