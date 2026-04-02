import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Happy Dental Care Logo" className="h-16 w-auto object-contain bg-white rounded p-1" />
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-2xl tracking-tight text-white">Naveen</span>
                <span className="font-sans font-semibold text-sm tracking-widest text-slate-300 uppercase -mt-1">Dental Care</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Providing high-quality dental care with a focus on patient comfort and advanced technology. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-primary transition-colors">General Dentistry</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Root Canal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest dental tips and clinic updates.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 outline-none focus:border-primary transition-colors" />
              <button className="bg-primary p-2 rounded-xl hover:bg-primary-dark transition-colors">
                <MessageCircle size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Happy Dental Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* ── Designer Signature ─────────────────────────────── */}
        <div className="mt-8 flex justify-center">
          <div
            className="group flex flex-col items-center gap-1 cursor-default select-none"
          >
            {/* Micro label */}
            <span
              style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'Inter, sans-serif',
                transition: 'color 0.3s',
              }}
              className="group-hover:[color:rgba(255,255,255,0.55)]"
            >
              Designed by
            </span>

            {/* Two-tone name */}
            <div
              style={{ lineHeight: 1, fontFamily: 'Inter, sans-serif' }}
              className="flex items-baseline gap-[5px]"
            >
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.82)',
                  transition: 'color 0.3s',
                }}
                className="group-hover:[color:rgba(255,255,255,1)]"
              >
                Jagannadh
              </span>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'var(--color-primary, #0ea5e9)',
                  transition: 'color 0.3s',
                }}
                className="group-hover:[color:#38bdf8]"
              >
                Kethineedi
              </span>
            </div>

            {/* Animated underline */}
            <div
              style={{
                height: '1.5px',
                borderRadius: '9999px',
                background: 'var(--color-primary, #0ea5e9)',
                width: '24px',
                transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s',
                opacity: 0.5,
              }}
              className="group-hover:!w-full group-hover:!opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href="tel:+919999999999"
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
        >
          <Phone size={28} />
        </a>
      </div>
    </footer>
  );
};
