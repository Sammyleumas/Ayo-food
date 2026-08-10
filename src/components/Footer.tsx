import React, { useState } from 'react';
import { Send, CheckCircle2, Instagram, Facebook, Video as TikTokIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1410] border-t border-[#3D2E24] text-[#F5EDE4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3D2E24]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <span className="font-serif text-3xl font-bold tracking-wider text-[#F5EDE4] block mb-2">
              ÀYỌ̀
            </span>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#E8A33D] font-medium mb-4">
              Contemporary Dining
            </p>
            <p className="font-sans text-sm text-[#8A7A6A] font-light leading-relaxed max-w-sm mb-6">
              “Where Nigerian Heritage Meets Contemporary Taste.” An upscale dining space celebrating fire, spice, and modern African culinary craftsmanship.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2A1F18] border border-[#3D2E24] flex items-center justify-center text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#2A1F18] border border-[#3D2E24] flex items-center justify-center text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#2A1F18] border border-[#3D2E24] flex items-center justify-center text-[#F5EDE4] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-[#F5EDE4] mb-4">Navigation & Contact</h3>
            <ul className="space-y-3 text-sm text-[#8A7A6A]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E8A33D] transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#3D2E24]/60 space-y-2 text-xs text-[#8A7A6A]">
              <p>
                <a href="tel:+2349078076906" className="hover:text-[#E8A33D] transition-colors block">
                  📞 +234 907 807 6906
                </a>
              </p>
              <p>
                <a href="mailto:abiodunsamuel112@gmail.com" className="hover:text-[#E8A33D] transition-colors block break-all">
                  ✉️ abiodunsamuel112@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-xl text-[#F5EDE4] mb-2">Stay at the Table</h3>
            <p className="font-sans text-xs text-[#8A7A6A] font-light mb-6">
              “Get occasional updates, new menu announcements, and invitations.”
            </p>

            {subscribed ? (
              <div className="bg-[#2A1F18] border border-[#E8A33D]/50 p-4 rounded-sm flex items-center gap-3 text-sm text-[#E8A33D]">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you for joining our private table list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#2A1F18] border border-[#3D2E24] focus:border-[#E8A33D] text-[#F5EDE4] text-xs sm:text-sm px-4 py-3 rounded-sm outline-none flex-1 placeholder-[#8A7A6A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#E8A33D] hover:bg-[#d49232] text-[#1A1410] font-medium px-6 py-3 rounded-sm transition-colors text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-red-400 text-xs">{error}</p>}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7A6A] gap-4">
          <p>© 2026 ÀYỌ̀. All rights reserved.</p>
          <p className="font-serif italic text-[#8A7A6A]">
            Victoria Island, Lagos • Contemporary Nigerian Fusion
          </p>
        </div>

      </div>
    </footer>
  );
};
