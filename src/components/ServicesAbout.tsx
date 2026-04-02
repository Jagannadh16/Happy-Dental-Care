import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Clock, Heart, Microscope, X, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────
   Custom Dental SVG Illustrations
───────────────────────────────────────────── */
const ToothSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M20 10 C14 10 10 16 10 22 C10 30 14 36 16 44 C17 49 19 54 22 54 C25 54 26 48 28 44 C29 41 31 41 32 41 C33 41 35 41 36 44 C38 48 39 54 42 54 C45 54 47 49 48 44 C50 36 54 30 54 22 C54 16 50 10 44 10 C40 10 37 13 32 13 C27 13 24 10 20 10Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 10 C24 10 28 18 32 18 C36 18 40 10 40 10" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ImplantSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <rect x="22" y="8" width="20" height="18" rx="6" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <path d="M32 26 L32 56" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 32 L38 32M24 38 L40 38M26 44 L38 44M28 50 L36 50" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BracesSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <rect x="6" y="14" width="12" height="20" rx="4" fill="#e6fafa" stroke="#0d9488" strokeWidth="2" />
    <rect x="20" y="12" width="10" height="22" rx="4" fill="#e6fafa" stroke="#0d9488" strokeWidth="2" />
    <rect x="34" y="12" width="10" height="22" rx="4" fill="#e6fafa" stroke="#0d9488" strokeWidth="2" />
    <rect x="46" y="14" width="12" height="20" rx="4" fill="#e6fafa" stroke="#0d9488" strokeWidth="2" />
    <line x1="6" y1="25" x2="58" y2="25" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="10" y="22" width="6" height="6" rx="1.5" fill="#0d9488" />
    <rect x="23" y="22" width="4" height="6" rx="1.5" fill="#0d9488" />
    <rect x="37" y="22" width="4" height="6" rx="1.5" fill="#0d9488" />
    <rect x="49" y="22" width="6" height="6" rx="1.5" fill="#0d9488" />
  </svg>
);

const WhiteningSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M20 14 C14 14 10 20 10 26 C10 34 14 40 16 46 C17 50 19 54 22 54 C25 54 26 49 28 46 C29 43 31 43 32 43 C33 43 35 43 36 46 C38 49 39 54 42 54 C45 54 47 50 48 46 C50 40 54 34 54 26 C54 20 50 14 44 14 C40 14 37 17 32 17 C27 17 24 14 20 14Z" fill="white" stroke="#0d9488" strokeWidth="2.5" />
    <line x1="50" y1="8" x2="50" y2="4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <line x1="56" y1="12" x2="60" y2="10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="18" x2="62" y2="18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <line x1="56" y1="24" x2="60" y2="26" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="18" r="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
  </svg>
);

const RootCanalSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M20 10 C14 10 10 16 10 22 C10 30 14 36 16 44 C17 49 19 54 22 54 C25 54 26 48 28 44 C29 41 31 41 32 41 C33 41 35 41 36 44 C38 48 39 54 42 54 C45 54 47 49 48 44 C50 36 54 30 54 22 C54 16 50 10 44 10 C40 10 37 13 32 13 C27 13 24 10 20 10Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <path d="M27 38 L24 54M37 38 L40 54" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
    <ellipse cx="32" cy="28" rx="7" ry="9" fill="white" stroke="#0d9488" strokeWidth="1.5" />
  </svg>
);

const KidsSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M18 12 C12 12 8 19 8 26 C8 35 13 42 15 50 C16 54 18 58 21 58 C24 58 25 52 27 49 C28 46 30 46 32 46 C34 46 36 46 37 49 C39 52 40 58 43 58 C46 58 48 54 49 50 C51 42 56 35 56 26 C56 19 52 12 46 12 C42 12 39 15 32 15 C25 15 22 12 18 12Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <circle cx="25" cy="28" r="2.5" fill="#0d9488" />
    <circle cx="39" cy="28" r="2.5" fill="#0d9488" />
    <path d="M25 36 Q32 42 39 36" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const CrownSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M8 44 L8 20 L20 32 L32 12 L44 32 L56 20 L56 44 Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="8" y="44" width="48" height="8" rx="3" fill="#0d9488" />
    <circle cx="32" cy="28" r="3" fill="#0d9488" />
    <circle cx="20" cy="32" r="2" fill="#0d9488" opacity="0.5" />
    <circle cx="44" cy="32" r="2" fill="#0d9488" opacity="0.5" />
  </svg>
);

const LaserSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <rect x="8" y="24" width="32" height="16" rx="6" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="4" fill="#0d9488" />
    <path d="M40 32 L58 22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 32 L58 32" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M40 32 L58 42" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <circle cx="58" cy="22" r="2.5" fill="#ef4444" />
  </svg>
);

const DenturesSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M10 20 Q10 10 32 10 Q54 10 54 20 L54 28 Q54 38 32 38 Q10 38 10 28 Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <rect x="14" y="18" width="8" height="14" rx="3" fill="white" stroke="#0d9488" strokeWidth="1.5" />
    <rect x="24" y="16" width="8" height="16" rx="3" fill="white" stroke="#0d9488" strokeWidth="1.5" />
    <rect x="34" y="16" width="8" height="16" rx="3" fill="white" stroke="#0d9488" strokeWidth="1.5" />
    <rect x="44" y="18" width="8" height="14" rx="3" fill="white" stroke="#0d9488" strokeWidth="1.5" />
    <path d="M10 44 Q10 54 32 54 Q54 54 54 44 L54 36 Q54 46 32 46 Q10 46 10 36 Z" fill="#fecaca" stroke="#0d9488" strokeWidth="1.5" />
  </svg>
);

const SmileMakeoverSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <circle cx="32" cy="32" r="24" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <circle cx="23" cy="25" r="3" fill="#0d9488" />
    <circle cx="41" cy="25" r="3" fill="#0d9488" />
    <path d="M20 37 Q32 50 44 37" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M20 37 Q32 43 44 37" fill="white" stroke="none" />
  </svg>
);

const ToothDecaySVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M20 10 C14 10 10 16 10 22 C10 30 14 36 16 44 C17 49 19 54 22 54 C25 54 26 48 28 44 C29 41 31 41 32 41 C33 41 35 41 36 44 C38 48 39 54 42 54 C45 54 47 49 48 44 C50 36 54 30 54 22 C54 16 50 10 44 10 C40 10 37 13 32 13 C27 13 24 10 20 10Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2.5" />
    <circle cx="22" cy="22" r="4" fill="#f97316" opacity="0.8" />
    <circle cx="38" cy="18" r="3" fill="#f97316" opacity="0.6" />
    <circle cx="30" cy="30" r="3.5" fill="#f97316" opacity="0.7" />
  </svg>
);

const AlignSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <path d="M8 22 Q8 14 20 14 L44 14 Q56 14 56 22 L56 32 Q56 40 44 42 L20 42 Q8 40 8 32 Z" fill="#e6fafa" stroke="#0d9488" strokeWidth="2" opacity="0.6" />
    <path d="M12 25 Q12 18 22 18 L42 18 Q52 18 52 25 L52 33 Q52 38 42 39 L22 39 Q12 38 12 33 Z" fill="white" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 2" />
    <path d="M16 28 Q32 32 48 28" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

