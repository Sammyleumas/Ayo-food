import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import jollofHeroImg from '../assets/images/nigerian_jollof_rice_1786377865954.jpg';

export const IntroSection: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#1A1410] relative overflow-hidden">
      {/* Background Accent subtle glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E8A33D]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side (Shows first on mobile, right side on desktop) */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="relative">
              {/* Main Decorative Frame */}
              <div className="relative rounded-sm overflow-hidden border border-[#3D2E24] shadow-2xl group">
                <img
                  src={jollofHeroImg}
                  alt="Authentic Nigerian Smokey Party Jollof Rice with Fried Plantain"
                  className="w-full h-[400px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/80 via-transparent to-transparent opacity-60" />
              </div>


              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 bg-[#2A1F18] border border-[#3D2E24] p-4 rounded-sm shadow-xl max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#8A7A6A] font-medium">
                    Victoria Island, Lagos
                  </span>
                  <span className="font-serif text-sm text-[#F5EDE4]">
                    Curated Regional Ingredients
                  </span>
                </div>
              </div>

              {/* Golden Corner Accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#E8A33D] pointer-events-none" />
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6 lg:order-1 flex flex-col items-start">
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#E8A33D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
                THE ÀYỌ̀ EXPERIENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EDE4] leading-tight mb-6">
              Nigerian soul. <br />
              <span className="italic text-[#E8A33D]">Contemporary expression.</span>
            </h2>

            {/* Golden Divider */}
            <div className="w-16 h-0.5 bg-[#E8A33D] mb-8" />

            {/* Paragraph Text */}
            <p className="font-sans text-base sm:text-lg text-[#F5EDE4]/85 leading-relaxed font-light mb-6">
              “ÀYỌ̀ brings the richness of Nigerian culinary heritage to the modern table. From smoky peppers and fragrant spices to cherished local ingredients, every dish is designed to feel familiar yet entirely new.”
            </p>

            <p className="font-sans text-sm sm:text-base text-[#8A7A6A] leading-relaxed font-light mb-8">
              Named after the Yoruba word for joy, our dining room is built around the timeless African tradition of gathering over fire, flavor, and deep conversation. Here, age-old recipes from Lagos, Enugu, and Kano meet modern culinary precision.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#3D2E24] w-full">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#E8A33D] block font-semibold mb-1">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8A7A6A] block">
                  Artisanal & Locally Sourced
                </span>
              </div>

              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#E8A33D] block font-semibold mb-1">
                  Seasonal
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8A7A6A] block">
                  Tasting & À La Carte
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
