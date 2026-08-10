import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, HeartHandshake } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'Heritage',
      description: 'Traditional Nigerian ingredients and techniques inspire every dish, honoring indigenous spices and fire-roasted flavors.',
      icon: Flame,
    },
    {
      number: '02',
      title: 'Craft',
      description: 'Every plate is carefully composed, balancing texture, aroma, and visual elegance from flavor creation to presentation.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Atmosphere',
      description: 'A warm, intimate candlelit setting designed for genuine conversations, celebrations, and unforgettable evenings.',
      icon: HeartHandshake,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1A1410] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
              OUR PHILOSOPHY
            </span>
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EDE4] font-normal">
            More Than Dinner. <span className="italic text-[#E8A33D]">It's an Experience.</span>
          </h2>
        </motion.div>

        {/* Feature Cards Grid with Framer Motion Stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                className="bg-[#2A1F18] border border-[#3D2E24] hover:border-[#E8A33D]/60 rounded-sm p-8 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden shadow-xl"
              >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8A33D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-4xl sm:text-5xl text-[#E8A33D]/40 group-hover:text-[#E8A33D] transition-colors font-light">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#1A1410] border border-[#3D2E24] flex items-center justify-center text-[#E8A33D] group-hover:border-[#E8A33D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5EDE4] font-normal mb-4 group-hover:text-[#E8A33D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#8A7A6A] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#3D2E24]/60 text-xs text-[#8A7A6A] font-medium tracking-wider uppercase">
                  ÀYỌ̀ Standard
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

