import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#2A1F18] border-y border-[#3D2E24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
              A GLIMPSE INSIDE
            </span>
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EDE4] font-normal mb-4">
            The Table. The Room. The Moment.
          </h2>

          <p className="font-sans text-base text-[#8A7A6A] font-light italic">
            Immerse yourself in the dark warm candlelit luxury of ÀYỌ̀.
          </p>
        </motion.div>

        {/* Gallery Grid with Framer Motion Stagger */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-[#1A1410] border border-[#3D2E24] hover:border-[#E8A33D]/60 rounded-sm overflow-hidden cursor-pointer shadow-xl transition-all duration-500 h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-[#E8A33D] font-medium block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5EDE4] font-normal group-hover:text-[#E8A33D] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1A1410]/80 border border-[#3D2E24] group-hover:border-[#E8A33D] flex items-center justify-center text-[#E8A33D] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Pop-up */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};

