import React from 'react';
import { Quote, Award, Flame, Sparkles } from 'lucide-react';
import femaleChefImg from '../assets/images/nigerian_female_chef_1786378744018.jpg';
import maleChefImg from '../assets/images/nigerian_male_chef_1786378758136.jpg';

export const ChefStory: React.FC = () => {
  return (
    <section id="chef" className="py-20 lg:py-28 bg-[#2A1F18] border-y border-[#3D2E24] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8A33D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Dual Chef Portraits (Shows both Nigerian male and female chefs) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Male Chef Portrait */}
              <div className="relative rounded-sm overflow-hidden border border-[#3D2E24] shadow-2xl group">
                <img
                  src={maleChefImg}
                  alt="Chef Abiodun Samuel - Executive Head Chef & Co-Founder"
                  className="w-full h-[280px] sm:h-[380px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[#1A1410]/90 backdrop-blur-md border border-[#3D2E24] rounded-sm text-left">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#E8A33D] font-medium block">
                    Head Chef & Founder
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-[#F5EDE4] font-normal leading-tight">
                    Chef Abiodun Samuel
                  </h3>
                </div>
              </div>

              {/* Female Chef Portrait */}
              <div className="relative rounded-sm overflow-hidden border border-[#3D2E24] shadow-2xl group mt-6 sm:mt-10">
                <img
                  src={femaleChefImg}
                  alt="Chef Amara Okafor - Executive Chef & Culinary Director"
                  className="w-full h-[280px] sm:h-[380px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[#1A1410]/90 backdrop-blur-md border border-[#3D2E24] rounded-sm text-left">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#E8A33D] font-medium block">
                    Culinary Director
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-[#F5EDE4] font-normal leading-tight">
                    Chef Amara Okafor
                  </h3>
                </div>
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#E8A33D]/25 rounded-sm -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

          {/* Chefs' Story & Biography */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#E8A33D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
                THE EXECUTIVE CHEFS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EDE4] leading-tight mb-6">
              Heritage Culinary Duo. <br />
              <span className="italic text-[#E8A33D]">Modern Nigerian Artistry.</span>
            </h2>

            {/* Bio Paragraph 1 */}
            <p className="font-sans text-base sm:text-lg text-[#F5EDE4]/90 font-light leading-relaxed mb-4">
              “Led by Executive Head Chef Abiodun Samuel and Culinary Director Chef Amara Okafor, ÀYỌ̀ brings together two visionary Nigerian chefs committed to elevating West African gastronomy to global fine-dining standards.”
            </p>

            {/* Bio Paragraph 2 */}
            <p className="font-sans text-sm sm:text-base text-[#8A7A6A] font-light leading-relaxed mb-6">
              Chef Abiodun's mastery over firewood embers, traditional Yaji spice blends, and artisanal smoking techniques pairs harmoniously with Chef Amara's modern plating precision and international kitchen background. Together, they reimagine native Nigerian ingredients into multi-sensory culinary masterpieces.
            </p>

            {/* Elegant Pull Quote Box */}
            <div className="relative p-5 sm:p-6 bg-[#1A1410] border-l-2 border-[#E8A33D] rounded-r-sm mb-6 w-full">
              <Quote className="w-7 h-7 text-[#E8A33D]/30 absolute top-4 right-4" />
              <p className="font-serif text-base sm:text-lg text-[#F5EDE4] italic leading-relaxed mb-3">
                “Our vision is simple: honor the roots of West African cuisine while daring to innovate without limits.”
              </p>
              <span className="font-serif text-xs text-[#E8A33D] tracking-widest block font-medium">
                — Chef Abiodun Samuel & Chef Amara Okafor
              </span>
            </div>

            {/* Accolades */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#8A7A6A] pt-4 border-t border-[#3D2E24] w-full">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E8A33D]" />
                <span>African Culinary Trailblazers 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#E8A33D]" />
                <span>Smokey Heritage Excellence</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

