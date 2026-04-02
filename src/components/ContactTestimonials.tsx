import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Star, Quote, Send, MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Shield } from 'lucide-react';

/* ─── Google Logo SVG ─────────────────────────────────────── */
const GoogleLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

/* ─── Testimonial Data ────────────────────────────────────── */
const testimonials = [
  {
    name: "Siva Dangeti",
    initials: "SD",
    avatarGradient: "from-violet-500 to-purple-700",
    content: "The doctor is so good and the treatment had done good and the treatment is best from any dental clinic I visited. Will definitely come back!",
    rating: 5,
    time: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    avatarGradient: "from-rose-400 to-pink-600",
    content: "I was very nervous about my root canal, but Dr. John made me feel completely at ease. Painless procedure and outstanding aftercare. Highly recommend!",
    rating: 5,
    time: "1 month ago",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    avatarGradient: "from-blue-500 to-cyan-600",
    content: "Best dental clinic in the area! Incredibly clean, modern equipment, and staff is super caring. My smile has transformed completely. Thank you Dr. Naveen!",
    rating: 5,
    time: "3 weeks ago",
  },
  {
    name: "Ananya Reddy",
    initials: "AR",
    avatarGradient: "from-emerald-400 to-teal-600",
    content: "Got my braces done here and the entire journey was smooth. The team is very professional and the results are beyond my expectations. Absolutely worth it!",
    rating: 5,
    time: "2 months ago",
  },
  {
    name: "Kiran Patel",
    initials: "KP",
    avatarGradient: "from-amber-400 to-orange-600",
    content: "Took my kids here for their first dental visit. The staff was so gentle and patient with them. The kids actually enjoyed the visit — says a lot about the care here.",
    rating: 5,
    time: "5 days ago",
  },
  {
    name: "Divya Suresh",
    initials: "DS",
    avatarGradient: "from-fuchsia-500 to-pink-700",
    content: "Teeth whitening done here and wow — the results are stunning! The procedure was quick, comfortable, and the price was very reasonable. Highly recommended.",
    rating: 5,
    time: "1 week ago",
  },
];

