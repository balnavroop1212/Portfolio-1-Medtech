import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const EvidenceSection: React.FC = () => {
  const scrollToContact = () => {
    audioEngine.playClick();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="research"
      className="relative w-full min-h-screen flex flex-col justify-end items-end pb-20 sm:pb-24 bg-transparent text-white pointer-events-none"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 md:px-12 flex justify-end pointer-events-auto">
        {/* Docked Bottom Right Card - Completely away from central camera animation */}
        <div className="max-w-[480px] w-full p-8 sm:p-10 rounded-[28px] bg-gradient-to-br from-[#0f1014]/85 to-[#16181e]/70 backdrop-blur-2xl border border-white/12 border-t-white/30 shadow-2xl transition-all hover:-translate-y-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f2a044]/50 bg-[#f2a044]/20 backdrop-blur-md mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f2a044] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#f2a044] uppercase font-semibold">
              RESEARCH &amp; VALIDATION · 07
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            Innovation <br />
            Deserves Clarity.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#ebeef5]/90 leading-relaxed font-normal mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            We believe meaningful technology is supported by transparent development, responsible research, and rigorous evidence appropriate to its intended use.
          </p>

          {/* Button: Discuss the Technology */}
          <div>
            <button
              onClick={scrollToContact}
              className="h-12 px-7 rounded-full bg-[#f2a044] text-white hover:bg-[#ffb05c] text-xs font-mono font-bold tracking-[0.14em] uppercase transition-all shadow-[0_6px_20px_rgba(242,160,68,0.4)] flex items-center gap-2.5 cursor-pointer"
            >
              <span>Discuss the Technology</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
