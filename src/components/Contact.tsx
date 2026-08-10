import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, X, Compass, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [mapModalOpen, setMapModalOpen] = useState(false);

  const hours = [
    { days: 'Tuesday — Thursday', time: '5:00 PM — 10:30 PM' },
    { days: 'Friday — Saturday', time: '5:00 PM — 11:30 PM' },
    { days: 'Sunday', time: '2:00 PM — 9:00 PM' },
    { days: 'Monday', time: 'Closed', closed: true },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#2A1F18] border-t border-[#3D2E24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Location & Contact Info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#E8A33D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
                FIND US
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EDE4] font-normal mb-8">
              Visit ÀYỌ̀
            </h2>

            {/* Address & Details Cards */}
            <div className="space-y-6 mb-8">
              
              <div className="flex items-start gap-4 p-5 bg-[#1A1410] border border-[#3D2E24] rounded-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-center text-[#E8A33D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#F5EDE4] mb-1">Address</h3>
                  <p className="text-sm text-[#8A7A6A] leading-relaxed">
                    24 Heritage Avenue, Victoria Island <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="tel:+2349078076906"
                  className="flex items-start gap-4 p-5 bg-[#1A1410] border border-[#3D2E24] hover:border-[#E8A33D]/50 rounded-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-center text-[#E8A33D] shrink-0 group-hover:bg-[#E8A33D] group-hover:text-[#1A1410] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#F5EDE4] mb-1">Phone / WhatsApp</h3>
                    <p className="text-sm text-[#8A7A6A] group-hover:text-[#F5EDE4] transition-colors">+234 907 807 6906</p>
                  </div>
                </a>

                <a 
                  href="mailto:abiodunsamuel112@gmail.com"
                  className="flex items-start gap-4 p-5 bg-[#1A1410] border border-[#3D2E24] hover:border-[#E8A33D]/50 rounded-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 flex items-center justify-center text-[#E8A33D] shrink-0 group-hover:bg-[#E8A33D] group-hover:text-[#1A1410] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#F5EDE4] mb-1">Email</h3>
                    <p className="text-sm text-[#8A7A6A] group-hover:text-[#F5EDE4] transition-colors break-all">abiodunsamuel112@gmail.com</p>
                  </div>
                </a>
              </div>

            </div>

            {/* Buttons: Get Directions & Direct WhatsApp */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setMapModalOpen(true)}
                className="inline-flex items-center gap-2.5 bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3.5 rounded-sm transition-all duration-300 text-sm shadow-lg cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>

              <a
                href="https://wa.me/2349078076906?text=Hello%20ÀYỌ̀%20Restaurant,%20I%20would%20like%20to%20make%20an%20inquiry/reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3.5 rounded-sm transition-all duration-300 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Opening Hours Table */}
          <div className="lg:col-span-6 bg-[#1A1410] border border-[#3D2E24] rounded-sm p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#3D2E24]">
              <Clock className="w-6 h-6 text-[#E8A33D]" />
              <h3 className="font-serif text-2xl text-[#F5EDE4]">Opening Hours</h3>
            </div>

            <div className="space-y-5">
              {hours.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-[#3D2E24]/60 last:border-none"
                >
                  <span className="font-sans text-sm text-[#F5EDE4] font-medium">
                    {item.days}
                  </span>
                  <span
                    className={`font-serif text-sm ${
                      item.closed ? 'text-red-400 font-normal' : 'text-[#E8A33D]'
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#3D2E24] text-xs text-[#8A7A6A] flex items-center justify-between">
              <span>Valet parking available</span>
              <span className="text-[#E8A33D] font-medium">Smart Casual Dress Code</span>
            </div>
          </div>

        </div>

      </div>

      {/* Styled Interactive Map Modal */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1410]/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#2A1F18] border border-[#3D2E24] max-w-3xl w-full rounded-sm overflow-hidden shadow-2xl animate-fade-in relative">
            
            {/* Header */}
            <div className="p-5 border-b border-[#3D2E24] flex items-center justify-between bg-[#1A1410]">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#E8A33D]" />
                <h3 className="font-serif text-xl text-[#F5EDE4]">
                  ÀYỌ̀ Location Map — Victoria Island
                </h3>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="p-2 text-[#8A7A6A] hover:text-[#F5EDE4] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stylized Dark Map Visual */}
            <div className="relative h-80 bg-[#1A1410] overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Victoria Island Map Overview"
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />

              {/* Pin Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F18] via-transparent to-transparent" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                <div className="w-12 h-12 rounded-full bg-[#E8A33D] text-[#1A1410] border-2 border-[#1A1410] flex items-center justify-center shadow-2xl">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="bg-[#1A1410] border border-[#E8A33D] px-3 py-1 rounded-sm text-xs text-[#E8A33D] font-serif mt-2 shadow-lg whitespace-nowrap">
                  ÀYỌ̀ — Victoria Island
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="p-6 bg-[#1A1410] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#8A7A6A]">
                24 Heritage Avenue, Victoria Island, Lagos, Nigeria
              </p>

              <a
                href="https://maps.google.com/?q=Victoria+Island+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] text-xs font-medium px-5 py-2.5 rounded-sm transition-colors flex items-center gap-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