const ratingBars = [
  { stars: 5, pct: 88 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

/* ─── Animated Rating Bar ─────────────────────────────────── */
const RatingBar = ({ stars, pct, inView }: { stars: number; pct: number; inView: boolean }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-white/60 w-4 text-right">{stars}</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg,#FBBC05,#F9A825)" }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${pct}%` : 0 }}
        transition={{ duration: 1.2, delay: (5 - stars) * 0.12, ease: "easeOut" }}
      />
    </div>
    <span className="text-white/40 w-6 text-right text-xs">{pct}%</span>
  </div>
);

/* ─── Star Row ────────────────────────────────────────────── */
const StarRow = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24"
        fill={i < rating ? "#FBBC05" : "rgba(255,255,255,0.15)"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const galleryCategories = ["All", "Clinic", "Treatments", "Equipment"];

const galleryImages = [
  {
    url: "/reception.jpeg",
    category: "Clinic",
    title: "Reception Area",
    size: "small"
  },
  // {
  //   url: "/treatment-before-after.jpeg",
  //   category: "Treatments",
  //   title: "Smile Transformation",
  //   size: "small"
  // },
  {
    url: "/treatment-procedure-1.jpeg",
    category: "Treatments",
    title: "Expert Care",
    size: "small"
  },
  {
    url: "/treatment-procedure-2.jpeg",
    category: "Treatments",
    title: "Advanced Procedures",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    category: "Equipment",
    title: "Digital X-Ray",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    category: "Equipment",
    title: "Dental Chair",
    size: "small"
  }
];

export const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryInView = useInView(summaryRef, { once: true, margin: "-80px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="section-padding bg-secondary text-white overflow-hidden relative"
    >
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20,184,166,0.13), transparent 40%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-5 py-2 mb-6"
          >
            <GoogleLogo size={18} />
            <span className="text-sm font-semibold text-white/80">Google Reviews</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            What Our
            <span className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] to-[#4285F4] bg-clip-text text-transparent"> Patients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-lg"
          >
            Real verified experiences from our patients on Google
          </motion.p>
        </div>

        {/* ── Overall Rating Summary Card ─────────────────────── */}
        <motion.div
          ref={summaryRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10 p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #4285F4, transparent)" }} />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, #EA4335, transparent)" }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

              {/* Left: big score */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <GoogleLogo size={36} />
                  <span className="text-white/50 text-sm font-medium">Google</span>
                </div>
                <div className="text-8xl font-black leading-none bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  4.5
                </div>
                <div className="flex gap-1 mt-3 mb-2">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} width="22" height="22" viewBox="0 0 24 24"
                      fill={s <= 4 ? "#FBBC05" : "url(#halfStar)"}>
                      <defs>
                        <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="50%" stopColor="#FBBC05" />
                          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="text-white/50 text-sm font-medium">500+ Happy Patients</div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-green-500/15 border border-green-500/30 rounded-full px-4 py-1.5">
                  <Shield size={12} className="text-green-400" />
                  <span className="text-green-400 text-xs font-semibold">Verified Reviews</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-40 bg-white/10" />

              {/* Right: rating bars */}
              <div className="flex-1 w-full space-y-3">
                {ratingBars.map(({ stars, pct }) => (
                  <RatingBar key={stars} stars={stars} pct={pct} inView={summaryInView} />
                ))}
                <div className="pt-3 text-white/30 text-xs">
                  Based on verified patient reviews collected on Google Maps
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Review Cards Grid ──────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 p-6 overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Subtle hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />

              {/* Top row: avatar + name + Google logo */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  {(t as any).image ? (
                    <img
                      src={(t as any).image}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
                    />
                  ) : (
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/20`}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white text-sm leading-tight">{t.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.time}</div>
                  </div>
                </div>
                {/* Google logo – dim by default, full on hover */}
                <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <GoogleLogo size={20} />
                </div>
              </div>

              {/* Stars */}
              <div className="mb-3 relative z-10">
                <StarRow rating={t.rating} size={15} />
              </div>

              {/* Review text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 relative z-10">
                "{t.content}"
              </p>

              {/* Verified badge */}
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-2 relative z-10">
                <svg className="w-3.5 h-3.5 text-[#34A853] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
                <span className="text-white/40 text-xs">Verified Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://share.google/t48QgTQXTdXDDRy4q"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-secondary font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm"
          >
            <GoogleLogo size={20} />
            View all reviews on Google
            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = galleryImages.filter(
    img => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Visual Tour
          </motion.span>
          <h2 className="heading-md mb-4">Our Modern Facility</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our state-of-the-art dental clinic designed for your comfort, safety, and the highest standards of hygiene.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                key={img.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                  }`}
                onClick={() => setSelectedImage(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.category}
                  </span>
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.title}
                  </h3>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </motion.button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export const Contact = () => {
  const whatsappNumber = '919999999999'; // Happy Dental Care WhatsApp

  const [formState, setFormState] = useState('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'General Checkup',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const text = [
      `👋 *New Appointment Request — Happy Dental Care*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `🦷 *Service:* ${form.service}`,
      `📅 *Preferred Date:* ${form.date || 'Not specified'}`,
      form.message ? `💬 *Message:* ${form.message}` : '',
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setFormState('success');
    }, 600);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div id="appointment" className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-10">
              Have questions or want to book an appointment? Fill out the form or use our contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">Our Location</div>
                  <p className="text-slate-500">123 Dental Street, Medical Hub, <br />City Name, State 560001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">Call Us</div>
                  <p className="text-slate-500">+91 98858 50974</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">Email Us</div>
                  <p className="text-slate-500">info@naveendental.com <br />appointments@naveendental.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">Working Hours</div>
                  <p className="text-slate-500">Mon - Sat: 9:00 AM - 8:00 PM <br />Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-premium border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full -z-10" />
            <h3 className="text-2xl font-bold mb-2">Book an Appointment</h3>
            <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
              <MessageCircle size={16} className="text-green-500" />
              Your request will be sent directly via WhatsApp
            </p>

            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={36} />
                </div>
                <h4 className="text-xl font-bold mb-2">Sent via WhatsApp! 🎉</h4>
                <p className="text-slate-500">WhatsApp should have opened with your appointment details. We'll reply as soon as possible!</p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', service: 'General Checkup', date: '', message: '' }); }}
                  className="mt-8 text-primary font-semibold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      required name="name" type="text" value={form.name} onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      required name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary appearance-none cursor-pointer"
                  >
                    <option>General Checkup</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                    <option>Teeth Whitening</option>
                    <option>Root Canal</option>
                    <option>Kids Dentistry</option>
                    <option>Dental Crowns</option>
                    <option>Laser Dentistry</option>
                    <option>Dentures</option>
                    <option>Smile Makeover</option>
                    <option>Tooth Decay Treatment</option>
                    <option>Invisalign</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input
                    name="date" type="date" value={form.date} onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary"
                  />
                </div>
                <div className="mt-6 mb-8">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary resize-none"
                    placeholder="Tell us about your concern..."
                  />
                </div>
                <button
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full py-4 px-8 rounded-full font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-200 disabled:opacity-60"
                >
                  {formState === 'submitting' ? 'Opening WhatsApp...' : (
                    <>
                      {/* WhatsApp SVG Logo */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
