import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ParticlesBackground } from './ParticlesBackground';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-1 shadow-sm' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-28">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Happy Dental Care Logo" className="h-20 w-auto object-contain transition-transform hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight text-primary">Happy</span>
            <span className="font-sans font-semibold text-sm tracking-widest text-secondary uppercase -mt-1">Dental Care</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#appointment" className="btn-primary py-2.5 px-6 text-sm">
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-slate-50">
      <ParticlesBackground />
      {/* Background Elements - Fluid Aurora with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[0%] right-[-10%] w-[700px] h-[700px] bg-teal-400/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0], x: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: y3 }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0], x: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-emerald-300/20 rounded-[40%_60%_70%_30%] blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Calendar size={16} />
            <span>Open for Appointments</span>
          </div>
          <h1 className="heading-lg mb-6">
            Your Smile, <br />
            <span className="text-gradient">Our Priority.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Experience world-class dental care with Happy Dental Care. We combine advanced technology with a gentle touch to give you the smile you deserve.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#appointment" className="btn-primary">Book Now</a>
            <a href="#services" className="px-8 py-4 border-2 border-slate-200 rounded-full font-semibold hover:border-primary hover:text-primary transition-all">Our Services</a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary">5+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-slate-500">Happy Patients</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-secondary">4.5/5</div>
              <div className="text-sm text-slate-500">Google Rating</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center py-8"
        >
          <div className="relative w-full max-w-[500px] mx-auto">

            {/* Teal offset shadow card (depth layer) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-primary/30 blur-sm" />

            {/* Dot grid — top right */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 opacity-30 z-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #0d9488 1.5px, transparent 1.5px)',
                backgroundSize: '10px 10px',
              }}
            />
            {/* Dot grid — bottom left */}
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 opacity-30 z-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #0d9488 1.5px, transparent 1.5px)',
                backgroundSize: '10px 10px',
              }}
            />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed border-primary/30 z-0"
            />

            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square z-10">
              <img
                src="smile-lady-image.png"
                alt="Perfect Smile"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-teal-900/30 to-transparent" />
            </div>

            {/* Floating Phone Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-8 z-20"
            >
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl rounded-2xl px-4 py-3 hover:bg-white transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-600 rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Emergency 24/7</div>
                  <div className="text-sm font-bold text-secondary">+91 99999 99999</div>
                </div>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
