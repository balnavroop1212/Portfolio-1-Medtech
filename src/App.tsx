import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { TechnologySection } from './components/TechnologySection';
import { ProcessSection } from './components/ProcessSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { DesignSection } from './components/DesignSection';
import { EvidenceSection } from './components/EvidenceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollCanvas } from './components/ScrollCanvas';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'vision', 'technology', 'process', 'applications', 'design', 'research', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-[#f2a044] selection:text-black relative">
      {/* Background Frame Sequence Scroll Animation */}
      <ScrollCanvas />

      {/* 1. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main id="story-track" className="relative z-10 scroll-pt-[100px] pb-[70vh]">
        {/* 2. Hero Section — Animation */}
        <HeroSection />

        {/* 3. Our Vision */}
        <VisionSection />

        {/* 4. The Technology */}
        <TechnologySection />

        {/* 5. How It Works */}
        <ProcessSection />

        {/* 6. Applications */}
        <ApplicationsSection />

        {/* 7. Design & Engineering */}
        <DesignSection />

        {/* 8. Research & Validation */}
        <EvidenceSection />
      </main>

      {/* 9. Contact Section */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
