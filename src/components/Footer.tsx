import React, { useState } from 'react';
import { audioEngine } from './AudioEngine';
import { X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modal, setModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (href: string) => {
    audioEngine.playClick();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Platform', href: '#hero' },
    { label: 'Technology', href: '#technology' },
    { label: 'Applications', href: '#applications' },
    { label: 'About', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-16 sm:pt-20 pb-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 space-y-12">
        {/* Top Row: Logo & Tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/20">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-[0.25em] text-white">
                AETHER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            {/* Tagline */}
            <p className="text-xs font-mono tracking-widest text-white/70 uppercase">
              See Beyond the Surface.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono uppercase tracking-[0.16em] text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="whitespace-nowrap hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Copyright, Privacy Policy, Terms of Use */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/60">
          {/* Copyright: © 2026 AETHER. All rights reserved. */}
          <p>© 2026 AETHER. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                audioEngine.playClick();
                setModal('privacy');
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioEngine.playClick();
                setModal('terms');
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Modals */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-black border-2 border-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                {modal === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
              <button
                onClick={() => setModal(null)}
                className="p-1 rounded text-white hover:opacity-70"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="text-xs text-white/80 space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed pr-2">
              {modal === 'privacy' ? (
                <>
                  <p>
                    AETHER respects the confidentiality of all research inquiries and communications. We collect only contact details submitted directly for communication regarding AETHER-01 optical technology.
                  </p>
                  <p>
                    Submitted data is never sold or shared with external parties.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All materials, design specifications, and optical architecture descriptions for AETHER and AETHER-01 are proprietary intellectual property.
                  </p>
                  <p>
                    Information on this site is provided for informational purposes.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
