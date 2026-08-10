import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1410]/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F5EDE4] z-20">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-[#E8A33D]">ÀYỌ̀ Gallery</span>
          <span className="text-xs text-[#8A7A6A]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-[#2A1F18] border border-[#3D2E24] text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center my-auto">
        <div className="relative rounded-sm overflow-hidden border border-[#3D2E24] bg-[#1A1410] max-h-[70vh] shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="text-center mt-6 max-w-xl">
          <h3 className="font-serif text-2xl text-[#F5EDE4] font-normal mb-1">
            {currentItem.title}
          </h3>
          <p className="text-sm text-[#8A7A6A] font-light">
            {currentItem.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-[#2A1F18]/80 border border-[#3D2E24] text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-[#2A1F18]/80 border border-[#3D2E24] text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