/* ─────────────────────────────────────────────
   Services Data
───────────────────────────────────────────── */
const services = [
  {
    title: 'General Dentistry',
    svg: ToothSVG,
    description: 'Routine checkups, cleanings, and preventative care for all ages.',
    detailedDescription: 'Our general dentistry services are designed to maintain your oral health and prevent future issues. We use advanced diagnostic tools to detect problems early, ensuring a lifetime of healthy smiles.',
    features: ['Professional Teeth Cleaning', 'Digital X-Rays & Diagnostics', 'Oral Cancer Screening', 'Fillings & Sealants'],
  },
  {
    title: 'Dental Implants',
    svg: ImplantSVG,
    description: 'Permanent solutions for missing teeth that look and feel natural.',
    detailedDescription: 'Restore your smile and function with dental implants. Our permanent solutions provide the look, feel, and strength of natural teeth, helping you eat, speak, and smile with full confidence.',
    features: ['Single Tooth Implants', 'All-on-4 Implants', 'Implant-Supported Bridges', 'Bone Grafting'],
  },
  {
    title: 'Orthodontics',
    svg: BracesSVG,
    description: 'Braces and clear aligners to perfectly straighten your teeth.',
    detailedDescription: 'Achieve the perfect alignment with our orthodontic solutions. We offer both traditional braces and modern clear aligners like Invisalign, tailored to your lifestyle and dental needs.',
    features: ['Invisalign Clear Aligners', 'Traditional Metal Braces', 'Ceramic Braces', 'Retainers & Aftercare'],
  },
  {
    title: 'Teeth Whitening',
    svg: WhiteningSVG,
    description: 'Professional whitening for a brighter, more confident smile.',
    detailedDescription: 'Get a noticeably whiter smile in just one visit. Our professional-grade whitening systems deliver fast, dramatic results that over-the-counter strips simply cannot match.',
    features: ['In-Office Laser Whitening', 'Custom Take-Home Trays', 'Shade Consultation', 'Sensitivity-Free Options'],
  },
  {
    title: 'Root Canal',
    svg: RootCanalSVG,
    description: 'Advanced pain-free treatments to save your natural teeth.',
    detailedDescription: 'Save your natural teeth with our advanced endodontic treatments. We use modern techniques and anesthesia to ensure your root canal procedure is as comfortable and pain-free as possible.',
    features: ['Painless Root Canal', 'Endodontic Retreatments', 'Apicoectomy', 'Emergency Dental Care'],
  },
  {
    title: 'Kids Dentistry',
    svg: KidsSVG,
    description: 'Friendly, gentle specialized care for our youngest patients.',
    detailedDescription: 'We make dental visits fun and educational for children. Our pediatric specialists handle the unique dental needs of kids while ensuring they feel safe, comfortable, and at ease.',
    features: ['First Dental Visits', 'Fluoride Treatments', 'Dental Sealants', 'Habit Counseling'],
  },
  {
    title: 'Dental Crowns',
    svg: CrownSVG,
    description: 'Durable crowns to restore broken or decayed teeth.',
    detailedDescription: 'Our custom-crafted dental crowns restore the strength, shape, and appearance of damaged teeth. Using premium ceramic and zirconia materials, every crown is matched perfectly to your natural teeth.',
    features: ['Porcelain Crowns', 'Zirconia Crowns', 'Same-Day CEREC Crowns', 'Crown Over Implant'],
  },
  {
    title: 'Laser Dentistry',
    svg: LaserSVG,
    description: 'Minimally invasive laser treatments for faster healing.',
    detailedDescription: 'Our advanced laser dentistry techniques minimize discomfort, reduce bleeding, and speed up recovery time. Lasers are used for gum treatment, cavity detection, and soft tissue procedures.',
    features: ['Gum Disease Treatment', 'Cavity Detection', 'Soft Tissue Surgery', 'Whitening Activation'],
  },
  {
    title: 'Dentures',
    svg: DenturesSVG,
    description: 'Custom full and partial dentures for a complete smile.',
    detailedDescription: 'Regain your smile and oral function with our custom-fitted dentures. Whether you need full or partial dentures, we craft each set for maximum comfort, aesthetics, and durability.',
    features: ['Full Dentures', 'Partial Dentures', 'Implant-Retained Dentures', 'Denture Relining & Repair'],
  },
  {
    title: 'Smile Makeover',
    svg: SmileMakeoverSVG,
    description: 'Complete cosmetic transformation for your dream smile.',
    detailedDescription: 'Transform your smile with our comprehensive makeover treatments. Whether you want a brighter shade or a complete smile redesign, our specialists use the latest techniques to achieve your goals.',
    features: ['Porcelain Veneers', 'Dental Bonding', 'Gum Contouring', 'Full Smile Design'],
  },
  {
    title: 'Tooth Decay',
    svg: ToothDecaySVG,
    description: 'Early detection and treatment of cavities and decay.',
    detailedDescription: 'Catch and treat tooth decay before it becomes a bigger problem. We use cutting-edge diagnostic tools and tooth-coloured fillings to restore your teeth discreetly and effectively.',
    features: ['Digital Cavity Detection', 'Tooth-Coloured Fillings', 'Inlay & Onlay Restoration', 'Preventive Sealants'],
  },
  {
    title: 'Invisalign',
    svg: AlignSVG,
    description: 'Clear removable aligners for invisible teeth straightening.',
    detailedDescription: 'Straighten your teeth discreetly with Invisalign clear aligners. Virtually invisible and removable, they let you eat, drink, and clean your teeth normally throughout treatment.',
    features: ['Full Invisalign Treatment', 'Teen Aligners', '3D Smile Preview', 'Free Consultation'],
  },
];

