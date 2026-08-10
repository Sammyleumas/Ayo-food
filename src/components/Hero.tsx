import React from 'react';
import { Calendar, Utensils, ChevronDown } from 'lucide-react';
import heroBgImg from '../assets/images/nigerian_beef_suya_1786377889957.jpg';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onExploreMenuClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1410] pt-20"
    >
      {/* Background Image with Warm Dark Vignette & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Authentic Nigerian Spicy Beef Suya Fine Dining"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />

        {/* Dark overlay gradients matching brand colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/75 to-[#1A1410]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410]/90 via-transparent to-[#1A1410]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,20,16,0.6)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-24 flex flex-col items-center">
        {/* Decorative Golden Emblem */}
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 rounded-full bg-[#2A1F18]/80 border border-[#E8A33D]/30 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-pulse" />
          <span className="text-xs font-medium tracking-[0.25em] text-[#E8A33D] uppercase">
            CONTEMPORARY NIGERIAN DINING
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-pulse" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F5EDE4] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Where Heritage Meets the <span className="italic text-[#E8A33D]">Plate.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F5EDE4]/80 max-w-2xl font-light leading-relaxed mb-10">
          A modern expression of Nigerian flavors, crafted with tradition, imagination, and a little fire.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-8 py-4 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-[#E8A33D]/15 flex items-center justify-center gap-2.5 text-base tracking-wide cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Reserve a Table</span>
          </button>

          <button
            onClick={onExploreMenuClick}
            className="w-full sm:w-auto bg-[#2A1F18]/80 hover:bg-[#2A1F18] border border-[#3D2E24] hover:border-[#E8A33D]/50 text-[#F5EDE4] font-medium px-8 py-4 rounded-sm transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2.5 text-base tracking-wide cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-[#E8A33D]" />
            <span>Explore the Menu</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#story"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-[#8A7A6A] hover:text-[#E8A33D] transition-colors cursor-pointer group"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium group-hover:tracking-[0.3em] transition-all">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#E8A33D]" />
      </a>
    </section>
  );
};
