import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Volume2 } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(true);

  const navItems = [
    { label: 'Platform', href: '#hero' },
    { label: 'About', href: '#vision' },
    { label: 'Technology', href: '#technology' },
    { label: 'How It Works', href: '#process' },
    { label: 'Applications', href: '#applications' },
  ];

  const handleScrollTo = (href: string) => {
    audioEngine.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    const isPlaying = audioEngine.toggleLoop ? audioEngine.toggleLoop() : true;
    setAudioActive(isPlaying);
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6 sm:px-11 pointer-events-none transition-all">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('#hero');
          }}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#f6f5f0]/90 backdrop-blur-md border border-[#111215]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-lg font-extrabold tracking-[0.22em] text-[#111215] hover:bg-white hover:border-[#f2a044]/40 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all"
        >
          <span>AETHER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044] shadow-[0_0_8px_#f2a044]" />
        </a>

        {/* Center Floating Capsule Pill Menu (Nexora style) */}
        <nav className="hidden md:flex items-center gap-7 px-8 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-black/8 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className={`relative text-[13.5px] font-medium transition-colors ${
                  isActive ? 'text-[#111215] font-semibold' : 'text-[#555760] hover:text-[#111215]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f2a044]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Capsule Buttons */}
        <div className="flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            onClick={toggleAudio}
            className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur-lg border border-black/8 flex items-center justify-center transition-all ${
              audioActive ? 'text-[#f2a044]' : 'text-[#888]'
            } hover:bg-white shadow-sm`}
            title="Toggle Mechanical Audio"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Start / Contact CTA Pill */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#f2a044] hover:bg-[#e38f30] text-white text-[13.5px] font-semibold shadow-md shadow-[#f2a044]/30 hover:shadow-lg hover:shadow-[#f2a044]/40 transition-all group"
          >
            <span>Get in Touch</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              audioEngine.playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="md:hidden p-2 rounded-xl bg-white/80 backdrop-blur-lg border border-black/8 text-[#111215]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/10 shadow-xl pointer-events-auto flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.href);
              }}
              className="text-sm font-medium text-[#222] py-2 border-b border-black/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#contact');
            }}
            className="mt-2 w-full py-2.5 rounded-full bg-[#f2a044] text-white text-sm font-semibold text-center"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};
