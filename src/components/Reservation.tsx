import React, { useState } from 'react';
import { ReservationFormData } from '../types';
import { Calendar as CalendarIcon, Clock, Users, User, Phone, Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '7:00 PM',
    partySize: '2 Guests',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeOptions = [
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
  ];

  const partyOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5 Guests',
    '6 Guests',
    '7+ Guests (Private Dining)',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter a contact phone number.';
    if (!formData.date) newErrors.date = 'Please select a reservation date.';
    if (!formData.time) newErrors.time = 'Please select a dining time.';
    if (!formData.partySize) newErrors.partySize = 'Please select party size.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '7:00 PM',
      partySize: '2 Guests',
      specialRequests: '',
    });
    setErrors({});
  };

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-[#1A1410] relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E8A33D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8A33D] font-medium">
              TABLE RESERVATIONS
            </span>
            <span className="w-6 h-[1px] bg-[#E8A33D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EDE4] font-normal mb-4">
            Your Table Awaits.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8A7A6A] font-light max-w-xl mx-auto italic">
            “Join us for an evening of bold flavors, warm hospitality, and contemporary Nigerian dining.”
          </p>
        </div>

        {/* Reservation Card / Form Container */}
        <div className="bg-[#2A1F18] border border-[#3D2E24] rounded-sm p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Success State Card */
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D] flex items-center justify-center text-[#E8A33D] mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5EDE4] font-normal mb-3">
                Reservation Request Received
              </h3>

              <p className="font-sans text-base text-[#F5EDE4]/90 font-light max-w-md mx-auto mb-8">
                Thank you, <span className="font-semibold text-[#E8A33D]">{formData.fullName}</span>. Our team will contact you shortly at <span className="text-[#F5EDE4]">{formData.phone}</span> to confirm your table.
              </p>

              {/* Summary Details Box */}
              <div className="bg-[#1A1410] border border-[#3D2E24] rounded-sm p-6 max-w-lg mx-auto text-left mb-8 space-y-3 text-sm text-[#8A7A6A]">
                <div className="flex justify-between border-b border-[#3D2E24]/60 pb-2">
                  <span>Guest Name:</span>
                  <span className="text-[#F5EDE4] font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#3D2E24]/60 pb-2">
                  <span>Date & Time:</span>
                  <span className="text-[#F5EDE4] font-medium">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#3D2E24]/60 pb-2">
                  <span>Party Size:</span>
                  <span className="text-[#F5EDE4] font-medium">{formData.partySize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-[#E8A33D] font-medium">Victoria Island, Lagos</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-8 py-3 rounded-sm transition-colors text-sm cursor-pointer"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#E8A33D]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-[#1A1410] border ${
                      errors.fullName ? 'border-red-500' : 'border-[#3D2E24] focus:border-[#E8A33D]'
                    } text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder-[#8A7A6A]`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#E8A33D]" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 907 807 6906"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#1A1410] border ${
                      errors.phone ? 'border-red-500' : 'border-[#3D2E24] focus:border-[#E8A33D]'
                    } text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder-[#8A7A6A]`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2 flex items-center gap-2">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#E8A33D]" /> Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#1A1410] border ${
                      errors.date ? 'border-red-500' : 'border-[#3D2E24] focus:border-[#E8A33D]'
                    } text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors`}
                  />
                  {errors.date && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#E8A33D]" /> Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#1A1410] border border-[#3D2E24] focus:border-[#E8A33D] text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#1A1410] text-[#F5EDE4]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#E8A33D]" /> Party Size *
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full bg-[#1A1410] border border-[#3D2E24] focus:border-[#E8A33D] text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors"
                  >
                    {partyOptions.map((p) => (
                      <option key={p} value={p} className="bg-[#1A1410] text-[#F5EDE4]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F5EDE4] font-medium mb-2">
                  Special Requests / Dietary Allergies (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Anniversary, dietary restrictions, quiet seating preferences..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#1A1410] border border-[#3D2E24] focus:border-[#E8A33D] text-[#F5EDE4] text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder-[#8A7A6A] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium py-4 rounded-sm transition-all duration-300 shadow-xl shadow-[#E8A33D]/10 text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Securing Your Request...</span>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Request a Reservation</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#8A7A6A] font-light">
                * For parties of 8 or more or private venue hire, please contact us directly at <a href="mailto:abiodunsamuel112@gmail.com" className="text-[#E8A33D] hover:underline">abiodunsamuel112@gmail.com</a> or WhatsApp <a href="https://wa.me/2349078076906" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+234 907 807 6906</a>.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
