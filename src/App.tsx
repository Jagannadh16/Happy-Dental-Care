/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Hero } from './components/HeaderHero';
import { Services, About } from './components/ServicesAbout';
import { Testimonials, Gallery, Contact } from './components/ContactTestimonials';
import { Footer } from './components/Footer';
import { GlobalParallaxBackground } from './components/GlobalParallaxBackground';
import { CustomCursor } from './components/CustomCursor';
import { SmileGallery } from './components/SmileGallery';

export default function App() {
  return (
    <div className="min-h-screen relative z-0">
      <CustomCursor />
      <GlobalParallaxBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <SmileGallery />
        <Gallery />
        <Testimonials />
        <Contact />

        {/* Map Section */}
        <section className="h-[450px] w-full relative overflow-hidden">
          {/* Full-width map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.89!2d81.9268661!3d16.8633697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3797003ce7d3fd%3A0x3e429a5ad2ea1b4c!2sNaveen%20dental%20care!5e0!3m2!1sen!2sin!4v1709672400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Open in Maps — top left pill */}
          <a
            href="https://maps.app.goo.gl/Nkoh7JyxKm1XqrYz6"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all border border-slate-200"
          >
            Open in Maps
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>

          {/* Info card overlay — left side */}
          <div className="absolute top-14 left-4 z-20 bg-white rounded-2xl shadow-xl p-6 max-w-[260px]">
            <h3 className="font-bold text-xl text-secondary mb-2">Visit Our Clinic</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              VW7H+74M, Reddy Vaari St, Tarawani Peta, Mandapeta, Andhra Pradesh 533308<br />
            </p>
            <a
              href="https://maps.app.goo.gl/Nkoh7JyxKm1XqrYz6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