/* ─────────────────────────────────────────────
   Services Component
───────────────────────────────────────────── */
export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-bold tracking-wide mb-5 border border-teal-100">
            What We Offer
          </div>
          <h2 className="heading-md mb-4">Our Premium Services</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Comprehensive dental care using state-of-the-art technology for the best outcomes — all under one roof.
          </p>
        </div>

        {/* 6-Column Card Grid — Partha Dental style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {services.map((service, index) => (
            <motion.button
              key={service.title}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center justify-between pt-8 pb-5 px-3 rounded-2xl border border-teal-100 bg-teal-50/60 hover:bg-teal-100/70 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-pointer text-center shadow-sm min-h-[170px]"
            >
              <div className="flex-1 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                <service.svg />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-teal-700 transition-colors duration-300 leading-tight mt-4">
                {service.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Service Detail Modal ── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X size={24} className="text-secondary" />
              </button>

              <div className="p-8 md:p-12">
                <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                  <selectedService.svg />
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedService.detailedDescription}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-bold text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#appointment"
                    onClick={() => setSelectedService(null)}
                    className="btn-primary text-center"
                  >
                    Book Appointment
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="btn-secondary"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─────────────────────────────────────────────
   About Component (unchanged)
───────────────────────────────────────────── */
export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 -translate-y-4 -z-10" />
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/dr-naveen.jpeg"
              alt="Dr. Naveen"
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 glass border border-white/60 p-8 rounded-3xl shadow-premium z-10"
          >
            <div className="text-4xl font-display font-bold mb-1 text-primary">5+</div>
            <div className="text-sm font-semibold text-secondary">Years of Clinical <br /> Excellence</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md mb-6">Meet Dr. John Kumar</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            With over 5 years of experience in advanced dentistry, Dr. John Kumar has established Happy Dental Care as a beacon of excellence in oral healthcare.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            He specializes in Implantology and Cosmetic Dentistry, having completed his BDS from a KIMS Dental College and Hospital in Amalapuram. His philosophy centers on patient comfort and evidence-based treatments.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary"><Shield size={20} /></div>
              <div>
                <div className="font-bold">Certified Expert</div>
                <div className="text-sm text-slate-500">Board Certified Dentist</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary"><Microscope size={20} /></div>
              <div>
                <div className="font-bold">Modern Tech</div>
                <div className="text-sm text-slate-500">Latest Dental Equipment</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary"><Clock size={20} /></div>
              <div>
                <div className="font-bold">Patient First</div>
                <div className="text-sm text-slate-500">Flexible Appointments</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary"><Heart size={20} /></div>
              <div>
                <div className="font-bold">Gentle Care</div>
                <div className="text-sm text-slate-500">Pain-free Procedures</div>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-secondary">Contact Dr. Naveen</a>
        </motion.div>
      </div>
    </section>
  );
};
